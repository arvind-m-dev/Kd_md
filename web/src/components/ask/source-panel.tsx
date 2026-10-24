"use client";

import { ExternalLink, FileText } from "lucide-react";
import Link from "next/link";
import { useSyncExternalStore } from "react";
import { CopyButton } from "@/components/kd/copy-button";
import { buttonVariants } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { AnswerMarkdown } from "./answer-markdown";
import type { PassageView } from "./types";

const mq = "(min-width: 768px)";
const subscribe = (cb: () => void) => {
  const m = window.matchMedia(mq);
  m.addEventListener("change", cb);
  return () => m.removeEventListener("change", cb);
};
const useWide = () => useSyncExternalStore(subscribe, () => window.matchMedia(mq).matches, () => true);

/** The passage behind a citation, with the paragraphs around it and a link to the original document. */
export function SourcePanel({ passage, onClose }: { passage: PassageView | null; onClose: () => void }) {
  const wide = useWide();
  const p = passage;
  const page = p?.doc && p.group ? `/read/${p.group}/${p.doc}` : p?.group ? `/read/${p.group}` : "/read";
  // Opens the document scrolled to this passage, briefly highlighted.
  const readHref = p?.searchPhrase && p.doc ? `${page}?${new URLSearchParams({ find: p.searchPhrase })}` : page;
  return (
    <Sheet open={!!p} onOpenChange={(o) => !o && onClose()}>
      <SheetContent
        side={wide ? "right" : "bottom"}
        className={wide ? "w-full overflow-y-auto sm:max-w-xl" : "max-h-[85dvh] overflow-y-auto rounded-t-2xl"}
      >
        {p && (
          <>
            <SheetHeader className="border-b">
              <span className="w-fit rounded-md bg-primary px-1.5 py-0.5 font-mono text-xs font-semibold text-primary-foreground">{p.label}</span>
              <SheetTitle className="text-base leading-snug">{p.docTitle || p.groupTitle}</SheetTitle>
              <SheetDescription>
                {[p.docStatus && p.docStatus.toLowerCase(), p.groupTitle, ...p.path].filter(Boolean).join(" › ")}
                <span className="block">
                  Lines {p.lineStart.toLocaleString("en")}–{p.lineEnd.toLocaleString("en")} of kd.md
                </span>
              </SheetDescription>
            </SheetHeader>
            <div className="flex flex-col gap-4 px-4 pb-6" data-askable>
              <div className="flex flex-wrap gap-2">
                {p.docUrl && (
                  <a href={p.docUrl} target="_blank" rel="noreferrer" className={buttonVariants({ size: "sm" })}>
                    <ExternalLink /> Open the document
                  </a>
                )}
                <Link href={readHref} className={buttonVariants({ variant: "outline", size: "sm" })}>
                  <FileText /> Show in document
                </Link>
                {p.searchPhrase && <CopyButton text={p.searchPhrase} label="Copy text to find (Ctrl+F)" />}
              </div>
              {p.before && <AnswerMarkdown text={p.before} className="text-sm text-muted-foreground opacity-80" />}
              <div className="rounded-xl border-2 border-primary/30 bg-accent/40 p-3 text-sm">
                <AnswerMarkdown text={p.text} />
              </div>
              {p.after && <AnswerMarkdown text={p.after} className="text-sm text-muted-foreground opacity-80" />}
              {p.brIds.length > 0 && (
                <div className="flex flex-wrap gap-1.5 border-t pt-3">
                  <span className="text-xs text-muted-foreground">Rules here:</span>
                  {p.brIds.map((id) => (
                    <Link key={id} href={`/rules/${id}`} className="rounded-md bg-muted px-1.5 py-0.5 font-mono text-xs hover:bg-accent">
                      {id}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
