"use client";

import Link from "next/link";
import { createContext, Fragment, useContext, useMemo } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import type { GlossaryAlias } from "@/lib/glossary-terms";

const GlossaryContext = createContext<{ aliases: GlossaryAlias[]; re: RegExp | null }>({ aliases: [], re: null });

const escape = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

export function GlossaryProvider({ aliases, children }: { aliases: GlossaryAlias[]; children: React.ReactNode }) {
  const value = useMemo(() => {
    if (!aliases.length) return { aliases, re: null };
    // One pass over the text; matches are checked against case rules afterwards.
    const re = new RegExp(`(?<![\\w-])(${aliases.map((a) => escape(a.alias)).join("|")})(?![\\w-])`, "gi");
    return { aliases, re };
  }, [aliases]);
  return <GlossaryContext.Provider value={value}>{children}</GlossaryContext.Provider>;
}

function Term({ word, entry }: { word: string; entry: GlossaryAlias }) {
  return (
    <Popover>
      <PopoverTrigger
        openOnHover
        delay={250}
        render={
          <button
            type="button"
            className="cursor-help rounded-sm underline decoration-primary/50 decoration-dotted decoration-[1.5px] underline-offset-[3px] hover:decoration-primary focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:outline-none"
          />
        }
      >
        {word}
      </PopoverTrigger>
      <PopoverContent className="w-72 text-sm">
        <p className="font-semibold">{entry.term}</p>
        <p className="mt-1 text-muted-foreground">{entry.meaning}</p>
        <Link href={`/glossary#${encodeURIComponent(entry.term)}`} className="mt-2 inline-block text-xs text-primary underline underline-offset-2">
          Open glossary
        </Link>
      </PopoverContent>
    </Popover>
  );
}

/** Plain text with glossary terms underlined; tap or hover a term to see what it means. First use of each term only. */
export function GlossaryText({ text }: { text: string }) {
  const { aliases, re } = useContext(GlossaryContext);
  if (!re) return <>{text}</>;
  const seen = new Set<string>();
  const out: React.ReactNode[] = [];
  let last = 0;
  for (const m of text.matchAll(re)) {
    const word = m[0];
    const entry = aliases.find((a) => (a.caseSensitive ? a.alias === word : a.alias.toLowerCase() === word.toLowerCase()));
    if (!entry || seen.has(entry.term)) continue;
    seen.add(entry.term);
    out.push(text.slice(last, m.index), <Term key={m.index} word={word} entry={entry} />);
    last = m.index + word.length;
  }
  out.push(text.slice(last));
  return <>{out.map((n, i) => <Fragment key={i}>{n}</Fragment>)}</>;
}
