import type { Metadata } from "next";
import { IndexTree, type IndexGroup } from "@/components/index/index-tree";
import { ContinueReading } from "@/components/library/continue-reading";
import { Page, PageHeader } from "@/components/kd/page-header";
import { kd } from "@/lib/kd";
import { docMarkdown, toc } from "@/lib/reader";

export const metadata: Metadata = { title: "Index" };

// Topic → document → sections (every heading in each document).
const tree: IndexGroup[] = kd.groups.map((g) => ({
  id: g.id,
  title: g.title,
  docCount: g.docCount,
  ruleCount: g.ruleCount,
  needsClarity: g.needsClarity,
  docs: kd.docs
    .filter((d) => d.group === g.id)
    .map((d) => ({
      id: d.id,
      title: d.title,
      note: d.note,
      url: d.url,
      type: d.type,
      ruleCount: d.ruleCount,
      sections: toc(docMarkdown(d.id) ?? "", 6),
    })),
}));

export default function ReadIndex() {
  const sections = tree.reduce((n, g) => n + g.docs.reduce((m, d) => m + d.sections.length, 0), 0);
  return (
    <Page wide>
      <PageHeader
        title="Index"
        description={`Everything in one place: ${kd.groups.length} topics, ${kd.docs.length} documents and ${sections.toLocaleString("en")} sections. Filter to find a section, open a document to read it, then select any text to highlight, note or ask about it.`}
      />
      <ContinueReading className="mb-6" />
      <IndexTree groups={tree} />
    </Page>
  );
}
