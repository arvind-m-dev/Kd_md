// Every passage a citation can point to must open a real place in the app: the reader page renders the
// heading anchor in the link, and the passage text the link asks to flash is on that page.
import { renderToStaticMarkup } from "react-dom/server";
import { expect, test } from "vitest";
import { Markdown } from "@/components/kd/markdown";
import { kd } from "@/lib/kd";
import { docMarkdown } from "@/lib/reader";
import { passages, passageView } from "@/lib/search";

const decode = (s: string) => s.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#x27;|&#39;/g, "'");
// Same matching as the reader's find (lib/text-anchor.ts): whitespace and * _ \ ignored.
const squeeze = (s: string) => s.replace(/[\s*_\\]+/g, "");

test("each passage link resolves to a rendered heading and the passage text", () => {
  let checked = 0;
  const problems: string[] = [];
  for (const doc of kd.docs) {
    const href = `/read/${doc.group}/${doc.id}`;
    const html = renderToStaticMarkup(<Markdown section={{ href, pageTitle: doc.title }}>{docMarkdown(doc.id)!}</Markdown>);
    const ids = new Set([...html.matchAll(/ id="([^"]+)"/g)].map((m) => decode(m[1])));
    const text = squeeze(decode(html.replace(/<[^>]+>/g, "")));
    for (const p of passages.filter((x) => x.doc === doc.id)) {
      const v = passageView(p.id, "P1");
      const url = new URL(v.href, "http://x");
      checked++;
      if (url.pathname !== href) problems.push(`${p.id}: links to ${url.pathname}, not ${href}`);
      const slug = decodeURIComponent(url.hash.slice(1));
      if (slug && !ids.has(slug)) problems.push(`${p.id}: #${slug} is not rendered in ${doc.id}`);
      const find = url.searchParams.get("find");
      // Same fallback as flashText: the whole phrase, then its first 6, then 4 words.
      const words = find?.split(/\s+/) ?? [];
      const found = !find || [words.length, 6, 4].some((n) => text.includes(squeeze(words.slice(0, n).join(" "))));
      if (!found) problems.push(`${p.id}: "${find}" not found on ${doc.id}`);
    }
  }
  expect(checked).toBeGreaterThan(1500);
  // Allow a handful of passages whose text the renderer reshapes (e.g. raw HTML in a cell); report them.
  if (problems.length) console.log(problems.slice(0, 15).join("\n"));
  expect(problems.length / checked).toBeLessThan(0.01);
});

test("passages outside documents link to their open question or the full file", () => {
  for (const p of passages.filter((x) => !x.doc).slice(0, 200)) {
    const href = passageView(p.id, "P1").href;
    expect(href).toMatch(/^\/read\/\d{2}(\?|$)|^\/conflicts#[DCP]-\d{2}$|^\/kd\.md$/);
  }
});
