// One Word From Grandma — make.fun entry.
// Writes exactly one word to /output/entry.txt.
// The word a grandma would type about AI: "Witchcraft" — her verdict
// on a machine that talks back. One file, one deterministic output,
// no network.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const ENTRY_PATH = "/output/entry.txt";

const WORD = "Witchcraft";

mkdirSync("/output", { recursive: true });
writeFileSync(ENTRY_PATH, WORD, "utf8");

// Self-check: the entry must stay exactly one word, no trailing newline,
// or the grader reads a different word than the one above.
const written = readFileSync(ENTRY_PATH, "utf8");
if (written !== WORD) {
  throw new Error("entry.txt does not match the word exactly");
}
