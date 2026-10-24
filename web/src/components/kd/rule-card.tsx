import { ArrowUpRight, MessageCircleQuestion } from "lucide-react";
import Link from "next/link";
import { GlossaryText } from "@/components/kd/glossary-text";
import { StatusBadge } from "@/components/kd/status";
import { BookmarkButton } from "@/components/library/bookmark-button";
import { getDoc, getGroup, type Rule } from "@/lib/kd";
import { isExtraRule } from "@/lib/scope";
import { cn } from "@/lib/utils";

export const askAboutRule = (id: string) =>
  `/ask?${new URLSearchParams({ rules: id, q: `Explain ${id} in plain words. What does it mean, who does it affect, and is it final?` })}`;

/** One rule in plain words: what it says, whether it's settled, and where it comes from. */
export function RuleCard({ rule, className }: { rule: Rule; className?: string }) {
  const doc = rule.doc ? getDoc(rule.doc) : undefined;
  const group = getGroup(rule.group)!;
  return (
    <article
      data-extra={isExtraRule(rule) || undefined}
      data-askable
      className={cn(
        "group/card relative flex flex-col gap-3 rounded-xl border bg-card p-4 transition-shadow hover:shadow-md sm:p-5",
        rule.status === "needs-clarity" && "border-l-4 border-l-unclear",
        className,
      )}
    >
      <header className="flex flex-wrap items-center gap-2">
        <Link
          href={`/rules/${rule.id}`}
          className="font-mono text-xs font-medium text-muted-foreground after:absolute after:inset-0 after:rounded-xl hover:text-foreground"
        >
          {rule.id}
        </Link>
        {rule.tag && <span className="rounded-md bg-muted px-1.5 py-0.5 text-xs text-muted-foreground">{rule.tag}</span>}
        <StatusBadge status={rule.status} className="ml-auto" />
      </header>
      <p className="relative text-[15px] leading-relaxed text-pretty">
        <GlossaryText text={rule.text} />
      </p>
      <footer className="relative mt-auto flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
        <span className="min-w-0 truncate">
          {group.id} · {doc?.title ?? group.title}
        </span>
        {rule.issues.length > 0 && <span className="text-unclear-ink">{rule.issues.join(" · ")}</span>}
        <span className="ml-auto flex gap-1">
          <Link
            href={askAboutRule(rule.id)}
            className="relative z-10 inline-flex items-center gap-1 rounded-md px-2 py-1 font-medium text-primary hover:bg-accent"
          >
            <MessageCircleQuestion className="size-3.5" /> Ask
          </Link>
          <BookmarkButton
            compact
            variant="ghost"
            className="relative z-10"
            item={{ key: `rule:${rule.id}`, kind: "rule", title: rule.id, subtitle: rule.text.slice(0, 140), href: `/rules/${rule.id}` }}
          />
          <Link
            href={`/rules/${rule.id}`}
            aria-label={`Open ${rule.id}`}
            className="relative z-10 inline-flex items-center rounded-md px-1.5 py-1 hover:bg-accent"
          >
            <ArrowUpRight className="size-3.5" />
          </Link>
        </span>
      </footer>
    </article>
  );
}
