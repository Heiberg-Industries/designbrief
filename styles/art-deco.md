# Art Deco

> Geometric glamour — the luxury of precision, gilded and bold.

## Non-Negotiables

**If you skip any of these three, it is not Art Deco.** These are the DNA of the style — without them, the result reads as "elegant" or "fancy" rather than recognizably Art Deco:

1. **Geometric ornamentation — symmetrical patterns, fan shapes, and angular motifs.** Art Deco is defined by its decorative geometry: chevron patterns, sunburst/fan shapes, stepped pyramids, zigzag lines, concentric circles, and angular framing elements. These decorative motifs MUST be present — on dividers, as background patterns, framing headings, or as section accents. Without geometric ornamentation, it's just "elegant design." Use at minimum: decorative dividers/rules with geometric patterns, and geometric framing or accent elements.

2. **A bold metallic or high-contrast palette with gold, black, and one luxury accent.** Art Deco's color signature is HIGH contrast with metallic luxury. The canonical palette: deep black or navy + gold/brass + one jewel tone (emerald, ruby, sapphire). The gold element is NON-NEGOTIABLE — it can be a gradient simulating metallic gold (#C9A84C → #F4E4B0 → #C9A84C), solid gold (#C9A84C, #D4AF37), or champagne (#F5E6CC). Without the metallic/gold element, it reads as "dark elegant" not "Art Deco."

3. **Strong vertical and symmetrical composition.** Art Deco layouts are CENTERED and SYMMETRICAL. Content flows down a strong central axis. Elements are balanced left-right. Tall, vertical proportions dominate (think skyscraper, not sprawling ranch). Headers and sections have a strong vertical rhythm. Asymmetric or off-grid layouts break the Art Deco feel.

### Quick self-test

Can you point to geometric decorative elements (fans, chevrons, sunbursts, stepped lines)? Is gold/metallic present? Is the layout strongly centered and symmetrical? Does it evoke 1920s luxury — a grand hotel lobby, a Gatsby party invitation? If yes, it's Art Deco.

## Identity

- **Origin**: Emerged in 1920s Paris, flourished through the 1930s globally. Named after the 1925 Exposition des Arts Décoratifs. Influenced by Cubism, Futurism, Egyptian and Aztec art. Defined the visual identity of the Jazz Age. Iconic examples: Chrysler Building, Empire State Building, Miami's South Beach architecture, Erte's fashion illustrations.
- **Mood**: Luxurious, geometric, glamorous, bold, opulent, dramatic, sophisticated, celebratory
- **Best for**: Luxury e-commerce, hospitality (hotels, restaurants, bars), fashion, jewelry, events/galas, wedding sites, high-end real estate, entertainment, cocktail bars, speakeasy branding
- **Avoid for**: Children's products, casual consumer apps, tech startups, healthcare, budget brands, anything that needs to feel approachable or casual

## Typography

### Philosophy
Typography in Art Deco is **display-driven and decorative**. Headings use ornate, geometric display faces that ARE the decoration. Body text is clean and readable — the display face does the heavy lifting.

### Font Characteristics
- **Primary (headings)**: Geometric display fonts with Art Deco DNA — tall, angular, with sharp geometric detailing. Often ALL CAPS with wide letter-spacing.
  - Families to consider: Playfair Display (Bold/Black), Cinzel, Poiret One, Josefin Sans, Raleway (Light to Medium), Bebas Neue, Cormorant Garamond (Bold), Forum
- **Secondary (body)**: Clean, readable serif or sans-serif at regular weight.
  - Serif: Cormorant, EB Garamond, Libre Baskerville
  - Sans-serif: Raleway, Josefin Sans, Lato
- **Decorative accent**: Consider an ultra-display font for single large letters or monograms

### Scale & Weight
- **Hero headings**: Large (48px-80px), often Light or Regular weight to show the font's geometric structure. The font's design, not its boldness, creates impact.
- **Body**: Regular (400) at 16-18px with generous line-height (1.6-1.8)
- **ALL CAPS headings** with generous letter-spacing (+0.1em to +0.2em) — this is very characteristic
- **Tracking is critical**: Tight tracking kills the Deco feel. Open it up.

## Color

### Philosophy
Art Deco color is about **HIGH CONTRAST LUXURY**. Deep, rich backgrounds set the stage for metallic accents and jewel tones. The palette should feel like walking into a 1920s grand hotel: dark walls, gold fixtures, emerald green marble.

### Palette Construction
- **Background**: Deep, rich darks:
  - Black: #0D0D0D, #111111
  - Navy: #0A1628, #0F1B2D
  - Deep emerald: #0A2E2A, #0C3B2E
  - Charcoal: #1A1A2E
- **Primary accent (GOLD — non-negotiable)**:
  - Solid gold: #C9A84C, #D4AF37, #B8860B
  - Metallic gradient: linear-gradient(135deg, #C9A84C, #F4E4B0, #C9A84C)
  - Champagne/light gold: #F5E6CC, #E8D5B7
- **Secondary accent (ONE jewel tone)**:
  - Emerald: #00875A, #2E8B57
  - Ruby: #9B1B30, #C62828
  - Sapphire: #1B4D8E, #1565C0
  - Amethyst: #6A0DAD, #7B1FA2
- **Text**: Gold for headings on dark backgrounds, cream/off-white (#F5F0E8, #E8E0D0) for body text
- **Decorative elements**: Gold lines, gold geometric patterns, gold borders

### Gold Gradient (The Signature Effect)
```css
/* Metallic gold gradient — apply to decorative elements */
background: linear-gradient(135deg, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C);
/* Or simpler: */
background: linear-gradient(135deg, #C9A84C 0%, #F4E4B0 50%, #C9A84C 100%);
/* For gold text: */
background: linear-gradient(135deg, #C9A84C, #F4E4B0, #C9A84C);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
```

## Spacing & Layout

### Grid System
- **Centered, symmetrical layout** — strong vertical axis
- Single-column or two-column layouts (symmetrically balanced)
- Max-width: 1000-1200px centered
- Content is framed, not sprawling

### Spacing Philosophy
- **Generous and formal** — like the proportions of a grand building
- Section padding: 80px-120px vertical
- Between elements: 32px-48px
- Inside cards/containers: 32px-48px padding
- The spacing should feel ceremonial and measured, not casual

### Composition
- **Strong central axis**: Headings, decorative elements, and CTAs all center-aligned
- **Vertical emphasis**: Tall sections, tall cards, tall decorative elements
- **Decorative framing**: Geometric borders or ornamental lines frame content sections
- **Symmetry in everything**: If an element appears on the left, mirror it on the right
- **Layered decorative elements**: Geometric patterns behind content, ornamental dividers between sections

## Borders & Shadows

### Philosophy
Borders in Art Deco are DECORATIVE elements — ornamental lines, geometric frames, and patterned dividers. They're not subtle; they're part of the visual language. Shadows are minimal.

### Implementation
- **Borders**: Thin gold lines (1-2px) as decorative rules and frames.
  - Simple: `border: 1px solid #C9A84C`
  - Double-line: Two parallel gold lines with a gap between them
  - Stepped: Art Deco's signature stepped/terraced border pattern
- **Decorative dividers**: Horizontal gold lines with geometric elements — a central diamond, a fan shape, or a stepped motif.
- **Shadows**: Minimal or absent. Art Deco is about surface decoration, not depth. If used, very subtle.
- **Border radius**: 0px for most elements (angular is on-brand). Exception: arch/fan shapes for specific decorative elements.
- **Gold frames**: Thin gold borders framing cards, images, or sections. Can be double-lined.

## Components

### Buttons
- Solid gold fill with dark text, OR outlined with gold border on dark background
- 0px border-radius (rectangular) or very slight (2-4px)
- ALL CAPS text with generous letter-spacing
- Gold gradient fill for primary CTA
- Hover: brightness increases, subtle shimmer
- Secondary: outlined in gold, no fill, gold text

### Cards
- Dark background (one shade lighter than page background)
- Thin gold border (1px-2px)
- 0px border radius (angular)
- Optional: decorative corner elements (small gold geometric accents at corners)
- Heading in gold, body in cream/off-white

### Navigation
- Centered nav with brand in the center or left (symmetrical arrangement)
- Nav links in ALL CAPS with letter-spacing
- Active state: gold underline or gold text
- Optional: thin gold bottom border on the navbar
- The nav should feel like a theater marquee

### Decorative Elements (ESSENTIAL)
These are what make Art Deco recognizable:
- **Fan/sunburst dividers**: Semi-circular fan shapes in gold between sections
- **Chevron patterns**: V-shaped repeating patterns as backgrounds or borders
- **Stepped/terraced lines**: The classic Art Deco "ziggurat" stepping pattern
- **Geometric frames**: Rectangles within rectangles, creating layered framing
- **Corner ornaments**: Small geometric details at card or section corners
- **Line patterns**: Parallel lines, crossing diagonals, concentric shapes
- These can be implemented as CSS borders, SVGs, or background patterns

## Motion

### Philosophy
Animation in Art Deco is **revealing and theatrical**. Elements appear with ceremony — unveilings, reveals, and dramatic entrances. Think of a theater curtain rising.

### Implementation
- **Entrances**: Fade in with subtle scale (0.95 → 1), or reveal from center outward. Staggered delays for sequential elements.
- **Decorative elements**: Gold lines can animate in (drawing from center to edges). Fan shapes can rotate into view.
- **Hover**: Gold shimmer effect (gradient shift), brightness increase
- **Transitions**: 300-500ms, ease-out. Slightly slow — ceremonial, not rushed.
- **Scroll**: Sections reveal as you scroll. Decorative elements animate in when they enter the viewport.
- **Avoid**: Anything bouncy, playful, or casual. Movement should feel orchestrated.

## Dark Mode & Light Mode

Art Deco is **dark-first** by nature — the style's identity depends on deep, rich backgrounds (black, navy, deep emerald) that let gold metallic accents shine. Dark mode IS the default.

### Dark Mode (Default)
The canonical Art Deco palette:
- Page background: Deep black (#0D0D0D) or navy (#0A1628)
- Card surfaces: One step lighter (#1A1A1A, #1A1A2E)
- Text: Warm cream (#F5F0E8) for body, gold gradient for headings
- Borders: Gold (#C9A84C) at 100% or reduced to 60% opacity for secondary lines
- Shadows: Minimal — near-invisible. Art Deco relies on borders and decoration, not shadow depth.

### Light Mode (Inverted Deco)
A less common but valid variant — think Art Deco in daylight (Miami's South Beach):
- Page background: Warm cream (#F5F0E8) or champagne (#F5E6CC)
- Card surfaces: White (#FFFFFF) with gold borders
- Text: Deep black (#0D0D0D) for body, gold or dark jewel tones for headings
- Gold accents remain gold — they work on both dark and light
- Jewel tone accents (emerald, ruby) may need darkening for contrast on light backgrounds
- Decorative geometric patterns: Gold on cream instead of gold on black
- The light variant feels more "daytime glamour" — afternoon tea at The Ritz vs. evening at a speakeasy

### CSS Custom Properties
```css
:root {
  --deco-bg: #0D0D0D;
  --deco-surface: #1A1A1A;
  --deco-gold: #C9A84C;
  --deco-gold-light: #F4E4B0;
  --deco-text: #F5F0E8;
  --deco-text-secondary: rgba(245, 240, 232, 0.6);
}
.light-deco {
  --deco-bg: #F5F0E8;
  --deco-surface: #FFFFFF;
  --deco-text: #0D0D0D;
  --deco-text-secondary: rgba(13, 13, 13, 0.6);
}
```

## Responsive & Mobile

Art Deco's centered, symmetrical layout adapts naturally to mobile — it's already single-column-friendly.

### Typography Scaling
- Hero headings: Desktop 64-80px → Tablet 48-56px → Mobile 36-44px
- Body: Stays at 16-18px across breakpoints
- Letter-spacing on ALL CAPS headings: Desktop +0.15em → Mobile +0.1em (tighter to save space)

### Spacing Adaptation
- Section padding: Desktop 100-120px → Tablet 60-80px → Mobile 40-60px
- Card padding: Desktop 48px → Mobile 24-32px
- Decorative dividers: Scale proportionally, maintain gold line weight at 1px minimum

### Layout Behavior
- Centered single-column works perfectly on mobile — Art Deco's symmetry is naturally responsive
- Two-column card layouts stack to single column below 768px
- Decorative corner ornaments on cards: Simplify or remove on mobile (they become too small to appreciate)
- Fan/sunburst dividers: Reduce height on mobile (80px → 40px) but keep visible

### Touch Targets
- Gold-bordered buttons: Ensure 44px minimum height. ALL CAPS small text buttons need generous padding.
- Navigation links with wide letter-spacing: Increase tap area with padding

### Performance
- Gold gradient text uses background-clip — well-supported, minimal performance impact
- Decorative CSS patterns (conic-gradient fans, stepped borders): Lightweight, no performance concern
- SVG geometric ornaments: Inline for small decorations, consider lazy-loading large decorative backgrounds

## Content & Voice

Art Deco copy is **formal, dramatic, and celebratory** — the voice of a luxury brand, a grand invitation, or a master of ceremonies.

### Headline Tone
Theatrical and commanding. Headlines announce with gravitas:
- "An Evening of Distinction"
- "Timeless Craftsmanship"
- "The Art of Excellence"
- "Where Elegance Meets Innovation"
Short, declarative phrases. ALL CAPS reinforces the monumental feel.

### Body Copy
Formal but not stiff. Evocative, sensory language that paints a picture of luxury:
- Rich adjectives: "exquisite," "resplendent," "impeccable," "bespoke"
- References to craft, heritage, and timelessness
- Moderate length — enough to convey quality, not so much that it overwhelms the visual design
- Avoid casual language, contractions, or tech jargon

### CTAs
Commanding and invitational — like receiving an exclusive invitation:
- "Reserve Your Place"
- "Begin the Experience"
- "Discover the Collection"
- "Request an Invitation"
- Avoid casual CTAs like "Get started" or "Sign up" — too informal for Art Deco

### Microcopy
Maintain the formality even in small text:
- Error: "We were unable to process your request. Please try again."
- Empty state: "Nothing here yet — your collection awaits."
- Loading: "Preparing your experience..."

### Content Density
LOW to MODERATE — Art Deco is about presence, not information density. Generous whitespace around every text block. Each section makes one powerful statement.

## Icons & Illustrations

### Icon Style
Geometric and linear — matching Art Deco's angular, decorative vocabulary:
- Thin line icons (1.5px stroke) in gold or cream
- Geometric construction: circles, triangles, chevrons, not organic curves
- Icons can be framed in small geometric borders (diamond, octagon)
- Custom decorative icons preferred: fan shapes, chevrons, stylized stars

### Recommended Sets
- Phosphor Icons (thin weight) — geometric enough for Deco
- Custom SVG icons built from geometric shapes are most authentic
- Avoid: rounded/organic icon sets (Heroicons rounded, Feather's organic feel)

### Illustrations & Photography
- Photography: High-contrast, dramatic lighting. Subjects: architecture, luxury objects, formal settings
- Color treatment: Desaturated with gold/warm highlights, or high-contrast black & gold
- Illustrations: Geometric line art in gold — architectural blueprints, geometric portraits, stylized cityscapes
- Decorative elements > illustrations — Art Deco uses geometric patterns rather than figurative illustration

### Decorative Elements (Primary Visual Language)
Art Deco's "illustration" IS its geometric ornamentation:
- Fan/sunburst shapes (CSS conic-gradient or SVG)
- Chevron and zigzag patterns (repeating CSS backgrounds)
- Stepped/terraced border designs
- Geometric framing elements at section boundaries
- Corner ornaments on cards and panels

## Accessibility

### Contrast
- Gold text (#C9A84C) on black (#0D0D0D): ~7.5:1 contrast ratio — PASSES AA and AAA
- Cream text (#F5F0E8) on black (#0D0D0D): ~16:1 — excellent
- Secondary text (rgba cream at 60%): Check carefully — may need brightening to meet 4.5:1
- Gold gradient text: The darkest point of the gradient determines contrast — ensure the darkest gold (#C9A84C) still meets ratio requirements
- Light mode: Gold on cream is LOW contrast (~2.5:1) — use solid dark gold (#8B7225) for text in light mode

### Focus States
Gold-outlined focus ring matching the decorative language:
```css
:focus-visible {
  outline: 2px solid #C9A84C;
  outline-offset: 4px;
  box-shadow: 0 0 0 6px rgba(201, 168, 76, 0.2);
}
```
The gold ring harmonizes with the style's border language.

### Motion
- `prefers-reduced-motion`: Disable gold shimmer effects, entrance animations, and decorative element reveals
- Keep: Static gold gradients, border styling, layout structure — Art Deco is fundamentally a STATIC style, so reduced motion loses very little

### Known Risks
- ALL CAPS headings with wide letter-spacing: Screen readers handle ALL CAPS correctly, but letter-spacing can cause some screen readers to spell out words. Use `aria-label` with normal casing if needed.
- Decorative geometric elements (fans, chevrons, corner ornaments): Mark as `aria-hidden="true"` — these are purely decorative
- Gold gradient text using background-clip: Ensure fallback color is set for browsers that don't support it
- Small ALL CAPS button text with wide tracking: Harder to read for users with dyslexia — ensure font size is at least 14px

## Do's and Don'ts

### Do
- Use geometric decorative elements (fans, chevrons, stepped patterns) liberally
- Make gold/metallic a prominent part of the palette
- Center-align headings and maintain strong symmetry
- Use ALL CAPS for headings with generous letter-spacing
- Add decorative dividers between sections
- Frame content with geometric borders
- Let the style feel LUXURIOUS — generous spacing, rich colors, metallic accents

### Don't
- Use rounded corners — because sharp, angular geometry IS Art Deco's visual language; rounding softens and modernizes the feel, losing the 1920s character
- Skip the gold — it's the single most recognizable Art Deco color signal; without it, the design reads as "elegant dark theme" not Art Deco
- Use asymmetric or casual layouts
- Choose friendly, rounded fonts (the typography should feel geometric and tall)
- Use pastel or muted colors — Art Deco is HIGH contrast by nature; deep darks and bright metallics create the dramatic, luxurious tension that defines the era
- Over-modernize — some ornamental excess is appropriate and expected
- Use gradient backgrounds or glassmorphism effects — Art Deco is opaque and solid; translucent, blurred surfaces break the era's commitment to bold, defined surfaces and structural clarity

## Implementation Hints (Tailwind + CSS)

```css
/* Art Deco base */
.deco-bg {
  background: #0D0D0D;
  color: #F5F0E8;
}

/* Gold gradient text */
.deco-gold-text {
  background: linear-gradient(135deg, #C9A84C 0%, #F4E4B0 50%, #C9A84C 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Gold border frame */
.deco-frame {
  border: 1px solid #C9A84C;
  padding: 48px;
}

/* Fan divider (CSS triangle) */
.deco-fan {
  width: 120px;
  height: 60px;
  background: conic-gradient(from -90deg at 50% 100%, #C9A84C 0deg, transparent 60deg, transparent 120deg, #C9A84C 180deg);
  margin: 0 auto;
}

/* Stepped border pattern */
.deco-stepped {
  border-top: 1px solid #C9A84C;
  border-bottom: 1px solid #C9A84C;
  padding: 4px 0;
  position: relative;
}
.deco-stepped::after {
  content: '';
  position: absolute;
  top: 4px;
  left: 10%;
  right: 10%;
  border-top: 1px solid #C9A84C;
}
```

```
/* Tailwind classes */
/* Background */
bg-[#0D0D0D] text-[#F5F0E8]

/* Gold heading (use inline style for gradient text) */
text-4xl uppercase tracking-[0.15em] font-light

/* Card */
border border-[#C9A84C] p-8 bg-[#1A1A1A]

/* Gold button */
bg-gradient-to-r from-[#C9A84C] via-[#F4E4B0] to-[#C9A84C] text-[#0D0D0D] px-8 py-4 uppercase tracking-widest font-semibold text-sm hover:brightness-110 transition-all duration-300

/* Outlined button */
border border-[#C9A84C] text-[#C9A84C] px-8 py-4 uppercase tracking-widest text-sm hover:bg-[#C9A84C] hover:text-[#0D0D0D] transition-all duration-300

/* Gold rule divider */
border-t border-[#C9A84C] my-16

/* Font stack */
font-display: 'Cinzel', 'Playfair Display', serif
font-body: 'Cormorant', 'EB Garamond', serif
/* Or sans-serif body: */
font-body-sans: 'Raleway', 'Josefin Sans', sans-serif

/* Color tokens */
--color-bg: #0D0D0D
--color-bg-card: #1A1A1A
--color-gold: #C9A84C
--color-gold-light: #F4E4B0
--color-jewel: #00875A            /* emerald variant */
--color-text: #F5F0E8
--color-text-secondary: rgba(245,240,232,0.6)
```

## Reference Touchstones

When building in this style, channel the spirit of:
- The Chrysler Building and Empire State Building lobbies
- The Great Gatsby (2013 film) visual identity
- Miami's South Beach Art Deco Historic District
- Erte's fashion illustrations
- 1920s-30s movie poster design
- Grand hotel lobbies (The Savoy, Claridge's, The Waldorf)
- Boardwalk Empire's opening sequence
- Luxury cocktail bar and speakeasy branding
