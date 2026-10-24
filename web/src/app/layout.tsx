import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Literata, Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import { GlossaryProvider } from "@/components/kd/glossary-text";
import { Providers } from "@/components/providers";
import { AppShell } from "@/components/shell/app-shell";
import { glossaryAliases } from "@/lib/glossary-terms";
import { SCOPE_SCRIPT } from "@/lib/scope";
import "./globals.css";

const body = Plus_Jakarta_Sans({ variable: "--font-body", subsets: ["latin"] });
const display = Space_Grotesk({ variable: "--font-display", subsets: ["latin"] });
const code = JetBrains_Mono({ variable: "--font-code", subsets: ["latin"] });
// Optional serif for long reading (reader "Text" menu).
const book = Literata({ variable: "--font-book", subsets: ["latin"] });

export const metadata: Metadata = {
  title: { default: "Keydemand Rules", template: "%s · Keydemand Rules" },
  description: "Keydemand V2 Phase 1 business rules: search, read and ask in plain words.",
  alternates: { types: { "text/markdown": "/llms.txt" } },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fcfcfe" },
    { media: "(prefers-color-scheme: dark)", color: "#14151c" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" suppressHydrationWarning className={`${body.variable} ${display.variable} ${code.variable} ${book.variable} h-full antialiased`}>
      <head>
        {/* Working notes switch: apply the saved choice before paint (lib/scope.ts). */}
        <script dangerouslySetInnerHTML={{ __html: SCOPE_SCRIPT }} />
      </head>
      <body className="min-h-full">
        <Providers>
          <GlossaryProvider aliases={glossaryAliases}>
            <AppShell>{children}</AppShell>
          </GlossaryProvider>
        </Providers>
      </body>
    </html>
  );
}
