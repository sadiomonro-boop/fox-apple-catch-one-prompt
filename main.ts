import { copyFileSync, mkdirSync, readFileSync } from "node:fs";

const botDir = process.env.MAKEFUN_BOT_DIR ?? ".";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";

// Validate the post URL before copying: a malformed POST.json must fail
// loudly instead of being shipped as a broken entry.
const post = JSON.parse(readFileSync(`${botDir}/POST.json`, "utf8"));
const url = typeof post.url === "string" ? post.url : "";
if (!url.startsWith("https://x.com/") || !url.includes("/status/")) {
  console.error(`Invalid post URL in POST.json: ${JSON.stringify(url)}`);
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
copyFileSync(`${botDir}/POST.json`, `${outDir}/POST.json`);
