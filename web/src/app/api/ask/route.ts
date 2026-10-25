// POST /api/ask: answer a question from the KD passages with the configured AI (lib/ai), streamed as NDJSON.
//
// Pipeline (lib/answer): understand the question (intent + scope) → retrieve whole matching sections, rules
// and keyword hits → ask for one JSON answer (schema in lib/answer/schema.ts) → validate it against the
// retrieved passages → send it. Citations that weren't retrieved are removed; requirement rows and
// "required" statuses are checked against the cited text.
//
// Request:  { question, history?: [{ question, answer }], ruleIds?: ["BR-REL-001"], selection?: "highlighted text" }
// Response: one JSON object per line —
//   { type: "meta", analysis, sections, omitted }    how the question was read and what was searched
//   { type: "passages", passages }                   the labelled passages [P1]… the answer may cite
//   { type: "text", text }                           raw answer text (JSON) as it is written
//   { type: "answer", answer, report, fallback }     the validated answer
//   { type: "done", status, note, cited, truncated, model, provider }
//   { type: "error", message }
import { getProvider, type ChatMessage } from "@/lib/ai/provider";
import { analyzeQuestion, scopeLabel } from "@/lib/answer/intent";
import { parsePartialJson } from "@/lib/answer/partial-json";
import { SCHEMA_HINT, STRUCTURED_SYSTEM } from "@/lib/answer/schema-prompt";
import { retrieve } from "@/lib/answer/retrieve";
import { ANSWER_JSON_SCHEMA, citedLabels, sectionTexts, validateAnswer, type Answer } from "@/lib/answer/schema";
import { getDoc, getRule, kd } from "@/lib/kd";
import { conflictsChapter } from "@/lib/kd-md";
import { isExtraPassage, showsAll } from "@/lib/scope";
import { passages, passageView } from "@/lib/search";

export const maxDuration = 300;

const MAX_QUESTION = 2000;
const MAX_HISTORY = 6;

interface AskBody {
  question?: unknown;
  history?: { question?: unknown; answer?: unknown }[];
  ruleIds?: unknown;
  selection?: unknown;
}

const str = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");

/** Decisions, conflicts and placeholders that name any of these rules (for providers without prompt caching). */
function openQuestionsFor(brIds: Set<string>): string {
  const hit = (rules: string[]) => rules.some((r) => brIds.has(r));
  const lines = [
    ...kd.decisions.filter((d) => hit(d.rules)).map((d) => `- ${d.id} (decision${d.open ? ", open" : ", resolved"}): ${d.title}. ${d.resolution ? `Resolution: ${d.resolution}` : ""} ${d.question ? `Question: ${d.question}` : ""} Rules: ${d.rules.join(", ")}`),
    ...kd.conflicts.filter((c) => hit(c.rules)).map((c) => `- ${c.id} (conflict, ${c.status}): ${c.topic}. A: ${c.positionA}. B: ${c.positionB}. Resolution: ${c.resolution}`),
    ...kd.placeholders.filter((p) => hit(p.rules)).map((p) => `- ${p.id} (placeholder): ${p.item}. Missing: ${p.missing} (${p.where})`),
  ];
  return lines.length ? lines.join("\n") : "(none of the retrieved rules are named by an open decision, conflict or placeholder)";
}

export async function POST(req: Request) {
  let body: AskBody;
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "Send JSON: { question }" }, { status: 400 });
  }
  const question = str(body.question, MAX_QUESTION);
  if (!question) return Response.json({ error: "question is required" }, { status: 400 });
  const selection = str(body.selection, 4000);
  const ruleIds = Array.isArray(body.ruleIds) ? body.ruleIds.filter((x): x is string => typeof x === "string").slice(0, 10) : [];
  const history = (Array.isArray(body.history) ? body.history : [])
    .map((t) => ({ question: str(t?.question, MAX_QUESTION), answer: str(t?.answer, 8000) }))
    .filter((t) => t.question && t.answer)
    .slice(-MAX_HISTORY);
  const previous = history.at(-1)?.question;

  // 1. Understand the question; follow-ups inherit the previous question's scope.
  const analysis = analyzeQuestion(question, previous);
  for (const id of analysis.ruleIds) if (!ruleIds.includes(id)) ruleIds.push(id);

  // 2. Retrieve. Rules asked about by ID are always kept; working notes only when the switch is on (lib/scope.ts).
  const pinned = ruleIds
    .map((id) => getRule(id))
    .filter((r) => r !== undefined)
    .map((r) => passages.findIndex((p) => p.lineStart <= r.line && r.line <= p.lineEnd))
    .filter((pid) => pid >= 0);
  const all = showsAll(req.headers.get("cookie"));
  const found = retrieve(analysis, { keep: all ? () => true : (p) => !isExtraPassage(p), pinned: [...new Set(pinned)], selection, previous });
  const views = found.ids.map((pid, i) => passageView(pid, `P${i + 1}`));
  const byLabel = new Map(views.map((p) => [p.label, p.text]));
  const sections = sectionTexts(views);

  const ai = getProvider();
  const blocks = views.map((p) => {
    const where = [p.groupTitle, p.docTitle, ...p.path].filter(Boolean).join(" > ");
    return `<passage id="${p.label}" source="${where}" doc_status="${p.docStatus || "-"}" doc_modified="${p.docModified || "-"}">\n${p.text}\n</passage>`;
  });
  const brIds = new Set(views.flatMap((p) => p.brIds));
  const sectionList = found.sections.map((s) => `- ${s.title}${s.doc ? ` (${getDoc(s.doc)?.title})` : ""}${s.side !== undefined ? ` [side ${s.side + 1}]` : ""}${s.included < s.total ? ` — only ${s.included} of ${s.total} passages fit` : ""}`);
  const read = [
    `Question type detected: ${analysis.intent}.`,
    scopeLabel(analysis.scope) ? `Scope detected: ${scopeLabel(analysis.scope)}.` : "No specific asset class, transaction type, listing type or role detected.",
    analysis.sides.length ? `Sides compared: ${analysis.sides.map(scopeLabel).join("  vs  ")}.` : "",
    sectionList.length ? `Whole sections retrieved for this scope:\n${sectionList.join("\n")}` : "",
    found.omitted.passages ? `Retrieval limit: ${found.omitted.passages} more matching passages did not fit and are NOT included; say the list may be incomplete.` : "",
    ...analysis.notes,
  ].filter(Boolean);
  const focus = [
    ruleIds.length ? `The user is asking about: ${ruleIds.join(", ")}.` : "",
    selection ? `The user highlighted this text:\n<selection>\n${selection}\n</selection>` : "",
  ].filter(Boolean);
  // Claude caches the whole conflicts chapter; other providers get the items that name the retrieved rules.
  const cached = ai.id === "anthropic" ? `Conflicts, decisions needed, placeholders and glossary chapter:\n\n${conflictsChapter}` : undefined;
  const openQs = ai.id === "anthropic" ? "" : `Open decisions, conflicts and placeholders that name the retrieved rules:\n${openQuestionsFor(brIds)}\n\n`;
  const messages: ChatMessage[] = [
    ...history.flatMap((t) => [
      { role: "user" as const, content: t.question },
      { role: "assistant" as const, content: t.answer },
    ]),
    {
      role: "user",
      content: `Knowledge-base passages:\n\n${blocks.join("\n\n")}\n\n${openQs}How the question was read:\n${read.join("\n")}\n\n${focus.join("\n\n")}${focus.length ? "\n\n" : ""}Question: ${question}`,
    },
  ];

  const encoder = new TextEncoder();
  const stream = new ReadableStream({
    async start(controller) {
      const send = (event: object) => controller.enqueue(encoder.encode(JSON.stringify(event) + "\n"));
      send({
        type: "meta",
        analysis: { intent: analysis.intent, scope: analysis.scope, scopeLabel: scopeLabel(analysis.scope), inherited: analysis.inherited, sides: analysis.sides.map(scopeLabel) },
        sections: found.sections.map((s) => ({ title: s.title, doc: s.doc, docTitle: s.doc ? getDoc(s.doc)?.title ?? "" : "", href: s.doc && s.group ? `/read/${s.group}/${s.doc}` : "", included: s.included, total: s.total })),
        omitted: found.omitted,
      });
      send({ type: "passages", passages: views });
      if (!ai.configured) {
        send({ type: "error", message: `Ask isn't set up yet: ${ai.setupHint} Search works without it.` });
        controller.close();
        return;
      }
      try {
        let text = "";
        const big = analysis.intent === "requirements" || analysis.intent === "compare";
        const result = await ai.stream(
          {
            system: ai.id === "anthropic" ? STRUCTURED_SYSTEM : `${STRUCTURED_SYSTEM}\n\n${SCHEMA_HINT}`,
            cachedSystem: cached,
            messages,
            maxTokens: big ? 32000 : 16000,
            effort: big ? "high" : "medium",
            json: { name: "kd_answer", schema: ANSWER_JSON_SCHEMA },
            signal: req.signal,
          },
          (t) => {
            text += t;
            send({ type: "text", text: t });
          },
        );
        if (result.stop === "refusal") {
          send({ type: "error", message: "The model declined to answer this question. Try rephrasing it, or use Search." });
          return;
        }
        // 3. Validate. A model that ignored the format still gets a readable answer from its text.
        const parsed = parsePartialJson(text);
        let answer: Answer;
        let report;
        let fallback = false;
        if (parsed && typeof parsed === "object" && ("blocks" in parsed || "summary" in parsed)) {
          ({ answer, report } = validateAnswer(parsed, { passages: byLabel, question, sections }));
        } else if (text.trim() && !text.trim().startsWith("{")) {
          fallback = true;
          ({ answer, report } = validateAnswer(
            { intent: "general", title: question, status: "needs-clarity", statusNote: "The answer couldn't be laid out; shown as text", summary: "", blocks: [{ type: "text", heading: "", body: text.replace(/<think>[\s\S]*?<\/think>/gi, "").trim() }] },
            { passages: byLabel, question },
          ));
        } else {
          send({ type: "error", message: "The answer couldn't be read. Try again, or ask a narrower question. The sources found are listed below." });
          return;
        }
        if (!answer.title) answer.title = question;
        send({ type: "answer", answer, report, fallback });
        send({
          type: "done",
          status: answer.status,
          note: answer.statusNote,
          cited: citedLabels(answer),
          truncated: result.stop === "max_tokens",
          model: result.model,
          provider: ai.label,
        });
      } catch (err) {
        send({ type: "error", message: ai.errorMessage(err) });
      } finally {
        controller.close();
      }
    },
  });
  return new Response(stream, {
    headers: { "Content-Type": "application/x-ndjson; charset=utf-8", "Cache-Control": "no-store" },
  });
}
