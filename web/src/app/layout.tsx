import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GlossaryProvider } from "@/components/kd/glossary-text";
import { Providers } from "@/components/providers";
import { AppShell } from "@/components/shell/app-shell";
import { glossaryAliases } from "@/lib/glossary-terms";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
    <html lang="en" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
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
