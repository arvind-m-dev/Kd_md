// BM25 search over KD passages (port of app/kb_index.py). Index is built once per server instance.
import "server-only";
import rawPassages from "@/generated/passages.json";
import { getDoc, getGroup } from "@/lib/kd";
import { anchorAt } from "@/lib/reader";

export interface Passage {
  id: number;
  text: string;
  lineStart: number;
  lineEnd: number;
  group: string | null;
  chapter: string;
  doc: string | null;
  path: string[];
  brIds: string[];
}

export const passages = rawPassages as Passage[];

const TOKEN_RE = /br-[a-z0-9]+-\d+|[a-z0-9₹]+(?:\.[0-9]+)?/g;
const STOP = new Set(
  "the a an of to and or in on for is are be by with as at from this that it its can will should what which who how does do i we you".split(" "),
);

export function tokenize(text: string): string[] {
  const out: string[] = [];
  for (let t of text.toLowerCase().match(TOKEN_RE) ?? []) {
    if (STOP.has(t)) continue;
    if (t.length > 4 && t.endsWith("s") && !t.endsWith("ss")) t = t.slice(0, -1);
    out.push(t);
  }
  return out;
}

// Headings and the doc title count towards the match, so "Office Tenant page" finds that doc.
const index = (() => {
  const docs: { tf: Map<string, number>; len: number }[] = [];
  const df = new Map<string, number>();
  for (const p of passages) {
    const title = p.doc ? getDoc(p.doc)!.title : "";
    const toks = tokenize([p.text, title, title, p.path.join(" "), p.chapter].join(" "));
    const tf = new Map<string, number>();
    for (const t of toks) tf.set(t, (tf.get(t) ?? 0) + 1);
    docs.push({ tf, len: toks.length });
    for (const t of tf.keys()) df.set(t, (df.get(t) ?? 0) + 1);
  }
  const n = passages.length;
  const avgdl = docs.reduce((s, d) => s + d.len, 0) / Math.max(n, 1);
  const idf = new Map<string, number>();
  for (const [t, c] of df) idf.set(t, Math.log(1 + (n - c + 0.5) / (c + 0.5)));
  // BR ID -> passages, with the passage that defines the rule first
  const br = new Map<string, number[]>();
  for (const p of passages) {
    for (const b of p.brIds) {
      const ids = br.get(b.toLowerCase()) ?? [];
      if (p.text.includes(`**${b}**`)) ids.unshift(p.id);
      else ids.push(p.id);
      br.set(b.toLowerCase(), ids);
    }
  }
  return { docs, avgdl, idf, br };
})();

/** Ranked passage IDs. `keep` limits the search to some passages (e.g. no working notes, lib/scope.ts). */
export function search(query: string, k = 20, keep?: (p: Passage) => boolean, k1 = 1.4, b = 0.75): number[] {
  const q = tokenize(query);
  const scores = new Map<number, number>();
  for (const t of new Set(q)) {
    const idf = index.idf.get(t);
    if (!idf) continue;
    index.docs.forEach(({ tf, len }, pid) => {
      const f = tf.get(t);
      if (f && (!keep || keep(passages[pid]))) scores.set(pid, (scores.get(pid) ?? 0) + (idf * f * (k1 + 1)) / (f + k1 * (1 - b + (b * len) / index.avgdl)));
    });
  }
  // exact phrase bonus
  const ql = query.toLowerCase().trim();
  if (ql.length > 6) {
    for (const [pid, s] of scores) if (passages[pid].text.toLowerCase().includes(ql)) scores.set(pid, s * 1.5);
  }
  // direct BR-ID lookups go first
  const pinned = q
    .filter((t) => t.startsWith("br-"))
    .flatMap((t) => index.br.get(t) ?? [])
    .filter((pid) => !keep || keep(passages[pid]));
  const ranked = [...scores].sort((a, z) => z[1] - a[1]).slice(0, k * 2).map(([pid]) => pid);
  return [...new Set([...pinned, ...ranked])].slice(0, k);
}

// A short plain-text phrase to Ctrl+F in the original document, and to find the passage on the reader page:
// written as it renders (no markdown markers, list numbers, escapes or tags).
function searchPhrase(text: string): string {
  for (const line of text.split("\n")) {
    let s = line
      .replace(/<\/?[a-z][a-z0-9]*(\s[^>]*)?\/?>/gi, " ")
      .replace(/<([^<>\s]+@[^<>\s]+|https?:[^<>\s]+)>/g, "$1")
      .replace(/\\([\\`*_{}[\]()#+\-.!|])/g, "$1")
      .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
      .replace(/\*\*|__|`|🟩|~~/g, "")
      .replace(/(^|\s)[*_](?=\S)|(?<=\S)[*_](?=\s|$|[.,;:])/g, "$1")
      .replace(/^[#>\-\s|*+]+/, "")
      .replace(/^\d+[.)]\s+/, "")
      .replace(/^\[[ xX]\]\s*/, "")
      .trim();
    s = s.replace(/\s*\|\s*/g, " ").replace(/^BR-[A-Z0-9]+-\d+\s*[—-]\s*/, "");
    if (s.split(/\s+/).length >= 4 && !/^[-:\s]*$/.test(s)) return s.split(/\s+/).slice(0, 10).join(" ");
  }
  return "";
}

export interface PassageView extends Passage {
  label: string;
  groupTitle: string;
  docTitle: string;
  docStatus: string;
  docUrl: string;
  before: string;
  after: string;
  searchPhrase: string;
  /** Last-modified date of the source document (YYYY-MM-DD), for version precedence. */
  docModified: string;
  /** The heading the passage sits under, for people. */
  section: string;
  /** Short readable citation, e.g. "Product Requirements … › Uploading Office Property Lease (Agent)". */
  citeLabel: string;
  /** Where the passage is in the app: its document, scrolled to the heading above it, passage flashed. */
  href: string;
}

/** Links a passage to the place it can be read in the app. Only links to anchors that exist. */
function passageHref(p: Passage, phrase: string): string {
  const find = phrase ? `?${new URLSearchParams({ find: phrase })}` : "";
  if (p.doc && p.group) {
    const a = anchorAt(p.doc, p.lineStart);
    return `/read/${p.group}/${p.doc}${find}${a ? `#${a.slug}` : ""}`;
  }
  if (p.group) return `/read/${p.group}${find}`;
  // The conflicts / decisions chapter: link to the item on the Open questions page.
  const item = p.text.match(/\*\*([DCP]-\d{2})\b/);
  if (item) return `/conflicts#${item[1]}`;
  return `/kd.md`;
}

/** A passage with its source details and the passages either side (same doc only). */
export function passageView(pid: number, label: string): PassageView {
  const p = passages[pid];
  const doc = p.doc ? getDoc(p.doc) : undefined;
  const same = (o?: Passage) => o && o.doc === p.doc && o.group === p.group;
  const prev = passages[pid - 1];
  const next = passages[pid + 1];
  // The reader drops a document's own title line, so don't pick the phrase from it.
  const phrase = searchPhrase(doc && p.lineStart === doc.line ? p.text.split("\n").slice(1).join("\n") : p.text);
  const section = p.path.at(-1) ?? doc?.title ?? p.chapter;
  return {
    ...p,
    label,
    groupTitle: p.group ? `${p.group} — ${getGroup(p.group)!.title}` : p.chapter,
    docTitle: doc?.title ?? "",
    docStatus: doc?.status ?? "",
    docUrl: doc?.url ?? "",
    before: same(prev) ? prev.text : "",
    after: same(next) ? next.text : "",
    searchPhrase: phrase,
    docModified: doc?.modified?.slice(0, 10) ?? "",
    section,
    citeLabel: [doc?.title ?? (p.group ? getGroup(p.group)!.title : p.chapter), section !== doc?.title ? section : ""].filter(Boolean).join(" › "),
    href: passageHref(p, phrase),
  };
}
