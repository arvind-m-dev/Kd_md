"use client";

import { ExternalLink, Plug } from "lucide-react";
import { useSyncExternalStore } from "react";
import { CopyButton } from "@/components/kd/copy-button";
import { Stagger, StaggerItem } from "@/components/kd/motion";

const subscribe = () => () => {};
const useOrigin = () => useSyncExternalStore(subscribe, () => window.location.origin, () => "");

function UrlRow({ label, path, origin }: { label: string; path: string; origin: string }) {
  const url = origin + path;
  return (
    <div className="flex flex-col gap-2 rounded-lg border bg-background p-3 sm:flex-row sm:items-center">
      <div className="min-w-0 flex-1">
        <p className="text-sm font-medium">{label}</p>
        <a href={path} target="_blank" rel="noreferrer" className="inline-flex max-w-full items-center gap-1 truncate font-mono text-xs text-primary hover:underline">
          <span className="truncate">{url || path}</span> <ExternalLink className="size-3 shrink-0" />
        </a>
      </div>
      <CopyButton text={url} label="Copy link" />
    </div>
  );
}

export function ConnectLinks({ groups }: { groups: { id: string; title: string }[] }) {
  const origin = useOrigin();
  const prompt = `Read ${origin}/llms.txt and use only the Keydemand rules it links to. Cite rule IDs. If a rule is marked needs-clarity, say so.`;
  return (
    <Stagger className="flex flex-col gap-6">
      <StaggerItem>
        <section className="rounded-xl border bg-card p-5">
          <h2 className="font-semibold">1. Give the AI one link</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Paste this into any chat that can read web pages. It points the AI to everything else.
          </p>
          <div className="mt-4 flex flex-col gap-3">
            <UrlRow label="Start here (llms.txt)" path="/llms.txt" origin={origin} />
            <div className="rounded-lg border border-dashed p-3">
              <p className="text-sm font-medium">Or copy a ready-made instruction</p>
              <p className="mt-1 font-mono text-xs break-words text-muted-foreground">{prompt}</p>
              <div className="mt-2">
                <CopyButton text={prompt} label="Copy instruction" />
              </div>
            </div>
          </div>
        </section>
      </StaggerItem>
      <StaggerItem>
        <section className="rounded-xl border bg-card p-5">
          <h2 className="font-semibold">2. Or hand it a specific part</h2>
          <div className="mt-4 flex flex-col gap-3">
            <UrlRow label="The whole knowledge base" path="/kd.md" origin={origin} />
            <UrlRow label="Open questions, conflicts and glossary" path="/md/conflicts.md" origin={origin} />
            <UrlRow label="One rule (change the ID)" path="/rules/BR-REL-001.md" origin={origin} />
            <details>
              <summary className="cursor-pointer text-sm text-muted-foreground hover:text-foreground">One topic group</summary>
              <div className="mt-3 flex flex-col gap-2">
                {groups.map((g) => (
                  <UrlRow key={g.id} label={`${g.id} — ${g.title}`} path={`/md/${g.id}.md`} origin={origin} />
                ))}
              </div>
            </details>
          </div>
        </section>
      </StaggerItem>
      <StaggerItem>
        <section className="rounded-xl border border-dashed p-5">
          <h2 className="flex items-center gap-2 font-semibold">
            <Plug className="size-4 text-primary" /> 3. Connect as a tool (MCP)
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Coming next: an MCP connector so Claude, ChatGPT and Cursor can search rules, open a rule and check conflicts by
            themselves.
          </p>
        </section>
      </StaggerItem>
    </Stagger>
  );
}
