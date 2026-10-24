"use client";

import { BookOpenText } from "lucide-react";
import Link from "next/link";
import { useLibrary } from "@/lib/library";
import { cn } from "@/lib/utils";

/** The last few pages read, with how far along; nothing until something has been read. */
export function ContinueReading({ className, limit = 3 }: { className?: string; limit?: number }) {
  const { recents } = useLibrary();
  if (!recents.length) return null;
  return (
    <section className={className} aria-label="Continue reading">
      <h2 className="mb-2 flex items-center gap-1.5 text-sm font-semibold">
        <BookOpenText className="size-4 text-primary" /> Continue reading
      </h2>
      <div className={cn("grid gap-3", limit > 1 && "sm:grid-cols-2 lg:grid-cols-3")}>
        {recents.slice(0, limit).map((r) => (
          <Link key={r.href} href={`${r.href}?resume`} className="group rounded-xl border bg-card p-3.5 transition-all hover:-translate-y-0.5 hover:shadow-md">
            <span className="line-clamp-1 text-sm font-medium group-hover:text-primary">{r.title}</span>
            <span className="mt-0.5 line-clamp-1 text-xs text-muted-foreground">{r.subtitle}</span>
            <span className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
              <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-muted">
                <span className="block h-full rounded-full bg-primary" style={{ width: `${Math.max(4, Math.round(r.progress * 100))}%` }} />
              </span>
              {Math.round(r.progress * 100)}%
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
