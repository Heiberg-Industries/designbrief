# Minimalism

> Less, but better — every element earns its place.

## Non-Negotiables

**If you skip any of these three, it is not Minimalism.** These define the essence of the style — without them, the result reads as "empty" or "unfinished" rather than intentionally restrained:

1. **Extreme reduction — every element must justify its existence.** If an element can be removed without losing meaning, remove it. No decorative borders, no ornamental icons, no background patterns, no "nice to have" UI chrome. Navigation has only essential links. Cards have only essential content. Footers have only essential links. Visible UI elements should be countable. If your page has more than 2-3 colors, more than 2 font weights, or more than one decorative element, you've over-designed.

2. **Typography and whitespace as the primary design tools.** With so few elements, the ones that remain must be masterfully composed. Typography is large, carefully weighted, and precisely spaced. Whitespace is generous — not "we ran out of content" generous, but "every pixel of space is intentional" generous. The ratio of whitespace to content should feel closer to 70:30 than 50:50. Margins and padding are noticeably more generous than in other styles.

3. **A near-monochromatic palette with ONE accent at most.** The color scheme is built on shades of one hue (usually neutrals — white, off-white, gray, black) with at most one accent color used sparingly for interactive elements. If you find yourself reaching for a third color, stop. The restraint IS the design.

### Quick self-test

Count the distinct visual elements on your page. Can you reduce it by 30%? Does the whitespace feel generous to the point of being luxurious? Is there only ONE accent color? Could a person describe your page's visual identity in two words (e.g., "black and white", "lots of space")? If yes, it's Minimalism.

## Identity

- **Origin**: Rooted in the "less is more" philosophy of Ludwig Mies van der Rohe, Japanese aesthetics (ma — negative space), and Dieter Rams' 10 principles of good design. In digital, influenced by early Apple design under Jony Ive and typographic web design.
- **Mood**: Calm, focused, refined, spacious, sophisticated, intentional, quiet confidence
- **Best for**: Luxury brands, editorial/publishing, portfolios, wellness/health, fashion, architecture, photography, premium SaaS, personal sites
- **Avoid for**: Data-dense dashboards, marketplaces with lots of products, children's apps, anything that needs to feel energetic or playful, e-commerce with many CTAs

## Typography

### Philosophy
Typography is the HERO of minimalist design. With decoration stripped away, every typographic choice is magnified. The font selection, weight, size, and spacing carry the entire visual identity.

### Font Characteristics
- **Primary (headings)**: Refined sans-serifs or elegant serifs. Minimal weight variation — often just one weight for headings (Medium or Light, not Bold). The font itself should be beautiful, not made beautiful by bolding it.
  - Sans-serif families: Helvetica Neue, SF Pro, Inter (Light/Regular), Instrument Sans, Geist, Söhne
  - Serif families: Playfair Display, Cormorant, EB Garamond, Freight Text, GT Sectra
- **Secondary (body)**: Same family at regular weight, or a highly legible companion. System fonts work beautifully in minimalism.
  - Families to consider: Inter, system-ui, Helvetica Neue, SF Pro Text
- **ONE font family is often enough** — heading and body from the same family at different weights

### Scale & Weight
- **Large, confident headings** — 48px-80px for hero text, but in Light or Regular weight (300-400), not Bold. The size does the work, not the weight.
- Body: Regular (400) at 16-18px, generous line-height (1.6-1.8)
- Very few text sizes — 3-4 across the entire page
- Letter-spacing: slightly open on headings (+0.01em to +0.03em), default on body
- Extreme contrast between heading size and body size, but NOT through weight — through scale

## Color

### Philosophy
Color in Minimalism is an exercise in restraint. The palette is barely there — neutrals dominate, and any color is an event. When color appears, it demands attention precisely because everything else is quiet.

### Palette Construction
- **Background**: White (#FFFFFF), off-white (#FAFAFA, #F8F7F4), or very light warm gray. Can also be near-black for dark minimalism.
- **Text**: Near-black (#111111, #1A1A1A) for primary, medium gray (#888888, #999999) for secondary. The text color is slightly warmer or cooler than pure black — it has personality.
- **Accent**: ONE color, used sparingly — only for links, CTAs, and active states. No more than 5-10% of the page's visual area should be the accent color. It could be muted (a dusty rose, sage green) or vivid (a single bright blue) — but only ONE.
- **Surfaces**: White or off-white. Cards barely differ from the background — perhaps a shade lighter/darker, or a very subtle border.
- **Zero decorative color** — no colored backgrounds for sections, no colored badges, no tinted surfaces

### Dark Minimalism
A powerful variant:
- Near-black background (#0A0A0A, #111111)
- Off-white text (#E8E8E8, #D4D4D4)
- Same single accent color, slightly brightened
- The restraint is even more dramatic in dark mode

## Spacing & Layout

### Grid System
- Simple grid, often just a single centered column for editorial content
- Max-width is narrower than typical — 640-800px for text content, up to 1200px for multi-column layouts
- Generous margins from viewport edges

### Spacing Philosophy
- **Aggressively generous whitespace** — this is the defining spatial characteristic
- Section padding: 120px-200px vertical. This is NOT a typo — sections breathe.
- Between elements: 32px-64px. More than feels "necessary."
- Inside cards/containers: 32px-48px padding
- The whitespace IS the design — it creates calm, focus, and sophistication
- Use consistent spacing values from a tight scale (8, 16, 24, 32, 48, 64, 96, 128)

### Composition
- **Single-column layouts** for text-heavy content (the most minimal option)
- **Asymmetric two-column** for visual interest without complexity
- Elements are placed with care — every position is deliberate
- No visual clutter — if two elements are close together, they better be closely related
- Let elements breathe — never crowd

## Borders & Shadows

### Philosophy
Minimalism uses the LEAST amount of visual separation possible. If whitespace alone can distinguish elements, don't add a border. If a subtle border works, don't add a shadow.

### Implementation
- **Shadows**: Extremely rare or absent. If used, barely perceptible — `0 1px 2px rgba(0,0,0,0.04)`. Most minimalist designs use zero shadows.
- **Borders**: Hairline (1px) in very light gray (#E5E5E5, #EBEBEB). Used only where essential — table rows, input fields, section dividers.
- **Border radius**: 0px (sharp) or very small (2px-4px). Large rounded corners add visual noise. Pick sharp or slightly rounded and be consistent.
- **Dividers**: A single thin line, or just whitespace. Prefer whitespace.
- **Visual separation**: Achieved through space, not lines. Elements are grouped by proximity and separated by generous gaps.

## Components

### Buttons
- Primary: Solid fill in accent color OR near-black. Small radius (0-4px). Medium weight text (500).
- Secondary: Outlined with thin 1px border, or text-only underlined
- Very minimal padding variation — all buttons roughly the same size
- Hover: Subtle opacity change or slight color shift. Nothing dramatic.
- Keep button text short — one or two words maximum

### Cards
- Barely visible — white on off-white, or defined by a single hairline border
- NO shadow (or the absolute minimum if forced)
- Generous internal padding (32px+)
- Minimal content: heading, short description, one action
- No decorative elements inside cards

### Navigation
- Extremely simple — logo + a few text links + one CTA (optional)
- No background color on the navbar (transparent over the page background)
- Text links in regular weight, active state indicated by color or underline
- Consider hiding navigation behind a menu icon even on desktop for ultimate minimalism
- Sticky nav is fine but should be nearly invisible — just text floating at the top

### Inputs & Forms
- Hairline bottom border only (no full border box) — the most minimal input style
- Or: thin full border, very small radius
- Focus: accent color on the border, nothing else changes
- Labels: small, above the input, in secondary text color
- No icons inside inputs unless absolutely necessary

## Motion

### Philosophy
Animation in Minimalism is **nearly imperceptible** — so subtle that users feel it more than see it. Movement should never draw attention to itself.

### Implementation
- **Transitions**: Slow and smooth — 300-500ms, ease-out. The slowness feels intentional and luxurious.
- **Hover**: Subtle opacity change (1 → 0.7) or color shift. No scale, no translate.
- **Entrances**: Gentle fade-in, optional subtle upward drift (translateY 8px → 0). Staggered delays (100-200ms) for lists.
- **Scroll**: No parallax. Content simply appears as you scroll. Optional fade-in-on-scroll.
- **Avoid**: Anything bouncy, springy, fast, or attention-grabbing. The goal is calm.

## Dark Mode & Light Mode

### Mode Preference
Minimalism is equally suited to both light and dark modes. White-on-white minimalism and dark-on-dark minimalism are both powerful expressions of restraint. Neither mode is "primary" — the choice depends on brand personality and content type. Photography-heavy sites often benefit from dark mode; text-heavy editorial sites often benefit from light mode.

### Light Mode
- **Background**: White (#FFFFFF) or off-white (#FAFAFA, #F8F7F4)
- **Text**: Near-black (#1A1A1A) for primary, medium gray (#888888) for secondary
- **Borders**: Hairline in light gray (#E5E5E5, #EBEBEB)
- **Accent**: Single accent color at full saturation
- The classic minimalist expression — clean, open, airy

### Dark Mode
- **Background**: Near-black (#0A0A0A, #111111) — never pure #000000
- **Text**: Off-white (#E8E8E8) for primary, muted gray (#D4D4D4, #A3A3A3) for secondary
- **Borders**: Become more important for definition — shift to `rgba(255,255,255,0.1)` or subtle light borders (#222222, #2A2A2A)
- **Accent**: Same single accent color, slightly brightened (+10-15% lightness) to maintain contrast
- **Shadows**: Nearly invisible — replace with subtle border-based separation
- The restraint is even more dramatic in dark mode — every element matters more. A single accent-colored link on a dark page is striking.

### Implementation
Both modes use the same single accent color (adjusted for contrast). Toggle via CSS custom properties or Tailwind's `dark:` variant:

```css
:root {
  --color-bg: #FFFFFF;
  --color-text-primary: #1A1A1A;
  --color-text-secondary: #888888;
  --color-border: #EBEBEB;
  --color-accent: #2563EB;
}

@media (prefers-color-scheme: dark) {
  :root {
    --color-bg: #0A0A0A;
    --color-text-primary: #E8E8E8;
    --color-text-secondary: #A3A3A3;
    --color-border: rgba(255, 255, 255, 0.1);
    --color-accent: #3B82F6; /* Same hue, slightly brighter */
  }
}
```

```
/* Tailwind dark: examples */
/* Background */
bg-white dark:bg-[#0A0A0A]

/* Primary text */
text-[#1A1A1A] dark:text-[#E8E8E8]

/* Secondary text */
text-[#888888] dark:text-[#A3A3A3]

/* Borders */
border-[#EBEBEB] dark:border-white/10

/* Card surface */
bg-white dark:bg-[#111111] border border-[#EBEBEB] dark:border-white/10

/* Button — accent */
bg-[#2563EB] dark:bg-[#3B82F6] text-white
```

### Guidance
Neither mode is recommended over the other — both are equally valid expressions of minimalism. Light mode feels more open and editorial; dark mode feels more dramatic and immersive. Use `prefers-color-scheme` to respect user preference, or let the brand dictate a single mode.

## Responsive & Mobile

### Breakpoint Strategy
Minimalism is naturally mobile-friendly. Single-column layouts, large text, and generous spacing translate effortlessly to small screens. The core challenge is compressing the generous whitespace without losing the feel of spaciousness. Design mobile-first — minimalism's simplicity makes this straightforward.

### Typography Scaling
- **Hero headings**: 48-80px desktop → 32-48px mobile. Keep Light weight (300) — the text is still large enough to carry it.
- **Body text**: 16-18px across all breakpoints — no change needed
- **Hierarchy**: Maintain the dramatic size contrast between headings and body, even at mobile scale. A 36px Light heading over 16px body is still recognizably minimalist.

### Spacing Adaptation
- **Section padding**: 120-200px desktop → 80-120px tablet → 48-80px mobile. Maintain the RATIO of whitespace to content — even compressed, sections should feel generous.
- **Element spacing**: 32-64px desktop → 24-48px tablet → 16-32px mobile
- **Card/container padding**: 32-48px desktop → 24-32px mobile

### Layout Collapse
- **Content column**: 640-800px max-width fits naturally on all screens — no collapse needed for single-column layouts
- **Multi-column grids**: 2-col → 1-col at tablet. Minimalism rarely needs a 3-col grid.
- **Asymmetric layouts**: Stack vertically with generous spacing between blocks

### Navigation
Keep it minimal on mobile. Simple text links work on small screens, or use a minimal menu icon (a thin line or dot). No hamburger menus with elaborate slide-out panels — that contradicts minimalism. A single icon that reveals a clean list of text links is sufficient.

### Touch & Performance
- **Touch targets**: Buttons already have comfortable padding (px-6 py-3 minimum). Ensure all interactive elements meet 44px minimum.
- **Performance**: Minimalism is inherently performant — few images, no complex effects, minimal JavaScript. Large hero photography should be optimized and lazy-loaded.

```
/* Tailwind responsive spacing */
/* Section padding — generous compression */
py-12 md:py-20 lg:py-32 xl:py-48

/* Hero heading — scales down gracefully */
text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-light tracking-tight

/* Content column — naturally responsive */
max-w-2xl lg:max-w-3xl mx-auto px-6
```

## Content & Voice

### Headline Tone
Precise, edited, essential. Headlines are short and confident — every word earns its place, just like every visual element. Avoid cleverness, puns, or marketing energy. Think declarative statements, not questions or exclamations.

Example headlines:
- "Less"
- "Clarity"
- "Made simple"
- "Essential objects for everyday life"
- "Nothing more than necessary"

### Body Copy
Concise and intentional. If you can say it in 10 words, don't use 20. The writing style mirrors the design: restrained, intentional, and confident. No filler phrases ("In order to", "It's important to note that"). Every sentence carries meaning. Think Apple's product copy — measured, precise, and quietly assured. Reading level is accessible but not dumbed down.

### CTAs & Microcopy
- **Button labels**: Minimal — one or two words maximum. "Shop", "Read", "Enter", "View", "Continue". Not "Shop Our Collection Now!" or "Click Here to Read More".
- **Error messages**: Brief and calm. "Email required." not "Oops! Looks like you forgot your email! 😅". No exclamation marks, no emoji, no marketing superlatives.
- **Empty states**: Simple statement + single action. "No items yet. Add one." Not a paragraph of explanation.
- **Tooltips & helpers**: Direct and concise. One sentence maximum.

### Content Density
LOW. Generous space between text blocks. One idea per section. Short paragraphs (2-3 sentences). Favor whitespace over content. If a page feels "empty," it's probably right. The writing style mirrors the design: restrained, intentional, and confident.

## Icons & Illustrations

### Icon Style
Extremely minimal. Thin line icons (1-1.5px stroke weight) or no icons at all — if the text is clear enough, skip the icon. When used, icons are monochrome: same color as text (primary or secondary) or the single accent color. Never multicolored. Never with background circles, squares, or containers. Icons serve function, not decoration — use them only for navigation, actions, and status indicators.

### Illustration Approach
Rarely used. Minimalism relies on typography and photography to carry visual weight, not illustration. If illustration is absolutely necessary, keep it line-based, monochromatic, and restrained. Abstract geometric forms (thin lines, simple shapes) can work. No complex scenes, characters, or decorative flourishes.

### Photography Direction
Photography is the primary visual element in minimalism. Use it large and confident — full-bleed or nearly so. Photography should be:
- **Composition**: Minimal — clean subjects, simple backgrounds, generous negative space within the photograph itself
- **Color**: Muted, desaturated, or black and white. Black and white photography is particularly effective in minimalist design.
- **Quality**: High-resolution, professionally shot or curated. With so few visual elements, every image is scrutinized.
- **Treatment**: No filters, overlays, or text on images. Let the photograph stand alone.

### Recommended Sources
- **Icons**: Feather Icons, Lucide (at thin/light weight), or custom minimal icons. Avoid filled icon sets.
- **Photography**: Unsplash (curated minimal collections), high-quality studio photography. Prioritize images with clean compositions and muted palettes.

## Accessibility

### Contrast & Readability
- **Known strengths**: Large text sizes, clear hierarchy, high contrast (near-black #1A1A1A on white gives ~15:1 contrast ratio). Few elements means less cognitive load.
- **Known risks**: Light/thin font weights (300) on body text can reduce readability, especially on lower-resolution displays or for users with visual impairments. **Ensure Light weight (300) is used only at 24px+ sizes.** Body text should be Regular (400) minimum.
- **Secondary text contrast**: Medium gray (#888888) on white gives approximately 3.5:1 contrast — this **fails WCAG AA** for body text (requires 4.5:1). Darken secondary text to #767676 (exactly 4.5:1) or #666666 (5.7:1) for safety. On dark backgrounds, #A3A3A3 on #0A0A0A gives ~7:1 — safe.
- **Remediation**: Slightly darkening grays does not break the minimalist aesthetic. The difference between #888888 and #666666 is barely perceptible but makes the design accessible.

### Focus States
Thin accent-colored outline, subtle and consistent with the minimal aesthetic. Avoid thick, high-contrast focus rings that clash with the design — but never remove them.

```css
/* Minimalist focus state */
*:focus-visible {
  outline: 1.5px solid var(--color-accent);
  outline-offset: 2px;
}

/* Tailwind */
focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB]
```

### Motion Sensitivity
Minimalism's animations are already so subtle they're nearly safe by default. For `prefers-reduced-motion`, disable fade-in-on-scroll animations and any entrance transitions. The core hover transitions (opacity changes) are subtle enough to keep.

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Screen Reader Considerations
Minimalism is naturally screen-reader friendly — few decorative elements, strong heading hierarchy, semantic content structure. Ensure decorative border dividers use `aria-hidden="true"`. Photography should have meaningful `alt` text (not "hero image" but a description of the content).

## Do's and Don'ts

### Do
- Remove every element that doesn't serve a clear purpose — if it can be removed without losing meaning, remove it. This is the fundamental act of minimalist design.
- Use whitespace as an active design element, not passive emptiness — whitespace creates calm, hierarchy, and sophistication. It is not "wasted space."
- Choose ONE beautiful typeface and let it carry the design — with decoration stripped away, the font IS the visual identity. Choose carefully.
- Limit your palette to neutrals + ONE accent color — restraint creates focus. A single blue link on a monochrome page is more powerful than a rainbow of CTAs.
- Make every remaining element perfect — with so few elements, each one is scrutinized. A misaligned margin or inconsistent spacing is immediately visible.
- Let content be the star — photography, writing, product should shine. The design exists to frame the content, not compete with it.
- Test at multiple viewport sizes — minimalism's generous spacing needs intentional compression for mobile, not just reflowing.

### Don't
- Confuse minimalism with "not designed yet" — minimalism is hyper-intentional. Every pixel of whitespace, every font weight choice, every color decision is deliberate. Emptiness without intention is just unfinished.
- Use more than one accent color — the moment you add a second color, you've broken the restraint that makes minimalism powerful. One accent. That's it.
- Add shadows, gradients, or decorative borders — these add visual noise. Minimalism separates elements through whitespace and subtle hairline borders, not depth effects.
- Use bold font weights for headings (prefer Light to Medium) — bold weights feel heavy and aggressive. Light weights at large sizes feel elegant and confident.
- Crowd elements together — generous spacing is non-negotiable. If it doesn't feel "almost too much space," you haven't gone far enough.
- Add "just one more" thing — the discipline is the point. Every addition should be questioned. The default answer is "no."
- Use small font sizes — with so few elements, make the typography luxurious. Small text in minimalism reads as timid, not refined.
- Ignore accessibility contrast requirements — minimalism's thin weights and gray secondary text are the most common accessibility pitfalls. Check your contrast ratios.

## Implementation Hints (Tailwind + CSS)

```css
/* Core Minimalism */
.min-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 120px 24px;
}

.min-heading {
  font-size: 64px;
  font-weight: 300; /* Light weight — size carries the hierarchy */
  letter-spacing: -0.02em;
  line-height: 1.1;
  color: #1A1A1A;
}

.min-card {
  padding: 32px;
  border: 1px solid #EBEBEB;
  /* NO shadow, NO radius (or 2px max) */
}
```

```
/* Tailwind classes */
/* Hero section — generous spacing */
py-32 lg:py-48

/* Heading */
text-6xl font-light tracking-tight text-[#1A1A1A]

/* Body text */
text-lg font-normal leading-relaxed text-[#888888]

/* Card — barely there */
border border-[#EBEBEB] p-8

/* Button — understated */
bg-[#1A1A1A] text-white px-6 py-3 text-sm font-medium hover:opacity-80 transition-opacity duration-300

/* Font stack */
font-heading: 'Inter', 'Helvetica Neue', system-ui, sans-serif
font-body: 'Inter', 'Helvetica Neue', system-ui, sans-serif

/* Color tokens */
--color-bg: #FFFFFF
--color-text-primary: #1A1A1A
--color-text-secondary: #888888
--color-accent: #1A1A1A         /* Often the accent IS black */
--color-border: #EBEBEB
```

## Reference Touchstones

When building in this style, channel the spirit of:
- Apple.com product pages (the whitespace, the single hero image)
- Dieter Rams' product design for Braun
- Aesop's website and retail stores
- Muji's design philosophy
- Everlane and COS fashion e-commerce
- Medium's reading experience (the original, clean version)
- Swiss watchmaker websites (IWC, Nomos Glashütte)
