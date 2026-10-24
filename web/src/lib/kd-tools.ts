// The knowledge base as tools: plain functions that return Markdown for an AI to read.
// The MCP server (app/api/mcp) exposes them; anything else that wants tool-style access can reuse them.
import "server-only";
import { getDoc, getGroup, getRule, kd } from "@/lib/kd";
import { ruleMarkdown } from "@/lib/kd-markdown";
import { docMarkdown, groupNotesMarkdown } from "@/lib/reader";
import { filterRules } from "@/lib/rule-filter";
import { passageView, search } from "@/lib/search";

/** JSON Schema for each tool's input, as MCP's tools/list returns it. */
export interface ToolDef {
  name: string;
  title: string;
  description: string;
  inputSchema: { type: "object"; properties: Record<string, object>; required?: string[]; additionalProperties: false };
  run(args: Record<string, unknown>, origin: string): string;
}

export class ToolInputError extends Error {}

const text = (v: unknown, name: string, required = false): string => {
  if (v === undefined || v === null || v === "") {
    if (required) throw new ToolInputError(`"${name}" is required.`);
    return "";
  }
  if (typeof v !== "string") throw new ToolInputError(`"${name}" must be a string.`);
  return v.trim();
};
const int = (v: unknown, def: number, min: number, max: number) => {
  const n = typeof v === "number" ? v : typeof v === "string" ? Number(v) : NaN;
  return Number.isFinite(n) ? Math.min(Math.max(Math.round(n), min), max) : def;
};

const READ_CHARS = 40_000;

export const TOOLS: ToolDef[] = [
  {
    name: "search_knowledge_base",
    title: "Search the knowledge base",
    description:
      "Keyword (BM25) search over every passage of the Keydemand V2 Phase 1 business rules. Returns the best passages with their source document, section, kd.md line range and rule IDs. Use it first for any question; quote and cite what it returns. A rule ID like BR-REL-001 in the query returns that rule's passage first.",
    inputSchema: {
      type: "object",
      properties: {
        query: { type: "string", description: "Words to look for, e.g. 'contact request response window' or 'BR-REL-001'." },
        limit: { type: "integer", minimum: 1, maximum: 25, default: 8, description: "How many passages to return." },
      },
      required: ["query"],
      additionalProperties: false,
    },
    run(args, origin) {
      const query = text(args.query, "query", true);
      const limit = int(args.limit, 8, 1, 25);
      const hits = search(query, limit).map((pid, i) => passageView(pid, `P${i + 1}`));
      if (!hits.length) return `No passages match “${query}”. Try other words, or list_topics to browse.`;
      return [
        `# ${hits.length} passages for “${query}”`,
        "",
        ...hits.map((p) =>
          [
            `## [${p.label}] ${p.docTitle || p.groupTitle}${p.path.length ? ` › ${p.path.join(" › ")}` : ""}`,
            "",
            `- Source: ${p.docUrl || "—"}${p.docStatus ? ` (${p.docStatus.toLowerCase()})` : ""}`,
            `- Read it: ${origin}${p.doc && p.group ? `/read/${p.group}/${p.doc}` : p.group ? `/read/${p.group}` : "/read"}`,
            `- kd.md lines ${p.lineStart}–${p.lineEnd}${p.brIds.length ? ` · rules: ${p.brIds.join(", ")}` : ""}`,
            "",
            p.text,
            "",
          ].join("\n"),
        ),
      ].join("\n");
    },
  },
  {
    name: "get_rule",
    title: "Get one rule",
    description:
      "One business rule by ID (e.g. BR-REL-001): its wording, status (clear or needs-clarity), the open decisions/conflicts that mention it, related rules and its source document.",
    inputSchema: {
      type: "object",
      properties: { id: { type: "string", description: "Rule ID, e.g. BR-PG1-145." } },
      required: ["id"],
      additionalProperties: false,
    },
    run(args) {
      const id = text(args.id, "id", true);
      const rule = getRule(id);
      if (!rule) throw new ToolInputError(`No rule “${id}”. Rule IDs look like BR-REL-001; use find_rules to look one up.`);
      return ruleMarkdown(rule);
    },
  },
  {
    name: "find_rules",
    title: "Find rules",
    description:
      "List rules whose ID, text, type or document title contain every given word, optionally only in one topic group, one document, or one status. Good for 'all rules about X that still need clarity'.",
    inputSchema: {
      type: "object",
      properties: {
        words: { type: "string", description: "Words that must all appear. Empty lists every rule in the filter." },
        group: { type: "string", description: "Topic group ID, e.g. '07' (see list_topics)." },
        document: { type: "string", description: "Document ID, e.g. '07-1' (see list_topics)." },
        status: { type: "string", enum: ["clear", "needs-clarity"] },
        limit: { type: "integer", minimum: 1, maximum: 200, default: 40 },
      },
      additionalProperties: false,
    },
    run(args) {
      const status = text(args.status, "status");
      if (status && status !== "clear" && status !== "needs-clarity") throw new ToolInputError(`"status" must be clear or needs-clarity.`);
      const limit = int(args.limit, 40, 1, 200);
      const rules = filterRules({
        q: text(args.words, "words"),
        group: text(args.group, "group"),
        doc: text(args.document, "document"),
        status: status as "" | "clear" | "needs-clarity",
      });
      if (!rules.length) return "No rules match. Loosen the words or drop a filter.";
      return [
        `# ${rules.length} rules${rules.length > limit ? ` (first ${limit})` : ""}`,
        "",
        ...rules.slice(0, limit).map((r) => `- **${r.id}** [${r.status}]${r.tag ? ` (${r.tag})` : ""}: ${r.text}`),
      ].join("\n");
    },
  },
  {
    name: "list_topics",
    title: "List topics and documents",
    description:
      "The index: every topic group with its documents (IDs, titles, rule counts, Google Drive links). Use the IDs with read_document and find_rules.",
    inputSchema: { type: "object", properties: {}, additionalProperties: false },
    run() {
      const s = kd.stats;
      return [
        `# Keydemand V2 Phase 1 — ${s.rules} rules, ${s.docs} documents, ${s.groups} groups (updated ${s.updated})`,
        "",
        ...kd.groups.flatMap((g) => [
          `## ${g.id} — ${g.title}`,
          `${g.docCount} documents · ${g.ruleCount} rules · ${g.needsClarity} need clarity`,
          "",
          ...kd.docs.filter((d) => d.group === g.id).map((d) => `- \`${d.id}\` ${d.title} — ${d.ruleCount} rules · ${d.type} · ${d.url}`),
          "",
        ]),
      ].join("\n");
    },
  },
  {
    name: "read_document",
    title: "Read a document",
    description:
      "The full text of one source document (e.g. '07-1') or a group's own notes (e.g. '07'), as Markdown, verbatim from the knowledge base. Long documents come in pages: pass the returned next offset to read on.",
    inputSchema: {
      type: "object",
      properties: {
        id: { type: "string", description: "Document ID like '07-1', or group ID like '07'." },
        offset: { type: "integer", minimum: 0, default: 0, description: "Character offset to start from." },
      },
      required: ["id"],
      additionalProperties: false,
    },
    run(args) {
      const id = text(args.id, "id", true);
      const doc = getDoc(id);
      const group = doc ? undefined : getGroup(id);
      const md = doc ? docMarkdown(doc.id) : group ? groupNotesMarkdown(group.id) : null;
      if (md === null) throw new ToolInputError(`No document or group “${id}”. Use list_topics for the IDs.`);
      const offset = int(args.offset, 0, 0, md.length);
      const page = md.slice(offset, offset + READ_CHARS);
      const next = offset + page.length < md.length ? offset + page.length : null;
      const head = doc
        ? `# ${doc.title}\n\n${doc.status.toLowerCase()} · ${doc.type} · ${doc.ruleCount} rules · ${doc.url}`
        : `# ${group!.id} — ${group!.title} (group notes)`;
      return [
        head,
        `Characters ${offset}–${offset + page.length} of ${md.length}.${next !== null ? ` More follows: call again with offset ${next}.` : ""}`,
        "",
        page,
      ].join("\n");
    },
  },
  {
    name: "list_open_questions",
    title: "List open questions",
    description:
      "What is not settled yet: decisions needed (D-xx), cross-document conflicts (C-xx) and placeholder values (P-xx), with the rules each one affects. Check this before stating any limit, price, time window or role as final.",
    inputSchema: {
      type: "object",
      properties: {
        kind: { type: "string", enum: ["all", "decisions", "conflicts", "placeholders"], default: "all" },
        include_resolved: { type: "boolean", default: false, description: "Also list decisions and conflicts that are resolved." },
      },
      additionalProperties: false,
    },
    run(args) {
      const kind = text(args.kind, "kind") || "all";
      const all = args.include_resolved === true;
      const out: string[] = [];
      if (kind === "all" || kind === "decisions") {
        const list = kd.decisions.filter((d) => all || d.open);
        out.push(`## Decisions (${list.length})`, "", ...list.map((d) => `- **${d.id}** ${d.open ? "[open]" : "[resolved]"} ${d.title}. ${d.question ? `Question: ${d.question}` : `Resolution: ${d.resolution}`} Rules: ${d.rules.join(", ") || "—"}`), "");
      }
      if (kind === "all" || kind === "conflicts") {
        const list = kd.conflicts.filter((c) => all || c.open);
        out.push(`## Conflicts (${list.length})`, "", ...list.map((c) => `- **${c.id}** [${c.status}] ${c.topic}. A: ${c.positionA} · B: ${c.positionB} · Resolution: ${c.resolution}`), "");
      }
      if (kind === "all" || kind === "placeholders") {
        out.push(`## Placeholders (${kd.placeholders.length})`, "", ...kd.placeholders.map((p) => `- **${p.id}** ${p.item} — missing: ${p.missing} (${p.where})`), "");
      }
      if (!out.length) throw new ToolInputError(`"kind" must be all, decisions, conflicts or placeholders.`);
      return out.join("\n");
    },
  },
  {
    name: "lookup_term",
    title: "Look up a term",
    description: "What a Keydemand term or acronym means (e.g. HTL, Relevancy, Managed Space), from the knowledge base glossary.",
    inputSchema: {
      type: "object",
      properties: { term: { type: "string", description: "Term or acronym. Empty lists the whole glossary." } },
      additionalProperties: false,
    },
    run(args) {
      const q = text(args.term, "term").toLowerCase();
      const hits = kd.glossary.filter((g) => !q || `${g.term} ${g.aka}`.toLowerCase().includes(q));
      if (!hits.length) return `“${q}” isn't in the glossary. Try search_knowledge_base.`;
      return hits.map((g) => `- **${g.term}**${g.aka ? ` (also: ${g.aka})` : ""}: ${g.meaning}`).join("\n");
    },
  },
];

export const toolByName = new Map(TOOLS.map((t) => [t.name, t]));
