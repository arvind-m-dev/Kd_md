# Keydemand V2 knowledge base + Ask

- `KEYDEMAND_V2_BUSINESS_RULES.md` is the consolidated business rules, requirements, relevancy, user journeys and admin rules. Every rule has an ID and a source.
- `app/` is a local web page where you ask questions about that file. Every answer comes with the source document link, its section, the line range in the .md, and the paragraphs before and after.
- `kb/` holds the build sources: one file per document group, the build script and the change log.

## Run the Ask page

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
python3 kb/build.py
```
The Ask server notices the new .md and re-indexes it on the next request. No restart is needed.
