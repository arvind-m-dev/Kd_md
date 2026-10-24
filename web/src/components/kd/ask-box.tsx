"use client";

import { ArrowUp, Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";

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
        className="flex items-center gap-2 rounded-xl border bg-background p-1.5 pl-4 shadow-sm focus-within:ring-3 focus-within:ring-ring/40"
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
          className="grid size-9 shrink-0 place-items-center rounded-lg bg-primary text-primary-foreground transition-opacity disabled:opacity-40"
        >
          <ArrowUp className="size-4" />
        </button>
      </form>
      {suggestions.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {suggestions.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => go(s)}
              className={cn(
                "rounded-full border bg-background/70 px-3 py-1.5 text-left text-xs text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground sm:text-sm",
              )}
            >
              {s}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
