"use client";

import Link from "next/link";
import { isValidElement } from "react";
import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import { cn } from "@/lib/utils";

/** Turns [P3] into a citation chip and BR-XX-123 into a rule link. */
function linkify(md: string) {
  return md
    .replace(/\[(P\d+)\](?!\()/g, "[$1](#cite-$1)")
    .replace(/(?<![\w/[-])(BR-[A-Z0-9]+-\d+)(?![\w-])/g, "[$1](/rules/$1)");
}

export function AnswerMarkdown({
  text,
  onCite,
  citeText,
  className,
}: {
  text: string;
  onCite?: (label: string) => void;
  /** A readable name for a citation chip (document / section); the passage ID stays secondary. */
  citeText?: (label: string) => string | undefined;
  className?: string;
}) {
  const components: Components = {
    a: ({ href = "", children }) => {
      if (href.startsWith("#cite-")) {
        const label = href.slice(6);
        const name = citeText?.(label);
        return (
          <button
            type="button"
            onClick={() => onCite?.(label)}
            title={name ? `${name} (${label})` : undefined}
            className="mx-0.5 inline-flex h-5 max-w-[min(14rem,100%)] items-center gap-1 rounded-md bg-primary/12 px-1.5 align-[1px] text-[11px] font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            aria-label={name ? `Source: ${name} (${label})` : `Source ${label}`}
          >
            {name && <span className="truncate font-sans font-medium">{name}</span>}
            <span className={cn("shrink-0 whitespace-nowrap font-mono", name && "opacity-70")}>{label}</span>
          </button>
        );
      }
      if (href.startsWith("/")) return <Link href={href} className="font-mono text-[0.9em]">{children}</Link>;
      return (
        <a href={href} target="_blank" rel="noreferrer">
          {children}
        </a>
      );
    },
    // The model's one-line summary ("**In short:** …") stands out so readers can stop there.
    p: ({ children }) => {
      const first = Array.isArray(children) ? children[0] : children;
      const lead = isValidElement<{ children?: unknown }>(first) && first.type === "strong" ? String(first.props.children ?? "") : "";
      return <p className={/^in short:?$/i.test(lead.trim()) ? "kd-tldr" : undefined}>{children}</p>;
    },
    table: ({ children }) => (
      <div className="kd-table">
        <table>{children}</table>
      </div>
    ),
  };
  return (
    <div className={cn("kd-prose", className)}>
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {onCite ? linkify(text) : text}
      </ReactMarkdown>
    </div>
  );
}
