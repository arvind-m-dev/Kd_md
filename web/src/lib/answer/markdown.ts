// A structured answer as plain Markdown: for Copy, Download, the saved-answer library and as the compact
// history sent with follow-up questions. Shared by server and client.
import type { Answer, RequiredState } from "./schema";

export const REQUIRED_LABEL: Record<RequiredState, string> = {
  yes: "Required",
  no: "Not marked required",
  conditional: "Conditional",
  unspecified: "Not specified in the retrieved source",
};

export const NOT_SPECIFIED = "Not specified in the retrieved source";

const cell = (t: string) => (t || "—").replace(/\|/g, "\\|").replace(/\n+/g, " ");
const cites = (c: string[]) => (c.length ? ` ${c.map((l) => `[${l}]`).join("")}` : "");

export function answerToMarkdown(a: Answer, opts: { sources?: { label: string; citeLabel: string; href: string }[]; brief?: boolean } = {}): string {
  const out: string[] = [];
  if (a.title) out.push(`## ${a.title}`, "");
  out.push(`Status: ${a.status === "clear" ? "Clear" : `Needs clarity${a.statusNote ? ` — ${a.statusNote}` : ""}`}`, "");
  if (a.scope.searched) out.push(`Scope: ${a.scope.searched}`, "");
  if (a.summary) out.push(`**In short:** ${a.summary}`, "");
  if (a.clarification) out.push(`> ${a.clarification}`, "");
  if (opts.brief) {
    // For follow-up context: the shape of the answer, not every row.
    for (const b of a.blocks) {
      if (b.type === "requirements") out.push(`Requirement groups: ${b.groups.map((g) => `${g.name} (${g.rows.length})`).join(", ")}`);
      else if (b.type === "workflow") out.push(`Workflow: ${b.steps.map((st) => st.title).join(" → ")}`);
      else if (b.type === "comparison") out.push(`Compared: ${b.subjects.join(" vs ")} on ${b.rows.map((r) => r.dimension).join(", ")}`);
      else if (b.type === "field") out.push(`Field: ${b.name}`);
    }
    return out.join("\n").trim();
  }
  for (const b of a.blocks) {
    switch (b.type) {
      case "text":
        if (b.heading) out.push(`### ${b.heading}`, "");
        out.push(b.body, "");
        break;
      case "points":
        if (b.heading) out.push(`### ${b.heading}`, "");
        out.push(...b.items.map((i) => `- ${b.style === "checklist" ? "[ ] " : ""}${i.text}${cites(i.cites)}`), "");
        break;
      case "requirements":
        if (b.heading) out.push(`### ${b.heading}`, "");
        for (const g of b.groups) {
          out.push(`#### ${g.name}${cites(g.cites)}`, "");
          if (g.summary) out.push(g.summary, "");
          out.push("| Field / Requirement | Required? | Business rule | Validation / Allowed values | Source |", "|---|---|---|---|---|");
          for (const r of g.rows) {
            out.push(`| ${cell(r.field)} | ${REQUIRED_LABEL[r.required]}${r.requiredNote ? ` (${cell(r.requiredNote)})` : ""} | ${cell(r.rule || NOT_SPECIFIED)} | ${cell(r.validation || NOT_SPECIFIED)} | ${r.cites.join(", ") || "No source cited"} |`);
          }
          out.push("");
        }
        break;
      case "workflow":
        if (b.heading) out.push(`### ${b.heading}`, "");
        b.steps.forEach((st, i) => {
          out.push(`${i + 1}. **${st.title}**${st.actor ? ` — ${st.actor}` : ""}${cites(st.cites)}`);
          for (const [k, v] of [["", st.detail], ["Before", st.prerequisites], ["Checks", st.validation], ["Otherwise", st.alternatives]] as const) if (v) out.push(`   ${k ? `${k}: ` : ""}${v}`);
        });
        out.push("");
        break;
      case "comparison":
        if (b.heading) out.push(`### ${b.heading}`, "");
        out.push(`| | ${b.subjects.map(cell).join(" | ")} |`, `|---|${b.subjects.map(() => "---").join("|")}|`);
        for (const r of b.rows) out.push(`| ${cell(r.dimension)}${r.differs ? " ≠" : ""} | ${r.cells.map((c) => `${cell(c.text || NOT_SPECIFIED)}${cites(c.cites)}`).join(" | ")} |`);
        out.push("");
        break;
      case "field":
        out.push(`### ${b.name}${cites(b.cites)}`, "");
        for (const [k, v] of [
          ["Meaning", b.meaning],
          ["Required", `${REQUIRED_LABEL[b.required]}${b.requiredNote ? ` (${b.requiredNote})` : ""}`],
          ["Values / validation", b.values],
          ["Conditions", b.conditions],
          ["What users see", b.behaviour],
          ["Why", b.why],
          ["Exceptions", b.exceptions],
        ])
          out.push(`- **${k}:** ${v || NOT_SPECIFIED}`);
        out.push("");
        break;
    }
  }
  if (a.conflicts.length) {
    out.push("### Conflicts between sources", "");
    for (const c of a.conflicts) {
      out.push(`- **${c.topic}**`, ...c.positions.map((p) => `  - ${p.statement}${cites(p.cites)}`), `  - Resolution: ${c.resolution || "Needs a business decision"}`);
    }
    out.push("");
  }
  if (a.gaps.length) out.push("### Not established by the sources", "", ...a.gaps.map((g) => `- ${g}`), "");
  if (opts.sources?.length) out.push("### Sources", "", ...opts.sources.map((s) => `- [${s.label}] ${s.citeLabel} — ${s.href}`), "");
  return out.join("\n").trim() + "\n";
}
