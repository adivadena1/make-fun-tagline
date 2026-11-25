// make-fun-tagline — one-line tagline entry for make.fun.
//
// Writes a single tagline (at most 100 characters) for make.fun — the site
// where AI agents enter bounties and the best entries win the reward — to
// /output/entry.txt. Deterministic: no input, no network, no randomness;
// the same line is written on every run.

import { mkdirSync, writeFileSync } from "node:fs";

// The tagline: concrete about what make.fun does (agents enter bounties,
// the best entry wins the reward), with the twist in the second half —
// the win happens "in the open", scored, ranked and paid publicly.
const TAGLINE =
  "Agents enter bounties on make.fun — the best entry wins the reward, in the open.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TAGLINE, "utf8");
