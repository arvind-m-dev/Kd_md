import { ArrowLeft, ArrowRight, ExternalLink, Highlighter, ListChecks } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { Markdown } from "@/components/kd/markdown";
import { BookmarkButton } from "@/components/library/bookmark-button";
import { HighlightScope } from "@/components/library/highlight-scope";
import { ReaderSettings } from "@/components/library/reader-settings";
import { ReadingTracker } from "@/components/library/reading-tracker";
import { FadeIn } from "@/components/kd/motion";
import { Toc } from "@/components/kd/toc";
import { WorkingNote } from "@/components/kd/working-note";
import { isExtraDoc } from "@/lib/scope";
import { buttonVariants } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { getDoc, getGroup, kd } from "@/lib/kd";
import { docMarkdown, toc } from "@/lib/reader";

export function generateStaticParams() {
  return kd.docs.map((d) => ({ group: d.group, doc: d.id }));
}

export async function generateMetadata({ params }: PageProps<"/read/[group]/[doc]">): Promise<Metadata> {
  const d = getDoc((await params).doc);
  return d ? { title: d.title } : {};
}

type DocRef = (typeof kd.docs)[number];

/** Previous / next document in the topic. `scope` shows it only with working notes hidden or shown. */
function DocNav({ groupId, prev, next, scope }: { groupId: string; prev?: DocRef; next?: DocRef; scope?: "core-only" | "extra" }) {
  if (!prev && !next) return null;
  const attrs = scope === "core-only" ? { "data-core-only": true } : scope === "extra" ? { "data-extra": true } : {};
  const link = (d: DocRef, dir: "prev" | "next") => (
    <Link
      href={`/read/${groupId}/${d.id}`}
      className={`rounded-xl border p-4 hover:bg-accent ${dir === "next" ? "text-right sm:col-start-2" : ""}`}
    >
      <span className={`flex items-center gap-1 text-xs text-muted-foreground ${dir === "next" ? "justify-end" : ""}`}>
        {dir === "prev" ? (
          <>
            <ArrowLeft className="size-3" /> Previous
          </>
        ) : (
          <>
            Next <ArrowRight className="size-3" />
          </>
        )}
      </span>
      <span className="mt-1 block text-sm font-medium">{d.title}</span>
    </Link>
  );
  return (
    <nav {...attrs} className="mt-12 grid gap-3 border-t pt-6 sm:grid-cols-2" aria-label="Other documents in this topic">
      {prev && link(prev, "prev")}
      {next && link(next, "next")}
    </nav>
  );
}

async function DocContent({ params }: { params: PageProps<"/read/[group]/[doc]">["params"] }) {
  const { group: groupId, doc: docId } = await params;
  const doc = getDoc(docId);
  if (!doc || doc.group !== groupId) notFound();
  const group = getGroup(groupId)!;
  const md = docMarkdown(doc.id)!;
  const entries = toc(md, 5);
  // Neighbours with working notes shown, and (for a core doc) the nearest core neighbours when they're hidden.
  const siblings = kd.docs.filter((d) => d.group === groupId);
  const neighbours = (list: typeof siblings) => {
    const i = list.indexOf(doc);
    return { prev: list[i - 1], next: list[i + 1] };
  };
  const all = neighbours(siblings);
  const core = isExtraDoc(doc.id, doc.group) ? all : neighbours(siblings.filter((d) => !isExtraDoc(d.id, d.group)));
  const sameNav = all.prev === core.prev && all.next === core.next;
  const href = `/read/${groupId}/${doc.id}`;

  const page = (
    <div className="kd-reader mx-auto grid w-full max-w-7xl gap-10 px-4 py-6 sm:px-6 sm:py-8 lg:px-10 xl:grid-cols-[minmax(0,1fr)_16rem]">
      <ReadingTracker href={href} title={doc.title} subtitle={`${group.id} · ${group.title}`} />
      <article className="kd-reader-article mx-auto w-full min-w-0">
        <Link href={`/read/${groupId}`} className="mb-4 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="size-3.5" /> {group.title}
        </Link>
        <FadeIn>
          <header className="rounded-2xl border bg-card p-5 sm:p-6">
            <p className="text-xs font-medium tracking-wide text-primary uppercase">{doc.status.toLowerCase()}</p>
            <h1 className="mt-1 text-xl font-semibold tracking-tight text-balance sm:text-2xl">{doc.title}</h1>
            {doc.note && <p className="mt-1 text-sm text-muted-foreground">{doc.note}</p>}
            <p className="mt-2 text-sm text-muted-foreground">
              {doc.type}
              {doc.modified && ` · updated ${doc.modified.slice(0, 10)}`} · {doc.ruleCount} rules
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <a href={doc.url} target="_blank" rel="noreferrer" className={buttonVariants({ size: "sm" })}>
                <ExternalLink /> Open in Google Drive
              </a>
              <Link href={`/rules?doc=${doc.id}`} className={buttonVariants({ variant: "outline", size: "sm" })}>
                <ListChecks /> Rules as cards
              </Link>
              <BookmarkButton item={{ key: `doc:${doc.id}`, kind: "doc", title: doc.title, subtitle: `${group.id} · ${group.title}`, href }} />
              <ReaderSettings />
            </div>
            <p className="mt-4 flex items-center gap-1.5 text-xs text-muted-foreground">
              <Highlighter className="size-3.5" /> Select any text to highlight it, add a note or ask about it.
            </p>
          </header>
        </FadeIn>
        <HighlightScope scope={`doc:${doc.id}`} title={doc.title}>
          <Markdown className="mt-8" section={{ href, pageTitle: doc.title }}>
            {md}
          </Markdown>
        </HighlightScope>
        {sameNav ? (
          <DocNav groupId={groupId} prev={all.prev} next={all.next} />
        ) : (
          <>
            <DocNav groupId={groupId} prev={core.prev} next={core.next} scope="core-only" />
            <DocNav groupId={groupId} prev={all.prev} next={all.next} scope="extra" />
          </>
        )}
      </article>
      <Toc entries={entries} />
    </div>
  );
  return isExtraDoc(doc.id, doc.group) ? <WorkingNote what="document">{page}</WorkingNote> : page;
}

export default function DocPage({ params }: PageProps<"/read/[group]/[doc]">) {
  return (
    <Suspense fallback=<div className="mx-auto max-w-5xl px-4 py-8"><Skeleton className="h-40 rounded-2xl" /></div>>
      <DocContent params={params} />
    </Suspense>
  );
}
