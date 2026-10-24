# Keydemand V2 Phase 1 — Business Rules & Requirements Knowledge Base

**As of:** 2026-10-24 · **Entry point:** *Keydemand V2 Phase 1 - Delivery Plan.xlsx* (Drive `1LvPiNQFNLQu-IYuu-1VNS47Y952OaR6L`)

## What this file is

This file brings together the **core Keydemand V2 Phase 1 business documents**:
- business rules and change requests (CRs), plus client clarifications
- product requirements and the PRD, stories and epics
- the Master Sheet fields
- input fields and listing management
- relevancy logic
- every page and user-journey document (Landing, Enterprise, Agent, Brand Retail/F&B, Office Tenant, Managed Space, Keydemand Team)
- the Control Panel and admin
- roles, notifications and the high-ticket lead (HTL) workflow

Every source was read line by line, and each current document is transcribed in full: headings, tables, field lists, options, limits, examples and comments.

Every atomic rule gets a stable ID, `BR-<AREA>-<NNN>`, with the source section cited next to it.

**The source documents are read-only.** Nothing in Drive was edited, commented on or changed. This file is the only output.

## Scope and authority

- **Only current (AUTHORITATIVE) documents are included.** That means the highest "Version N.N" in the title; if titles tie, the latest modified date.
- **Older versions (HISTORY) and non-authoritative docs are listed by name only** in the Source register. Non-authoritative docs include the "Relevancy Business Guide — DO NOT TAKE" and the empty "Rough 2" draft.
- **When two current documents disagree,** a later-dated CR or decision overrides an earlier one. Every such clash is listed under **Cross-document conflicts & decisions needed**, so you can confirm it rather than have it silently resolved.

## Rule ID prefixes

| Prefix | Area | Prefix | Area |
|---|---|---|---|
| CR | Change requests & business-rule changes | PG1 | Landing, Enterprise, Agent pages, user journeys |
| DQ | Clarifications, doubts, client Q&A | PG2 | Occupier pages (Brand Retail/F&B, Office Tenant, Managed Space) |
| REQ | PRD, requirements, stories, epics | KDT | Keydemand Team pages & dashboard |
| MS | Master Sheet fields (story-wise) | ADM | Control Panel & admin |
| FLD | Input fields, cards, bulk upload, listings | ROL / NTF / HTL | Roles · notifications · high-ticket-lead workflow |
| REL | Relevancy / matching logic | | |

Rule numbers can have gaps. Rules from superseded documents were removed, but the remaining IDs were never renumbered.

## Not in this file

- **Excluded by decision (2026-10-24):**
  - delivery plan, environments and on-call
  - legal and compliance (Privacy Policy, T&C, India/GDPR)
  - event tracking, UTM and marketing messaging
  - test cases
  - the client-discussion folders
- **Excluded by decision (2026-10-23):** invoices, third-party pitch decks, media, bug lists and progress slides.
- **FAQ (green, i.e. current, in the Delivery Plan link list):** Drive `1q8mVbidN6Bp0VlofoRNtwx5Z62BcbSke`. It's UNREADABLE ("Requested entity was not found"), so it was probably deleted or not shared. It needs a working link or a copy.
- **Outside Google Drive:** the Figma design, the SharePoint workbook, Teams and live app URLs. Connected tools can't open these.
- **Images:** many could not be viewed. They are marked `[Image: …]`.
- **Credentials:** replaced with `[REDACTED-credential]`.

## Adding new documents or changes

1. Read the new doc fully, following `kb/_brief.md`.
2. Either add it to the right `kb/sections/NN-*.md`, or create a new group file and add it to `INCLUDE` in `kb/build.py`.
3. If it supersedes a doc, mark the old one `[HISTORY — superseded by …]`. The build drops it automatically.
4. Re-check `kb/sections/00-core-cross-doc.md` for new conflicts.
5. Add a line to `kb/changelog.md`.
6. Rebuild by running `python3 kb/build.py`.
