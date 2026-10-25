// Understanding a question before retrieval: what kind of answer it needs (intent) and which product
// scope it is about (asset class, transaction type, listing type, role, project type).
//
// Deterministic on purpose: no extra model call, the same question always resolves the same way, and the
// vocabulary below is the corpus's own (headings such as "Uploading Office Property Lease (Agent)",
// "Uploading Retal Lease Demand (For Retail Brand)", Project Type options "IT Parks(IT/ITES), Mixed Use,
// Office Building, Mall, Highstreet"). Terms are never merged: Lease, Sale, Buy and Rent stay distinct, and
// "Office Building" (a Project Type) is not treated as the Office asset class, only noted as related.

export type Intent = "explain" | "requirements" | "workflow" | "compare" | "field" | "general";

export type Dimension = "assetClass" | "transaction" | "listing" | "role" | "projectType";

interface Term {
  value: string;
  /** Matches the term in a question. */
  ask: RegExp;
  /** Matches the term in a heading or passage (the corpus's spelling, typos included). */
  doc: RegExp;
}

export const VOCAB: Record<Dimension, Term[]> = {
  projectType: [
    { value: "Office Building", ask: /\boffice[\s-]+buildings?\b/i, doc: /\boffice building\b/i },
    { value: "IT Parks", ask: /\bit[\s-]*parks?\b|\bit\/ites\b/i, doc: /\bit parks?\b/i },
    { value: "Mixed Use", ask: /\bmixed[\s-]+use\b/i, doc: /\bmixed use\b/i },
    { value: "Mall", ask: /\bmalls?\b/i, doc: /\bmalls?\b/i },
    { value: "Highstreet", ask: /\bhigh[\s-]?streets?\b/i, doc: /\bhigh ?street\b/i },
  ],
  assetClass: [
    { value: "Managed Office", ask: /\bmanaged[\s-]+(office|space)s?\b|\bmanaged\b/i, doc: /\bmanaged (office|space|centre|property)/i },
    { value: "Flex", ask: /\bflex(i| )?(space|lease)?\b/i, doc: /\bflex\b/i },
    { value: "F&B", ask: /\bf\s?&\s?b\b|\bfood\s*(and|&)\s*beverage\b|\bf and b\b/i, doc: /\bf\s?&\s?b\b/i },
    { value: "Retail", ask: /\bretail\b/i, doc: /\bretai?l\b|\bretal\b/i },
    // "Office" alone, not "Office Building" / "Office Tenant" (those are other dimensions).
    { value: "Office", ask: /\boffices?\b(?![\s-]+(building|tenant))/i, doc: /\boffice\b(?! tenant| building)/i },
  ],
  transaction: [
    { value: "Lease", ask: /\bleas(e|es|ing|ed)\b/i, doc: /\blease\b/i },
    { value: "Sale", ask: /\bsales?\b|\bsell(ing)?\b/i, doc: /\bsales?\b/i },
    { value: "Buy", ask: /\bbuy(ing)?\b|\bpurchase\b/i, doc: /\bbuy\b/i },
    { value: "Rent", ask: /\brent(al|ing)?\b/i, doc: /\brent\b/i },
  ],
  listing: [
    { value: "Property", ask: /\bpropert(y|ies)\b|\blistings?\b/i, doc: /\bpropert(y|ies)\b/i },
    { value: "Demand", ask: /\bdemands?\b|\brequirement post/i, doc: /\bdemands?\b/i },
    { value: "Project", ask: /\bprojects?\b/i, doc: /\bprojects?\b/i },
  ],
  role: [
    { value: "Managed Space Operator", ask: /\bmanaged[\s-]+space[\s-]+operators?\b|\boperators?\b/i, doc: /\bmanaged space operator\b/i },
    { value: "Managed Space Occupier", ask: /\bmanaged[\s-]+(space|office)[\s-]+(occupiers?|tenants?)\b/i, doc: /\bmanaged (space|office) (occupier|tenant)/i },
    { value: "Office Tenant", ask: /\boffice[\s-]+tenants?\b|\boccupiers?\b/i, doc: /\boffice tenant\b|\boccupier\b/i },
    { value: "Developer", ask: /\bdevelopers?\b/i, doc: /\bdevelopers?\b/i },
    { value: "Agent", ask: /\bagents?\b|\bbrokers?\b/i, doc: /\bagents?\b/i },
    { value: "Brand", ask: /\bbrands?\b/i, doc: /\bbrands?\b/i },
    { value: "Keydemand team", ask: /\bkeydemand[\s-]+(team|rm)\b|\brelationship managers?\b|\brms?\b/i, doc: /\bkeydemand\b(?! v2)|\brelationship manager\b/i },
    { value: "Admin", ask: /\b(super[\s-]?)?admins?\b|\bcontrol[\s-]+panel\b/i, doc: /\badmin\b|\bcontrol panel\b/i },
  ],
};

export type Scope = Partial<Record<Dimension, string[]>>;

export interface Analysis {
  intent: Intent;
  scope: Scope;
  /** Dimensions copied from the previous question because this one didn't name them ("show the mandatory ones"). */
  inherited: Dimension[];
  /** For comparisons: the scope of each side. */
  sides: Scope[];
  /** Rule IDs named in the question. */
  ruleIds: string[];
  /** Things the answer must state as assumptions (e.g. how a term maps onto the corpus). */
  notes: string[];
  /** The question as searched (with inherited scope words added). */
  searchText: string;
}

const RULE_ID = /\bBR-[A-Z0-9]+-\d+\b/gi;

export function extractScope(text: string): Scope {
  const scope: Scope = {};
  for (const dim of Object.keys(VOCAB) as Dimension[]) {
    const hits = VOCAB[dim].filter((t) => t.ask.test(text)).map((t) => t.value);
    if (hits.length) scope[dim] = hits;
  }
  // "Office Building" is a Project Type; it also contains "office", which must not leak into asset class.
  if (scope.projectType?.includes("Office Building") && scope.assetClass) {
    const rest = text.replace(VOCAB.projectType[0].ask, "");
    if (!VOCAB.assetClass.find((t) => t.value === "Office")!.ask.test(rest)) {
      scope.assetClass = scope.assetClass.filter((v) => v !== "Office");
      if (!scope.assetClass.length) delete scope.assetClass;
    }
  }
  // "Managed Space Operator/Occupier" is a role, not by itself the Managed Office asset class... but it implies it.
  if (scope.role?.includes("Office Tenant") && scope.assetClass?.includes("Office") && /office[\s-]+tenant/i.test(text)) {
    const rest = text.replace(/office[\s-]+tenants?/gi, "");
    if (!/\boffices?\b/i.test(rest)) scope.assetClass = scope.assetClass.filter((v) => v !== "Office");
    if (!scope.assetClass?.length) delete scope.assetClass;
  }
  return scope;
}

const COMPARE = /\b(compare|comparison|compared|difference|differences|differ|versus|vs\.?)\b/i;
const REQUIREMENTS =
  /\b(requirements?|all (the )?fields|fields? (for|of|in|on|when)|input fields|form fields|mandatory|required fields|which fields|what fields|validations?|specs?|specifications|what (do|does) .* (need|fill|enter|provide))\b/i;
const WORKFLOW =
  /\b(how (do|does|can|should|to|is|are)\b.*\b(submit|post|create|register|upload|approve|apply|sign[\s-]?up|onboard|log[\s-]?in|publish|connect|respond|list|add|edit|delete|deactivate|verify|assign|route|escalate|renew|subscribe|work)s?\b|workflow|journey|process|steps?|flow|lifecycle|what happens (when|after|if))\b/i;
const FIELD = /\b(field|attribute|dropdown|drop[\s-]down|option|value|values|allowed|format|limit)\b/i;
const EXPLAIN = /^\s*(what('s| is| are| does)|who|define|explain|meaning|tell me about|describe)\b/i;

export function detectIntent(q: string, scope: Scope, ruleIds: string[]): Intent {
  if (COMPARE.test(q)) return "compare";
  if (REQUIREMENTS.test(q) && !/^\s*(what is|what does|explain)\b.*\bfield\b/i.test(q)) return "requirements";
  if (WORKFLOW.test(q)) return "workflow";
  if (ruleIds.length === 1 || (FIELD.test(q) && /["“”'‘’]|\bfield\b/i.test(q))) return "field";
  if (EXPLAIN.test(q)) return "explain";
  // Short scope-only questions ("office lease property") read best as requirements.
  if (scope.assetClass && scope.transaction && q.split(/\s+/).length <= 6) return "requirements";
  return "general";
}

/** Splits "compare A with B" / "A vs B" / "difference between A and B" into the two sides' text. */
export function compareSides(q: string): [string, string] | null {
  const body = q
    .replace(/^\s*(please\s+)?(compare|what('s| is| are)? the differences? between|difference between|how (does|do)|what differs between)\s*/i, "")
    .replace(/\?+\s*$/, "");
  const parts = body.split(/\s+(?:vs\.?|versus|with|against|and|to)\s+/i);
  if (parts.length < 2) return null;
  return [parts[0], parts.slice(1).join(" ")];
}

export function analyzeQuestion(question: string, previous?: string): Analysis {
  const ruleIds = [...new Set((question.match(RULE_ID) ?? []).map((s) => s.toUpperCase()))];
  const own = extractScope(question);
  const scope: Scope = { ...own };
  const inherited: Dimension[] = [];
  const notes: string[] = [];

  // A follow-up that names no scope at all keeps the previous question's scope.
  // One that names some dimensions keeps the others only if it doesn't change topic entirely.
  if (previous) {
    const prev = extractScope(previous);
    const ownDims = Object.keys(own) as Dimension[];
    const followUp = ownDims.length === 0 || /\b(it|this|that|these|those|them|same|also|other|another|instead|then|there)\b/i.test(question);
    if (followUp) {
      for (const dim of Object.keys(prev) as Dimension[]) {
        if (!scope[dim]) {
          scope[dim] = prev[dim];
          inherited.push(dim);
        }
      }
    }
  }

  let intent = detectIntent(question, scope, ruleIds);
  let sides: Scope[] = [];
  if (intent === "compare") {
    const split = compareSides(question);
    if (split) {
      const a = extractScope(split[0]);
      const b = extractScope(split[1]);
      // Shared words ("Office Building — Lease with … Sale") carry over to the side that lacks them.
      for (const dim of Object.keys(VOCAB) as Dimension[]) {
        if (a[dim] && !b[dim]) b[dim] = a[dim];
        if (b[dim] && !a[dim]) a[dim] = b[dim];
      }
      sides = [a, b];
    }
    if (sides.length < 2) intent = "general";
  }

  if (scope.projectType?.includes("Office Building") && !scope.assetClass) {
    notes.push(
      'In the documents "Office Building" is a Project Type option (IT Parks, Mixed Use, Office Building, Mall, Highstreet) for projects; property forms are organised by asset class ("Office"). Say which of the two the requirements come from.',
    );
  }
  if (scope.transaction?.includes("Rent")) {
    notes.push('The documents mostly say "Lease" (properties: Lease / Sale; demands: Lease / Buy). Only treat "Rent" as "Lease" if a passage does, and say so.');
  }
  if (inherited.length) {
    notes.push(`This is a follow-up: scope (${inherited.map((d) => `${d}: ${scope[d]!.join("/")}`).join("; ")}) was carried over from the previous question "${previous}".`);
  }

  const extra = inherited.flatMap((d) => scope[d] ?? []);
  return { intent, scope, inherited, sides, ruleIds, notes, searchText: [question, ...extra].join(" ") };
}

/** "Office · Lease · Property · Agent" */
export function scopeLabel(scope: Scope): string {
  return (["projectType", "assetClass", "transaction", "listing", "role"] as Dimension[]).flatMap((d) => scope[d] ?? []).join(" · ");
}
