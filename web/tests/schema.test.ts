import { describe, expect, test } from "vitest";
import { answerToMarkdown } from "@/lib/answer/markdown";
import { cleanFollowUps, sectionTexts, validateAnswer, type Block } from "@/lib/answer/schema";

const passages = new Map([
  ["P1", "| 13 | Yes | 8 | 7 | Carpet Area (sq. ft.)* | Number |  |  |  | Number with commas & suffix | Eg 2,500 sft |\n| 23 | Yes | 17 | 14 | Floor | 1 to 5 | 1 to 5, 5 to 10, 10 to 15, Above 15 |  |  | Drop Down | Single select |"],
  ["P2", "- **BR-CR-030** — RERA numbers are optional at the project level."],
]);

const req = (rows: object[]) => ({
  intent: "requirements",
  title: "T",
  status: "clear",
  statusNote: "",
  scope: { searched: "", assumptions: [] },
  summary: "S [P1] [P9]",
  clarification: "",
  blocks: [{ type: "requirements", heading: "", groups: [{ name: "Primary", summary: "", cites: [], rows }] }],
  conflicts: [],
  gaps: [],
  followUps: [],
});

const rowsOf = (b: Block) => (b.type === "requirements" ? b.groups[0].rows : []);

describe("validateAnswer", () => {
  test("removes citations to passages that weren't retrieved", () => {
    const { answer, report } = validateAnswer(req([{ field: "Carpet Area (sq. ft.)", required: "yes", requiredNote: "", rule: "", validation: "", cites: ["P1", "P7"] }]), { passages });
    expect(answer.summary).toBe("S [P1]");
    expect(rowsOf(answer.blocks[0])[0].cites).toEqual(["P1"]);
    expect(report.unknownCites.sort()).toEqual(["P7", "P9"]);
  });

  test("keeps 'required' when the cited row marks the field with *", () => {
    const { answer } = validateAnswer(req([{ field: "Carpet Area", required: "yes", requiredNote: "", rule: "", validation: "", cites: ["P1"] }]), { passages });
    expect(rowsOf(answer.blocks[0])[0].required).toBe("yes");
  });

  test("downgrades 'required' the source doesn't support", () => {
    const { answer, report } = validateAnswer(req([{ field: "Floor", required: "yes", requiredNote: "", rule: "", validation: "", cites: ["P1"] }]), { passages });
    expect(rowsOf(answer.blocks[0])[0].required).toBe("unspecified");
    expect(report.downgradedRequired).toBe(1);
    expect(answer.status).toBe("needs-clarity");
  });

  test("'no' stands when the form marks other fields with * but not this one", () => {
    const { answer } = validateAnswer(req([{ field: "Floor", required: "no", requiredNote: "", rule: "", validation: "", cites: ["P1"] }]), { passages });
    expect(rowsOf(answer.blocks[0])[0].required).toBe("no");
  });

  test("the * convention is judged over the whole form section, not one passage", () => {
    const split = new Map([["P1", "| 13 | Yes | 8 | 7 | Carpet Area (sq. ft.)* | Number |"], ["P2", "| 30 | Yes | 23 | 25 | Lease tenure in years | Number |"]]);
    const row = { field: "Lease tenure in years", required: "no", requiredNote: "", rule: "", validation: "", cites: ["P2"] };
    expect(rowsOf(validateAnswer(req([row]), { passages: split }).answer.blocks[0])[0].required).toBe("unspecified");
    const sections = sectionTexts([
      { label: "P1", text: split.get("P1")!, doc: "04-12", path: ["Office Lease form"] },
      { label: "P2", text: split.get("P2")!, doc: "04-12", path: ["Office Lease form"] },
    ]);
    expect(rowsOf(validateAnswer(req([row]), { passages: split, sections }).answer.blocks[0])[0].required).toBe("no");
  });

  test("flags rows whose field isn't in the cited text, and rows with no source", () => {
    const { answer, report } = validateAnswer(
      req([
        { field: "Swimming pool", required: "unspecified", requiredNote: "", rule: "", validation: "", cites: ["P1"] },
        { field: "Lift", required: "unspecified", requiredNote: "", rule: "", validation: "", cites: [] },
      ]),
      { passages },
    );
    const [a, b] = rowsOf(answer.blocks[0]);
    expect(a.unverified).toBe(true);
    expect(b.uncited).toBe(true);
    expect(report.unverifiedRows).toBe(1);
  });

  test("drops malformed blocks and survives garbage", () => {
    const { answer, report } = validateAnswer({ blocks: [{ type: "chart" }, { type: "text", body: "ok" }, null] }, { passages });
    expect(answer.blocks).toHaveLength(1);
    expect(report.dropped).toBe(2);
    expect(validateAnswer("nonsense", { passages }).answer.blocks).toEqual([]);
  });

  test("markdown export never invents values", () => {
    const { answer } = validateAnswer(req([{ field: "Floor", required: "unspecified", requiredNote: "", rule: "", validation: "", cites: ["P1"] }]), { passages });
    expect(answerToMarkdown(answer)).toContain("Not specified in the retrieved source");
  });
});

test("follow-ups: 3–6, no repeats of the question or each other", () => {
  const out = cleanFollowUps(
    [
      "What are the mandatory fields for Office lease?",
      "Which fields are mandatory for office lease",
      "What validations apply to Office lease properties?",
      "Compare Office lease with Office sale",
      "What are all the requirements for Office lease?",
      "x",
    ],
    "What are all the requirements for Office lease?",
  );
  expect(out).toEqual(["What are the mandatory fields for Office lease?", "What validations apply to Office lease properties?", "Compare Office lease with Office sale?"]);
});
