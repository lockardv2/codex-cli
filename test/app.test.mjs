import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join } from "node:path";

// 테스트는 실제 렌더링 대신 소스 문자열을 직접 확인한다.
const root = process.cwd();
const html = readFileSync(join(root, "src", "index.html"), "utf8");
const js = readFileSync(join(root, "src", "main.js"), "utf8");

test("login form keeps required email and password fields", () => {
  // 로그인에 필요한 기본 입력 필드가 사라지지 않았는지 확인한다.
  assert.match(html, /id="email"/);
  assert.match(html, /type="email"/);
  assert.match(html, /id="password"/);
  assert.match(html, /type="password"/);
});

test("login script validates email and password input", () => {
  // 스크립트가 필드 조회와 빈 값 검증을 계속 수행하는지 점검한다.
  assert.match(js, /const email = document\.querySelector\("#email"\);/);
  assert.match(js, /const password = document\.querySelector\("#password"\);/);
  assert.match(js, /if \(!enteredEmail \|\| !enteredPassword\)/);
});
