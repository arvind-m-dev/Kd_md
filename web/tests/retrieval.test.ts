// Retrieval against the real knowledge base (src/generated, built from KEYDEMAND_V2_BUSINESS_RULES.md).
import { describe, expect, test } from "vitest";
import { analyzeQuestion } from "@/lib/answer/intent";
import { retrieve } from "@/lib/answer/retrieve";
import { kd } from "@/lib/kd";
import { lineRange } from "@/lib/kd-md";
import { isExtraPassage } from "@/lib/scope";
import { passages } from "@/lib/search";

const core = (p: (typeof passages)[number]) => !isExtraPassage(p);
const run = (q: string, prev?: string) => {
  const a = analyzeQuestion(q, prev);
  return { a, r: retrieve(a, { keep: core, pinned: [], previous: prev }) };
};
const text = (ids: number[]) => ids.map((i) => passages[i].text).join("\n");

describe("requirements retrieval", () => {
  const { r } = run("What are all the product requirements for Office property lease?");

  test("finds every Office Property Lease form (Agent and Keydemand, both sheet versions) and no Sale forms", () => {
    const titles = r.sections.map((s) => s.title);
    expect(titles.filter((t) => /Office Property Lease \(Agent\)/.test(t)).length).toBe(2);
    expect(titles.filter((t) => /Office Property Lease \(Keydemand\)/.test(t)).length).toBe(2);
    expect(titles.some((t) => /\bsale\b/i.test(t))).toBe(false);
  });

  test("includes each matched form whole, not a sample", () => {
    for (const s of r.sections) expect(s.included, s.title).toBe(s.total);
    expect(r.omitted.sections).toBe(0);
  });

  test("every field row of the Oct 2 Agent form is in the retrieved text", () => {
    const form = kd.outline.find((h) => /Columns AS–BB: Uploading Office Property Lease \(Agent\)/.test(h.title))!;
    const rows = lineRange(form.line, form.endLine)
      .split("\n")
      .filter((l) => /^\| \d+ \| (Yes|No) \| \d+ \|/.test(l)); // field rows: "| 13 | Yes | 8 | 7 | Carpet Area (sq. ft.)* | …"
    expect(rows.length).toBeGreaterThan(20);
    const got = text(r.ids);
    for (const row of rows) expect(got, row).toContain(row.split("|")[5].trim());
  });
});

test("Office Building — Lease resolves to Office property forms and Developer project forms", () => {
  const { a, r } = run("What are all the product requirements for Office Building — Lease?");
  expect(a.notes.join(" ")).toMatch(/Project Type/);
  const titles = r.sections.map((s) => s.title).join("\n");
  expect(titles).toMatch(/Office Property Lease/);
  expect(titles).toMatch(/Developer Project/);
  expect(titles).not.toMatch(/Retail|F&B/);
  expect(text(r.ids)).toMatch(/Office Building/);
});

test("comparison retrieves both sides", () => {
  const { r } = run("Compare Office Property Lease with Office Property Sale");
  expect(r.sections.some((s) => s.side === 0 && /Lease/.test(s.title))).toBe(true);
  expect(r.sections.some((s) => s.side === 1 && /Sale/.test(s.title))).toBe(true);
});

test("role question retrieves the role catalogue and permission passages that name the role", () => {
  const { r } = run("What's the role of an agent?");
  expect(r.sections.length).toBeGreaterThan(0);
  const t = text(r.ids);
  expect(t).toMatch(/agent/i);
  expect(r.sections.some((s) => /permission|access|role/i.test(s.title))).toBe(true);
});

test("workflow question retrieves the agent journey, not field sheets", () => {
  const { r } = run("How does an agent submit a property?");
  const titles = r.sections.map((s) => s.title);
  expect(titles.some((t) => /Property Management|Agent Flow|Journey/i.test(t))).toBe(true);
  expect(titles.some((t) => /Input Fields|Uploading/.test(t))).toBe(false);
});

test("working notes stay out when the switch is off", () => {
  const { r } = run("What are the product requirements for Office property lease?");
  expect(r.ids.every((i) => core(passages[i]))).toBe(true);
});

test("retrieval stays within the character budget", () => {
  const { r } = run("Compare Office Property Lease with Office Property Sale");
  expect(text(r.ids).length).toBeLessThanOrEqual(60_000 + 2_000);
});
