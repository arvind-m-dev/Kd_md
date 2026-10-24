"""Nest headings inside each doc's '### Content' block under level 4+.
Content ends at the next structural heading. Run: python3 kb/normalize.py kb/sections/*.md"""
import re, sys
END = re.compile(r"^(### (Business rules|Open questions|Differences)|## (Documents in this group|Group-level notes)|## .+\[(AUTHORITATIVE|HISTORY|NON-AUTH|UNREADABLE|SKIPPED))")
H = re.compile(r"^(#{1,6}) ")
for fn in sys.argv[1:]:
    lines = open(fn).read().splitlines()
    out, block, inc, fenced, moved = [], [], False, False, 0
    def flush():
        global moved
        lv = [len(H.match(l).group(1)) for l in block if H.match(l)]
        shift = max(0, 4 - min(lv)) if lv else 0
        for l in block:
            m = H.match(l)
            if shift and m:
                l = "#" * min(len(m.group(1)) + shift, 6) + l[len(m.group(1)):]
                moved += 1
            out.append(l)
        block.clear()
    for line in lines:
        if line.lstrip().startswith("```"): fenced = not fenced
        if not fenced and line.startswith("### Content"):
            if inc: flush()
            inc = True; out.append(line); continue
        if not fenced and inc and END.match(line):
            flush(); inc = False
        (block if inc else out).append(line)
    if inc: flush()
    open(fn, "w").write("\n".join(out) + "\n")
    print(f"{fn}: {moved} headings nested")
