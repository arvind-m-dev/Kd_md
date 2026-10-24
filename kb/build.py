#!/usr/bin/env python3
"""Assemble the Keydemand V2 business-rules knowledge base from kb/ parts.

Inputs (kb/):
  00-header.md                 hand-written intro, authority rules, update process
  sections/<SYNTH>             cross-doc synthesis (conflicts, decisions, glossary)
  sections/NN-*.md             one file per doc group; only INCLUDE is built
  changelog.md                 change log, appended at the end
Output (project root):
  KEYDEMAND_V2_BUSINESS_RULES.md

Scope (user decision 2026-10-24): core business-rule groups only, authoritative
docs only. HISTORY / NON-AUTHORITATIVE doc blocks are stripped; they stay listed
by name in the source register.

Re-run after adding or editing any section: python3 kb/build.py
"""
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
KB = ROOT / "kb"
SECTIONS = KB / "sections"
MASTER = ROOT / "KEYDEMAND_V2_BUSINESS_RULES.md"

SYNTH = "00-core-cross-doc.md"
INCLUDE = [
    "02-change-requests.md",
    "03-clarifications.md",
    "04-requirements.md",
    "05-master-sheet.md",
    "06-fields-listings.md",
    "07-relevancy.md",
    "08-landing-enterprise-agent.md",
    "09-occupier-pages.md",
    "10-keydemand-team.md",
    "11-control-panel-admin.md",
    "12-roles-notifications.md",
]

BR_RE = re.compile(r"^\s*- \*\*(BR-[A-Z0-9]+-\d+)\*\*")
DROP_RE = re.compile(r"^## .+\[(HISTORY|NON-AUTH)")
# Structural H2s that start a new block; content headings are nested by kb/normalize.py.
DOC_RE = re.compile(r"^## (Documents in this group|Group-level notes|.+\[(AUTHORITATIVE|HISTORY|NON-AUTH|UNREADABLE|SKIPPED))")


def strip_superseded(text):
    """Remove '## <doc> [HISTORY…]' / '[NON-AUTH…]' blocks up to the next '## '."""
    out, dropping = [], False
    for line in text.splitlines():
        if DOC_RE.match(line):
            dropping = bool(DROP_RE.match(line))
        if not dropping:
            out.append(line)
    text = "\n".join(out)
    return re.sub(r"(\n---\s*){2,}", "\n---\n", text)


def demote(text, levels=1):
    """Push every markdown heading down `levels`, skipping fenced code."""
    out, fenced = [], False
    for line in text.splitlines():
        if line.lstrip().startswith("```"):
            fenced = not fenced
        if not fenced and re.match(r"^#{1,5} ", line):
            line = "#" * levels + line
        out.append(line)
    return "\n".join(out)


def title_of(text, fallback):
    m = re.search(r"^# (.+)$", text, re.M)
    return m.group(1).strip() if m else fallback


def anchor(title):
    a = re.sub(r"[^\w\- ]", "", title.lower()).strip()
    return re.sub(r" ", "-", a)


def doc_rows(text):
    """Rows of the '## Documents in this group' table, header excluded."""
    m = re.search(r"^## Documents in this group\s*\n(.*?)(?:\n\s*\n|\n---)", text, re.M | re.S)
    if not m:
        return []
    rows = [r for r in m.group(1).splitlines() if r.startswith("|")]
    return [r for r in rows[1:] if not re.match(r"^\|\s*-", r)]


def main():
    header = (KB / "00-header.md").read_text()
    synth = (SECTIONS / SYNTH).read_text()
    changelog = (KB / "changelog.md").read_text() if (KB / "changelog.md").exists() else ""

    stats, register, bodies = [], [], []
    for name in INCLUDE:
        raw = (SECTIONS / name).read_text()
        text = strip_superseded(raw)
        title = title_of(text, name)
        nbr = sum(1 for l in text.splitlines() if BR_RE.match(l))
        rows = doc_rows(raw)
        n_auth = sum(1 for r in rows if "AUTHORITATIVE" in r and "NON-AUTH" not in r)
        stats.append((name, title, n_auth, len(rows), nbr))
        register += [f"| G{name[:2]} " + r for r in rows]
        bodies.append(demote(text))

    total_br = sum(s[4] for s in stats)
    stitle = title_of(synth, "Cross-document conflicts")
    toc = ["## Contents", "",
           f"- [{stitle}](#{anchor(stitle)})",
           "- [Source register](#source-register)"]
    for name, title, n_auth, ndocs, nbr in stats:
        toc.append(f"- [{title}](#{anchor(title)}) — {n_auth} current docs, {nbr} rules")
    toc.append("- [Change log](#change-log)")

    reg = [
        "## Source register", "",
        f"Every document in scope, including superseded ones (listed by name only). "
        f"{total_br} business rules from current documents.", "",
        "| Group | # | Title | Type | Drive ID | Owner | Modified | Status |",
        "|---|---|---|---|---|---|---|---|",
        *register,
    ]

    parts = [header.rstrip(), "\n".join(toc), demote(synth), "\n".join(reg), *bodies]
    if changelog:
        parts.append(changelog.rstrip())
    MASTER.write_text("\n\n---\n\n".join(parts) + "\n")

    for name, title, n_auth, ndocs, nbr in stats:
        print(f"{name:34} current={n_auth:<3} listed={ndocs:<3} rules={nbr}")
    print(f"TOTAL rules={total_br}  register rows={len(register)}")
    print(f"{MASTER.name}: {MASTER.stat().st_size // 1024} KB")


if __name__ == "__main__":
    main()
