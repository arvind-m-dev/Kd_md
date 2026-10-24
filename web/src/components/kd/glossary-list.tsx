"use client";

import { Search } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import type { GlossaryTerm } from "@/lib/kd";

/** Turns "G05 BR-MS-001/003" style references into rule links. */
function Meaning({ text }: { text: string }) {
  const parts = text.split(/(BR-[A-Z0-9]+-\d+)/g);
  return (
    <>
      {parts.map((part, i) =>
        /^BR-[A-Z0-9]+-\d+$/.test(part) ? (
          <Link key={i} href={`/rules/${part}`} className="font-mono text-[0.85em] text-primary hover:underline">
            {part}
          </Link>
        ) : (
          part.replace(/\*\*/g, "")
        ),
      )}
    </>
  );
}

export function GlossaryList({ terms }: { terms: GlossaryTerm[] }) {
  const [q, setQ] = useState("");
  const needle = q.trim().toLowerCase();
  const shown = terms.filter((t) => !needle || `${t.term} ${t.meaning} ${t.aka}`.toLowerCase().includes(needle));
  return (
    <>
      <div className="sticky top-16 z-10 -mx-4 bg-background/90 px-4 py-2 backdrop-blur sm:mx-0 sm:px-0">
        <div className="flex h-11 items-center gap-2 rounded-xl border bg-background px-3 focus-within:ring-3 focus-within:ring-ring/40">
          <Search className="size-4 text-muted-foreground" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Find a term (e.g. HTL, contact unlock, RM)"
            aria-label="Find a term"
            className="min-w-0 flex-1 bg-transparent text-base outline-none placeholder:text-muted-foreground sm:text-sm"
          />
        </div>
      </div>
      <dl className="mt-4 grid gap-3">
        {shown.map((t) => (
          <div key={t.term} id={t.term} className="scroll-mt-32 rounded-xl border bg-card p-4 target:ring-2 target:ring-ring sm:grid sm:grid-cols-[14rem_1fr] sm:gap-6">
            <dt className="font-semibold">{t.term}</dt>
            <dd className="mt-1 text-sm leading-relaxed sm:mt-0">
              <Meaning text={t.meaning} />
              {t.aka && t.aka !== "—" && <p className="mt-2 text-xs text-muted-foreground">Also called: {t.aka.replace(/`/g, "")}</p>}
            </dd>
          </div>
        ))}
        {!shown.length && <p className="py-8 text-center text-muted-foreground">No term matches “{q}”.</p>}
      </dl>
    </>
  );
}
