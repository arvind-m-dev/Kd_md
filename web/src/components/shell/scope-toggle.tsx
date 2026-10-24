"use client";

// The "Show working notes" switch. Off by default: discussions, meeting notes, backlog, Phase 2 and the
// open-questions pages are hidden (see lib/scope.ts). The choice lives in a cookie so server routes see it,
// and on <html data-scope="all"> so static pages can hide [data-extra] parts with CSS (globals.css).
import { EyeOff, NotebookPen } from "lucide-react";
import { useRouter } from "next/navigation";
import { useSyncExternalStore } from "react";
import { SCOPE_COOKIE } from "@/lib/scope";
import { cn } from "@/lib/utils";

const listeners = new Set<() => void>();
const read = () => document.documentElement.dataset.scope === "all";

function setShowAll(on: boolean) {
  document.cookie = `${SCOPE_COOKIE}=${on ? "all" : "core"}; path=/; max-age=31536000; samesite=lax`;
  if (on) document.documentElement.dataset.scope = "all";
  else delete document.documentElement.dataset.scope;
  listeners.forEach((l) => l());
}

const subscribe = (cb: () => void) => (listeners.add(cb), () => listeners.delete(cb));

/** Whether working notes are shown. False during server rendering (the default). */
export const useShowAll = () => useSyncExternalStore(subscribe, read, () => false);

export function useSetShowAll() {
  const router = useRouter();
  return (on: boolean) => {
    setShowAll(on);
    // Server-rendered lists (Rules) filter by the cookie.
    router.refresh();
  };
}

/** A labelled switch for the sidebar and the phone "More" sheet; `compact` is icon-only. */
export function ScopeToggle({ compact = false }: { compact?: boolean }) {
  const on = useShowAll();
  const set = useSetShowAll();
  const label = on ? "Working notes shown" : "Working notes hidden";
  return (
    <button
      type="button"
      role="switch"
      aria-checked={on}
      aria-label={compact ? `${label}. Discussions, meeting notes, backlog and open questions.` : undefined}
      title="Discussions, meeting notes, backlog, Phase 2 and open questions"
      onClick={() => set(!on)}
      className={cn(
        "flex h-10 w-full items-center gap-3 rounded-lg px-2.5 text-sm font-medium text-sidebar-foreground/75 transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        compact && "justify-center",
      )}
    >
      {on ? <NotebookPen className="size-4 shrink-0" /> : <EyeOff className="size-4 shrink-0" />}
      {!compact && (
        <>
          <span className="flex-1 text-left">Working notes</span>
          <span
            aria-hidden
            className={cn("relative h-5 w-9 shrink-0 rounded-full transition-colors", on ? "bg-primary" : "bg-muted-foreground/30")}
          >
            <span className={cn("absolute top-0.5 left-0.5 size-4 rounded-full bg-white shadow transition-transform", on && "translate-x-4")} />
          </span>
        </>
      )}
    </button>
  );
}

/** Button that turns working notes on, for the notice on a hidden page. */
export function ShowAllButton() {
  const set = useSetShowAll();
  return (
    <button type="button" onClick={() => set(true)} className="rounded-lg bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground">
      Show working notes
    </button>
  );
}
