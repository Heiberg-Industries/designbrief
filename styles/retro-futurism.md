# Retro Futurism

> Yesterday's vision of tomorrow — the future as imagined through the past.

## Non-Negotiables

**If you skip any of these three, it is not Retro Futurism.** These create the time-warped tension between old and new — without them, the result is either "just retro" or "just futuristic":

1. **A clear visual tension between old technology and futuristic ambition.** The design must unmistakably reference a specific past era's aesthetic (70s space-age, 80s neon/synthwave, 90s early-internet, Y2K chrome) while simultaneously depicting futuristic or advanced content. It's not retro alone (that's just nostalgia) and not futuristic alone (that's just sci-fi). The magic is in the collision: a CRT-scan-line texture on a modern dashboard, a 70s color palette with holographic elements, pixel art mixed with smooth gradients. Pick an era and commit to it.

2. **Strong, era-specific color palette with neon or saturated accents.** Each retro-futurism sub-genre has a distinct color signature:
   - **Synthwave/80s**: Deep purples, hot pinks, electric cyan on near-black. Neon glow effects.
   - **Space-age/70s**: Orange, brown, olive, cream, mustard with chrome/silver accents.
   - **Y2K/2000s**: Chrome, iridescent pastels, bubble-gum pink, electric blue, silver.
   - **Atomic-age/50s**: Teal, coral, cream, googie-era pastels.
   - The palette must be IMMEDIATELY identifiable as belonging to a specific era. Generic colors kill the retro-futurism feel.

3. **Decorative elements that reference retro technology or futuristic fantasy.** Grid lines, scan lines, star fields, circuit patterns, orbiting rings, chrome reflections, pixel textures, VHS tracking artifacts, glitch effects, or holographic shimmers. These textural/decorative elements are what separate retro futurism from a clean modern design with old colors. They don't need to be overwhelming, but they must be PRESENT. At minimum: a background texture or pattern that references the era.

### Quick self-test

Show your design to someone. Can they immediately identify what era it's referencing? Does it simultaneously feel like it's from the past AND about the future? Are there decorative elements (grids, scan lines, glows, textures) that reinforce the retro-tech theme? If yes, it's Retro Futurism.

## Identity

- **Origin**: A broad aesthetic movement inspired by how past eras imagined the future. Major sub-genres: Atom Punk (1950s), Space Age (1960s-70s), Synthwave/Outrun (1980s), Y2K (late 1990s-2000s). In digital design, the synthwave variant is most popular, driven by the music and gaming scenes (Hotline Miami, Kavinsky, retrowave art).
- **Mood**: Nostalgic, optimistic, sci-fi, playful, cinematic, dramatic, cool
- **Best for**: Gaming, entertainment, music apps, creative agencies, tech startups (with personality), event sites, portfolios, indie products
- **Avoid for**: Enterprise/B2B, healthcare, finance, government, anything that needs to feel trustworthy and straightforward

## Typography

### Philosophy
Typography in Retro Futurism is a TIME MACHINE. The font choice instantly signals the era. Headings are the primary era indicator — they should scream the decade.

### Font Characteristics
- **Synthwave/80s**:
  - Headings: Chrome or neon display fonts. Condensed, angular, or geometric with 80s character.
  - Families to consider: Orbitron, Audiowide, Rajdhani, Michroma, Syncopate, Outrun Future (display)
- **Space-age/70s**:
  - Headings: Rounded, geometric, or groovy fonts. Wide, bold, and friendly.
  - Families to consider: Righteous, Bungee, Comfortaa (Bold), Nunito (ExtraBold), Fredoka One
- **Y2K/2000s**:
  - Headings: Bubbly, rounded, or techno-geometric.
  - Families to consider: Audiowide, Exo 2, Rajdhani, Quicksand (Bold), Jost
- **Body text**: Always a clean, readable sans-serif. The body font is modern — the headings carry the retro weight.
  - Families to consider: Inter, DM Sans, Space Grotesk, Outfit

### Scale & Weight
- **Headings**: Large and expressive (48px-96px). ALL CAPS is common for synthwave.
- **Body**: Regular, modern size (14-16px)
- **Extreme contrast** between display headings and body text
- Letter-spacing: Wide on display headings (+0.05em to +0.15em), default on body

## Color

### Philosophy
Color defines the ERA in retro futurism. The palette is the single strongest era signal. Colors are bold, saturated, and unapologetically reference a specific time period.

### Palette by Era

**Synthwave / 80s** (most popular variant):
- Background: Near-black (#0D0221, #1A0A2E, #0F0C29)
- Primary: Hot pink/magenta (#FF00FF, #FF2D95, #F72585)
- Secondary: Electric cyan (#00FFFF, #00D4FF, #4CC9F0)
- Tertiary: Deep purple (#7209B7, #560BAD)
- Accent: Chrome gold (#FFD700) or laser red (#FF0044)
- Neon glow: Apply to text and accent elements via `text-shadow: 0 0 20px #FF00FF, 0 0 40px #FF00FF`

**Space Age / 70s**:
- Background: Deep navy (#0A1628) or cream (#F5F0E8)
- Primary: Orange (#FF6D00, #E65100)
- Secondary: Teal (#00796B, #009688)
- Tertiary: Mustard/gold (#FFB300, #FFC107)
- Accent: Chrome silver or warm brown (#795548)

**Y2K / 2000s**:
- Background: Silver/light gray (#E8E8E8) or white
- Primary: Iridescent blue (#4FC3F7, #29B6F6)
- Secondary: Hot pink (#EC407A, #F06292)
- Tertiary: Lime (#76FF03, #B2FF59)
- Accent: Chrome/metallic effects, bubble textures

### Neon Glow (Synthwave)
```css
/* Text glow */
text-shadow: 0 0 10px #FF00FF, 0 0 20px #FF00FF, 0 0 40px #FF00FF;

/* Box glow */
box-shadow: 0 0 15px rgba(255,0,255,0.5), 0 0 30px rgba(255,0,255,0.3);

/* Border glow */
border: 1px solid #FF00FF;
box-shadow: 0 0 10px rgba(255,0,255,0.5), inset 0 0 10px rgba(255,0,255,0.1);
```

## Spacing & Layout

### Grid System
- **Synthwave**: Often uses a VISIBLE perspective grid (the classic "outrun" receding grid lines)
- **General**: Standard 12-column grid underneath, but overlaid with decorative grid elements
- Full-bleed backgrounds with centered content containers

### Spacing Philosophy
- **Cinematic**: Wide, panoramic sections with full-viewport heights
- Hero sections: 100vh or close to it. Dramatic.
- Internal content: Standard comfortable spacing (16px-32px)
- Let backgrounds breathe — the decorative elements need space to be seen

### Composition
- **Hero-dominant**: A dramatic full-screen hero section sets the tone
- **Layered depth**: Foreground content over mid-ground effects over background stars/grid
- **Centered compositions**: Symmetry is common for the "grand" sci-fi feel
- **Horizontal rules**: Neon/glowing lines separate sections

## Borders & Shadows

### Philosophy
Borders and shadows in retro futurism are **decorative and glowing**, not functional. They emit light rather than cast darkness. The key effect is GLOW — elements look like neon signs or laser lights.

### Implementation
- **Borders**: 1-2px in neon/accent color with accompanying glow
  - `border: 1px solid #FF00FF; box-shadow: 0 0 10px rgba(255,0,255,0.5);`
- **Shadows**: NOT standard dark drop-shadows. Instead, GLOWING shadows in the accent color:
  - `box-shadow: 0 0 20px rgba(255,0,255,0.4), 0 0 60px rgba(255,0,255,0.2);`
- **Border radius**: Depends on era:
  - Synthwave: 0px-4px (angular) or pill-shaped (for buttons)
  - Space-age: 12px-24px (rounded, organic)
  - Y2K: Fully rounded, bubbly
- **Textures**: Scan lines (repeating 2px transparent/dark stripes), noise/grain, CRT curvature
- **Line effects**: Horizontal or perspective grid lines in low-opacity neon colors

## Components

### Buttons
- **Synthwave**: Bordered with neon glow. Background transparent or very dark. Text in neon color. Hover: glow intensifies.
  - `border border-[#FF00FF] text-[#FF00FF] shadow-[0_0_15px_rgba(255,0,255,0.4)] hover:shadow-[0_0_25px_rgba(255,0,255,0.6)]`
- **Space-age**: Rounded, solid fill in orange/teal, chrome border optional
- **Y2K**: Bubbly, rounded, gradient fill (metallic/iridescent), glossy highlight

### Cards
- **Synthwave**: Dark glass with neon border. Very low opacity fill (bg-white/5). Neon border glow.
- **Space-age**: Solid fills in era colors, rounded corners
- **Y2K**: Glossy, bubble-like cards with subtle gradients and chrome edges
- All variants: keep content minimal per card, let the styling be the star

### Navigation
- **Synthwave**: Transparent nav with neon text. Active item glows. Optional scan-line texture.
- Logo area: Opportunity for the most expressive retro-futuristic typography
- Keep nav items minimal — the atmospheric design is the focus

### Decorative Elements
These are ESSENTIAL, not optional:
- **Grid floor**: CSS perspective grid receding into the distance (synthwave signature)
- **Star field**: Small dots at various opacities in the background
- **Sun/horizon**: Large circle gradient (pink → orange) on the horizon line
- **Scan lines**: Repeating semi-transparent horizontal lines overlay
- **Glitch effects**: Occasional RGB shift or displacement

## Motion

### Philosophy
Animation in Retro Futurism is **cinematic and atmospheric**. The background LIVES — grids scroll, stars twinkle, neon pulses. Foreground movement is controlled and intentional.

### Implementation
- **Background animation**: Slowly scrolling grid, twinkling stars, pulsing glow. These are continuous, ambient.
- **Neon pulse**: Accent elements have a subtle pulsing glow (opacity oscillation over 2-4s)
- **Hover**: Glow intensifies, neon border brightens
- **Entrances**: Slide in from bottom with a brief glow flash
- **Glitch**: Occasional intentional "glitch" on headings — brief RGB offset or displacement
- **Transitions**: 200-400ms, ease-out for standard UI. Ambient animations can be much slower (4-10s cycles).

## Dark Mode & Light Mode

Retro Futurism (synthwave variant) is **dark-only** — the style requires darkness for neon glow effects to work. The space-age and Y2K variants have more flexibility.

### Synthwave (Dark Only)
- Background: Deep purple-black (#0D0221, #1A0A2E) — NON-NEGOTIABLE
- Neon colors (#FF2D95, #00FFFF) REQUIRE dark backgrounds to glow
- There is no "light mode synthwave" — it's like asking for a neon sign in daylight

### Space-Age Variant
- Dark mode: Deep navy (#0A1628) with chrome and orange accents
- Light mode: Warm cream (#F5F0E8) with orange, teal, and brown — retro print poster feel
- Both modes work well for this variant

### Y2K Variant
- Light mode (default): Silver/chrome backgrounds with candy-bright accents
- Dark mode: Near-black (#111111) with chrome reflections and neon accents — "The Matrix" side of Y2K
- Both modes work, but light is more authentically Y2K

### CSS Custom Properties (Synthwave)
```css
:root {
  --retro-bg: #0D0221;
  --retro-bg-mid: #1A0A2E;
  --retro-neon-pink: #FF2D95;
  --retro-neon-cyan: #00FFFF;
  --retro-purple: #7209B7;
  --retro-text: #FFFFFF;
  --retro-text-dim: rgba(255, 255, 255, 0.6);
  --retro-surface: rgba(255, 255, 255, 0.03);
}
```

## Responsive & Mobile

### Typography Scaling
- Hero headings: Desktop 72-96px → Tablet 48-64px → Mobile 36-48px
- Body: 14-16px across all breakpoints
- Neon text-shadow: Reduce blur radius on mobile (40px → 20px) to prevent bleed on small screens

### Spacing Adaptation
- Hero sections: 100vh on desktop → 70-80vh on mobile (or auto with min-height)
- Section padding: Desktop 80-120px → Tablet 60px → Mobile 40px
- Card grids: 3-col → 2-col → 1-col

### Layout Behavior
- Perspective grid floor: Reduce complexity on mobile or replace with simple gradient
- Star field background: Reduce particle count on mobile for performance
- Centered compositions adapt naturally to mobile

### Touch Targets
- Neon-bordered buttons: Ensure 44px minimum height — thin neon borders can feel small
- Add padding inside glow buttons to ensure the touch area covers the visual glow

### Performance (Critical for Retro Futurism)
- **Neon glow (text-shadow/box-shadow with multiple layers)**: EXPENSIVE on mobile — reduce to 1-2 shadow layers instead of 3-4
- **Perspective grid**: CSS perspective transform + repeating gradients — can cause jank on low-end mobile. Replace with a static gradient or simple image on mobile.
- **Star field animations**: If using JS particles, reduce count to 50-100 on mobile
- **Scan line overlay**: repeating-linear-gradient is lightweight — safe on mobile
- **Background gradient animations**: Slow, gentle animations (8s+) are fine. Avoid per-frame JS animations.
- Use `@media (prefers-reduced-motion: reduce)` to disable ambient background animations

## Content & Voice

### Headline Tone
Cinematic, dramatic, and era-specific:
- **Synthwave**: "NEON DREAMS", "BEYOND THE GRID", "MIDNIGHT PROTOCOL", "ELECTRIC HORIZONS"
- **Space-age**: "The Future Is Now", "Mission Control", "Orbit", "Destination Tomorrow"
- **Y2K**: "Loading the Future", "Digital Playground", "Connect 2000"
ALL CAPS for synthwave, title case for space-age, mixed for Y2K.

### Body Copy
Modern and clear — the retro styling carries the era reference, not the copy:
- Short, punchy sentences
- Can reference the era's optimism: "Built for what's next"
- Avoid actual period-accurate slang (too gimmicky)
- Technical vocabulary is welcome — retro futurism loves the language of technology

### CTAs
Era-flavored but functional:
- Synthwave: "Enter the Grid", "Initialize", "Launch"
- Space-age: "Begin Mission", "Launch Sequence", "Engage"
- Y2K: "Enter", "Connect", "Go"
- Keep them short — one or two words, punchy

### Microcopy
Can lean into the retro-tech theme:
- Error: "SIGNAL LOST — Reconnecting..." or "System malfunction. Retry?"
- Loading: "Initializing..." or "Establishing connection..."
- Empty state: "No signal detected" or "Scanning frequencies..."

### Content Density
LOW — retro futurism is atmospheric. The background effects, neon glow, and cinematic spacing ARE the content. Text is minimal, impactful, and sparse.

## Icons & Illustrations

### Icon Style
Geometric, angular, tech-themed:
- **Synthwave**: Thin line icons (1.5px), angular/geometric. Neon-colored or white.
- **Space-age**: Bolder strokes (2px), rounded, retro-tech (radar, satellite, rocket)
- **Y2K**: Glossy, rounded, bubble-like icons

### Recommended Sets
- Phosphor Icons (thin or light weight) — great for synthwave
- Custom SVG: Circuit-like icons, geometric wireframes
- Avoid: Organic, hand-drawn, or filled chunky icons

### Illustrations & Decorative Art
- **Synthwave**: Grid floors, chrome mountains, sunset circles, wireframe objects, laser beams
- **Space-age**: Retro rocket illustrations, orbital rings, planet silhouettes
- **Y2K**: Chrome orbs, bubble shapes, CD-ROM iridescence
- Photography: Rare in retro futurism — the style is illustrative/atmospheric, not photographic
- If photography is used: heavy color treatment (duotone in neon colors), grain overlay

### Background Art (Essential)
The background IS the illustration in retro futurism:
- Perspective grids (synthwave)
- Star fields (space-age)
- Chrome/metallic patterns (Y2K)
- These aren't optional decorations — they're fundamental to the style

## Accessibility

### Contrast
- **Neon pink (#FF2D95) on dark (#0D0221)**: ~5.2:1 — PASSES AA for normal text
- **Neon cyan (#00FFFF) on dark (#0D0221)**: ~12:1 — excellent
- **White on dark**: ~18:1 — excellent
- **Low-opacity text (60% white)**: ~7:1 on dark backgrounds — passes
- **RISK**: Neon glow text-shadow can REDUCE perceived readability despite good contrast ratios — the glow creates visual noise. Keep body text glow-free; reserve neon glow for headings only.

### Focus States
Neon-glow focus ring matching the style:
```css
:focus-visible {
  outline: 2px solid var(--retro-neon-cyan, #00FFFF);
  outline-offset: 4px;
  box-shadow: 0 0 12px rgba(0, 255, 255, 0.4);
}
```

### Motion (Critical for Retro Futurism)
Retro futurism is animation-HEAVY (background grids, star fields, neon pulses, glitch effects). All of these must respect `prefers-reduced-motion`:
- **Disable**: Grid scrolling, star field twinkling, neon pulse animations, glitch effects
- **Keep**: Static neon colors, glow shadows (they don't move), gradient backgrounds, scan line texture (it's a static overlay)
- The style loses its most atmospheric layer with reduced motion, but the color palette and typography still convey the era.

### Known Risks
- **Scan line overlay** reduces contrast by ~15% — ensure base contrast ratios account for this (aim for 6:1+ before scan lines)
- **Neon glow on text** creates visual noise — use only on large headings, never on body text or UI labels
- **Perspective grid animations** can trigger motion sensitivity — always behind `prefers-reduced-motion`
- **High saturation neon colors** (#FF00FF, #00FFFF) can cause visual fatigue — use sparingly for accents, not for large text blocks
- **Dark backgrounds with bright text**: Some users with astigmatism find light-on-dark harder to read. Offer a high-contrast mode or increase text weight slightly (500 instead of 400).
- **Glitch effects**: Can be seizure triggers — always respect prefers-reduced-motion, and keep glitch animations subtle (small offset, not full-screen flash)

## Do's and Don'ts

### Do
- Pick a specific era and commit to its palette and typography
- Use neon glow effects on accents and borders (for synthwave)
- Include at least one decorative retro-tech element (grid, scan lines, stars)
- Make the hero section dramatic and full-screen
- Let the heading font scream the decade
- Use dark backgrounds for synthwave — the neon needs darkness to glow

### Don't
- Mix eras randomly — because each retro-futurism sub-genre has a specific, recognizable visual signature; mixing 80s neon with 70s earth tones creates confusion rather than fusion
- Use generic color palettes — the colors MUST signal the era
- Skip decorative elements — they're what separates retro futurism from "dark theme with pink"; the grid floor, scan lines, and glow effects ARE the style's atmosphere
- Make body text hard to read — the retro styling is for atmosphere, not for body copy
- Overdo glitch effects — because constant visual noise overwhelms content and can trigger seizures; one or two subtle touches create intrigue, more creates chaos
- Forget contrast — neon on dark needs careful checking for readability

## Implementation Hints (Tailwind + CSS)

```css
/* Synthwave base */
.synth-bg {
  background: linear-gradient(180deg, #0D0221 0%, #1A0A2E 50%, #0F0C29 100%);
  min-height: 100vh;
}

/* Neon text */
.neon-pink {
  color: #FF2D95;
  text-shadow: 0 0 10px #FF2D95, 0 0 20px #FF2D95, 0 0 40px #FF2D95, 0 0 80px #FF2D95;
}

/* Neon border card */
.synth-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid #FF2D95;
  box-shadow: 0 0 15px rgba(255, 45, 149, 0.3), inset 0 0 15px rgba(255, 45, 149, 0.05);
  border-radius: 4px;
}

/* Perspective grid floor */
.grid-floor {
  background: linear-gradient(transparent 65%, rgba(255,45,149,0.1) 100%),
    repeating-linear-gradient(90deg, rgba(255,45,149,0.15) 0px, transparent 1px, transparent 60px),
    repeating-linear-gradient(0deg, rgba(255,45,149,0.15) 0px, transparent 1px, transparent 60px);
  transform: perspective(500px) rotateX(60deg);
  transform-origin: bottom;
}

/* Scan lines overlay */
.scan-lines::after {
  content: '';
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.15) 2px, rgba(0,0,0,0.15) 4px);
  pointer-events: none;
}
```

```
/* Tailwind classes */
/* Background */
bg-gradient-to-b from-[#0D0221] via-[#1A0A2E] to-[#0F0C29] min-h-screen text-white

/* Neon heading */
text-[#FF2D95] [text-shadow:0_0_10px_#FF2D95,0_0_30px_#FF2D95]

/* Card with neon border */
bg-white/[0.03] border border-[#FF2D95] shadow-[0_0_15px_rgba(255,45,149,0.3)] rounded

/* Neon button */
border border-[#00FFFF] text-[#00FFFF] px-6 py-3 shadow-[0_0_10px_rgba(0,255,255,0.4)] hover:shadow-[0_0_25px_rgba(0,255,255,0.6)] transition-shadow duration-300

/* Font stack */
font-display: 'Orbitron', 'Audiowide', sans-serif
font-body: 'Inter', 'Space Grotesk', sans-serif

/* Color tokens (synthwave) */
--color-bg: #0D0221
--color-neon-pink: #FF2D95
--color-neon-cyan: #00FFFF
--color-deep-purple: #7209B7
--color-surface: rgba(255,255,255,0.03)
--color-text: #FFFFFF
--color-text-secondary: rgba(255,255,255,0.6)
```

## Reference Touchstones

When building in this style, channel the spirit of:
- Hotline Miami's visual identity
- Tron: Legacy's UI design
- Kavinsky and The Midnight album artwork
- Stranger Things title sequence
- Blade Runner 2049's UI screens
- r/outrun and synthwave album covers
- 80s arcade cabinet graphics
- NASA mission control interfaces (for space-age variant)
