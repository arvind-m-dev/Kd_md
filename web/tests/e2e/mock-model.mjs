// A stand-in for the language model in end-to-end tests: an OpenAI-compatible /v1/chat/completions server
// that streams a structured answer built ONLY from the passages /api/ask sent it. For requirement questions
// it parses the real field rows of the retrieved form tables, so the UI is tested on real corpus data.
// Not used in production.
//
//   node tests/e2e/mock-model.mjs 4100
import http from "node:http";

const port = Number(process.argv[2] || 4100);
let last = null;

function passagesOf(prompt) {
  return [...prompt.matchAll(/<passage id="(P\d+)" source="([^"]*)" doc_status="[^"]*" doc_modified="([^"]*)">\n([\s\S]*?)\n<\/passage>/g)].map((m) => ({
    label: m[1],
    source: m[2],
    modified: m[3],
    text: m[4],
  }));
}

const cells = (line) => line.split("|").slice(1, -1).map((c) => c.trim());

/** Field rows of the first retrieved "Uploading Office Property Lease (Agent)" sheet table, grouped by its section rows. */
function requirementGroups(ps) {
  const form = ps.filter((p) => /Uploading Office Property Lease \(Agent\)/.test(p.source) && /Columns AS–BB/.test(p.source));
  const groups = [];
  let current = null;
  for (const p of form) {
    for (const line of p.text.split("\n")) {
      const c = cells(line);
      if (c.length < 11 || !/^\d+$/.test(c[0])) continue;
      const [, editable, view, , name, input, options, info, , , format] = c;
      if (!editable && !view && name && !input && !/deleted|on website|new field/i.test(name)) {
        current = { name, summary: "", cites: [p.label], rows: [] };
        groups.push(current);
        continue;
      }
      if (!/^(Yes|No)$/.test(editable) || !/^\d+$/.test(view) || !current) continue;
      current.rows.push({
        field: name.replace(/\\\*/g, "*"),
        required: /\*$/.test(name) ? "yes" : "no",
        requiredNote: /\*$/.test(name) ? "Marked * in the source" : "",
        rule: info ? `${info} [${p.label}]` : "",
        validation: [options && `Options: ${options}`, format].filter(Boolean).join(" · "),
        cites: [p.label],
      });
      if (!current.cites.includes(p.label)) current.cites.push(p.label);
    }
  }
  return groups.filter((g) => g.rows.length);
}

function answerFor(prompt) {
  const ps = passagesOf(prompt);
  const intent = (prompt.match(/Question type detected: (\w+)/) ?? [])[1] ?? "general";
  const question = (prompt.match(/Question: ([^\n]+)\s*$/) ?? [])[1] ?? "";
  const base = { intent, title: question, status: "clear", statusNote: "", clarification: "", conflicts: [], gaps: [] };
  const first = ps[0];

  if (/plain text please/i.test(question)) return { text: `Here is a plain answer without the format [${first?.label ?? "P1"}].` };

  if (intent === "requirements") {
    const groups = requirementGroups(ps);
    const rows = groups.reduce((n, g) => n + g.rows.length, 0);
    const other = ps.find((p) => /Uploading Office Property Lease \(Agent\)/.test(p.source) && !/Columns AS–BB/.test(p.source));
    return {
      ...base,
      status: other ? "needs-clarity" : "clear",
      statusNote: other ? "Two versions of the form are current" : "",
      scope: { searched: "Office · Lease · Property: the Office Property Lease (Agent) form.", assumptions: [] },
      summary: `The Office Property Lease (Agent) form has ${rows} fields in ${groups.length} groups [${groups[0]?.cites[0]}].`,
      blocks: [
        { type: "text", heading: "Overview", body: `Groups: ${groups.map((g) => `${g.name} (${g.rows.length})`).join(", ")} [${groups[0]?.cites[0]}].` },
        { type: "requirements", heading: "Fields", groups },
      ],
      conflicts: other ? [{ topic: "Two versions of the form", resolution: "", positions: [{ statement: "Oct 2 PRD sheet", cites: [groups[0].cites[0]] }, { statement: "Sep 16 field sheet", cites: [other.label] }] }] : [],
      followUps: ["Which fields are mandatory for Office property lease?", "What validations apply to Office property lease?", "Compare Office property lease with Office property sale"],
      _rows: rows,
    };
  }

  if (intent === "workflow") {
    const steps = ps.flatMap((p) => p.text.split("\n").filter((l) => /^\s*(\d+\.|-)\s+\S/.test(l)).slice(0, 2).map((l) => ({ title: l.replace(/^\s*(\d+\.|-)\s+/, "").replace(/\*\*/g, "").slice(0, 90), actor: "Agent", kind: "step", detail: "", prerequisites: "", validation: "", alternatives: "", cites: [p.label] }))).slice(0, 5);
    return { ...base, scope: { searched: "Agent journey", assumptions: [] }, summary: `Steps from the agent journey [${steps[0]?.cites[0]}].`, blocks: [{ type: "workflow", heading: "Steps", steps }], followUps: ["Which fields does an agent fill for a property lease?", "What happens after an agent posts a property?", "Which agent actions need admin approval?"] };
  }

  const items = ps.filter((p) => /agent/i.test(p.text)).slice(0, 4).map((p) => ({ text: p.text.split("\n").find((l) => /agent/i.test(l)).replace(/^[-|*\s#]+/, "").replace(/\*\*/g, "").slice(0, 200), cites: [p.label] }));
  return {
    ...base,
    scope: { searched: "Role catalogue and permission passages for Agent", assumptions: [] },
    summary: `What the documents say about agents [${items[0]?.cites[0] ?? first?.label}].`,
    blocks: [{ type: "text", heading: "", body: `From the role catalogue [${items[0]?.cites[0]}].` }, { type: "points", heading: "Documented points", style: "bullets", items }],
    followUps: ["What can an agent do on the platform?", "How does an agent post a property?", "What is the difference between an agent and a brand?"],
  };
}

http
  .createServer((req, res) => {
    if (req.method === "GET" && req.url === "/last") {
      res.writeHead(200, { "Content-Type": "application/json" });
      return res.end(JSON.stringify(last));
    }
    let body = "";
    req.on("data", (d) => (body += d));
    req.on("end", async () => {
      const r = JSON.parse(body || "{}");
      const prompt = r.messages?.at(-1)?.content ?? "";
      const a = answerFor(prompt);
      last = a;
      const text = a.text ?? JSON.stringify({ ...a, _rows: undefined });
      res.writeHead(200, { "Content-Type": "text/event-stream" });
      for (let i = 0; i < text.length; i += 400) {
        res.write(`data: ${JSON.stringify({ model: "mock-grounded", choices: [{ delta: { content: text.slice(i, i + 400) } }] })}\n\n`);
        await new Promise((ok) => setTimeout(ok, 5));
      }
      res.write(`data: ${JSON.stringify({ choices: [{ delta: {}, finish_reason: "stop" }] })}\n\n`);
      res.end("data: [DONE]\n\n");
    });
  })
  .listen(port, () => console.log(`mock model on ${port}`));
