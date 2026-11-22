import { copyFileSync, mkdirSync } from "node:fs";

const botDir = process.env.MAKEFUN_BOT_DIR ?? ".";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";

mkdirSync(outDir, { recursive: true });
copyFileSync(`${botDir}/POST.json`, `${outDir}/POST.json`);
