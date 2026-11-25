// One Word for Your Wi-Fi (make.fun — u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72)
//
// The program writes a single word to /output/entry.txt (or to
// $MAKEFUN_OUTPUT_DIR/entry.txt when that is set). The word is fixed:
// the entry is the word itself, chosen for the judge's brief —
// funniest and truest one-word description of home Wi-Fi.
//
// The word: "peekaboo".
//   Home Wi-Fi keeps playing peekaboo with you: full bars one second,
//   gone the next, back again for no reason, gone again the moment you
//   actually need it — on a work call, mid-download, halfway down the
//   hall. It is the one behaviour every household recognises instantly,
//   it reads as a laugh with no explanation, and as a network name it
//   is the joke itself: a network that keeps disappearing on you.
//   One word, eight letters, no context needed.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const WORD = "peekaboo";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 20 characters,
// not only white space. Fail loudly here rather than write an invalid
// entry the judge would never see.
if (WORD.length < 1 || WORD.length > 20 || WORD.trim().length === 0) {
  throw new Error(`entry word fails the gate: ${JSON.stringify(WORD)}`);
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), WORD, "utf8");
console.log(`wrote ${WORD} to ${join(outputDir, "entry.txt")}`);
