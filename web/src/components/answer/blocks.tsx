"use client";

import { Check, ChevronDown, CircleDot, Flag, GitBranch, Info, ShieldCheck, TriangleAlert, User } from "lucide-react";
import { useId, useState } from "react";
import { NOT_SPECIFIED } from "@/lib/answer/markdown";
import type { Block, ComparisonRow, PointItem, WorkflowStep } from "@/lib/answer/schema";
import { cn } from "@/lib/utils";
import { Cites, Prose } from "./cite";
import { RequiredBadge } from "./requirement-table";

const Missing = ({ text = NOT_SPECIFIED }: { text?: string }) => <span className="text-xs text-muted-foreground italic">{text}</span>;

function Heading({ children }: { children: React.ReactNode }) {
  return children ? <h3 className="mb-2 font-display text-base font-semibold">{children}</h3> : null;
}

const Uncited = () => (
  <span className="inline-flex items-center gap-1 text-[11px] text-unclear-ink">
    <TriangleAlert className="size-3" /> No source cited
  </span>
);

// ── Points / checklist ──

export function Points({ heading, style, items }: { heading: string; style: "bullets" | "checklist"; items: PointItem[] }) {
  const [done, setDone] = useState<Set<number>>(new Set());
  return (
    <section>
      <Heading>{heading}</Heading>
      <ul className="flex flex-col gap-2">
        {items.map((it, i) => (
          <li key={i} className="flex items-start gap-2.5">
            {style === "checklist" ? (
              <button
                type="button"
                role="checkbox"
                aria-checked={done.has(i)}
                aria-label="Mark as checked"
                onClick={() =>
                  setDone((d) => {
                    const n = new Set(d);
                    if (n.has(i)) n.delete(i);
                    else n.add(i);
                    return n;
                  })
                }
                className={cn("mt-0.5 grid size-5 shrink-0 place-items-center rounded-md border transition-colors", done.has(i) && "border-primary bg-primary text-primary-foreground")}
              >
                {done.has(i) && <Check className="size-3.5" />}
              </button>
            ) : (
              <CircleDot className="mt-1 size-3.5 shrink-0 text-primary" aria-hidden />
            )}
            <span className={cn("min-w-0 flex-1", done.has(i) && "text-muted-foreground line-through")}>
              <Prose text={it.text} className="text-[15px] [&>p]:inline" />
              <span className="mt-1 flex flex-wrap gap-1">{it.cites.length ? <Cites labels={it.cites} /> : it.uncited && <Uncited />}</span>
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}

// ── Workflow ──

const KIND = {
  step: { icon: CircleDot, label: "Step" },
  decision: { icon: GitBranch, label: "Decision" },
  outcome: { icon: Flag, label: "Outcome" },
};

function Step({ step, n, last }: { step: WorkflowStep; n: number; last: boolean }) {
  const id = useId();
  const details = [
    ["Before this step", step.prerequisites],
    ["Checks and validation", step.validation],
    ["Other paths and exceptions", step.alternatives],
  ].filter(([, v]) => v) as [string, string][];
  const [open, setOpen] = useState(n === 1);
  const K = KIND[step.kind];
  return (
    <li className="relative flex gap-3 pb-5 last:pb-0">
      {!last && <span aria-hidden className="absolute top-9 bottom-0 left-[17px] w-px bg-border" />}
      <span
        className={cn(
          "z-10 grid size-9 shrink-0 place-items-center rounded-full border-2 font-display text-sm font-semibold",
          step.kind === "decision" ? "border-unclear bg-unclear-soft text-unclear-ink" : step.kind === "outcome" ? "border-clear bg-clear-soft text-clear" : "border-primary bg-card text-primary",
        )}
      >
        {step.kind === "step" ? n : <K.icon className="size-4" />}
      </span>
      <div className="min-w-0 flex-1 rounded-xl border bg-card/80 p-3">
        <button type="button" aria-expanded={open} aria-controls={id} onClick={() => setOpen((o) => !o)} className="flex w-full items-start gap-2 text-left">
          <span className="min-w-0 flex-1">
            <span className="block font-medium">{step.title}</span>
            <span className="mt-1 flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground">
              {step.kind !== "step" && <span className="rounded-full bg-muted px-1.5 py-0.5">{K.label}</span>}
              {step.actor && (
                <span className="inline-flex items-center gap-1 rounded-full bg-accent px-1.5 py-0.5 text-accent-foreground">
                  <User className="size-3" /> {step.actor}
                </span>
              )}
            </span>
          </span>
          <ChevronDown className={cn("mt-1 size-4 shrink-0 text-muted-foreground transition-transform", !open && "-rotate-90")} />
        </button>
        {open && (
          <div id={id} className="mt-2 flex flex-col gap-2 text-sm">
            {step.detail ? <Prose text={step.detail} /> : !details.length && <Missing />}
            {details.map(([k, v]) => (
              <div key={k} className="rounded-lg bg-muted/50 px-2.5 py-2">
                <p className="text-[11px] font-medium tracking-wide text-muted-foreground uppercase">{k}</p>
                <Prose text={v} />
              </div>
            ))}
          </div>
        )}
        <div className="mt-2">{step.cites.length ? <Cites labels={step.cites} /> : step.uncited && <Uncited />}</div>
      </div>
    </li>
  );
}

export function Workflow({ heading, steps }: { heading: string; steps: WorkflowStep[] }) {
  return (
    <section>
      <Heading>{heading}</Heading>
      <ol className="flex flex-col">
        {steps.map((st, i) => (
          <Step key={i} step={st} n={steps.slice(0, i + 1).filter((x) => x.kind === "step").length} last={i === steps.length - 1} />
        ))}
      </ol>
    </section>
  );
}

// ── Comparison ──

export function Comparison({ heading, subjects, rows }: { heading: string; subjects: string[]; rows: ComparisonRow[] }) {
  const [onlyDiff, setOnlyDiff] = useState(false);
  const diffs = rows.filter((r) => r.differs).length;
  const shown = onlyDiff ? rows.filter((r) => r.differs) : rows;
  return (
    <section>
      <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
        <Heading>{heading}</Heading>
        {diffs > 0 && diffs < rows.length && (
          <button
            type="button"
            aria-pressed={onlyDiff}
            onClick={() => setOnlyDiff((v) => !v)}
            className={cn("inline-flex h-8 items-center gap-1.5 rounded-lg border px-2.5 text-xs font-medium hover:bg-accent", onlyDiff && "border-primary bg-accent")}
          >
            <GitBranch className="size-3.5" /> Only differences ({diffs})
          </button>
        )}
      </div>
      {onlyDiff && <p className="mb-2 text-xs text-muted-foreground">Showing {shown.length} of {rows.length} dimensions.</p>}
      <div className="overflow-x-auto rounded-xl border">
        <table className="w-full min-w-[36rem] text-sm">
          <thead className="bg-muted/50 text-left">
            <tr>
              <th className="sticky left-0 bg-muted px-3 py-2 text-xs font-medium text-muted-foreground">Dimension</th>
              {subjects.map((s) => (
                <th key={s} className="px-3 py-2 font-display font-semibold">
                  {s}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {shown.map((r, i) => (
              <tr key={i} className={cn("border-t align-top", r.differs && "bg-unclear-soft/40")}>
                <th scope="row" className="sticky left-0 w-[20%] bg-card px-3 py-2.5 text-left font-medium">
                  {r.dimension}
                  {r.differs && <span className="mt-0.5 block text-[11px] font-normal text-unclear-ink">Differs</span>}
                </th>
                {r.cells.map((c, j) => (
                  <td key={j} className="px-3 py-2.5">
                    {c.text ? <Prose text={c.text} /> : <Missing text="Not documented in the retrieved sources" />}
                    <div className="mt-1">{c.cites.length ? <Cites labels={c.cites} max={2} /> : c.text && c.uncited && <Uncited />}</div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

// ── Field / rule card ──

function Expand({ title, icon: Icon, children, defaultOpen = false }: { title: string; icon: React.ComponentType<{ className?: string }>; children: React.ReactNode; defaultOpen?: boolean }) {
  return (
    <details open={defaultOpen} className="group rounded-lg border bg-background/60">
      <summary className="flex cursor-pointer list-none items-center gap-2 px-3 py-2 text-sm font-medium [&::-webkit-details-marker]:hidden">
        <Icon className="size-4 text-primary" />
        <span className="flex-1">{title}</span>
        <ChevronDown className="size-4 text-muted-foreground transition-transform group-open:rotate-180" />
      </summary>
      <div className="px-3 pb-3 text-sm">{children}</div>
    </details>
  );
}

export function FieldCard({ b }: { b: Extract<Block, { type: "field" }> }) {
  return (
    <section className="rounded-2xl border bg-card/80 p-4">
      <div className="flex flex-wrap items-start justify-between gap-2">
        <h3 className="font-display text-lg font-semibold">{b.name}</h3>
        <RequiredBadge state={b.required} note={b.requiredNote} />
      </div>
      {b.meaning ? <Prose text={b.meaning} className="mt-2" /> : <Missing />}
      <dl className="mt-3 grid gap-2 sm:grid-cols-2">
        <div className="rounded-lg bg-muted/50 p-2.5">
          <dt className="text-[11px] font-medium tracking-wide text-muted-foreground uppercase">Conditions and dependencies</dt>
          <dd className="mt-0.5 text-sm">{b.conditions ? <Prose text={b.conditions} /> : <Missing />}</dd>
        </div>
        <div className="rounded-lg bg-muted/50 p-2.5">
          <dt className="text-[11px] font-medium tracking-wide text-muted-foreground uppercase">What users see</dt>
          <dd className="mt-0.5 text-sm">{b.behaviour ? <Prose text={b.behaviour} /> : <Missing />}</dd>
        </div>
      </dl>
      <div className="mt-3 flex flex-col gap-2">
        {b.why && (
          <Expand title="Why?" icon={Info}>
            <Prose text={b.why} />
          </Expand>
        )}
        <Expand title="Validation and allowed values" icon={ShieldCheck} defaultOpen={!!b.values}>
          {b.values ? <Prose text={b.values} /> : <Missing />}
          {b.requiredNote && <p className="mt-1 text-xs text-muted-foreground">Required: {b.requiredNote}</p>}
        </Expand>
        {b.exceptions && (
          <Expand title="Exceptions" icon={TriangleAlert}>
            <Prose text={b.exceptions} />
          </Expand>
        )}
        <Expand title="Source" icon={Flag} defaultOpen>
          {b.cites.length ? <Cites labels={b.cites} max={6} /> : <Uncited />}
        </Expand>
      </div>
    </section>
  );
}
