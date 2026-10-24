import type { Metadata } from "next";
import { IndexTree, type IndexGroup } from "@/components/index/index-tree";
import { ContinueReading } from "@/components/library/continue-reading";
import { Page, PageHeader } from "@/components/kd/page-header";
import { kd } from "@/lib/kd";
import { docMarkdown, toc } from "@/lib/reader";
import { isExtraDoc, isExtraGroup } from "@/lib/scope";

export const metadata: Metadata = { title: "Index" };

// Topic → document → sections (every heading in each document).
const tree: IndexGroup[] = kd.groups.map((g) => ({
  id: g.id,
  title: g.title,
  docCount: g.docCount,
  ruleCount: g.ruleCount,
  needsClarity: g.needsClarity,
  extra: isExtraGroup(g.id),
  docs: kd.docs
    .filter((d) => d.group === g.id)
    .map((d) => ({
      id: d.id,
      title: d.title,
      note: d.note,
      url: d.url,
      type: d.type,
      ruleCount: d.ruleCount,
      extra: isExtraDoc(d.id, d.group),
      sections: toc(docMarkdown(d.id) ?? "", 6),
    })),
}));

export default function ReadIndex() {
  // Counts with and without working notes; the switch picks which one shows (globals.css).
  const count = (all: boolean) => {
    const groups = tree.filter((g) => all || !g.extra);
    const docs = groups.flatMap((g) => g.docs).filter((d) => all || !d.extra);
    const sections = docs.reduce((n, d) => n + d.sections.length, 0);
    return `${groups.length} topics, ${docs.length} documents and ${sections.toLocaleString("en")} sections`;
  };
  return (
    <Page wide>
      <PageHeader
        title="Index"
        description={
          <>
            Everything in one place: <span data-core-only>{count(false)}</span>
            <span data-extra>{count(true)}</span>. Filter to find a section, open a document to read it, then select any text
            to highlight, note or ask about it.
          </>
        }
      />
      <ContinueReading className="mb-6" />
      <IndexTree groups={tree} />
    </Page>
  );
}
