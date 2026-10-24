// Which words in rule text get a glossary pop-over. Acronyms and multi-word terms only:
// single everyday words ("Property", "Agent") would light up every sentence.
import "server-only";
import { kd } from "@/lib/kd";

export interface GlossaryAlias {
  alias: string;
  term: string;
  meaning: string;
  caseSensitive: boolean;
}

const SPECIFIC_WORDS = new Set(["Relevancy", "Microsite", "Bundle", "Keyproperty"]);
const SKIP = new Set(["Keydemand V2 Phase 1"]);
// Glossary meanings cite their sources as "(G05 BR-MS-001)"; pop-overs show the meaning only.
const plainMeaning = (m: string) => m.replace(/\s*\((?:G\d{2}|cite)[^)]*\)/g, "").replace(/\*\*/g, "").trim();

export const glossaryAliases: GlossaryAlias[] = (() => {
  const out: GlossaryAlias[] = [];
  for (const g of kd.glossary) {
    if (SKIP.has(g.term)) continue;
    const inner = [...g.term.matchAll(/\(([^)]+)\)/g)].map((m) => m[1]);
    const parts = g.term.replace(/\([^)]*\)/g, "").split(/\s+\/\s+|\s+vs\s+/).map((s) => s.trim());
    for (const alias of [...parts, ...inner]) {
      if (!alias) continue;
      const acronym = /^[A-Z][A-Z0-9&]{1,6}$/.test(alias);
      const multi = alias.split(/\s+/).length >= 2 && alias.length >= 6;
      if (acronym || multi || SPECIFIC_WORDS.has(alias)) {
        out.push({ alias, term: g.term, meaning: plainMeaning(g.meaning), caseSensitive: acronym });
      }
    }
  }
  // Longest first, so "Managed Space Tenant" wins over "Space Tenant"-like overlaps.
  return out.sort((a, b) => b.alias.length - a.alias.length);
})();
