"use client";

import { ALargeSmall } from "lucide-react";
import { useEffect, useSyncExternalStore } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Size = "sm" | "md" | "lg" | "xl";
type Width = "normal" | "narrow";
type Font = "sans" | "serif";
const KEY = "kd-reader-prefs";
const SIZES: { id: Size; label: string }[] = [
  { id: "sm", label: "A" },
  { id: "md", label: "A" },
  { id: "lg", label: "A" },
  { id: "xl", label: "A" },
];

interface Prefs {
  size: Size;
  width: Width;
  font: Font;
}
const DEFAULT: Prefs = { size: "md", width: "normal", font: "sans" };
let prefs: Prefs | null = null;
const listeners = new Set<() => void>();

function load(): Prefs {
  if (prefs) return prefs;
  try {
    prefs = { ...DEFAULT, ...JSON.parse(localStorage.getItem(KEY) ?? "{}") };
  } catch {
    prefs = DEFAULT;
  }
  return prefs!;
}
function set(p: Partial<Prefs>) {
  prefs = { ...load(), ...p };
  try {
    localStorage.setItem(KEY, JSON.stringify(prefs));
  } catch {
    /* not remembered */
  }
  listeners.forEach((l) => l());
}
const subscribe = (cb: () => void) => (listeners.add(cb), () => listeners.delete(cb));
const usePrefs = () => useSyncExternalStore(subscribe, load, () => DEFAULT);

/** "Aa" menu on reading pages: text size and line width, remembered in this browser. */
export function ReaderSettings() {
  const p = usePrefs();
  useEffect(() => {
    const html = document.documentElement;
    html.dataset.readerSize = p.size;
    html.dataset.readerWidth = p.width;
    html.dataset.readerFont = p.font;
  }, [p]);
  const chip = "flex-1 rounded-lg border px-2 py-1.5 text-sm transition-colors hover:bg-accent aria-pressed:border-primary aria-pressed:bg-accent aria-pressed:text-accent-foreground";
  return (
    <Popover>
      <PopoverTrigger className={buttonVariants({ variant: "outline", size: "sm" })} aria-label="Reading settings">
        <ALargeSmall /> Text
      </PopoverTrigger>
      <PopoverContent className="w-64">
        <p className="text-xs font-medium text-muted-foreground">Text size</p>
        <div className="mt-2 flex gap-1.5">
          {SIZES.map((s, i) => (
            <button
              key={s.id}
              type="button"
              aria-pressed={p.size === s.id}
              aria-label={["Small", "Normal", "Large", "Extra large"][i]}
              onClick={() => set({ size: s.id })}
              className={cn(chip, "font-semibold")}
              style={{ fontSize: `${0.8 + i * 0.15}rem` }}
            >
              {s.label}
            </button>
          ))}
        </div>
        <p className="mt-4 text-xs font-medium text-muted-foreground">Font</p>
        <div className="mt-2 flex gap-1.5">
          <button type="button" aria-pressed={p.font === "sans"} onClick={() => set({ font: "sans" })} className={chip}>
            Modern
          </button>
          <button type="button" aria-pressed={p.font === "serif"} onClick={() => set({ font: "serif" })} className={cn(chip, "font-serif")}>
            Book
          </button>
        </div>
        <p className="mt-4 text-xs font-medium text-muted-foreground">Line width</p>
        <div className="mt-2 flex gap-1.5">
          {(["normal", "narrow"] as Width[]).map((w) => (
            <button key={w} type="button" aria-pressed={p.width === w} onClick={() => set({ width: w })} className={chip}>
              {w === "normal" ? "Wide" : "Easy to read"}
            </button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}
