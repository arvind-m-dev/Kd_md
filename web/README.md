# Keydemand Rules (web)

Next.js app for the Keydemand V2 Phase 1 business rules: UI for people, Markdown for AI tools.

## Run

```bash
cp .env.example .env.local   # add ANTHROPIC_API_KEY for Ask
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
