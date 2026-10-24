"use client";

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
      wrapRange(root, hit.start, hit.end, () => {
        const m = document.createElement("mark");
        m.dataset.hl = h.id;
        m.className = cn("kd-hl", `kd-hl-${h.color}`, h.note && "kd-hl-noted");
        if (h.note) m.title = h.note;
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

  useEffect(() => {
    const root = ref.current;
    const find = new URLSearchParams(location.search).get("find");
    if (!root || !find) return;
    // After the browser's own scroll restoration.
    const t = setTimeout(() => flashText(root, find), 150);
    return () => clearTimeout(t);
  }, []);

  return (
    <div ref={ref} data-askable data-hl-scope={scope} data-hl-title={title} className={className}>
      {children}
    </div>
  );
}
