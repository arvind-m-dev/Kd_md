"use client";

import { AlertTriangle, ArrowDownAZ, Check, ChevronDown, ChevronsDownUp, ChevronsUpDown, Copy, Download, Link2, ListFilter, Search, X } from "lucide-react";
import { useId, useMemo, useState } from "react";
import { NOT_SPECIFIED, REQUIRED_LABEL } from "@/lib/answer/markdown";
import type { RequiredState, RequirementGroup, RequirementRow } from "@/lib/answer/schema";
import { cn } from "@/lib/utils";
import { Cites, Prose } from "./cite";

const STATE_STYLE: Record<RequiredState, string> = {
  yes: "bg-primary/12 text-primary",
  no: "bg-muted text-muted-foreground",
  conditional: "bg-unclear-soft text-unclear-ink",
  unspecified: "border border-dashed text-muted-foreground",
};

const SHORT: Record<RequiredState, string> = { yes: "Required", no: "Not marked required", conditional: "Conditional", unspecified: "Not specified" };

export function RequiredBadge({ state, note }: { state: RequiredState; note?: string }) {
  return (
    <span
      className={cn("inline-flex shrink-0 items-center rounded-full px-2 py-0.5 text-[11px] leading-tight font-medium", STATE_STYLE[state])}
      title={note ? `${REQUIRED_LABEL[state]} — ${note}` : REQUIRED_LABEL[state]}
    >
      {SHORT[state]}
    </span>
  );
}

const Empty = ({ what = NOT_SPECIFIED }: { what?: string }) => <span className="text-xs text-muted-foreground italic">{what}</span>;

function RowWarnings({ row }: { row: RequirementRow }) {
  if (!row.uncited && !row.unverified) return null;
  return (
    <span className="mt-1 flex items-center gap-1 text-[11px] text-unclear-ink">
      <AlertTriangle className="size-3" />
      {row.uncited ? "No source cited — check before relying on it" : "Field name not found in the cited source — check it"}
    </span>
  );
}

type Sort = "source" | "az" | "required";
const ORDER: Record<RequiredState, number> = { yes: 0, conditional: 1, no: 2, unspecified: 3 };

interface Flat {
  g: number;
  r: number;
  row: RequirementRow;
}

const csv = (v: string) => `"${v.replace(/"/g, '""').replace(/\[(P\d+)\]/g, "$1")}"`;

/**
 * All requirement rows of an answer, grouped as the source groups them. Filters and search only hide rows
 * from view (counts say so); copy and export always include every row.
 */
export function RequirementTable({ groups, anchor }: { groups: RequirementGroup[]; anchor: string }) {
  const uid = useId();
  const [query, setQuery] = useState("");
  const [states, setStates] = useState<Set<RequiredState>>(new Set());
  const [sort, setSort] = useState<Sort>("source");
  const [closed, setClosed] = useState<Set<number>>(new Set());
  const [copied, setCopied] = useState<string | null>(null);

  const all: Flat[] = useMemo(() => groups.flatMap((grp, g) => grp.rows.map((row, r) => ({ g, r, row }))), [groups]);
  const counts = useMemo(() => {
    const c: Record<RequiredState, number> = { yes: 0, no: 0, conditional: 0, unspecified: 0 };
    for (const { row } of all) c[row.required]++;
    return c;
  }, [all]);
  const present = (Object.keys(counts) as RequiredState[]).filter((s) => counts[s] > 0);

  const q = query.trim().toLowerCase();
  const visible = (f: Flat) =>
    (!states.size || states.has(f.row.required)) && (!q || `${f.row.field} ${f.row.rule} ${f.row.validation} ${f.row.requiredNote}`.toLowerCase().includes(q));
  const shown = all.filter(visible).length;
  const filtered = shown < all.length;

  const rowsOf = (g: number) => {
    const rows = all.filter((f) => f.g === g && visible(f));
    if (sort === "az") rows.sort((a, b) => a.row.field.localeCompare(b.row.field));
    if (sort === "required") rows.sort((a, b) => ORDER[a.row.required] - ORDER[b.row.required] || a.r - b.r);
    return rows;
  };

  const rowId = (g: number, r: number) => `${anchor}-req-${g + 1}-${r + 1}`;
  const flash = (what: string) => {
    setCopied(what);
    setTimeout(() => setCopied(null), 1400);
  };

  const markdown = () =>
    [
      "| Group | Field / Requirement | Required? | Business rule | Validation / Allowed values | Source |",
      "|---|---|---|---|---|---|",
      ...all.map(({ g, row }) =>
        [groups[g].name, row.field, REQUIRED_LABEL[row.required] + (row.requiredNote ? ` (${row.requiredNote})` : ""), row.rule || NOT_SPECIFIED, row.validation || NOT_SPECIFIED, row.cites.join(", ") || "No source cited"]
          .map((c) => c.replace(/\|/g, "\\|").replace(/\n+/g, " "))
          .join(" | "),
      ).map((l) => `| ${l} |`),
    ].join("\n");

  const downloadCsv = () => {
    const lines = [
      ["Group", "Field / Requirement", "Required?", "Required note", "Business rule", "Validation / Allowed values", "Sources"].map(csv).join(","),
      ...all.map(({ g, row }) => [groups[g].name, row.field, REQUIRED_LABEL[row.required], row.requiredNote, row.rule, row.validation, row.cites.join(" ")].map(csv).join(",")),
    ];
    const url = URL.createObjectURL(new Blob([lines.join("\n")], { type: "text/csv" }));
    Object.assign(document.createElement("a"), { href: url, download: "requirements.csv" }).click();
    URL.revokeObjectURL(url);
  };

  const toggleState = (s: RequiredState) =>
    setStates((cur) => {
      const n = new Set(cur);
      if (n.has(s)) n.delete(s);
      else n.add(s);
      return n;
    });

  const allOpen = closed.size === 0;
  const chip = "inline-flex h-8 items-center gap-1.5 rounded-lg border px-2.5 text-xs font-medium transition-colors hover:bg-accent";

  return (
    <div className="flex flex-col gap-3">
      {/* Toolbar */}
      <div className="flex flex-col gap-2 rounded-xl border bg-background/60 p-2.5">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="relative flex-1">
            <span className="sr-only">Search the requirements</span>
            <Search className="pointer-events-none absolute top-1/2 left-2.5 size-3.5 -translate-y-1/2 text-muted-foreground" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={`Search ${all.length} requirements…`}
              className="h-8 w-full rounded-lg border bg-card pr-8 pl-8 text-sm outline-none focus:ring-3 focus:ring-ring/40"
            />
            {query && (
              <button type="button" aria-label="Clear search" onClick={() => setQuery("")} className="absolute top-1/2 right-1.5 grid size-6 -translate-y-1/2 place-items-center rounded hover:bg-accent">
                <X className="size-3.5" />
              </button>
            )}
          </label>
          <div className="flex flex-wrap gap-1.5">
            <label className={cn(chip, "relative pr-1")}>
              <ArrowDownAZ className="size-3.5" />
              <span className="sr-only">Sort</span>
              <select value={sort} onChange={(e) => setSort(e.target.value as Sort)} className="bg-transparent pr-1 outline-none">
                <option value="source">Source order</option>
                <option value="required">Required first</option>
                <option value="az">Field A–Z</option>
              </select>
            </label>
            <button type="button" className={chip} onClick={() => setClosed(allOpen ? new Set(groups.map((_, i) => i)) : new Set())}>
              {allOpen ? <ChevronsDownUp className="size-3.5" /> : <ChevronsUpDown className="size-3.5" />}
              {allOpen ? "Collapse all" : "Expand all"}
            </button>
            <button type="button" className={chip} onClick={async () => (await navigator.clipboard.writeText(markdown()), flash("table"))}>
              {copied === "table" ? <Check className="size-3.5" /> : <Copy className="size-3.5" />} Copy table
            </button>
            <button type="button" className={chip} onClick={downloadCsv}>
              <Download className="size-3.5" /> CSV
            </button>
          </div>
        </div>
        {present.length > 1 && (
          <div className="flex flex-wrap items-center gap-1.5" role="group" aria-label="Filter by required status">
            <ListFilter className="size-3.5 text-muted-foreground" aria-hidden />
            {present.map((s) => (
              <button
                key={s}
                type="button"
                aria-pressed={states.has(s)}
                onClick={() => toggleState(s)}
                className={cn("inline-flex h-7 items-center gap-1.5 rounded-full border px-2.5 text-xs transition-colors hover:bg-accent", states.has(s) && "border-primary bg-accent text-accent-foreground")}
              >
                {SHORT[s]} <span className="tabular-nums opacity-70">{counts[s]}</span>
              </button>
            ))}
          </div>
        )}
        <p className="text-xs text-muted-foreground" aria-live="polite">
          {filtered ? (
            <>
              Showing <strong>{shown}</strong> of {all.length} requirements — filters are on.{" "}
              <button type="button" className="font-medium text-primary underline-offset-2 hover:underline" onClick={() => (setQuery(""), setStates(new Set()))}>
                Show all
              </button>
            </>
          ) : (
            <>
              {all.length} requirements in {groups.length} groups
              {counts.yes > 0 && ` · ${counts.yes} marked required`}
              {counts.unspecified > 0 && ` · ${counts.unspecified} without a stated status`}
            </>
          )}
        </p>
      </div>

      {/* Groups */}
      {groups.map((grp, g) => {
        const rows = rowsOf(g);
        const open = !closed.has(g) || (!!q && rows.length > 0);
        const panel = `${uid}-g${g}`;
        return (
          <section key={g} className="overflow-hidden rounded-xl border bg-card/80">
            <h4>
              <button
                type="button"
                aria-expanded={open}
                aria-controls={panel}
                onClick={() =>
                  setClosed((c) => {
                    const n = new Set(c);
                    if (n.has(g)) n.delete(g);
                    else n.add(g);
                    return n;
                  })
                }
                className="flex w-full items-center gap-3 px-3.5 py-3 text-left hover:bg-accent/50"
              >
                <ChevronDown className={cn("size-4 shrink-0 text-muted-foreground transition-transform", !open && "-rotate-90")} />
                <span className="min-w-0 flex-1">
                  <span className="block font-display text-sm font-semibold">{grp.name}</span>
                  {grp.summary && <span className="mt-0.5 line-clamp-2 block text-xs text-muted-foreground">{grp.summary.replace(/\[P\d+\]/g, "")}</span>}
                </span>
                <span className="shrink-0 rounded-full bg-muted px-2 py-0.5 text-xs tabular-nums">
                  {rows.length < grp.rows.length ? `${rows.length}/${grp.rows.length}` : grp.rows.length}
                </span>
              </button>
            </h4>
            {open && (
              <div id={panel} className="border-t">
                {grp.cites.length > 0 && (
                  <div className="flex flex-wrap items-center gap-1.5 border-b bg-muted/30 px-3.5 py-2 text-xs text-muted-foreground">
                    Group sources: <Cites labels={grp.cites} max={4} />
                  </div>
                )}
                {rows.length === 0 ? (
                  <p className="px-3.5 py-3 text-sm text-muted-foreground">No rows in this group match the filters.</p>
                ) : (
                  <>
                    {/* Wide screens: a table */}
                    <div className="hidden overflow-x-auto md:block">
                      <table className="w-full table-fixed text-sm">
                        <thead className="bg-muted/50 text-left text-xs text-muted-foreground">
                          <tr>
                            <th className="w-[19%] px-3 py-2 font-medium">Field / Requirement</th>
                            <th className="w-[15%] px-3 py-2 font-medium">Required?</th>
                            <th className="w-[22%] px-3 py-2 font-medium">Business rule</th>
                            <th className="w-[24%] px-3 py-2 font-medium">Validation / Allowed values</th>
                            <th className="w-[20%] px-3 py-2 font-medium">Source</th>
                          </tr>
                        </thead>
                        <tbody>
                          {rows.map(({ r, row }) => (
                            <tr key={r} id={rowId(g, r)} className="group/row scroll-mt-24 border-t align-top target:bg-accent/60">
                              <td className="px-3 py-2.5 break-words">
                                <span className="flex items-start gap-1">
                                  <span className="font-medium">{row.field}</span>
                                  <a href={`#${rowId(g, r)}`} aria-label={`Link to ${row.field}`} className="mt-0.5 opacity-0 group-hover/row:opacity-60 hover:opacity-100 focus:opacity-100">
                                    <Link2 className="size-3" />
                                  </a>
                                </span>
                                <RowWarnings row={row} />
                              </td>
                              <td className="px-3 py-2.5">
                                <RequiredBadge state={row.required} note={row.requiredNote} />
                                {row.requiredNote && <span className="mt-1 block text-xs text-muted-foreground">{row.requiredNote}</span>}
                              </td>
                              <td className="px-3 py-2.5">{row.rule ? <Prose text={row.rule} className="text-sm" /> : <Empty />}</td>
                              <td className="px-3 py-2.5">{row.validation ? <Prose text={row.validation} className="text-sm" /> : <Empty />}</td>
                              <td className="px-3 py-2.5">{row.cites.length ? <Cites labels={row.cites} max={2} className="w-full [&>button]:max-w-full" /> : <Empty what="No source cited" />}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    {/* Phones: one card per requirement */}
                    <ul className="divide-y md:hidden">
                      {rows.map(({ r, row }) => (
                        <li key={r} id={`${rowId(g, r)}-m`} className="flex flex-col gap-1.5 px-3.5 py-3">
                          <div className="flex items-start justify-between gap-2">
                            <span className="font-medium">{row.field}</span>
                            <RequiredBadge state={row.required} note={row.requiredNote} />
                          </div>
                          {row.requiredNote && <span className="text-xs text-muted-foreground">{row.requiredNote}</span>}
                          <dl className="grid gap-1 text-sm">
                            <div>
                              <dt className="text-[11px] text-muted-foreground uppercase">Business rule</dt>
                              <dd>{row.rule ? <Prose text={row.rule} /> : <Empty />}</dd>
                            </div>
                            <div>
                              <dt className="text-[11px] text-muted-foreground uppercase">Validation / allowed values</dt>
                              <dd>{row.validation ? <Prose text={row.validation} /> : <Empty />}</dd>
                            </div>
                          </dl>
                          {row.cites.length ? <Cites labels={row.cites} max={2} /> : <Empty what="No source cited" />}
                          <RowWarnings row={row} />
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            )}
          </section>
        );
      })}
    </div>
  );
}
