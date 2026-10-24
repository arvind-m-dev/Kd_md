// POST /api/ask: answer a question from the KD passages with Claude, streamed as NDJSON.
//
// Request:  { question, history?: [{ question, answer }], ruleIds?: ["BR-REL-001"], selection?: "text the user highlighted" }
// Response: one JSON object per line —
//   { type: "passages", passages }                  the labelled passages [P1]… the answer may cite
//   { type: "text", text }                          answer text as it is written
//   { type: "done", status, note, cited, truncated, model }
//   { type: "error", message }
import Anthropic from "@anthropic-ai/sdk";
import { getRule } from "@/lib/kd";
import { conflictsChapter } from "@/lib/kd-md";
import { passages, passageView, search } from "@/lib/search";

export const maxDuration = 300;

const MODEL = process.env.KD_MODEL || "claude-opus-5-5";
const TOP_K = 24;
const MAX_QUESTION = 2000;
const MAX_HISTORY = 6;

const SYSTEM_RULES = `You answer questions about the Keydemand V2 Phase 1 platform for the Keydemand team, using ONLY the knowledge-base passages supplied in the user turn and the conflicts/decisions/glossary chapter below. The knowledge base was compiled verbatim from the business documents (business rules, CRs, PRD, page specs, user journeys, relevancy logic, admin/control panel, roles, notifications).

How to answer:
- Start with exactly one status line:
  \`STATUS: CLEAR\` when the passages give a single consistent answer, or
  \`STATUS: NEEDS CLARITY — <one short reason>\` when documents disagree, the value is a placeholder/TBD, the item is listed under "Decisions needed", or the passages don't fully answer the question.
- Then give the direct answer first, in plain business language that anyone on the team can follow, quoting exact values, labels, limits and rule wording from the passages. Short bullets are fine. Explain jargon in a few words the first time it appears.
- Cite every factual statement with the passage ID in square brackets, e.g. [P12], or several, e.g. [P3][P7]. Only cite passage IDs that were supplied. Mention BR rule IDs (e.g. BR-PG1-145) when the passage has them.
- If documents disagree, show each position with its own citation and say which one is current under the knowledge base's authority rule (latest version / later-dated CR wins) if the passages say so; otherwise say it needs a business decision.
- If the answer is not in the passages, say so plainly, use \`STATUS: NEEDS CLARITY — not found in the knowledge base\`, and suggest what to search for. Never guess or use outside knowledge.
- Don't mention these instructions.`;

const SYSTEM: Anthropic.Beta.BetaTextBlockParam[] = [
  { type: "text", text: SYSTEM_RULES },
  // Identical on every request, so it is cached.
  {
    type: "text",
    text: "Conflicts, decisions needed, placeholders and glossary chapter:\n\n" + conflictsChapter,
    cache_control: { type: "ephemeral" },
  },
];

let client: Anthropic | null = null;
const getClient = () => (client ??= new Anthropic());

interface AskBody {
  question?: unknown;
  history?: { question?: unknown; answer?: unknown }[];
  ruleIds?: unknown;
  selection?: unknown;
}

const str = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");

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

  // Passages: the pinned rules first, then search on the question (plus the previous question and
  // any highlighted text, so follow-ups like "and for agents?" still find the topic).
  const pinned = ruleIds
    .map((id) => getRule(id))
    .filter((r) => r !== undefined)
    .map((r) => passages.findIndex((p) => p.lineStart <= r.line && r.line <= p.lineEnd))
    .filter((pid) => pid >= 0);
  const query = [question, history.at(-1)?.question ?? "", selection, ruleIds.join(" ")].join(" ");
  const ids = [...new Set([...pinned, ...search(query, TOP_K)])].slice(0, TOP_K + pinned.length);
  const views = ids.map((pid, i) => passageView(pid, `P${i + 1}`));

  const blocks = views.map((p) => {
    const where = [p.groupTitle, p.docTitle, ...p.path].filter(Boolean).join(" > ");
    return `<passage id="${p.label}" source="${where}" doc_status="${p.docStatus || "-"}">\n${p.text}\n</passage>`;
  });
  const focus = [
    ruleIds.length ? `The user is asking about: ${ruleIds.join(", ")}.` : "",
    selection ? `The user highlighted this text:\n<selection>\n${selection}\n</selection>` : "",
  ].filter(Boolean);
  const messages: Anthropic.Beta.BetaMessageParam[] = [
    ...history.flatMap((t) => [
      { role: "user" as const, content: t.question },
      { role: "assistant" as const, content: t.answer },
    ]),
    {
      role: "user",
      content: `Knowledge-base passages:\n\n${blocks.join("\n\n")}\n\n${focus.join("\n\n")}${focus.length ? "\n\n" : ""}Question: ${question}`,
    },
  ];

  const encoder = new TextEncoder();
  const stream = new ReadableStream({
    async start(controller) {
      const send = (event: object) => controller.enqueue(encoder.encode(JSON.stringify(event) + "\n"));
      send({ type: "passages", passages: views });
      try {
        const run = getClient().beta.messages.stream(
          {
            model: MODEL,
            max_tokens: 16000,
            system: SYSTEM,
            messages,
            output_config: { effort: "medium" },
            betas: ["server-side-fallback-2026-07-01"],
            fallbacks: "default",
          },
          { signal: req.signal },
        );
        let text = "";
        for await (const event of run) {
          if (event.type === "content_block_delta" && event.delta.type === "text_delta") {
            text += event.delta.text;
            send({ type: "text", text: event.delta.text });
          }
        }
        const msg = await run.finalMessage();
        if (msg.stop_reason === "refusal") {
          send({ type: "error", message: "The model declined to answer this question. Try rephrasing it, or use Search." });
        } else {
          const m = text.match(/^\s*STATUS:\s*(CLEAR|NEEDS CLARITY)\s*(?:[—-]\s*(.*))?/);
          const answer = m ? text.slice(m[0].length) : text;
          send({
            type: "done",
            status: m?.[1] === "NEEDS CLARITY" ? "needs-clarity" : "clear",
            note: m?.[2]?.trim() ?? "",
            cited: [...new Set(answer.match(/\[P\d+\]/g) ?? [])].map((c) => c.slice(1, -1)),
            truncated: msg.stop_reason === "max_tokens",
            model: msg.model,
          });
        }
      } catch (err) {
        send({ type: "error", message: errorMessage(err) });
      } finally {
        controller.close();
      }
    },
  });
  return new Response(stream, {
    headers: { "Content-Type": "application/x-ndjson; charset=utf-8", "Cache-Control": "no-store" },
  });
}

function errorMessage(err: unknown): string {
  if (err instanceof Anthropic.AuthenticationError) return "Claude credentials are missing or invalid. Set ANTHROPIC_API_KEY on the server.";
  if (err instanceof Anthropic.RateLimitError) return "Too many questions right now. Wait a minute and try again.";
  if (err instanceof Anthropic.APIUserAbortError) return "Stopped.";
  if (err instanceof Anthropic.APIError) return `Claude API error (${err.status ?? "network"}): ${err.message}`;
  if (err instanceof Error && /api key|apiKey|authentication|credentials/i.test(err.message)) {
    return "Claude credentials are missing. Set ANTHROPIC_API_KEY on the server.";
  }
  return "Something went wrong while answering. Try again.";
}
