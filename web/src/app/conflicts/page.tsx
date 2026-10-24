import { CircleAlert, CircleCheck, MessageCircleQuestion } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { Markdown } from "@/components/kd/markdown";
import { FadeIn } from "@/components/kd/motion";
import { Page, PageHeader } from "@/components/kd/page-header";
import { WorkingNote } from "@/components/kd/working-note";
import { kd } from "@/lib/kd";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Open questions",
  alternates: { types: { "text/markdown": "/md/conflicts.md" } },
};

const ask = (q: string, rules: string[]) => `/ask?${new URLSearchParams({ q, rules: rules.slice(0, 10).join(",") })}`;

function OpenBadge({ open }: { open: boolean }) {
  const Icon = open ? CircleAlert : CircleCheck;
  return (
    <span className={cn("inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium", open ? "bg-unclear-soft text-unclear-ink" : "bg-clear-soft text-clear")}>
      <Icon className="size-3.5" aria-hidden /> {open ? "Open" : "Resolved"}
    </span>
  );
}

function RuleChips({ ids }: { ids: string[] }) {
  if (!ids.length) return null;
  return (
    <div className="flex flex-wrap gap-1.5">
      {ids.map((id) => (
        <Link key={id} href={`/rules/${id}`} className="rounded-md bg-muted px-1.5 py-0.5 font-mono text-xs hover:bg-accent">
          {id}
        </Link>
      ))}
    </div>
  );
}

function AskLink({ href }: { href: string }) {
  return (
    <Link href={href} className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">
      <MessageCircleQuestion className="size-3.5" /> Ask about this
    </Link>
  );
}

export default function ConflictsPage() {
  const { decisions, conflicts, placeholders, stats } = kd;
  const sections = [
    { id: "decisions", label: "Decisions needed", count: `${stats.openDecisions} open of ${stats.decisions}` },
    { id: "conflicts", label: "Conflicts", count: `${stats.openConflicts} open of ${stats.conflicts}` },
    { id: "missing", label: "Missing values", count: `${stats.placeholders}` },
  ];
  return (
    <WorkingNote>
      <Page>
        <PageHeader
          title="Open questions"
          description="Where the documents disagree, leave a value blank, or wait on a business decision. Any answer that touches these says “needs clarity”."
        />
        <nav aria-label="Sections" className="sticky top-16 z-10 -mx-4 mb-6 flex gap-2 overflow-x-auto bg-background/90 px-4 py-2 backdrop-blur sm:mx-0 sm:px-0">
          {sections.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="shrink-0 rounded-full border px-3 py-1.5 text-sm hover:bg-accent">
              {s.label} <span className="text-muted-foreground">· {s.count}</span>
            </a>
          ))}
        </nav>

        <section id="decisions" className="scroll-mt-32">
          <h2 className="text-xl font-semibold">Decisions needed</h2>
          <p className="mt-1 text-sm text-muted-foreground">The most important open points. Each needs a yes/no or a value from the business.</p>
          <div className="mt-4 flex flex-col gap-4">
            {decisions.map((d) => (
              <FadeIn key={d.id}>
                <article id={d.id} className={cn("scroll-mt-32 rounded-xl border bg-card p-4 target:ring-2 target:ring-ring sm:p-5", d.open && "border-l-4 border-l-unclear")}>
                  <header className="flex flex-wrap items-center gap-2">
                    <span className="font-mono text-xs font-medium text-muted-foreground">{d.id}</span>
                    <OpenBadge open={d.open} />
                  </header>
                  <h3 className="mt-2 font-semibold text-balance">{d.title}</h3>
                  {d.question && (
                    <p className="mt-3 rounded-lg bg-accent/50 p-3 text-sm">
                      <span className="font-medium">To decide: </span>
                      {d.question}
                    </p>
                  )}
                  {d.resolution && (
                    <p className="mt-2 text-sm text-muted-foreground">
                      <span className="font-medium text-foreground">Where it stands: </span>
                      {d.resolution}
                    </p>
                  )}
                  <details className="mt-3 text-sm" data-askable>
                    <summary className="cursor-pointer text-muted-foreground hover:text-foreground">What each document says</summary>
                    <Markdown className="mt-2 text-sm">{d.md}</Markdown>
                  </details>
                  <div className="mt-3 flex flex-wrap items-center justify-between gap-3 border-t pt-3">
                    <RuleChips ids={d.rules.slice(0, 12)} />
                    <AskLink href={ask(`${d.id}: ${d.title}. What do the documents say and what needs deciding?`, d.rules)} />
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </section>

        <section id="conflicts" className="mt-12 scroll-mt-32">
          <h2 className="text-xl font-semibold">Conflicts between documents</h2>
          <p className="mt-1 text-sm text-muted-foreground">Two documents say different things. “Resolved” means the newer document wins under the authority rule.</p>
          <div className="mt-4 flex flex-col gap-3">
            {conflicts.map((c) => (
              <article id={c.id} key={c.id} className={cn("scroll-mt-32 rounded-xl border bg-card p-4 target:ring-2 target:ring-ring", c.open && "border-l-4 border-l-unclear")}>
                <header className="flex flex-wrap items-center gap-2">
                  <span className="font-mono text-xs font-medium text-muted-foreground">{c.id}</span>
                  <h3 className="font-semibold">{c.topic}</h3>
                  <span className="ml-auto">
                    <OpenBadge open={c.open} />
                  </span>
                </header>
                <div className="mt-3 grid gap-2 text-sm sm:grid-cols-2" data-askable>
                  <p className="rounded-lg border p-3">
                    <span className="block text-xs font-medium text-muted-foreground">One side</span>
                    {c.positionA}
                  </p>
                  <p className="rounded-lg border p-3">
                    <span className="block text-xs font-medium text-muted-foreground">Other side</span>
                    {c.positionB}
                  </p>
                </div>
                <p className="mt-2 text-sm">
                  <span className="font-medium">Outcome: </span>
                  <span className="text-muted-foreground">{c.resolution}</span>
                </p>
                <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
                  <RuleChips ids={c.rules.slice(0, 10)} />
                  {c.open && <AskLink href={ask(`${c.id}: ${c.topic}. Which value applies, and what is still open?`, c.rules)} />}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="missing" className="mt-12 scroll-mt-32">
          <h2 className="text-xl font-semibold">Missing values</h2>
          <p className="mt-1 text-sm text-muted-foreground">Placeholders and values the documents never fill in.</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {placeholders.map((p) => (
              <article id={p.id} key={p.id} className="scroll-mt-32 rounded-xl border bg-card p-4 target:ring-2 target:ring-ring">
                <span className="font-mono text-xs font-medium text-muted-foreground">{p.id}</span>
                <h3 className="mt-1 font-medium">{p.item}</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">Missing: </span>
                  {p.missing}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">{p.where}</p>
              </article>
            ))}
          </div>
        </section>
      </Page>
    </WorkingNote>
  );
}
