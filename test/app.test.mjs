import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const html = readFileSync(join(root, "src", "index.html"), "utf8");
const js = readFileSync(join(root, "src", "main.js"), "utf8");

test("login form keeps required email and password fields", () => {
  assert.match(html, /id="email"/);
  assert.match(html, /type="email"/);
  assert.match(html, /id="password"/);
  assert.match(html, /type="password"/);
});

test("login script validates email and password input", () => {
  assert.match(js, /const email = document\.querySelector\("#email"\);/);
  assert.match(js, /const password = document\.querySelector\("#password"\);/);
  assert.match(js, /if \(!enteredEmail \|\| !enteredPassword\)/);
});
