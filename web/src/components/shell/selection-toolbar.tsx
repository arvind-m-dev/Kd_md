"use client";

import { Check, Copy, Link2, MessageCircleQuestion, StickyNote, Trash2 } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  addHighlight,
  HIGHLIGHT_COLORS,
  removeHighlight,
  updateHighlight,
  useLibrary,
  type HighlightColor,
} from "@/lib/library";
import { quoteFromRange } from "@/lib/text-anchor";
import { cn } from "@/lib/utils";

const MIN_CHARS = 3;
const MIN_ASK_CHARS = 12;
const MAX_CHARS = 1500;

type Target =
  /** Fresh selected text. `scope` is set when it can be highlighted. */
  | { kind: "selection"; text: string; x: number; y: number; scope: HTMLElement | null; range: Range }
  /** A saved highlight that was clicked. */
  | { kind: "highlight"; id: string; text: string; x: number; y: number };

const COLOR_LABEL: Record<HighlightColor, string> = { yellow: "Neon yellow", green: "Neon green", blue: "Neon blue", pink: "Neon pink", orange: "Neon orange" };

function place(rect: DOMRect) {
  return {
    x: Math.min(Math.max(rect.left + rect.width / 2, 150), window.innerWidth - 150),
    y: rect.top > 120 ? rect.top - 10 : rect.bottom + 64,
  };
}

const askHref = (text: string) => {
  const ids = [...new Set(text.match(/\bBR-[A-Z0-9]+-\d+\b/g) ?? [])].slice(0, 10);
  const params = new URLSearchParams({ sel: text.slice(0, MAX_CHARS), q: "Explain this in plain words. What does it mean and is it final?" });
  if (ids.length) params.set("rules", ids.join(","));
  return `/ask?${params}`;
};

function ToolButton({ label, onClick, children, className }: { label: string; onClick: () => void; children: React.ReactNode; className?: string }) {
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      onMouseDown={(e) => e.preventDefault()}
      onClick={onClick}
      className={cn("flex h-8 items-center gap-1.5 rounded-full px-2.5 text-sm font-medium transition-colors hover:bg-background/15", className)}
    >
      {children}
    </button>
  );
}

/**
 * Select text inside any `[data-askable]` area and a toolbar appears: highlight in a colour, add a note,
 * ask about it, copy it, or copy a link to it. Inside a `HighlightScope` the highlight is saved to the
 * library; click a highlight later to recolour it, edit its note or remove it.
 */
export function SelectionToolbar() {
  const router = useRouter();
  const lib = useLibrary();
  const [target, setTarget] = useState<Target | null>(null);
  const [noteFor, setNoteFor] = useState<string | null>(null);
  const [draft, setDraft] = useState("");
  const [copied, setCopied] = useState<"text" | "link" | null>(null);
  const panel = useRef<HTMLDivElement>(null);

  const close = useCallback(() => {
    setTarget(null);
    setNoteFor(null);
    setCopied(null);
  }, []);

  useEffect(() => {
    const update = (e: Event) => {
      if (panel.current?.contains(e.target as Node)) return;
      // A saved highlight was clicked (and nothing new selected).
      const mark = (e.target as Element | null)?.closest?.("mark[data-hl]") as HTMLElement | null;
      const s = window.getSelection();
      const text = s?.toString().trim() ?? "";
      if (mark && text.length < MIN_CHARS) {
        const id = mark.dataset.hl!;
        const all = [...document.querySelectorAll(`mark[data-hl="${CSS.escape(id)}"]`)];
        setNoteFor(null);
        setTarget({ kind: "highlight", id, text: all.map((m) => m.textContent).join(""), ...place(mark.getBoundingClientRect()) });
        return;
      }
      if (noteFor) return;
      if (!s || s.rangeCount === 0 || text.length < MIN_CHARS) return setTarget(null);
      const range = s.getRangeAt(0);
      const node = range.commonAncestorContainer;
      const el = node instanceof Element ? node : node.parentElement;
      const askable = el?.closest("[data-askable]");
      if (!askable) return setTarget(null);
      setCopied(null);
      setTarget({
        kind: "selection",
        text: text.slice(0, MAX_CHARS),
        scope: (el?.closest("[data-hl-scope]") as HTMLElement | null) ?? null,
        range: range.cloneRange(),
        ...place(range.getBoundingClientRect()),
      });
    };
    const onUp = (e: Event) => setTimeout(() => update(e), 0);
    const onScroll = () => !noteFor && setTarget(null);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    document.addEventListener("mouseup", onUp);
    document.addEventListener("touchend", onUp);
    document.addEventListener("keyup", onUp);
    document.addEventListener("keydown", onKey);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      document.removeEventListener("mouseup", onUp);
      document.removeEventListener("touchend", onUp);
      document.removeEventListener("keyup", onUp);
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("scroll", onScroll);
    };
  }, [noteFor, close]);

  /** Saves the selection as a highlight; returns its ID. */
  const save = (color: HighlightColor): string | null => {
    if (target?.kind !== "selection" || !target.scope) return null;
    const q = quoteFromRange(target.scope, target.range);
    if (!q) return null;
    const h = addHighlight({
      ...q,
      scope: target.scope.dataset.hlScope!,
      scopeTitle: target.scope.dataset.hlTitle ?? document.title,
      href: location.pathname,
      color,
      note: "",
    });
    window.getSelection()?.removeAllRanges();
    return h.id;
  };

  const startNote = (id: string) => {
    setDraft(lib.highlights.find((h) => h.id === id)?.note ?? "");
    setNoteFor(id);
  };

  const copy = async (what: "text" | "link") => {
    if (!target) return;
    const value = what === "text" ? target.text : target.kind === "highlight" ? `${location.origin}${location.pathname}#hl-${target.id}` : `${location.origin}${location.pathname}?find=${encodeURIComponent(target.text.slice(0, 200))}`;
    await navigator.clipboard.writeText(value);
    setCopied(what);
    setTimeout(() => setCopied(null), 1400);
  };

  const ask = () => {
    if (!target || target.text.length < MIN_ASK_CHARS) return;
    const href = askHref(target.text);
    close();
    window.getSelection()?.removeAllRanges();
    router.push(href);
  };

  const current = target?.kind === "highlight" ? lib.highlights.find((h) => h.id === target.id) : undefined;
  const canHighlight = target?.kind === "selection" ? !!target.scope : !!current;

  return (
    <AnimatePresence>
      {target && (
        <motion.div
          ref={panel}
          role="toolbar"
          aria-label="Selected text"
          initial={{ opacity: 0, y: 6, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 6, scale: 0.96 }}
          transition={{ duration: 0.14 }}
          style={{ left: target.x, top: target.y }}
          className="fixed z-50 -translate-x-1/2 -translate-y-full"
        >
          {noteFor ? (
            <form
              className="w-[min(22rem,calc(100vw-2rem))] rounded-2xl border bg-popover p-3 text-popover-foreground shadow-xl"
              onSubmit={(e) => {
                e.preventDefault();
                updateHighlight(noteFor, { note: draft.trim() });
                close();
              }}
            >
              <label className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground" htmlFor="kd-note">
                <StickyNote className="size-3.5" /> Note on this highlight
              </label>
              <textarea
                id="kd-note"
                autoFocus
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) e.currentTarget.form?.requestSubmit();
                }}
                rows={3}
                placeholder="What matters here? Questions to raise?"
                className="mt-2 w-full resize-none rounded-lg border bg-background p-2 text-sm outline-none focus:ring-3 focus:ring-ring/40"
              />
              <div className="mt-2 flex justify-end gap-2">
                <button type="button" onClick={close} className="rounded-lg px-3 py-1.5 text-sm hover:bg-accent">
                  Cancel
                </button>
                <button type="submit" className="rounded-lg bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground">
                  Save note
                </button>
              </div>
            </form>
          ) : (
            <div className="flex items-center gap-0.5 rounded-full bg-foreground p-1 text-background shadow-xl">
              {canHighlight && (
                <span className="flex items-center gap-1 px-1.5" role="group" aria-label="Highlight colour">
                  {HIGHLIGHT_COLORS.map((c) => (
                    <button
                      key={c}
                      type="button"
                      aria-label={`Highlight ${COLOR_LABEL[c]}`}
                      data-color={c}
                      title={`Highlight ${COLOR_LABEL[c].toLowerCase()}`}
                      onMouseDown={(e) => e.preventDefault()}
                      onClick={() => {
                        if (target.kind === "highlight") updateHighlight(target.id, { color: c });
                        else save(c);
                        close();
                      }}
                      className={cn(
                        `kd-swatch kd-hl-${c} size-5 rounded-full ring-2 ring-transparent transition-transform hover:scale-110`,
                        current?.color === c && "ring-background",
                      )}
                    />
                  ))}
                </span>
              )}
              {canHighlight && (
                <ToolButton
                  label={current?.note ? "Edit note" : "Add note"}
                  onClick={() => {
                    const id = target.kind === "highlight" ? target.id : save("yellow");
                    if (id) startNote(id);
                  }}
                >
                  <StickyNote className="size-4" />
                  <span className="hidden sm:inline">Note</span>
                </ToolButton>
              )}
              {target.text.length >= MIN_ASK_CHARS && (
                <ToolButton label="Ask about this" onClick={ask}>
                  <MessageCircleQuestion className="size-4" />
                  Ask
                </ToolButton>
              )}
              <ToolButton label="Copy text" onClick={() => copy("text")}>
                {copied === "text" ? <Check className="size-4" /> : <Copy className="size-4" />}
              </ToolButton>
              {canHighlight && (
                <ToolButton label="Copy link to this text" onClick={() => copy("link")}>
                  {copied === "link" ? <Check className="size-4" /> : <Link2 className="size-4" />}
                </ToolButton>
              )}
              {target.kind === "highlight" && (
                <ToolButton
                  label="Remove highlight"
                  onClick={() => {
                    removeHighlight(target.id);
                    close();
                  }}
                >
                  <Trash2 className="size-4" />
                </ToolButton>
              )}
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
