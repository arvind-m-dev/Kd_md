# Architecture

Keydemand Rules is a Next.js app over one Markdown knowledge base (`../KEYDEMAND_V2_BUSINESS_RULES.md`).
People use it to read, search, highlight and ask. AI tools use it through Markdown views and an MCP server.

```
                       KEYDEMAND_V2_BUSINESS_RULES.md
                                   │  scripts/build-kd.mjs (at dev/build)
                                   ▼
           content/kd.md + src/generated/kd-data.json + passages.json
                                   │
        ┌──────────────────────────┼─────────────────────────────────┐
        ▼                          ▼                                 ▼
  lib/kd, lib/reader         lib/search (BM25)                lib/kd-markdown
  (typed data, slices)       passages + context               (.md views for AI)
        │                          │                                 │
        │            ┌─────────────┴──────────────┐                  │
        ▼            ▼                            ▼                  ▼
   Pages (RSC)   /api/ask ── lib/ai/provider   lib/kd-tools ── /mcp (MCP server)
   Index, Read,     (Claude or any OpenAI-      (search, get_rule, find_rules,
   Rules, …          compatible API)             read_document, open questions…)
        │
        ▼
   Client layer (this browser only)
   lib/library: bookmarks · highlights + notes · saved answers · reading history
   lib/text-anchor: find text again (highlights, "show in document")
```

## Layers

| Layer | Where | What it does |
|---|---|---|
| Data | `scripts/build-kd.mjs`, `lib/kd.ts`, `lib/kd-md.ts`, `lib/reader.ts` | Parses the master file once into typed groups, docs, rules, decisions, conflicts, glossary and outline. Server only. |
| Search | `lib/search.ts` | BM25 over passages, with the passages either side and a phrase to find in the original. |
| AI | `lib/ai/*`, `app/api/ask` | One `AiProvider` interface. `anthropic` (default) uses the Claude SDK with prompt caching. `openai`, `openrouter`, `groq`, `ollama` and `custom` use any OpenAI-compatible `/chat/completions` stream. Picked by `KD_AI_PROVIDER`. |
| Tools | `lib/kd-tools.ts` | The knowledge base as 7 read-only tools that return Markdown. |
| MCP | `app/api/mcp` (served at `/mcp`) | Stateless Streamable HTTP JSON-RPC: `initialize`, `tools/list`, `tools/call`, `ping`. Optional bearer token (`KD_MCP_TOKEN`). |
| Library | `lib/library.ts` | Bookmarks, highlights, notes, saved answers and recents in `localStorage`. Read through `useSyncExternalStore`, synced across tabs, with JSON backup/restore and a Markdown notes export. |
| Anchoring | `lib/text-anchor.ts` | Saves highlights as quote + prefix/suffix and finds them again, ignoring whitespace, so they survive re-renders and small layout changes. |
| UI | `components/*`, `app/*` | Server components for content; client islands for interaction. |

## UX features

- **Index** (`/read`): topic → document → every section in one tree. You can filter it (matches are marked), expand or collapse it, jump to a topic, and bookmark from it.
- **Reader** (`/read/[group]/[doc]`):
  - a reading-progress bar, and "continue reading" that resumes where you stopped
  - text size, font (Modern or Book) and line width
  - a contents panel
  - bookmark and copy-link buttons on every heading
- **Selection toolbar** (`components/shell/selection-toolbar.tsx`): select text in any `[data-askable]` area to get:
  - neon highlight colours, a note, Ask, copy text, and copy a link to the text
  - click a saved highlight to recolour it, edit its note or remove it
- **Deep links:** `#hl-<id>` scrolls to a highlight. `?find=<text>` scrolls to a passage and flashes it; Ask's "Show in document" uses this.
- **Ask:** structured, document-grounded answers whose layout follows the question (see "How Ask answers" below). Answers can be saved to the library, copied as Markdown or exported.
- **Library** (`/library`): highlights and notes grouped by page, bookmarks, saved answers and history. Has search, plus backup, restore and Markdown export.
- **Command palette** (⌘K): rules, pages and topics, plus your library and recent reading.
- **Themes:** Light, Dark, Aurora, Ocean, Sunset and Forest (`lib/themes.ts`, `globals.css`), or follow the device. Picked from a visual picker.
- **Look and feel:** drifting aurora background, spotlight cards, topic icons with their own hue (`lib/topic-style.ts`), progress rings, and fonts Space Grotesk, Plus Jakarta Sans, JetBrains Mono and Literata. Motion turns off when the system asks for reduced motion.

## How Ask answers

`app/api/ask/route.ts` runs one pipeline (`lib/answer/*`). Nothing is re-ingested: it reads the same passages, outline and rules the rest of the app uses.

1. **Understand the question** (`intent.ts`, deterministic). It works out:
   - **The intent:** explain, requirements, workflow, compare, field/rule, or general.
   - **The scope:** asset class, transaction type, listing type, role and project type, in the corpus's own words (including the source's "Retal" typo).
   - Terms are never merged: Lease, Sale, Buy and Rent stay distinct, and "Office Building" (a Project Type) is not treated as the Office asset class.
   - Follow-ups that name no scope inherit it from the previous question. The UI marks this "from previous question".
2. **Retrieve** (`retrieve.ts`). For requirements, comparisons, workflows and roles it resolves the scope to *whole outline sections*, for example every "Uploading Office Property Lease (…)" form in both the Oct 2 PRD sheet and the Sep 16 field sheet. It takes every passage under them, then rules that name the scope, then keyword search.
   - Latest documents come first.
   - Everything is bounded by `KD_CONTEXT_CHARS` (default 60,000). What doesn't fit is reported to the model and shown to the user, never silently dropped.
3. **Ask for one JSON answer** (`schema.ts`, `schema-prompt.ts`).
   - Claude enforces the JSON schema with structured outputs.
   - OpenAI-compatible providers get `response_format: json_schema` when they accept it. Otherwise the request is retried without it, and the shape is described in the prompt.
4. **Validate before rendering** (`schema.ts → validateAnswer`):
   - citations to passages that weren't retrieved are removed
   - items left without a source are flagged
   - requirement rows are checked against their cited text: a field name not found is flagged as "unverified"
   - "required" is kept only if the cited source marks the field `*` or says mandatory/required
   - "not marked required" is kept only if the same form section uses `*` for other fields
   - any other status becomes "Not specified in the retrieved source"
   - follow-ups are de-duplicated (3–6)
5. **Stream and render** (`components/answer/*`). The client parses the partial JSON as it streams (`partial-json.ts`) and renders it with the same components:
   - `RequirementTable`: groups as accordions; search; status filters that never drop rows; sort; expand/collapse all; Markdown and CSV export; row links; cards on phones
   - `Workflow` (timeline), `Comparison` (with "only differences"), `FieldCard` (Why / Validation / Exceptions / Source) and `Points`/checklists
   - a scope bar, an "In short" summary, a "Sources disagree" panel, a "Not established by the sources" panel, readable citation chips and follow-up chips
6. **Citations go to real places.** Each passage carries:
   - a readable label (`citeLabel`: document › section)
   - an `href` to its document, the anchor of the heading above it, and `?find=` text that the reader scrolls to and flashes

   `tests/citations.test.tsx` renders every document and checks that each anchor exists and each passage can be found on its page (more than 99% of 1,830+ passages).

**Fallbacks:**
- A model that ignores the format gets its text shown with a note.
- Unreadable output gives an error, and the retrieved sources are still listed.
- Older saved Markdown answers still render.

**Tests:**
- `npm test`: Vitest unit tests against the real corpus, covering intent, retrieval completeness, validation, the partial-JSON parser and citation anchors.
- `npm run test:e2e`: after `npm run build`, a Playwright run of the production server with `tests/e2e/mock-model.mjs` standing in for the language model. The mock builds answers only from the passages it is sent. It checks tables, filters, mobile cards, citations, document navigation, follow-up context and the fallback.

## Adding things

- **Another AI provider:** add a preset to `OPENAI_PRESETS` in `lib/ai/openai-compatible.ts`. For a non-OpenAI API, implement `AiProvider` in a new file and pick it in `getProvider()`.
- **Another MCP tool:** add a `ToolDef` to `TOOLS` in `lib/kd-tools.ts`. It appears in `tools/list` and on the Connect page automatically.
- **Another theme:** add a class block to `globals.css`, with `--glow-1..3` and the shadcn tokens. Add it to `THEMES` in `lib/themes.ts`. If it is dark, add its class to the `dark` custom variant and the dark highlight block.
- **Sync the library across devices:** `lib/library.ts` is the only place that reads or writes storage. Swap `read`/`commit` for API calls to keep the same hooks.
