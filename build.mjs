import { cpSync, existsSync, mkdirSync, rmSync } from "node:fs";
import { join } from "node:path";

// 현재 작업 디렉터리를 기준으로 소스/배포 경로를 계산한다.
const root = process.cwd();
const srcDir = join(root, "src");
const distDir = join(root, "dist");

// 빌드 입력 폴더가 없으면 즉시 실패시켜 원인을 명확히 한다.
if (!existsSync(srcDir)) {
  console.error("Build failed: src directory is missing.");
  process.exit(1);
}

// 이전 결과물을 지우고 src 전체를 dist로 복사하는 단순 빌드 스크립트다.
rmSync(distDir, { recursive: true, force: true });
mkdirSync(distDir, { recursive: true });
cpSync(srcDir, distDir, { recursive: true });

console.log("Build complete: copied src to dist");
