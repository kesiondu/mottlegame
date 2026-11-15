---
impeccable:design-schema: 1
world: paint-swatch-hunt
reference: .impeccable/mocks/decision/02-paint-swatch-hunt.png
---

# Paint-Swatch Hunt

## Visual world

Mottle Game is presented as an interactive colour atlas: a deep bottle-green play field sits above a mineral-white reading sheet, while broad moss, clay, slate, faded-yellow and violet swatches explain camouflage without decorative game clichés. The world is tactile and editorial, but the primary action remains unmistakably playable.

The physical scene is a player opening the site in ordinary daylight and wanting to start quickly, then reading a precise field guide after the round. This requires a dark, concentrated game stage followed by a light, calm article surface.

## Colour strategy

Use a full palette with named functional roles:

- Bottle green `#102d22`: game stage and strongest brand field.
- Moss `#6f9368`: safe camouflage and supporting fields.
- Clay `#bb704b`: movement and risk accents.
- Slate `#4c7288`: search-light and control accents.
- Faded yellow `#e5bf68`: Firefly and attention.
- Violet `#785b79`: rare contrast and secondary swatches.
- Mineral white `#eee8df`: article ground.
- Ink `#173126`: primary type on light ground.

Colour should own regions, not appear as isolated confetti. The long article uses mineral white and ink, with palette colours assigned to diagrams, rules, controls and mechanisms.

## Typography

The display face should feel rounded, confident and slightly compressed, matching the soft geometry of the colour tiles. Body copy is a highly readable humanist sans. Both are self-hosted WOFF2 in production; the first implementation may use documented fallbacks only until the selected font files are added.

- Display: heavy, rounded, compact; tight tracking no lower than `-0.04em`.
- Body: open counters, 17–19px reading size, 1.6–1.75 line height.
- Labels: uppercase only for genuine measurement labels, with restrained tracking.
- Body measure: 65–72 characters.

## Composition

- The playable stage is the first meaningful block and fills most of the first viewport.
- Desktop uses a three-part composition: context at left, game gate in the centre, controls at right.
- The stage edge undulates into the mineral-white article, echoing overlapping paint samples.
- The single H1 begins the light reading surface below the playable stage.
- Sections alternate between a narrow reading column and wider colour-atlas explanations; avoid repetitive equal cards.
- On mobile, the central game gate comes first, controls move directly below it, and decorative swatches become edge framing rather than content obstacles.

## Interaction and motion

- The signature moment is the Play transition: colour tiles briefly settle into the surrounding ground as the iframe loads, expressing camouflage rather than generic fading.
- The iframe is created only after deliberate interaction.
- Motion uses fast exponential ease-out and respects `prefers-reduced-motion`.
- Focus rings use faded yellow on green and bottle green on mineral white.

## Component language

- Corners are soft but not pill-shaped by default; the primary Play control may be a pill because it is a singular action.
- Rules are thin and tinted from the adjacent field.
- Controls use text plus a consistent icon family, never emoji or miscellaneous Unicode symbols.
- FAQ rows are editorial dividers, not floating cards.
- Shadows have both vertical offset and blur; no hard offset blocks and no neon halos.

## Accessibility and performance

- All text meets WCAG AA contrast.
- No essential meaning is carried by colour alone.
- The game gate keeps a fixed aspect ratio to prevent layout shift.
- Organic background art is delivered as optimized raster plates; article structure and UI remain semantic HTML and CSS.
- The cross-origin game is not claimed as WCAG conformant; the surrounding site remains keyboard operable.

## Artwork

The built-in ImageGen tool created three plates from the approved concept. Optimized derivatives are stored under `assets/r2/images/` and served from `https://assets.mottlegame.cc/images/`.

| Plate | Generation brief |
| --- | --- |
| `paint-swatch-atlas.webp` | Layer restrained moss, clay, slate, yellow and violet pigment around a quiet bottle-green game stage. Leave space for the board and controls. |
| `mottle-tiles.webp` | Paint a five-by-five camouflage grid with rounded tiles, a small chameleon, fireflies and one Seeker with a search cone. Leave all buttons and text to the site. |
| `mineral-paper.webp` | Keep the left two thirds of the reading sheet pale. Layer broad moss, slate and clay swatches into its lower right. |

`mottle-game-hide-and-seek-social-share.jpg` combines the first two plates for the share preview. The original gameplay screenshots are stored under `assets/r2/images/` with descriptive `mottle-game-*` filenames and captions describing each test.
