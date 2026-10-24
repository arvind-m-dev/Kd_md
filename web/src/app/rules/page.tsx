import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { Stagger, StaggerItem } from "@/components/kd/motion";
import { Page, PageHeader } from "@/components/kd/page-header";
import { RuleCard } from "@/components/kd/rule-card";
import { RuleFilters } from "@/components/kd/rule-filters";
import { Skeleton } from "@/components/ui/skeleton";
import { kd } from "@/lib/kd";
import { filterRules, readFilter } from "@/lib/rule-filter";

export const metadata: Metadata = { title: "Rules" };

const PAGE = 30;

async function Results({ searchParams }: { searchParams: PageProps<"/rules">["searchParams"] }) {
  const sp = await searchParams;
  const filter = readFilter(sp);
  const rules = filterRules(filter);
  const limit = Math.max(Number(sp.limit) || PAGE, PAGE);
  const shown = rules.slice(0, limit);
  const more = new URLSearchParams(Object.entries(sp).filter((e): e is [string, string] => typeof e[1] === "string"));
  more.set("limit", String(limit + PAGE));
  const unclear = rules.filter((r) => r.status === "needs-clarity").length;

  return (
    <>
      <p className="mt-5 text-sm text-muted-foreground" aria-live="polite">
        {rules.length.toLocaleString("en")} {rules.length === 1 ? "rule" : "rules"}
        {unclear > 0 && ` · ${unclear} need clarity`}
      </p>
      {rules.length === 0 ? (
        <div className="mt-4 rounded-xl border border-dashed p-8 text-center">
          <p className="font-medium">No rules match.</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Try fewer words, or{" "}
            <Link href={`/ask?q=${encodeURIComponent(filter.q)}`} className="text-primary underline underline-offset-2">
              ask the question instead
            </Link>
            .
          </p>
        </div>
      ) : (
        <Stagger key={JSON.stringify(filter)} className="mt-3 grid gap-3 md:grid-cols-2" step={0.025}>
          {shown.map((r) => (
            <StaggerItem key={r.id} className="flex">
              <RuleCard rule={r} className="w-full" />
            </StaggerItem>
          ))}
        </Stagger>
      )}
      {rules.length > shown.length && (
        <div className="mt-6 flex justify-center">
          <Link href={`/rules?${more}`} scroll={false} className="rounded-lg border px-4 py-2 text-sm font-medium hover:bg-accent">
            Show more ({(rules.length - shown.length).toLocaleString("en")} left)
          </Link>
        </div>
      )}
    </>
  );
}

function ResultsSkeleton() {
  return (
    <div className="mt-8 grid gap-3 md:grid-cols-2">
      {Array.from({ length: 6 }, (_, i) => (
        <Skeleton key={i} className="h-40 rounded-xl" />
      ))}
    </div>
  );
}

export default function RulesPage({ searchParams }: PageProps<"/rules">) {
  const groups = kd.groups.map((g) => ({ value: g.id, label: `${g.id} — ${g.title}` }));
  const docs = kd.docs.map((d) => ({ value: d.id, label: d.title, group: d.group }));
  return (
    <Page wide>
      <PageHeader
        title="Rules"
        description="Every business rule in plain words. Search, filter by topic or document, and open any rule to see where it comes from."
      />
      <Suspense fallback={<ResultsSkeleton />}>
        <RuleFilters groups={groups} docs={docs} />
        <Results searchParams={searchParams} />
      </Suspense>
    </Page>
  );
}
