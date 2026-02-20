# Dark Mode Premium

> Cinema-grade darkness meets precision lighting — UI that commands a room.

## Non-Negotiables

**If you skip any of these three, it is not Dark Mode Premium.** These separate "dark theme" from a genuinely premium dark experience — without all three, the result looks like an inverted light theme:

1. **Layered dark surfaces with distinct elevation levels.** The background is NOT a single flat black. It's a system of 3-5 dark grays that create depth: a deep base (#09090B, #0A0A0B), elevated cards (#141417, #18181B), higher surfaces (#1F1F23, #27272A), and optional overlays. Each layer is subtly but distinctly lighter. This is what makes it feel "premium" instead of "just dark." If all your dark surfaces are the same shade, you've missed the point.

2. **Restrained accent color with intentional glow/light effects.** The accent color is used SPARINGLY — only for primary CTAs, active states, and key interactive elements. NOT slathered across headers, backgrounds, or large surfaces. The accent should feel like light in darkness: small, precise, and luminous. Consider subtle glow effects (`box-shadow: 0 0 20px rgba(accent, 0.3)`) on the accent to make it feel like it's emitting light. The ratio of accent to neutral should be roughly 5:95.

3. **Carefully tuned text hierarchy on dark backgrounds.** Text uses a 3-4 level opacity system on white: primary (#FAFAFA or white at 95%), secondary (white at 65-70%), tertiary/disabled (white at 40-45%). This hierarchy is MORE important on dark backgrounds because the wrong gray tone disappears completely. Never use pure white (#FFFFFF) at full opacity for body text — it's too harsh. Never use mid-grays (#666, #777) — they vanish on dark surfaces.

### Quick self-test

Squint at your page. Can you distinguish at least 3 different background darkness levels? Does the accent color appear on fewer than 10% of the elements? Is the text readable at every level — not too bright, not too dim? Does the overall feel evoke "theater" or "luxury car dashboard"? If yes, it's Dark Mode Premium.

## Identity

- **Origin**: Evolved from dark mode accessibility preferences into a full design direction, catalyzed by macOS Mojave's system dark mode (2018), OLED displays making true black valuable, and premium SaaS products like Linear and Vercel choosing dark-first design.
- **Mood**: Sophisticated, immersive, high-contrast, cinematic, technical, premium, focused
- **Best for**: Developer tools, fintech dashboards, media/entertainment, audio/music apps, analytics platforms, trading interfaces, creative tools, portfolio sites
- **Avoid for**: Children's apps, healthcare/medical, most e-commerce (hard to browse products), content-heavy blogs, government/civic tech, anything that needs to feel "sunny" or "approachable"

## Typography

### Philosophy
Typography on dark backgrounds requires MORE care than on light. Font rendering is different (lighter fonts appear thinner on dark backgrounds), contrast ratios behave differently, and the wrong weight/color combination creates either eye strain or invisibility.

### Font Characteristics
- **Primary (headings)**: Modern sans-serifs with excellent screen rendering. Semi-bold to Bold weights (600-700) — slightly heavier than you'd use on light mode because dark backgrounds thin the perceived weight.
  - Families to consider: Inter, Geist, SF Pro Display, Satoshi, General Sans, Outfit, Plus Jakarta Sans
- **Secondary (body)**: Same family at regular to medium weight (400-500). Prioritize fonts with good hinting at small sizes on dark backgrounds.
  - Families to consider: Inter, Geist, system-ui, SF Pro Text
- **Monospace** (common in dev/fintech): JetBrains Mono, Geist Mono, SF Mono, Fira Code
- **Avoid**: Thin/Light weights (they disappear on dark), serif fonts (generally), decorative fonts

### Scale & Weight
- Headings: Semi-bold (600) to Bold (700). Go one weight heavier than you would on white.
- Body: Regular (400) to Medium (500). Bump up to Medium if Regular looks thin.
- Minimum body size: 14px, preferably 15-16px. Small text is harder to read on dark.
- Line-height: 1.5-1.7 for body (slightly more than on light to aid readability)

## Color

### Philosophy
Color in Dark Mode Premium is about **lighting a dark room**. The darkness is the canvas; color is the light source. Every colored element should feel like it's emitting light, not just sitting on the surface. Restraint is critical — too much color and it stops feeling premium.

### Palette Construction
- **Base background**: Deep, near-black neutrals. NOT pure black (#000) — use dark grays with a very slight cool or warm undertone.
  - Cool: #09090B, #0A0A0F, #0C0C10
  - Warm: #0D0B08, #0F0D0A
  - Pure neutral: #0A0A0A, #0C0C0C
- **Elevation layers** (critical):
  - Level 0 (base): #09090B
  - Level 1 (cards): #141417 or #18181B
  - Level 2 (elevated): #1F1F23 or #27272A
  - Level 3 (popovers/modals): #27272A or #2E2E32
- **Borders**: Subtle white at 8-15% opacity. Essential for distinguishing surfaces. `border-white/10` is the workhorse.
- **Text**:
  - Primary: #FAFAFA or #F4F4F5 (not pure #FFF)
  - Secondary: rgba(255,255,255,0.65) or #A1A1AA
  - Tertiary: rgba(255,255,255,0.4) or #71717A
- **Accent**: One luminous color, used sparingly.
  - Violet/purple: #8B5CF6, #A78BFA
  - Blue: #3B82F6, #60A5FA
  - Cyan: #06B6D4, #22D3EE
  - Green: #10B981, #34D399
  - Apply a subtle glow to accent elements: `box-shadow: 0 0 20px rgba(accent, 0.25)`

### Accent Usage Rules
- Primary CTA buttons: YES
- Active nav items: YES (small indicator, not full background)
- Links: YES
- Large section backgrounds: NO
- Card borders: Sparingly (featured/highlighted only)
- Charts/data visualization: YES (this is where more color is acceptable)

## Spacing & Layout

### Grid System
- Standard 12-column grid, max-width 1200-1400px
- Dark mode benefits from slightly more generous gutters than light mode — content needs room to breathe in darkness
- Sidebar layouts work exceptionally well in dark premium (Linear, Vercel Dashboard)

### Spacing Philosophy
- **Generous but not excessive** — more than flat design, less than minimalism
- Card padding: 24px-32px
- Section padding: 80px-120px vertical
- Between cards: 16px-24px (the gaps reveal the darker base, creating depth)
- Content density can be higher than in minimalism — dark backgrounds handle density well
- The darkness unifies — you can fit more without it feeling cluttered

### Composition
- **Dashboard-style layouts**: Sidebar + main content area
- **Layered panels**: Cards at different elevation levels create natural hierarchy
- **Full-bleed sections**: Dark mode looks great edge-to-edge
- **Data visualization**: Charts, metrics, and graphs shine on dark backgrounds

## Borders & Shadows

### Philosophy
In dark mode, borders and shadows work differently. Shadows are barely visible (dark on dark). Instead, **borders and elevation (lighter surfaces)** create depth. Subtle light effects (glows, highlights) replace traditional shadows.

### Implementation
- **Borders**: The primary depth tool. 1px solid white at 8-15% opacity (`border-white/10`). Use on every card, panel, and input. On dark surfaces, borders are MORE important than in light mode.
- **Shadows**: De-emphasized. Standard box-shadows barely show on dark backgrounds. Instead:
  - Use elevation (lighter fill) for primary depth
  - Use subtle glow for accent elements: `box-shadow: 0 0 30px rgba(accent, 0.15)`
  - Inset highlight on top edge: `box-shadow: inset 0 1px 0 rgba(255,255,255,0.05)`
- **Border radius**: 8px-16px. Modern and rounded, consistent across all elements.
- **Gradients**: Subtle dark gradients can enhance surfaces. A card might have a very subtle gradient from slightly lighter at top to slightly darker at bottom, creating a "lit from above" effect.

## Components

### Buttons
- Primary: Solid accent color fill, no border, 8px-12px radius. Subtle glow on hover.
  - `bg-accent text-white shadow-[0_0_20px_rgba(accent,0.3)]`
- Secondary: Ghost — transparent fill, `border-white/15`, white text. Hover: fill to white/10.
- Tertiary: Text-only in secondary text color. Hover: text brightens.
- All buttons: comfortable padding (12px 24px), medium weight (500-600)

### Cards
- Fill at elevation Level 1 (#141417 or #18181B)
- 1px border at white/10
- 8px-16px border-radius
- Hover: border brightens slightly (white/15 → white/25) or subtle glow
- Featured card: accent border or subtle accent gradient on top/left edge

### Navigation
- Sidebar (primary pattern): dark background at base level, items at Level 1 on hover/active
- Top nav: transparent or base level, with bottom border at white/10
- Active item: accent color indicator (dot, left border, or tinted background)
- Text: secondary color for inactive, primary for active

### Inputs & Forms
- Dark fill (Level 1 or Level 2), 1px border white/15
- Focus: border changes to accent color with subtle glow
- Placeholder: tertiary text color
- Text: primary text color

### Tables & Data
- Row borders: white/5 to white/10
- Hover row: fill at white/5
- Header: slightly elevated surface or bolder text
- Alternating rows: optional, very subtle (white/3 vs transparent)

## Motion

### Philosophy
Animation in Dark Mode Premium is **precise and cinematic** — smooth, slightly dramatic, with light effects playing a starring role. Movement should feel like a high-end car dashboard or a cinema UI.

### Implementation
- **Transitions**: Smooth — 200-350ms, ease-out or cubic-bezier(0.4, 0, 0.2, 1)
- **Hover**: Border/glow brightens, slight scale (1.01-1.02). Accent glow pulses subtly.
- **Entrances**: Fade in with subtle upward translate. Optional: a brief glow flash on important elements.
- **Scroll**: Subtle parallax is acceptable. Content can fade/slide in on scroll.
- **Light effects**: Hover states can trigger subtle illumination — a border that brightens, a glow that appears, a gradient that shifts. This is the signature motion of the style.
- **Avoid**: Playful bouncing, extreme scale changes, anything that breaks the "premium" feel

## Dark Mode & Light Mode

### Philosophy
This IS a dark-first style — the entire elevation system, text hierarchy, and accent glow language are built around the assumption that the base surface is near-black. That said, light mode isn't off the table. Some products need it for accessibility preferences, outdoor readability, or just user choice. The key is that light mode is a **translation**, not the default — and bad translations lose the premium feel entirely.

The most common failure: inverting the colors naively. If you flip #09090B to #FFFFFF and call it done, you'll get a generic light theme that shares nothing with the dark version. The premium quality lives in the *elevation system and restraint*, and those must survive the translation.

### Light Mode Palette
- **Base background**: NOT pure white. Use warm or cool off-whites that preserve the calm, non-clinical feel.
  - Cool: #F8F8FA, #F4F4F8
  - Warm: #FAFAF8, #F8F7F5
  - Neutral: #F5F5F5, #FAFAFA
- **Elevation layers** (maintained — this is critical):
  - Level 0 (base): #F4F4F5 or #F5F5F7
  - Level 1 (cards): #FFFFFF
  - Level 2 (elevated): #FFFFFF with subtle shadow
  - Level 3 (popovers/modals): #FFFFFF with stronger shadow
- **Borders**: Black at 6-12% opacity. `border-black/8` replaces `border-white/10`.
- **Text**:
  - Primary: #09090B or #18181B (not pure #000)
  - Secondary: rgba(0,0,0,0.6) or #52525B
  - Tertiary: rgba(0,0,0,0.4) or #A1A1AA
- **Accent**: The same hue, but desaturated slightly and darkened. Bright violet on white can feel garish — pull it back.
  - Dark accent #8B5CF6 → Light accent #7C3AED (slightly deeper)
  - Glow effects become subtle shadows: `box-shadow: 0 0 20px rgba(accent, 0.12)` (reduced opacity)

### Implementation
In light mode, **shadows replace glows** as the primary depth cue. The elevation system shifts from "lighter surfaces on dark" to "shadows lifting surfaces off light."

```css
/* Light mode elevation */
.lm-base { background: #F4F4F5; }
.lm-card { background: #FFFFFF; border: 1px solid rgba(0,0,0,0.08); box-shadow: 0 1px 3px rgba(0,0,0,0.04); }
.lm-elevated { background: #FFFFFF; box-shadow: 0 4px 12px rgba(0,0,0,0.06); }

/* Toggling with prefers-color-scheme */
@media (prefers-color-scheme: light) {
  :root {
    --color-base: #F4F4F5;
    --color-card: #FFFFFF;
    --color-border: rgba(0,0,0,0.08);
    --color-text-primary: #09090B;
    --color-text-secondary: rgba(0,0,0,0.6);
    --color-accent: #7C3AED;
    --color-accent-glow: rgba(124,58,237,0.12);
  }
}
```

```
/* Tailwind — dark-first with light variant */
/* Base (dark) */
bg-[#09090B] dark:bg-[#09090B] light:bg-[#F4F4F5]

/* Card */
bg-[#18181B] border-white/10 light:bg-white light:border-black/8 light:shadow-sm

/* Text */
text-[#FAFAFA] light:text-[#09090B]
text-white/65 light:text-black/60
```

The rule of thumb: if you strip the color from a screenshot of both modes and they have the same spatial hierarchy (same layout, same visual weight distribution), the translation worked. If the light mode looks "flatter," you lost elevation in translation.

## Responsive & Mobile

### Philosophy
Dark Mode Premium leans heavily on dashboard layouts — sidebars, multi-panel views, data-dense grids. These patterns need deliberate mobile treatment, not automatic responsive shrinking. A sidebar that collapses to nothing leaves the user without navigation. A 5-level elevation system on a 375px screen creates visual noise, not hierarchy.

### Typography on Mobile
Typography sizes stay the same — do NOT shrink body text below 14px. Dark backgrounds already reduce perceived readability, and small screens compound this. If anything, lean slightly larger on mobile (15-16px body). Line-height remains generous (1.5-1.7). The temptation to "fit more" on a small dark screen leads to illegible walls of dim text.

### Spacing Compression
- Section padding: 80-120px vertical → 48-64px on mobile
- Card padding: 24-32px → 16-20px
- Grid gutters: compress proportionally, but maintain at least 12px between cards — the dark gap between surfaces IS the visual separation

### Layout Patterns
- **Sidebar**: Collapses to a bottom tab bar (5 items max) or hamburger menu. Bottom tab bar is preferred — it matches mobile conventions and keeps navigation persistent. The tab bar sits at base elevation level with a top `border-white/10`.
  - Do NOT just hide the sidebar behind a hamburger and call it done. Dashboard navigation is high-frequency — burying it adds friction.
- **Multi-panel views**: Stack vertically. The primary content panel comes first; secondary panels become expandable sections or tabs.
- **Data tables**: Become scrollable card lists. Each row becomes a card at Level 1.

### Elevation on Mobile
Reduce from 5 levels to 3. On small screens, the subtle difference between Level 2 and Level 3 is imperceptible — they merge. Stick with:
- Level 0 (base): the screen background
- Level 1 (cards/content): primary surfaces
- Level 2 (modals/overlays): topmost layer

This still creates depth, but without wasting perceptual bandwidth on distinctions the user can't see at 375px.

### Performance Note
Glow effects (`box-shadow` with colored spread) are surprisingly cheap on OLED displays — true black pixels (#000000) are literally off, so the GPU only renders the glow pixels. This means the signature accent glow is actually *more* performant on the OLED phones most users have today. However, complex stacked glows (glow on glow on glow) still cost paint cycles. Keep it to one glow per visible element.

```css
/* Mobile elevation simplification */
@media (max-width: 768px) {
  .dm-elevated { background: var(--color-card); } /* Collapse Level 2 into Level 1 */
  .dm-overlay { background: #27272A; } /* Only overlays get Level 2 */

  /* Bottom tab bar */
  .dm-tab-bar {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: #09090B;
    border-top: 1px solid rgba(255,255,255,0.1);
    padding: 8px 0 env(safe-area-inset-bottom);
    display: flex;
    justify-content: space-around;
  }
}
```

```
/* Tailwind responsive */
/* Section spacing */
py-20 md:py-28 lg:py-32

/* Card padding */
p-4 md:p-6 lg:p-8

/* Sidebar → bottom tab bar */
hidden md:flex md:flex-col md:w-64   /* sidebar: hidden on mobile */
fixed bottom-0 inset-x-0 flex md:hidden border-t border-white/10 bg-[#09090B]   /* tab bar: visible on mobile */
```

## Content & Voice

### Philosophy
Dark Mode Premium isn't just a visual style — it implies a content personality. The darkness signals seriousness, precision, and technical competence. The voice should match: think Linear's changelog, Vercel's documentation, Stripe's API reference. This is writing that respects the reader's intelligence and time.

### Tone
- **Technical and precise.** Use specific terms, not vague ones. "Deploy in 3 seconds" over "lightning-fast deployment." Numbers over adjectives.
- **Confident without being loud.** Declarative statements, not exclamation marks. "Your build is ready." not "Your build is ready!"
- **Concise.** Every word earns its place. If a sentence can lose a word without losing meaning, cut it.
- **First-person plural or second-person.** "We optimized cold starts" or "Your functions run at the edge." Avoid passive corporate voice.

### Headlines
Declarative and product-focused. State what the thing does or what happened — not how the user should feel about it.
- Good: "Edge Functions, now globally distributed"
- Good: "Build logs, searchable in real-time"
- Bad: "Introducing our amazing new feature!"
- Bad: "You're going to love this"

### Body Copy
Short paragraphs (2-3 sentences). Technical detail is welcome — this audience can handle it. Use sentence case for headings, not Title Case (it reads as calmer, more contemporary).

### CTAs
Understated. Ghost buttons and text links are more common than big splashy primary CTAs in this style. When a primary CTA is used, the copy is direct and verb-first:
- "Start building" not "Get Started Today!"
- "View documentation" not "Learn More"
- "Deploy now" not "Try It Free"

### Error Messages & System States
Factual and actionable. The premium feel breaks instantly if errors sound generic or panicky.
- "Build failed: missing dependency `sharp`. Add it to package.json." — specific, fixable
- "Something went wrong. Please try again." — generic, unhelpful, breaks the premium illusion
- Empty states: provide context and a single clear action. "No deployments yet. Deploy your first project →"

### Content Density
Dark themes handle higher content density than light themes. The dark background acts as a natural separator — items don't crowd each other visually the way they do on white. This means you CAN use tighter card grids, denser data tables, and more compact dashboards without it feeling cluttered. Take advantage of this.

## Icons & Illustrations

### Philosophy
Icons in Dark Mode Premium are **supporting characters, not leads**. They aid scannability and reinforce meaning, but they should never compete with the accent color for the user's attention. The accent color is the single luminous focal point — if icons are also colorful, the visual hierarchy collapses into chaos.

### Icon Style
- **Monochrome line icons.** Stroke-based, not filled. Filled icons create too many competing "spots" of brightness on a dark canvas.
- **Stroke weight**: 1.5px — slightly heavier than the 1px common in light themes. Dark backgrounds thin perceived stroke weight the same way they thin font weight.
- **Color**: Secondary text opacity (white at 65%, or `text-white/65`). This keeps them visible but subordinate to primary text and accent elements.
- **Hover/active state**: Icons brighten to primary text color (#FAFAFA or `text-white/95`). This transition should be smooth (200ms ease-out). On accent-colored interactive elements, icons can inherit the accent color.
- **Size**: 16px for inline, 20px for navigation, 24px for feature callouts. Consistent sizing is more important than "the right size" — pick a scale and commit.

### Recommended Icon Sets
- **Lucide** — Clean, consistent 1.5px stroke, excellent coverage. First choice.
- **Radix Icons** — Minimal, 15px grid, pairs perfectly with Radix UI components.
- **Phosphor (light weight)** — Versatile with multiple weight options; use the "light" or "regular" weight only.
- **Avoid**: Heroicons solid, Font Awesome filled, emoji-based icons, multi-color icon sets

### Illustrations
Illustrations are rare in this style — the aesthetic is too precise for playful illustration. When needed:
- Abstract geometric shapes or line art, in accent color at low opacity
- Gradient meshes or subtle light effects as hero backgrounds (not illustrations per se, but visual interest)
- Data visualizations and charts serve as the "illustrations" of Dark Mode Premium — they're where color gets to shine

### Data Visualization
This is where the color restraint rule relaxes. Charts, graphs, and metrics ARE the content in dashboard products, and they benefit from a richer palette:
- Use 4-6 colors maximum, all at similar luminosity
- Colors should feel like they're glowing on the dark background
- Good chart palette: `#8B5CF6, #3B82F6, #06B6D4, #10B981, #F59E0B, #EF4444`
- Apply subtle glow to key data points: `filter: drop-shadow(0 0 6px rgba(accent, 0.4))`
- Grid lines at white/5, axis labels at secondary text color

```css
/* Icon defaults */
.dm-icon {
  color: rgba(255,255,255,0.65);
  width: 20px;
  height: 20px;
  stroke-width: 1.5;
  transition: color 200ms ease-out;
}
.dm-icon:hover,
.dm-icon-active {
  color: #FAFAFA;
}

/* Chart glow on key data points */
.dm-chart-point {
  filter: drop-shadow(0 0 6px rgba(139,92,246,0.4));
}
```

```
/* Tailwind icon classes */
/* Default icon */
text-white/65 w-5 h-5 transition-colors duration-200

/* Hover / active */
hover:text-[#FAFAFA] active:text-[#FAFAFA]

/* Navigation icon */
text-white/65 w-5 h-5 group-hover:text-white/95

/* Accent-context icon */
text-[#8B5CF6]
```

## Accessibility

### Philosophy
Dark mode has a reputation for being "easier on the eyes," and for many users it is — but it introduces its own accessibility risks that light themes don't have. Bright text on dark backgrounds can cause halation (letters blooming/bleeding) for users with astigmatism (roughly 33% of the population). Mid-gray text that looks fine on a light background can vanish completely on dark surfaces. And at night, when users most want dark mode, their pupils are dilated — which actually *reduces* contrast perception.

Accessibility in Dark Mode Premium isn't an afterthought — it's the reason the text hierarchy rules are so strict.

### Contrast Requirements
Every text-on-surface combination must hit **4.5:1 minimum** (WCAG AA). Test EVERY surface level, not just the base:
- Primary text (#FAFAFA) on Level 0 (#09090B): ~18:1 — well above minimum
- Primary text (#FAFAFA) on Level 1 (#18181B): ~14:1 — safe
- Primary text (#FAFAFA) on Level 2 (#27272A): ~10:1 — safe
- Secondary text (white/65) on Level 0: ~11:1 — safe
- Secondary text (white/65) on Level 1: ~8.5:1 — safe
- **Tertiary text (white/40) on Level 2: ~3.8:1 — FAILS.** This is the danger zone. Tertiary text on elevated surfaces needs a bump to white/50 minimum, or should only be used on Level 0/1.

The failure case is always the same: low-opacity text on elevated (lighter) dark surfaces. Test these combinations explicitly — don't assume.

### Focus States
Focus states are critical and often overlooked in dark themes. The default browser focus ring (blue outline) is nearly invisible on dark backgrounds. Replace it with an accent-colored glow that works on every surface:

```css
/* Focus ring — visible on all dark surfaces */
*:focus-visible {
  outline: 2px solid #8B5CF6;
  outline-offset: 2px;
  box-shadow: 0 0 0 4px rgba(139,92,246,0.25);
}

/* For components where outline doesn't work (cards, custom elements) */
.dm-focus-ring:focus-visible {
  border-color: #8B5CF6;
  box-shadow: 0 0 0 3px rgba(139,92,246,0.3);
}
```

```
/* Tailwind focus ring */
focus-visible:outline-2 focus-visible:outline-[#8B5CF6] focus-visible:outline-offset-2 focus-visible:ring-4 focus-visible:ring-[#8B5CF6]/25
```

### Eye Strain Mitigation
- Never use pure white (#FFFFFF) at 100% opacity for body text. #FAFAFA or white/95 is visually identical but measurably less harsh.
- Body text at 14px minimum — small text on dark backgrounds causes squinting.
- Generous line-height (1.5-1.7) reduces the "wall of glowing text" effect.
- Consider offering a "dim" mode variant with even lower text brightness for nighttime use.

### Reduced Motion
The glow animations and light effects are a signature of this style, but they're also a motion accessibility concern. Respect `prefers-reduced-motion` by disabling decorative animations while keeping functional transitions:

```css
@media (prefers-reduced-motion: reduce) {
  /* Kill decorative glow animations and pulsing */
  .dm-accent-glow,
  .dm-glow-pulse {
    animation: none;
    transition: none;
  }

  /* Keep structural transitions (layout changes, opacity for visibility) */
  .dm-card,
  .dm-panel {
    transition: opacity 150ms ease-out, transform 150ms ease-out;
  }

  /* Disable hover glow expansion — keep static glow */
  .dm-accent-glow:hover {
    box-shadow: 0 0 20px rgba(139,92,246,0.3); /* Same as resting state */
  }
}
```

The rule: **disable anything decorative, keep anything that communicates state change.** A glow that pulses for attention is decorative — remove it. A panel that fades in to show it's appeared is structural — keep it (but shorten duration to 150ms).

### Color Independence
Never use color alone to communicate state. Accent color for active nav items should be paired with a shape change (bold text, underline, or filled icon). Error states need an icon or text label alongside the red color. Success/failure in data visualizations needs pattern differentiation (dashed vs. solid lines) in addition to green/red.

## Do's and Don'ts

### Do
- Create clear surface elevation hierarchy (3+ distinct dark levels)
- Use borders (white/10-15) as the primary tool for visual separation
- Apply accent color sparingly — less is more in darkness
- Add subtle glow effects to accent elements to simulate light emission
- Test readability at every text opacity level on every surface level
- Use slightly heavier font weights than you would on light mode

### Don't
- Use pure black (#000000) as the base — it's too harsh and looks like a void
- Use pure white (#FFFFFF) at 100% for body text — it creates eye strain
- Spread the accent color across large surfaces — it kills the premium feel
- Forget borders on dark cards — without them, surfaces merge into the void
- Use traditional box-shadows (they're invisible on dark) — use glows instead
- Create insufficient contrast between surface levels — each should be distinctly different

## Implementation Hints (Tailwind + CSS)

```css
/* Elevation system */
.dm-base { background: #09090B; }
.dm-card { background: #18181B; border: 1px solid rgba(255,255,255,0.1); }
.dm-elevated { background: #27272A; border: 1px solid rgba(255,255,255,0.12); }

/* Accent glow */
.dm-accent-glow {
  background: #8B5CF6;
  box-shadow: 0 0 20px rgba(139, 92, 246, 0.3);
}
.dm-accent-glow:hover {
  box-shadow: 0 0 30px rgba(139, 92, 246, 0.45);
}

/* Text hierarchy */
.dm-text-primary { color: #FAFAFA; }
.dm-text-secondary { color: rgba(255,255,255,0.65); }
.dm-text-tertiary { color: rgba(255,255,255,0.4); }
```

```
/* Tailwind classes */
/* Base */
bg-[#09090B] text-[#FAFAFA]

/* Card */
bg-[#18181B] border border-white/10 rounded-xl p-6

/* Elevated surface */
bg-[#27272A] border border-white/[0.12] rounded-xl

/* Accent button with glow */
bg-[#8B5CF6] text-white rounded-lg px-6 py-3 shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.45)] transition-all duration-300

/* Ghost button */
bg-transparent border border-white/15 text-[#FAFAFA] rounded-lg px-6 py-3 hover:bg-white/10 transition-all duration-200

/* Text levels */
text-[#FAFAFA]           /* primary */
text-white/65            /* secondary */
text-white/40            /* tertiary */

/* Font stack */
font-heading: 'Inter', 'Geist', system-ui, sans-serif
font-body: 'Inter', 'Geist', system-ui, sans-serif
font-mono: 'JetBrains Mono', 'Geist Mono', 'SF Mono', monospace

/* Color tokens */
--color-base: #09090B
--color-card: #18181B
--color-elevated: #27272A
--color-border: rgba(255,255,255,0.1)
--color-accent: #8B5CF6
--color-accent-glow: rgba(139,92,246,0.3)
--color-text-primary: #FAFAFA
--color-text-secondary: rgba(255,255,255,0.65)
--color-text-tertiary: rgba(255,255,255,0.4)
```

## Reference Touchstones

When building in this style, channel the spirit of:
- Linear.app (the gold standard of dark premium UI)
- Vercel's dashboard and marketing site
- Raycast's interface
- Arc Browser's dark mode
- Tesla's car UI
- Bloomberg Terminal's modern redesign
- Figma's dark mode (subtle elevation, precise borders)
