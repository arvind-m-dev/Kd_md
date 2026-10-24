// /mcp (rewritten here): a Model Context Protocol server over Streamable HTTP, so Claude, ChatGPT, Cursor and
// other MCP clients can search and read the rules as tools (lib/kd-tools.ts).
//
// Stateless: every POST carries one JSON-RPC message (or a batch) and gets a JSON reply; there are no sessions
// and nothing is pushed from the server, so GET is not offered. Set KD_MCP_TOKEN to require
// "Authorization: Bearer <token>"; without it the server is open, like the rest of the site.
import { kd } from "@/lib/kd";
import { ToolInputError, TOOLS, toolByName } from "@/lib/kd-tools";

const VERSIONS = ["2025-11-25", "2025-06-18", "2025-03-26", "2024-11-05"];
const SERVER = { name: "keydemand-rules", title: "Keydemand Rules", version: "1.0.0" };
const INSTRUCTIONS = `Keydemand V2 Phase 1 business rules: ${kd.stats.rules} rules from ${kd.stats.docs} current documents. Use search_knowledge_base first, then get_rule or read_document for detail. Only the knowledge base is authoritative: cite rule IDs and source documents. Rules marked needs-clarity are not final; check list_open_questions before stating any limit, price, time window or role as settled.`;

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, Mcp-Protocol-Version, Mcp-Session-Id",
};

interface RpcRequest {
  jsonrpc?: string;
  id?: string | number | null;
  method?: unknown;
  params?: Record<string, unknown>;
}

const ok = (id: RpcRequest["id"], result: unknown) => ({ jsonrpc: "2.0", id, result });
const fail = (id: RpcRequest["id"], code: number, message: string) => ({ jsonrpc: "2.0", id: id ?? null, error: { code, message } });

function handle(msg: RpcRequest, origin: string): object | null {
  if (!msg || typeof msg !== "object" || msg.jsonrpc !== "2.0" || typeof msg.method !== "string") {
    return fail(msg?.id, -32600, "Invalid JSON-RPC request.");
  }
  // Notifications (no id) get no reply.
  if (msg.id === undefined) return null;
  const params = msg.params ?? {};
  switch (msg.method) {
    case "initialize": {
      const asked = typeof params.protocolVersion === "string" ? params.protocolVersion : "";
      return ok(msg.id, {
        protocolVersion: VERSIONS.includes(asked) ? asked : VERSIONS[0],
        capabilities: { tools: { listChanged: false } },
        serverInfo: SERVER,
        instructions: INSTRUCTIONS,
      });
    }
    case "ping":
      return ok(msg.id, {});
    case "tools/list":
      return ok(msg.id, {
        tools: TOOLS.map(({ name, title, description, inputSchema }) => ({
          name,
          title,
          description,
          inputSchema,
          annotations: { readOnlyHint: true, openWorldHint: false },
        })),
      });
    case "tools/call": {
      const tool = toolByName.get(String(params.name ?? ""));
      if (!tool) return fail(msg.id, -32602, `Unknown tool “${String(params.name)}”.`);
      const args = params.arguments && typeof params.arguments === "object" ? (params.arguments as Record<string, unknown>) : {};
      try {
        return ok(msg.id, { content: [{ type: "text", text: tool.run(args, origin) }] });
      } catch (err) {
        // Bad input is reported to the model as a tool error it can recover from, not a protocol error.
        const message = err instanceof ToolInputError ? err.message : "The tool failed. Try again.";
        if (!(err instanceof ToolInputError)) console.error("mcp tool", tool.name, err);
        return ok(msg.id, { content: [{ type: "text", text: message }], isError: true });
      }
    }
    case "resources/list":
      return ok(msg.id, { resources: [] });
    case "prompts/list":
      return ok(msg.id, { prompts: [] });
    default:
      return fail(msg.id, -32601, `Method not found: ${msg.method}`);
  }
}

const json = (body: unknown, status = 200) => Response.json(body, { status, headers: CORS });

export async function POST(req: Request) {
  const token = process.env.KD_MCP_TOKEN;
  if (token && req.headers.get("authorization") !== `Bearer ${token}`) {
    return json(fail(null, -32001, "Unauthorized: send Authorization: Bearer <KD_MCP_TOKEN>."), 401);
  }
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return json(fail(null, -32700, "Parse error: send a JSON-RPC message."), 400);
  }
  const origin = new URL(req.url).origin;
  if (Array.isArray(body)) {
    const replies = body.map((m) => handle(m, origin)).filter((r) => r !== null);
    return replies.length ? json(replies) : new Response(null, { status: 202, headers: CORS });
  }
  const reply = handle(body as RpcRequest, origin);
  return reply ? json(reply) : new Response(null, { status: 202, headers: CORS });
}

export function GET() {
  return new Response("This MCP server is stateless: POST JSON-RPC messages here.\n", {
    status: 405,
    headers: { ...CORS, Allow: "POST, OPTIONS" },
  });
}

export function OPTIONS() {
  return new Response(null, { status: 204, headers: CORS });
}
