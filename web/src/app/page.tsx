import { ArrowRight, CircleAlert, CircleCheck, FileStack, ListChecks, Plug, Scale } from "lucide-react";
import Link from "next/link";
import { AskBox } from "@/components/kd/ask-box";
import { CountUp, FadeIn, GrowBar, Stagger, StaggerItem } from "@/components/kd/motion";
import { Page } from "@/components/kd/page-header";
import { kd } from "@/lib/kd";
import { SUGGESTED_QUESTIONS } from "@/lib/suggestions";


function Tile({
  label,
  value,
  note,
  href,
  icon: Icon,
  tone = "default",
}: {
  label: string;
  value: number;
  note: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  tone?: "default" | "unclear";
}) {
  return (
    <Link
      href={href}
      className="group flex flex-col gap-3 rounded-xl border bg-card p-4 transition-all hover:-translate-y-0.5 hover:shadow-md focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none sm:p-5"
    >
      <span className="flex items-center justify-between text-sm text-muted-foreground">
        {label}
        <Icon className={tone === "unclear" ? "size-4 text-unclear" : "size-4 text-primary"} />
      </span>
      <CountUp value={value} className="text-3xl font-semibold tracking-tight tabular-nums sm:text-4xl" />
      <span className="flex items-center gap-1 text-xs text-muted-foreground group-hover:text-foreground">
        {note} <ArrowRight className="size-3 transition-transform group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}

export default function Dashboard() {
  const { stats, groups, decisions, changelog } = kd;
  const maxRules = Math.max(...groups.map((g) => g.ruleCount));
  const clearPct = Math.round(((stats.rules - stats.needsClarity) / stats.rules) * 100);
  const openDecisions = decisions.filter((d) => d.open);

  return (
    <Page wide>
      {/* Hero: ask straight away */}
      <FadeIn className="relative overflow-hidden rounded-2xl border bg-gradient-to-br from-accent via-background to-background p-5 sm:p-8">
        <div aria-hidden className="pointer-events-none absolute -top-24 -right-24 size-72 rounded-full bg-primary/10 blur-3xl" />
        <p className="text-sm font-medium text-primary">Keydemand V2 · Phase 1</p>
        <h1 className="mt-1 max-w-2xl text-2xl font-semibold tracking-tight text-balance sm:text-4xl">
          Every business rule, in plain words.
        </h1>
        <p className="mt-2 max-w-2xl text-pretty text-muted-foreground">
          {stats.rules.toLocaleString("en")} rules from {stats.docs} documents. Ask a question, or browse by topic. Every answer
          shows where it comes from.
        </p>
        <AskBox className="mt-5 max-w-2xl" suggestions={SUGGESTED_QUESTIONS} />
      </FadeIn>

      {/* Headline numbers */}
      <Stagger className="mt-6 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        <StaggerItem>
          <Tile label="Rules" value={stats.rules} note="Browse all rules" href="/rules" icon={ListChecks} />
        </StaggerItem>
        <StaggerItem>
          <Tile label="Source documents" value={stats.docs} note={`${stats.groups} topic groups`} href="/sources" icon={FileStack} />
        </StaggerItem>
        <StaggerItem>
          <Tile
            label="Rules needing clarity"
            value={stats.needsClarity}
            note={`${clearPct}% of rules are clear`}
            href="/rules?status=needs-clarity"
            icon={CircleAlert}
            tone="unclear"
          />
        </StaggerItem>
        <StaggerItem>
          <Tile
            label="Open decisions"
            value={stats.openDecisions}
            note={`${stats.openConflicts} open conflicts`}
            href="/conflicts"
            icon={Scale}
            tone="unclear"
          />
        </StaggerItem>
      </Stagger>

      <div className="mt-6 grid gap-6 lg:grid-cols-5">
        {/* Rules per group: one bar per group, split into clear and needs-clarity */}
        <FadeIn delay={0.1} className="rounded-xl border bg-card p-4 sm:p-6 lg:col-span-3">
          <div className="flex flex-wrap items-end justify-between gap-2">
            <div>
              <h2 className="font-semibold">Rules by topic</h2>
              <p className="text-sm text-muted-foreground">Tap a topic to see its rules.</p>
            </div>
            <div className="flex gap-3 text-xs text-muted-foreground" aria-hidden>
              <span className="flex items-center gap-1.5">
                <CircleCheck className="size-3.5 text-primary" /> Clear
              </span>
              <span className="flex items-center gap-1.5">
                <CircleAlert className="size-3.5 text-unclear" /> Needs clarity
              </span>
            </div>
          </div>
          <ul className="mt-5 flex flex-col gap-1">
            {groups.map((g, i) => {
              const clear = g.ruleCount - g.needsClarity;
              return (
                <li key={g.id}>
                  <Link
                    href={`/rules?group=${g.id}`}
                    title={`${g.title}: ${g.ruleCount} rules, ${clear} clear, ${g.needsClarity} need clarity`}
                    className="group grid grid-cols-[1fr_auto] items-center gap-x-3 gap-y-1.5 rounded-lg px-2 py-2 hover:bg-accent sm:grid-cols-[minmax(0,15rem)_1fr_auto]"
                  >
                    <span className="truncate text-sm">
                      <span className="mr-1.5 font-mono text-xs text-muted-foreground">{g.id}</span>
                      {g.title}
                    </span>
                    <span className="order-last col-span-2 flex h-2.5 gap-0.5 sm:order-none sm:col-span-1">
                      <GrowBar pct={(clear / maxRules) * 100} delay={i * 0.04} className="h-full rounded-l-sm bg-primary/80 group-hover:bg-primary" />
                      {g.needsClarity > 0 && (
                        <GrowBar pct={(g.needsClarity / maxRules) * 100} delay={i * 0.04 + 0.2} className="h-full rounded-r-sm bg-unclear" />
                      )}
                    </span>
                    <span className="text-right text-sm tabular-nums">
                      {g.ruleCount}
                      {g.needsClarity > 0 && <span className="ml-1.5 text-xs text-unclear-ink">({g.needsClarity})</span>}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </FadeIn>

        {/* What still needs a decision */}
        <FadeIn delay={0.15} className="flex flex-col rounded-xl border bg-card p-4 sm:p-6 lg:col-span-2">
          <h2 className="font-semibold">Waiting on a decision</h2>
          <p className="text-sm text-muted-foreground">Until these are decided, related answers say “needs clarity”.</p>
          <ul className="mt-4 flex flex-col divide-y">
            {openDecisions.slice(0, 6).map((d) => (
              <li key={d.id}>
                <Link href={`/conflicts#${d.id}`} className="flex gap-3 py-3 hover:text-primary">
                  <span className="mt-0.5 shrink-0 font-mono text-xs text-unclear-ink">{d.id}</span>
                  <span className="text-sm leading-snug">{d.title}</span>
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/conflicts" className="mt-auto inline-flex items-center gap-1 pt-3 text-sm font-medium text-primary">
            All {stats.openDecisions} open decisions <ArrowRight className="size-3.5" />
          </Link>
        </FadeIn>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-5">
        <FadeIn delay={0.2} className="rounded-xl border bg-card p-4 sm:p-6 lg:col-span-3">
          <h2 className="font-semibold">Latest updates</h2>
          <ul className="mt-3 flex flex-col gap-3">
            {changelog
              .slice(-3)
              .reverse()
              .map((c, i) => (
                <li key={i} className="flex gap-3 text-sm">
                  <span className="shrink-0 tabular-nums text-muted-foreground">{c.date}</span>
                  <span className="line-clamp-3 text-pretty">{c.change.replace(/`/g, "")}</span>
                </li>
              ))}
          </ul>
        </FadeIn>
        <FadeIn delay={0.25} className="flex flex-col justify-between gap-4 rounded-xl border bg-card p-4 sm:p-6 lg:col-span-2">
          <div>
            <h2 className="flex items-center gap-2 font-semibold">
              <Plug className="size-4 text-primary" /> Use it from any AI
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Claude, ChatGPT and other tools can read these rules directly as Markdown.
            </p>
          </div>
          <Link href="/connect" className="inline-flex items-center gap-1 text-sm font-medium text-primary">
            Connect an AI tool <ArrowRight className="size-3.5" />
          </Link>
        </FadeIn>
      </div>
    </Page>
  );
}
