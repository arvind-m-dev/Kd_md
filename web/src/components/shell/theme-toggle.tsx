"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";
import { Button } from "@/components/ui/button";

const ORDER = ["system", "light", "dark"] as const;
const ICON = { system: Monitor, light: Sun, dark: Moon };
const subscribe = () => () => {};

/** Cycles system → light → dark. */
export function ThemeToggle({ withLabel = false }: { withLabel?: boolean }) {
  const { theme = "system", setTheme } = useTheme();
  const mounted = useSyncExternalStore(subscribe, () => true, () => false);
  const current = (mounted ? theme : "system") as (typeof ORDER)[number];
  const Icon = ICON[current] ?? Monitor;
  const next = ORDER[(ORDER.indexOf(current) + 1) % ORDER.length];
  const label = `Theme: ${current}. Switch to ${next}`;
  return (
    <Button
      variant="ghost"
      size={withLabel ? "default" : "icon"}
      onClick={() => setTheme(next)}
      aria-label={label}
      title={label}
      className={withLabel ? "w-full justify-start gap-3 capitalize" : undefined}
    >
      <Icon />
      {withLabel && <span>{current} theme</span>}
    </Button>
  );
}
