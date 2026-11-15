# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro static site deployed to Cloudflare Pages. This follows the recommended stack from the prior decision round and remains open to correction if the owner names a different stack.

## Users

- English-speaking players searching for “Mottle Game” who want to play immediately in a browser.
- Search visitors trying to understand the word “mottle,” the game’s rules, controls, camouflage mechanic, or whether it is a board game.
- Mobile players who want a touch-friendly route to the original browser game without downloading an unverified APK.

## Product Purpose

`mottlegame.cc` is an independent, single-page player guide and launch surface for Mottle - Hide & Seek by Star Lord. Success means a visitor can identify the game, start it quickly, understand the core move/release camouflage loop, and resolve common search confusion without leaving the page.

## Positioning

The domain matches the game query exactly, while the page combines the playable original game with concise first-hand explanations of the name, controls, Firefly, Camo, Seekers, and common game-versus-board-game confusion.

## Operating Context

- Organic-search entry on desktop or mobile.
- One-page reading path with an immediately playable first block.
- The game is loaded from `https://5qbwd96hq.clide.app/` only after deliberate user interaction.
- Original creator and platform sources remain linked and clearly attributed.

## Capabilities and Constraints

- English homepage at `https://mottlegame.cc/` and Simplified Chinese at `https://mottlegame.cc/zh/`, each with 11 ordered content blocks.
- Bilingual illustrated play guide, with observed results, editorial strategy and game attribution. The Chinese guide uses the title 变色龙：躲猫猫.
- Exactly one H1: `Mottle Game`.
- Body copy target: 1,200–1,500 English words.
- Exact user-provided title and meta description must be preserved.
- `What Does Mottle Mean?` must contain at least 200 words, define the English verb, explain the game name, and distinguish `mottle` from `motel`.
- `Is Mottle a Board Game?` must explicitly say “It is not a board game” and explain what the game is.
- Footer contains text links to `/privacy/`, `/terms/`, and `/contact/`.
- No accounts, comments, leaderboard, APK hosting, game-file mirroring, or invented player metrics.
- The site must state that it is independent and not affiliated with the creator or 8x.gg.

## Brand Commitments

- Product/site name: Mottle Game.
- Domain: `mottlegame.cc`.
- English-first editorial surface.
- Quiet, observant, precise language with a small amount of playful tension.
- Visual references may establish craft level, but competitor copy, logo, illustration, CSS, and branded assets must not be copied.

## Evidence on Hand

- First-hand browser audit screenshots under `docs/audit/2026-11-15/`.
- Original game listing: `https://www.8x.gg/apps/xPKXL5uurAzb6pAG`.
- Original playable host: `https://5qbwd96hq.clide.app/`.
- Creator attribution: Star Lord.
- Product requirements: `docs/mottle-game-requirements.md`.
- Keyword-volume and trend claims in the latest brief are owner-supplied research and must not be presented as public facts without an independently citable source.
- No testimonials, owned game assets, creator endorsement, traffic results, or commercial proof are available; future work must not fabricate them.

## Product Principles

1. Let the visitor play before asking them to read.
2. Answer the exact query in plain English before expanding it.
3. Demonstrate the move-versus-hide tension instead of describing generic game excitement.
4. Attribute the creator and original host wherever the playable experience appears.
5. Prefer one authoritative page over a network of thin keyword pages.

## Accessibility & Inclusion

- Semantic heading order, keyboard-operable controls, visible focus, labeled iframe and icon buttons.
- Mobile layout must not overflow at 360px and must preserve usable touch targets.
- Motion respects `prefers-reduced-motion`.
- The cross-origin game cannot be claimed as fully accessible or WCAG-conformant without separate testing and control of its source.

