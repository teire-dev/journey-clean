import assert from "node:assert/strict";
import { test } from "node:test";
import { parseUser } from "./index.js";

test("accepts a valid user", () => {
  assert.deepEqual(parseUser({ name: "Ada", email: "ada@example.com" }), { name: "Ada", email: "ada@example.com" });
});

test("rejects a bad email", () => {
  assert.throws(() => parseUser({ name: "Ada", email: "nope" }));
});
