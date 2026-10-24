"""Chunk the Keydemand knowledge-base markdown into searchable passages.

Each passage keeps where it came from: the group (H2), the source document (H3 with
its Drive ID and URL), the heading path below that, the line range in the .md file,
and any BR rule IDs it contains. Search is BM25 over passage text plus its headings.
"""
import math
import re
from collections import Counter
from dataclasses import dataclass, field

MAX_CHARS = 1800      # split blocks bigger than this
MERGE_CHARS = 900     # merge consecutive small blocks under the same heading up to this

ID_RE = re.compile(r"ID `([A-Za-z0-9_-]{20,})`")
BR_RE = re.compile(r"\bBR-[A-Z0-9]+-\d+\b")
DOC_HEAD_RE = re.compile(r"^### (.+?)\s+\[(AUTHORITATIVE[^\]]*)\]")
TOKEN_RE = re.compile(r"br-[a-z0-9]+-\d+|[a-z0-9₹]+(?:\.[0-9]+)?")
STOP = set("the a an of to and or in on for is are be by with as at from this that it its "
           "can will should what which who how does do i we you".split())


def drive_url(drive_id, doc_type):
    t = (doc_type or "").lower()
    if "google doc" in t or t.strip() == "gdoc":
        return f"https://docs.google.com/document/d/{drive_id}/edit"
    if "google sheet" in t or "gsheet" in t:
        return f"https://docs.google.com/spreadsheets/d/{drive_id}/edit"
    return f"https://drive.google.com/file/d/{drive_id}/view"


def tokenize(text):
    out = []
    for t in TOKEN_RE.findall(text.lower()):
        if t in STOP:
            continue
        if len(t) > 4 and t.endswith("s") and not t.endswith("ss"):
            t = t[:-1]
        out.append(t)
    return out


@dataclass
class Passage:
    id: int
    text: str
    line_start: int          # 1-based, inclusive
    line_end: int
    group: str
    doc_title: str
    doc_status: str
    drive_id: str
    doc_url: str
    path: list = field(default_factory=list)
    br_ids: list = field(default_factory=list)

    def meta(self):
        return {
            "id": self.id, "group": self.group, "doc_title": self.doc_title,
            "doc_status": self.doc_status, "drive_id": self.drive_id, "doc_url": self.doc_url,
            "path": self.path, "line_start": self.line_start, "line_end": self.line_end,
            "br_ids": self.br_ids, "text": self.text,
        }


def parse_register(lines):
    """Drive ID -> type, from the '## Source register' table."""
    types, on = {}, False
    for line in lines:
        if line.startswith("## "):
            on = line.startswith("## Source register")
            continue
        if on and line.startswith("| G"):
            cells = [c.strip() for c in line.strip().strip("|").split("|")]
            if len(cells) >= 5:
                types[cells[4].strip("`")] = cells[3]
    return types


def blocks(lines):
    """Yield (start, end, kind, lines, heading_ctx) for paragraphs/lists/tables/headings."""
    cur, start, kind = [], 0, None
    for i, line in enumerate(lines, 1):
        k = ("blank" if not line.strip() else "head" if re.match(r"^#{1,6} ", line)
             else "table" if line.lstrip().startswith("|") else "rule" if line.strip() == "---"
             else "text")
        if k in ("blank", "head", "rule") or (cur and k != kind and "table" in (k, kind)):
            if cur:
                yield start, i - 1, kind, cur
                cur = []
            if k == "head":
                yield i, i, "head", [line]
            if k in ("blank", "head", "rule"):
                continue
        if not cur:
            start, kind = i, k
        cur.append(line)
    if cur:
        yield start, len(lines), kind, cur


def split_block(start, kind, blines):
    """Split one oversized block, repeating a table's header rows on every piece."""
    header = blines[:2] if kind == "table" and len(blines) > 2 and re.match(r"^\s*\|[\s:|-]+\|\s*$", blines[1]) else []
    body = blines[len(header):]
    piece, pstart, size = [], start + len(header), sum(map(len, header))
    for j, line in enumerate(body):
        if piece and size + len(line) > MAX_CHARS:
            yield pstart, pstart + len(piece) - 1, header + piece
            piece, pstart, size = [], start + len(header) + j, sum(map(len, header))
        piece.append(line)
        size += len(line) + 1
    if piece:
        yield pstart, pstart + len(piece) - 1, header + piece


def build_passages(md_text):
    lines = md_text.splitlines()
    reg_types = parse_register(lines)
    passages = []
    group = doc_title = doc_status = drive_id = doc_url = ""
    path = []                 # headings below the doc (or below the H2 for non-doc chapters)
    pending = None            # passage being merged

    def flush():
        nonlocal pending
        if pending:
            passages.append(pending)
            pending = None

    for start, end, kind, blines in blocks(lines):
        if kind == "head":
            flush()
            level = len(blines[0]) - len(blines[0].lstrip("#"))
            title = blines[0][level:].strip()
            if level <= 2:
                group, doc_title, doc_status, drive_id, doc_url, path = title, "", "", "", "", []
            elif level == 3:
                m = DOC_HEAD_RE.match(blines[0])
                if m:
                    doc_title, doc_status, drive_id, doc_url, path = m.group(1).strip(), m.group(2), "", "", []
                else:
                    path = [title]
            else:
                depth = level - 4 + (0 if doc_title else 1)
                path = path[:max(depth, 0)] + [title]
            continue
        if doc_title and not drive_id:
            m = ID_RE.search("\n".join(blines))
            if m:
                drive_id = m.group(1)
                doc_url = drive_url(drive_id, reg_types.get(drive_id, ""))
        pieces = (split_block(start, kind, blines) if sum(map(len, blines)) > MAX_CHARS
                  else [(start, end, blines)])
        for s, e, plines in pieces:
            text = "\n".join(plines)
            if pending and len(pending.text) + len(text) < MERGE_CHARS and kind != "table":
                pending.text += "\n\n" + text
                pending.line_end = e
                pending.br_ids = sorted(set(pending.br_ids) | set(BR_RE.findall(text)))
                continue
            flush()
            pending = Passage(len(passages), text, s, e, group, doc_title, doc_status,
                              drive_id, doc_url, list(path), sorted(set(BR_RE.findall(text))))
            if kind == "table":
                flush()
    flush()
    for i, p in enumerate(passages):
        p.id = i
    return passages


class Index:
    def __init__(self, md_text):
        self.lines = md_text.splitlines()
        self.passages = build_passages(md_text)
        self.docs = []
        df = Counter()
        for p in self.passages:
            # headings and doc title count towards the match, so "Office Tenant page" finds that doc
            toks = tokenize(" ".join([p.text, p.doc_title, p.doc_title, " ".join(p.path), p.group]))
            tf = Counter(toks)
            self.docs.append((tf, len(toks)))
            df.update(tf.keys())
        n = len(self.passages)
        self.avgdl = sum(l for _, l in self.docs) / max(n, 1)
        self.idf = {t: math.log(1 + (n - c + 0.5) / (c + 0.5)) for t, c in df.items()}
        # BR ID -> passages, with the passage that defines the rule first
        self.br_index = {}
        for p in self.passages:
            for b in p.br_ids:
                ids = self.br_index.setdefault(b.lower(), [])
                ids.insert(0, p.id) if f"**{b}**" in p.text else ids.append(p.id)

    def search(self, query, k=20, k1=1.4, b=0.75):
        q = tokenize(query)
        scores = Counter()
        for t in set(q):
            idf = self.idf.get(t)
            if not idf:
                continue
            for pid, (tf, dl) in enumerate(self.docs):
                f = tf.get(t)
                if f:
                    scores[pid] += idf * f * (k1 + 1) / (f + k1 * (1 - b + b * dl / self.avgdl))
        # exact phrase bonus
        ql = query.lower().strip()
        if len(ql) > 6:
            for pid in list(scores):
                if ql in self.passages[pid].text.lower():
                    scores[pid] *= 1.5
        # direct BR-ID lookups go first
        pinned = [pid for t in q if t.startswith("br-") for pid in self.br_index.get(t, [])]
        ranked = list(dict.fromkeys(pinned + [pid for pid, _ in scores.most_common(k * 2)]))
        return ranked[:k]

    def neighbours(self, pid):
        p = self.passages[pid]
        prev = self.passages[pid - 1] if pid > 0 else None
        nxt = self.passages[pid + 1] if pid + 1 < len(self.passages) else None
        same = lambda o: o and o.doc_title == p.doc_title and o.group == p.group
        return (prev.text if same(prev) else ""), (nxt.text if same(nxt) else "")


def outline(lines):
    """Topics covered: groups -> current documents -> top-level topics in each doc's Content.

    Chapters that aren't document groups (overview, conflicts, register, change log) are
    listed with their own sub-headings.
    """
    head = re.compile(r"^(#{2,6}) (.+)$")
    groups, g, d, in_content = [], None, None, False
    for n, line in enumerate(lines, 1):
        m = head.match(line)
        if not m:
            if d is not None and line.lstrip().startswith("- **BR-"):
                d["rules"] += 1
            continue
        level, title = len(m.group(1)), m.group(2).replace("**", "").strip()
        if level == 2:
            g = {"title": title, "line": n, "is_group": bool(re.match(r"^\d\d — ", title)),
                 "docs": [], "topics": []}
            groups.append(g)
            d, in_content = None, False
        elif level == 3 and g is not None:
            dm = DOC_HEAD_RE.match(line)
            if dm:
                d = {"title": dm.group(1).strip(), "status": dm.group(2), "line": n,
                     "drive_id": "", "doc_url": "", "rules": 0, "topics": []}
                g["docs"].append(d)
            else:
                d = None
                g["topics"].append({"title": title, "line": n, "level": level})
            in_content = False
        elif d is not None:
            if level == 4:
                in_content = title == "Content"
            elif in_content:
                d["topics"].append({"title": title, "line": n, "level": level})
        elif g is not None and level == 4 and not g["is_group"]:
            g["topics"].append({"title": title, "line": n, "level": level})
    # keep each doc's shallowest topic level only, and give every topic its end line
    heads = [n for n, l in enumerate(lines, 1) if head.match(l)]
    def end_of(line, level):
        for n in heads:
            if n > line:
                m = head.match(lines[n - 1])
                if len(m.group(1)) <= level:
                    return n - 1
        return len(lines)
    for g in groups:
        g["end"] = end_of(g["line"], 2)
        for d in g["docs"]:
            if d["topics"]:
                top = min(t["level"] for t in d["topics"])
                keep = [t for t in d["topics"] if t["level"] == top]
                if len(keep) < 3:  # too coarse: show one level deeper as well
                    keep = [t for t in d["topics"] if t["level"] <= top + 1]
                d["topics"] = keep
            for t in d["topics"]:
                t["end"] = end_of(t["line"], t["level"])
            d["end"] = end_of(d["line"], 3)
            # a topic that is only a heading (its text sits under the next heading) shows that text too
            for t, nxt in zip(d["topics"], d["topics"][1:] + [None]):
                if t["end"] - t["line"] < 4:
                    t["end"] = nxt["end"] if nxt else d["end"]
        for t in g["topics"]:
            t["end"] = end_of(t["line"], t["level"])
    return groups
