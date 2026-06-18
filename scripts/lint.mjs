import { readFileSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const files = {
  html: join(root, "src", "index.html"),
  js: join(root, "src", "main.js"),
  css: join(root, "src", "styles.css"),
};

const html = readFileSync(files.html, "utf8");
const js = readFileSync(files.js, "utf8");
const css = readFileSync(files.css, "utf8");
const errors = [];

if (!html.includes('<form class="signup-form" id="signup-form">')) {
  errors.push("src/index.html: signup form markup is missing.");
}

if (!html.includes('type="email"')) {
  errors.push("src/index.html: email input is missing.");
}

if (!html.includes('type="password"')) {
  errors.push("src/index.html: password input is missing.");
}

if (!html.includes('src="./main.js"')) {
  errors.push("src/index.html: main.js module reference is missing.");
}

if (!html.includes('href="./styles.css"')) {
  errors.push("src/index.html: styles.css reference is missing.");
}

if (!js.includes('document.querySelector("#signup-form")')) {
  errors.push("src/main.js: signup form selector is missing.");
}

if (!js.includes("addEventListener(\"submit\"")) {
  errors.push("src/main.js: submit handler is missing.");
}

if (!css.includes(".signup-form")) {
  errors.push("src/styles.css: signup form styles are missing.");
}

if (!css.includes("@media (max-width: 860px)")) {
  errors.push("src/styles.css: responsive breakpoint is missing.");
}

if (errors.length > 0) {
  console.error("Lint failed:");

  for (const error of errors) {
    console.error(`- ${error}`);
  }

  process.exit(1);
}

console.log("Lint passed.");
