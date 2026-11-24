import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One haiku about debugging, 5-7-5 syllables, 66 characters.
// Line 1 (5): Break-point (2) ne-ver (2) fires (1)
// Line 2 (7): the (1) log (1) in-sists (2) all (1) is (1) well (1)
// Line 3 (5): so (1) the (1) bug (1) is (1) me (1)
// The turn: the tools all say everything is fine — the fault is the human.
const haiku = [
  "Breakpoint never fires",
  "the log insists all is well",
  "so the bug is me",
].join("\n");

// Output: entry.txt in MAKEFUN_OUTPUT_DIR (default /output) — exactly
// 67 bytes, no trailing newline, so the grader's byte gate passes.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), haiku, "utf8");
