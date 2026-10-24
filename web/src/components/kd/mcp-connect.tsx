"use client";

import { Bot, CircleAlert, CircleCheck, Plug, Wrench } from "lucide-react";
import { useEffect, useState, useSyncExternalStore } from "react";
import { CopyButton } from "@/components/kd/copy-button";
import { cn } from "@/lib/utils";

const subscribe = () => () => {};
const useOrigin = () => useSyncExternalStore(subscribe, () => window.location.origin, () => "https://your-site");

interface AiInfo {
  label: string;
  model: string;
  configured: boolean;
  setupHint: string;
}

function Snippet({ title, hint, code }: { title: string; hint: string; code: string }) {
  return (
    <div className="rounded-lg border bg-background p-3">
      <div className="flex flex-wrap items-start justify-between gap-2">
        <div>
          <p className="text-sm font-medium">{title}</p>
          <p className="text-xs text-muted-foreground">{hint}</p>
        </div>
        <CopyButton text={code} />
      </div>
      <pre className="mt-2 overflow-x-auto rounded-md bg-muted p-2.5 font-mono text-xs leading-relaxed">{code}</pre>
    </div>
  );
}

/** Connect page: the MCP server (tools for any AI) and which AI answers Ask here. */
export function McpConnect({ tools }: { tools: { name: string; title: string; description: string }[] }) {
  const origin = useOrigin();
  const url = `${origin}/mcp`;
  const [ai, setAi] = useState<AiInfo | null>(null);
  useEffect(() => {
    fetch("/api/ai")
      .then((r) => r.json())
      .then(setAi)
      .catch(() => {});
  }, []);
  const local = /localhost|127\.0\.0\.1/.test(origin);

  const clients = [
    { title: "Claude Code", hint: "Run in a terminal.", code: `claude mcp add --transport http keydemand-rules ${url}` },
    {
      title: "Claude (claude.ai and desktop app)",
      hint: "Settings → Connectors → Add custom connector, then paste this URL. Needs a public https address.",
      code: url,
    },
    {
      title: "Cursor",
      hint: "Add to .cursor/mcp.json in your project (or ~/.cursor/mcp.json).",
      code: JSON.stringify({ mcpServers: { "keydemand-rules": { url } } }, null, 2),
    },
    {
      title: "VS Code (Copilot agent mode)",
      hint: "Add to .vscode/mcp.json.",
      code: JSON.stringify({ servers: { "keydemand-rules": { type: "http", url } } }, null, 2),
    },
    {
      title: "ChatGPT",
      hint: "Settings → Apps & Connectors → Advanced → Developer mode, then Create with this URL. Needs a public https address.",
      code: url,
    },
    {
      title: "Any other client (stdio only)",
      hint: "Bridges a local stdio client to this server.",
      code: JSON.stringify({ mcpServers: { "keydemand-rules": { command: "npx", args: ["-y", "mcp-remote", url] } } }, null, 2),
    },
  ];

  return (
    <div className="mt-6 flex flex-col gap-6">
      <section className="rounded-xl border bg-card p-5">
        <h2 className="flex items-center gap-2 font-semibold">
          <Plug className="size-4 text-primary" /> 3. Connect as a tool (MCP)
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">
          This site is an MCP server. Add it to your AI tool once, and the AI can search the rules, open any rule or
          document and check open questions by itself, citing the sources.
        </p>
        <div className="mt-4 flex flex-col gap-2 rounded-lg border border-primary/30 bg-accent/40 p-3 sm:flex-row sm:items-center">
          <div className="min-w-0 flex-1">
            <p className="text-xs font-medium text-muted-foreground">Server URL (Streamable HTTP)</p>
            <p className="truncate font-mono text-sm">{url}</p>
          </div>
          <CopyButton text={url} label="Copy URL" />
        </div>
        {local && (
          <p className="mt-2 flex gap-1.5 text-xs text-unclear-ink">
            <CircleAlert className="size-3.5 shrink-0" />
            This is a local address: tools on this computer (Claude Code, Cursor, VS Code) can use it. Claude.ai and ChatGPT need the site deployed on a public https address.
          </p>
        )}
        <div className="mt-4 grid gap-3 lg:grid-cols-2">
          {clients.map((c) => (
            <Snippet key={c.title} {...c} />
          ))}
        </div>
        <details className="mt-4">
          <summary className="flex cursor-pointer items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground">
            <Wrench className="size-3.5" /> The {tools.length} tools the AI gets
          </summary>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {tools.map((t) => (
              <li key={t.name} className="rounded-lg border bg-background p-3">
                <p className="font-mono text-xs font-semibold text-primary">{t.name}</p>
                <p className="mt-1 text-xs text-muted-foreground">{t.description}</p>
              </li>
            ))}
          </ul>
        </details>
      </section>

      <section className="rounded-xl border bg-card p-5">
        <h2 className="flex items-center gap-2 font-semibold">
          <Bot className="size-4 text-primary" /> The AI behind Ask
        </h2>
        {ai ? (
          <p className={cn("mt-2 flex items-center gap-1.5 text-sm", ai.configured ? "text-clear" : "text-unclear-ink")}>
            {ai.configured ? <CircleCheck className="size-4" /> : <CircleAlert className="size-4" />}
            {ai.label} · <span className="font-mono text-xs">{ai.model || "no model set"}</span>
            {!ai.configured && <span className="text-muted-foreground"> — {ai.setupHint}</span>}
          </p>
        ) : (
          <p className="mt-2 text-sm text-muted-foreground">Checking…</p>
        )}
        <p className="mt-2 text-sm text-muted-foreground">
          Ask can use Claude (default) or any OpenAI-compatible API: OpenAI, OpenRouter, Groq, or a local model with Ollama or
          LM Studio. The server admin picks one with environment variables:
        </p>
        <pre className="mt-3 overflow-x-auto rounded-md bg-muted p-3 font-mono text-xs leading-relaxed">{`KD_AI_PROVIDER=anthropic   # or openai | openrouter | groq | ollama | custom
KD_MODEL=                  # optional: the model ID
ANTHROPIC_API_KEY=…        # for anthropic
KD_AI_API_KEY=…            # for the others (not needed for ollama)
KD_AI_BASE_URL=…           # for custom, e.g. http://127.0.0.1:1234/v1`}</pre>
      </section>
    </div>
  );
}
