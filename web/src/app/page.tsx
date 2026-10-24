import {
  ArrowRight,
  Bookmark,
  CircleAlert,
  FileStack,
  ListChecks,
  ListTree,
  MessageCircleQuestion,
  Plug,
  Scale,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import { AskBox } from "@/components/kd/ask-box";
import { ProgressRing, SpotlightCard, TopicIcon } from "@/components/kd/fx";
import { CountUp, FadeIn, Stagger, StaggerItem } from "@/components/kd/motion";
import { Page } from "@/components/kd/page-header";
import { ContinueReading } from "@/components/library/continue-reading";
import { kd } from "@/lib/kd";
import { SUGGESTED_QUESTIONS } from "@/lib/suggestions";
import { topicStyle } from "@/lib/topic-style";

/** A glowing icon tile in a given hue. */
function IconTile({ icon: Icon, hue }: { icon: LucideIcon; hue: number }) {
  return (
    <span
      aria-hidden
      className="grid size-11 shrink-0 place-items-center rounded-xl text-white"
      style={{
        background: `linear-gradient(135deg, oklch(0.74 0.16 ${hue}), oklch(0.56 0.2 ${(hue + 35) % 360}))`,
        boxShadow: `0 8px 22px -8px oklch(0.65 0.2 ${hue} / 0.7), inset 0 1px 0 oklch(1 0 0 / 0.35)`,
      }}
    >
      <Icon className="size-5" strokeWidth={2.2} />
    </span>
  );
}

const ACTIONS: { href: string; title: string; text: string; icon: LucideIcon; hue: number }[] = [
  { href: "/ask", title: "Ask AI", text: "Plain answers with sources", icon: Sparkles, hue: 268 },
  { href: "/read", title: "Index", text: "Every topic and section", icon: ListTree, hue: 200 },
  { href: "/library", title: "My library", text: "Highlights, notes, saved", icon: Bookmark, hue: 330 },
  { href: "/conflicts", title: "Open questions", text: "What still needs a decision", icon: Scale, hue: 60 },
];

function Stat({ label, value, note, href, icon, hue }: { label: string; value: number; note: string; href: string; icon: LucideIcon; hue: number }) {
  return (
    <Link href={href} className="group block h-full rounded-2xl focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none">
      <SpotlightCard hue={hue} className="flex h-full flex-col gap-3 p-4 group-hover:-translate-y-0.5 sm:p-5">
        <span className="flex items-center justify-between gap-2 text-sm text-muted-foreground">
          {label}
          <IconTile icon={icon} hue={hue} />
        </span>
        <CountUp value={value} className="font-display text-3xl font-semibold tracking-tight tabular-nums sm:text-4xl" />
        <span className="flex items-center gap-1 text-xs text-muted-foreground group-hover:text-foreground">
          {note} <ArrowRight className="size-3 transition-transform group-hover:translate-x-0.5" />
        </span>
      </SpotlightCard>
    </Link>
  );
}

export default function Dashboard() {
  const { stats, groups, decisions, changelog } = kd;
  const clearPct = Math.round(((stats.rules - stats.needsClarity) / stats.rules) * 100);
  const openDecisions = decisions.filter((d) => d.open);

  return (
    <Page wide>
      {/* Hero: ask straight away */}
      <FadeIn>
        <SpotlightCard className="p-6 sm:p-10">
          <div aria-hidden className="pointer-events-none absolute -top-28 -right-20 size-80 rounded-full opacity-50 blur-3xl" style={{ background: "var(--glow-2)" }} />
          <div aria-hidden className="pointer-events-none absolute -bottom-32 left-10 size-72 rounded-full opacity-40 blur-3xl" style={{ background: "var(--glow-1)" }} />
          <p className="inline-flex items-center gap-2 rounded-full border bg-background/60 px-3 py-1 text-xs font-medium text-primary backdrop-blur">
            <Sparkles className="size-3.5" /> Keydemand V2 · Phase 1
          </p>
          <h1 className="kd-gradient-text mt-4 max-w-3xl font-display text-3xl font-bold tracking-tight text-balance sm:text-5xl">
            Every business rule, in plain words.
          </h1>
          <p className="mt-3 max-w-2xl text-pretty text-muted-foreground sm:text-lg">
            {stats.rules.toLocaleString("en")} rules from {stats.docs} documents. Ask a question, explore the index, and highlight what
            matters. Every answer shows exactly where it comes from.
          </p>
          <AskBox className="mt-6 max-w-2xl" suggestions={SUGGESTED_QUESTIONS} />
        </SpotlightCard>
      </FadeIn>

      {/* Quick actions */}
      <Stagger className="mt-6 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {ACTIONS.map((a) => (
          <StaggerItem key={a.href} className="h-full">
            <Link href={a.href} className="group block h-full rounded-2xl focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none">
              <SpotlightCard hue={a.hue} className="flex h-full items-center gap-3 p-4 group-hover:-translate-y-0.5">
                <IconTile icon={a.icon} hue={a.hue} />
                <span className="min-w-0">
                  <span className="block font-display font-semibold">{a.title}</span>
                  <span className="block text-xs text-muted-foreground">{a.text}</span>
                </span>
              </SpotlightCard>
            </Link>
          </StaggerItem>
        ))}
      </Stagger>

      <ContinueReading className="mt-6" />

      {/* Headline numbers */}
      <Stagger className="mt-6 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        <StaggerItem className="h-full">
          <Stat label="Rules" value={stats.rules} note="Browse all rules" href="/rules" icon={ListChecks} hue={268} />
        </StaggerItem>
        <StaggerItem className="h-full">
          <Stat label="Documents" value={stats.docs} note={`${stats.groups} topic groups`} href="/sources" icon={FileStack} hue={200} />
        </StaggerItem>
        <StaggerItem className="h-full">
          <Stat label="Need clarity" value={stats.needsClarity} note={`${clearPct}% of rules are clear`} href="/rules?status=needs-clarity" icon={CircleAlert} hue={65} />
        </StaggerItem>
        <StaggerItem className="h-full">
          <Stat label="Open decisions" value={stats.openDecisions} note={`${stats.openConflicts} open conflicts`} href="/conflicts" icon={Scale} hue={20} />
        </StaggerItem>
      </Stagger>

      {/* Topics as cards */}
      <section className="mt-10">
        <div className="mb-4 flex flex-wrap items-end justify-between gap-2">
          <div>
            <h2 className="font-display text-xl font-semibold">Explore by topic</h2>
            <p className="text-sm text-muted-foreground">The ring shows how much of each topic is settled.</p>
          </div>
          <Link href="/read" className="inline-flex items-center gap-1 text-sm font-medium text-primary">
            Full index <ArrowRight className="size-3.5" />
          </Link>
        </div>
        <Stagger className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {groups.map((g) => {
            const { hue, short } = topicStyle(g.id);
            const pct = Math.round(((g.ruleCount - g.needsClarity) / Math.max(g.ruleCount, 1)) * 100);
            return (
              <StaggerItem key={g.id} className="h-full">
                <Link href={`/read/${g.id}`} className="group block h-full rounded-2xl focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none">
                  <SpotlightCard hue={hue} className="flex h-full items-start gap-3.5 p-4 group-hover:-translate-y-0.5 sm:p-5">
                    <TopicIcon group={g.id} />
                    <span className="min-w-0 flex-1">
                      <span className="text-xs font-medium tracking-wide uppercase" style={{ color: `oklch(0.62 0.16 ${hue})` }}>
                        {g.id} · {short}
                      </span>
                      <span className="mt-0.5 line-clamp-2 block leading-snug font-medium text-balance">{g.title}</span>
                      <span className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-xs text-muted-foreground">
                        <span>{g.docCount} docs</span>
                        <span>{g.ruleCount} rules</span>
                        {g.needsClarity > 0 && <span className="text-unclear-ink">{g.needsClarity} unclear</span>}
                      </span>
                    </span>
                    <ProgressRing pct={pct} hue={hue} label={`${pct}%`} />
                  </SpotlightCard>
                </Link>
              </StaggerItem>
            );
          })}
        </Stagger>
      </section>

      <div className="mt-10 grid gap-6 lg:grid-cols-5">
        {/* What still needs a decision */}
        <FadeIn delay={0.1} className="lg:col-span-3">
          <SpotlightCard hue={60} className="flex h-full flex-col p-5 sm:p-6">
            <h2 className="flex items-center gap-3 font-display font-semibold">
              <IconTile icon={Scale} hue={60} /> Waiting on a decision
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">Until these are decided, related answers say “needs clarity”.</p>
            <ul className="mt-3 flex flex-col divide-y">
              {openDecisions.slice(0, 6).map((d) => (
                <li key={d.id}>
                  <Link href={`/conflicts#${d.id}`} className="group flex items-center gap-3 py-3 hover:text-primary">
                    <span className="shrink-0 rounded-md bg-unclear-soft px-1.5 py-0.5 font-mono text-xs text-unclear-ink">{d.id}</span>
                    <span className="flex-1 text-sm leading-snug">{d.title}</span>
                    <ArrowRight className="size-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/conflicts" className="mt-auto inline-flex items-center gap-1 pt-3 text-sm font-medium text-primary">
              All {stats.openDecisions} open decisions <ArrowRight className="size-3.5" />
            </Link>
          </SpotlightCard>
        </FadeIn>

        <div className="flex flex-col gap-6 lg:col-span-2">
          <FadeIn delay={0.15}>
            <SpotlightCard className="p-5 sm:p-6">
              <h2 className="font-display font-semibold">Latest updates</h2>
              <ol className="relative mt-4 flex flex-col gap-4 border-l pl-5">
                {changelog
                  .slice(-3)
                  .reverse()
                  .map((c, i) => (
                    <li key={i} className="relative text-sm">
                      <span aria-hidden className="absolute top-1.5 -left-[25px] size-2.5 rounded-full bg-primary ring-4 ring-background" />
                      <span className="block text-xs text-muted-foreground tabular-nums">{c.date}</span>
                      <span className="line-clamp-3 text-pretty">{c.change.replace(/`/g, "")}</span>
                    </li>
                  ))}
              </ol>
            </SpotlightCard>
          </FadeIn>
          <FadeIn delay={0.2}>
            <Link href="/connect" className="group block rounded-2xl focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none">
              <SpotlightCard hue={175} className="flex items-center gap-4 p-5 group-hover:-translate-y-0.5">
                <IconTile icon={Plug} hue={175} />
                <span className="min-w-0 flex-1">
                  <span className="block font-display font-semibold">Plug into any AI</span>
                  <span className="block text-sm text-muted-foreground">Claude, ChatGPT, Cursor via MCP or Markdown.</span>
                </span>
                <MessageCircleQuestion className="size-5 text-muted-foreground transition-transform group-hover:scale-110" />
              </SpotlightCard>
            </Link>
          </FadeIn>
        </div>
      </div>
    </Page>
  );
}
