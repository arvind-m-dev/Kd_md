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
- **Ask:**
  - answers open with a one-line **In short**, then details with `[P#]` citations
  - each citation opens the source passage
  - you can save an answer to the library
- **Library** (`/library`): highlights and notes grouped by page, bookmarks, saved answers and history. Has search, plus backup, restore and Markdown export.
- **Command palette** (⌘K): rules, pages and topics, plus your library and recent reading.
- **Themes:** Light, Dark, Aurora, Ocean, Sunset and Forest (`lib/themes.ts`, `globals.css`), or follow the device. Picked from a visual picker.
- **Look and feel:** drifting aurora background, spotlight cards, topic icons with their own hue (`lib/topic-style.ts`), progress rings, and fonts Space Grotesk, Plus Jakarta Sans, JetBrains Mono and Literata. Motion turns off when the system asks for reduced motion.

## Adding things

- **Another AI provider:** add a preset to `OPENAI_PRESETS` in `lib/ai/openai-compatible.ts`. For a non-OpenAI API, implement `AiProvider` in a new file and pick it in `getProvider()`.
- **Another MCP tool:** add a `ToolDef` to `TOOLS` in `lib/kd-tools.ts`. It appears in `tools/list` and on the Connect page automatically.
- **Another theme:** add a class block to `globals.css`, with `--glow-1..3` and the shadcn tokens. Add it to `THEMES` in `lib/themes.ts`. If it is dark, add its class to the `dark` custom variant and the dark highlight block.
- **Sync the library across devices:** `lib/library.ts` is the only place that reads or writes storage. Swap `read`/`commit` for API calls to keep the same hooks.
