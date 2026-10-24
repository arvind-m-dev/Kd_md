import {
  BookOpenText,
  BookA,
  FileStack,
  LayoutDashboard,
  ListChecks,
  MessageCircleQuestion,
  Plug,
  Scale,
  type LucideIcon,
} from "lucide-react";

export interface NavItem {
  href: string;
  label: string;
  hint: string;
  icon: LucideIcon;
  /** Shown in the phone bottom bar; the rest sit under "More". */
  primary?: boolean;
}

export const NAV: NavItem[] = [
  { href: "/", label: "Dashboard", hint: "Overview and numbers", icon: LayoutDashboard, primary: true },
  { href: "/ask", label: "Ask", hint: "Ask a question in plain words", icon: MessageCircleQuestion, primary: true },
  { href: "/rules", label: "Rules", hint: "Browse and filter every rule", icon: ListChecks, primary: true },
  { href: "/read", label: "Read", hint: "Read the source documents", icon: BookOpenText, primary: true },
  { href: "/conflicts", label: "Open questions", hint: "Decisions, conflicts, missing values", icon: Scale },
  { href: "/glossary", label: "Glossary", hint: "What the terms mean", icon: BookA },
  { href: "/sources", label: "Sources", hint: "Every Google Drive document", icon: FileStack },
  { href: "/connect", label: "Connect AI", hint: "Use these rules from any AI tool", icon: Plug },
];

export const isActive = (pathname: string, href: string) =>
  href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");
