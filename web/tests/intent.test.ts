import { describe, expect, test } from "vitest";
import { analyzeQuestion, extractScope } from "@/lib/answer/intent";

describe("question intent", () => {
  test.each([
    ["What's the role of an agent?", "explain"],
    ["What are all the product requirements for Office Building — Lease?", "requirements"],
    ["Which fields are mandatory for an F&B property sale?", "requirements"],
    ["How does an agent submit a property?", "workflow"],
    ["Compare Office Property Lease with Office Property Sale", "compare"],
    ["What is the difference between an agent and a tenant?", "compare"],
    ["Explain BR-REL-001", "field"],
  ])("%s → %s", (q, intent) => {
    expect(analyzeQuestion(q).intent).toBe(intent);
  });
});

describe("scope", () => {
  test("keeps the corpus terms apart: Office Building is a project type, not the Office asset class", () => {
    const s = extractScope("What are all the product requirements for Office Building — Lease?");
    expect(s.projectType).toEqual(["Office Building"]);
    expect(s.assetClass).toBeUndefined();
    expect(s.transaction).toEqual(["Lease"]);
  });
  test("Lease, Sale, Buy and Rent stay distinct", () => {
    expect(extractScope("office rent").transaction).toEqual(["Rent"]);
    expect(extractScope("office lease or sale").transaction).toEqual(["Lease", "Sale"]);
  });
  test("Office Tenant is a role, not the Office asset class", () => {
    const s = extractScope("How does an office tenant post a demand?");
    expect(s.role).toEqual(["Office Tenant"]);
    expect(s.assetClass).toBeUndefined();
    expect(s.listing).toEqual(["Demand"]);
  });
  test("comparison sides share the words they have in common", () => {
    const a = analyzeQuestion("Compare Office Building — Lease with Office Building — Sale");
    expect(a.sides.map((s) => s.transaction)).toEqual([["Lease"], ["Sale"]]);
    expect(a.sides.map((s) => s.projectType)).toEqual([["Office Building"], ["Office Building"]]);
  });
});

describe("follow-ups keep their topic", () => {
  test("a scope-less follow-up inherits the previous scope", () => {
    const a = analyzeQuestion("Show all mandatory fields", "What are the requirements for Office property lease?");
    expect(a.intent).toBe("requirements");
    expect(a.scope).toMatchObject({ assetClass: ["Office"], transaction: ["Lease"], listing: ["Property"] });
    expect(a.inherited.sort()).toEqual(["assetClass", "listing", "transaction"]);
  });
  test("a follow-up that names a new transaction keeps the rest", () => {
    const a = analyzeQuestion("And the same for sale?", "What are the requirements for Office property lease?");
    expect(a.scope.transaction).toEqual(["Sale"]);
    expect(a.scope.assetClass).toEqual(["Office"]);
  });
  test("a new topic does not inherit", () => {
    const a = analyzeQuestion("What's the role of an agent?", "What are the requirements for Office property lease?");
    expect(a.scope).toEqual({ role: ["Agent"] });
  });
});
