// Finding text again in rendered pages: for highlights (saved as quote + context) and for "jump to this
// passage" links from Ask. Matching ignores whitespace, so table cells and line breaks don't break it.

const CONTEXT = 32;

/** The text nodes under `root`, in order, with each one's start offset in the combined text. */
function textNodes(root: Element) {
  const nodes: { node: Text; start: number }[] = [];
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  let pos = 0;
  for (let n = walker.nextNode(); n; n = walker.nextNode()) {
    const t = n as Text;
    nodes.push({ node: t, start: pos });
    pos += t.data.length;
  }
  return { nodes, text: nodes.map((n) => n.node.data).join("") };
}

/** The text with whitespace removed, and for each kept character its offset in the original. */
function squeeze(text: string) {
  let out = "";
  const map: number[] = [];
  for (let i = 0; i < text.length; i++) {
    if (/\s/.test(text[i])) continue;
    out += text[i];
    map.push(i);
  }
  return { out, map };
}

const squeezed = (s: string) => s.replace(/\s+/g, "");

/** Where a selection sits in `root`'s text, with context either side; null if it is outside `root`. */
export function quoteFromRange(root: Element, range: Range) {
  if (!root.contains(range.commonAncestorContainer)) return null;
  const before = document.createRange();
  before.setStart(root, 0);
  before.setEnd(range.startContainer, range.startOffset);
  const start = before.toString().length;
  const { text } = textNodes(root);
  const end = start + range.toString().length;
  const exact = text.slice(start, end);
  if (!exact.trim()) return null;
  return { exact, prefix: text.slice(Math.max(0, start - CONTEXT), start), suffix: text.slice(end, end + CONTEXT) };
}

/**
 * Finds `exact` in `root` (whitespace-insensitive). When it occurs more than once, the occurrence whose
 * surrounding text best matches `prefix`/`suffix` wins. Returns original-text offsets.
 */
export function findQuote(root: Element, exact: string, prefix = "", suffix = "") {
  const { text } = textNodes(root);
  const hay = squeeze(text);
  const needle = squeezed(exact);
  if (!needle) return null;
  const pre = squeezed(prefix);
  const suf = squeezed(suffix);
  let best = -1;
  let bestScore = -1;
  for (let i = hay.out.indexOf(needle); i !== -1; i = hay.out.indexOf(needle, i + 1)) {
    let score = 0;
    while (score < pre.length && hay.out[i - 1 - score] === pre[pre.length - 1 - score]) score++;
    let s2 = 0;
    while (s2 < suf.length && hay.out[i + needle.length + s2] === suf[s2]) s2++;
    if (score + s2 > bestScore) {
      best = i;
      bestScore = score + s2;
    }
  }
  if (best < 0) return null;
  return { start: hay.map[best], end: hay.map[best + needle.length - 1] + 1 };
}

/** Wraps text offsets [start, end) of `root` in elements made by `make` (one per text node it spans). */
export function wrapRange(root: Element, start: number, end: number, make: () => HTMLElement): HTMLElement[] {
  const { nodes } = textNodes(root);
  const made: HTMLElement[] = [];
  for (const { node, start: s } of nodes) {
    const e = s + node.data.length;
    if (e <= start || s >= end) continue;
    // Whitespace-only nodes between table cells or list items would break the markup if wrapped.
    if (!node.data.trim()) continue;
    let target = node;
    const from = Math.max(0, start - s);
    const to = Math.min(node.data.length, end - s);
    if (to < target.data.length) target.splitText(to);
    if (from > 0) target = target.splitText(from);
    const el = make();
    target.parentNode!.insertBefore(el, target);
    el.appendChild(target);
    made.push(el);
  }
  return made;
}

/** Removes wrappers made by wrapRange, putting their text back. */
export function unwrapAll(root: Element, selector: string) {
  const parents = new Set<Node>();
  root.querySelectorAll(selector).forEach((el) => {
    const parent = el.parentNode;
    if (!parent) return;
    while (el.firstChild) parent.insertBefore(el.firstChild, el);
    parent.removeChild(el);
    parents.add(parent);
  });
  parents.forEach((p) => p.normalize());
}

/** Scrolls to a passage in `root` and flashes it for a few seconds. Returns false if it isn't there. */
export function flashText(root: Element, phrase: string): boolean {
  const hit = findQuote(root, phrase);
  if (!hit) return false;
  const marks = wrapRange(root, hit.start, hit.end, () => Object.assign(document.createElement("mark"), { className: "kd-flash" }));
  if (!marks.length) return false;
  marks[0].scrollIntoView({ behavior: "smooth", block: "center" });
  setTimeout(() => unwrapAll(root, "mark.kd-flash"), 4500);
  return true;
}
