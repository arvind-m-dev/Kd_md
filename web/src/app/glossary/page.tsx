import type { Metadata } from "next";
import { GlossaryList } from "@/components/kd/glossary-list";
import { Page, PageHeader } from "@/components/kd/page-header";
import { kd } from "@/lib/kd";

export const metadata: Metadata = { title: "Glossary" };

export default function GlossaryPage() {
  return (
    <Page>
      <PageHeader
        title="Glossary"
        description={`${kd.glossary.length} Keydemand terms and what they mean. Underlined words elsewhere in the app link here.`}
      />
      <GlossaryList terms={kd.glossary} />
    </Page>
  );
}
