"use client";

import {
  Bookmark,
  BookOpenText,
  Download,
  FileText,
  Highlighter,
  ListChecks,
  MessageCircleQuestion,
  Search,
  StickyNote,
  Trash2,
  Upload,
} from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";
import { AnswerMarkdown } from "@/components/ask/answer-markdown";
import { StatusBadge } from "@/components/kd/status";
import { Button } from "@/components/ui/button";
import {
  clearLibrary,
  clearRecents,
  downloadFile,
  exportJson,
  HIGHLIGHT_COLORS,
  importJson,
  notesMarkdown,
  removeBookmark,
  removeHighlight,
  updateHighlight,
  useLibrary,
  type Bookmark as BookmarkItem,
  type BookmarkKind,
  type Highlight,
} from "@/lib/library";
import { cn } from "@/lib/utils";

type Tab = "highlights" | "bookmarks" | "answers" | "history";

const KIND: Record<BookmarkKind, { label: string; icon: React.ComponentType<{ className?: string }> }> = {
  doc: { label: "Document", icon: FileText },
  group: { label: "Topic", icon: BookOpenText },
  section: { label: "Section", icon: Bookmark },
  rule: { label: "Rule", icon: ListChecks },
  answer: { label: "Answer", icon: MessageCircleQuestion },
};

const when = (t: number) => new Date(t).toLocaleDateString("en", { day: "numeric", month: "short", year: "numeric" });
const has = (q: string, ...parts: string[]) => !q || parts.join(" ").toLowerCase().includes(q);

function Empty({ icon: Icon, title, children }: { icon: React.ComponentType<{ className?: string }>; title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-dashed p-8 text-center sm:p-12">
      <div className="mx-auto grid size-12 place-items-center rounded-2xl bg-accent text-primary">
        <Icon className="size-6" />
      </div>
      <h3 className="mt-4 font-semibold">{title}</h3>
      <p className="mx-auto mt-1 max-w-md text-sm text-pretty text-muted-foreground">{children}</p>
    </div>
  );
}

function HighlightCard({ h }: { h: Highlight }) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(h.note);
  return (
    <li className="rounded-xl border bg-card p-4">
      <Link href={`${h.href}#hl-${h.id}`} className="block">
        <blockquote className={cn("kd-hl rounded-lg border-l-4 border-[var(--hl-ink)]/40 px-3 py-2 text-[15px] leading-relaxed", `kd-hl-${h.color}`)}>
          <span className="line-clamp-4">{h.exact.replace(/\s+/g, " ").trim()}</span>
        </blockquote>
      </Link>
      {editing ? (
        <form
          className="mt-3"
          onSubmit={(e) => {
            e.preventDefault();
            updateHighlight(h.id, { note: draft.trim() });
            setEditing(false);
          }}
        >
          <textarea
            autoFocus
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            rows={3}
            aria-label="Note"
            className="w-full resize-none rounded-lg border bg-background p-2 text-sm outline-none focus:ring-3 focus:ring-ring/40"
          />
          <div className="mt-2 flex justify-end gap-2">
            <Button type="button" variant="ghost" size="sm" onClick={() => setEditing(false)}>
              Cancel
            </Button>
            <Button type="submit" size="sm">
              Save note
            </Button>
          </div>
        </form>
      ) : (
        h.note && (
          <p className="mt-3 flex gap-2 text-sm whitespace-pre-wrap">
            <StickyNote className="mt-0.5 size-4 shrink-0 text-primary" />
            {h.note}
          </p>
        )
      )}
      <div className="mt-3 flex flex-wrap items-center gap-1 border-t pt-2.5">
        <span className="mr-auto text-xs text-muted-foreground">{when(h.updatedAt)}</span>
        <span className="flex gap-1 px-1" role="group" aria-label="Colour">
          {HIGHLIGHT_COLORS.map((c) => (
            <button
              key={c}
              type="button"
              aria-label={`Colour ${c}`}
              aria-pressed={h.color === c}
              onClick={() => updateHighlight(h.id, { color: c })}
              className={cn(`kd-hl-${c} kd-hl-swatch size-4 rounded-full border`, h.color === c && "ring-2 ring-ring")}
            />
          ))}
        </span>
        <Button variant="ghost" size="sm" onClick={() => setEditing(true)}>
          <StickyNote /> {h.note ? "Edit note" : "Add note"}
        </Button>
        <Link
          href={`/ask?${new URLSearchParams({ sel: h.exact.slice(0, 1500), q: "Explain this in plain words. What does it mean and is it final?" })}`}
          className="inline-flex h-7 items-center gap-1 rounded-md px-2.5 text-[0.8rem] font-medium hover:bg-accent"
        >
          <MessageCircleQuestion className="size-3.5" /> Ask
        </Link>
        <Button variant="ghost" size="icon-sm" aria-label="Remove highlight" onClick={() => removeHighlight(h.id)}>
          <Trash2 />
        </Button>
      </div>
    </li>
  );
}

function BookmarkRow({ b }: { b: BookmarkItem }) {
  const K = KIND[b.kind];
  return (
    <li className="group flex items-center gap-3 rounded-xl border bg-card p-3 transition-colors hover:border-primary/30">
      <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-accent text-primary">
        <K.icon className="size-4" />
      </span>
      <Link href={b.href} className="min-w-0 flex-1">
        <span className={cn("block truncate text-sm font-medium group-hover:text-primary", b.kind === "rule" && "font-mono")}>{b.title}</span>
        <span className="block truncate text-xs text-muted-foreground">
          {K.label}
          {b.subtitle && ` · ${b.subtitle}`}
        </span>
      </Link>
      <span className="hidden text-xs text-muted-foreground sm:block">{when(b.createdAt)}</span>
      <Button variant="ghost" size="icon-sm" aria-label={`Remove bookmark ${b.title}`} onClick={() => removeBookmark(b.key)}>
        <Trash2 />
      </Button>
    </li>
  );
}

function AnswerCard({ b }: { b: BookmarkItem }) {
  const a = b.answer!;
  return (
    <li className="rounded-xl border bg-card p-4 sm:p-5">
      <div className="flex flex-wrap items-start gap-2">
        <p className="min-w-0 flex-1 font-medium">{a.question}</p>
        <StatusBadge status={a.status} />
      </div>
      {a.note && <p className="mt-1 text-xs text-muted-foreground">{a.note}</p>}
      <details className="mt-3">
        <summary className="cursor-pointer text-sm text-primary">Show answer</summary>
        <AnswerMarkdown text={a.answer} className="mt-3 text-sm" />
        {a.sources.length > 0 && (
          <ul className="mt-3 flex flex-col gap-1 border-t pt-3 text-xs">
            {a.sources.map((s) => (
              <li key={s.label}>
                <Link href={s.href} className="hover:text-primary">
                  <span className="mr-1.5 font-mono font-semibold text-primary">{s.label}</span>
                  {s.title}
                  <span className="text-muted-foreground"> · {s.where}</span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </details>
      <div className="mt-3 flex items-center gap-1 border-t pt-2.5">
        <span className="mr-auto text-xs text-muted-foreground">{when(b.createdAt)}</span>
        <Link href={`/ask?q=${encodeURIComponent(a.question)}`} className="inline-flex h-7 items-center gap-1 rounded-md px-2.5 text-[0.8rem] font-medium hover:bg-accent">
          <MessageCircleQuestion className="size-3.5" /> Ask again
        </Link>
        <Button variant="ghost" size="icon-sm" aria-label="Remove saved answer" onClick={() => removeBookmark(b.key)}>
          <Trash2 />
        </Button>
      </div>
    </li>
  );
}

export function LibraryView() {
  const lib = useLibrary();
  const [tab, setTab] = useState<Tab>("highlights");
  const [query, setQuery] = useState("");
  const [msg, setMsg] = useState("");
  const file = useRef<HTMLInputElement>(null);
  const q = query.trim().toLowerCase();

  const highlights = lib.highlights.filter((h) => has(q, h.exact, h.note, h.scopeTitle));
  const bookmarks = lib.bookmarks.filter((b) => b.kind !== "answer" && has(q, b.title, b.subtitle));
  const answers = lib.bookmarks.filter((b) => b.kind === "answer" && b.answer && has(q, b.answer.question, b.answer.answer));
  const recents = lib.recents.filter((r) => has(q, r.title, r.subtitle));

  // Highlights grouped by the page they were made on.
  const byPage = new Map<string, Highlight[]>();
  for (const h of highlights) byPage.set(h.scope, [...(byPage.get(h.scope) ?? []), h]);

  const tabs: { id: Tab; label: string; icon: React.ComponentType<{ className?: string }>; count: number }[] = [
    { id: "highlights", label: "Highlights & notes", icon: Highlighter, count: lib.highlights.length },
    { id: "bookmarks", label: "Bookmarks", icon: Bookmark, count: lib.bookmarks.filter((b) => b.kind !== "answer").length },
    { id: "answers", label: "Saved answers", icon: MessageCircleQuestion, count: lib.bookmarks.filter((b) => b.kind === "answer").length },
    { id: "history", label: "History", icon: BookOpenText, count: lib.recents.length },
  ];
  const total = lib.highlights.length + lib.bookmarks.length;

  const flash = (m: string) => {
    setMsg(m);
    setTimeout(() => setMsg(""), 3000);
  };

  return (
    <div>
      {/* Toolbar: search, backup, restore */}
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
        <label className="relative flex-1">
          <span className="sr-only">Search your library</span>
          <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search your highlights, notes and bookmarks…"
            className="h-10 w-full rounded-xl border bg-card pr-3 pl-9 text-sm outline-none focus:ring-3 focus:ring-ring/40"
          />
        </label>
        <div className="flex flex-wrap gap-1.5">
          <Button variant="outline" size="sm" disabled={!total} onClick={() => downloadFile("keydemand-notes.md", notesMarkdown(lib, location.origin), "text/markdown")}>
            <Download /> Notes .md
          </Button>
          <Button variant="outline" size="sm" disabled={!total} onClick={() => downloadFile("keydemand-library.json", exportJson(), "application/json")}>
            <Download /> Backup
          </Button>
          <Button variant="outline" size="sm" onClick={() => file.current?.click()}>
            <Upload /> Restore
          </Button>
          <input
            ref={file}
            type="file"
            accept="application/json,.json"
            className="hidden"
            onChange={async (e) => {
              const f = e.target.files?.[0];
              e.target.value = "";
              if (!f) return;
              try {
                const n = importJson(await f.text());
                flash(n ? `Added ${n} items from the backup.` : "Everything in that backup is already here.");
              } catch (err) {
                flash((err as Error).message || "Couldn't read that file.");
              }
            }}
          />
        </div>
      </div>
      {msg && (
        <p role="status" className="mt-2 text-sm text-primary">
          {msg}
        </p>
      )}

      {/* Tabs */}
      <div role="tablist" aria-label="Library" className="mt-5 flex gap-1 overflow-x-auto border-b [scrollbar-width:none]">
        {tabs.map((t) => (
          <button
            key={t.id}
            role="tab"
            type="button"
            aria-selected={tab === t.id}
            onClick={() => setTab(t.id)}
            className={cn(
              "-mb-px flex shrink-0 items-center gap-2 border-b-2 border-transparent px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
              tab === t.id && "border-primary text-foreground",
            )}
          >
            <t.icon className="size-4" />
            {t.label}
            <span className="rounded-full bg-muted px-1.5 text-xs tabular-nums">{t.count}</span>
          </button>
        ))}
      </div>

      <div role="tabpanel" className="mt-5">
        {tab === "highlights" &&
          (byPage.size ? (
            <div className="flex flex-col gap-8">
              {[...byPage.values()].map((list) => (
                <section key={list[0].scope}>
                  <h3 className="mb-3 flex items-baseline gap-2">
                    <Link href={list[0].href} className="font-semibold hover:text-primary">
                      {list[0].scopeTitle}
                    </Link>
                    <span className="text-xs text-muted-foreground">{list.length} highlights</span>
                  </h3>
                  <ul className="grid gap-3 md:grid-cols-2">
                    {list.map((h) => (
                      <HighlightCard key={h.id} h={h} />
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          ) : (
            <Empty icon={Highlighter} title={q ? "No highlights match" : "No highlights yet"}>
              Open any document from the <Link href="/read" className="text-primary underline">Index</Link>, select some text and pick a colour. Add a note to remember why it matters.
            </Empty>
          ))}

        {tab === "bookmarks" &&
          (bookmarks.length ? (
            <ul className="flex flex-col gap-2">
              {bookmarks.map((b) => (
                <BookmarkRow key={b.key} b={b} />
              ))}
            </ul>
          ) : (
            <Empty icon={Bookmark} title={q ? "No bookmarks match" : "No bookmarks yet"}>
              Press <strong>Save</strong> on a document, topic or rule, or the bookmark icon next to any section heading.
            </Empty>
          ))}

        {tab === "answers" &&
          (answers.length ? (
            <ul className="flex flex-col gap-3">
              {answers.map((b) => (
                <AnswerCard key={b.key} b={b} />
              ))}
            </ul>
          ) : (
            <Empty icon={MessageCircleQuestion} title={q ? "No saved answers match" : "No saved answers yet"}>
              On the <Link href="/ask" className="text-primary underline">Ask</Link> page, press <strong>Save</strong> under an answer to keep it here with its sources.
            </Empty>
          ))}

        {tab === "history" &&
          (recents.length ? (
            <>
              <ul className="flex flex-col gap-2">
                {recents.map((r) => (
                  <li key={r.href}>
                    <Link href={`${r.href}?resume`} className="flex items-center gap-3 rounded-xl border bg-card p-3 hover:border-primary/30">
                      <FileText className="size-4 shrink-0 text-primary" />
                      <span className="min-w-0 flex-1">
                        <span className="block truncate text-sm font-medium">{r.title}</span>
                        <span className="block truncate text-xs text-muted-foreground">{r.subtitle}</span>
                      </span>
                      <span className="text-xs text-muted-foreground tabular-nums">{Math.round(r.progress * 100)}% read</span>
                    </Link>
                  </li>
                ))}
              </ul>
              <Button variant="ghost" size="sm" className="mt-3" onClick={clearRecents}>
                Clear history
              </Button>
            </>
          ) : (
            <Empty icon={BookOpenText} title="Nothing read yet">
              Documents you open show up here, with how far you got.
            </Empty>
          ))}
      </div>

      {total > 0 && (
        <p className="mt-10 border-t pt-4 text-xs text-muted-foreground">
          Your library is kept in this browser only. Use <strong>Backup</strong> to keep a copy or move it to another device.{" "}
          <button
            type="button"
            className="underline hover:text-destructive"
            onClick={() => confirm("Remove every bookmark, highlight, note and saved answer from this browser?") && clearLibrary()}
          >
            Clear everything
          </button>
        </p>
      )}
    </div>
  );
}
