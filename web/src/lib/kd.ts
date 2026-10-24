// Typed access to the KD data built by scripts/build-kd.mjs.
// Server-side only: the JSON is ~1.4 MB, so pass slices to client components.
import "server-only";
import raw from "@/generated/kd-data.json";

export type RuleStatus = "clear" | "needs-clarity";

export interface Rule {
  id: string;
  prefix: string;
  num: number;
  group: string;
  doc: string | null;
  path: string[];
  tag: string;
  text: string;
  md: string;
  source: string;
  line: number;
  refs: string[];
  status: RuleStatus;
  issues: string[];
}

export interface Group {
  id: string;
  title: string;
  slug: string;
  line: number;
  endLine: number;
  docCount: number;
  ruleCount: number;
  needsClarity: number;
}

export interface Doc {
  id: string;
  group: string;
  title: string;
  status: string;
  note: string;
  slug: string;
  line: number;
  driveId: string;
  url: string;
  type: string;
  modified: string;
  ruleCount: number;
}

export interface SourceDoc {
  group: string;
  num: number;
  title: string;
  type: string;
  driveId: string;
  url: string;
  owner: string;
  modified: string;
  status: string;
  current: boolean;
}

export interface Decision {
  id: string;
  title: string;
  line: number;
  md: string;
  resolution: string;
  question: string;
  open: boolean;
  rules: string[];
}

export interface Conflict {
  id: string;
  topic: string;
  positionA: string;
  positionB: string;
  resolution: string;
  status: string;
  open: boolean;
  rules: string[];
  line: number;
}

export interface Placeholder {
  id: string;
  item: string;
  where: string;
  missing: string;
  rules: string[];
  line: number;
}

export interface GlossaryTerm {
  term: string;
  meaning: string;
  aka: string;
  rules: string[];
}

export interface Heading {
  level: number;
  title: string;
  slug: string;
  line: number;
  endLine: number;
}

export interface KdData {
  stats: {
    lines: number;
    groups: number;
    docs: number;
    rules: number;
    needsClarity: number;
    decisions: number;
    openDecisions: number;
    conflicts: number;
    openConflicts: number;
    placeholders: number;
    glossary: number;
    sources: number;
    updated: string;
  };
  groups: Group[];
  docs: Doc[];
  register: SourceDoc[];
  rules: Rule[];
  decisions: Decision[];
  conflicts: Conflict[];
  placeholders: Placeholder[];
  glossary: GlossaryTerm[];
  changelog: { date: string; change: string }[];
  outline: Heading[];
}

export const kd = raw as KdData;

const ruleById = new Map(kd.rules.map((r) => [r.id, r]));
const docById = new Map(kd.docs.map((d) => [d.id, d]));
const groupById = new Map(kd.groups.map((g) => [g.id, g]));

export const getRule = (id: string) => ruleById.get(id.toUpperCase());
export const getDoc = (id: string) => docById.get(id);
export const getGroup = (id: string) => groupById.get(id);
