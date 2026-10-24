"use client";

import { ArrowUp, Clock, IndianRupee, Lightbulb, ShieldCheck, Sparkles, Target } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";

// Icons for the starter questions, by keyword.
const ICONS: [RegExp, typeof Clock][] = [
  [/long|time|hour|day|respond/i, Clock],
  [/cost|price|fee|subscription/i, IndianRupee],
  [/relevancy|match/i, Target],
  [/access|who can|panel|role/i, ShieldCheck],
];
export const iconFor = (q: string) => ICONS.find(([re]) => re.test(q))?.[1] ?? Lightbulb;

/** Question box that opens the Ask page. Suggestions are one-tap questions. */
export function AskBox({ suggestions = [], className }: { suggestions?: string[]; className?: string }) {
  const router = useRouter();
  const [q, setQ] = useState("");
  const go = (question: string) => question.trim() && router.push(`/ask?q=${encodeURIComponent(question.trim())}`);
  return (
    <div className={className}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          go(q);
        }}
        className="flex items-center gap-2 rounded-2xl border bg-background/80 p-2 pl-4 shadow-lg backdrop-blur transition-shadow focus-within:shadow-[0_0_0_4px_color-mix(in_oklch,var(--primary)_25%,transparent),0_12px_40px_-12px_var(--primary)]"
      >
        <Sparkles className="size-4 shrink-0 text-primary" aria-hidden />
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Ask anything about the rules…"
          aria-label="Your question"
          className="min-w-0 flex-1 bg-transparent py-2 text-base outline-none placeholder:text-muted-foreground"
        />
        <button
          type="submit"
          disabled={!q.trim()}
          aria-label="Ask"
          className="grid size-10 shrink-0 place-items-center rounded-xl text-white shadow-md transition-all hover:scale-105 disabled:opacity-40 disabled:hover:scale-100"
          style={{ background: "linear-gradient(135deg, var(--primary), var(--glow-2))" }}
        >
          <ArrowUp className="size-4" />
        </button>
      </form>
      {suggestions.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {suggestions.map((s) => {
            const Icon = iconFor(s);
            return (
              <button
                key={s}
                type="button"
                onClick={() => go(s)}
                className={cn(
                  "inline-flex items-center gap-1.5 rounded-full border bg-background/70 px-3 py-1.5 text-left text-xs text-muted-foreground backdrop-blur transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:text-foreground sm:text-sm",
                )}
              >
                <Icon className="size-3.5 shrink-0 text-primary" />
                {s}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
