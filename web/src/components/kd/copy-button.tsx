"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

/** Copies `text`, or the body of `url` (e.g. a rule's .md), to the clipboard. */
export function CopyButton({ text, url, label = "Copy", variant = "outline" }: { text?: string; url?: string; label?: string; variant?: "outline" | "ghost" }) {
  const [done, setDone] = useState(false);
  const copy = async () => {
    const value = text ?? (url ? await fetch(url).then((r) => r.text()) : "") ?? "";
    await navigator.clipboard.writeText(value);
    setDone(true);
    setTimeout(() => setDone(false), 1500);
  };
  return (
    <Button variant={variant} size="sm" onClick={copy} aria-live="polite">
      {done ? <Check /> : <Copy />}
      {done ? "Copied" : label}
    </Button>
  );
}
