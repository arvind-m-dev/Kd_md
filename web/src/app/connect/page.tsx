import type { Metadata } from "next";
import { ConnectLinks } from "@/components/kd/connect-links";
import { Page, PageHeader } from "@/components/kd/page-header";
import { kd } from "@/lib/kd";

export const metadata: Metadata = { title: "Connect AI" };

export default function ConnectPage() {
  return (
    <Page>
      <PageHeader
        title="Use these rules from any AI"
        description="Claude, ChatGPT, Cursor and other AI tools can read the rules directly. The Markdown views are written for AI: each one says what it is, where it came from, and which rules still need clarity."
      />
      <ConnectLinks groups={kd.groups.map((g) => ({ id: g.id, title: g.title }))} />
    </Page>
  );
}
