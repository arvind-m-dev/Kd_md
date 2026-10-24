"use client";

import { MotionConfig } from "motion/react";
import { ThemeProvider } from "next-themes";
import { TooltipProvider } from "@/components/ui/tooltip";
import { THEMES } from "@/lib/themes";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem themes={THEMES.map((t) => t.id)} disableTransitionOnChange>
      {/* Animations switch off when the system asks for reduced motion. */}
      <MotionConfig reducedMotion="user">
        <TooltipProvider>{children}</TooltipProvider>
      </MotionConfig>
    </ThemeProvider>
  );
}
