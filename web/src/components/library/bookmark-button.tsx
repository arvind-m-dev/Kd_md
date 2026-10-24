"use client";

import { Bookmark, BookmarkCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { isBookmarked, toggleBookmark, useLibrary, type Bookmark as BookmarkItem } from "@/lib/library";
import { cn } from "@/lib/utils";

type Item = Omit<BookmarkItem, "createdAt">;

/** Save / unsave something to the library. `compact` is an icon-only button. */
export function BookmarkButton({
  item,
  compact = false,
  variant = "outline",
  className,
}: {
  item: Item;
  compact?: boolean;
  variant?: "outline" | "ghost";
  className?: string;
}) {
  const lib = useLibrary();
  const on = isBookmarked(lib, item.key);
  const Icon = on ? BookmarkCheck : Bookmark;
  const label = on ? "Saved" : "Save";
  return (
    <Button
      type="button"
      variant={variant}
      size={compact ? "icon-sm" : "sm"}
      aria-pressed={on}
      aria-label={compact ? `${on ? "Remove bookmark" : "Bookmark"}: ${item.title}` : undefined}
      title={on ? "Saved to your library. Click to remove." : "Save to your library"}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleBookmark(item);
      }}
      className={cn(on && "text-primary", className)}
    >
      <Icon className={cn(on && "fill-primary/15")} />
      {!compact && label}
    </Button>
  );
}
