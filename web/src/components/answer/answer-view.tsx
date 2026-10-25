"use client";

import {
  BookOpenText,
  ChevronDown,
  CircleHelp,
  Columns2,
  FileSearch,
  GitCompareArrows,
  Info,
  ListChecks,
  MessageCircleQuestion,
  Route,
  Scale,
  Sparkles,
  TextQuote,
  TriangleAlert,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import type { AskMeta, PassageView } from "@/components/ask/types";
import { StatusBadge } from "@/components/kd/status";
import type { Answer, ValidationReport } from "@/lib/answer/schema";
import { citedLabels } from "@/lib/answer/schema";
import { cn } from "@/lib/utils";
import { Comparison, FieldCard, Points, Workflow } from "./blocks";
import { CiteProvider, Cites, Prose, shortName } from "./cite";
import { RequirementTable } from "./requirement-table";

const INTENT: Record<string, { label: string; icon: LucideIcon }> = {
  explain: { label: "Explanation", icon: TextQuote },
  requirements: { label: "Requirements", icon: ListChecks },
  workflow: { label: "Workflow", icon: Route },
  compare: { label: "Comparison", icon: GitCompareArrows },
  field: { label: "Field / rule", icon: Columns2 },
  general: { label: "Answer", icon: Sparkles },
};

const DIM_LABEL: Record<string, string> = { projectType: "Project type", assetClass: "Asset class", transaction: "Transaction", listing: "Listing", role: "Role" };

function ScopeBar({ answer, meta }: { answer: Answer; meta?: AskMeta }) {
  const dims = meta ? Object.entries(meta.analysis.scope) : [];
  const sections = meta?.sections ?? [];
  return (
    <div className="rounded-xl border bg-muted/30 p-3 text-sm">
      <div className="flex flex-wrap items-center gap-1.5">
        <FileSearch className="size-4 text-primary" aria-hidden />
        <span className="text-xs font-medium text-muted-foreground">Scope</span>
        {dims.map(([d, vals]) =>
          vals.map((v) => (
            <span key={d + v} className="inline-flex items-center gap-1 rounded-full border bg-card px-2 py-0.5 text-xs" title={DIM_LABEL[d]}>
              <span className="text-muted-foreground">{DIM_LABEL[d] ?? d}:</span> {v}
              {meta?.analysis.inherited.includes(d) && <span className="text-[10px] text-muted-foreground">(from previous question)</span>}
            </span>
          )),
        )}
        {meta?.analysis.sides.length ? <span className="text-xs text-muted-foreground">Comparing {meta.analysis.sides.join(" vs ")}</span> : null}
      </div>
      {answer.scope.searched && <p className="mt-1.5 text-pretty text-muted-foreground">{answer.scope.searched}</p>}
      {answer.scope.assumptions.length > 0 && (
        <ul className="mt-1.5 flex flex-col gap-0.5 text-xs text-muted-foreground">
          {answer.scope.assumptions.map((a, i) => (
            <li key={i} className="flex gap-1.5">
              <Info className="mt-0.5 size-3 shrink-0" /> {a}
            </li>
          ))}
        </ul>
      )}
      {sections.length > 0 && (
        <details className="group mt-2">
          <summary className="flex cursor-pointer list-none items-center gap-1 text-xs font-medium text-primary [&::-webkit-details-marker]:hidden">
            <ChevronDown className="size-3.5 transition-transform group-open:rotate-180" />
            {sections.length} whole sections searched
            {meta?.omitted.passages ? <span className="text-unclear-ink"> · {meta.omitted.passages} matching passages didn’t fit (list may be incomplete)</span> : null}
          </summary>
          <ul className="mt-1.5 flex flex-col gap-1 text-xs">
            {sections.map((s, i) => (
              <li key={i} className="flex flex-wrap items-baseline gap-x-1.5">
                {s.href ? (
                  <Link href={s.href} className="font-medium hover:text-primary">
                    {s.title.replace(/^(property & project input fields|demand input fields)\s*—\s*columns [^:]+:\s*/i, "")}
                  </Link>
                ) : (
                  <span className="font-medium">{s.title}</span>
                )}
                <span className="text-muted-foreground">{s.docTitle}</span>
                {s.included < s.total && <span className="text-unclear-ink">({s.included} of {s.total} passages)</span>}
              </li>
            ))}
          </ul>
        </details>
      )}
    </div>
  );
}

function Sources({ answer, passages }: { answer: Answer; passages: PassageView[] }) {
  const cited = citedLabels(answer)
    .map((l) => passages.find((p) => p.label === l))
    .filter((p): p is PassageView => !!p);
  if (!cited.length) return null;
  return (
    <details className="group">
      <summary className="flex cursor-pointer list-none items-center gap-1.5 text-xs font-medium tracking-wide text-muted-foreground uppercase [&::-webkit-details-marker]:hidden">
        <BookOpenText className="size-3.5" /> Sources ({cited.length})
        <ChevronDown className="size-3.5 transition-transform group-open:rotate-180" />
      </summary>
      <ul className="mt-2 grid gap-1.5 sm:grid-cols-2">
        {cited.map((p) => (
          <li key={p.label} className="flex min-w-0 items-start gap-2 rounded-lg border bg-background/70 p-2 text-sm">
            <Cites labels={[p.label]} />
            <span className="min-w-0 flex-1 text-xs text-muted-foreground">
              <span className="line-clamp-1">{p.docTitle || p.groupTitle}</span>
              lines {p.lineStart}–{p.lineEnd}
              {p.href && (
                <Link href={p.href} className="ml-1.5 text-primary hover:underline">
                  Show in document
                </Link>
              )}
            </span>
          </li>
        ))}
      </ul>
    </details>
  );
}

/** A structured answer: its layout adapts to the question type. */
export function AnswerView({
  answer,
  meta,
  passages,
  onOpen,
  onAsk,
  anchor,
  streaming = false,
  report,
  fallback,
}: {
  answer: Answer;
  meta?: AskMeta;
  passages: PassageView[];
  onOpen: (p: PassageView) => void;
  onAsk?: (q: string) => void;
  anchor: string;
  streaming?: boolean;
  report?: ValidationReport;
  fallback?: boolean;
}) {
  const kind = INTENT[answer.intent] ?? INTENT.general;
  const checks = report ? report.unknownCites.length + report.downgradedRequired + report.unverifiedRows + report.uncited : 0;
  return (
    <CiteProvider passages={passages} onOpen={onOpen}>
      <div className="flex flex-col gap-4">
        {/* Title */}
        <header className="flex flex-wrap items-start gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-accent px-2 py-0.5 text-xs font-medium text-accent-foreground">
            <kind.icon className="size-3.5" /> {kind.label}
          </span>
          {!streaming && <StatusBadge status={answer.status} />}
          {answer.title && <h2 className="w-full font-display text-lg font-semibold text-balance">{answer.title}</h2>}
          {!streaming && answer.statusNote && <p className="w-full text-xs text-muted-foreground">{answer.statusNote}</p>}
        </header>

        {(answer.scope.searched || meta) && <ScopeBar answer={answer} meta={meta} />}

        {answer.summary && (
          <Prose text={`**In short:** ${answer.summary}`} />
        )}

        {answer.clarification && (
          <div className="flex gap-2 rounded-xl border border-primary/30 bg-accent/40 p-3 text-sm">
            <CircleHelp className="mt-0.5 size-4 shrink-0 text-primary" />
            <div>
              <p className="font-medium">To answer precisely:</p>
              <p className="text-muted-foreground">{answer.clarification}</p>
            </div>
          </div>
        )}

        {answer.blocks.map((b, i) => {
          switch (b.type) {
            case "text":
              return (
                <section key={i}>
                  {b.heading && <h3 className="mb-1.5 font-display text-base font-semibold">{b.heading}</h3>}
                  <Prose text={b.body} />
                </section>
              );
            case "points":
              return <Points key={i} heading={b.heading} style={b.style} items={b.items} />;
            case "requirements":
              return (
                <section key={i}>
                  {b.heading && <h3 className="mb-2 font-display text-base font-semibold">{b.heading}</h3>}
                  <RequirementTable groups={b.groups} anchor={`${anchor}-b${i}`} />
                </section>
              );
            case "workflow":
              return <Workflow key={i} heading={b.heading} steps={b.steps} />;
            case "comparison":
              return <Comparison key={i} heading={b.heading} subjects={b.subjects} rows={b.rows} />;
            case "field":
              return <FieldCard key={i} b={b} />;
          }
        })}

        {answer.conflicts.length > 0 && (
          <section className="rounded-xl border border-unclear/50 bg-unclear-soft/40 p-3.5">
            <h3 className="flex items-center gap-2 font-display text-base font-semibold">
              <Scale className="size-4 text-unclear-ink" /> Sources disagree
            </h3>
            <ul className="mt-2 flex flex-col gap-3">
              {answer.conflicts.map((c, i) => (
                <li key={i} className="rounded-lg bg-card/80 p-3 text-sm">
                  <p className="font-medium">{c.topic}</p>
                  <ul className="mt-1.5 flex flex-col gap-1.5">
                    {c.positions.map((p, j) => (
                      <li key={j} className="border-l-2 border-unclear pl-2.5">
                        <Prose text={p.statement} />
                        <Cites labels={p.cites} className="mt-1" />
                      </li>
                    ))}
                  </ul>
                  <p className="mt-2 text-xs">
                    <span className="font-medium">Resolution: </span>
                    {c.resolution ? <Prose text={c.resolution} className="inline [&>p]:inline" /> : "Needs a business decision"}
                  </p>
                </li>
              ))}
            </ul>
          </section>
        )}

        {answer.gaps.length > 0 && (
          <section className="rounded-xl border border-dashed p-3.5 text-sm">
            <h3 className="flex items-center gap-2 font-medium">
              <Info className="size-4 text-muted-foreground" /> Not established by the sources
            </h3>
            <ul className="mt-1.5 flex list-disc flex-col gap-1 pl-5 text-muted-foreground">
              {answer.gaps.map((g, i) => (
                <li key={i}>
                  <Prose text={g} className="[&>p]:inline" />
                </li>
              ))}
            </ul>
          </section>
        )}

        {!streaming && (fallback || checks > 0) && (
          <p className={cn("flex items-start gap-1.5 text-xs", fallback ? "text-unclear-ink" : "text-muted-foreground")}>
            <TriangleAlert className="mt-0.5 size-3.5 shrink-0" />
            <span>
              {fallback && "The AI didn’t return the answer format, so it’s shown as plain text. "}
              {report && report.unknownCites.length > 0 && `${report.unknownCites.length} citations to passages that weren’t retrieved were removed. `}
              {report && report.downgradedRequired > 0 && `${report.downgradedRequired} “required” statuses weren’t supported by the cited text and are shown as not specified. `}
              {report && report.unverifiedRows > 0 && `${report.unverifiedRows} rows name a field that isn’t in their cited source (flagged). `}
              {report && report.uncited > 0 && `${report.uncited} items have no source (flagged).`}
            </span>
          </p>
        )}

        {!streaming && <Sources answer={answer} passages={passages} />}

        {!streaming && answer.followUps.length > 0 && onAsk && (
          <nav aria-label="Suggested questions" className="border-t pt-3">
            <p className="mb-2 flex items-center gap-1.5 text-xs font-medium tracking-wide text-muted-foreground uppercase">
              <MessageCircleQuestion className="size-3.5" /> Explore further
            </p>
            <div className="flex flex-wrap gap-2">
              {answer.followUps.map((q) => (
                <button
                  key={q}
                  type="button"
                  onClick={() => onAsk(q)}
                  className="rounded-full border bg-background/70 px-3 py-1.5 text-left text-sm transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
                >
                  {q}
                </button>
              ))}
            </div>
          </nav>
        )}
      </div>
    </CiteProvider>
  );
}

export { shortName };
