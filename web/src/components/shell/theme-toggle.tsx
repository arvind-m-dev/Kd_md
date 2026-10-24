"use client";

import { Check, Monitor, Palette } from "lucide-react";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { THEMES, type ThemeDef } from "@/lib/themes";
import { cn } from "@/lib/utils";

const subscribe = () => () => {};

/** A mini page drawn in the theme's colours. */
function Preview({ t }: { t: ThemeDef }) {
  const [bg, card, primary, glow] = t.swatch;
  return (
    <span className="relative block h-14 overflow-hidden rounded-lg border" style={{ background: bg }} aria-hidden>
      <span className="absolute -top-4 -right-3 size-12 rounded-full blur-lg" style={{ background: glow, opacity: 0.7 }} />
      <span className="absolute top-2 left-2 h-1.5 w-8 rounded-full" style={{ background: primary }} />
      <span className="absolute top-5 left-2 right-6 bottom-2 rounded-md" style={{ background: card, boxShadow: "0 1px 3px rgb(0 0 0 / 0.15)" }}>
        <span className="absolute top-1.5 left-1.5 h-1 w-10 rounded-full opacity-40" style={{ background: t.dark ? "#fff" : "#000" }} />
        <span className="absolute top-3.5 left-1.5 h-1 w-6 rounded-full" style={{ background: primary }} />
      </span>
    </span>
  );
}

/** Theme picker: system, or one of the colour themes, each shown as a small preview. */
export function ThemeToggle({ withLabel = false }: { withLabel?: boolean }) {
  const { theme = "system", setTheme } = useTheme();
  const mounted = useSyncExternalStore(subscribe, () => true, () => false);
  const current = mounted ? theme : "system";
  const name = current === "system" ? "System" : (THEMES.find((t) => t.id === current)?.label ?? current);
  return (
    <Popover>
      <PopoverTrigger
        render={
          <Button
            variant="ghost"
            size={withLabel ? "default" : "icon"}
            aria-label={`Theme: ${name}. Change theme`}
            title="Change theme"
            className={withLabel ? "w-full justify-start gap-3" : undefined}
          />
        }
      >
        <Palette />
        {withLabel && <span>{name} theme</span>}
      </PopoverTrigger>
      <PopoverContent side="top" align="start" className="w-[min(22rem,calc(100vw-2rem))] p-3">
        <p className="font-display text-sm font-semibold">Theme</p>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {THEMES.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setTheme(t.id)}
              aria-pressed={current === t.id}
              className={cn(
                "group relative rounded-xl border p-1.5 text-left transition-all hover:-translate-y-0.5 hover:shadow-md",
                current === t.id && "border-primary ring-2 ring-primary/40",
              )}
            >
              <Preview t={t} />
              <span className="mt-1.5 flex items-center justify-between px-0.5 text-xs font-medium">
                {t.label}
                {current === t.id && <Check className="size-3.5 text-primary" />}
              </span>
            </button>
          ))}
        </div>
        <button
          type="button"
          onClick={() => setTheme("system")}
          aria-pressed={current === "system"}
          className={cn(
            "flex items-center gap-2 rounded-lg border px-3 py-2 text-sm hover:bg-accent",
            current === "system" && "border-primary bg-accent text-accent-foreground",
          )}
        >
          <Monitor className="size-4" /> Match my device (light or dark)
          {current === "system" && <Check className="ml-auto size-4" />}
        </button>
      </PopoverContent>
    </Popover>
  );
}
