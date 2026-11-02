"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useMemo, useRef } from "react";
import { useLibrary } from "@/lib/library";
import { findQuote, flashText, unwrapAll, wrapRange } from "@/lib/text-anchor";
import { cn } from "@/lib/utils";

/**
 * Text people can highlight, annotate and ask about. Saved highlights for `scope` are drawn back onto the
 * text on every change. Links ending in #hl-<id> scroll to that highlight; ?find=<text> scrolls to and
 * flashes a passage (used by "Show in document" from Ask).
 */
export function HighlightScope({
  scope,
  title,
  className,
  children,
}: {
  /** Stable ID for this text, e.g. "doc:07-1" or "rule:BR-REL-001". */
  scope: string;
  /** Shown in the library next to highlights made here. */
  title: string;
  className?: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { highlights } = useLibrary();
  const mine = useMemo(() => highlights.filter((h) => h.scope === scope).sort((a, b) => a.createdAt - b.createdAt), [highlights, scope]);
  const jumped = useRef(false);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    unwrapAll(root, "mark[data-hl]");
    for (const h of mine) {
      const hit = findQuote(root, h.exact, h.prefix, h.suffix);
      if (!hit) continue;
      let first = true;
      wrapRange(root, hit.start, hit.end, () => {
        const m = document.createElement("mark");
        // The first piece carries the id, so #hl-<id> links scroll here like any anchor (also on the same page).
        if (first) m.id = `hl-${h.id}`;
        first = false;
        m.dataset.hl = h.id;
        m.className = cn("kd-hl", `kd-hl-${h.color}`, h.note && "kd-hl-noted");
        // Reachable from the keyboard: Tab to it, Enter or Space opens its toolbar (selection-toolbar.tsx).
        // A title, not aria-label, so screen readers still read the highlighted text itself.
        m.tabIndex = 0;
        m.title = `${h.note ? `${h.note}\n` : ""}Highlight: press Enter for options`;
        return m;
      });
    }
    // A link to one highlight: wait until it is drawn, then go there once.
    const id = location.hash.startsWith("#hl-") ? location.hash.slice(4) : "";
    if (id && !jumped.current) {
      const el = root.querySelector<HTMLElement>(`mark[data-hl="${CSS.escape(id)}"]`);
      if (el) {
        jumped.current = true;
        el.scrollIntoView({ behavior: "smooth", block: "center" });
        root.querySelectorAll(`mark[data-hl="${CSS.escape(id)}"]`).forEach((m) => m.classList.add("kd-hl-pulse"));
      }
    }
  }, [mine]);

  // Re-runs when only the query changes (e.g. "Show in document" for the document already open).
  const find = useSearchParams().get("find");
  useEffect(() => {
    const root = ref.current;
    if (!root || !find) return;
    // After the browser's own scroll restoration.
    const t = setTimeout(() => flashText(root, find), 150);
    return () => clearTimeout(t);
  }, [find]);

  // Pulse a highlight when a #hl- link to it is followed on this page.
  useEffect(() => {
    const onHash = () => {
      const id = location.hash.startsWith("#hl-") ? location.hash.slice(4) : "";
      if (!id || !ref.current) return;
      const marks = ref.current.querySelectorAll(`mark[data-hl="${CSS.escape(id)}"]`);
      marks[0]?.scrollIntoView({ behavior: "smooth", block: "center" });
      marks.forEach((m) => {
        m.classList.remove("kd-hl-pulse");
        void (m as HTMLElement).offsetWidth; // restart the animation
        m.classList.add("kd-hl-pulse");
      });
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  return (
    <div ref={ref} data-askable data-hl-scope={scope} data-hl-title={title} className={className}>
      {children}
    </div>
  );
}
