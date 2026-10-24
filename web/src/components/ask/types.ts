// Shapes shared by the Ask page components (mirror /api/ask's NDJSON events).
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
}
