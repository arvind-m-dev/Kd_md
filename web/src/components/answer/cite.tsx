"use client";

import { FileText } from "lucide-react";
import { createContext, useContext } from "react";
import { AnswerMarkdown } from "@/components/ask/answer-markdown";
import type { PassageView } from "@/components/ask/types";
import { cn } from "@/lib/utils";

/** Generic section names that say nothing on their own; use the document title instead. */
const GENERIC = /^(content|business rules extracted|open questions.*|comment threads|tab: .*|group: .*)$/i;

/** A short readable name for a passage: its section, or its document when the section is generic. */
export function shortName(p: PassageView): string {
  const section = (p.section ?? p.path.at(-1) ?? "").replace(/\s*\(reviewer date[^)]*\)/i, "").replace(/^(property & project input fields|demand input fields)\s*—\s*columns [^:]+:\s*/i, "");
  return section && !GENERIC.test(section) ? section : p.docTitle || p.groupTitle;
}

interface CiteCtx {
  byLabel: Map<string, PassageView>;
  open: (p: PassageView) => void;
}
const Ctx = createContext<CiteCtx>({ byLabel: new Map(), open: () => {} });

export function CiteProvider({ passages, onOpen, children }: { passages: PassageView[]; onOpen: (p: PassageView) => void; children: React.ReactNode }) {
  return <Ctx.Provider value={{ byLabel: new Map(passages.map((p) => [p.label, p])), open: onOpen }}>{children}</Ctx.Provider>;
}

export const useCites = () => useContext(Ctx);

/** Citation chips for one item: readable source name first, passage ID second. Opens the evidence drawer. */
export function Cites({ labels, className, max = 3 }: { labels: string[]; className?: string; max?: number }) {
  const { byLabel, open } = useCites();
  const items = labels.map((l) => byLabel.get(l)).filter((p): p is PassageView => !!p);
  if (!items.length) return null;
  const shown = items.slice(0, max);
  return (
    <span className={cn("inline-flex flex-wrap items-center gap-1", className)}>
      {shown.map((p) => (
        <button
          key={p.label}
          type="button"
          onClick={() => open(p)}
          title={`${p.citeLabel ?? p.docTitle} — lines ${p.lineStart}–${p.lineEnd} (${p.label})`}
          className="inline-flex h-6 max-w-[15rem] items-center gap-1 rounded-md border bg-background/70 px-1.5 text-[11px] text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
        >
          <FileText className="size-3 shrink-0 text-primary" />
          <span className="truncate">{shortName(p)}</span>
          <span className="font-mono text-[10px] opacity-60">{p.label}</span>
        </button>
      ))}
      {items.length > max && (
        <button
          type="button"
          onClick={() => open(items[max])}
          className="h-6 rounded-md px-1.5 text-[11px] text-muted-foreground hover:text-foreground"
          title={items.slice(max).map((p) => shortName(p)).join(", ")}
        >
          +{items.length - max}
        </button>
      )}
    </span>
  );
}

/** Answer prose with inline [P#] citations as readable chips. */
export function Prose({ text, className }: { text: string; className?: string }) {
  const { byLabel, open } = useCites();
  if (!text) return null;
  return (
    <AnswerMarkdown
      // Source cells use <br> for line breaks; Markdown shows it as a hard line break.
      text={text.replace(/<br\s*\/?>/gi, "  \n")}
      className={className}
      onCite={(l) => {
        const p = byLabel.get(l);
        if (p) open(p);
      }}
      citeText={(l) => {
        const p = byLabel.get(l);
        return p ? shortName(p) : undefined;
      }}
    />
  );
}
