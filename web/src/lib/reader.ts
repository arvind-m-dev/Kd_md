// Markdown slices for the Reader: one document, or a group's own notes (without its documents).
import "server-only";
import GithubSlugger from "github-slugger";
import { getGroup, kd } from "@/lib/kd";
import { lineRange } from "@/lib/kd-md";

export interface TocEntry {
  level: number;
  title: string;
  slug: string;
}

const headingAt = (line: number) => kd.outline.find((h) => h.line === line)!;

export function docMarkdown(docId: string): string | null {
  const doc = kd.docs.find((d) => d.id === docId);
  if (!doc) return null;
  const h = headingAt(doc.line);
  // Drop the "### Title [STATUS]" line: the page header shows it.
  return lineRange(h.line + 1, h.endLine).trim();
}

/** The group chapter minus its document sections: the documents table, conventions and group-level notes. */
export function groupNotesMarkdown(groupId: string): string | null {
  const g = getGroup(groupId);
  if (!g) return null;
  const docRanges = kd.docs.filter((d) => d.group === groupId).map((d) => [d.line, headingAt(d.line).endLine]);
  const out: string[] = [];
  for (let n = g.line + 1; n <= g.endLine; n++) {
    const range = docRanges.find(([s, e]) => n >= s && n <= e);
    if (range) {
      n = range[1];
      continue;
    }
    out.push(lineRange(n, n));
  }
  return out.join("\n").replace(/\n{3,}/g, "\n\n").trim();
}

/** Headings in a Markdown slice, with the same ids rehype-slug gives them. */
export function toc(md: string, maxLevel = 5): TocEntry[] {
  const slugger = new GithubSlugger();
  const out: TocEntry[] = [];
  let fence = false;
  for (const line of md.split("\n")) {
    if (line.startsWith("```")) fence = !fence;
    const m = !fence && line.match(/^(#{1,6}) (.+)$/);
    if (!m) continue;
    const title = m[2].replace(/\*\*|__|`/g, "").replace(/\[([^\]]*)\]\([^)]*\)/g, "$1").trim();
    const slug = slugger.slug(title);
    if (m[1].length <= maxLevel) out.push({ level: m[1].length, title, slug });
  }
  return out;
}
