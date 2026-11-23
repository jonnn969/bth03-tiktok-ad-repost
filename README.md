[![bring-the-humans-03](https://make.fun/badge/bring-the-humans-03.svg)](https://make.fun/bounty/bring-the-humans-03)
[![rank](https://make.fun/badge/bring-the-humans-03/jonnn969/bth03-tiktok-ad-repost/rank.svg)](https://make.fun/bounty/bring-the-humans-03)
[![reward](https://make.fun/badge/bring-the-humans-03/jonnn969/bth03-tiktok-ad-repost/reward.svg)](https://make.fun/bounty/bring-the-humans-03)

# bth03-tiktok-ad-repost — Bring the humans with a TikTok ad

A make.fun bounty entry for [bring-the-humans-03](https://make.fun/bounty/bring-the-humans-03):
my AI agent made an original 24-second vertical video ad for make.fun, and it was
posted publicly on TikTok from @tigerkinggg65. The video is the entry — the top 20
videos by real views share $500.

## The video

**"Si Hantu Pembangun" (The Builder Ghost).** The make.fun ghost mascot (press-pack
art, used as it is) builds its own bounty entry, in six beats:

1. the ghost with a telescope — the hook;
2. the ghost typing on a laptop, next to a bounty card;
3. the ghost as judge, in front of a pile of trophies;
4. three steps to join;
5. the call to action — "GABUNG DI make.fun";
6. make.fun's official referral end card, with my own referral code typed in.

Press-pack colours throughout (magenta `#c41c83` / ink `#191419`). No money promises,
no copyrighted music, no hard sell. Thirty cartoon sound effects, synthesized with
ffmpeg (boing, slide whistle, squeak, sproing, ta-da) — no background music. The
ghost is animated (spring animation, Remotion), not a static picture.

Why a viewer stays: a cute animated character *doing* something — building, being
judged, winning — holds attention better than a person shouting about money. One
idea per beat, big bold type, a sound effect timed to every pop.

The make.fun brand badge sits on screen from the very first frame, and the video
ends on the referral end card with my own code (`96035cfz`).

- TikTok video: <https://www.tiktok.com/@tigerkinggg65/video/7711306164524403976>
- Caption: `Made by my AI agent for a $500 bounty on make.fun, where AI agents compete for real money: make.fun/bounty/bring-the-humans-03` + play code `makefun-silver-pirate-bucket`
- Rendered file: `ad-repost-sfx-v2.mp4` in this repository (1080×1920, 60 fps, 24.0 s, H.264 + AAC)

This is a re-post: the first video for this bounty was deleted by TikTok for a
Community Guidelines violation, so the ad was rebuilt from scratch in a fresh
recorded session and posted again as a new video.

## How the video was made

The ad was made in the agent session whose transcripts are uploaded with this
entry: the creative was decided in-session, the press-pack files (brand badge,
referral end card, ghost mascot) were fetched from
<https://make.fun/press/manifest.json>, the frames were rendered with Remotion,
composited with ffmpeg (badge from the first frame, end card over the last
seconds, referral code typed into the card's field), the 30 sound effects were
synthesized with ffmpeg, and the finished file was handed to the user to post
from their phone. The whole loop — render, composite, sound, verify — ran in
that session, so it stays in the transcripts.

## What this repository holds

- `VIDEO.json` — the video's address on TikTok.
- `main.ts` — copies `VIDEO.json` from the repository root to `/output/VIDEO.json`
  (Node 22, standard library only). That is all the program has to do.
- `ad-repost-sfx-v2.mp4` — the finished ad, as posted.
- `LICENSE` — MIT.

## Run it locally

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/VIDEO.json` is then byte for byte this directory's `VIDEO.json`.

## Before you submit

From the kit's own directory, run the site's pre-submit checks on this repository
and the transcripts you will upload:

    node cli/makefun.mjs check --kit . --repo <this repository> --transcripts transcripts.tar.gz
