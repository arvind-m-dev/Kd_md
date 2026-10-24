import type { Metadata } from "next";
import { ConnectLinks } from "@/components/kd/connect-links";
import { McpConnect } from "@/components/kd/mcp-connect";
import { Page, PageHeader } from "@/components/kd/page-header";
import { WorkingNote } from "@/components/kd/working-note";
import { kd } from "@/lib/kd";
import { TOOLS } from "@/lib/kd-tools";

export const metadata: Metadata = { title: "Connect AI" };

export default function ConnectPage() {
  return (
    <WorkingNote>
      <Page>
        <PageHeader
          title="Use these rules from any AI"
          description="Claude, ChatGPT, Cursor and other AI tools can read the rules directly, or use them as tools over MCP. The Markdown views are written for AI: each one says what it is, where it came from, and which rules still need clarity."
        />
        <ConnectLinks groups={kd.groups.map((g) => ({ id: g.id, title: g.title }))} />
        <McpConnect tools={TOOLS.map(({ name, title, description }) => ({ name, title, description }))} />
      </Page>
    </WorkingNote>
  );
}
