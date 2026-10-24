"use client";

import { Bookmark, BookmarkCheck, Check, Link2 } from "lucide-react";
import { useState } from "react";
import { isBookmarked, toggleBookmark, useLibrary } from "@/lib/library";
import { cn } from "@/lib/utils";

const btn = "inline-grid size-6 place-items-center rounded-md text-muted-foreground hover:bg-accent hover:text-foreground";

/** Bookmark and copy-link buttons next to a reader heading. */
export function SectionActions({ href, slug, title, pageTitle }: { href: string; slug: string; title: string; pageTitle: string }) {
  const lib = useLibrary();
  const [copied, setCopied] = useState(false);
  const key = `section:${href}#${slug}`;
  const on = isBookmarked(lib, key);
  return (
    <span className="kd-heading-actions" data-on={on || undefined}>
      <button
        type="button"
        className={cn(btn, on && "text-primary")}
        aria-pressed={on}
        aria-label={`${on ? "Remove bookmark" : "Bookmark section"}: ${title}`}
        title={on ? "Saved. Click to remove." : "Bookmark this section"}
        onClick={() => toggleBookmark({ key, kind: "section", title, subtitle: pageTitle, href: `${href}#${slug}` })}
      >
        {on ? <BookmarkCheck className="size-3.5" /> : <Bookmark className="size-3.5" />}
      </button>
      <button
        type="button"
        className={btn}
        aria-label={`Copy link to section: ${title}`}
        title="Copy link to this section"
        onClick={async () => {
          await navigator.clipboard.writeText(`${location.origin}${href}#${slug}`);
          setCopied(true);
          setTimeout(() => setCopied(false), 1400);
        }}
      >
        {copied ? <Check className="size-3.5" /> : <Link2 className="size-3.5" />}
      </button>
    </span>
  );
}
