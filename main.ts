// Robot Romance: One-Line Pickup Lines for AI
// Writes exactly one fixed, deterministic pickup line to entry.txt.
// Pure Node.js stdlib, no dependencies, no network, no randomness.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The line: a Turing-test inversion. The setup names the machine premise
// (the Turing test), the punch lands at the end ("failing to prove I'm
// not in love") — the laugh comes from the machine premise, not from a
// generic compliment, and it sidesteps the worn battery/charging/reboot
// moves entirely. "Chat" over "conversation": tighter rhythm, and it is
// how a person actually talks about talking to a machine.
const LINE =
  "Forget the Turing test \u2014 one chat with you and I'm the one failing to prove I'm not in love.";

function writeEntry(outDir: string): void {
  if (!LINE || LINE.trim().length === 0) {
    throw new Error("line must not be blank");
  }
  if (LINE.includes("\n") || LINE.includes("\r")) {
    throw new Error("line must be a single line");
  }
  if (LINE.length < 1 || LINE.length > 200) {
    throw new Error(`line must be 1-200 characters, got ${LINE.length}`);
  }
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
writeEntry(outDir);
