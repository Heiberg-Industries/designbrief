# Neubrutalism

> Brutalism's rebellious kid — bold, loud, and unapologetically fun.

## Non-Negotiables

**If you skip any of these three, it is not Neubrutalism.** These are the visual DNA of the style — without all three present on every major element, the result reads as "colorful and playful" rather than recognizably Neubrutalist:

1. **Thick black borders (2–3px minimum) on EVERYTHING.** Cards, buttons, inputs, images, nav bars, badges — every container and interactive element gets a solid black border. Not 1px. Not gray. `border: 2px solid #000000` at minimum, `3px` preferred. In Tailwind: `border-[3px] border-black` or `border-2 border-black`. This is the single most defining visual feature of the style.

2. **Hard offset shadows with ZERO blur on every card and interactive element.** This is the second pillar. Every card, button, and input needs a solid-color shadow offset with no blur:
   - Standard: `box-shadow: 4px 4px 0px #000000`
   - Dramatic: `box-shadow: 6px 6px 0px #000000`
   - Maximum: `box-shadow: 8px 8px 0px #000000`
   - In Tailwind: `shadow-[4px_4px_0px_#000]`
   - The shadow is a hard, geometric block — NOT a soft, blurred elevation. If you see `shadow-md`, `shadow-lg`, or any shadow with blur, it's wrong.
   - **Hover interaction**: Shadow disappears and element translates to fill the gap (pressed effect): `hover:shadow-none hover:translate-x-1 hover:translate-y-1`

3. **High-contrast saturated colors with pure black text.** The background is a bold, unexpected color (vivid pink, lime, lavender — not white). Cards use contrasting solid fills (yellow on pink, white on green). Text is pure black `#000000`. The palette is fearless and punchy.

### Quick self-test

Look at your cards. Do they have thick visible black borders? Do they cast hard rectangular shadows with no blur? Does it look like physical paper cutouts stacked with offset shadows? If yes, it's Neubrutalism. If the borders are thin or the shadows are soft/absent, fix those first — everything else is secondary.

## Identity

- **Origin**: Evolved from web Brutalism (~2015) into a friendlier, more colorful variant around 2020. Gumroad's redesign by Sahil Lavingia is often cited as the catalyst. Rooted in architectural Brutalism's "honest materials" philosophy, but adapted for digital with warmth and playfulness.
- **Mood**: Bold, playful, rebellious, authentic, energetic, confident, irreverent
- **Best for**: Startups, creative tools, dev tools, indie products, portfolios, marketplaces, education platforms, community apps
- **Avoid for**: Enterprise B2B, healthcare, finance (unless intentionally disrupting), luxury brands, anything that needs to feel quiet

## Typography

### Philosophy
Typography in Neubrutalism is **LOUD and structural**. It's the primary visual element — often more important than imagery. Type is big, bold, and unapologetic. It fills space and makes statements.

### Font Characteristics
- **Primary (headings)**: Heavy, bold sans-serifs or display fonts. Grotesque or geometric with high impact. Black (900) or Extra-Bold (800) weights.
  - Families to consider: Space Grotesk, Syne, Archivo Black, Cabinet Grotesk, Clash Display, Plus Jakarta Sans (Bold/ExtraBold), General Sans
- **Secondary (body)**: Readable sans-serifs at regular weight. Can be the same family as headings at a lighter weight. Monospace is also a valid choice for body text — it reinforces the "raw" feel.
  - Families to consider: Inter, Space Mono, JetBrains Mono, IBM Plex Sans, DM Sans
- **Optional accent**: A monospace font for labels, tags, metadata, or code-like elements. This is very common in Neubrutalism.
  - Families to consider: Space Mono, IBM Plex Mono, Fira Code

### Scale & Weight
- **Extreme hierarchy**: Headings can be very large (48px–96px+). Body text stays readable (16px–18px). The jump is dramatic and intentional.
- Headings in Black (900) or Extra-Bold (800) weight
- Body in Regular (400) or Medium (500)
- ALL CAPS headings are common and appropriate
- Tight line-height on large headings (0.9–1.1), comfortable on body (1.5–1.7)
- Letter-spacing: slightly tight on big bold headings, default on body

## Color

### Philosophy
Color in Neubrutalism is **high-contrast, saturated, and fearless**. It's not afraid of combinations that "shouldn't" work. The palette punches you in the face — and that's the point.

### Palette Construction
- **Background**: Choose a bold, unexpected base. NOT white — Neubrutalism backgrounds are often:
  - Vivid pastels: warm pink (#FFD6E0), lime green (#CCFF00), light lavender (#E0C3FC), peach (#FFE5B4)
  - Or stark: pure white (#FFFFFF) or pure black (#000000) if other elements carry the color
- **Primary surface**: A contrasting color to the background for cards and sections. Yellow cards on a pink background, for example.
- **Text**: Almost always pure black (#000000) or very near-black. Neubrutalism loves pure black — it's part of the "honest" aesthetic.
- **Accent**: A saturated, high-energy color for buttons and interactive elements. Electric blue (#3B82F6), hot pink (#EC4899), acid green (#84CC16), orange (#F97316).
- **Border**: Pure black (#000000). Always. This is non-negotiable.

### Color Combinations That Work
- Pink background + yellow cards + black text + blue accent
- White background + black borders + pastel card fills + red accent
- Lime/acid green background + white cards + black everything
- Lavender background + peach cards + dark navy text

### Dark Mode
Less common for Neubrutalism, but doable:
- Near-black background with bright, saturated card fills
- White or vivid text
- Maintain thick black borders (or switch to white borders)
- The contrast should still feel aggressive

## Spacing & Layout

### Grid System
- Neubrutalism often uses a **loose, blocky grid** — elements are organized but the alignment feels slightly raw
- Cards and sections are clearly delineated blocks, often with visible borders
- **Asymmetry is welcome** but not as calculated as Bauhaus — it's more chaotic/organic
- Elements can overlap slightly for a collage-like feel

### Spacing Philosophy
- **Generous padding** inside cards and sections (24px–40px)
- **Visible gaps** between blocks — the space between cards is part of the rhythm
- Not everything needs to align perfectly — slight misalignment adds character (but don't overdo it)
- Sections can have very generous vertical padding (80px–120px) to let the color backgrounds breathe

### Composition
- **Block-based layouts**: Content lives in distinct, bordered blocks stacked or arranged in grids
- **Overlap and offset**: Elements can be slightly offset from their expected position (a card shifted 8px down and right, for example)
- **Stickers and badges**: Floating labels, rotated badges, pill-shaped tags are very on-brand
- **Big, chunky sections**: Each section feels like its own colored block

## Borders & Shadows

### Philosophy
The **thick black border and hard offset shadow** are the signature of Neubrutalism. These two elements alone can make almost anything feel Neubrutalist. There is no subtlety here — borders are visible, shadows are geometric, edges are hard.

### Implementation
- **Borders**: 2px–4px solid black (#000000) on cards, buttons, inputs, images — everything. This is the single most defining feature.
- **Border radius**: 0px (hard brutalist) OR 8px–16px (the "neu" softening). Both work, but pick one and be consistent. The rounded variant is more common in modern Neubrutalism.
- **Shadows**: Hard offset shadow — NO blur. The shadow is a solid color block offset from the element:
  - `box-shadow: 4px 4px 0px #000000` (standard)
  - `box-shadow: 6px 6px 0px #000000` (more dramatic)
  - `box-shadow: 8px 8px 0px #000000` (maximum impact)
  - The shadow can also be a bright color instead of black: `4px 4px 0px #3B82F6`
- **No soft/blurred shadows** — that's a different aesthetic entirely. Neubrutalism shadows are sharp and geometric.

## Components

### Buttons
- **The star component.** Thick black border (2–3px), bold text, generous padding
- Solid fill in accent color + black border + hard offset shadow
- Border-radius: 0px or 8px–12px (consistent with overall choice)
- Text: Bold or Black weight, can be uppercase
- Hover: Shadow disappears and button translates to fill the gap (pressed effect). This is the classic Neubrutalism interaction:
  ```css
  .btn { box-shadow: 4px 4px 0px #000; transform: translate(0, 0); }
  .btn:hover { box-shadow: 0px 0px 0px #000; transform: translate(4px, 4px); }
  ```
- Secondary buttons: black border, no fill (or white fill), same shadow treatment

### Cards
- Thick black border (2–3px)
- Solid background fill (often a pastel or vivid color)
- Hard offset shadow (4px–8px, black)
- Content well-padded inside
- Images inside cards: also bordered, can break out of the card slightly for a collage effect
- Consider slight rotation (transform: rotate(-1deg to 2deg)) on cards for playfulness

### Navigation
- Can be a thick-bordered bar with clearly separated nav items
- Active state: filled background color or underline
- Hamburger menus can be extra chunky (thick lines)
- Consider a "sticker-style" nav where items look like physical labels

### Inputs & Forms
- Thick black border (matching buttons)
- Solid white or pastel fill
- Hard offset shadow (optional, looks great on inputs)
- Focus state: shadow changes color or border thickens
- Labels: bold, potentially uppercase
- Checkboxes and radio buttons: oversized, thick borders, filled with accent color when checked

### Tags & Badges
- Pill-shaped or rectangular with thick border
- Small, bold text
- Background in a contrasting color
- Optional: slight rotation (-2deg to 2deg)
- These are signature Neubrutalism elements — use them liberally

### Modals & Dialogs
- Thick black border, hard shadow
- Bold background color (not neutral gray — use a palette color)
- Overlay: semi-transparent black or a dark version of a palette color
- Large, clear heading. Chunky close button (bordered X)

## Motion

### Philosophy
Animation in Neubrutalism is **snappy and mechanical** — things click into place rather than floating or easing in. Movement feels tactile, like physical objects being pushed and stacked.

### Implementation
- **Transitions**: Short and snappy — 100–200ms. ease or linear. Nothing slow or luxurious.
- **Hover**: The shadow-to-press transform is the core interaction (see Buttons above). Apply it to cards, buttons, links — anything clickable.
- **Entrances**: Pop in with a slight scale (0.95 → 1) or slide from offset position. Fast.
- **Scroll**: No parallax — that's too smooth for this aesthetic. Simple fade-in-on-scroll is fine.
- **Playful touches**: Slight rotation on hover, subtle bounce on click, sticker-wobble effect on badges
- **Avoid**: Slow, fluid, glassmorphic-style animations. Nothing should feel luxurious.

## Dark Mode & Light Mode

### Philosophy
Neubrutalism is a **light-first style** — those bold colored backgrounds (pink, lime, lavender) ARE the aesthetic. They're the first thing people recognize. That said, dark mode is absolutely doable — it just requires deliberate choices to keep the aggressive Neubrutalist energy intact.

### Light Mode (Default)
This is home base. Bold saturated background fills, pure black borders, pure black hard shadows, pure black text. Everything in the Non-Negotiables section assumes light mode. If you only ship one mode, ship this one.

### Dark Mode Approach
Dark mode Neubrutalism flips the contrast anchor but keeps the same punk energy:

- **Base background**: Near-black `#0A0A0A` — not gray, not charcoal. Almost-black. In Tailwind: `bg-[#0A0A0A]` or `dark:bg-neutral-950`.
- **Card fills**: Keep them bright and saturated. Yellow `#FEF9C3`, hot pink `#FFD6E0`, acid green `#CCFF00` — these pop HARDER against near-black. Don't mute them. The saturation is the whole point.
- **Borders**: Switch from black to **white** `#FFFFFF` at the same chunky weight (3px). `border-[3px] border-white` or `dark:border-white`. The thick border is still non-negotiable — you're just inverting the contrast color.
- **Shadows**: Here's where it gets fun. Black shadows disappear into a black background (obviously). Switch to **colored hard shadows** instead:
  - `box-shadow: 4px 4px 0px #3B82F6` (electric blue)
  - `box-shadow: 4px 4px 0px #EC4899` (hot pink)
  - `box-shadow: 4px 4px 0px #CCFF00` (acid green)
  - In Tailwind: `dark:shadow-[4px_4px_0px_#3B82F6]`
  - Pick one shadow color per page or section and commit.
- **Text**: White `#FFFFFF` or near-white `#F5F5F5` on the dark base. On bright card fills, text stays black `#000000` — the card surface is light enough.
- **Hover interaction**: Same shadow-press mechanic, just with the colored shadow: `dark:hover:shadow-none dark:hover:translate-x-1 dark:hover:translate-y-1`

### Tailwind Dark Mode Example
```
/* Card in dark mode */
dark:bg-[#0A0A0A]                              /* Page background */
dark:border-white dark:border-[3px]             /* White chunky border */
dark:shadow-[4px_4px_0px_#3B82F6]              /* Colored hard shadow */
dark:text-white                                 /* White body text */
dark:hover:shadow-none dark:hover:translate-x-1 dark:hover:translate-y-1

/* Button in dark mode */
dark:bg-[#EC4899] dark:text-black dark:border-white dark:border-[3px]
dark:shadow-[4px_4px_0px_#CCFF00]
```

### The Rule
Maintain **aggressive contrast** in both modes. If your dark mode feels calm, muted, or "sophisticated," you've lost the plot. Dark mode Neubrutalism should still punch you in the face — just with inverted contrast.

## Responsive & Mobile

### Philosophy
Neubrutalism's chunky, blocky aesthetic translates to mobile surprisingly well — the style was practically built for stacking cards. But those 96px headings? Those need to come way down. The thick borders stay. The attitude stays. The scale adjusts.

### Typography Scaling
The extreme desktop hierarchy must scale dramatically on small screens:

| Element | Desktop | Mobile (< 640px) |
|---------|---------|-------------------|
| Hero heading | 64px–96px | 28px–42px |
| Section heading | 36px–48px | 24px–32px |
| Card heading | 24px–32px | 18px–24px |
| Body text | 16px–18px | 16px (don't go smaller) |

- Keep the weight (Black 900, Extra-Bold 800) at ALL sizes. The boldness is load-bearing — it's not optional on mobile.
- ALL CAPS headings can stay but consider switching to Title Case below 32px for readability.
- Tight line-height on headings (0.9–1.1) can relax slightly on mobile (1.0–1.2) to avoid cramped stacking.

### Borders & Shadows on Mobile
- **Thick borders are non-negotiable.** Keep `border-[3px] border-black` on mobile. These are the DNA of the style — if you thin them out, it stops being Neubrutalism.
- **Shadow offset can reduce**: Drop from `8px 8px` to `4px 4px` on mobile. The shadow is still visible and hard, just doesn't eat as much space. In Tailwind: `shadow-[8px_8px_0px_#000] sm:shadow-[4px_4px_0px_#000]` (mobile-first: swap the breakpoints as needed).
- The shadow-press hover interaction works fine on tap — mobile browsers handle `:active` states. Consider `active:shadow-none active:translate-x-0.5 active:translate-y-0.5` for touch feedback.

### Layout Behavior
- **Blocky cards stack naturally.** Neubrutalism's bordered-card-grid layout collapses into a single-column stack on mobile with zero awkwardness. Each card is a self-contained block.
- **Remove card rotations on mobile.** Those `transform: rotate(-1deg)` and `rotate(2deg)` effects that add playfulness on desktop eat precious horizontal space on small screens and can cause horizontal scroll. `sm:rotate-0` or simply don't apply rotations below `sm`.
- **Generous padding scales down**: Desktop card padding of 32px–40px can drop to 16px–24px on mobile. Still generous by normal standards — Neubrutalism cards should never feel cramped.
- **Overlapping elements**: Pull back on overlaps and offsets on mobile. The collage effect needs breathing room that phones don't have.

### Touch Targets & Performance
- **Touch targets are already generous.** The chunky buttons and thick-bordered inputs that Neubrutalism demands (48px+ height, generous padding) naturally meet the 44px minimum touch target. This is one of the style's secret mobile strengths.
- **Performance is a non-issue.** Hard shadows (`box-shadow` with 0 blur) are GPU-cheap — way cheaper than blurred shadows. Thick borders are simple box-model. No blur filters, no glassmorphism, no expensive compositing. Neubrutalism is fast by nature.

## Content & Voice

### Philosophy
Neubrutalism's voice matches its visuals: **IRREVERENT, punchy, direct, and fun.** This isn't enterprise copy. This is the startup landing page that makes you smile, the product that talks to you like a friend, the UI that has actual personality. If your copy could appear in a corporate annual report, rewrite it.

### Headlines
Short. Bold. Sometimes cheeky. Headlines in Neubrutalism do WORK — they're big, they're loud, and they say something with conviction:
- "No BS pricing"
- "Built different"
- "Ship it already"
- "Make cool stuff"
- "Your app, but actually good"
- Headlines should fit in 2–5 words when possible. If it needs a subhead, the subhead does the explaining.

### Body Copy
Casual, conversational, uses contractions. Write like you're talking to a smart friend:
- "We built this because the alternatives sucked" — not "Our solution addresses key market pain points"
- "It just works. Seriously." — not "Seamlessly integrated functionality"
- "You'll love it or we'll cry" — not "Customer satisfaction guaranteed"
- Short paragraphs. One idea per block. Let the whitespace and chunky cards do the visual heavy lifting.

### CTAs (Calls to Action)
Action verbs. First person when it fits. Energy:
- "Let's go"
- "Try it free"
- "Get weird"
- "Start building"
- "Grab it"
- "Ship it"
- Avoid generic: "Submit," "Learn more," "Click here" — these have zero personality.

### Error Messages & Microcopy
This is where Neubrutalism's voice really shines. Every micro-interaction is an opportunity for personality:
- Error: "Oops. That didn't work. Try again?" — not "An error has occurred"
- Empty state: "Nothing here yet. Make something!" — not "No items to display"
- Loading: "Hang tight..." or "Working on it..." — not "Please wait"
- Success: "Nailed it!" or "You're in!" — not "Operation completed successfully"
- 404: "This page ghosted you" — not "Page not found"
- Tooltip: Keep it casual, keep it brief, keep it human.

### The Rule
Read your copy out loud. If it sounds like a robot wrote it, a lawyer approved it, or a committee diluted it — rewrite it. Neubrutalism copy should have the same energy as the visuals: bold, honest, and a little bit punk.

## Icons & Illustrations

### Philosophy
Icons and illustrations in Neubrutalism follow the same rule as everything else: **bold, chunky, and high-contrast.** They should feel like they belong next to 3px borders and hard shadows — not like they wandered in from a minimalist SaaS dashboard.

### Icon Style
- **Thick strokes (2px+)** matching the border weight of the UI. If your borders are 3px, your icon strokes should feel visually equivalent.
- **Filled or bold outline** variants. Solid fills with black outlines are the most Neubrutalist option.
- **Avoid thin line icons.** A 1px Feather icon next to a 3px bordered card looks like a mismatch. The weights clash and the icon feels fragile.
- Icons can have black outlines/strokes matching the border color, reinforcing the thick-border DNA.

### Recommended Icon Sets
- **Heroicons (Solid)** — Bold, clean, designed for thick-weight contexts. The solid variants are perfect.
- **Phosphor Icons (Bold)** — Excellent weight options. The Bold variant at 2px+ stroke is ideal for Neubrutalism.
- **Custom chunky icons** — If you have the resources, hand-drawn or custom thick-stroke icons are the gold standard. They feel authentic.
- Avoid: Feather Icons (too thin), Lucide at default weight (too delicate), any icon set that only offers 1px–1.5px strokes.

### Illustrations
- **Hand-drawn or sketch-style illustrations** are a perfect match. Wobbly lines, rough fills, visible strokes — they reinforce the raw, authentic energy.
- **Sticker-style graphics**: Bold black outlines, flat color fills, slight shadow or white border. Think laptop stickers, zine cutouts, or die-cut art.
- **Collage-style compositions**: Layer illustrations, photos, and graphic elements with visible borders and offsets. The collage aesthetic is peak Neubrutalism.
- Keep illustrations high-contrast — they should hold up against bold background colors.

### Photography
When using photos in Neubrutalism:
- **Bold, candid, slightly messy** — not stock-photo polished. Real moments, slightly chaotic energy.
- Always place photos inside thick-bordered containers. A photo without a border feels naked in this style.
- Consider adding a slight rotation (1–2deg) to photo containers for that collage feel.
- Duotone or high-contrast photo treatments can work well but aren't required.
- Avoid: Clean, corporate headshots. Sterile product photography. Anything that feels "curated."

## Accessibility

### Philosophy
Here's the thing — **Neubrutalism is one of the MOST accessible visual styles by nature.** High contrast, thick borders, large text, and clear visual hierarchy are accessibility fundamentals, and Neubrutalism cranks all of them to the max. Lean into this strength. Don't let "accessibility" become an excuse to water down the style — the style IS accessible.

### Built-In Strengths
- **Contrast ratios**: Pure black text (#000000) on saturated pastel backgrounds naturally meets **WCAG AAA** contrast requirements (7:1+). You get this for free.
- **Thick borders**: 2–3px borders provide clear visual boundaries between elements. Users with low vision can distinguish interactive areas easily.
- **Large typography**: 48px–96px headings are visible from across the room. Even at mobile sizes (28px–42px), headings are generous.
- **Clear hierarchy**: The extreme size difference between headings and body text creates unambiguous visual hierarchy. There's no guessing what's important.
- **No transparency/blur**: Unlike glassmorphism, nothing is semi-transparent or blurred. Every element has a solid, clear background. Text is always on an opaque surface.

### Known Risks & Mitigations

**Card rotations and motion sensitivity:**
Slight card rotations (`rotate(-1deg)` to `rotate(2deg)`) can trigger discomfort for users with vestibular/motion sensitivity, especially when combined with scroll. Always wrap rotation transforms in a `prefers-reduced-motion` check:
```css
@media (prefers-reduced-motion: no-preference) {
  .card-playful { transform: rotate(-1deg); }
}
/* Tailwind: motion-safe:rotate-[-1deg] */
```

**ALL CAPS and readability:**
ALL CAPS headings are a Neubrutalism signature, but they reduce readability for dyslexic users — uppercase text removes the distinct word shapes that aid reading. Mitigations:
- Keep ALL CAPS to headings only (short, 2–5 words). Never use ALL CAPS for body text or long strings.
- Offer a sentence-case alternative via a user preference toggle if your product serves a broad audience.
- Use `text-transform: uppercase` in CSS (not hardcoded caps) so screen readers process the original casing.

**Color-only indicators:**
Never rely on color alone to convey state (error, success, etc.). Neubrutalism's thick borders and bold typography make it easy to add icon + text + color for every state — do all three.

### Focus States
Focus indicators should match the chunky Neubrutalist aesthetic — don't fall back to the browser's thin default outline:
- **Thick accent-colored outline**: `outline: 3px solid #3B82F6; outline-offset: 2px;`
- **Or thick border swap**: Change the border color to accent on focus: `focus:border-[#3B82F6]` while keeping the 3px weight.
- In Tailwind: `focus-visible:outline-[3px] focus-visible:outline-[#3B82F6] focus-visible:outline-offset-2`
- The focus state should be as visually bold as everything else in the design. A thin dotted outline looks broken next to 3px borders.

### Reduced Motion
Respect `prefers-reduced-motion` for all animated elements:
- **Disable**: Card rotation transforms, shadow-press hover transitions, entrance animations, badge wobble effects.
- **Keep**: Color changes, opacity changes (instant), layout shifts that don't involve transform.
```css
@media (prefers-reduced-motion: reduce) {
  * { transition-duration: 0.01ms !important; animation-duration: 0.01ms !important; }
  .card-playful { transform: none; }
}
```
In Tailwind: Use `motion-safe:` prefix for all transform and transition utilities: `motion-safe:hover:translate-x-1 motion-safe:hover:translate-y-1 motion-safe:transition-all`.

## Do's and Don'ts

### Do
- Use thick black borders on everything — this is the defining feature
- Use hard offset shadows with zero blur
- Be fearless with color — saturated, high-contrast, unexpected combinations
- Make typography BIG and BOLD for headings
- Add personality through slight rotations, offset elements, and sticker-style badges
- Keep the overall feel fun and approachable despite the "raw" aesthetic
- Use the shadow-press hover interaction on interactive elements

### Don't
- Use soft/blurred shadows — instant style mismatch
- Go too subtle with borders (1px light gray borders kill the Neubrutalism feel)
- Use gradients on surfaces (flat, solid colors only)
- Make it actually ugly — Neubrutalism is bold, not broken. Maintain clear hierarchy and readability.
- Overdo the chaos — if everything is rotated and overlapping, nothing stands out
- Use it where trust and professionalism are paramount (banking, healthcare portals)
- Forget accessibility — high contrast is actually a strength of this style, lean into it

## Implementation Hints (Tailwind + CSS)

```css
/* Core Neubrutalism utilities */
.neu-border { border: 3px solid #000; }
.neu-shadow { box-shadow: 4px 4px 0px #000; }
.neu-shadow-lg { box-shadow: 8px 8px 0px #000; }

/* Press interaction */
.neu-press {
  box-shadow: 4px 4px 0px #000;
  transform: translate(0, 0);
  transition: all 0.1s ease;
}
.neu-press:hover {
  box-shadow: 0px 0px 0px #000;
  transform: translate(4px, 4px);
}
```

```
/* Tailwind classes */
border-[3px] border-black shadow-[4px_4px_0px_#000] rounded-xl
hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-100

/* Font stack */
font-heading: 'Space Grotesk', 'Syne', sans-serif
font-body: 'Inter', 'DM Sans', sans-serif
font-mono: 'Space Mono', 'JetBrains Mono', monospace

/* Color tokens example (pink + yellow palette) */
--color-bg: #FFD6E0          /* Soft pink background */
--color-surface: #FEF9C3     /* Warm yellow cards */
--color-accent: #3B82F6      /* Electric blue CTAs */
--color-text: #000000        /* Pure black text */
--color-border: #000000      /* Pure black borders */
--color-shadow: #000000      /* Black hard shadow */
--color-secondary: #CCFF00   /* Acid green for highlights */
```

## Reference Touchstones

When building in this style, channel the spirit of:
- Gumroad's redesign (the original "modern Neubrutalism" reference)
- Figma's marketing site (selective Neubrutalist elements)
- Notion's playful brand illustrations and UI elements
- Poolsuite / Vacation Inc (retro-neubrutalist hybrid)
- Indie hackers and dev tool marketing pages
- Physical collage art, zine culture, sticker aesthetics
