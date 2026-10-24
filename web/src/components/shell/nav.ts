import {
  BookA,
  Bookmark,
  ListTree,
  FileStack,
  LayoutDashboard,
  ListChecks,
  MessageCircleQuestion,
  Plug,
  Scale,
  type LucideIcon,
} from "lucide-react";
import { EXTRA_PAGES } from "@/lib/scope";

export interface NavItem {
  href: string;
  label: string;
  hint: string;
  icon: LucideIcon;
  /** Shown in the phone bottom bar; the rest sit under "More". */
  primary?: boolean;
  /** A working-notes page (lib/scope.ts): listed only while working notes are shown. */
  extra?: boolean;
}

export const NAV: NavItem[] = [
  { href: "/", label: "Dashboard", hint: "Overview and numbers", icon: LayoutDashboard, primary: true },
  { href: "/ask", label: "Ask", hint: "Ask a question in plain words", icon: MessageCircleQuestion, primary: true },
  { href: "/read", label: "Index", hint: "Every topic, document and section", icon: ListTree, primary: true },
  { href: "/library", label: "Library", hint: "Your bookmarks, highlights and notes", icon: Bookmark, primary: true },
  { href: "/rules", label: "Rules", hint: "Browse and filter every rule", icon: ListChecks },
  { href: "/conflicts", label: "Open questions", hint: "Decisions, conflicts, missing values", icon: Scale },
  { href: "/glossary", label: "Glossary", hint: "What the terms mean", icon: BookA },
  { href: "/sources", label: "Sources", hint: "Every Google Drive document", icon: FileStack },
  { href: "/connect", label: "Connect AI", hint: "Use these rules from any AI tool", icon: Plug },
].map((n) => ({ ...n, extra: EXTRA_PAGES.has(n.href) }));

export const isActive = (pathname: string, href: string) =>
  href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");
