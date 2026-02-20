# Glassmorphism

> Frosted layers floating over vivid depth — the UI of transparent surfaces.

## Non-Negotiables

**If these four elements are not visually present, it is NOT glassmorphism.** This is the most commonly botched UI style — LLMs often produce a "dark theme with cards" instead. Every single one of these must be implemented and visually verifiable:

1. **Vivid, colorful background that shows through the glass.** This is the HERO element of the entire design. The page background must be a rich gradient (e.g., deep purple → teal), a mesh gradient, or large colorful blurred blobs/orbs. It must be vibrant enough to be clearly visible through the semi-transparent glass panels. A plain dark or plain white background is NOT glassmorphism — it's just transparency. Without a vivid background, the glass has nothing to reveal.

2. **`backdrop-filter: blur()` on every glass surface.** Cards, navbar, modals — every glass panel MUST have `backdrop-filter: blur(12px)` minimum (16px–24px preferred). This creates the frosted-glass distortion effect. Without it, you just have semi-transparent boxes. In Tailwind: `backdrop-blur-xl` or `backdrop-blur-2xl`. Include the `-webkit-backdrop-filter` prefix for Safari.

3. **Semi-transparent surface fill (rgba).** Glass panels use `background: rgba(255, 255, 255, 0.05–0.15)` in dark mode or `rgba(255, 255, 255, 0.4–0.7)` in light mode. The surface MUST be partially transparent so the blurred background shows through. In Tailwind: `bg-white/10` (dark mode) or `bg-white/50` (light mode). If your cards have a solid/opaque background, it's not glass.

4. **1px white/light border on glass edges.** Every glass surface needs `border: 1px solid rgba(255, 255, 255, 0.15–0.3)`. This simulates light catching the edge of glass and is essential for the illusion. Without it, the glass panels look flat and unfinished. In Tailwind: `border border-white/20`.

### Minimum Viable Glassmorphism (copy-paste checklist)

```
✅ Page background: vivid gradient or colorful blurred shapes — NOT plain dark
✅ Glass surfaces: backdrop-filter: blur(16px) — the frosted effect
✅ Glass surfaces: background rgba with LOW opacity (0.05–0.15 dark, 0.4–0.7 light)
✅ Glass surfaces: 1px border with white at 15–30% opacity
✅ Glass surfaces: border-radius 12px–24px (generous soft rounding)
✅ Glass surfaces: soft diffused box-shadow (0 8px 32px rgba(0,0,0,0.15))
✅ Gaps between glass panels so the background peeks through
```

### Quick self-test

After building, squint at the page. Can you see colorful shapes/gradients glowing through the card surfaces? Does the content area look like frosted glass panels floating over a vivid backdrop? If the answer to either is "no", revisit the background and blur implementation.

## Identity

- **Origin**: Popularized by Apple's macOS Big Sur and iOS redesigns (2020), drawing from earlier translucent UI experiments in Windows Vista/Aero and early CSS3 capabilities
- **Mood**: Futuristic, elegant, premium, sleek, layered, sophisticated
- **Best for**: SaaS dashboards, fintech apps, music/media players, OS-style interfaces, landing pages, portfolio sites, weather apps
- **Avoid for**: Text-heavy editorial, accessibility-critical apps for low-vision users, e-commerce with lots of product imagery, data-dense tables

## Typography

### Philosophy
Typography in Glassmorphism is **clean and modern** — it must read clearly against translucent backgrounds. Contrast and weight management are critical since the background is variable.

### Font Characteristics
- **Primary (headings)**: Modern sans-serifs with a slightly rounded, friendly feel. Medium to bold weights. Geometric or neo-grotesque.
  - Families to consider: SF Pro Display, Inter, Outfit, Plus Jakarta Sans, Satoshi, General Sans
- **Secondary (body)**: Same family as headings or a highly legible companion. Regular to Medium weight. Prioritize x-height and open counters for readability on blurred surfaces.
  - Families to consider: Inter, Source Sans 3, Nunito Sans, DM Sans
- **Avoid**: Thin/light weights on glassmorphic surfaces (the translucency eats contrast), condensed fonts, serif fonts (they clash with the futuristic tone)

### Scale & Weight
- Moderate typographic hierarchy — no extreme jumps. Glassmorphism is subtle, not shouty.
- Headings: Semi-bold to Bold (600–700). Never use light/thin weights for headings on glass surfaces.
- Body: Regular to Medium (400–500). Ensure minimum 16px on glass panels.
- Consider a slightly larger base font size (16–18px) to compensate for the noisy backgrounds.

## Color

### Philosophy
Color in Glassmorphism lives primarily in the **background layer** — behind the glass. The glass surfaces themselves are neutral and translucent. Vibrancy comes from what's beneath, not from the UI chrome.

### Palette Construction
- **Background layer (THE MOST IMPORTANT ELEMENT)**: A rich, vivid gradient or blurred image. This is what makes glassmorphism work — without it you just have a dark theme. The background must be colorful and vibrant enough to be visible through the glass panels. Common approaches:
  - Two-tone gradient (e.g., deep purple → teal, navy → magenta)
  - Mesh gradient with 3-4 color stops
  - Large blurred colorful orbs/blobs (absolute-positioned circles with blur(80px–120px) in vivid purple, pink, cyan, etc.)
  - Blurred abstract photography
  - **NEVER** use a plain solid dark or white background — the glass effect is meaningless without color behind it
- **Glass surfaces**: White with 10–25% opacity (light mode) or dark gray/black with 10–30% opacity (dark mode). The surface should be tinted, not fully transparent.
- **Borders**: 1px solid white at 15–30% opacity to define the glass edge (critical — without this the glass feels unfinished)
- **Text on glass**: Near-white (#FFFFFF or #F8F8F8) for dark mode glass, near-black (#1A1A1A) for light mode glass. Never use mid-tones — they disappear.
- **Accent color**: One bright, saturated accent (from the background gradient family) for CTAs, active states, and links. Keep it vivid.

### Dark Mode (Primary Mode)
Glassmorphism naturally favors dark mode — the glass effect is more visible and dramatic against dark, vibrant backgrounds. In dark mode:
- Glass panels: rgba(255, 255, 255, 0.05–0.15) or rgba(0, 0, 0, 0.3–0.5)
- Background: Deep, rich colors or near-black with colored blobs
- Text: White (#FFFFFF) with reduced opacity for secondary text (rgba(255,255,255,0.7))

### Light Mode
Doable but trickier. The glass appears more subtle:
- Glass panels: rgba(255, 255, 255, 0.4–0.7) — more opaque than dark mode
- Background: Soft, pastel gradients or light abstract imagery
- Text: Dark gray to black
- The frosted effect is less dramatic — consider whether Glassmorphism is the right choice for a light-first product

## Spacing & Layout

### Grid System
- Standard 12-column grid works well, but Glassmorphism shines with **card-based floating layouts**
- Glass panels should feel like they're floating over the background — they don't need to fill the grid edge-to-edge
- Allow the background to peek through between panels (the gaps are part of the aesthetic)

### Spacing Philosophy
- **Generous internal padding** on glass panels (24px–32px). The translucent surface needs room to breathe.
- **Comfortable gaps between panels** (16px–24px) to let the background show through
- Don't crowd content — the glass effect loses its magic when panels are crammed together
- Vertical rhythm should feel airy, not compressed

### Composition
- **Layered depth**: Glass panels over background, with occasional overlap for z-depth
- **Centered or floating layouts** work well — panels don't need to touch the viewport edges
- Consider a **subtle parallax** between background elements and glass panels (but keep it minimal)
- Leave negative space — the background gradient/image is part of the composition

## Borders & Shadows

### Philosophy
Glassmorphism creates depth through **transparency, blur, and subtle light borders**. Shadows are secondary to the glass effect itself but help sell the floating illusion.

### Implementation
- **Background blur**: `backdrop-filter: blur(12px–24px)` — this is the core technique. 12px for light frosting, 20px+ for heavy frost.
- **Surface border**: 1px solid rgba(255, 255, 255, 0.15–0.3) — this subtle white edge simulates light catching the glass. Essential for the style.
- **Border radius**: 12px–24px. Glassmorphism uses generous, soft rounding. Not perfectly round (that's a different aesthetic), but clearly softened.
- **Box shadow**: Soft, diffused shadow — `0 8px 32px rgba(0, 0, 0, 0.1–0.25)`. The shadow is distant and blurred, not tight. This sells the "floating" feel.
- **Inner glow (optional)**: A very subtle inset shadow with white at low opacity can add realism: `inset 0 1px 0 rgba(255,255,255,0.1)`

## Components

### Buttons
- Primary: Solid fill with accent color, generous border-radius (8px–12px), soft shadow
- Secondary: Glass-style button — translucent fill, white border, backdrop-blur
- Ghost: Just text + accent color, no fill
- Hover: Increase opacity/brightness slightly, subtle glow or shadow increase
- All buttons should have comfortable padding (12px 24px minimum)

### Cards
- The signature component. Glass panels with:
  - `backdrop-filter: blur(16px)`
  - Semi-transparent background (rgba)
  - 1px white/light border
  - Generous border-radius (16px–24px)
  - Soft distant shadow
- Content: Well-padded, clean typography, clear hierarchy
- Images within cards: Use rounded corners, consider a slight overlay to maintain glass consistency

### Navigation
- Top navbar as a glass panel stretching full width with backdrop-blur
- Links in regular weight, active state with accent color or underline
- Consider a glass-style sidebar for dashboards
- Mobile nav: glass-panel slide-out or bottom sheet
- Sticky nav benefits greatly from the blur effect — content scrolling beneath it sells the glass

### Inputs & Forms
- Glass-style inputs: translucent fill, subtle border, comfortable padding
- Border-radius consistent with cards (8px–12px)
- Focus state: border brightens to accent color, optional subtle glow
- Placeholder text at reduced opacity
- Labels above inputs in medium weight

### Modals & Dialogs
- Glass panel centered with heavy backdrop-blur
- Background overlay: dark semi-transparent (rgba(0,0,0,0.4–0.6)) — NOT blurred (that conflicts with the modal's own blur)
- Generous corner radius, prominent but soft shadow
- Close button as a small glass circle or subtle icon

## Motion

### Philosophy
Animation in Glassmorphism is **smooth, fluid, and elegant** — like objects moving through water or air. Everything feels weightless.

### Implementation
- **Transitions**: ease-out or cubic-bezier(0.4, 0, 0.2, 1), 200–400ms. Slightly longer than average to feel luxurious.
- **Entrances**: Fade in + subtle upward translate (translateY 10px → 0). Panels emerge gently.
- **Hover effects**: Subtle brightness/opacity change, slight scale (1.01–1.03), shadow deepens
- **Scroll**: Consider subtle parallax between background and glass layers
- **Avoid**: Harsh/instant transitions, bouncy springs (too playful for this aesthetic), large-scale movements

## Dark Mode & Light Mode

### Mode Preference
Glassmorphism is **dark-first**. The glass effect is most dramatic and visible against dark, vibrant backgrounds where the frosted distortion creates clear visual separation. Light mode is achievable but the effect is subtler and easier to get wrong.

**Why dark works better:** The frosted blur against bright colors creates a luminous, premium feel — like looking through a real glass panel at neon lights. In light mode, the same blur just looks slightly hazy.

### Dark Mode (Primary)
- **Background**: Deep, rich gradients with vivid color accents (purple → teal, navy → magenta) or large blurred colorful orbs on a near-black base
- **Glass surfaces**: `rgba(255, 255, 255, 0.05–0.15)` — barely tinted, mostly transparent
- **Text**: White (#FFFFFF) primary, `rgba(255,255,255,0.7)` secondary
- **Borders**: `rgba(255, 255, 255, 0.15–0.25)` — white edges catching light
- **Accent**: Bright, saturated color from the background gradient family

### Light Mode
- **Background**: Soft pastel gradients (lavender → peach, sky → mint) or light abstract imagery
- **Glass surfaces**: `rgba(255, 255, 255, 0.4–0.7)` — more opaque than dark mode to maintain definition
- **Text**: Near-black (#1A1A2E) primary, gray (#555) secondary
- **Borders**: `rgba(255, 255, 255, 0.5–0.7)` — brighter border to define edges against light background
- **Shadows**: Slightly more prominent than dark mode to compensate for reduced contrast

### Implementation
```css
/* Dark mode (default) */
:root {
  --glass-bg: rgba(255, 255, 255, 0.08);
  --glass-border: rgba(255, 255, 255, 0.15);
  --glass-blur: 16px;
}
/* Light mode */
[data-theme="light"] {
  --glass-bg: rgba(255, 255, 255, 0.55);
  --glass-border: rgba(255, 255, 255, 0.6);
  --glass-blur: 12px; /* Slightly less blur — the effect is subtler */
}
```

### Guidance
Start with dark mode. Only use light mode glassmorphism if the product requires it — and if you do, test carefully. The glass effect in light mode can easily look like "foggy cards" rather than "frosted glass." Consider whether glassmorphism is the right choice for a light-first product.

## Responsive & Mobile

### Breakpoint Strategy
Desktop-first for glassmorphism. The effect is most impressive on large screens where the vivid background has room to breathe and multiple glass panels can float independently.

### Typography Scaling
- **Headings**: Desktop 36–48px → Tablet 28–36px → Mobile 24–30px. Maintain Semi-bold to Bold weight.
- **Body**: 16–18px across all breakpoints — readability on glass surfaces is non-negotiable.
- **Hierarchy**: Compress slightly but keep the moderate hierarchy. Glassmorphism is not shouty.

### Spacing Adaptation
- **Section padding**: Desktop 80–120px → Tablet 60–80px → Mobile 40–60px
- **Card padding**: Desktop 24–32px → Mobile 20–24px (never go below 20px — glass needs breathing room)
- **Panel gaps**: Desktop 16–24px → Mobile 12–16px (keep visible gaps so background shows through)

### Layout Collapse
- **Grid**: Multi-column floating panels → single column stack on mobile
- **Navigation**: Sticky glass navbar is effective on mobile — the blur effect as content scrolls beneath it is compelling. Use a glass-panel slide-out or bottom sheet for the menu.
- **Background**: Simplify to fewer, larger color blobs on mobile. Complex mesh gradients can feel overwhelming on small screens.

### Touch & Performance
- **Touch targets**: Minimum 44px for all buttons and interactive elements on glass surfaces. The translucent styling can make tap targets visually ambiguous — ensure they're generous.
- **Performance**: `backdrop-filter: blur()` is GPU-intensive. On low-end mobile devices:
  - Reduce blur radius (16px → 8px) or use a fallback solid semi-transparent background
  - Limit the number of simultaneous glass surfaces visible in the viewport
  - Use `@supports (backdrop-filter: blur(1px))` for progressive enhancement
  - Simplify or remove background animated blobs on mobile

## Content & Voice

### Headline Tone
Clean, modern, and quietly confident. Headlines should feel like a premium product announcement — not shouting, but commanding attention through clarity.
- "Seamless by design"
- "Built for what's next"
- "Your data, beautifully organized"

### Body Copy
Concise, polished, and professional with a slight futuristic edge. Short paragraphs — long text blocks on glass surfaces hurt readability. Aim for 2–3 sentences per block. The tone is that of a thoughtful product designer explaining their work, not a marketer selling.

### CTAs & Microcopy
- **Button labels**: Clean and action-oriented — "Get Started", "Explore", "Try Free". Avoid aggressive sales language.
- **Error messages**: Calm and helpful — "Something went wrong. Please try again." No panic, no exclamation marks.
- **Empty states**: Elegant and inviting — "Nothing here yet. Start by creating your first project."
- **Tooltips**: Brief and informative. One sentence max.

### Content Density
Low to moderate. Glass surfaces work best with breathing room — dense text on translucent backgrounds becomes unreadable. Favor visual hierarchy (large heading + short paragraph + CTA) over information density. Text-to-visual ratio: 40% text, 60% visual/space.

## Icons & Illustrations

### Icon Style
**Outline/line icons** at 1.5–2px stroke weight. The thin, precise lines complement the glass aesthetic without competing with the blur and transparency effects. Filled icons feel too heavy on glass surfaces.

### Illustration Approach
Abstract, gradient-based illustrations work well — they blend with the vivid background. 3D glass-like objects, translucent shapes, and light refraction effects are on-brand. Avoid flat illustrations — they clash with the depth and layering.

### Photography Direction
If using photos, apply a slight blur or overlay to integrate them with the glass aesthetic. Photos should be moody, abstract, or atmospheric — not sharp product shots. Consider using photos as the vivid background layer itself (blurred behind the glass).

### Recommended Sources
- **Icons**: Phosphor Icons (light weight), Lucide, Heroicons (outline), Feather Icons
- **Illustrations**: Abstract gradient blobs (create custom), 3D glass renders
- **Colors for icons**: White or accent color at 80–90% opacity on dark glass, dark gray on light glass

## Accessibility

### Contrast & Readability
- **Known risks**: The variable, translucent background is the #1 accessibility challenge. Text contrast changes depending on what's behind the glass panel — a heading might be readable over a dark blob but disappear over a bright one.
- **Minimum contrast**: WCAG AA requires 4.5:1 for body text, 3:1 for large text. On glass surfaces, test contrast against the WORST-case background area (the brightest spot behind the glass).
- **Remediation**: Increase glass surface opacity (from 0.08 to 0.15–0.20) to ensure consistent text contrast. Add a subtle dark inner shadow or gradient overlay on glass panels to stabilize the background behind text. Use Semi-bold+ weights — thin text is dangerously illegible on glass.

### Focus States
Style-consistent focus indicators that remain visible on glass:
```css
/* Focus ring that works on glass surfaces */
:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 2px;
  box-shadow: 0 0 0 4px rgba(139, 92, 246, 0.3); /* accent glow */
}
```

### Motion Sensitivity
- **Essential**: The blur effect itself is static and accessibility-safe.
- **Disable with `prefers-reduced-motion`**: Parallax between background and glass layers, animated background blobs/orbs, hover scale transitions, entrance animations.
- Keep fade-in opacity transitions (they're subtle enough to be safe).

### Screen Reader Considerations
- Background colorful blobs/orbs are purely decorative — use `aria-hidden="true"`.
- Glass panels don't need special ARIA roles — they're just containers.
- Ensure any floating/overlapping layout order makes semantic sense in the DOM.

## Do's and Don'ts

### Do
- Ensure text has sufficient contrast against the glass surface (WCAG AA minimum) — test against the brightest area behind the glass
- Test readability with different background colors/images beneath the glass
- Use the glass effect on a limited number of surface types (cards, navbars, modals) — not everything
- Keep backgrounds vibrant — the glass effect is only as good as what's behind it
- Use consistent blur intensity and opacity across all glass surfaces
- Add the subtle white border — it makes or breaks the glass illusion
- Provide a solid-background fallback for browsers that don't support `backdrop-filter`
- Use `prefers-reduced-motion` to disable animated background elements

### Don't
- Stack multiple glass layers on top of each other — blur compounds and kills readability because each layer re-blurs everything below, creating an illegible soup
- Use thin font weights on glass surfaces — the translucency makes thin text shimmer and disappear, breaking readability
- Apply glass effect to tiny elements (buttons, badges) — glass needs surface area to show the frosted effect; on small elements it just looks like broken opacity
- Forget the background — glass over a plain white/black background is not glassmorphism, it's just semi-transparent cards with no purpose
- Use heavy saturated colors for the glass surface itself — the surface should be neutral/white/dark so it acts as a lens, not a filter
- Mix glassmorphism with drop-shadow-heavy designs — the depth model is transparency and blur, not elevation and shadow

## Implementation Hints (Tailwind + CSS)

```css
/* Core glass panel utility */
.glass {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
}

/* Light mode variant */
.glass-light {
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.6);
}

/* Background setup */
.glass-bg {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  /* or: mesh gradient, blurred shapes, vivid imagery */
  min-height: 100vh;
}
```

```
/* Tailwind classes — glass panel (apply ALL of these together) */
bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.15)]

/* Tailwind classes — vivid background with colored blobs */
/* On the page root: */
bg-gradient-to-br from-[#1a0533] via-[#0f172a] to-[#0c0a1a] min-h-screen
/* Add 3-4 absolutely positioned colored blobs behind the glass: */
/* <div class="absolute w-[500px] h-[500px] rounded-full bg-purple-600/30 blur-[120px]" /> */
/* <div class="absolute w-[400px] h-[400px] rounded-full bg-fuchsia-500/20 blur-[100px]" /> */
/* These create the vivid depth that the glass reveals — do NOT skip them */

/* Font stack */
font-heading: 'Plus Jakarta Sans', 'Outfit', sans-serif
font-body: 'Inter', 'DM Sans', sans-serif

/* Color tokens example */
--color-accent: #8B5CF6       /* Vivid purple */
--color-bg-start: #1a0533     /* Deep purple-black gradient start */
--color-bg-end: #0f172a       /* Dark navy gradient end */
--color-glass: rgba(255, 255, 255, 0.08)
--color-glass-border: rgba(255, 255, 255, 0.15)
--color-text-primary: #FFFFFF
--color-text-secondary: rgba(255, 255, 255, 0.65)
```

## Reference Touchstones

When building in this style, channel the spirit of:
- Apple macOS Big Sur / Ventura control center and widgets
- Linear app's dark mode UI
- Stripe's glass-panel marketing components
- Vercel's dashboard (subtle glass elements)
- Windows 11 Mica/Acrylic material system
- Rauno Freiberg's personal site experiments
