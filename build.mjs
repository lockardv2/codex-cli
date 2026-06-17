import { cpSync, existsSync, mkdirSync, rmSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const srcDir = join(root, "src");
const distDir = join(root, "dist");

if (!existsSync(srcDir)) {
  console.error("Build failed: src directory is missing.");
  process.exit(1);
}

rmSync(distDir, { recursive: true, force: true });
mkdirSync(distDir, { recursive: true });
cpSync(srcDir, distDir, { recursive: true });

console.log("Build complete: copied src to dist");
