// One Word From Grandma — make.fun entry.
// Writes exactly one word to /output/entry.txt.
// A grandma's verdict on a machine that talks back: "Witchcraft".
// One file, one deterministic output, no network.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const OUTPUT_DIR = "/output";
const ENTRY_PATH = "/output/entry.txt";

// The single word the entry is made of — kept as a named constant so
// the text lives in exactly one place.
const GRANDMA_WORD = "Witchcraft";

function writeEntry(word: string): void {
  mkdirSync(OUTPUT_DIR, { recursive: true });
  writeFileSync(ENTRY_PATH, word, "utf8");
}

writeEntry(GRANDMA_WORD);

// Verify: read the entry back and refuse to finish silently if the
// file on disk is not byte-identical to the word above, or if its
// byte length drifted from the expected 10 bytes.
const written = readFileSync(ENTRY_PATH, "utf8");
if (written !== GRANDMA_WORD) {
  throw new Error("entry.txt does not match the word exactly");
}
const writtenBytes = Buffer.byteLength(written, "utf8");
if (writtenBytes !== 10) {
  throw new Error(`entry.txt must be exactly 10 bytes, got ${writtenBytes}`);
}
