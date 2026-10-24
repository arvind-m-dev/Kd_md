#!/usr/bin/env python3
"""Check that a source document's text is present in its section of the knowledge base.

Usage: python3 kb/coverage.py <source.txt> <section.md> "<doc heading substring>" [out_missing.txt]

The source text is split into lines (and long lines into sentences). Each piece is normalised
(lowercase, alphanumerics only) and counted as present if it appears verbatim in the doc's block
of the section file, or if at least 70% of its word trigrams do (this tolerates table and
punctuation reformatting). Pieces under 4 words are skipped. Prints coverage and writes the
missing pieces to out_missing.txt.
"""
import re
import sys

DOC_RE = re.compile(r"^## (Documents in this group|Group-level notes|.+\[(AUTHORITATIVE|HISTORY|NON-AUTH|UNREADABLE|SKIPPED))")


def norm_words(s):
    return re.findall(r"[a-z0-9₹%]+", s.lower())


def doc_block(section, needle):
    lines, out, on = section.splitlines(), [], False
    for l in lines:
        if DOC_RE.match(l):
            on = needle.lower() in l.lower() and "[AUTHORITATIVE" in l.upper()
        if on:
            out.append(l)
    return "\n".join(out)


def pieces(src):
    for line in src.splitlines():
        for p in re.split(r"(?<=[.!?])\s+(?=[A-Z])", line) if len(line) > 300 else [line]:
            w = norm_words(p)
            if len(w) >= 4:
                yield p.strip(), w


def main():
    src_path, sec_path, needle = sys.argv[1:4]
    out_path = sys.argv[4] if len(sys.argv) > 4 else "missing.txt"
    block = doc_block(open(sec_path).read(), needle)
    if not block:
        sys.exit(f"no AUTHORITATIVE block matching {needle!r} in {sec_path}")
    bw = norm_words(block)
    btext = " " + " ".join(bw) + " "
    tri = {tuple(bw[i:i + 3]) for i in range(len(bw) - 2)}
    total = ok = 0
    missing = []
    for raw, w in pieces(open(src_path).read()):
        total += 1
        if " " + " ".join(w) + " " in btext:
            ok += 1
            continue
        t = [tuple(w[i:i + 3]) for i in range(len(w) - 2)]
        if t and sum(x in tri for x in t) / len(t) >= 0.7:
            ok += 1
        else:
            missing.append(raw)
    open(out_path, "w").write("\n".join(missing))
    pct = 100 * ok / total if total else 100
    print(f"{needle[:60]}: {ok}/{total} pieces present ({pct:.1f}%), missing={len(missing)} -> {out_path}")


if __name__ == "__main__":
    main()
