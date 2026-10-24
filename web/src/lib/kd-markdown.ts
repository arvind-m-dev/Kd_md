// Markdown views of KD data for AI tools: llms.txt, one group, one rule.
// Every view starts with YAML front matter so a model can tell what it is reading and where it came from.
import "server-only";
import { getDoc, getGroup, getRule, kd, type Rule } from "@/lib/kd";
import { conflictsChapter, lineRange } from "@/lib/kd-md";

const yaml = (fields: Record<string, string | number | string[] | undefined>) =>
  [
    "---",
    ...Object.entries(fields)
      .filter(([, v]) => v !== undefined && v !== "" && !(Array.isArray(v) && !v.length))
      .map(([k, v]) => `${k}: ${Array.isArray(v) ? `[${v.join(", ")}]` : JSON.stringify(v)}`),
    "---",
  ].join("\n");

const issueLine = (id: string) => {
  const d = kd.decisions.find((x) => x.id === id);
  if (d) return `- **${d.id} (decision${d.open ? ", open" : ""}):** ${d.title}.${d.question ? ` Question: ${d.question}` : ""}`;
  const c = kd.conflicts.find((x) => x.id === id);
  if (c) return `- **${c.id} (conflict, ${c.status}):** ${c.topic}. Resolution: ${c.resolution}`;
  const p = kd.placeholders.find((x) => x.id === id);
  if (p) return `- **${p.id} (placeholder):** ${p.item}. Missing: ${p.missing}`;
  return `- ${id}`;
};

export function ruleMarkdown(r: Rule): string {
  const doc = r.doc ? getDoc(r.doc) : undefined;
  const group = getGroup(r.group)!;
  const related = r.refs.map((id) => getRule(id)).filter((x): x is Rule => !!x);
  return [
    yaml({
      id: r.id,
      group: `${group.id} — ${group.title}`,
      document: doc?.title,
      document_status: doc?.status,
      document_url: doc?.url,
      section: r.path.join(" › "),
      source_ref: r.source,
      type: r.tag,
      status: r.status,
      issues: r.issues,
      kd_line: r.line,
    }),
    "",
    `# ${r.id}${r.tag ? ` — ${r.tag}` : ""}`,
    "",
    r.text,
    "",
    "## Status",
    "",
    r.status === "clear"
      ? "Clear. No open decision, open conflict or placeholder names this rule."
      : "Needs clarity. It is named by an open decision, an open conflict or a placeholder (below). Do not treat it as final.",
    ...(r.issues.length ? ["", "## Issues that mention this rule", "", ...r.issues.map(issueLine)] : []),
    ...(related.length ? ["", "## Rules it refers to", "", ...related.map((x) => `- [${x.id}](/rules/${x.id}.md): ${x.text}`)] : []),
    "",
    "## Source",
    "",
    `- Document: ${doc ? `[${doc.title}](${doc.url}) (${doc.status})` : "—"}`,
    `- Group: [${group.id} — ${group.title}](/md/${group.id}.md)`,
    r.path.length ? `- Section: ${r.path.join(" › ")}` : "",
    r.source ? `- Source reference: ${r.source}` : "",
    `- Line ${r.line} of [kd.md](/kd.md)`,
    "",
    "## Original line (verbatim)",
    "",
    `> ${r.md}`,
    "",
  ]
    .filter((l, i, a) => l !== "" || a[i - 1] !== "")
    .join("\n");
}

export function groupMarkdown(id: string): string | null {
  if (id === "conflicts") {
    return [
      yaml({ title: "Cross-document conflicts, decisions needed, placeholders & glossary", decisions: kd.stats.decisions, conflicts: kd.stats.conflicts }),
      "",
      conflictsChapter,
      "",
    ].join("\n");
  }
  if (id === "sources") {
    const h = kd.outline.find((o) => o.level === 2 && o.title === "Source register")!;
    return [yaml({ title: "Source register", documents: kd.register.length }), "", lineRange(h.line, h.endLine).trim(), ""].join("\n");
  }
  const g = getGroup(id);
  if (!g) return null;
  return [
    yaml({ group: g.id, title: g.title, documents: g.docCount, rules: g.ruleCount, rules_needing_clarity: g.needsClarity }),
    "",
    lineRange(g.line, g.endLine).trim(),
    "",
  ].join("\n");
}

export function llmsTxt(origin: string): string {
  const s = kd.stats;
  return [
    "# Keydemand V2 Phase 1 — Business Rules",
    "",
    `> The business rules, requirements, page specs, relevancy logic, admin and role rules for the Keydemand V2 Phase 1 platform: ${s.rules} rules from ${s.docs} current source documents in ${s.groups} groups. Updated ${s.updated}.`,
    "",
    "How to read it:",
    "- Every rule has an ID like BR-REL-001 and a source document. Only the latest version of each document is authoritative.",
    `- ${s.needsClarity} rules are marked \`status: needs-clarity\`: an open decision, open conflict or placeholder names them. Answer questions about them as "needs clarity", not as final.`,
    "- Read the conflicts chapter before answering anything about limits, prices, time windows or roles.",
    "",
    "## Core",
    "",
    `- [Full knowledge base](${origin}/kd.md): the whole file (${s.lines.toLocaleString("en")} lines)`,
    `- [Conflicts, decisions & glossary](${origin}/md/conflicts.md): ${s.openDecisions} open decisions, ${s.openConflicts} open conflicts, ${s.placeholders} placeholders, ${s.glossary} glossary terms`,
    `- [Source register](${origin}/md/sources.md): every source document with its Google Drive link and status`,
    "",
    "## Groups",
    "",
    ...kd.groups.map((g) => `- [${g.id} — ${g.title}](${origin}/md/${g.id}.md): ${g.docCount} documents, ${g.ruleCount} rules`),
    "",
    "## Single rules",
    "",
    `- One rule with its status, issues and source: ${origin}/rules/{RULE-ID}.md, for example [BR-REL-001](${origin}/rules/BR-REL-001.md)`,
    "",
  ].join("\n");
}
