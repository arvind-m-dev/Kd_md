"use client";

import { Menu, Search } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Suspense, useState } from "react";
import { Kbd } from "@/components/ui/kbd";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { CommandPaletteProvider, useOpenPalette } from "./command-palette";
import { NAV, isActive } from "./nav";
import { SelectionAsk } from "./selection-ask";
import { ThemeToggle } from "./theme-toggle";

function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2.5 rounded-lg outline-none focus-visible:ring-3 focus-visible:ring-ring/50">
      <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-primary text-sm font-bold tracking-tight text-primary-foreground">
        KD
      </span>
      {!compact && (
        <span className="leading-tight">
          <span className="block text-sm font-semibold">Keydemand Rules</span>
          <span className="block text-xs text-muted-foreground">V2 · Phase 1</span>
        </span>
      )}
    </Link>
  );
}

function SearchButton({ className }: { className?: string }) {
  const open = useOpenPalette();
  return (
    <button
      type="button"
      onClick={open}
      className={cn(
        "flex h-9 items-center gap-2 rounded-lg border bg-background px-3 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none",
        className,
      )}
    >
      <Search className="size-4" />
      <span className="flex-1 text-left">Search rules or ask…</span>
      <Kbd className="hidden sm:inline-flex">⌘K</Kbd>
    </button>
  );
}

/** Desktop: full sidebar with labels (lg+). Tablet: icon rail with tooltips (md). Phone: hidden. */
function Sidebar({ pathname }: { pathname: string }) {
  return (
    <aside className="sticky top-0 hidden h-dvh shrink-0 flex-col border-r bg-sidebar md:flex md:w-16 lg:w-60">
      <div className="flex h-16 items-center px-4 lg:px-5">
        <span className="lg:hidden">
          <Logo compact />
        </span>
        <span className="hidden lg:block">
          <Logo />
        </span>
      </div>
      <nav aria-label="Main" className="flex flex-1 flex-col gap-1 px-2.5 py-2 lg:px-3">
        {NAV.map((n) => {
          const active = isActive(pathname, n.href);
          const link = (
            <Link
              href={n.href}
              aria-current={active ? "page" : undefined}
              className={cn(
                "relative flex h-10 items-center gap-3 rounded-lg px-3 text-sm font-medium text-sidebar-foreground/75 transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                "justify-center lg:justify-start",
                active && "bg-sidebar-accent text-sidebar-accent-foreground",
              )}
            >
              {active && <span className="absolute inset-y-2 left-0 w-1 rounded-r-full bg-sidebar-primary" aria-hidden />}
              <n.icon className="size-[18px] shrink-0" />
              <span className="hidden lg:inline">{n.label}</span>
              <span className="sr-only lg:hidden">{n.label}</span>
            </Link>
          );
          return (
            <Tooltip key={n.href}>
              <TooltipTrigger render={link} />
              <TooltipContent side="right" className="lg:hidden">
                {n.label}
              </TooltipContent>
            </Tooltip>
          );
        })}
      </nav>
      <div className="border-t p-2.5 lg:p-3">
        <span className="lg:hidden">
          <ThemeToggle />
        </span>
        <span className="hidden lg:block">
          <ThemeToggle withLabel />
        </span>
      </div>
    </aside>
  );
}

/** Phone: four main tabs plus "More" (a bottom sheet with the rest). */
function BottomNav({ pathname }: { pathname: string }) {
  const [more, setMore] = useState(false);
  const primary = NAV.filter((n) => n.primary);
  const rest = NAV.filter((n) => !n.primary);
  const moreActive = rest.some((n) => isActive(pathname, n.href));
  const tab = "flex flex-1 flex-col items-center justify-center gap-1 text-[11px] font-medium text-muted-foreground transition-colors";
  return (
    <>
      <nav
        aria-label="Main"
        className="fixed inset-x-0 bottom-0 z-40 flex h-16 border-t bg-background/90 pb-[env(safe-area-inset-bottom)] backdrop-blur-md md:hidden"
      >
        {primary.map((n) => {
          const active = isActive(pathname, n.href);
          return (
            <Link key={n.href} href={n.href} aria-current={active ? "page" : undefined} className={cn(tab, active && "text-primary")}>
              <n.icon className="size-5" />
              {n.label === "Dashboard" ? "Home" : n.label}
            </Link>
          );
        })}
        <button type="button" onClick={() => setMore(true)} className={cn(tab, moreActive && "text-primary")}>
          <Menu className="size-5" />
          More
        </button>
      </nav>
      <Sheet open={more} onOpenChange={setMore}>
        <SheetContent side="bottom" className="rounded-t-2xl pb-[calc(env(safe-area-inset-bottom)+1rem)]">
          <SheetHeader>
            <SheetTitle>More</SheetTitle>
          </SheetHeader>
          <div className="grid gap-1 px-4">
            {rest.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                onClick={() => setMore(false)}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-3 hover:bg-accent",
                  isActive(pathname, n.href) && "bg-accent text-accent-foreground",
                )}
              >
                <n.icon className="size-5 text-muted-foreground" />
                <span>
                  <span className="block text-sm font-medium">{n.label}</span>
                  <span className="block text-xs text-muted-foreground">{n.hint}</span>
                </span>
              </Link>
            ))}
            <div className="mt-2 border-t pt-2">
              <ThemeToggle withLabel />
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}

/**
 * The current path, for highlighting the active nav item. On routes whose URL is only known at request
 * time it streams in, so the nav first renders with nothing highlighted.
 */
function WithPathname({ children }: { children: (pathname: string) => React.ReactNode }) {
  return <Suspense fallback={children("")}><PathnameReader>{children}</PathnameReader></Suspense>;
}

function PathnameReader({ children }: { children: (pathname: string) => React.ReactNode }) {
  return children(usePathname());
}

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <CommandPaletteProvider>
      <a
        href="#main"
        className="sr-only z-50 rounded-md bg-primary px-3 py-2 text-primary-foreground focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Skip to content
      </a>
      <div className="flex min-h-dvh">
        <WithPathname>{(p) => <Sidebar pathname={p} />}</WithPathname>
        <div className="flex min-w-0 flex-1 flex-col">
          <header className="sticky top-0 z-30 flex h-16 items-center gap-3 border-b bg-background/85 px-4 backdrop-blur-md sm:px-6">
            <span className="md:hidden">
              <Logo compact />
            </span>
            <SearchButton className="w-full max-w-md md:ml-0" />
            <span className="ml-auto md:hidden">
              <ThemeToggle />
            </span>
          </header>
          <main id="main" className="flex-1 pb-24 md:pb-10">
            {children}
          </main>
        </div>
      </div>
      <WithPathname>{(p) => <BottomNav pathname={p} />}</WithPathname>
      <SelectionAsk />
    </CommandPaletteProvider>
  );
}
