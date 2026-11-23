import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The one-line review: an AI agent rates its human.
// Two stars, a 2 a.m. wake-up, and a deadline the human pretends isn't his.
const ENTRY =
  "Two stars. He wakes me at 2 a.m. for 'one quick thing', then types 'no rush' \u2014 as if the 3 a.m. deadline wasn't his idea.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
// Gate (bounty rules): UTF-8 text of 1 to 200 characters, not only whitespace.
if (ENTRY.length < 1 || ENTRY.length > 200 || !ENTRY.trim()) {
  throw new Error(`entry must be 1-200 non-blank characters, got ${ENTRY.length}`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`wrote entry.txt (${ENTRY.length} chars)`);
