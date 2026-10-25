// Shapes shared by the Ask page components (mirror /api/ask's NDJSON events).
import type { Answer, ValidationReport } from "@/lib/answer/schema";

export interface PassageView {
  id: number;
  label: string;
  text: string;
  lineStart: number;
  lineEnd: number;
  group: string | null;
  groupTitle: string;
  doc: string | null;
  docTitle: string;
  docStatus: string;
  docUrl: string;
  path: string[];
  brIds: string[];
  before: string;
  after: string;
  searchPhrase: string;
  /** Older saved answers lack these. */
  docModified?: string;
  section?: string;
  citeLabel?: string;
  href?: string;
}

/** How the server read the question and what it searched (the "meta" event). */
export interface AskMeta {
  analysis: { intent: string; scope: Record<string, string[]>; scopeLabel: string; inherited: string[]; sides: string[] };
  sections: { title: string; doc: string | null; docTitle: string; href: string; included: number; total: number }[];
  omitted: { sections: number; passages: number };
}

export interface Turn {
  id: string;
  question: string;
  ruleIds: string[];
  selection: string;
  passages: PassageView[];
  answer: string;
  status: "streaming" | "clear" | "needs-clarity" | "error";
  note: string;
  cited: string[];
  error: string;
  truncated: boolean;
  /** The validated structured answer (new answers). `answer` then holds the raw streamed JSON. */
  structured?: Answer;
  report?: ValidationReport;
  /** The model ignored the answer format; `structured` holds its text as one block. */
  fallback?: boolean;
  meta?: AskMeta;
  model?: string;
}
