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

/**
 * The text rehype-slug slugs for a heading line: markdown markers removed, but spaces inside them kept
 * ("**Landing Page **" renders as "Landing Page ", whose id is "landing-page-").
 */
const slugText = (raw: string) => raw.replace(/\s+#*\s*$/, "").replace(/<\/?[A-Za-z][^<>@]*>/g, "").replace(/\*\*|__|`/g, "").replace(/(^|[\s([])_(?=\S)|(?<=\S)_(?=[\s)\].,;:]|$)/g, "$1").replace(/\[([^\]]*)\]\([^)]*\)/g, "$1").replace(/\\([\\`*_{}[\]()#+\-.!|])/g, "$1");

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
    const slug = slugger.slug(slugText(m[2]));
    if (m[1].length <= maxLevel) out.push({ level: m[1].length, title, slug });
  }
  return out;
}

const headingTitle = (raw: string) => raw.replace(/\*\*|__|`/g, "").replace(/\[([^\]]*)\]\([^)]*\)/g, "$1").trim();
const slugCache = new Map<string, { line: number; slug: string; title: string }[]>();

/**
 * Every heading inside a document with its kd.md line and the anchor id the reader gives it
 * (same slugging as `toc` and rehype-slug), so a passage can link to the heading above it.
 */
export function docHeadingAnchors(docId: string) {
  const cached = slugCache.get(docId);
  if (cached) return cached;
  const doc = kd.docs.find((d) => d.id === docId);
  const out: { line: number; slug: string; title: string }[] = [];
  if (doc) {
    const h = headingAt(doc.line);
    const slugger = new GithubSlugger();
    let fence = false;
    for (let n = h.line + 1; n <= h.endLine; n++) {
      const line = lineRange(n, n);
      if (line.startsWith("```")) fence = !fence;
      const m = !fence && line.match(/^(#{1,6}) (.+)$/);
      if (!m) continue;
      const title = headingTitle(m[2]);
      out.push({ line: n, slug: slugger.slug(slugText(m[2])), title });
    }
  }
  slugCache.set(docId, out);
  return out;
}

/** The anchor of the nearest heading at or above `line` in a document, if any. */
export function anchorAt(docId: string, line: number) {
  let best: { line: number; slug: string; title: string } | undefined;
  for (const a of docHeadingAnchors(docId)) {
    if (a.line > line) break;
    best = a;
  }
  return best;
}
