import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { Stagger, StaggerItem } from "@/components/kd/motion";
import { Page, PageHeader } from "@/components/kd/page-header";
import { kd } from "@/lib/kd";

export const metadata: Metadata = { title: "Read" };

export default function ReadIndex() {
  return (
    <Page wide>
      <PageHeader
        title="Read the documents"
        description="The source documents, grouped by topic. Only the latest version of each document counts. Select any text while reading to ask about it."
      />
      <Stagger className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {kd.groups.map((g) => {
          const docs = kd.docs.filter((d) => d.group === g.id);
          return (
            <StaggerItem key={g.id} className="flex">
              <section className="flex w-full flex-col rounded-xl border bg-card p-5">
                <Link href={`/read/${g.id}`} className="group">
                  <span className="font-mono text-xs text-muted-foreground">{g.id}</span>
                  <h2 className="mt-0.5 font-semibold text-balance group-hover:text-primary">{g.title}</h2>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {g.docCount} documents · {g.ruleCount} rules
                    {g.needsClarity > 0 && <span className="text-unclear-ink"> · {g.needsClarity} need clarity</span>}
                  </p>
                </Link>
                <ul className="mt-4 flex flex-col gap-1 border-t pt-3">
                  {docs.map((d) => (
                    <li key={d.id}>
                      <Link href={`/read/${g.id}/${d.id}`} className="group flex items-start gap-2 rounded-md py-1 text-sm hover:text-primary">
                        <ArrowRight className="mt-1 size-3 shrink-0 text-muted-foreground group-hover:text-primary" />
                        <span className="leading-snug">{d.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            </StaggerItem>
          );
        })}
      </Stagger>
    </Page>
  );
}
