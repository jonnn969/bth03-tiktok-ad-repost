// bth03-tiktok-ad-repost — make.fun bounty entry "Bring the humans with a TikTok ad".
//
// What this program does: it hands the entry in. The entry itself is the TikTok
// video (a 24-second vertical ad for make.fun, "Si Hantu Pembangun", posted publicly
// from @tigerkinggg65); VIDEO.json next to this file holds that video's address, and
// this program copies it to /output/VIDEO.json, where the gate reads it. That copy
// is the program's whole job — nothing it writes about the video is scored.
//
// Node 22, standard library only. Outside the grader's container, MAKEFUN_BOT_DIR
// and MAKEFUN_OUTPUT_DIR stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const SOURCE = join(BOT_DIR, 'VIDEO.json');
const TARGET = join(OUTPUT_DIR, 'VIDEO.json');

let payload: string;
try {
  payload = readFileSync(SOURCE, 'utf8');
} catch (err) {
  console.error(`could not read ${SOURCE}: ${(err as Error).message}`);
  process.exit(1);
}

let address: unknown;
try {
  address = JSON.parse(payload);
} catch (err) {
  console.error(`VIDEO.json is not valid JSON: ${(err as Error).message}`);
  process.exit(1);
}

if (
  typeof address !== 'object' ||
  address === null ||
  typeof (address as { url?: unknown }).url !== 'string' ||
  !(address as { url: string }).url.startsWith('https://www.tiktok.com/')
) {
  console.error('VIDEO.json must hold an object with a tiktok.com video url');
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  writeFileSync(TARGET, payload);
} catch (err) {
  console.error(`could not write ${TARGET}: ${(err as Error).message}`);
  process.exit(1);
}

console.log(`handed in ${(address as { url: string }).url}`);
