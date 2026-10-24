import { ArrowLeft, BookOpenText, ExternalLink, FileText, MessageCircleQuestion } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { CopyButton } from "@/components/kd/copy-button";
import { GlossaryText } from "@/components/kd/glossary-text";
import { BookmarkButton } from "@/components/library/bookmark-button";
import { HighlightScope } from "@/components/library/highlight-scope";
import { FadeIn } from "@/components/kd/motion";
import { Page } from "@/components/kd/page-header";
import { askAboutRule, RuleCard } from "@/components/kd/rule-card";
import { StatusBadge } from "@/components/kd/status";
import { buttonVariants } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { getDoc, getGroup, getRule, kd, type Rule } from "@/lib/kd";
import { cn } from "@/lib/utils";

export async function generateMetadata({ params }: PageProps<"/rules/[id]">): Promise<Metadata> {
  const rule = getRule((await params).id);
  return rule ? { title: rule.id, description: rule.text.slice(0, 160), alternates: { types: { "text/markdown": `/rules/${rule.id}.md` } } } : {};
}

function Issue({ id }: { id: string }) {
  const d = kd.decisions.find((x) => x.id === id);
  const c = kd.conflicts.find((x) => x.id === id);
  const p = kd.placeholders.find((x) => x.id === id);
  const open = d?.open ?? c?.open ?? true;
  return (
    <li>
      <Link href={`/conflicts#${id}`} className="block rounded-lg border bg-background p-3 hover:border-primary/40">
        <span className="flex items-center gap-2 text-xs">
          <span className="font-mono font-medium">{id}</span>
          <span className="text-muted-foreground">{d ? "Decision" : c ? "Conflict" : "Missing value"}</span>
          <span className={cn("ml-auto", open ? "text-unclear-ink" : "text-clear")}>{open ? "Open" : "Resolved"}</span>
        </span>
        <span className="mt-1 block text-sm font-medium">{d?.title ?? c?.topic ?? p?.item}</span>
        <span className="mt-1 block text-sm text-muted-foreground">
          {d ? d.question || d.resolution : c ? `Resolution: ${c.resolution}` : `Missing: ${p?.missing}`}
        </span>
      </Link>
    </li>
  );
}

async function RuleDetail({ params }: { params: PageProps<"/rules/[id]">["params"] }) {
  const rule = getRule((await params).id);
  if (!rule) notFound();
  const doc = rule.doc ? getDoc(rule.doc) : undefined;
  const group = getGroup(rule.group)!;
  const refs = rule.refs.map((id) => getRule(id)).filter((r): r is Rule => !!r);
  const i = kd.rules.indexOf(rule);
  const nearby = kd.rules.slice(Math.max(0, i - 2), i + 3).filter((r) => r !== rule && r.doc === rule.doc);

  return (
    <>
      <nav aria-label="Breadcrumb" className="mb-4 flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
        <Link href="/rules" className="inline-flex items-center gap-1 hover:text-foreground">
          <ArrowLeft className="size-3.5" /> Rules
        </Link>
        <span>/</span>
        <Link href={`/rules?group=${group.id}`} className="hover:text-foreground">
          {group.title}
        </Link>
      </nav>

      <FadeIn>
        <article className="rounded-2xl border bg-card p-5 sm:p-8">
          <div className="flex flex-wrap items-center gap-2">
            <h1 className="font-mono text-sm font-semibold">{rule.id}</h1>
            {rule.tag && <span className="rounded-md bg-muted px-2 py-0.5 text-xs text-muted-foreground">{rule.tag}</span>}
            <StatusBadge status={rule.status} className="ml-auto" />
          </div>
          <HighlightScope scope={`rule:${rule.id}`} title={`${rule.id} — ${group.title}`}>
            <p className="mt-4 text-lg leading-relaxed text-pretty sm:text-xl">
              <GlossaryText text={rule.text} />
            </p>
          </HighlightScope>
          <div className="mt-6 flex flex-wrap gap-2">
            <Link href={askAboutRule(rule.id)} className={buttonVariants({ size: "sm" })}>
              <MessageCircleQuestion /> Ask about this rule
            </Link>
            <Link href={rule.doc ? `/read/${rule.group}/${rule.doc}#${rule.id.toLowerCase()}` : `/read/${rule.group}`} className={buttonVariants({ variant: "outline", size: "sm" })}>
              <BookOpenText /> Read in context
            </Link>
            {doc && (
              <a href={doc.url} target="_blank" rel="noreferrer" className={buttonVariants({ variant: "outline", size: "sm" })}>
                <ExternalLink /> Open source document
              </a>
            )}
            <BookmarkButton
              item={{ key: `rule:${rule.id}`, kind: "rule", title: rule.id, subtitle: rule.text.slice(0, 140), href: `/rules/${rule.id}` }}
            />
            <CopyButton url={`/rules/${rule.id}.md`} label="Copy as Markdown" />
            <a href={`/rules/${rule.id}.md`} className={buttonVariants({ variant: "ghost", size: "sm" })}>
              <FileText /> .md
            </a>
          </div>
        </article>
      </FadeIn>

      <div className="mt-6 grid gap-6 lg:grid-cols-5">
        <FadeIn delay={0.08} className="flex flex-col gap-6 lg:col-span-3">
          <section className="rounded-xl border bg-card p-5">
            <h2 className="font-semibold">Is this final?</h2>
            {rule.status === "clear" ? (
              <p className="mt-1 text-sm text-muted-foreground">
                Yes, as far as the documents go. No open decision, conflict or missing value mentions this rule.
              </p>
            ) : (
              <p className="mt-1 text-sm text-muted-foreground">
                Not yet. The items below mention this rule and are still open, so treat it as “needs clarity”.
              </p>
            )}
            {rule.issues.length > 0 && (
              <ul className="mt-4 flex flex-col gap-2">
                {rule.issues.map((id) => (
                  <Issue key={id} id={id} />
                ))}
              </ul>
            )}
          </section>
          {refs.length > 0 && (
            <section>
              <h2 className="mb-3 font-semibold">Rules it refers to</h2>
              <div className="grid gap-3">
                {refs.map((r) => (
                  <RuleCard key={r.id} rule={r} />
                ))}
              </div>
            </section>
          )}
          {nearby.length > 0 && (
            <section>
              <h2 className="mb-3 font-semibold">Next to it in the document</h2>
              <div className="grid gap-3">
                {nearby.map((r) => (
                  <RuleCard key={r.id} rule={r} />
                ))}
              </div>
            </section>
          )}
        </FadeIn>

        <FadeIn delay={0.12} className="lg:col-span-2">
          <section className="rounded-xl border bg-card p-5 lg:sticky lg:top-20">
            <h2 className="font-semibold">Where it comes from</h2>
            <dl className="mt-3 grid gap-3 text-sm">
              {doc && (
                <div>
                  <dt className="text-xs text-muted-foreground">Document</dt>
                  <dd>
                    <a href={doc.url} target="_blank" rel="noreferrer" className="font-medium text-primary underline-offset-2 hover:underline">
                      {doc.title}
                    </a>
                    <span className="ml-1.5 text-xs text-muted-foreground">
                      {doc.status.toLowerCase()}
                      {doc.modified && ` · updated ${doc.modified.slice(0, 10)}`}
                    </span>
                  </dd>
                </div>
              )}
              <div>
                <dt className="text-xs text-muted-foreground">Topic</dt>
                <dd>
                  {group.id} — {group.title}
                </dd>
              </div>
              {rule.path.length > 0 && (
                <div>
                  <dt className="text-xs text-muted-foreground">Section</dt>
                  <dd>{rule.path.join(" › ")}</dd>
                </div>
              )}
              {rule.source && (
                <div>
                  <dt className="text-xs text-muted-foreground">Place in the document</dt>
                  <dd className="text-pretty">{rule.source}</dd>
                </div>
              )}
              <div>
                <dt className="text-xs text-muted-foreground">Knowledge base</dt>
                <dd>
                  Line {rule.line.toLocaleString("en")} of{" "}
                  <a href="/kd.md" className="text-primary underline-offset-2 hover:underline">
                    kd.md
                  </a>
                </dd>
              </div>
            </dl>
            <details className="mt-4 text-sm">
              <summary className="cursor-pointer text-muted-foreground hover:text-foreground">Original line, word for word</summary>
              <p className="mt-2 rounded-lg bg-muted p-3 font-mono text-xs leading-relaxed break-words">{rule.md}</p>
            </details>
          </section>
        </FadeIn>
      </div>
    </>
  );
}

export default function RulePage({ params }: PageProps<"/rules/[id]">) {
  return (
    <Page wide>
      <Suspense fallback={<Skeleton className="h-64 rounded-2xl" />}>
        <RuleDetail params={params} />
      </Suspense>
    </Page>
  );
}
