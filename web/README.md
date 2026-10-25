# Keydemand Rules (web)

Next.js app for the Keydemand V2 Phase 1 business rules: UI for people, Markdown and an MCP server for AI tools.

What people get: an **Index** of every topic, document and section; a **reader** with highlights in neon colours, notes, bookmarks and reading progress; **Ask** with one-line "In short" answers and cited sources that jump to the exact passage; a **Library** of everything saved; and six themes (Light, Dark, Aurora, Ocean, Sunset, Forest). See [ARCHITECTURE.md](ARCHITECTURE.md).

## Run

```bash
cp .env.example .env.local   # pick the AI for Ask (Claude by default) and add its key
npm install
npm run dev                  # http://localhost:3000
```

`npm run dev` and `npm run build` first run `scripts/build-kd.mjs`. It copies `../KEYDEMAND_V2_BUSINESS_RULES.md` to `content/kd.md` (the copy Vercel builds from) and writes `src/generated/*.json`. Run `npm run kd` on its own after changing the master file.

## Endpoints

| Path | What |
|---|---|
| `/llms.txt` | Entry point for AI tools; links every Markdown view |
| `/kd.md` | The whole knowledge base |
| `/md/02.md` … `/md/12.md` | One group, verbatim, with front matter |
| `/md/conflicts.md`, `/md/sources.md` | Conflicts/decisions/glossary chapter; source register |
| `/rules/BR-REL-001.md` | One rule: status, issues, source, original line |
| `GET /api/search?q=&k=` | BM25 passages with source details (no AI) |
| `GET /api/lines?start=&end=&pad=` | Raw kd.md lines |
| `POST /api/ask` | Streamed answer (NDJSON) with `[P#]` citations and Clear / Needs clarity status |
| `POST /mcp` | MCP server (Streamable HTTP): 7 read-only tools — search, get/find rules, list topics, read a document, open questions, glossary |
| `GET /api/ai` | Which AI answers Ask, and whether it is configured |

## AI for Ask

Set `KD_AI_PROVIDER` to `anthropic` (default), `openai`, `openrouter`, `groq`, `ollama` or `custom` (any OpenAI-compatible URL in `KD_AI_BASE_URL`), plus `KD_MODEL` and the key. See `.env.example`.

Ask returns structured answers: tables for requirements, timelines for workflows, comparison tables and field cards. Every row and claim is checked against the retrieved sources before it is shown (see ARCHITECTURE.md, "How Ask answers"). On smaller or free models, lower `KD_CONTEXT_CHARS` if requests are too large, or set `KD_MAX_TOKENS` if the model rejects the default output size.

## Tests

```bash
npm test                          # unit tests on the real knowledge base (Vitest)
npm run build && npm run test:e2e # browser test of Ask with a stand-in model (needs Playwright + Chromium)
```

## Connect an AI tool (MCP)

```bash
claude mcp add --transport http keydemand-rules http://localhost:3000/mcp
```

Cursor, VS Code, Claude.ai and ChatGPT setups are on the app's **Connect AI** page. Set `KD_MCP_TOKEN` to require a bearer token.
