# Keydemand V2 knowledge base + Ask

- `KEYDEMAND_V2_BUSINESS_RULES.md` is the consolidated business rules, requirements, relevancy, user journeys and admin rules. Every rule has an ID and a source.
  - Groups 02–12 are the requirement documents (what was decided).
  - Group 16 is the product documentation as built (what the product does today): the product overview, persona journeys checked on SIT, the Admin Control Panel docs and the list of places where the app differs from the docs. It never overrides a requirement; differences are listed in the conflicts chapter.
- `app/` is a local web page where you ask questions about that file. Every answer comes with the source document link, its section, the line range in the .md, and the paragraphs before and after.
- `web/` is the Next.js version of the same thing (index, reader, Ask, Markdown endpoints and an MCP server). It is the one deployed on Vercel. See `web/README.md`.
- `kb/` holds the build sources: one file per document group, the build script and the change log.
- `web/` is the main app (Next.js, deployed on Vercel): Index, reader with highlights and notes, Library, Ask with structured answers, and an MCP server for AI tools. See [web/README.md](web/README.md).

## Run the local Ask page (Python)

1. **Credentials, once.** The app uses the Claude API. Either:
   ```bash
   export ANTHROPIC_API_KEY=sk-ant-...
   ```
   or install the Anthropic CLI and run `ant auth login`.
2. **Start it** from this folder:
   ```bash
   uv run app/server.py
   ```
3. **Open** http://localhost:8765

`uv` installs Python 3.10+ and the `anthropic` package automatically on first run. The server only listens on your own machine (127.0.0.1).

## Using the page

- **Ask** finds the most relevant passages in the .md (keyword search), and Claude (`claude-opus-5-5`) answers from those passages only.
  - Every statement is cited as `[P3]`. Click a citation to jump to its source card.
  - Each answer is marked **✓ Clear** or **⚠ Needs clarity**. "Needs clarity" means the documents disagree, the value is a placeholder or TBD, the item is a listed open decision, or the knowledge base doesn't answer it.
- **Search** shows the matching passages without AI. It's free and works without credentials.
- **Each source card** has:
  - the document link (opens the Google Doc, Sheet or Drive file)
  - the section path and the .md line range
  - the BR IDs in the passage
  - the paragraphs before and after it
  - **Copy search text**: paste it into Ctrl+F in the original document
  - **Show raw KB lines**: the exact lines in the .md
- **Topics covered** tab:
  - Every group, document and section in the knowledge base, with rule counts and Drive links.
  - A filter box to narrow the list.
  - Click any topic to read that section in full.
- **⬇ Download .md** (top right) downloads the whole knowledge-base file.
- **Cost:** each Ask is roughly 15–40k input tokens on Claude Opus 5.5. The conflicts chapter is cached between questions.

You can change the model or port with the `KD_MODEL` and `PORT` environment variables.

## Updating the knowledge base

Add or edit group files in `kb/sections/`, then run:
```bash
python3 kb/build.py          # rebuilds KEYDEMAND_V2_BUSINESS_RULES.md
(cd web && npm run kd)       # copies it to web/content/kd.md and rebuilds the web app's data
```
The local Ask server (`app/`) notices the new .md and re-indexes it on the next request. No restart is needed. The web app needs `npm run kd` (it also runs before `npm run dev` and `npm run build`); commit `web/content/kd.md`, because Vercel builds from that copy.

To re-check the sources for changes:
1. Search Drive for files modified or created since the last date in `kb/changelog.md`, and list the "Phase 1 - Keydemanand Important documents" folder.
2. For each changed doc already in the knowledge base, fetch it and run `kb/coverage.py` against its section (see `kb/_verify.md`). Update only what changed and note the change at the top of the doc's Content.
3. For each new doc, follow `kb/_brief.md`. Add it to the matching group file, or to a new group file listed in `INCLUDE` in `kb/build.py`.
4. Add new clashes to `kb/sections/00-core-cross-doc.md`, add a row to `kb/changelog.md`, update the "As of" date in `kb/00-header.md`, then rebuild.

Google Drive is read-only for this work: nothing in Drive is edited, commented on or shared.
