import { ArrowLeft, ArrowRight, ExternalLink, ListChecks } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { Markdown } from "@/components/kd/markdown";
import { FadeIn } from "@/components/kd/motion";
import { Toc } from "@/components/kd/toc";
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

async function DocContent({ params }: { params: PageProps<"/read/[group]/[doc]">["params"] }) {
  const { group: groupId, doc: docId } = await params;
  const doc = getDoc(docId);
  if (!doc || doc.group !== groupId) notFound();
  const group = getGroup(groupId)!;
  const md = docMarkdown(doc.id)!;
  const entries = toc(md, 5);
  const siblings = kd.docs.filter((d) => d.group === groupId);
  const i = siblings.indexOf(doc);
  const prev = siblings[i - 1];
  const next = siblings[i + 1];

  return (
    <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-6 sm:px-6 sm:py-8 lg:px-10 xl:grid-cols-[minmax(0,1fr)_16rem]">
      <article className="min-w-0">
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
            </div>
          </header>
        </FadeIn>
        <div data-askable>
          <Markdown className="mt-8">{md}</Markdown>
        </div>
        <nav className="mt-12 grid gap-3 border-t pt-6 sm:grid-cols-2" aria-label="Other documents in this topic">
          {prev ? (
            <Link href={`/read/${groupId}/${prev.id}`} className="rounded-xl border p-4 hover:bg-accent">
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <ArrowLeft className="size-3" /> Previous
              </span>
              <span className="mt-1 block text-sm font-medium">{prev.title}</span>
            </Link>
          ) : (
            <span />
          )}
          {next && (
            <Link href={`/read/${groupId}/${next.id}`} className="rounded-xl border p-4 text-right hover:bg-accent">
              <span className="flex items-center justify-end gap-1 text-xs text-muted-foreground">
                Next <ArrowRight className="size-3" />
              </span>
              <span className="mt-1 block text-sm font-medium">{next.title}</span>
            </Link>
          )}
        </nav>
      </article>
      <Toc entries={entries} />
    </div>
  );
}

export default function DocPage({ params }: PageProps<"/read/[group]/[doc]">) {
  return (
    <Suspense fallback=<div className="mx-auto max-w-5xl px-4 py-8"><Skeleton className="h-40 rounded-2xl" /></div>>
      <DocContent params={params} />
    </Suspense>
  );
}
