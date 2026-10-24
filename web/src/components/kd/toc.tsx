"use client";

import { List } from "lucide-react";
import { useEffect, useState } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import type { TocEntry } from "@/lib/reader";

function useActiveHeading(slugs: string[]) {
  const [active, setActive] = useState(slugs[0] ?? "");
  useEffect(() => {
    const els = slugs.map((s) => document.getElementById(s)).filter((e): e is HTMLElement => !!e);
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-72px 0px -70% 0px" },
    );
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, [slugs]);
  return active;
}

function TocList({ entries, active, onPick }: { entries: TocEntry[]; active: string; onPick?: () => void }) {
  const min = Math.min(...entries.map((e) => e.level));
  return (
    <ul className="flex flex-col gap-0.5 text-sm">
      {entries.map((e) => (
        <li key={e.slug}>
          <a
            href={`#${e.slug}`}
            onClick={onPick}
            style={{ paddingLeft: `${(e.level - min) * 0.75 + 0.75}rem` }}
            className={cn(
              "block rounded-md border-l-2 border-transparent py-1.5 pr-2 leading-snug text-muted-foreground transition-colors hover:text-foreground",
              active === e.slug && "border-primary bg-accent/60 font-medium text-foreground",
            )}
          >
            {e.title}
          </a>
        </li>
      ))}
    </ul>
  );
}

/** Desktop: sticky contents column. Phone/tablet: a "Contents" button that opens a sheet. */
export function Toc({ entries }: { entries: TocEntry[] }) {
  const [open, setOpen] = useState(false);
  const active = useActiveHeading(entries.map((e) => e.slug));
  if (!entries.length) return null;
  return (
    <>
      <nav aria-label="Contents" className="sticky top-20 hidden max-h-[calc(100dvh-6rem)] overflow-y-auto pb-6 xl:block">
        <p className="mb-2 px-3 text-xs font-semibold tracking-wide text-muted-foreground uppercase">Contents</p>
        <TocList entries={entries} active={active} />
      </nav>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger
          render={
            <button
              type="button"
              className="fixed right-4 bottom-20 z-30 flex items-center gap-2 rounded-full border bg-background/95 px-4 py-2.5 text-sm font-medium shadow-lg backdrop-blur md:bottom-6 xl:hidden"
            />
          }
        >
          <List className="size-4" /> Contents
        </SheetTrigger>
        <SheetContent side="right" className="w-[85vw] max-w-sm overflow-y-auto">
          <SheetHeader>
            <SheetTitle>Contents</SheetTitle>
          </SheetHeader>
          <div className="px-2 pb-6">
            <TocList entries={entries} active={active} onPick={() => setOpen(false)} />
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
