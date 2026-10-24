// "My library": bookmarks, highlights with notes, saved answers and reading history.
// Kept in this browser (localStorage), synced across tabs, with JSON export/import for backup or moving devices.
"use client";

import { useSyncExternalStore } from "react";

export type BookmarkKind = "doc" | "group" | "section" | "rule" | "answer";
export type HighlightColor = "yellow" | "green" | "blue" | "pink" | "orange";
export const HIGHLIGHT_COLORS: HighlightColor[] = ["yellow", "green", "pink", "blue", "orange"];

export interface SavedAnswer {
  question: string;
  answer: string;
  status: "clear" | "needs-clarity";
  note: string;
  sources: { label: string; title: string; where: string; href: string }[];
}

export interface Bookmark {
  /** Unique per thing, e.g. "rule:BR-REL-001" or "section:/read/07/07-1#scoring". */
  key: string;
  kind: BookmarkKind;
  title: string;
  subtitle: string;
  href: string;
  createdAt: number;
  answer?: SavedAnswer;
}

export interface Highlight {
  id: string;
  /** Which text it belongs to, e.g. "doc:07-1" or "rule:BR-REL-001". */
  scope: string;
  scopeTitle: string;
  /** The page it was made on. */
  href: string;
  /** The highlighted text and a little text either side, to find it again (text-quote anchoring). */
  exact: string;
  prefix: string;
  suffix: string;
  color: HighlightColor;
  note: string;
  createdAt: number;
  updatedAt: number;
}

export interface Recent {
  href: string;
  title: string;
  subtitle: string;
  at: number;
  /** How far down the page, 0–1. */
  progress: number;
}

export interface Library {
  version: 1;
  bookmarks: Bookmark[];
  highlights: Highlight[];
  recents: Recent[];
}

const KEY = "kd-library-v1";
const MAX_RECENTS = 12;
const EMPTY: Library = { version: 1, bookmarks: [], highlights: [], recents: [] };

let state: Library = EMPTY;
let loaded = false;
const listeners = new Set<() => void>();

function read(): Library {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return EMPTY;
    const v = JSON.parse(raw) as Partial<Library>;
    return {
      version: 1,
      bookmarks: Array.isArray(v.bookmarks) ? v.bookmarks : [],
      highlights: Array.isArray(v.highlights) ? v.highlights : [],
      recents: Array.isArray(v.recents) ? v.recents : [],
    };
  } catch {
    return EMPTY;
  }
}

function ensureLoaded() {
  if (loaded || typeof window === "undefined") return;
  loaded = true;
  state = read();
  // Another tab changed the library.
  window.addEventListener("storage", (e) => {
    if (e.key !== KEY) return;
    state = read();
    listeners.forEach((l) => l());
  });
}

function commit(next: Library) {
  state = next;
  try {
    localStorage.setItem(KEY, JSON.stringify(next));
  } catch {
    /* storage full or blocked: changes last until the page closes */
  }
  listeners.forEach((l) => l());
}

const update = (fn: (s: Library) => Partial<Library>) => {
  ensureLoaded();
  commit({ ...state, ...fn(state) });
};

function subscribe(cb: () => void) {
  ensureLoaded();
  listeners.add(cb);
  return () => listeners.delete(cb);
}

const getSnapshot = () => {
  ensureLoaded();
  return state;
};

/** The whole library; re-renders on any change (also from other tabs). Empty during server rendering. */
export function useLibrary(): Library {
  return useSyncExternalStore(subscribe, getSnapshot, () => EMPTY);
}

export const newId = () => (crypto.randomUUID?.() ?? `${Date.now()}-${Math.random()}`).slice(0, 12);

// ── Bookmarks ──

export const isBookmarked = (lib: Library, key: string) => lib.bookmarks.some((b) => b.key === key);

export function toggleBookmark(b: Omit<Bookmark, "createdAt">): boolean {
  let added = false;
  update((s) => {
    if (s.bookmarks.some((x) => x.key === b.key)) return { bookmarks: s.bookmarks.filter((x) => x.key !== b.key) };
    added = true;
    return { bookmarks: [{ ...b, createdAt: Date.now() }, ...s.bookmarks] };
  });
  return added;
}

export const removeBookmark = (key: string) => update((s) => ({ bookmarks: s.bookmarks.filter((b) => b.key !== key) }));

// ── Highlights ──

export function addHighlight(h: Omit<Highlight, "id" | "createdAt" | "updatedAt">): Highlight {
  const now = Date.now();
  const full: Highlight = { ...h, id: newId(), createdAt: now, updatedAt: now };
  update((s) => ({ highlights: [full, ...s.highlights] }));
  return full;
}

export const updateHighlight = (id: string, patch: Partial<Pick<Highlight, "color" | "note">>) =>
  update((s) => ({ highlights: s.highlights.map((h) => (h.id === id ? { ...h, ...patch, updatedAt: Date.now() } : h)) }));

export const removeHighlight = (id: string) => update((s) => ({ highlights: s.highlights.filter((h) => h.id !== id) }));

// ── Reading history ──

export function touchRecent(r: Omit<Recent, "at" | "progress"> & { progress?: number }) {
  update((s) => {
    const prev = s.recents.find((x) => x.href === r.href);
    const entry: Recent = { ...r, progress: r.progress ?? prev?.progress ?? 0, at: Date.now() };
    return { recents: [entry, ...s.recents.filter((x) => x.href !== r.href)].slice(0, MAX_RECENTS) };
  });
}

export const clearRecents = () => update(() => ({ recents: [] }));

// ── Backup ──

export function exportJson(): string {
  ensureLoaded();
  return JSON.stringify({ ...state, exportedAt: new Date().toISOString() }, null, 2);
}

/** Merges a backup into the library (nothing is lost); returns how many items were new. */
export function importJson(text: string): number {
  const v = JSON.parse(text) as Partial<Library>;
  if (!v || typeof v !== "object" || (!Array.isArray(v.bookmarks) && !Array.isArray(v.highlights))) {
    throw new Error("This file isn't a Keydemand library backup.");
  }
  let added = 0;
  update((s) => {
    const keys = new Set(s.bookmarks.map((b) => b.key));
    const ids = new Set(s.highlights.map((h) => h.id));
    const bookmarks = (v.bookmarks ?? []).filter((b) => b?.key && b.href && !keys.has(b.key));
    const highlights = (v.highlights ?? []).filter((h) => h?.id && h.scope && h.exact && !ids.has(h.id));
    added = bookmarks.length + highlights.length;
    return { bookmarks: [...s.bookmarks, ...bookmarks], highlights: [...s.highlights, ...highlights] };
  });
  return added;
}

export const clearLibrary = () => update(() => ({ bookmarks: [], highlights: [], recents: [] }));

/** Highlights and notes as Markdown, grouped by page: for pasting into a doc or email. */
export function notesMarkdown(lib: Library, origin: string): string {
  const byScope = new Map<string, Highlight[]>();
  for (const h of lib.highlights) byScope.set(h.scope, [...(byScope.get(h.scope) ?? []), h]);
  const out = ["# My Keydemand notes", ""];
  for (const list of byScope.values()) {
    out.push(`## ${list[0].scopeTitle}`, "", `${origin}${list[0].href}`, "");
    for (const h of list) {
      out.push(`> ${h.exact.replace(/\s+/g, " ").trim()}`, "");
      if (h.note) out.push(h.note, "");
      out.push(`[Open](${origin}${h.href}#hl-${h.id})`, "");
    }
  }
  if (lib.bookmarks.length) {
    out.push("## Bookmarks", "", ...lib.bookmarks.map((b) => `- [${b.title}](${origin}${b.href})${b.subtitle ? ` — ${b.subtitle}` : ""}`), "");
  }
  return out.join("\n");
}

export function downloadFile(name: string, body: string, type: string) {
  const url = URL.createObjectURL(new Blob([body], { type }));
  const a = Object.assign(document.createElement("a"), { href: url, download: name });
  a.click();
  URL.revokeObjectURL(url);
}
