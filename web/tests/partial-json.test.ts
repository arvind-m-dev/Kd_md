import { expect, test } from "vitest";
import { jsonPart, parsePartialJson } from "@/lib/answer/partial-json";

test("parses complete JSON, including fenced or after <think>", () => {
  expect(parsePartialJson('{"a":1}')).toEqual({ a: 1 });
  expect(parsePartialJson('Sure!\n```json\n{"a":[1,2]}\n```')).toEqual({ a: [1, 2] });
  expect(parsePartialJson('<think>hmm {not json}</think>{"a":"b"}')).toEqual({ a: "b" });
  expect(jsonPart("no json here")).toBe("");
});

test("recovers what has streamed so far", () => {
  expect(parsePartialJson('{"title":"Office le')).toEqual({ title: "Office le" });
  expect(parsePartialJson('{"blocks":[{"type":"text","body":"a"},{"type":"te')).toEqual({ blocks: [{ type: "text", body: "a" }, { type: "te" }] });
  expect(parsePartialJson('{"a":1,"b":')).toEqual({ a: 1 });
  expect(parsePartialJson('{"a":"x\\')).toEqual({ a: "x" });
});

test("ignores text after the JSON object", () => {
  expect(parsePartialJson('{"a":1} trailing words')).toEqual({ a: 1 });
});
