"use client";

import { Search, X } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState, useTransition } from "react";
import { cn } from "@/lib/utils";

interface Option {
  value: string;
  label: string;
}

/** Search box and filters for the Rules explorer. State lives in the URL, so filtered views can be shared. */
export function RuleFilters({ groups, docs }: { groups: Option[]; docs: (Option & { group: string })[] }) {
  const router = useRouter();
  const pathname = usePathname();
  const sp = useSearchParams();
  const [pending, startTransition] = useTransition();
  const [q, setQ] = useState(sp.get("q") ?? "");
  const group = sp.get("group") ?? "";
  const status = sp.get("status") ?? "";
  const doc = sp.get("doc") ?? "";

  const update = (patch: Record<string, string>) => {
    const next = new URLSearchParams(sp);
    for (const [k, v] of Object.entries(patch)) {
      if (v) next.set(k, v);
      else next.delete(k);
    }
    next.delete("limit");
    startTransition(() => router.replace(`${pathname}?${next}`, { scroll: false }));
  };

  // Search as you type, after a short pause.
  useEffect(() => {
    if (q === (sp.get("q") ?? "")) return;
    const t = setTimeout(() => update({ q }), 250);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [q]);

  const select =
    "h-10 min-w-0 rounded-lg border bg-background px-3 text-sm outline-none focus-visible:ring-3 focus-visible:ring-ring/40";
  const groupDocs = docs.filter((d) => !group || d.group === group);
  const active = q || group || status || doc;

  return (
    <div className={cn("flex flex-col gap-2 transition-opacity", pending && "opacity-70")}>
      <div className="flex h-11 items-center gap-2 rounded-xl border bg-background px-3 focus-within:ring-3 focus-within:ring-ring/40">
        <Search className="size-4 shrink-0 text-muted-foreground" />
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search rules by words or ID (e.g. contact request, BR-REL-001)"
          aria-label="Search rules"
          className="min-w-0 flex-1 bg-transparent text-base outline-none placeholder:text-muted-foreground sm:text-sm"
        />
        {q && (
          <button type="button" onClick={() => setQ("")} aria-label="Clear search" className="rounded p-1 hover:bg-accent">
            <X className="size-4" />
          </button>
        )}
      </div>
      <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap">
        <select aria-label="Topic" value={group} onChange={(e) => update({ group: e.target.value, doc: "" })} className={cn(select, "col-span-2 sm:max-w-xs")}>
          <option value="">All topics</option>
          {groups.map((g) => (
            <option key={g.value} value={g.value}>
              {g.label}
            </option>
          ))}
        </select>
        <select aria-label="Document" value={doc} onChange={(e) => update({ doc: e.target.value })} className={cn(select, "col-span-2 sm:max-w-xs")}>
          <option value="">All documents</option>
          {groupDocs.map((d) => (
            <option key={d.value} value={d.value}>
              {d.label}
            </option>
          ))}
        </select>
        <select aria-label="Status" value={status} onChange={(e) => update({ status: e.target.value })} className={select}>
          <option value="">Any status</option>
          <option value="clear">Clear</option>
          <option value="needs-clarity">Needs clarity</option>
        </select>
        {active && (
          <button
            type="button"
            onClick={() => {
              setQ("");
              startTransition(() => router.replace(pathname, { scroll: false }));
            }}
            className="h-10 rounded-lg px-3 text-sm text-muted-foreground hover:bg-accent hover:text-foreground"
          >
            Reset
          </button>
        )}
      </div>
    </div>
  );
}
