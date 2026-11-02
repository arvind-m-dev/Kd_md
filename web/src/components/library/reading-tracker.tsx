"use client";

import { motion, useScroll, useSpring } from "motion/react";
import { useEffect } from "react";
import { useShowAll } from "@/components/shell/scope-toggle";
import { touchRecent, useLibrary } from "@/lib/library";
import { isExtraHref } from "@/lib/scope";

/**
 * On a reading page: a progress bar under the header, an entry in "Continue reading", and the
 * scroll position remembered. Opening the page with ?resume scrolls back to where the reader stopped.
 */
export function ReadingTracker({ href, title, subtitle }: { href: string; title: string; subtitle: string }) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30, restDelta: 0.001 });
  const { recents } = useLibrary();
  const saved = recents.find((r) => r.href === href)?.progress ?? 0;
  // A working note that is hidden (only its notice shows) is not "read": keep it out of the history.
  const showAll = useShowAll();
  const record = showAll || !isExtraHref(href);

  useEffect(() => {
    if (record) touchRecent({ href, title, subtitle });
  }, [href, title, subtitle, record]);

  // Resume once, as soon as the saved position is known, after the layout (and reader text size) settles.
  useEffect(() => {
    if (!new URLSearchParams(location.search).has("resume") || saved <= 0.02) return;
    let frame = requestAnimationFrame(() => {
      frame = requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - innerHeight;
        window.scrollTo({ top: saved * max, behavior: "smooth" });
        history.replaceState(null, "", location.pathname + location.hash);
      });
    });
    return () => cancelAnimationFrame(frame);
  }, [saved]);

  useEffect(() => {
    let t: ReturnType<typeof setTimeout> | undefined;
    const unsub = scrollYProgress.on("change", (v) => {
      if (!record) return;
      clearTimeout(t);
      t = setTimeout(() => touchRecent({ href, title, subtitle, progress: Math.round(v * 100) / 100 }), 600);
    });
    return () => {
      clearTimeout(t);
      unsub();
    };
  }, [scrollYProgress, href, title, subtitle, record]);

  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed inset-x-0 top-16 z-30 h-0.5 origin-left bg-gradient-to-r from-primary/70 to-primary"
    />
  );
}
