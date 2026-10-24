// Build-time KD data step.
// Reads the master Keydemand business-rules .md and writes JSON the app imports:
//   src/generated/kd-data.json  groups, docs, rules, decisions, conflicts,
//                               placeholders, glossary, outline, stats
//   src/generated/passages.json search passages (text chunks with line ranges)
// Run: npm run kd   (also runs automatically before `next build` / `next dev`)
import { copyFileSync, existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const WEB = join(dirname(fileURLToPath(import.meta.url)), "..");
const MASTER = join(WEB, "..", "KEYDEMAND_V2_BUSINESS_RULES.md");
const CONTENT = join(WEB, "content", "kd.md");
const OUT = join(WEB, "src", "generated", "kd-data.json");
const OUT_PASSAGES = join(WEB, "src", "generated", "passages.json");

// The master file lives one folder up; content/kd.md is the committed copy Vercel builds from.
mkdirSync(dirname(CONTENT), { recursive: true });
if (existsSync(MASTER)) copyFileSync(MASTER, CONTENT);
if (!existsSync(CONTENT)) throw new Error(`No KD source: ${MASTER} or ${CONTENT}`);

const md = readFileSync(CONTENT, "utf8");
const lines = md.split("\n");

// ---------- helpers ----------
const RULE_RE = /^- \*\*(BR-([A-Z0-9]+)-(\d+))\*\* — (.*)$/;
const DOC_HEAD_RE = /^### (.+?)\s+\[([A-Z-]+)(?: — ([^\]]+))?\]\s*$/;
const GROUP_RE = /^## (\d{2}) — (.+)$/;
const ID_RE = /ID `([A-Za-z0-9_-]{20,})`/;
const BR_REF_RE = /BR-([A-Z0-9]+)-(\d+)((?:\/\d+)*)/g;

const cells = (line) => line.trim().replace(/^\||\|$/g, "").split("|").map((c) => c.trim());
const stripMd = (s) => s.replace(/\*\*/g, "").replace(/`/g, "").trim();

function slugify(title) {
  // GitHub-style heading anchor, matching the links in the file's Contents list.
  return title
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s-]/gu, "")
    .replace(/\s/g, "-");
}

function driveUrl(id, type = "") {
  const t = type.toLowerCase();
  if (t.includes("google doc")) return `https://docs.google.com/document/d/${id}/edit`;
  if (t.includes("google sheet")) return `https://docs.google.com/spreadsheets/d/${id}/edit`;
  return `https://drive.google.com/file/d/${id}/view`;
}

// "BR-PG2-031/105" -> ["BR-PG2-031", "BR-PG2-105"]
function brRefs(text) {
  const ids = new Set();
  for (const m of text.matchAll(BR_REF_RE)) {
    const width = m[2].length;
    ids.add(`BR-${m[1]}-${m[2]}`);
    for (const n of m[3].split("/").filter(Boolean)) ids.add(`BR-${m[1]}-${n.padStart(width, "0")}`);
  }
  return [...ids];
}

// Readable rule text: drop inline Google-Docs comment markers and strike-through notes.
function plain(text) {
  return text
    .replace(/⟦comment [^⟧]* start⟧/g, "")
    .replace(/⟦comment [^⟧]* end — ([^⟧]*)⟧/g, "")
    .replace(/~~(.*?)~~ \*\(struck through in source\)\*/g, "")
    .replace(/\*\*(.*?)\*\*/g, "$1")
    .replace(/\s+/g, " ")
    .trim();
}

// ---------- outline (every heading, with line ranges) ----------
const outline = [];
let inFence = false;
lines.forEach((line, i) => {
  if (line.startsWith("```")) inFence = !inFence;
  const m = !inFence && line.match(/^(#{1,6}) (.+)$/);
  if (m) outline.push({ level: m[1].length, title: stripMd(m[2]), slug: slugify(stripMd(m[2])), line: i + 1 });
});
outline.forEach((h, i) => {
  const next = outline.slice(i + 1).find((o) => o.level <= h.level);
  h.endLine = next ? next.line - 1 : lines.length;
});
const chapter = (prefix) => outline.find((h) => h.level === 2 && h.title.startsWith(prefix));
const linesOf = (h) => lines.slice(h.line, h.endLine);

// ---------- source register ----------
const register = [];
for (const line of linesOf(chapter("Source register"))) {
  if (!line.startsWith("| G")) continue;
  const [group, num, title, type, id, owner, modified, status] = cells(line);
  const driveId = id.replace(/`/g, "");
  register.push({
    group: group.slice(1), num: Number(num), title, type, driveId, url: driveUrl(driveId, type),
    owner, modified, status, current: !/^(HISTORY|NON-AUTHORITATIVE)/.test(status),
  });
}
const regById = new Map(register.map((d) => [d.driveId, d]));

// ---------- groups, docs, rules ----------
const groups = [];
const docs = [];
const rules = [];
let group = null;
let doc = null;
let path = [];

lines.forEach((line, i) => {
  const n = i + 1;
  const g = line.match(GROUP_RE);
  if (g || line.startsWith("## ")) {
    group = g ? { id: g[1], title: g[2].trim(), slug: slugify(line.slice(3).trim()), line: n } : null;
    if (group) groups.push(group);
    doc = null;
    path = [];
    return;
  }
  if (!group) return;
  const h = line.match(/^(#{3,6}) (.+)$/);
  if (h) {
    const level = h[1].length;
    const d = line.match(DOC_HEAD_RE);
    if (level === 3) {
      doc = d ? { id: `${group.id}-${docs.length + 1}`, group: group.id, title: d[1].trim(), status: d[2], note: d[3] ?? "", line: n, slug: slugify(stripMd(h[2])) } : null;
      if (doc) docs.push(doc);
      path = doc ? [] : [stripMd(h[2])];
    } else {
      path = [...path.slice(0, Math.max(level - 4, 0)), stripMd(h[2])];
    }
    return;
  }
  if (doc && !doc.driveId) {
    const m = line.match(ID_RE);
    if (m) {
      const reg = regById.get(m[1]);
      Object.assign(doc, { driveId: m[1], url: driveUrl(m[1], reg?.type), type: reg?.type ?? "", modified: reg?.modified ?? "" });
    }
  }
  const r = line.match(RULE_RE);
  if (!r) return;
  let body = r[4];
  let source = "";
  const src = body.match(/\s*_\(§ (.*)\)_\s*$/);
  if (src) { source = src[1]; body = body.slice(0, src.index); }
  let tag = "";
  const t = body.match(/^\[([^\]]+)\]\s*/);
  if (t) { tag = t[1]; body = body.slice(t[0].length); }
  rules.push({
    id: r[1], prefix: r[2], num: Number(r[3]), group: group.id, doc: doc?.id ?? null,
    path: [...path], tag, text: plain(body), md: line.slice(2), source, line: n,
    refs: brRefs(body).filter((x) => x !== r[1]),
  });
});

// ---------- conflicts chapter: decisions, conflicts, placeholders, glossary ----------
const conflictsCh = chapter("Cross-document conflicts");
const sub = (title) => outline.find((h) => h.level === 3 && h.title.startsWith(title) && h.line > conflictsCh.line && h.line < conflictsCh.endLine);

const decisions = [];
{
  const h = sub("Decisions needed");
  let cur = null;
  linesOf(h).forEach((line, k) => {
    const m = line.match(/^\*\*(D-\d+) — (.+)\*\*\s*$/);
    if (m) {
      cur = { id: m[1], title: m[2], line: h.line + k + 1, md: "", resolution: "", question: "" };
      decisions.push(cur);
      return;
    }
    if (!cur || line.startsWith("---")) return;
    cur.md += line + "\n";
    const res = line.match(/Current resolution[^:]*: (.*)$/);
    if (res) cur.resolution = plain(res[1]);
    const q = line.match(/Question to confirm: (.*)$/);
    if (q) cur.question = plain(q[1]);
  });
  for (const d of decisions) {
    d.md = d.md.trim();
    d.open = /unresolved/i.test(d.resolution) || !d.resolution;
    d.rules = brRefs(d.md);
  }
}

const tableRows = (h, prefix) =>
  linesOf(h).map((line, k) => [line, h.line + k + 1]).filter(([l]) => l.startsWith(`| ${prefix}`));

const conflicts = tableRows(sub("Cross-document conflict register"), "C-").map(([line, n]) => {
  const [id, topic, a, b, resolution, status] = cells(line);
  return { id, topic, positionA: a, positionB: b, resolution, status, open: status !== "Resolved-by-rule", rules: brRefs(line), line: n };
});

const placeholders = tableRows(sub("Placeholders"), "P-").map(([line, n]) => {
  const [id, item, where, missing] = cells(line);
  return { id, item, where, missing, rules: brRefs(line), line: n };
});

const glossary = linesOf(sub("Glossary"))
  .filter((l) => l.startsWith("| ") && !l.startsWith("| Term") && !l.startsWith("|---"))
  .map((line) => {
    const [term, meaning, aka] = cells(line);
    return { term: stripMd(term), meaning, aka: aka ?? "", rules: brRefs(meaning) };
  });

// ---------- rule status: "needs-clarity" when an open decision, open conflict or placeholder names it ----------
const openRefs = new Map();
const mark = (ids, ref) => ids.forEach((id) => openRefs.set(id, [...(openRefs.get(id) ?? []), ref]));
decisions.filter((d) => d.open).forEach((d) => mark(d.rules, d.id));
conflicts.filter((c) => c.open).forEach((c) => mark(c.rules, c.id));
placeholders.forEach((p) => mark(p.rules, p.id));
const allRefs = new Map();
[...decisions, ...conflicts, ...placeholders].forEach((x) => x.rules.forEach((id) => allRefs.set(id, [...(allRefs.get(id) ?? []), x.id])));
for (const r of rules) {
  r.status = openRefs.has(r.id) ? "needs-clarity" : "clear";
  r.issues = allRefs.get(r.id) ?? [];
}

// ---------- per-group counts ----------
for (const g of groups) {
  const h = outline.find((o) => o.line === g.line);
  g.endLine = h.endLine;
  g.docCount = docs.filter((d) => d.group === g.id).length;
  g.ruleCount = rules.filter((r) => r.group === g.id).length;
  g.needsClarity = rules.filter((r) => r.group === g.id && r.status === "needs-clarity").length;
}
for (const d of docs) d.ruleCount = rules.filter((r) => r.doc === d.id).length;

const changelog = linesOf(chapter("Change log"))
  .filter((l) => /^\| \d{4}-/.test(l))
  .map((l) => { const [date, change] = cells(l); return { date, change }; });

const stats = {
  lines: lines.length, groups: groups.length, docs: docs.length, rules: rules.length,
  needsClarity: rules.filter((r) => r.status === "needs-clarity").length,
  decisions: decisions.length, openDecisions: decisions.filter((d) => d.open).length,
  conflicts: conflicts.length, openConflicts: conflicts.filter((c) => c.open).length,
  placeholders: placeholders.length, glossary: glossary.length, sources: register.length,
  updated: changelog.at(-1)?.date ?? "",
};

// ---------- search passages (same chunking as app/kb_index.py) ----------
// Paragraphs, lists and tables become passages; small neighbours under one heading are
// merged, big blocks are split (tables repeat their header rows on every piece).
const MAX_CHARS = 1800;
const MERGE_CHARS = 900;
const BR_ID_RE = /\bBR-[A-Z0-9]+-\d+\b/g;

function* blocks() {
  let cur = [], start = 0, kind = null;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const k = !line.trim() ? "blank" : /^#{1,6} /.test(line) ? "head"
      : line.trimStart().startsWith("|") ? "table" : line.trim() === "---" ? "rule" : "text";
    if (["blank", "head", "rule"].includes(k) || (cur.length && k !== kind && (k === "table" || kind === "table"))) {
      if (cur.length) { yield [start, i, kind, cur]; cur = []; }
      if (k === "head") yield [i + 1, i + 1, "head", [line]];
      if (["blank", "head", "rule"].includes(k)) continue;
    }
    if (!cur.length) { start = i + 1; kind = k; }
    cur.push(line);
  }
  if (cur.length) yield [start, lines.length, kind, cur];
}

function splitBlock(start, kind, blines) {
  const header = kind === "table" && blines.length > 2 && /^\s*\|[\s:|-]+\|\s*$/.test(blines[1]) ? blines.slice(0, 2) : [];
  const headLen = header.reduce((s, l) => s + l.length, 0);
  const pieces = [];
  let piece = [], pstart = start + header.length, size = headLen;
  blines.slice(header.length).forEach((line, j) => {
    if (piece.length && size + line.length > MAX_CHARS) {
      pieces.push([pstart, pstart + piece.length - 1, [...header, ...piece]]);
      piece = []; pstart = start + header.length + j; size = headLen;
    }
    piece.push(line);
    size += line.length + 1;
  });
  if (piece.length) pieces.push([pstart, pstart + piece.length - 1, [...header, ...piece]]);
  return pieces;
}

const passages = [];
{
  const docByLine = new Map(docs.map((d) => [d.line, d]));
  let pg = null, pd = null, ppath = [], chapterTitle = "", pending = null;
  const flush = () => { if (pending) passages.push(pending); pending = null; };
  for (const [start, end, kind, blines] of blocks()) {
    if (kind === "head") {
      flush();
      const level = blines[0].match(/^#+/)[0].length;
      const title = stripMd(blines[0].slice(level));
      if (level <= 2) {
        pg = groups.find((g) => g.line === start) ?? null;
        chapterTitle = title; pd = null; ppath = [];
      } else if (level === 3) {
        pd = docByLine.get(start) ?? null;
        ppath = pd ? [] : [title];
      } else {
        ppath = [...ppath.slice(0, Math.max(level - 4 + (pd ? 0 : 1), 0)), title];
      }
      continue;
    }
    const size = blines.reduce((s, l) => s + l.length, 0);
    const pieces = size > MAX_CHARS ? splitBlock(start, kind, blines) : [[start, end, blines]];
    for (const [s, e, plines] of pieces) {
      const text = plines.join("\n");
      if (pending && pending.text.length + text.length < MERGE_CHARS && kind !== "table") {
        pending.text += "\n\n" + text;
        pending.lineEnd = e;
        continue;
      }
      flush();
      pending = { id: 0, text, lineStart: s, lineEnd: e, group: pg?.id ?? null, chapter: chapterTitle, doc: pd?.id ?? null, path: [...ppath] };
      if (kind === "table") flush();
    }
  }
  flush();
  passages.forEach((p, i) => { p.id = i; p.brIds = [...new Set(p.text.match(BR_ID_RE) ?? [])].sort(); });
}

// ---------- sanity checks: fail the build rather than ship wrong data ----------
const problems = [];
const ids = new Set();
for (const r of rules) { if (ids.has(r.id)) problems.push(`duplicate ${r.id}`); ids.add(r.id); }
if (groups.length !== 11) problems.push(`expected 11 groups, got ${groups.length}`);
if (rules.length !== (md.match(/^- \*\*BR-[A-Z0-9]+-\d+\*\* — /gm) ?? []).length) problems.push("rule count mismatch");
if (rules.some((r) => !r.doc)) problems.push(`${rules.filter((r) => !r.doc).length} rules outside a document section`);
if (docs.some((d) => !d.driveId)) problems.push(`docs without Drive ID: ${docs.filter((d) => !d.driveId).map((d) => d.title).join("; ")}`);
if (problems.length) { console.error("build-kd failed:\n- " + problems.join("\n- ")); process.exit(1); }

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, JSON.stringify({ stats, groups, docs, register, rules, decisions, conflicts, placeholders, glossary, changelog, outline }));
writeFileSync(OUT_PASSAGES, JSON.stringify(passages));
console.log(`build-kd: ${passages.length} passages · ${rules.length} rules · ${docs.length} docs · ${groups.length} groups · ${decisions.length} decisions · ${conflicts.length} conflicts · ${glossary.length} glossary terms · ${stats.needsClarity} rules need clarity`);
