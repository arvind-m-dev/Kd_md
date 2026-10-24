import { ExternalLink } from "lucide-react";
import type { Metadata } from "next";
import { Page, PageHeader } from "@/components/kd/page-header";
import { kd } from "@/lib/kd";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Sources",
  alternates: { types: { "text/markdown": "/md/sources.md" } },
};

export default function SourcesPage() {
  const current = kd.register.filter((d) => d.current).length;
  return (
    <Page>
      <PageHeader
        title="Source documents"
        description={`${kd.register.length} documents in Google Drive. ${current} are current; older versions are listed by name only and are not used for answers.`}
      />
      <div className="flex flex-col gap-8">
        {kd.groups.map((g) => {
          const docs = kd.register.filter((d) => d.group === g.id);
          return (
            <section key={g.id}>
              <h2 className="mb-3 font-semibold">
                <span className="mr-2 font-mono text-xs text-muted-foreground">{g.id}</span>
                {g.title}
              </h2>
              <ul className="divide-y rounded-xl border bg-card">
                {docs.map((d) => (
                  <li key={d.driveId} className={cn("flex flex-col gap-1 p-3 sm:flex-row sm:items-center sm:gap-4 sm:p-4", !d.current && "opacity-60")}>
                    <div className="min-w-0 flex-1">
                      {d.current ? (
                        <a href={d.url} target="_blank" rel="noreferrer" className="inline-flex items-start gap-1.5 font-medium hover:text-primary">
                          {d.title} <ExternalLink className="mt-1 size-3 shrink-0" />
                        </a>
                      ) : (
                        <span className="font-medium">{d.title}</span>
                      )}
                      <p className="text-xs text-muted-foreground">
                        {d.type} · updated {d.modified.slice(0, 10)}
                      </p>
                    </div>
                    <span
                      title={d.status}
                      className={cn(
                        "w-fit shrink-0 rounded-full px-2 py-0.5 text-xs font-medium",
                        d.current ? "bg-clear-soft text-clear" : "bg-muted text-muted-foreground",
                      )}
                    >
                      {d.current ? "Current" : d.status.startsWith("HISTORY") ? "Older version" : "Not used"}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </div>
    </Page>
  );
}
