# Freeform

> No movement. No manifesto. Just you — building something that could only have come from your hands.

## Non-Negotiables

**If you skip any of these three, it is not Freeform.** Freeform is the hardest style to execute well because there is no rulebook to follow — only these three principles keep it from collapsing into "unfinished" or "generic":

1. **Every visual choice is a personal decision, not a default.** Nothing should look like it was left at the framework's default. Every color, font, spacing value, and border radius should feel *chosen*. The Tailwind defaults, the browser defaults, the template defaults — Freeform rejects all of them. If you can't explain why a value is what it is, change it until you can. *This is what separates Freeform from "I didn't design it yet."*

2. **Internal consistency within the project.** Freeform is not random. Once you establish a visual vocabulary — your specific border radius, your spacing rhythm, your color relationships — repeat it. A Freeform site should feel like one person designed the whole thing, even if that person's taste doesn't match any design textbook. *Consistency is what makes an unconventional choice look intentional rather than accidental.*

3. **At least one signature element.** Every Freeform project needs one thing that makes it unmistakably *this* project. A distinctive hover effect. An unusual color that appears everywhere. A specific way cards are shaped. A typographic quirk. Something a user would remember after closing the tab. *This is your visual fingerprint — without it, Freeform becomes indistinguishable from any other site.*

### Quick self-test

- Could someone tell this was designed by a human with opinions, not generated from a template?
- Is every visual choice deliberate — could you defend each one?
- Is there at least one element that's distinctly *yours*?
- Despite unconventional choices, does the site feel internally consistent?

## Identity

- **Origin**: Freeform has no origin movement — it's the anti-category. It draws from the reality that the most memorable websites (personal blogs, artist portfolios, indie games, creative experiments) are often the ones that don't follow any design system at all. They feel *authored*. Think of a musician who doesn't fit a genre — they're not breaking rules for shock value (that's Anti-Design), they're simply making what feels right to them.
- **Mood**: Personal, eclectic, expressive, unbound, authored, distinctive, opinionated, warm
- **Best for**: Personal sites, creative portfolios, passion projects, artist pages, blogs, indie products, side projects, experimental interfaces, digital gardens
- **Avoid for**: Enterprise SaaS (clients expect convention), e-commerce (users need familiar patterns to buy), anything with a large team (personal taste doesn't scale without documentation), government/healthcare (accessibility and convention are legally important)

## Typography

### Philosophy

Typography in Freeform is about *voice*. The fonts you choose should feel like they belong to you. Maybe you pair a display serif with a monospace body. Maybe you use one font for everything but vary the weight dramatically. Maybe you use a font nobody else uses. The point is: your type choices should be a *decision*, not a default.

### Font Characteristics

- **Primary (headings)**: Anything that has *character*. Display serifs, unusual sans-serifs, hand-drawn fonts, variable fonts pushed to extremes, bitmap fonts, mono fonts used as display. The only bad choice is the safe choice. Avoid: Inter, system-ui, and anything that screams "I didn't pick a font."
- **Secondary (body)**: Readability matters — personal expression shouldn't hurt the reader. Pick something legible at 16px but with enough personality that it doesn't feel generic. A humanist sans (Atkinson Hyperlegible, Sora, Karla), a warm serif (Lora, Source Serif), or a clean mono (JetBrains Mono, Berkeley Mono) all work.
- **Avoid**: Using the same font combinations everyone else uses (Inter + Inter, Poppins + Roboto). If you've seen it on 100 Vercel templates, it's not Freeform.

### Scale & Weight

- No prescribed scale — but commit to *your* scale. Maybe your headings are 72px on desktop and your body is 14px. Maybe there's no size hierarchy at all and everything is 18px. Whatever you choose, own it.
- Weight variation is your tool — a single font at weights 100 through 900 creates more visual interest than three fonts at weight 400
- Letter-spacing: Use it deliberately. Tight tracking on large headings, wide tracking on small labels, or the reverse — just don't leave it at default
- Case: Mix freely. ALL CAPS for one element, lowercase for another, Title Case for a third — if the combination feels right to *you*

## Color

### Philosophy

Freeform color is personal. It might come from a photograph you love, a place you've been, a feeling you want to evoke, or simply colors you enjoy looking at. The "rules" of color theory (complementary, analogous, triadic) are tools you can use, ignore, or subvert. The only requirement: your palette should feel like *yours*.

### Palette Construction

- **Start with one color you love.** Not one that "works well for SaaS" or "converts better" — one you genuinely enjoy. Build outward from there.
- **Background**: Could be anything. Warm off-white, deep navy, a muted color, pure black, a barely-visible gradient. The background sets the mood of the entire project.
- **Accent**: The color that draws the eye. It should contrast enough with the background to be visible. Beyond that, there are no rules.
- **Text**: Must be legible (4.5:1 contrast minimum). Can be pure black, pure white, a dark shade of your accent, or a desaturated tone. Gray text on gray backgrounds is lazy, not personal.
- **Surface/cards**: Can match the background, contrast with it, use a tinted version of the accent, or be something entirely different. Cards don't have to be white rectangles.

### Color Application

Use color where it matters to you. Maybe every section has a different background color. Maybe the entire site is monochromatic except for one vivid accent. Maybe you use color gradients that shift as the user scrolls. The application pattern is part of your signature. The one anti-pattern: don't use color randomly. Even surprising color choices should feel *intentional* — like they belong together in your world, even if they wouldn't in anyone else's.

## Spacing & Layout

### Grid System

You don't have to use a 12-column grid. You don't have to use any grid. Some Freeform layouts work on a strict grid with unusual proportions (5-column, asymmetric). Others use absolute positioning with elements placed by feel. Others use a standard grid but break it in one specific, repeating way. The key: whatever system you use, use it consistently enough that the page feels composed, not scattered.

### Spacing Philosophy

- Choose a base unit that feels right (4px, 5px, 6px, 8px, 10px — it doesn't have to be 4 or 8)
- Derive your spacing from multiples of that base, but allow yourself to break the system when something *looks* right but doesn't *measure* right — your eye beats the calculator
- Section padding: Whatever creates the right breathing room for your content. Could be 200px of whitespace or 20px of density.
- Consistency matters more than convention: if your cards have 24px padding, all cards should have 24px padding

### Composition

Freeform composition is where personality lives. Consider:
- **Asymmetry**: Off-center elements create visual tension and interest
- **Unexpected alignment**: Text aligned to the right, or centered in one section and left-aligned in another
- **Overlapping elements**: Images that break out of their containers, text that sits on top of other elements
- **Negative space**: Strategic emptiness that draws the eye to what matters
- **Full-bleed vs. contained**: Mix it up — some sections edge-to-edge, others tightly contained

## Borders & Shadows

### Philosophy

Borders and shadows are part of your visual vocabulary. There is no correct border-radius for Freeform — 0px, 4px, 16px, 50%, or mixed within the same page can all work. The question is: what do *your* edges feel like?

### Implementation

- **Borders**: Could be thick and colored, thin and subtle, dashed, double, or absent entirely. If you use borders, make them feel chosen — a 3px border in an unexpected color is more Freeform than a 1px gray border.
- **Shadows**: Could be realistic, colored, hard-offset, enormous, or completely absent. Consider: a colored shadow (your accent color at low opacity) is more personal than `rgba(0,0,0,0.1)`.
- **Border radius**: Pick a radius (or no radius) and let it become part of your signature. If you use 24px radius, use it everywhere. Or use 0px on cards and 50% (full circle) on avatars — the contrast itself is a choice.
- **Dividers**: Section separators can be lines, color changes, spacing, SVG shapes, or nothing at all. Avoid the default `<hr>` unless you've restyled it.

## Components

### Buttons

Buttons are where many designers play it safe. In Freeform, your buttons should have *personality*:
- Shape: Any shape. Pill, rectangle, square, asymmetric, text-only with an animated underline
- Fill: Solid, gradient, transparent, outlined, or something unusual (a patterned background, a blurred glass effect)
- Hover: This is your moment. The hover state should feel *satisfying*. Color shift, scale change, shadow appear, background slide, border morph — pick one and commit to it
- Padding: Whatever feels right for your type at your size. The default `px-4 py-2` is not Freeform.

### Cards

Cards don't have to be rectangles with rounded corners and a shadow:
- They could be borderless (separated only by spacing)
- They could have one colored edge (left border, bottom border)
- They could overlap each other
- They could have unusual aspect ratios
- The content hierarchy inside is yours to define — image first, text first, icon first, no image at all

### Navigation

Navigation is functional but doesn't have to be boring:
- Position: Top, side, bottom, floating, hidden until hover, always visible as a thin strip
- Style: Could be a traditional navbar, a list of links in the corner, a hamburger on desktop (if that's your aesthetic), breadcrumbs only, or a command palette
- The active state should be distinctly visible but styled your way — underline, background change, color shift, border, scale

### Inputs

Form elements are often the least designed part of a site. In Freeform:
- Rethink the default input box. Bottom-border-only? Full background color? Rounded pill? Thick left border?
- Focus states should match your accent color and feel intentional
- Labels can be above, inside (floating), beside, or below the input
- Error states should match your overall voice — a red border might be replaced with your accent color plus a helpful message

### Signature Element

This is your one required unique component. It could be:
- A custom cursor that changes on different elements
- A persistent visual motif (a shape, a pattern, a gradient) that appears throughout
- An unusual scrolling behavior (parallax, horizontal sections, snap points)
- A distinctive loading state or page transition
- A custom selection color (`::selection`)
- An interactive element that responds to mouse position
- A footer that breaks convention (huge, minimal, illustrated, single-word)

## Motion

### Philosophy

Animation in Freeform is about *feel*. Every transition should feel like it belongs to your project specifically. The default 150ms ease-in-out is not Freeform — it's what every framework ships. Change the duration, change the easing, or change what animates.

### Implementation

- **Transitions**: Pick a duration that feels right (could be 100ms for snappy, 400ms for smooth, 800ms for dramatic). Pick an easing curve that has character — `cubic-bezier(0.34, 1.56, 0.64, 1)` (overshoot) feels very different from `ease-out`
- **Hover effects**: One consistent hover pattern across the project. Don't use five different hover effects — that's noise, not personality.
- **Entrances**: Optional but powerful. Elements fading/sliding in on scroll can feel crafted when done consistently. Pick one entrance animation and use it everywhere.
- **Micro-interactions**: Small animations on click, toggle, or success states. These are the details that make a project feel *finished*.
- **Avoid**: Default framework animations. If Tailwind or Framer Motion ships it as a preset, customize it. `animate-bounce` and `animate-pulse` are recognizable from a mile away.

## Dark Mode & Light Mode

### Mode Preference

Freeform has no default mode — choose whichever mode your palette works best in, or design both. Some Freeform palettes are inherently dark (deep, moody, dramatic). Others are inherently light (airy, warm, bright). Some work in both. Let the palette decide, not convention.

### Palette Adaptation

If you support both modes:
- **Background**: Don't just swap white for black. Your dark background should have the same personality as your light one — if your light mode is warm cream, your dark mode should be warm charcoal, not cold black.
- **Surfaces/cards**: Subtle elevation differences matter more in dark mode. Use slightly lighter surfaces on dark backgrounds.
- **Text**: Maintain the same warmth/coolness. If your light-mode text is warm near-black, your dark-mode text should be warm off-white, not pure `#FFFFFF`.
- **Accents**: Your accent color may need brightness/saturation adjustment. Test it — some vibrant colors look stunning on dark backgrounds but garish on light ones (or vice versa).
- **Borders & shadows**: Shadows disappear against dark backgrounds. Switch to borders or subtle lighter-surface elevation for definition.

### Implementation

```css
:root {
  /* Define YOUR palette — these are examples, not prescriptions */
  --bg: /* your chosen background */;
  --surface: /* your chosen card/surface color */;
  --text: /* your chosen text color */;
  --text-secondary: /* your muted text */;
  --accent: /* your signature color */;
  --border: /* your border color */;
}

@media (prefers-color-scheme: dark) {
  :root {
    /* Adapt each value with the same warmth/personality */
    --bg: /* your dark background */;
    --surface: /* your dark surface */;
    --text: /* your light text */;
    --text-secondary: /* your muted light text */;
    --accent: /* adjusted if needed */;
    --border: /* adjusted for dark */;
  }
}
```

### Guidance

If your palette works best in one mode, make that the default and don't force the other. A mediocre dark mode is worse than no dark mode. If you do both, test that your signature element works in both — an effect that shines in dark mode but looks washed out in light mode breaks the experience.

## Responsive & Mobile

### Breakpoint Strategy

Freeform doesn't prescribe breakpoints — but your layout needs to work on phones. Start with the screen you care most about (desktop for portfolio pieces, mobile for personal blogs) and adapt outward.

### Typography Scaling

- **Headings**: Scale down proportionally, but preserve the *feeling*. If your desktop headings are dramatically large (80px+), your mobile headings should still feel dramatic (40px+), not shrink to comfortable 24px.
- **Body**: 16px minimum on mobile for readability. If your desktop body text is larger (18-20px), keep it larger on mobile too.
- **Hierarchy**: If your style relies on extreme size contrast between headings and body, preserve that contrast ratio on mobile even as absolute sizes decrease.

### Spacing Adaptation

- Compress section padding by roughly 40-60% on mobile (if desktop is 120px, mobile is 48-72px)
- Card and element spacing can compress more aggressively — 8-16px gaps work on mobile even if desktop uses 24-32px
- Your spacing rhythm (base unit) stays the same, just use smaller multiples

### Layout Collapse

- Multi-column layouts should stack to single-column on mobile
- If you have overlapping or absolutely-positioned elements, simplify them for mobile — they rarely work on small screens
- Your signature element must work on mobile. If it's hover-based, add a tap equivalent. If it's position-based, adapt it.
- Navigation: Use whatever mobile pattern serves your content. Hamburger menu, bottom bar, expandable header, or a simple list of links at the top.

### Touch & Performance

- **Touch targets**: 44px minimum for all interactive elements. Freeform aesthetics don't override usability.
- **Performance**: If your signature element involves heavy computation (complex animations, particle effects, canvas rendering), consider simplifying or removing it on mobile. A smooth 60fps experience is more impressive than a janky showpiece.

## Content & Voice

### Headline Tone

Write like yourself. Not like a brand, not like a corporation, not like a design agency. Your headlines should sound like something *you* would say:
- "Things I've made"
- "This is what I do"
- "Welcome to my corner of the internet"
- Or no headlines at all — let the work speak

### Body Copy

- Write in your natural voice. If you're casual, be casual. If you're formal, be formal. If you're poetic, be poetic.
- Don't perform a personality you don't have — users can tell when copy is forced
- Length: whatever serves the content. Some pages need a paragraph, some need a sentence, some need nothing.

### CTAs & Microcopy

- **Button labels**: Use words that feel natural to you. "Let's talk" instead of "Contact Us". "See my work" instead of "View Portfolio". "Send" instead of "Submit".
- **Error messages**: Be human. "That didn't work — try again?" is more personal than "Error: Invalid input."
- **Empty states**: Show personality here. "Nothing here yet" or "You haven't added anything" or just a small illustration.
- **Tooltips**: Conversational. Like explaining something to a friend.

### Content Density

Whatever serves your content. A photography portfolio might have one image per screen. A digital garden might be dense with text and links. A résumé might be a single scrolling page. Don't add content to fill space, and don't remove content to look minimal — let the content dictate the density.

## Icons & Illustrations

### Icon Style

Choose icons that match your typography's personality:
- If your type is geometric, use geometric icons (Heroicons, Material Symbols)
- If your type is humanist/warm, use softer icons (Phosphor, Lucide with rounded option)
- If your type is monospaced/technical, consider emoji or ASCII characters as icons
- Or draw your own. Even simple custom icons (a few SVG paths) add personality.

### Illustration Approach

Freeform is the best style for custom illustration because there are no rules about style consistency with a movement. Your illustrations can be:
- Hand-drawn sketches scanned and placed directly
- Abstract shapes composed in code (SVG, Canvas)
- 3D renders with your own aesthetic
- Collages mixing photography and graphics
- Pixel art, ASCII art, or generative art
- Nothing — no illustrations at all is valid

### Photography Direction

If you use photography, let it reflect your perspective:
- Personal photos > stock photos, always
- Apply your color palette as a filter or overlay if the photos don't naturally match
- Unconventional cropping and composition are welcome
- Mix photography with illustration, type, or graphics if it serves the design

### Recommended Sources

- Custom SVG icons (even simple ones you draw yourself)
- [Phosphor Icons](https://phosphoricons.com) — has enough style variants to match most aesthetics
- Your own photography, sketches, or generative art
- Emoji (underrated as a design element — they're personal, universal, and free)

## Accessibility

### Contrast & Readability

- **Known risks**: Freeform's biggest accessibility risk is choosing aesthetic over readability. Unusual color combinations, extreme font sizes (too large or too small), and low-contrast palettes can all hurt users.
- **Minimum contrast**: 4.5:1 for body text, 3:1 for large text and UI elements. No exceptions — personal expression doesn't override the ability to read.
- **Remediation**: If your chosen color pairing fails contrast, adjust the *lightness* of one color while keeping the *hue*. You can preserve the personality of an unusual color while making it accessible.

### Focus States

Your focus states should match your visual vocabulary:

```css
/* Example — adapt to YOUR accent color and border style */
:focus-visible {
  outline: 3px solid var(--accent);
  outline-offset: 2px;
}
```

Don't remove focus styles to "keep the design clean." Keyboard users need to see where they are. Style the focus indicator to match your aesthetic — a colored outline, a background change, a border — but keep it clearly visible.

### Motion Sensitivity

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

If your signature element is animation-based, provide a meaningful static fallback. The site should still feel personal and *authored* without any animation.

### Screen Reader Considerations

- Decorative elements (background shapes, visual motifs, custom cursors) need `aria-hidden="true"`
- If your navigation is unconventional, ensure it's still navigable with a keyboard and announced correctly by screen readers
- Custom interactive elements need appropriate ARIA roles and labels
- Test with a screen reader at least once — unconventional layouts can confuse assistive technology

## Do's and Don'ts

### Do

- **Make every choice deliberately** — the difference between Freeform and undesigned is intention. Every color, font, spacing value should be *chosen*, not defaulted.
- **Develop a signature element** — one distinctive visual touch that makes the project unmistakably yours. This is the minimum viable personality.
- **Maintain internal consistency** — repeat your patterns. If you use 16px border radius on one card, use it on all cards. Consistency is what makes unconventional choices look intentional.
- **Let your content drive the design** — build the layout around what you need to show, not the other way around. A photographer's site should look nothing like a writer's site, even in the same style.
- **Customize your defaults** — change the selection color (`::selection`), the scrollbar, the cursor if you want. These details signal that someone *cared*.
- **Test your ideas** — Freeform means you'll make choices no design system has validated. Test them with real content and real screen sizes.
- **Credit your inspirations** — it's okay to borrow ideas from sites you admire. Freeform is personal, not original from nothing.

### Don't

- **Leave anything at the framework default** — if it looks like every Next.js + Tailwind starter, it's not Freeform. Change the spacing, colors, fonts, and component shapes until they feel *yours*. Default ≠ personal.
- **Confuse random with personal** — three clashing fonts, five unrelated colors, and inconsistent spacing isn't Freeform, it's chaos. Every element should feel like it belongs to the same *person's* project, even if that person has unconventional taste.
- **Sacrifice usability for aesthetics** — you can have a custom cursor AND readable text, an unusual layout AND accessible navigation, colored shadows AND sufficient contrast. Personality doesn't require inaccessibility.
- **Copy another Freeform site** — that defeats the entire purpose. Be inspired by others, but if your site looks like theirs, you've adopted their personality instead of developing your own.
- **Overthink it** — the best Freeform sites feel *natural*, like the designer made intuitive choices. If you're spending hours debating whether to use 14px or 16px border radius, pick the one that *feels* right and move on. Taste develops through making, not deliberating.
- **Add trendy elements just because they're popular** — bento grids, glassmorphism cards, gradient mesh backgrounds — if these aren't *your* aesthetic, they'll feel borrowed. Use them only if they genuinely resonate with your vision.

## Implementation Hints (Tailwind + CSS)

```css
/* Custom selection color — an easy personality win */
::selection {
  background: var(--accent);
  color: var(--bg);
}

/* Custom scrollbar (Webkit) */
::-webkit-scrollbar { width: 8px; }
::-webkit-scrollbar-track { background: var(--bg); }
::-webkit-scrollbar-thumb { background: var(--accent); border-radius: 4px; }

/* Custom cursor (optional, use sparingly) */
body { cursor: url('/cursor.svg'), auto; }
a, button { cursor: url('/cursor-pointer.svg'), pointer; }

/* Signature animation — example: a custom easing for all transitions */
* { transition-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1); }
```

```html
<!-- Tailwind — these are EXAMPLES of personal choices, not prescriptions -->

<!-- Background with YOUR color -->
bg-[#your-color]

<!-- Card with YOUR radius, YOUR border -->
rounded-[your-radius] border-[your-width] border-[your-color] p-[your-padding]

<!-- Button with YOUR personality -->
bg-[your-accent] text-[your-text] rounded-[your-radius] px-[your-x] py-[your-y]
hover:bg-[your-hover] transition-all duration-[your-speed]

<!-- Heading with YOUR font -->
font-[your-font] text-[your-size] font-[your-weight] tracking-[your-tracking]

<!-- The point: replace every default with YOUR value -->
```

## Reference Touchstones

When building in Freeform, channel the spirit of:
- **Personal blogs of developers and designers** who clearly cared about how their site looks — [leerob.io](https://leerob.io), [paco.me](https://paco.me), [rauno.me](https://rauno.me)
- **Indie game websites** that create their own visual world — Hollow Knight, Celeste, Untitled Goose Game
- **Artist portfolio sites** that feel like extensions of the work itself
- **MySpace and early web personal pages** — messy, personal, and unmistakably *authored* by a specific human
- **Zines and self-published print** — no publisher's template, just someone's vision on a page
- **The "personal site renaissance"** — the movement of people building their own corners of the internet instead of posting on platforms
