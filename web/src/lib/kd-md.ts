// The raw KD Markdown (content/kd.md) and line-range helpers. Server-side only.
import "server-only";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { kd } from "@/lib/kd";

export const kdMd = readFileSync(join(process.cwd(), "content", "kd.md"), "utf8");
export const kdLines = kdMd.split("\n");

/** Lines start..end, 1-based and inclusive. */
export const lineRange = (start: number, end: number) => kdLines.slice(start - 1, end).join("\n");

const h2 = (prefix: string) => kd.outline.find((o) => o.level === 2 && o.title.startsWith(prefix))!;

/** The conflicts / decisions / placeholders / glossary chapter, verbatim. */
export const conflictsChapter = (() => {
  const h = h2("Cross-document conflicts");
  return lineRange(h.line, h.endLine).trim();
})();

/** The file's opening chapters (what it is, scope, ID prefixes): context for any excerpt. */
export const preamble = lineRange(1, h2("Contents").line - 1).trim();
