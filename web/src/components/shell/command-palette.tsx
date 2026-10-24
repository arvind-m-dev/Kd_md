"use client";

import { Bookmark, BookOpenText, Clock, Hash, Highlighter, ListChecks, MessageCircleQuestion, Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { createContext, useCallback, useContext, useEffect, useState } from "react";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { StatusDot } from "@/components/kd/status";
import { useLibrary } from "@/lib/library";
import { NAV } from "./nav";

interface RuleLite {
  id: string;
  text: string;
  status: "clear" | "needs-clarity";
}
interface Index {
  rules: RuleLite[];
  groups: { id: string; title: string }[];
}

const PaletteContext = createContext<() => void>(() => {});
export const useOpenPalette = () => useContext(PaletteContext);

let indexPromise: Promise<Index> | null = null;
const loadIndex = () => (indexPromise ??= fetch("/api/rules-index").then((r) => r.json()));

export function CommandPaletteProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [index, setIndex] = useState<Index | null>(null);
  const lib = useLibrary();

  const openPalette = useCallback(() => setOpen(true), []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (open && !index) loadIndex().then(setIndex);
  }, [open, index]);

  const q = query.trim().toLowerCase();
  const pages = NAV.filter((n) => !q || `${n.label} ${n.hint}`.toLowerCase().includes(q));
  const groups = (index?.groups ?? []).filter((g) => !q || `${g.id} ${g.title}`.toLowerCase().includes(q)).slice(0, q ? 11 : 4);
  const rules = (() => {
    if (!index || q.length < 2) return [];
    const words = q.split(/\s+/);
    const byId = index.rules.filter((r) => r.id.toLowerCase().includes(q));
    const byText = index.rules.filter((r) => !byId.includes(r) && words.every((w) => r.text.toLowerCase().includes(w)));
    return [...byId, ...byText].slice(0, 25);
  })();

  // Your own things first: bookmarks and highlights that match, or recent reading when nothing is typed.
  const saved = q
    ? [
        ...lib.bookmarks.filter((b) => `${b.title} ${b.subtitle}`.toLowerCase().includes(q)).map((b) => ({ key: b.key, href: b.href, title: b.title, hint: b.subtitle, icon: Bookmark })),
        ...lib.highlights
          .filter((h) => `${h.exact} ${h.note}`.toLowerCase().includes(q))
          .map((h) => ({ key: h.id, href: `${h.href}#hl-${h.id}`, title: h.exact.replace(/\s+/g, " ").slice(0, 90), hint: h.note || h.scopeTitle, icon: Highlighter })),
      ].slice(0, 6)
    : lib.recents.slice(0, 3).map((r) => ({ key: r.href, href: `${r.href}?resume`, title: r.title, hint: `${Math.round(r.progress * 100)}% read`, icon: Clock }));

  const go = (href: string) => {
    setOpen(false);
    setQuery("");
    router.push(href);
  };

  return (
    <PaletteContext.Provider value={openPalette}>
      {children}
      <CommandDialog open={open} onOpenChange={setOpen} title="Search" description="Jump to a page, group or rule, or ask a question">
        <Command shouldFilter={false}>
          <CommandInput value={query} onValueChange={setQuery} placeholder="Search rules, pages, or type a question…" />
          <CommandList className="max-h-[60vh]">
            <CommandEmpty>Nothing found. Press Enter on “Ask” to ask instead.</CommandEmpty>
            {q && (
              <CommandGroup heading="Ask or search">
                <CommandItem value="ask" onSelect={() => go(`/ask?q=${encodeURIComponent(query.trim())}`)}>
                  <MessageCircleQuestion />
                  <span className="truncate">Ask: “{query.trim()}”</span>
                </CommandItem>
                <CommandItem value="search-rules" onSelect={() => go(`/rules?q=${encodeURIComponent(query.trim())}`)}>
                  <Search />
                  <span className="truncate">Find rules matching “{query.trim()}”</span>
                </CommandItem>
              </CommandGroup>
            )}
            {saved.length > 0 && (
              <CommandGroup heading={q ? "Your library" : "Continue reading"}>
                {saved.map((x) => (
                  <CommandItem key={x.key} value={`lib-${x.key}`} onSelect={() => go(x.href)}>
                    <x.icon />
                    <span className="truncate">{x.title}</span>
                    <span className="truncate text-muted-foreground">{x.hint}</span>
                  </CommandItem>
                ))}
              </CommandGroup>
            )}
            {rules.length > 0 && (
              <CommandGroup heading="Rules">
                {rules.map((r) => (
                  <CommandItem key={r.id} value={r.id} onSelect={() => go(`/rules/${r.id}`)}>
                    <StatusDot status={r.status} />
                    <span className="shrink-0 font-mono text-xs">{r.id}</span>
                    <span className="truncate text-muted-foreground">{r.text}</span>
                  </CommandItem>
                ))}
              </CommandGroup>
            )}
            {pages.length > 0 && (
              <CommandGroup heading="Pages">
                {pages.map((n) => (
                  <CommandItem key={n.href} value={n.href} onSelect={() => go(n.href)}>
                    <n.icon />
                    <span>{n.label}</span>
                    <span className="truncate text-muted-foreground">{n.hint}</span>
                  </CommandItem>
                ))}
              </CommandGroup>
            )}
            {groups.length > 0 && (
              <CommandGroup heading="Groups">
                {groups.map((g) => (
                  <CommandItem key={g.id} value={`group-${g.id}`} onSelect={() => go(`/read/${g.id}`)}>
                    <BookOpenText />
                    <span className="truncate">
                      {g.id} — {g.title}
                    </span>
                  </CommandItem>
                ))}
              </CommandGroup>
            )}
            {!q && (
              <CommandGroup heading="Tips">
                <CommandItem value="tip-id" disabled>
                  <Hash />
                  <span className="text-muted-foreground">Type a rule ID like BR-REL-001, or words from a rule</span>
                </CommandItem>
                <CommandItem value="tip-rules" onSelect={() => go("/rules")}>
                  <ListChecks />
                  <span>Browse all rules</span>
                </CommandItem>
              </CommandGroup>
            )}
          </CommandList>
        </Command>
      </CommandDialog>
    </PaletteContext.Provider>
  );
}
