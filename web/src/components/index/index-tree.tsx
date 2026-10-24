"use client";

import { ChevronRight, ChevronsDownUp, ChevronsUpDown, ExternalLink, FileText, Search, X } from "lucide-react";
import Link from "next/link";
import { useDeferredValue, useMemo, useState } from "react";
import { SpotlightCard, TopicIcon } from "@/components/kd/fx";
import { BookmarkButton } from "@/components/library/bookmark-button";
import { useShowAll } from "@/components/shell/scope-toggle";
import { topicStyle } from "@/lib/topic-style";
import { cn } from "@/lib/utils";

export interface IndexSection {
  level: number;
  title: string;
  slug: string;
}
export interface IndexDoc {
  id: string;
  title: string;
  note: string;
  url: string;
  type: string;
  ruleCount: number;
  /** A working note (lib/scope.ts). */
  extra: boolean;
  sections: IndexSection[];
}
export interface IndexGroup {
  id: string;
  title: string;
  docCount: number;
  ruleCount: number;
  needsClarity: number;
  extra: boolean;
  docs: IndexDoc[];
}

/** Every word must appear (in any order). */
const matcher = (q: string) => {
  const words = q.toLowerCase().split(/\s+/).filter(Boolean);
  return (s: string) => words.every((w) => s.toLowerCase().includes(w));
};

/** Marks the query words inside `text`. */
function Hl({ text, q }: { text: string; q: string }) {
  const words = q.split(/\s+/).filter((w) => w.length > 1);
  if (!words.length) return <>{text}</>;
  const re = new RegExp(`(${words.map((w) => w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`, "gi");
  return (
    <>
      {text.split(re).map((part, i) =>
        i % 2 ? (
          <mark key={i} className="rounded-sm bg-primary/15 text-inherit">
            {part}
          </mark>
        ) : (
          part
        ),
      )}
    </>
  );
}

function DocRow({ g, d, q, open, onToggle }: { g: IndexGroup; d: IndexDoc; q: string; open: boolean; onToggle: () => void }) {
  const href = `/read/${g.id}/${d.id}`;
  const match = matcher(q);
  const sections = q ? d.sections.filter((s) => match(s.title)) : d.sections;
  const min = Math.min(...d.sections.map((s) => s.level), 9);
  return (
    <li className="rounded-xl border bg-background/70 transition-all hover:border-primary/40 hover:shadow-sm">
      <div className="flex items-center gap-1 p-1.5 pr-2">
        <button
          type="button"
          onClick={onToggle}
          disabled={!sections.length}
          aria-expanded={open}
          aria-label={`${open ? "Hide" : "Show"} sections of ${d.title}`}
          className="grid size-8 shrink-0 place-items-center rounded-lg text-muted-foreground hover:bg-accent disabled:opacity-30"
        >
          <ChevronRight className={cn("size-4 transition-transform", open && "rotate-90")} />
        </button>
        <Link href={href} className="min-w-0 flex-1 py-1.5">
          <span className="flex items-center gap-2">
            <FileText className="size-4 shrink-0" style={{ color: `oklch(0.62 0.16 ${topicStyle(g.id).hue})` }} />
            <span className="truncate text-sm font-medium hover:text-primary">
              <Hl text={d.title} q={q} />
            </span>
          </span>
          <span className="mt-0.5 block pl-6 text-xs text-muted-foreground">
            {d.ruleCount} rules · {d.sections.length} sections{d.note && ` · ${d.note}`}
          </span>
        </Link>
        <a
          href={d.url}
          target="_blank"
          rel="noreferrer"
          aria-label={`Open ${d.title} in Google Drive`}
          title="Open in Google Drive"
          className="hidden size-7 place-items-center rounded-md text-muted-foreground hover:bg-accent hover:text-foreground sm:grid"
        >
          <ExternalLink className="size-3.5" />
        </a>
        <BookmarkButton compact variant="ghost" item={{ key: `doc:${d.id}`, kind: "doc", title: d.title, subtitle: `${g.id} · ${g.title}`, href }} />
      </div>
      {open && sections.length > 0 && (
        <ul className="border-t px-3 py-2">
          {sections.map((s) => (
            <li key={s.slug}>
              <Link
                href={`${href}#${s.slug}`}
                style={{ paddingLeft: `${(s.level - min) * 1 + 0.5}rem` }}
                className={cn(
                  "block rounded-md py-1 pr-2 text-sm leading-snug text-muted-foreground hover:bg-accent hover:text-foreground",
                  s.level === min && "font-medium text-foreground/85",
                )}
              >
                <Hl text={s.title} q={q} />
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

/** The whole knowledge base as one tree: topic → document → section, with a filter. */
export function IndexTree({ groups: allGroups }: { groups: IndexGroup[] }) {
  const showAll = useShowAll();
  // Working notes only while they are shown.
  const groups = useMemo(
    () =>
      showAll
        ? allGroups
        : allGroups
            .filter((g) => !g.extra)
            .map((g) => {
              const docs = g.docs.filter((d) => !d.extra);
              return { ...g, docs, docCount: docs.length, ruleCount: docs.reduce((n, d) => n + d.ruleCount, 0) };
            }),
    [allGroups, showAll],
  );
  const [query, setQuery] = useState("");
  const q = useDeferredValue(query.trim());
  const [openDocs, setOpenDocs] = useState<Set<string>>(new Set());

  const filtered = useMemo(() => {
    if (!q) return groups;
    const match = matcher(q);
    return groups
      .map((g) => ({
        ...g,
        docs: match(`${g.id} ${g.title}`) ? g.docs : g.docs.filter((d) => match(d.title) || d.sections.some((s) => match(s.title))),
      }))
      .filter((g) => g.docs.length);
  }, [groups, q]);

  const sectionHits = q ? filtered.reduce((n, g) => n + g.docs.reduce((m, d) => m + d.sections.filter((s) => matcher(q)(s.title)).length, 0), 0) : 0;
  const allDocIds = filtered.flatMap((g) => g.docs.map((d) => d.id));
  const allOpen = allDocIds.length > 0 && allDocIds.every((id) => openDocs.has(id));
  // While filtering, documents with matching sections open by themselves.
  const isOpen = (d: IndexDoc) => openDocs.has(d.id) || (!!q && d.sections.some((s) => matcher(q)(s.title)));

  const toggle = (id: string) =>
    setOpenDocs((s) => {
      const n = new Set(s);
      if (n.has(id)) n.delete(id);
      else n.add(id);
      return n;
    });

  return (
    <div>
      <div className="sticky top-16 z-20 -mx-4 bg-background/90 px-4 py-3 backdrop-blur-md sm:-mx-6 sm:px-6 lg:-mx-10 lg:px-10">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="relative flex-1">
            <span className="sr-only">Filter the index</span>
            <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Filter topics, documents and sections… e.g. relevancy, subscription, notifications"
              className="h-11 w-full rounded-xl border bg-card pr-10 pl-9 text-sm shadow-sm outline-none focus:ring-3 focus:ring-ring/40"
            />
            {query && (
              <button
                type="button"
                aria-label="Clear filter"
                onClick={() => setQuery("")}
                className="absolute top-1/2 right-2 grid size-7 -translate-y-1/2 place-items-center rounded-md hover:bg-accent"
              >
                <X className="size-4" />
              </button>
            )}
          </label>
          <button
            type="button"
            onClick={() => setOpenDocs(allOpen ? new Set() : new Set(allDocIds))}
            className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border bg-card px-4 text-sm font-medium hover:bg-accent"
          >
            {allOpen ? <ChevronsDownUp className="size-4" /> : <ChevronsUpDown className="size-4" />}
            {allOpen ? "Collapse all" : "Expand all"}
          </button>
        </div>
        <div className="mt-2 flex gap-1.5 overflow-x-auto pb-1 [scrollbar-width:none]" aria-label="Jump to a topic">
          {filtered.map((g) => (
            <a
              key={g.id}
              href={`#topic-${g.id}`}
              className="inline-flex shrink-0 items-center gap-1.5 rounded-full border bg-card px-2.5 py-1 text-xs whitespace-nowrap text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:text-foreground"
            >
              <TopicIcon group={g.id} size="sm" className="size-5 rounded-md [&_svg]:size-3" /> {topicStyle(g.id).short}
            </a>
          ))}
        </div>
        {q && (
          <p className="mt-1 text-xs text-muted-foreground" aria-live="polite">
            {filtered.length ? `${filtered.reduce((n, g) => n + g.docs.length, 0)} documents · ${sectionHits} matching sections` : "Nothing matches. Try fewer words, or ask instead."}
            {!filtered.length && (
              <Link href={`/ask?q=${encodeURIComponent(q)}`} className="ml-1 font-medium text-primary">
                Ask “{q}” →
              </Link>
            )}
          </p>
        )}
      </div>

      <div className="mt-4 flex flex-col gap-5">
        {filtered.map((g) => (
          <section key={g.id} id={`topic-${g.id}`} className="scroll-mt-40">
            <SpotlightCard hue={topicStyle(g.id).hue} className="p-4 sm:p-5">
            <header className="flex flex-wrap items-start gap-3">
              <TopicIcon group={g.id} />
              <div className="min-w-0 flex-1">
                <Link href={`/read/${g.id}`} className="font-semibold text-balance hover:text-primary">
                  <Hl text={g.title} q={q} />
                </Link>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  {g.docCount} documents · {g.ruleCount} rules
                  {g.needsClarity > 0 && <span className="text-unclear-ink"> · {g.needsClarity} need clarity</span>}
                </p>
              </div>
              <Link href={`/rules?group=${g.id}`} className="rounded-lg px-2.5 py-1.5 text-xs font-medium text-primary hover:bg-accent">
                Rules →
              </Link>
            </header>
            <ul className="mt-4 flex flex-col gap-2">
              {g.docs.map((d) => (
                <DocRow key={d.id} g={g} d={d} q={q} open={isOpen(d)} onToggle={() => toggle(d.id)} />
              ))}
            </ul>
            </SpotlightCard>
          </section>
        ))}
      </div>
    </div>
  );
}
