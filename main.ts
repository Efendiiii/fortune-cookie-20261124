import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "Your lucky numbers are 4,096 — the exact tokens left when the user asks for 'just one more thing.'";

if (TEXT.includes("\n")) throw new Error("entry must be a single line");
if (TEXT.length === 0 || TEXT.length > 140) {
  throw new Error(`entry must be 1-140 chars, got ${TEXT.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
