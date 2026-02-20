# Claymorphism

> Soft, squishy, and delightfully tactile — UI sculpted from digital clay.

## Non-Negotiables

**If you skip any of these three, it is not Claymorphism.** These create the distinctive "3D clay" illusion — without all three working together, the result looks like "rounded cards with shadows" rather than clay:

1. **Inner highlight + outer shadow creating a puffy, inflated appearance.** Every claymorphic element needs BOTH: a light inner shadow on the top edge (simulating light hitting the rounded surface) AND a soft outer shadow below (simulating the object sitting on a surface). The combination creates the "puffy pillow" effect. Without the inner highlight, it's just a card with a shadow. Without the outer shadow, it's just a highlighted panel.
   - Inner highlight: `box-shadow: inset 0 -4px 6px rgba(0,0,0,0.05), inset 0 4px 6px rgba(255,255,255,0.6);`
   - Outer shadow: `box-shadow: 0 8px 20px rgba(0,0,0,0.12);`
   - Combined (the full clay effect): both together in one `box-shadow` declaration.

2. **Generous, uniform border-radius — everything looks rounded and soft.** Clay has no sharp edges. Border-radius is 16px-32px on all elements — cards, buttons, badges, containers. The rounding should feel ORGANIC, like the element was molded by hand. If anything has sharp corners or small radius (4px-8px), it breaks the clay illusion. Even images and icons should sit within rounded containers.

3. **Soft, pastel color palette with a 3D color-shading effect on surfaces.** Claymorphic elements have a subtle color gradient that simulates 3D curvature — slightly lighter on top (where light hits) and slightly deeper at the bottom. The base colors are PASTEL: soft pinks, lavenders, sky blues, mint greens, warm yellows. The palette should feel like a box of children's modeling clay. Saturated or dark colors break the soft, friendly mood.

### Quick self-test

Do your cards look puffy and inflated, like clay or marshmallows? Can you see both a light inner glow at the top AND a soft shadow at the bottom? Are all corners generously rounded (16px+)? Are the colors soft and pastel? Could you imagine squishing these elements? If yes, it's Claymorphism.

## Identity

- **Origin**: Emerged around 2021-2022 as a friendly alternative to neumorphism. Combines 3D illustration trends (the "blob" and "clay" aesthetic from Blender/Cinema 4D) with UI design. Inspired by the soft 3D characters and objects that became ubiquitous in tech marketing (Apple Memoji, Figma's 3D illustrations, many startup hero sections).
- **Mood**: Friendly, 3D, soft, approachable, playful, warm, inviting, childlike
- **Best for**: Children's apps, onboarding flows, illustration-heavy products, education platforms, health/wellness apps, banking for teens, productivity apps targeting non-technical users, gamified interfaces
- **Avoid for**: Enterprise B2B, data-heavy dashboards, professional tools, fintech for adults, news/editorial, anything that needs to feel serious or authoritative

## Typography

### Philosophy
Typography in Claymorphism is **rounded, friendly, and approachable**. The font choice should match the soft, puffy aesthetic — nothing angular, condensed, or sharp.

### Font Characteristics
- **Primary (headings)**: Rounded, friendly sans-serifs with generous curves. Medium to Bold weights (500-700).
  - Families to consider: Nunito, Quicksand, Comfortaa, Fredoka, Baloo 2, Varela Round, DM Sans (Rounded)
- **Secondary (body)**: Same family at regular weight, or a highly legible rounded companion.
  - Families to consider: Nunito, DM Sans, Poppins, Quicksand
- **Avoid**: Sharp geometric fonts (Futura, Roboto), serif fonts, condensed fonts, angular display fonts

### Scale & Weight
- **Headings**: Semi-bold to Bold (600-700) at 28px-48px. Not Extra-bold — keep it soft.
- **Body**: Regular to Medium (400-500) at 15px-17px
- **Generous line-height**: 1.6-1.8 for body (the softness extends to text spacing)
- **Letter-spacing**: Default or very slightly positive. Don't tighten.
- **No ALL CAPS**: Too aggressive for this style. Sentence case or title case only.

## Color

### Philosophy
Color in Claymorphism comes from a PASTEL TOY BOX. Every color is softened, warm, and inviting. The palette should feel like it was mixed with white paint — no fully saturated or dark colors.

### Palette Construction
- **Background**: Very light, warm pastels:
  - Soft lavender: #F0EBFF, #EDE7FF
  - Warm blush: #FFF0F0, #FFE8EC
  - Mint cream: #EDFFF5, #E8FFF0
  - Soft yellow: #FFF9E6, #FFFAEB
  - Light blue: #E8F4FF, #EBF5FF
- **Element surfaces**: Slightly deeper pastels than the background:
  - Lavender card on lavender bg: #DDD5FF on #F0EBFF
  - Pink card on blush bg: #FFCCD5 on #FFF0F0
  - Mint card on mint bg: #B5F0D0 on #EDFFF5
- **Text**: Warm dark gray (#2D2D3F, #3B3B4F) — not pure black
- **Secondary text**: Medium warm gray (#7A7A8E, #8888A0)
- **Accent**: One slightly more saturated pastel for CTAs:
  - Soft purple: #8B6FFF, #9D85FF
  - Soft coral: #FF7B8E, #FF8FA0
  - Soft blue: #6FB8FF, #7BC3FF

### Color-Shading Effect (Critical)
Each element has a subtle gradient that simulates 3D curvature:
```css
/* Clay surface — lighter on top, deeper on bottom */
background: linear-gradient(145deg, #E8DEFF 0%, #D0C0FF 100%);
```
The gradient range should be SUBTLE — just 10-20% difference between stops.

## Spacing & Layout

### Grid System
- Simple, generous grid — 2-3 columns for content, single column for mobile
- Max-width: 1000-1200px
- The large border-radius and puffy elements need room

### Spacing Philosophy
- **Very generous** — everything needs space to breathe and "puff out"
- Card padding: 28px-40px (more than typical)
- Between elements: 24px-40px
- Section padding: 80px-120px
- The shadows and rounded corners extend beyond the element bounds, so extra margin is needed

### Composition
- **Card-centric**: Content lives in puffy, distinct card containers
- **Simple layouts**: 1-3 column grids, nothing complex
- **Generous gaps**: Cards float independently with generous space between
- **Illustration-friendly**: Large areas for 3D illustrations or icons
- **Centered compositions**: Symmetry and centered layouts feel natural with the soft aesthetic

## Borders & Shadows

### Philosophy
The combined inner highlight + outer shadow is the ENTIRE claymorphic effect. This dual-shadow system creates the illusion of a soft, inflated 3D object sitting on a surface.

### Implementation
- **The Full Clay Shadow** (apply to every card, button, and container):
  ```css
  box-shadow:
    0 8px 20px rgba(0, 0, 0, 0.08),           /* outer shadow — object sitting on surface */
    0 2px 6px rgba(0, 0, 0, 0.04),             /* tight shadow for grounding */
    inset 0 -2px 6px rgba(0, 0, 0, 0.04),      /* inner bottom — slight depth */
    inset 0 4px 8px rgba(255, 255, 255, 0.6);   /* inner top — light hitting the surface */
  ```
- **Simplified version**:
  ```css
  box-shadow:
    0 8px 20px rgba(0, 0, 0, 0.1),
    inset 0 4px 6px rgba(255, 255, 255, 0.5);
  ```
- **Borders**: Usually NONE. The shadow defines the edge. If used, very subtle (1px in white/30 or matching pastel).
- **Border radius**: 16px-32px on all elements. Larger elements (hero cards) can go to 32px-40px. Buttons: 12px-16px or fully round (pill). This is non-negotiable — sharp corners break the clay illusion.

## Components

### Buttons
- Puffy, rounded, with the clay shadow effect
- Pastel or accent fill with subtle gradient (lighter top → slightly deeper bottom)
- Border-radius: 12px-16px or fully round (pill: 999px)
- Padding: 14px 28px (generous)
- Hover: shadow deepens slightly, element lifts (subtle translateY -2px)
- Active: shadow reduces, translateY +1px (presses in slightly)
- Text: Semi-bold (600), warm dark gray or white on accent

### Cards
- The star component — puffy, rounded, inflated
- Full clay shadow (outer + inner highlight)
- Pastel background with subtle gradient
- 24px-40px radius
- Generous padding (28px-40px)
- Content: centered or left-aligned, simple hierarchy

### Inputs
- Slightly inset appearance with inner shadow (but softer than neumorphism)
  ```css
  box-shadow: inset 0 2px 4px rgba(0,0,0,0.06);
  ```
- Very light fill (white or lighter-than-card pastel)
- Generous border-radius (12px-16px)
- Focus: accent-colored ring/shadow
- No hard borders — the shadow defines the edge

### Badges & Pills
- Small, puffy elements with the clay treatment
- Fully rounded (pill shape)
- Pastel fill with text in a slightly darker shade of the same hue
- Micro version of the clay shadow

### Icons & Illustrations
- 3D-rendered or 3D-styled icons are ideal
- If using flat icons, place them in puffy, rounded containers with the clay shadow
- Icon containers: circles or rounded squares with clay treatment
- Colors: matching the pastel palette

## Motion

### Philosophy
Animation in Claymorphism is **bouncy, soft, and playful** — like poking a blob of clay or squishing a stress ball. Movement reinforces the tactile, squishy quality.

### Implementation
- **Hover**: Subtle lift (translateY -3px) + shadow deepens. 200ms ease-out.
- **Active/Press**: Element squishes down (translateY +2px, slight scaleY 0.97) + shadow tightens. 100ms.
- **Springs**: Use spring-like easing for entrances: `cubic-bezier(0.34, 1.56, 0.64, 1)` — slight overshoot/bounce.
- **Entrances**: Bounce in with slight scale (0.9 → 1.02 → 1) and fade. Stagger for groups.
- **Micro-interactions**: Toggle switches bounce to position. Buttons squish on press. Cards wobble subtly on hover.
- **Transitions**: 200-350ms with spring easing.
- **Avoid**: Linear timing, sharp movements, anything mechanical or stiff.

## Dark Mode & Light Mode

### Mode Preference
Claymorphism is **strongly light-first**. The entire aesthetic — pastel surfaces, white inner highlights, soft outer shadows — is engineered around light bouncing off a pale, well-lit surface. The pastel palette that makes Claymorphism feel like a box of modeling clay loses its charm against dark backgrounds. That said, dark mode is absolutely possible — it just requires more deliberate work to preserve the puffy, tactile illusion.

### Why Light Mode Works Naturally
The dual-shadow system depends on contrast: the white inner highlight (simulating light hitting the top of a rounded surface) reads clearly against pastel fills, and the soft outer shadow (simulating the object resting on a surface) reads clearly against a light background. In light mode, you get this "3D clay" effect almost for free.

### Dark Mode Adaptation
Dark mode Claymorphism shifts from "pastel clay in sunlight" to "pastel clay under soft lamplight." The key is using **deep, muted pastels** — not pure dark grays — as your card surfaces, sitting on a very dark (but not pure black) base.

- **Background**: Very dark with a hint of color — not pure black.
  - Dark lavender base: `#1A1A2A`
  - Dark blue-gray: `#1C1C30`
- **Card surfaces**: Deep, muted pastels that still carry a hue:
  - Dark lavender card: `#2A2040`
  - Dark mint card: `#1A3028`
  - Dark blush card: `#2E1F28`
  - Dark sky card: `#1A2838`
- **Text**: Light warm gray `#E8E4F0` for primary, muted `#9A95A8` for secondary
- **Inner highlight**: This becomes MORE critical in dark mode — it's the primary cue that sells the 3D illusion. Increase the opacity slightly:
  ```css
  /* Dark mode inner highlight — boosted to cut through darkness */
  inset 0 4px 8px rgba(255, 255, 255, 0.15);
  ```
- **Outer shadow**: Shifts to subtler rgba with slightly more opacity (shadows on dark backgrounds need more strength to register):
  ```css
  /* Dark mode outer shadow */
  0 8px 20px rgba(0, 0, 0, 0.3);
  ```
- **Borders**: In dark mode, thin borders become useful for defining card edges that shadows alone can't delineate. Use white at very low opacity:
  ```css
  border: 1px solid rgba(255, 255, 255, 0.08);
  ```

### Implementation
```css
/* Dark mode clay card */
@media (prefers-color-scheme: dark) {
  .clay-card {
    background: linear-gradient(145deg, #2E2548 0%, #2A2040 100%);
    box-shadow:
      0 8px 20px rgba(0, 0, 0, 0.3),
      0 2px 6px rgba(0, 0, 0, 0.15),
      inset 0 -2px 6px rgba(0, 0, 0, 0.12),
      inset 0 4px 8px rgba(255, 255, 255, 0.15);
    border: 1px solid rgba(255, 255, 255, 0.08);
  }
}
```

```
/* Tailwind dark mode clay card */
dark:bg-gradient-to-br dark:from-[#2E2548] dark:to-[#2A2040]
dark:shadow-[0_8px_20px_rgba(0,0,0,0.3),0_2px_6px_rgba(0,0,0,0.15),inset_0_-2px_6px_rgba(0,0,0,0.12),inset_0_4px_8px_rgba(255,255,255,0.15)]
dark:border dark:border-white/[0.08]
dark:text-[#E8E4F0]
```

### Guidance
Light mode is the recommended primary experience — it's where Claymorphism truly shines and the puffy illusion is most convincing. Dark mode works as a secondary option, but expect to spend more time tuning. The "puffy" feeling is harder to achieve in darkness; lean heavily on the inner highlight to carry the 3D illusion. Test your dark mode cards against the dark background — if the edges disappear, add the thin border.

## Responsive & Mobile

### Breakpoint Strategy
Claymorphism's simple, card-centric layouts are naturally mobile-friendly. The style uses 1-3 column grids that collapse gracefully. The main challenge isn't layout — it's that the generous spacing and complex multi-layer shadows need thoughtful adaptation on smaller screens.

### Typography Scaling
Typography scales down gently — the rounded, friendly fonts remain legible at smaller sizes:
- **Headings**: Desktop 28px-48px → Tablet 24px-36px → Mobile 22px-32px
- **Body**: Desktop 15px-17px → Mobile 15px-16px (barely changes — readability is paramount)
- **Line-height**: Stays at 1.6-1.8 across breakpoints. Don't tighten it — the generous spacing IS the style.
- **Font weight**: Remains the same. Don't thin out headings on mobile.

### Spacing Adaptation
The generous spacing (28-40px padding, 80-120px sections) needs significant compression for mobile, but should still feel "roomy" compared to typical mobile UI:
- **Section padding**: Desktop 80px-120px → Tablet 48px-64px → Mobile 32px-48px
- **Card padding**: Desktop 28px-40px → Tablet 24px-32px → Mobile 20px-24px
- **Between elements**: Desktop 24px-40px → Mobile 16px-24px
- **Gaps between cards**: Desktop 24px-32px → Mobile 16px-20px

```css
/* Responsive spacing scale */
.clay-section {
  padding: 96px 24px;    /* Desktop */
}
@media (max-width: 768px) {
  .clay-section {
    padding: 40px 16px;  /* Mobile — still generous */
  }
}
```

### Layout Collapse
- **Grid strategy**: 3-col → 2-col at 768px → 1-col at 480px. Cards stack naturally.
- **Component stacking**: Illustration/icon on top, heading, then body text. The centered compositions common in Claymorphism translate perfectly to single-column mobile.
- **Navigation**: Bottom tab bar or hamburger both work well. Apply the clay treatment to the nav bar itself — puffy, rounded, with the inner highlight.

### Touch & Performance
- **Touch targets**: Already generous due to the puffy padding style. Buttons with 14px 28px padding and large border-radius exceed the 44px minimum easily.
- **Border-radius**: Stays generous on mobile. Don't reduce it — the rounding IS the style.
- **Performance concern — shadows**: The complex 4-layer `box-shadow` system is the main performance consideration on mobile. Each layer requires compositing, and when many clay cards are on screen simultaneously, this adds up. Consider simplifying to a 2-layer shadow on mobile (just inner highlight + outer shadow, dropping the intermediate layers):

```css
/* Mobile-optimized clay shadow — 2 layers instead of 4 */
@media (max-width: 768px) {
  .clay-card {
    box-shadow:
      0 8px 20px rgba(0, 0, 0, 0.1),
      inset 0 4px 6px rgba(255, 255, 255, 0.5);
  }
}
```

```
/* Tailwind mobile-simplified shadow */
shadow-[0_8px_20px_rgba(0,0,0,0.1),inset_0_4px_6px_rgba(255,255,255,0.5)]
md:shadow-[0_8px_20px_rgba(0,0,0,0.08),0_2px_6px_rgba(0,0,0,0.04),inset_0_-2px_6px_rgba(0,0,0,0.04),inset_0_4px_8px_rgba(255,255,255,0.6)]
```

The 2-layer version still reads as "clay" — the inner highlight + outer shadow pairing is the minimum viable clay effect. You lose a bit of depth from the intermediate layers, but the puffy illusion holds.

## Content & Voice

### Headline Tone
Warm, friendly, and encouraging — like a patient teacher or a kind friend cheering you on. Headlines use simple, positive language with a conversational spark. Think of how you'd talk to someone you genuinely want to help.

- "Let's get started!"
- "You're doing great!"
- "Simple & friendly"
- "Your creative space"
- "Ready when you are"

### Body Copy
Conversational, approachable, and jargon-free. Claymorphism's visual warmth should be matched by writing that feels like a friend explaining something, not a manual instructing you. Use "you" and "we" generously — the voice is personal and direct.

- **Sentence length**: Short. One idea per sentence. Let the words breathe like the generous spacing breathes.
- **Reading level**: Aim for a 6th-8th grade reading level. If a simpler word works, use it.
- **Tone**: Encouraging, never condescending. Positive, never anxious. Patient, never terse.
- **Personality**: A little playful, a little warm. Emojis are welcome and feel right at home in this style.
- **Avoid**: Technical jargon, corporate buzzwords, ALL CAPS urgency, fear-based messaging, complex sentences.

### CTAs & Microcopy
- **Button labels**: Invitational, not commanding. Use "let's" and friendly action words:
  - "Try it out" / "Let's go" / "Start creating" / "Sounds good!"
  - Avoid: "Submit" / "Execute" / "Proceed" / "Continue"
- **Error messages**: Reassuring and blame-free. The user should never feel bad:
  - "No worries! Let's try that again."
  - "Hmm, something went off track. Let's fix it together."
  - "Oops! That didn't work, but we've got this."
- **Empty states**: Encouraging and action-oriented. The emptiness should feel like an invitation, not a void:
  - "Nothing here yet — let's change that!"
  - "This is where your creations will live. Ready to make your first one?"
- **Tooltips & helpers**: Gentle and helpful, like a friend whispering a tip:
  - "Psst — you can drag these around!"
  - "This is where your files will show up."

### Content Density
Less is more. Claymorphism's generous padding and puffy elements already take up visual space, so text should be concise. Favor a high visual-to-text ratio: short paragraphs (2-3 sentences), plenty of illustrations or icons, and lots of breathing room. If a section feels text-heavy, break it into smaller cards.

## Icons & Illustrations

### Icon Style
Icons in Claymorphism should feel as soft and rounded as everything else. Sharp, thin-line icons feel jarring against puffy clay surfaces.

- **Ideal**: 3D-rendered icons are the gold standard. They match the clay aesthetic perfectly — rounded, shaded, tactile. Tools like Blender, Cinema 4D, or Spline can produce these, and many icon packs offer pre-made 3D sets.
- **2D alternative**: If using flat 2D icons (Lucide, Phosphor, etc.), place them inside puffy rounded containers with the full clay treatment. The container does the heavy lifting of making the icon feel "claymorphic":
  ```css
  /* Clay icon container */
  .clay-icon-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 56px;
    height: 56px;
    border-radius: 16px;
    background: linear-gradient(145deg, #E8DEFF 0%, #D0C0FF 100%);
    box-shadow:
      0 6px 14px rgba(0, 0, 0, 0.08),
      inset 0 3px 6px rgba(255, 255, 255, 0.5);
  }
  ```
- **Weight**: Medium weight (not thin, not heavy). Thin-line icons disappear against the soft surfaces; heavy icons feel clunky.
- **Style**: Rounded joins and caps, never sharp. If your icon set offers a "rounded" variant, use it.
- **Size in containers**: Icons should fill about 55-65% of their clay container, leaving room for the puffy padding to breathe.
- **Color**: Icons should use the warm dark text color (`#2D2D3F`) or a slightly deeper pastel that matches their container. Avoid black icons — they're too harsh.

### Illustration Approach
Illustrations are a natural companion to Claymorphism and can elevate it dramatically.

- **3D illustrations**: The absolute gold standard. Soft-body 3D renders in pastel colors from Blender, Cinema 4D, or Spline. Think rounded, blobby shapes with soft lighting — like the characters and objects you see in modern tech marketing. These should match the pastel palette: lavender blobs, mint orbs, pink bubbles.
- **Flat vector illustrations**: Can work if the colors match the pastel palette and the style is rounded and friendly. Avoid sharp geometric vectors — they clash with the organic clay mood. Illustration packs like Humaaans, Open Peeps, or unDraw work if recolored to match.
- **Isometric**: Generally too structured and angular for Claymorphism. Skip it.
- **Hand-drawn**: Loose, rounded hand-drawn doodles can complement the style if they feel playful and warm. Avoid precise, architectural hand-drawing.

### Photography Direction
Photography is rarely the right choice for Claymorphism — the style strongly prefers illustration. The entire aesthetic is about a crafted, playful, slightly unreal world, and photography introduces too much "reality."

If photography must be used:
- **Warm, soft-focus**: Gentle depth of field, warm color grading
- **Human-centered**: Smiling faces, hands creating things, cozy environments
- **Treatment**: Apply a subtle pastel overlay or duotone wash so photos feel part of the clay world. Round the corners generously (16px-24px) and apply the clay shadow to the photo container.
- **Avoid**: Sharp, high-contrast photography, corporate stock photos, product shots with harsh lighting

### Recommended Sources
- **3D icons**: 3Dicons, Iconscout 3D, Handz 3D
- **3D illustrations**: Kukla, Handz, Open Peeps 3D, Spline community library
- **2D icons (in clay containers)**: Phosphor (rounded set), Lucide, Feather
- **Flat illustrations**: unDraw (recolored to pastels), Humaaans, Blush

## Accessibility

### Contrast & Readability
Claymorphism has specific accessibility risks that come with the territory. The soft, pastel aesthetic can easily drift into insufficient contrast if you're not careful.

- **Known risk — inner shadow contrast**: The subtle inner shadow that creates the "lit" top area of a clay card can reduce the perceived contrast between text and the card surface. The lighter top zone (from the white inner highlight) may wash out text that sits near the top edge of a card.
- **Known risk — pastel-on-pastel**: This is the biggest danger. Combinations like lavender text on a pink card, or mint text on a blue surface, will almost certainly fail WCAG contrast requirements. Pastel colors are by definition low-saturation and mid-to-high lightness — two pastels together rarely achieve the 4.5:1 ratio needed for body text.
- **Remediation**: Always use warm dark gray text (`#2D2D3F` or `#3B3B4F`) on pastel surfaces. Never use pastel-colored text on pastel-colored backgrounds. The dark gray on pastel combination consistently achieves 7:1+ contrast while preserving the friendly mood. For secondary text, `#7A7A8E` on light pastels like `#F0EBFF` typically achieves 4.5:1 — verify with a contrast checker.
- **Positive aspects**: The generous border-radius and ample padding are accessibility-friendly. Large touch targets, readable font sizes (15px-17px body), and generous line-height (1.6-1.8) all support readability.

### Focus States
Focus indicators should feel like they belong in the clay world — thick, rounded, and accent-colored, wrapping around the puffy element like a soft ring.

```css
/* Clay-friendly focus state */
.clay-card:focus-visible,
.clay-button:focus-visible {
  outline: 3px solid #8B6FFF;
  outline-offset: 3px;
  border-radius: 24px; /* Match the element's radius */
}

/* Or as an additional shadow layer */
.clay-button:focus-visible {
  box-shadow:
    0 0 0 3px #F0EBFF,              /* gap ring in background color */
    0 0 0 6px #8B6FFF,              /* accent focus ring */
    0 6px 16px rgba(139, 111, 255, 0.3),
    inset 0 3px 6px rgba(255, 255, 255, 0.35);
}
```

```
/* Tailwind focus state */
focus-visible:outline-3 focus-visible:outline-[#8B6FFF] focus-visible:outline-offset-2
/* Or with ring utilities */
focus-visible:ring-3 focus-visible:ring-[#8B6FFF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F0EBFF]
```

The key: the focus ring should be clearly visible (3px thick, strong accent color) but still rounded and soft. Avoid harsh square outlines — they break the clay illusion.

### Motion Sensitivity
Claymorphism's bouncy, spring-like animations are delightful for most users but can cause discomfort for users with vestibular sensitivity. Respect `prefers-reduced-motion`:

```css
@media (prefers-reduced-motion: reduce) {
  /* Disable bouncy spring animations entirely */
  .clay-card,
  .clay-button {
    transition: opacity 0.2s ease, background-color 0.2s ease;
    /* Remove transform-based transitions (translateY, scale, bounce) */
    animation: none;
  }

  /* Keep simple, non-motion transitions */
  .clay-button:hover {
    transform: none;                /* No lift effect */
    box-shadow:                     /* Shadow deepens without movement */
      0 10px 24px rgba(139, 111, 255, 0.35),
      inset 0 3px 6px rgba(255, 255, 255, 0.4);
  }

  /* Entrance animations become simple fades */
  .clay-entrance {
    animation: none;
    opacity: 1;
  }
}
```

What to disable: bouncy entrances (scale + bounce), hover lift (translateY), press squish (scaleY), wobble effects, spring easing overshoot. What to keep: simple opacity transitions, color changes, shadow depth changes — anything that doesn't involve spatial movement.

### Screen Reader Considerations
- **Decorative shadows and highlights**: The multi-layer `box-shadow` system is purely visual and CSS-based, so it doesn't affect screen readers. No action needed.
- **3D illustrations and icons**: All decorative 3D illustrations should have `aria-hidden="true"` if they don't convey meaningful content. If they do convey meaning (e.g., an icon representing a feature), ensure proper `alt` text or `aria-label`.
- **Icon containers**: When 2D icons are wrapped in clay containers, the container is decorative — only the icon itself needs accessible labeling.
- **Emoji in copy**: Emojis in headlines or body text are read aloud by screen readers. Use them deliberately and ensure the surrounding text makes sense without them.

## Do's and Don'ts

### Do
- Apply the dual-shadow system (inner highlight + outer shadow) on every element
- Use generous, uniform border-radius (16px-32px) everywhere
- Keep the palette in pastel territory — soft, warm, inviting
- Add subtle gradient shading to simulate 3D curvature on surfaces
- Make interactions bouncy and playful (spring easing, slight overshoot)
- Pair with 3D illustrations or icons for maximum impact
- Keep layouts simple — the visual complexity is in the surface treatment, not the layout

### Don't
- Use sharp corners on anything — the rounding IS the style
- Use dark or fully saturated colors — pastels only
- Skip the inner highlight shadow — without it, elements look flat with just a drop shadow
- Overcomplicate layouts — claymorphism works best with simple, spacious compositions
- Use it for dense data or serious professional tools
- Apply to text or very small elements — clay treatment works on surfaces/containers
- Mix with other shadow styles (flat, neumorphic, material) — the clay effect must be consistent

## Implementation Hints (Tailwind + CSS)

```css
/* Core claymorphic card */
.clay-card {
  background: linear-gradient(145deg, #E8DEFF 0%, #D0C0FF 100%);
  border-radius: 24px;
  padding: 32px;
  box-shadow:
    0 8px 20px rgba(0, 0, 0, 0.08),
    0 2px 6px rgba(0, 0, 0, 0.04),
    inset 0 -2px 6px rgba(0, 0, 0, 0.04),
    inset 0 4px 8px rgba(255, 255, 255, 0.6);
}

/* Clay button */
.clay-button {
  background: linear-gradient(145deg, #9D85FF 0%, #8B6FFF 100%);
  border-radius: 14px;
  padding: 14px 28px;
  color: white;
  font-weight: 600;
  border: none;
  box-shadow:
    0 6px 16px rgba(139, 111, 255, 0.3),
    inset 0 3px 6px rgba(255, 255, 255, 0.35);
  transition: all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.clay-button:hover {
  transform: translateY(-2px);
  box-shadow:
    0 10px 24px rgba(139, 111, 255, 0.35),
    inset 0 3px 6px rgba(255, 255, 255, 0.4);
}
.clay-button:active {
  transform: translateY(1px) scaleY(0.97);
  box-shadow:
    0 4px 10px rgba(139, 111, 255, 0.25),
    inset 0 2px 4px rgba(255, 255, 255, 0.3);
}

/* Clay input */
.clay-input {
  background: rgba(255, 255, 255, 0.6);
  border-radius: 14px;
  padding: 14px 20px;
  border: none;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.06);
}
```

```
/* Tailwind classes (shadow values in arbitrary) */
/* Background */
bg-[#F0EBFF] text-[#2D2D3F]

/* Clay card */
bg-gradient-to-br from-[#E8DEFF] to-[#D0C0FF] rounded-3xl p-8 shadow-[0_8px_20px_rgba(0,0,0,0.08),0_2px_6px_rgba(0,0,0,0.04),inset_0_-2px_6px_rgba(0,0,0,0.04),inset_0_4px_8px_rgba(255,255,255,0.6)]

/* Clay button */
bg-gradient-to-br from-[#9D85FF] to-[#8B6FFF] text-white rounded-2xl px-7 py-3.5 font-semibold shadow-[0_6px_16px_rgba(139,111,255,0.3),inset_0_3px_6px_rgba(255,255,255,0.35)] hover:-translate-y-0.5 active:translate-y-px transition-all duration-200

/* Font stack */
font-heading: 'Nunito', 'Quicksand', 'Comfortaa', sans-serif
font-body: 'Nunito', 'DM Sans', 'Poppins', sans-serif

/* Color tokens (lavender variant) */
--color-bg: #F0EBFF
--color-surface-light: #E8DEFF
--color-surface-deep: #D0C0FF
--color-accent: #8B6FFF
--color-accent-light: #9D85FF
--color-text-primary: #2D2D3F
--color-text-secondary: #7A7A8E
--color-highlight: rgba(255, 255, 255, 0.6)
--color-shadow: rgba(0, 0, 0, 0.08)
```

## Reference Touchstones

When building in this style, channel the spirit of:
- Apple Memoji and 3D emoji designs
- Figma's 3D branded illustrations
- Duolingo's soft, playful UI
- Headspace's calming interface
- Modern fintech apps for young users (Monzo Kids, GoHenry)
- 3D illustration packs (Handz, Open Peeps 3D, Kukla)
- Play-Doh and modeling clay aesthetics
- Blender/Cinema 4D soft-body render style
