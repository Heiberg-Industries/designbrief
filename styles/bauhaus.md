# Bauhaus

> "Form follows function." — The Bauhaus school, 1919–1933

## Identity

- **Origin**: Bauhaus school of design, Weimar Germany, founded by Walter Gropius in 1919
- **Mood**: Rational, structured, confident, modern, intellectual, geometric
- **Best for**: Architecture firms, product companies, design agencies, portfolios, editorial, SaaS with a design-forward audience
- **Avoid for**: Children's apps, playful consumer products, anything that needs to feel soft or organic

## Non-Negotiables

These elements MUST be present or it does not read as Bauhaus. Check every one before considering the UI complete:

1. **Border-radius: 0px on all rectangular elements.** No rounded corners on cards, buttons, inputs, containers. The only curves allowed are perfect circles (a Bauhaus primitive). If you see `rounded-md`, `rounded-lg`, or any border-radius > 0 on a rectangle, it's wrong.
2. **Zero shadows.** No `box-shadow`, no `drop-shadow`, no elevation effects. Depth comes from color blocking, overlapping shapes, and compositional contrast — never from shadows.
3. **Geometric decorative elements.** Every page should include at least 2-3 pure geometric shapes (circles, squares, triangles) used as compositional accents — oversized background shapes, colored blocks, or structural dividers. These are not optional decoration; they are the visual signature.
4. **Flat, solid color only.** No gradients, no blur, no transparency effects on surfaces. Every surface is a solid, flat color. The palette is restrained: black, white/off-white, and 1-2 colors from the primary triad (red, blue, yellow).

## Typography

### Philosophy
Typography in Bauhaus is **functional and geometric**. Letterforms are constructed, not decorated. The typeface itself is a design element — often oversized, always purposeful.

### Font Characteristics
- **Primary (headings)**: Geometric sans-serifs with uniform stroke width. Look for fonts with perfect circles in their 'o', sharp terminals, and minimal optical corrections.
  - Families to consider: Futura, DM Sans, Space Grotesk, Archivo, Bebas Neue (display only), Josefin Sans
- **Secondary (body)**: Clean grotesques with excellent readability at small sizes. Slightly more humanist than headings is fine.
  - Families to consider: Inter, Work Sans, Source Sans 3, IBM Plex Sans
- **Monospace (optional, for code/data)**: Geometric monospaced fonts.
  - Families to consider: Space Mono, IBM Plex Mono, JetBrains Mono

### Scale & Weight
- Use a **clear typographic hierarchy** with large jumps between levels (e.g., 14px body → 32px h2 → 64px h1)
- Headings can be very large — Bauhaus embraces bold typographic statements
- Stick to 2-3 weights maximum: Regular for body, Bold or Black for headings, Medium for UI elements
- ALL CAPS is appropriate for short headings and navigation — Bauhaus pioneered the "universal alphabet" that favored simplicity
- Letter-spacing: slightly increased for uppercase text, default for body

## Color

### Philosophy
Bauhaus color theory is rooted in the **primary triad**: red, blue, and yellow, often on a neutral base. Color is used deliberately and sparingly — it communicates, it doesn't decorate.

### Palette Construction
- **Base**: White, off-white (#FAFAFA–#F5F5F0), or light warm gray as the canvas
- **Neutrals**: True blacks (#1A1A1A–#0D0D0D) and warm grays for text and structure
- **Primary accent**: Choose ONE strong color — a Bauhaus red (#E63B2E), blue (#1B4D8E), or yellow (#F2C41D). This is your hero color.
- **Secondary accent**: Optionally add one more from the triad, used very sparingly (e.g., yellow highlight if red is primary)
- **Do NOT use**: Gradients, pastels, or more than 3 chromatic colors. Bauhaus color is flat, solid, and confident.

### Dark Mode
- Invert to a near-black canvas (#0D0D0D–#1A1A1A) with off-white text
- Primary accent retains its hue but may increase in brightness/saturation slightly
- Maintain the same restraint — dark mode is not an excuse for neon

## Spacing & Layout

### Grid System
- **Strong grid-based composition** is essential. Use a clear column grid (8-col or 12-col) and align everything to it.
- Bauhaus embraces **asymmetric balance** — not centered, but balanced through visual weight. Place heavy elements offset from center.
- Whitespace is structural, not decorative. It defines zones and creates breathing room.

### Spacing Philosophy
- Use a **consistent spacing scale** based on a base unit (e.g., 4px or 8px). Common values: 8, 16, 24, 32, 48, 64, 96.
- Generous margins around major sections (64px–128px vertical padding on desktop)
- Tighter internal padding within components (16px–24px)
- Align text blocks, images, and components to the grid — misalignment is antithetical to Bauhaus

### Composition
- **Geometric shapes as layout elements**: Circles, rectangles, and triangles can be used as backgrounds, dividers, or accent elements
- Horizontal and vertical lines as structural dividers (not just `<hr>` — visible, intentional lines)
- Overlapping elements are acceptable if they follow the grid
- Consider diagonal or rotated text for emphasis (a Bauhaus signature), but use sparingly in web

## Borders & Shadows

### Philosophy
Depth is created through **composition and contrast**, not through shadows or blur. Bauhaus design is fundamentally flat but uses layering and color to create visual hierarchy.

### Implementation
- **Borders**: Solid, 1–3px, black or primary accent color. Borders are visible and structural.
- **Border radius**: 0px (square corners) by default. Bauhaus is geometric — round corners soften the rational edge. Exception: perfect circles are fine (circles are a Bauhaus primitive shape).
- **Shadows**: None or very minimal (0–2px subtle shadows only for functional elevation like dropdowns). If you need depth, use color blocking or overlapping shapes instead.
- **No blur effects**, no glassmorphism, no gradients on surfaces.

## Components

### Buttons
- Rectangular, no border-radius (or 0px)
- Solid fill with primary accent color, white text (primary action)
- Black border with transparent fill (secondary action)
- Uppercase text with slight letter-spacing
- Generous horizontal padding, medium vertical padding
- Hover: invert colors (fill ↔ border) or shift to black fill

### Cards
- Sharp corners (border-radius: 0)
- Thin black border (1–2px) or no border with color-blocked background
- No shadow — differentiate through border or background color
- Content aligned to internal grid
- Image fills edge-to-edge within card (no internal margin on images)
- **Featured/highlighted card**: Use color inversion (dark background with light text) OR a bold primary-color background OR a thicker/accent-color border. The Bauhaus approach to emphasis is through **visual weight contrast** — the promoted card should feel heavier (darker fill, bolder border, or primary-color blocking) while siblings stay light. Do NOT use shadows, scale changes, or rounded corners to denote importance.

### Navigation
- Horizontal nav with uppercase, spaced-out links
- Active state: underline (solid, 2–3px, accent color) or color change
- No rounded pills, no background highlights — keep it typographic
- Consider a bold vertical sidebar nav for dashboards (Bauhaus loved vertical text)

### Inputs & Forms
- Square corners, solid borders (1–2px black)
- No inner shadows, no rounded edges
- Label above input, in uppercase or bold
- Focus state: border color changes to primary accent
- Error state: border changes to red with small text below

### Modals & Dialogs
- Sharp rectangle, centered or offset
- Thin black border or solid accent-color header bar
- No rounded corners, no backdrop blur — use a solid semi-transparent black overlay

## Motion

### Philosophy
Movement in Bauhaus is **mechanical and precise** — like a well-made machine. No bouncy, elastic, or organic animations.

### Implementation
- **Transitions**: Linear or ease-in-out, 150–250ms. Quick and deliberate.
- **Entrances**: Translate or fade, never bounce or spring
- **Hover effects**: Color shift, underline slide-in, or subtle scale (1.02 max)
- **Avoid**: Elastic easing, wobbly animations, parallax scroll effects, decorative particle effects

## Dark Mode & Light Mode

### Philosophy
Bauhaus is **light-first by heritage** — the white or off-white canvas is the traditional ground, echoing the stark white walls of the Dessau Bauhaus building. Dark mode is a modern adaptation that, when done correctly, makes the geometric accent shapes even more striking.

### Light Mode (Default)
- **Canvas**: White (#FFFFFF) or warm off-white (#FAFAF8–#F5F5F0)
- **Text**: Near-black (#1A1A1A) for body, true black (#0D0D0D) for headings
- **Borders**: 1–3px solid black
- **Accent shapes**: Primary triad colors (red/blue/yellow) on the white ground
- **Shadows**: None. Zero. Non-negotiable in either mode.

### Dark Mode
- **Canvas**: Near-black (#0D0D0D–#1A1A1A). Not charcoal gray — go dark enough to feel absolute.
- **Text**: Off-white (#F5F5F0–#FAFAFA), never pure #FFFFFF (too harsh for extended reading)
- **Primary accent**: Retains its hue but brightness/saturation increases slightly to maintain vibrancy against the dark canvas. Example: Bauhaus red shifts from #E63B2E → #EF4F43; blue from #1B4D8E → #2A6ABF; yellow from #F2C41D → #F5D04A.
- **Borders**: Shift from black to white (1–3px solid white). The structural line language stays identical — only the color inverts.
- **Geometric accent shapes**: Become the visual heroes. A red circle on near-black reads louder than on white — lean into this.
- **Shadows**: Still none. The flat, solid-color-only rule applies identically to dark mode. No gradients to fake depth, no glow effects to simulate light.

### Example: Card in Light vs. Dark
```
/* Light mode card */
background: #FAFAF8;
border: 2px solid #1A1A1A;
color: #1A1A1A;
box-shadow: none;
border-radius: 0px;

/* Dark mode card */
background: #1A1A1A;
border: 2px solid #F5F5F0;
color: #F5F5F0;
box-shadow: none;
border-radius: 0px;
```

### Example: Primary Button in Light vs. Dark
```
/* Light mode */
background: #E63B2E;
color: #FFFFFF;
border: none;
border-radius: 0px;

/* Dark mode */
background: #EF4F43;
color: #0D0D0D;
border: none;
border-radius: 0px;
```

## Responsive & Mobile

### Philosophy
Grid discipline is non-negotiable at every viewport. Bauhaus design was born in architecture and industrial design — it scaled from teacups to buildings. Your UI must do the same.

### Breakpoint Strategy
- **Desktop (1280px+)**: 12-column grid, full geometric compositions, large typographic statements (64px+ headings)
- **Tablet (768px–1279px)**: 6-column grid, headings compress to 42–52px, decorative geometric shapes reduce in number (keep 1-2 hero shapes, remove supplementary ones)
- **Mobile (< 768px)**: 2-column grid (or single-column for text-heavy sections), headings at 32–42px, simplify geometric compositions to 1 accent shape per section

### Spacing Adaptation
- **Section padding**: 64–128px vertical (desktop) → 40–64px (mobile)
- **Component padding**: 16–24px internal padding holds steady across breakpoints
- **Margins**: Generous side margins on desktop (8–12% of viewport); tighter on mobile but never zero — content must never touch the screen edge

### Typography Scaling
- Hero headings: 64–96px desktop → 36–48px mobile
- Section headings: 32–48px desktop → 24–32px mobile
- Body text: 16–18px holds across all breakpoints (readability is non-negotiable)
- ALL CAPS headings remain ALL CAPS at all sizes

### Geometric Elements at Small Sizes
- Large background circles/squares scale down proportionally or become partial (cropped by viewport edge — this can look intentionally architectural)
- Structural lines (horizontal/vertical dividers) remain but may reduce from 3px to 1–2px
- Decorative triangles and complex compositions simplify — fewer shapes, bolder presence

### Touch & Interaction
- **Sharp corners (0px radius) stay everywhere** — do not soften for mobile
- Buttons must maintain at least **44px height** for touch targets, even with 0px border-radius
- Tap areas on navigation links: minimum 44×44px
- Spacing between interactive elements: at least 8px to prevent mis-taps

### Performance
- Flat design with no shadows, no blur, no gradients is **inherently performant** — no GPU-heavy effects, no complex compositing layers. Bauhaus's aesthetic principles align naturally with fast rendering.

## Content & Voice

### Philosophy
Bauhaus content reads like a **manifesto or a design school lecture** — intellectual, declarative, confident. Every word earns its place. If a sentence doesn't serve a purpose, cut it.

### Tone Characteristics
- **Intellectual**: Assumes an informed reader. Does not dumb down or over-explain.
- **Declarative**: Statements, not suggestions. "Form follows function" — not "We think form should maybe follow function."
- **Confident**: No hedging, no "we believe", no "helping you". Direct address, active voice.
- **Economical**: Short sentences. Clear structure. No filler words.

### Headlines
Headlines are **statement-making**. They read like principles, not descriptions:
- "Form follows function"
- "Less is more"
- "Design is thinking made visual"
- "The material is the message"
- "Structure determines beauty"

Avoid generic marketing headlines ("Welcome to our platform", "The best solution for your needs").

### Body Copy
- Clear and purposeful — no fluff, no marketing speak
- Moderate content density: text is important but whitespace is structural
- Paragraphs are short (2–4 sentences)
- Lists are acceptable and encouraged — they impose structure

### CTAs & UI Text
- Direct and imperative: **"Enter"**, **"Submit"**, **"Begin"**, **"View"**, **"Create"**
- Not soft or conversational: avoid "Let's go!", "Get started!", "You're all set!"
- Error messages are factual: "Email format invalid." not "Oops! That doesn't look like an email."
- Empty states are matter-of-fact: "No items." not "Nothing here yet! Start adding items."

### Formatting Conventions
- ALL CAPS for headings carries authority — use for H1 and navigation
- Sentence case for body text and longer subheadings (readability over style)
- Think **Braun product manuals**, **architectural project descriptions**, **museum exhibition guides**

## Icons & Illustrations

### Philosophy
Bauhaus iconography follows the same rule as everything else: **geometric only**. Icons are constructed from basic shapes — circles, squares, triangles, and straight lines. They are pictograms, not illustrations.

### Icon Design Rules
- Built from **basic primitives**: circles, squares, rectangles, triangles, straight lines
- **No organic curves** — no S-curves, no hand-drawn feel, no freeform paths
- **No rounded-corner icons** — if a shape is rectangular, its corners are sharp
- **No detailed pictograms** — simplify to the minimum recognizable form
- **Uniform stroke weight** (if using outlined style) or solid fill (if using filled style)
- Consistent optical sizing across the set

### Icon Libraries (If Not Custom)
- **Custom geometric icons** are the ideal — designed specifically for the project using Bauhaus primitives
- If using a library: **Heroicons (solid variant)**, simplified to remove any rounded details
- Avoid: Phosphor (too rounded), Lucide (too many organic curves), emoji-style icons

### Illustration Style
- **Geometric compositions**: Circles, rectangles, and triangles arranged in deliberate compositions using primary colors (red, blue, yellow) on white or black grounds
- Think **Kandinsky's compositions** — abstract arrangements of geometric forms with color and spatial relationships
- Think **Moholy-Nagy's photomontages** — bold, structured, high-contrast
- Think **Herbert Bayer's typography experiments** — geometry as visual language
- No hand-drawn illustrations, no organic shapes, no gradients within illustrations

### Photography Treatment
- **High-contrast black and white** is the primary photographic treatment
- If color is used: **minimal, desaturated** — or selectively colorized with a single primary accent
- Photos should be tightly cropped, architecturally composed, and placed within the grid
- No soft-focus, no light leaks, no filters — sharp and factual

## Accessibility

### Known Strengths
Bauhaus design has natural accessibility advantages:
- **High contrast**: Black text on white (or white on near-black) provides excellent contrast ratios, typically exceeding WCAG AAA requirements
- **Large typography**: The style's preference for bold, oversized headings improves readability
- **Clear hierarchy**: Strong size differences between heading levels create an unambiguous reading order
- **No decorative noise**: Flat design with no shadows, no gradients, and no blur means fewer distractions for users with cognitive disabilities
- **Minimal animation**: The style already favors mechanical, brief transitions — low motion is the default

### Known Risks & Mitigations
- **0px border-radius on interactive elements**: Square buttons and inputs can be hard to distinguish from static text blocks or containers. **Mitigation**: Ensure buttons have a clear fill color or a thick border, plus a distinct hover/focus state. Never rely on shape alone to signal interactivity.
- **ALL CAPS reduces readability**: Extended uppercase text slows reading speed and is harder for users with dyslexia. **Mitigation**: Reserve ALL CAPS for short headings (under ~6 words) and navigation labels. Offer sentence case for paragraphs and longer subheadings. Never set body text in ALL CAPS.
- **Geometric decorative elements**: Circles, triangles, and shapes used as compositional accents carry no semantic meaning. **Mitigation**: Mark all decorative geometric elements with `aria-hidden="true"` and ensure they do not receive focus.

### Focus States
- Use a **thick accent-colored border** (2–3px) for focus indicators — this aligns perfectly with the style's existing structural border aesthetic
- Focus outlines should use the primary accent color (red, blue, or yellow) for high visibility
- Never remove focus outlines; the Bauhaus border language gives you a natural, on-brand way to show them
- Example: `outline: 3px solid #E63B2E; outline-offset: 2px;`

### Motion & Reduced Motion
- `prefers-reduced-motion`: Bauhaus already uses minimal, mechanical animation (150–250ms, no spring/bounce). For reduced-motion users, disable even these brief transitions — snap to final state.
- No auto-playing animations, carousels, or looping motion

### Color & Contrast
- Test all primary accent colors against both light and dark canvases — Bauhaus yellow (#F2C41D) on white fails WCAG AA for text. Use yellow only for large decorative elements or non-text indicators, never for body text.
- Dark mode contrast: Off-white text (#F5F5F0) on near-black (#1A1A1A) passes WCAG AAA (ratio ~16:1)

## Do's and Don'ts

### Do
- Use geometric shapes (circles, squares, triangles) as design elements — **they are the visual DNA of Bauhaus, not optional decoration; without them, the style is just "minimal"**
- Create strong visual hierarchy through size contrast — **Bauhaus used dramatic scale shifts (small body text vs. massive headings) to guide the eye without relying on color or ornament**
- Let whitespace do heavy lifting — **in Bauhaus, empty space is structural; it defines zones and creates rhythm just as powerfully as filled space**
- Use primary colors boldly but sparingly — **restraint is what makes a single red circle powerful; flood the page with color and you lose the contrast that defines the style**
- Align everything to a grid — **the grid is the intellectual backbone of Bauhaus; breaking it signals carelessness, not creativity**
- Use rules (horizontal/vertical lines) as compositional tools — **visible structural lines reference the architectural origins of the movement and create visual order**
- Keep the overall page count of colors under 4 (including black and white) — **Bauhaus color theory is about deliberate selection; every color must justify its presence**

### Don't
- Round corners on rectangular elements — **border-radius softens the rational, geometric precision that defines Bauhaus; it introduces an organic quality that contradicts the style's machine-age philosophy**
- Use drop shadows for depth — **shadows simulate physical light and three-dimensionality; Bauhaus achieves depth through flat color blocking and compositional overlap, never through illusion**
- Apply gradients or blurred backgrounds — **gradients and blur are decorative effects that add visual complexity without communicating meaning; Bauhaus demands that every visual element serves a purpose**
- Use more than 2-3 typefaces — **typographic restraint mirrors the broader Bauhaus principle of reduction to essentials; multiple typefaces create noise, not variety**
- Center everything — asymmetry is key — **Bauhaus pioneered asymmetric layouts as a rejection of classical symmetry; centering everything produces static, lifeless compositions**
- Add decorative illustrations or icons that aren't geometric — **organic or illustrative elements break the geometric language; if it can't be built from circles, squares, triangles, and lines, it doesn't belong**
- Use script or handwritten fonts — **Bauhaus explicitly rejected ornamental letterforms; the movement created geometric typefaces (like Universal) as a statement against decorative tradition**

## Implementation Hints (Tailwind)

```
/* Base tokens for a Bauhaus-inspired project */

/* Spacing: 8px base grid */
spacing: default Tailwind scale works well, favor multiples of 2

/* Border radius */
rounded-none on everything (or define a custom 'rounded-bauhaus: 0px')

/* Font stack example */
font-heading: 'Space Grotesk', 'DM Sans', sans-serif
font-body: 'Inter', 'Work Sans', sans-serif

/* Color example (red-primary Bauhaus) */
--color-primary: #E63B2E     /* Bauhaus red */
--color-secondary: #1B4D8E   /* Bauhaus blue (use sparingly) */
--color-accent: #F2C41D      /* Bauhaus yellow (highlights only) */
--color-surface: #FAFAF8     /* Warm white canvas */
--color-text: #1A1A1A        /* Near-black */
--color-muted: #6B6B6B       /* Gray for secondary text */

/* Useful Tailwind classes */
border border-black
uppercase tracking-wider
text-7xl font-black (for hero headings)
shadow-none
divide-y divide-black (for lists)
```

## Reference Touchstones

When building in this style, channel the spirit of:
- The original Bauhaus posters and publications
- Braun product design (Dieter Rams era)
- The Barbican Centre's visual identity
- Stripe's marketing pages (the grid discipline, not the gradients)
- Layout principles from Josef Müller-Brockmann's grid systems
