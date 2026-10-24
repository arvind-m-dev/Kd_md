import { ArrowLeft, ExternalLink } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { Markdown } from "@/components/kd/markdown";
import { BookmarkButton } from "@/components/library/bookmark-button";
import { HighlightScope } from "@/components/library/highlight-scope";
import { FadeIn, Stagger, StaggerItem } from "@/components/kd/motion";
import { Page, PageHeader } from "@/components/kd/page-header";
import { buttonVariants } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { getGroup, kd } from "@/lib/kd";
import { groupNotesMarkdown } from "@/lib/reader";

export function generateStaticParams() {
  return kd.groups.map((g) => ({ group: g.id }));
}

export async function generateMetadata({ params }: PageProps<"/read/[group]">): Promise<Metadata> {
  const g = getGroup((await params).group);
  return g ? { title: g.title, alternates: { types: { "text/markdown": `/md/${g.id}.md` } } } : {};
}

async function GroupContent({ params }: { params: PageProps<"/read/[group]">["params"] }) {
  const g = getGroup((await params).group);
  if (!g) notFound();
  const docs = kd.docs.filter((d) => d.group === g.id);
  const notes = groupNotesMarkdown(g.id) ?? "";
  return (
    <Page>
      <Link href="/read" className="mb-4 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
        <ArrowLeft className="size-3.5" /> All topics
      </Link>
      <PageHeader title={g.title} description={`${g.docCount} current documents · ${g.ruleCount} rules · ${g.needsClarity} need clarity`}>
        <Link href={`/rules?group=${g.id}`} className={buttonVariants({ variant: "outline", size: "sm" })}>
          See the rules
        </Link>
        <BookmarkButton item={{ key: `group:${g.id}`, kind: "group", title: g.title, subtitle: `Topic ${g.id} · ${g.docCount} documents`, href: `/read/${g.id}` }} />
      </PageHeader>
      <Stagger className="grid gap-3 sm:grid-cols-2">
        {docs.map((d) => (
          <StaggerItem key={d.id} className="flex">
            <article className="relative flex w-full flex-col gap-2 rounded-xl border bg-card p-4 transition-shadow hover:shadow-md">
              <Link href={`/read/${g.id}/${d.id}`} className="font-medium leading-snug after:absolute after:inset-0 hover:text-primary">
                {d.title}
              </Link>
              {d.note && <p className="text-xs text-muted-foreground">{d.note}</p>}
              <p className="mt-auto flex items-center gap-2 text-xs text-muted-foreground">
                {d.ruleCount} rules{d.modified && ` · updated ${d.modified.slice(0, 10)}`}
                <a href={d.url} target="_blank" rel="noreferrer" className="relative z-10 ml-auto inline-flex items-center gap-1 text-primary hover:underline">
                  Drive <ExternalLink className="size-3" />
                </a>
              </p>
            </article>
          </StaggerItem>
        ))}
      </Stagger>
      {notes && (
        <FadeIn delay={0.1}>
          <details className="mt-8 rounded-xl border bg-card p-4 sm:p-6">
            <summary className="cursor-pointer font-semibold">Group notes, conventions and open questions</summary>
            <HighlightScope scope={`group:${g.id}`} title={`${g.title} — group notes`}>
              <Markdown className="mt-4">{notes}</Markdown>
            </HighlightScope>
          </details>
        </FadeIn>
      )}
    </Page>
  );
}

export default function GroupPage({ params }: PageProps<"/read/[group]">) {
  return (
    <Suspense fallback=<div className="mx-auto max-w-5xl px-4 py-8"><Skeleton className="h-40 rounded-2xl" /></div>>
      <GroupContent params={params} />
    </Suspense>
  );
}
