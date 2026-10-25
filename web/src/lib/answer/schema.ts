// The AI output contract for Ask: one JSON object per answer, rendered by components/answer.
// Shared by server (schema sent to the model, validation) and client (types, partial rendering).
//
// Every factual item carries `cites`: passage labels ("P3") from the retrieved set. Validation drops labels
// that weren't retrieved, flags items left without a source, and checks requirement rows against the cited
// text so the UI never shows a requirement, value or "required" status the sources don't support.

export const INTENTS = ["explain", "requirements", "workflow", "compare", "field", "general"] as const;
export type AnswerIntent = (typeof INTENTS)[number];

export const REQUIRED_STATES = ["yes", "no", "conditional", "unspecified"] as const;
export type RequiredState = (typeof REQUIRED_STATES)[number];

export interface Cited {
  cites: string[];
  /** Set by validation: no retrieved passage supports this item. */
  uncited?: boolean;
}

export interface RequirementRow extends Cited {
  field: string;
  required: RequiredState;
  /** Why it is required / when (for conditional). */
  requiredNote: string;
  rule: string;
  validation: string;
  /** Set by validation when the field name wasn't found in the cited passages. */
  unverified?: boolean;
}

export interface RequirementGroup extends Cited {
  name: string;
  summary: string;
  rows: RequirementRow[];
}

export interface WorkflowStep extends Cited {
  title: string;
  actor: string;
  kind: "step" | "decision" | "outcome";
  detail: string;
  prerequisites: string;
  validation: string;
  alternatives: string;
}

export interface ComparisonCell extends Cited {
  text: string;
}

export interface ComparisonRow {
  dimension: string;
  cells: ComparisonCell[];
  /** The sides differ on this dimension. */
  differs: boolean;
}

export interface PointItem extends Cited {
  text: string;
}

export type Block =
  | { type: "text"; heading: string; body: string }
  | { type: "points"; heading: string; style: "bullets" | "checklist"; items: PointItem[] }
  | { type: "requirements"; heading: string; groups: RequirementGroup[] }
  | { type: "workflow"; heading: string; steps: WorkflowStep[] }
  | { type: "comparison"; heading: string; subjects: string[]; rows: ComparisonRow[] }
  | ({
      type: "field";
      name: string;
      meaning: string;
      required: RequiredState;
      requiredNote: string;
      values: string;
      conditions: string;
      behaviour: string;
      why: string;
      exceptions: string;
    } & Cited);

export interface ConflictPosition extends Cited {
  statement: string;
}

export interface Conflict {
  topic: string;
  positions: ConflictPosition[];
  resolution: string;
}

export interface Answer {
  intent: AnswerIntent;
  title: string;
  status: "clear" | "needs-clarity";
  statusNote: string;
  scope: { searched: string; assumptions: string[] };
  /** One plain sentence with citations ([P3]). */
  summary: string;
  /** Only when an essential ambiguity blocks an accurate answer. */
  clarification: string;
  blocks: Block[];
  conflicts: Conflict[];
  /** What the retrieved sources do not establish. */
  gaps: string[];
  followUps: string[];
}

// ── JSON Schema for the model (structured outputs: every object closed, no recursion) ──

const str = { type: "string" } as const;
const strArr = { type: "array", items: str } as const;
const cites = { type: "array", items: { type: "string" }, description: 'Passage labels that support this item, e.g. ["P3","P7"]. Only labels that were supplied.' } as const;
const obj = (properties: Record<string, unknown>, description?: string) => ({
  type: "object",
  ...(description ? { description } : {}),
  properties,
  required: Object.keys(properties),
  additionalProperties: false,
});
const required = { type: "string", enum: [...REQUIRED_STATES], description: 'yes only if the source marks it mandatory (e.g. a trailing * or the word mandatory/required); no only if the source says optional or the form marks other fields with * but not this one; conditional if the source gives a condition; otherwise unspecified.' } as const;

export const ANSWER_JSON_SCHEMA = obj({
  intent: { type: "string", enum: [...INTENTS] },
  title: str,
  status: { type: "string", enum: ["clear", "needs-clarity"] },
  statusNote: str,
  scope: obj({ searched: str, assumptions: strArr }),
  summary: str,
  clarification: str,
  blocks: {
    type: "array",
    items: {
      anyOf: [
        obj({ type: { type: "string", const: "text" }, heading: str, body: str }),
        obj({
          type: { type: "string", const: "points" },
          heading: str,
          style: { type: "string", enum: ["bullets", "checklist"] },
          items: { type: "array", items: obj({ text: str, cites }) },
        }),
        obj({
          type: { type: "string", const: "requirements" },
          heading: str,
          groups: {
            type: "array",
            items: obj({
              name: str,
              summary: str,
              cites,
              rows: { type: "array", items: obj({ field: str, required, requiredNote: str, rule: str, validation: str, cites }) },
            }),
          },
        }),
        obj({
          type: { type: "string", const: "workflow" },
          heading: str,
          steps: {
            type: "array",
            items: obj({
              title: str,
              actor: str,
              kind: { type: "string", enum: ["step", "decision", "outcome"] },
              detail: str,
              prerequisites: str,
              validation: str,
              alternatives: str,
              cites,
            }),
          },
        }),
        obj({
          type: { type: "string", const: "comparison" },
          heading: str,
          subjects: strArr,
          rows: { type: "array", items: obj({ dimension: str, differs: { type: "boolean" }, cells: { type: "array", items: obj({ text: str, cites }) } }) },
        }),
        obj({
          type: { type: "string", const: "field" },
          name: str,
          meaning: str,
          required,
          requiredNote: str,
          values: str,
          conditions: str,
          behaviour: str,
          why: str,
          exceptions: str,
          cites,
        }),
      ],
    },
  },
  conflicts: { type: "array", items: obj({ topic: str, resolution: str, positions: { type: "array", items: obj({ statement: str, cites }) } }) },
  gaps: strArr,
  followUps: strArr,
});

// ── Validation ──

export interface ValidationReport {
  /** Labels the model cited that were not retrieved (removed). */
  unknownCites: string[];
  /** Items with no valid citation. */
  uncited: number;
  /** Requirement rows whose field name wasn't found in their cited passages. */
  unverifiedRows: number;
  /** "required" values changed to "unspecified" because the cited text doesn't support them. */
  downgradedRequired: number;
  /** Parts of the output that were malformed and dropped. */
  dropped: number;
}

const s = (v: unknown, max = 4000): string => (typeof v === "string" ? v.trim().slice(0, max) : "");
const arr = (v: unknown): unknown[] => (Array.isArray(v) ? v : []);
const oneOf = <T extends string>(v: unknown, allowed: readonly T[], fallback: T): T => (allowed.includes(v as T) ? (v as T) : fallback);

/** Normalises a field name for matching against source text ("Carpet Area (sq. ft.)*" → "carpet area sq ft"). */
export const normName = (t: string) => t.toLowerCase().replace(/\\\*/g, "*").replace(/[*_`]/g, "").replace(/[^a-z0-9₹%]+/g, " ").trim();

export interface ValidateOptions {
  /** Retrieved passages by label, with their text (for grounding checks). */
  passages: Map<string, string>;
  /** The question asked, so follow-ups don't repeat it. */
  question?: string;
  /**
   * For each label, the text of every retrieved passage from the same section (a form table split into
   * several passages). Used to tell whether the form marks mandatory fields with * at all.
   */
  sections?: Map<string, string>;
}

/** label → text of all retrieved passages sharing its document and section path. */
export function sectionTexts(passages: { label: string; text: string; doc: string | null; path: string[] }[]): Map<string, string> {
  const by = new Map<string, string[]>();
  const key = (p: (typeof passages)[number]) => `${p.doc}|${p.path.join(">")}`;
  for (const p of passages) by.set(key(p), [...(by.get(key(p)) ?? []), p.text]);
  return new Map(passages.map((p) => [p.label, by.get(key(p))!.join("\n")]));
}

/**
 * Turns whatever the model produced into a safe Answer: unknown shapes are dropped, citations are limited
 * to retrieved passages, and requirement rows are checked against their cited text.
 */
export function validateAnswer(raw: unknown, { passages, question = "", sections }: ValidateOptions): { answer: Answer; report: ValidationReport } {
  const report: ValidationReport = { unknownCites: [], uncited: 0, unverifiedRows: 0, downgradedRequired: 0, dropped: 0 };
  const o = (raw && typeof raw === "object" ? raw : {}) as Record<string, unknown>;

  const citesOf = (v: unknown): string[] => {
    const out: string[] = [];
    for (const c of arr(v)) {
      const label = s(c, 12).replace(/^\[|\]$/g, "").toUpperCase();
      if (!label) continue;
      if (passages.has(label)) out.push(label);
      else if (!report.unknownCites.includes(label)) report.unknownCites.push(label);
    }
    return [...new Set(out)];
  };
  const cited = <T extends object>(item: T, raw: Record<string, unknown>): T & Cited => {
    const c = citesOf(raw.cites);
    if (!c.length) report.uncited++;
    return { ...item, cites: c, ...(c.length ? {} : { uncited: true }) };
  };
  /** Inline [P#] markers in prose: keep only retrieved ones. */
  const prose = (v: unknown, max = 6000) =>
    s(v, max).replace(/\[(P\d+)\]/gi, (m, l: string) => {
      const label = l.toUpperCase();
      if (passages.has(label)) return `[${label}]`;
      if (!report.unknownCites.includes(label)) report.unknownCites.push(label);
      return "";
    }).replace(/[ \t]+$/gm, "");

  const citedText = (c: string[]) => c.map((l) => passages.get(l) ?? "").join("\n");

  /** Keeps "yes"/"no" only when the cited text supports it. */
  const checkRequired = (state: RequiredState, field: string, c: string[]): RequiredState => {
    if (state !== "yes" && state !== "no") return state;
    const text = citedText(c);
    const name = normName(field);
    // Table cells and list items that name the field, e.g. "| Carpet Area (sq. ft.)* |" or "Project Name*,".
    const cells = text.split(/\n|\||,(?![^(]*\))|;/).filter((cell) => name && normName(cell).includes(name));
    const marked = cells.some((cell) => /\*/.test(cell));
    const lines = text.split("\n").filter((l) => name && normName(l).includes(name));
    const says = lines.some((l) => (state === "yes" ? /\b(mandatory|required|compulsory)\b/i : /\boptional\b/i).test(l));
    // "No" from silence needs a form that does use the * convention for other fields (anywhere in its section).
    const wide = c.map((l) => sections?.get(l) ?? passages.get(l) ?? "").join("\n");
    const convention = wide.split(/\n|\|/).some((cell) => /\*\s*$/.test(cell.trim()) && !normName(cell).includes(name));
    const ok = state === "yes" ? marked || says : says || (cells.length > 0 && !marked && convention);
    if (!ok) report.downgradedRequired++;
    return ok ? state : "unspecified";
  };

  const block = (b: unknown): Block | null => {
    const r = (b && typeof b === "object" ? b : {}) as Record<string, unknown>;
    switch (r.type) {
      case "text":
        return { type: "text", heading: s(r.heading, 200), body: prose(r.body, 12000) };
      case "points": {
        const items = arr(r.items).map((i) => {
          const x = (i ?? {}) as Record<string, unknown>;
          return cited({ text: prose(x.text, 1500) }, x);
        }).filter((i) => i.text);
        return items.length ? { type: "points", heading: s(r.heading, 200), style: oneOf(r.style, ["bullets", "checklist"] as const, "bullets"), items } : null;
      }
      case "requirements": {
        const groups = arr(r.groups).map((g) => {
          const x = (g ?? {}) as Record<string, unknown>;
          const rows = arr(x.rows).map((row) => {
            const y = (row ?? {}) as Record<string, unknown>;
            const field = s(y.field, 300);
            const base = cited({ field, required: "unspecified" as RequiredState, requiredNote: s(y.requiredNote, 600), rule: prose(y.rule, 1500), validation: prose(y.validation, 1500) }, y);
            base.required = checkRequired(oneOf(y.required, REQUIRED_STATES, "unspecified"), field, base.cites);
            const name = normName(field);
            const found = !!name && normName(citedText(base.cites)).includes(name);
            if (!base.uncited && !found) {
              report.unverifiedRows++;
              return { ...base, unverified: true };
            }
            return base;
          }).filter((row) => row.field);
          const group = cited({ name: s(x.name, 200) || "Requirements", summary: prose(x.summary, 1500), rows }, x);
          // A group inherits its rows' sources if it has none of its own.
          if (group.uncited && rows.some((row) => row.cites.length)) {
            report.uncited--;
            return { ...group, uncited: undefined, cites: [...new Set(rows.flatMap((row) => row.cites))].slice(0, 6) };
          }
          return group;
        }).filter((g) => g.rows.length);
        return groups.length ? { type: "requirements", heading: s(r.heading, 200), groups } : null;
      }
      case "workflow": {
        const steps = arr(r.steps).map((st) => {
          const x = (st ?? {}) as Record<string, unknown>;
          return cited(
            {
              title: s(x.title, 300),
              actor: s(x.actor, 120),
              kind: oneOf(x.kind, ["step", "decision", "outcome"] as const, "step"),
              detail: prose(x.detail, 2000),
              prerequisites: prose(x.prerequisites, 1000),
              validation: prose(x.validation, 1000),
              alternatives: prose(x.alternatives, 1000),
            },
            x,
          );
        }).filter((st) => st.title);
        return steps.length ? { type: "workflow", heading: s(r.heading, 200), steps } : null;
      }
      case "comparison": {
        const subjects = arr(r.subjects).map((x) => s(x, 120)).filter(Boolean).slice(0, 4);
        if (subjects.length < 2) return null;
        const rows = arr(r.rows).map((row) => {
          const x = (row ?? {}) as Record<string, unknown>;
          const cells = subjects.map((_, i) => {
            const c = (arr(x.cells)[i] ?? {}) as Record<string, unknown>;
            return cited({ text: prose(c.text, 1000) }, c);
          });
          return { dimension: s(x.dimension, 200), cells, differs: x.differs === true };
        }).filter((row) => row.dimension);
        return rows.length ? { type: "comparison", heading: s(r.heading, 200), subjects, rows } : null;
      }
      case "field": {
        const name = s(r.name, 300);
        if (!name) return null;
        const f = cited(
          {
            type: "field" as const,
            name,
            meaning: prose(r.meaning, 2000),
            required: "unspecified" as RequiredState,
            requiredNote: s(r.requiredNote, 600),
            values: prose(r.values, 2000),
            conditions: prose(r.conditions, 1500),
            behaviour: prose(r.behaviour, 1500),
            why: prose(r.why, 1500),
            exceptions: prose(r.exceptions, 1500),
          },
          r,
        );
        f.required = checkRequired(oneOf(r.required, REQUIRED_STATES, "unspecified"), name, f.cites);
        return f;
      }
      default:
        return null;
    }
  };

  const blocks: Block[] = [];
  for (const b of arr(o.blocks)) {
    const v = block(b);
    if (v) blocks.push(v);
    else report.dropped++;
  }

  const conflicts: Conflict[] = arr(o.conflicts).map((c) => {
    const x = (c ?? {}) as Record<string, unknown>;
    return {
      topic: s(x.topic, 300),
      resolution: prose(x.resolution, 1500),
      positions: arr(x.positions).map((p) => {
        const y = (p ?? {}) as Record<string, unknown>;
        return cited({ statement: prose(y.statement, 1500) }, y);
      }).filter((p) => p.statement),
    };
  }).filter((c) => c.topic && c.positions.length);

  const scopeRaw = (o.scope ?? {}) as Record<string, unknown>;
  const answer: Answer = {
    intent: oneOf(o.intent, INTENTS, "general"),
    title: s(o.title, 200),
    status: oneOf(o.status, ["clear", "needs-clarity"] as const, "needs-clarity"),
    statusNote: s(o.statusNote, 400),
    scope: { searched: s(scopeRaw.searched, 600), assumptions: arr(scopeRaw.assumptions).map((x) => s(x, 400)).filter(Boolean).slice(0, 6) },
    summary: prose(o.summary, 1500),
    clarification: s(o.clarification, 600),
    blocks,
    conflicts,
    gaps: arr(o.gaps).map((x) => prose(x, 600)).filter(Boolean).slice(0, 8),
    followUps: cleanFollowUps(o.followUps, question),
  };
  // Anything the checks found that the model didn't say keeps the answer from being "clear".
  if (answer.status === "clear" && (report.downgradedRequired || report.unverifiedRows || conflicts.length)) answer.status = "needs-clarity";
  return { answer, report };
}

/** All passage labels an answer cites, in first-use order. */
export function citedLabels(a: Answer): string[] {
  const out: string[] = [];
  const push = (l: string) => !out.includes(l) && out.push(l);
  const text = (t: string) => (t.match(/\[P\d+\]/g) ?? []).forEach((m) => push(m.slice(1, -1)));
  text(a.summary);
  for (const b of a.blocks) {
    if (b.type === "text") text(b.body);
    if (b.type === "points") b.items.forEach((i) => (text(i.text), i.cites.forEach(push)));
    if (b.type === "requirements") b.groups.forEach((g) => (g.cites.forEach(push), g.rows.forEach((r) => r.cites.forEach(push))));
    if (b.type === "workflow") b.steps.forEach((st) => st.cites.forEach(push));
    if (b.type === "comparison") b.rows.forEach((r) => r.cells.forEach((c) => c.cites.forEach(push)));
    if (b.type === "field") b.cites.forEach(push);
  }
  a.conflicts.forEach((c) => c.positions.forEach((p) => p.cites.forEach(push)));
  a.gaps.forEach(text);
  return out;
}

const words = (t: string) => new Set(normName(t).split(" ").filter((w) => w.length > 2 && !STOP.has(w)));
const STOP = new Set("the and for are what which how does with from this that can all any show list give tell".split(" "));

/** 3–6 distinct follow-up questions: no repeats of the question or of each other (by word overlap). */
export function cleanFollowUps(raw: unknown, question: string): string[] {
  const out: string[] = [];
  const seen = [words(question)];
  for (const q of arr(raw)) {
    const text = s(q, 200).replace(/^[-*\d.)\s]+/, "");
    if (text.length < 8) continue;
    const w = words(text);
    const dup = seen.some((o) => {
      const shared = [...w].filter((x) => o.has(x)).length;
      return shared / Math.max(1, Math.min(w.size, o.size)) >= 0.8;
    });
    if (dup) continue;
    seen.push(w);
    out.push(/[?.!]$/.test(text) ? text : `${text}?`);
    if (out.length === 6) break;
  }
  return out;
}
