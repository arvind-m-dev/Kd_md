// Intent-aware retrieval over the existing passages (lib/search.ts). Nothing is re-ingested.
//
// Keyword search alone returns the best ~24 chunks, which can cut a form's field table in half. So for
// requirements, comparisons, workflows and role questions we first resolve the scope to whole sections of
// the knowledge base (outline headings such as "Uploading Office Property Lease (Agent)") and take every
// passage under them, then add rules that name the same scope, then keyword hits. Everything is bounded by a
// character budget; what doesn't fit is reported, never silently dropped.
import "server-only";
import { kd, type Heading } from "@/lib/kd";
import { passages, search, type Passage } from "@/lib/search";
import { VOCAB, type Analysis, type Dimension, type Scope } from "./intent";

export interface MatchedSection {
  title: string;
  line: number;
  endLine: number;
  doc: string | null;
  group: string | null;
  /** How many of its passages made it into the budget. */
  included: number;
  total: number;
  /** For comparisons: which side (0 or 1) it was found for. */
  side?: number;
}

export interface Retrieval {
  /** Passage ids in the order they should be labelled P1, P2, … */
  ids: number[];
  sections: MatchedSection[];
  /** Sections or passages that matched but did not fit the budget. */
  omitted: { sections: number; passages: number };
  strategy: string[];
}

const DEFAULT_BUDGET = 60_000;
const budget = () => Math.max(15_000, Number(process.env.KD_CONTEXT_CHARS) || DEFAULT_BUDGET);

const termFor = (dim: Dimension, value: string) => VOCAB[dim].find((t) => t.value === value)!;

/** Sheet headings start "Property & Project Input Fields — Columns AS–BB: …"; that prefix names no scope. */
const formTitle = (t: string) => t.replace(/^(property & project input fields|demand input fields)\s*—\s*columns [^:]+:\s*/i, "");

/** Does a heading title fit the scope? Required dimensions must match; others must not contradict. */
function headingFits(raw: string, scope: Scope, required: Dimension[]): boolean {
  const title = formTitle(raw);
  for (const dim of Object.keys(scope) as Dimension[]) {
    const asked = scope[dim]!;
    const hit = asked.some((v) => termFor(dim, v).doc.test(title));
    if (hit) continue;
    if (required.includes(dim)) return false;
    // Names another value of the same dimension (e.g. "Sale" when Lease was asked): not this scope.
    const other = VOCAB[dim].some((t) => !asked.includes(t.value) && t.doc.test(title));
    if (other) return false;
  }
  return true;
}

const passagesIn = (h: { line: number; endLine: number }) =>
  passages.filter((p) => p.lineStart >= h.line && p.lineEnd <= h.endLine).map((p) => p.id);

/** Outline headings that fit the scope, most specific first, with nested duplicates removed. */
function matchHeadings(scope: Scope, required: Dimension[], extra?: RegExp, maxLines = 600): Heading[] {
  const fits = kd.outline.filter(
    (h) => h.level >= 3 && h.endLine - h.line <= maxLines && headingFits(h.title, scope, required) && (!extra || extra.test(h.title)),
  );
  // Keep the widest heading of a nested chain: it already contains the narrower ones.
  const outer = fits.filter((h) => !fits.some((o) => o !== h && o.line <= h.line && o.endLine >= h.endLine && o.endLine - o.line > h.endLine - h.line));
  // Latest documents first, so if the budget runs out it is older versions that are left out (and reported).
  const modified = (h: Heading) => docOf(h.line)?.modified ?? "";
  return outer.sort((a, b) => modified(b).localeCompare(modified(a)) || a.line - b.line);
}

/** Headings inside `h` (any depth). */
const childrenOf = (h: Heading) => kd.outline.filter((o) => o.line > h.line && o.endLine <= h.endLine && o.level > h.level);

const docOf = (line: number) => kd.docs.find((d) => {
  const h = kd.outline.find((o) => o.line === d.line);
  return h && line >= h.line && line <= h.endLine;
});

/** Rules whose text names every asked asset class / project type and transaction (and listing, if asked). */
function scopedRules(scope: Scope, keep: (p: Passage) => boolean): number[] {
  const dims = (["assetClass", "projectType", "transaction", "listing"] as Dimension[]).filter((d) => scope[d]);
  if (dims.filter((d) => d !== "listing").length === 0) return [];
  const out: number[] = [];
  for (const r of kd.rules) {
    if (!dims.every((d) => scope[d]!.some((v) => termFor(d, v).doc.test(r.text)))) continue;
    const pid = passages.findIndex((p) => p.lineStart <= r.line && r.line <= p.lineEnd);
    if (pid >= 0 && keep(passages[pid])) out.push(pid);
  }
  return [...new Set(out)];
}

const ACTIONS = /submit|post|upload|add|create|register|sign[\s-]?up|onboard|log[\s-]?in|approve|publish|connect|respond|edit|delete|deactivate|verify|assign|renew|subscribe/i;

export function retrieve(a: Analysis, opts: { keep: (p: Passage) => boolean; pinned: number[]; selection?: string; previous?: string }): Retrieval {
  const { keep } = opts;
  const strategy: string[] = [];
  const chosen: number[] = [...opts.pinned];
  const sections: MatchedSection[] = [];
  const omitted = { sections: 0, passages: 0 };
  let used = chosen.reduce((n, pid) => n + passages[pid].text.length, 0);
  const limit = budget();

  const add = (pid: number) => {
    if (chosen.includes(pid) || !keep(passages[pid])) return true;
    const size = passages[pid].text.length;
    if (used + size > limit) return false;
    chosen.push(pid);
    used += size;
    return true;
  };

  const seen = new Set<number>();
  const addSections = (heads: Heading[], side?: number, only?: RegExp) => {
    for (const h of heads) {
      if (seen.has(h.line)) continue;
      seen.add(h.line);
      const ids = passagesIn(h).filter((pid) => keep(passages[pid]) && (!only || only.test(passages[pid].text)));
      if (!ids.length) continue;
      let included = 0;
      for (const pid of ids) {
        if (add(pid)) included++;
        else omitted.passages++;
      }
      if (!included) omitted.sections++;
      const d = docOf(h.line);
      sections.push({ title: h.title, line: h.line, endLine: h.endLine, doc: d?.id ?? null, group: d?.group ?? null, included, total: ids.length, side });
    }
  };

  const scopeQuery = (s: Scope) => (Object.values(s).flat() as string[]).join(" ");

  // 1. Whole sections for the scope.
  if (a.intent === "requirements" || a.intent === "field") {
    const required = (["assetClass", "projectType", "transaction"] as Dimension[]).filter((d) => a.scope[d]);
    if (required.length) {
      // Office Building is a Project Type: look for project forms that list it, and Office property forms.
      const scopes: Scope[] = [a.scope];
      if (a.scope.projectType?.includes("Office Building") && !a.scope.assetClass) {
        // A building is supply: Office property forms and Developer project forms (Project Type lists
        // "Office Building"). Demand forms are left out unless asked for (the answer's scope says so).
        const listing = a.scope.listing ?? ["Property"];
        scopes.push({ ...a.scope, projectType: undefined, assetClass: ["Office"], listing });
        scopes.push({ ...a.scope, projectType: undefined, listing: ["Project"], role: ["Developer"] });
      }
      for (const s of scopes) {
        const clean = Object.fromEntries(Object.entries(s).filter(([, v]) => v)) as Scope;
        const req = (["assetClass", "projectType", "transaction", "listing"] as Dimension[]).filter((d) => clean[d] && (d !== "listing" || clean.listing![0] === "Project"));
        addSections(matchHeadings(clean, req));
      }
      strategy.push(`sections matching ${required.map((d) => a.scope[d]!.join("/")).join(" + ")}`);
    }
  } else if (a.intent === "compare") {
    a.sides.forEach((s, side) => {
      const req = (["assetClass", "projectType", "transaction"] as Dimension[]).filter((d) => s[d]);
      if (req.length) addSections(matchHeadings(s, req), side);

    });
    strategy.push("sections for each side of the comparison");
  } else if (a.intent === "workflow" && (a.scope.role || a.scope.listing)) {
    // Journeys for the role (not the field sheets), narrowed to the parts about the listing or action asked.
    const role = a.scope.role ? { role: a.scope.role } : {};
    const journeys = kd.outline.filter(
      (h) => h.level >= 3 && /journey|flow/i.test(h.title) && !/input fields|uploading/i.test(h.title) && (!a.scope.role || headingFits(h.title, role, ["role"])),
    );
    const focus = new RegExp([...(a.scope.listing ?? []).map((v) => termFor("listing", v).doc.source), ACTIONS.source, "registration|login|sign"].join("|"), "i");
    for (const j of journeys) {
      const parts = childrenOf(j).filter((c) => focus.test(c.title) && c.endLine - c.line <= 200);
      if (parts.length) addSections(parts.slice(0, 4));
      else if (j.endLine - j.line <= 120) addSections([j]);
    }
    strategy.push("journey / flow sections for the role");
  }
  if ((a.intent === "explain" || a.intent === "compare" || a.intent === "general") && a.scope.role) {
    // Role catalogues and permission matrices are generic headings: keep only their passages that name the role.
    const roleRe = new RegExp(a.scope.role.map((v) => termFor("role", v).doc.source).join("|"), "i");
    const heads = kd.outline.filter((h) => h.endLine - h.line <= 120 && /permissions? matrix|access (&|and) (privileges|permissions)|role catalogue|user roles|nomenclature & user roles|access permissions|posting permissions/i.test(h.title));
    addSections(heads, undefined, roleRe);
    strategy.push("role catalogue and permission passages naming the role");
  }

  // 2. Rules that name the same scope (requirements live in rules as well as in form tables).
  if (a.intent === "requirements" || a.intent === "field" || a.intent === "compare") {
    const scopes = a.intent === "compare" ? a.sides : [a.scope];
    for (const s of scopes) for (const pid of scopedRules(s, keep).slice(0, 40)) if (!add(pid)) omitted.passages++;
    strategy.push("rules naming the scope");
  }

  // 3. Keyword search on the question (plus the previous question and any highlighted text).
  const query = [a.searchText, opts.previous ?? "", opts.selection ?? "", a.ruleIds.join(" "), ACTIONS.test(a.searchText) ? "" : scopeQuery(a.scope)].join(" ");
  const k = a.intent === "requirements" || a.intent === "compare" ? 14 : 24;
  for (const pid of search(query, k, keep)) if (!add(pid)) break;
  if (a.intent === "compare") for (const s of a.sides) for (const pid of search(`${a.searchText} ${scopeQuery(s)}`, 8, keep)) if (!add(pid)) break;
  strategy.push("keyword search");

  return { ids: chosen, sections, omitted, strategy };
}
