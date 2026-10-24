"use client";

import { MessageCircleQuestion } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const MIN_CHARS = 12;
const MAX_CHARS = 1500;

/**
 * Select text anywhere inside a `[data-askable]` area and an "Ask about this" button appears.
 * It opens Ask with the selection (and any rule IDs inside it) as context.
 */
export function SelectionAsk() {
  const router = useRouter();
  const [sel, setSel] = useState<{ text: string; x: number; y: number } | null>(null);

  useEffect(() => {
    const update = () => {
      const s = window.getSelection();
      const text = s?.toString().trim() ?? "";
      if (!s || s.rangeCount === 0 || text.length < MIN_CHARS) return setSel(null);
      const node = s.getRangeAt(0).commonAncestorContainer;
      const el = node instanceof Element ? node : node.parentElement;
      if (!el?.closest("[data-askable]")) return setSel(null);
      const rect = s.getRangeAt(0).getBoundingClientRect();
      setSel({
        text: text.slice(0, MAX_CHARS),
        x: Math.min(Math.max(rect.left + rect.width / 2, 90), window.innerWidth - 90),
        y: rect.top > 70 ? rect.top - 8 : rect.bottom + 52,
      });
    };
    const onUp = () => setTimeout(update, 0);
    const onScroll = () => setSel(null);
    document.addEventListener("mouseup", onUp);
    document.addEventListener("touchend", onUp);
    document.addEventListener("keyup", onUp);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      document.removeEventListener("mouseup", onUp);
      document.removeEventListener("touchend", onUp);
      document.removeEventListener("keyup", onUp);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const ask = () => {
    if (!sel) return;
    const ids = [...new Set(sel.text.match(/\bBR-[A-Z0-9]+-\d+\b/g) ?? [])].slice(0, 10);
    const params = new URLSearchParams({ sel: sel.text, q: "Explain this in plain words. What does it mean and is it final?" });
    if (ids.length) params.set("rules", ids.join(","));
    setSel(null);
    window.getSelection()?.removeAllRanges();
    router.push(`/ask?${params}`);
  };

  return (
    <AnimatePresence>
      {sel && (
        <motion.button
          type="button"
          // Keep the selection: don't let the press clear it before the click lands.
          onMouseDown={(e) => e.preventDefault()}
          onClick={ask}
          initial={{ opacity: 0, y: 6, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 6, scale: 0.96 }}
          transition={{ duration: 0.15 }}
          style={{ left: sel.x, top: sel.y }}
          className="fixed z-50 flex -translate-x-1/2 -translate-y-full items-center gap-1.5 rounded-full bg-foreground px-3.5 py-2 text-sm font-medium text-background shadow-lg"
        >
          <MessageCircleQuestion className="size-4" />
          Ask about this
        </motion.button>
      )}
    </AnimatePresence>
  );
}
