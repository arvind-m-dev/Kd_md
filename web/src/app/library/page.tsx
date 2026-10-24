import type { Metadata } from "next";
import { LibraryView } from "@/components/library/library-view";
import { Page, PageHeader } from "@/components/kd/page-header";

export const metadata: Metadata = { title: "Library" };

export default function LibraryPage() {
  return (
    <Page>
      <PageHeader
        title="Your library"
        description="Everything you saved while reading: highlights with your notes, bookmarked documents, sections and rules, and answers you kept."
      />
      <LibraryView />
    </Page>
  );
}
