# Y2K Revival

> Chrome, bubbles, and digital optimism — the future as imagined in 1999.

## Non-Negotiables

**If you skip any of these three, it is not Y2K Revival.** These recreate the specific late-90s/early-2000s digital aesthetic — without them, the result is "futuristic" or "shiny" rather than recognizably Y2K:

1. **Chrome/metallic surfaces with reflective gradients.** The defining visual element of Y2K is CHROME — shiny, reflective, liquid-metal surfaces. This is achieved through multi-stop gradients that simulate metallic reflection: light → dark → light → dark bands. Apply chrome/metallic gradients to headings, logos, decorative elements, buttons, or accent surfaces. Without the metallic/reflective quality, it's not Y2K. The chrome gradient is as essential to Y2K as the glass blur is to glassmorphism.
   ```css
   background: linear-gradient(180deg, #E8E8E8 0%, #B0B0B0 20%, #F0F0F0 40%, #A0A0A0 60%, #D0D0D0 80%, #888888 100%);
   ```

2. **Bubble/blob shapes and glossy, bulging UI elements.** Y2K loved soft, inflated, organic shapes — bubble fonts, glossy orbs, rounded-rectangle "aqua" buttons with glass-like highlights, blob-shaped containers. Elements should look PUFFY and GLOSSY, as if they're made of shiny plastic or liquid. Round everything generously (16px-50px radius). Add glossy highlight reflections (a white-to-transparent gradient at the top of elements simulating a glassy sheen).

3. **A specific Y2K color palette: silver, iridescent pastels, electric blue, hot pink.** Y2K has a distinctive color signature that mixes metallic silvers with candy-bright colors:
   - Silver/chrome (#C0C0C0, #E8E8E8)
   - Electric/baby blue (#00BFFF, #87CEEB, #ADD8E6)
   - Hot pink/fuchsia (#FF69B4, #FF1493)
   - Lavender/lilac (#DDA0DD, #E6E6FA)
   - Lime green (#00FF00, #7FFF00 — used sparingly)
   - Iridescent pastels (rainbow sheen on metallic surfaces)
   The palette feels like a mix of a CD-ROM, a Nokia phone UI, and a Y2K pop star's album cover.

### Quick self-test

Can you see chrome/metallic reflections on surfaces or text? Are there glossy, bubble-like elements with visible highlight reflections? Does the color palette scream "2001 pop culture" — silver, baby blue, hot pink? Would this design feel at home on a Destiny's Child album website? If yes, it's Y2K Revival.

## Identity

- **Origin**: The Y2K aesthetic emerged from 1997-2003, rooted in techno-optimism about the new millennium. Defined by iMac's translucent design, Mac OS X Aqua interface, Britney/NSYNC-era pop culture, The Matrix's digital rain, Chrome/silver everything, and early CGI. The "Revival" began around 2020-2022, driven by nostalgia cycles and Gen-Z's fascination with pre-smartphone internet culture.
- **Mood**: Nostalgic, metallic, bubbly, playful, optimistic, glossy, digital, pop
- **Best for**: Fashion brands, pop culture, social media, youth brands, music/events, beauty/cosmetics, streetwear, nostalgic products, gaming, creative portfolios
- **Avoid for**: Enterprise, healthcare, government, finance, anything that needs to feel grounded/serious, accessibility-focused products (chrome effects can be hard to read)

## Typography

### Philosophy
Y2K typography is GLOSSY and EXPRESSIVE. Headings are treated as graphic elements — chromed, outlined, bubbly, or rendered with 3D effects. Body text is clean and modern as a baseline.

### Font Characteristics
- **Primary (headings)**: Rounded, bubbly, or techno-geometric display fonts:
  - Bubbly: Bungee, Fredoka, Baloo, Quicksand (ExtraBold)
  - Techno: Orbitron, Exo 2, Audiowide, Rajdhani
  - Clean geometric: Outfit (Bold), Sora (Bold), DM Sans (Bold)
- **Body**: Clean, readable sans-serif:
  - Families to consider: Inter, DM Sans, Poppins, system-ui
- **Treatment**: Headings get the CHROME treatment — metallic gradient fill, gloss highlights, or 3D extrusion effects

### Scale & Weight
- Headings: Bold to Extra-Bold (700-800) at 40px-80px
- Body: Regular (400) at 14px-16px
- Letter-spacing: Slightly wide on headings (+0.02em to +0.05em)
- ALL CAPS is common for display headings
- Chrome gradient text is the signature typographic treatment

## Color

### Philosophy
Y2K color is a collision of METALLIC and CANDY. Chrome/silver provides the tech-futuristic base, while hot pink, electric blue, and iridescent pastels add the pop-culture energy. The palette should feel like it was sampled from a CD-ROM surface.

### Palette Construction
- **Base**: Silver/chrome (#D4D4D8, #E4E4E7) or near-white with metallic tint
- **Alternatively**: Near-black (#111111, #1A1A2E) for a darker Y2K variant (The Matrix side)
- **Primary accent**: Electric/baby blue (#00BFFF, #3B9AFF, #7DD3FC)
- **Secondary accent**: Hot pink/fuchsia (#FF69B4, #FF1493, #EC4899)
- **Tertiary**: Lavender (#DDA0DD, #C084FC), lime (#84CC16), silver
- **Chrome gradient**:
  ```css
  linear-gradient(180deg, #F5F5F5, #B8B8B8, #E8E8E8, #9E9E9E, #D4D4D4, #808080)
  ```
- **Iridescent gradient** (rainbow sheen):
  ```css
  linear-gradient(135deg, #FF9AA2, #FFB7B2, #FFDAC1, #E2F0CB, #B5EAD7, #C7CEEA, #DDA0DD)
  ```

### Color Application
- **Chrome text/logos**: Metallic gradient fill via background-clip
- **Buttons**: Glossy fills (gradient with white highlight band at top)
- **Cards**: White or very light with glossy sheen
- **Accent elements**: Hot pink and electric blue for interactive elements
- **Backgrounds**: Silver gradient, or dark with colored accents/orbs

### Glossy Highlight Effect (Critical)
The "aqua" highlight that makes elements look like shiny bubbles:
```css
/* Applied as a pseudo-element or gradient overlay */
background: linear-gradient(
  to bottom,
  rgba(255,255,255,0.6) 0%,
  rgba(255,255,255,0.1) 50%,
  transparent 50%,
  transparent 100%
);
```

## Spacing & Layout

### Grid System
- Standard modern grid underneath, but decorated with Y2K visual elements
- Content can be framed by chrome/metallic borders or bubble-shaped containers
- Full-bleed hero sections with chrome or gradient backgrounds

### Spacing Philosophy
- **Moderate — not as generous as minimalism, not as tight as enterprise**
- Card padding: 24px-32px
- Section padding: 60px-100px
- Between cards: 20px-28px
- Elements can overlap slightly for a "stacked" CD-case feel

### Composition
- **Centered, hero-driven**: Big glossy hero section with chrome heading
- **Floating elements**: Decorative orbs, stars, bubbles placed around content
- **Symmetrical**: Y2K loved balanced, centered compositions
- **Framed content**: Chrome or gradient borders framing content blocks

## Borders & Shadows

### Philosophy
Y2K uses GLOSSY effects, metallic borders, and soft glows instead of standard shadows. Everything should look like it was rendered in 3D or made of polished plastic.

### Implementation
- **Borders**: Chrome/metallic gradient borders:
  ```css
  border: 2px solid;
  border-image: linear-gradient(180deg, #F0F0F0, #808080) 1;
  /* Or use the gradient border technique with background */
  ```
- **Shadows**: Soft colored glows (like neon lights hitting chrome):
  - `box-shadow: 0 0 20px rgba(0, 191, 255, 0.3), 0 0 40px rgba(0, 191, 255, 0.1);`
  - Or soft standard: `0 8px 24px rgba(0, 0, 0, 0.15)`
- **Border radius**: GENEROUS — 16px-24px for cards, pill shape for buttons, circles for decorative elements
- **Gloss overlay**: The white-to-transparent gradient simulating a glass sheen on the top half of elements
- **No hard/offset shadows** — everything is soft, glossy, reflective

## Components

### Buttons
- **Glossy aqua-style**: Rounded (pill or 12px+), colored fill with glass highlight on top half
  ```css
  background: linear-gradient(to bottom, #4FC3F7, #0288D1);
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.4); /* top gloss */
  border-radius: 999px; /* pill */
  ```
- Secondary: Chrome/silver fill with metallic gradient
- Hover: Glow intensifies, brightness increases
- Text: White or dark, semi-bold (600)

### Cards
- White or very light fill, generous radius (16px-24px)
- Optional: glossy highlight overlay on top portion
- Soft shadow or colored glow
- Chrome-gradient border (optional)
- Content: clean layout inside the glossy shell

### Navigation
- Chrome/metallic navbar or transparent on gradient hero
- Rounded tab-style navigation items
- Active: highlighted with accent color glow
- Logo: chrome-treated text or glossy orb

### Decorative Elements (ESSENTIAL)
Y2K isn't Y2K without decorative chrome objects:
- **Chrome orbs/spheres**: Shiny metallic balls reflecting an environment (CSS radial gradients)
- **Stars and sparkles**: Small star shapes scattered decoratively
- **Bubble shapes**: Translucent, glossy blobs
- **CD/disc shapes**: Circular elements with iridescent/rainbow gradient
- **Grid/wireframe shapes**: 3D wireframe globes, grids, or geometric shapes

### Chrome Orb (Signature Decorative Element)
```css
.chrome-orb {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: radial-gradient(circle at 30% 30%,
    #FFFFFF 0%,
    #E0E0E0 20%,
    #A0A0A0 40%,
    #606060 60%,
    #404040 80%,
    #808080 100%
  );
  box-shadow: 0 4px 16px rgba(0,0,0,0.2);
}
```

## Motion

### Philosophy
Animation in Y2K is **glossy, smooth, and slightly over-the-top**. Things SHIMMER, ROTATE, and FLOAT. The movement should feel like a Windows XP screensaver or a Flash intro.

### Implementation
- **Shimmer**: Chrome/metallic elements have a slowly moving highlight (gradient position animation)
- **Floating**: Decorative orbs gently float up and down (translateY oscillation over 3-5s)
- **Rotation**: Decorative elements slowly spin (chrome orbs, star shapes)
- **Hover**: Glow increases, element lifts slightly, brightness pulse
- **Iridescent shift**: Colors slowly shift through the rainbow on iridescent elements
- **Transitions**: 200-350ms, ease-out. Smooth and polished.
- **Sparkle**: Occasional sparkle/glint effect on chrome surfaces (a brief white flash)

## Dark Mode & Light Mode

Y2K Revival works in **both modes**, but each creates a distinctly different Y2K sub-mood.

### Light Mode (Bubbly Y2K — Default)
The more common Y2K variant — pop-star album covers, iMac ads, Aqua interface:
- Background: Silver/lavender gradient (#E8E8F0 → #D0D0E0) or near-white
- Cards: White or white at 90% opacity with glossy highlights
- Chrome elements: Full metallic gradient (light → dark → light)
- Text: Dark navy (#1A1A2E) or near-black
- Accents: Baby blue, hot pink, lavender at full saturation
- The glossy highlight effects (white-to-transparent gradient overlay) are most visible in light mode

### Dark Mode (Matrix Y2K)
The darker, more tech-oriented side — The Matrix, early 2000s hacker culture:
- Background: Near-black (#111111, #0A0A1A) or deep navy (#1A1A2E)
- Cards: Dark glass (rgba white at 5-10%) with chrome-gradient borders
- Chrome elements: Same metallic gradient, but reads as more dramatic on dark backgrounds
- Text: White or silver (#D4D4D8)
- Accents: Neon blue (#00BFFF), hot pink (#FF1493) — brighter versions that glow against dark
- Add subtle glow effects (box-shadow with accent color) — the dark background lets them shine
- Iridescent elements become more dramatic and rainbow-like

### CSS Custom Properties
```css
:root {
  --y2k-bg: #E8E8F0;
  --y2k-surface: rgba(255, 255, 255, 0.9);
  --y2k-text: #1A1A2E;
  --y2k-chrome-light: #F0F0F0;
  --y2k-chrome-mid: #B0B0B0;
  --y2k-chrome-dark: #808080;
  --y2k-blue: #0EA5E9;
  --y2k-pink: #EC4899;
  --y2k-lavender: #DDA0DD;
}
@media (prefers-color-scheme: dark) {
  :root {
    --y2k-bg: #0A0A1A;
    --y2k-surface: rgba(255, 255, 255, 0.05);
    --y2k-text: #E4E4E7;
    --y2k-blue: #00BFFF;
    --y2k-pink: #FF69B4;
  }
}
```

## Responsive & Mobile

### Typography Scaling
- Chrome headings: Desktop 56-80px → Tablet 40-56px → Mobile 32-44px
- Body: 14-16px across breakpoints
- ALL CAPS letter-spacing: Reduce slightly on mobile (+0.03em → +0.02em)

### Spacing Adaptation
- Section padding: Desktop 80-100px → Tablet 60px → Mobile 40px
- Card padding: Desktop 24-32px → Mobile 16-20px
- Card grids: 3-col → 2-col → 1-col

### Layout Behavior
- Chrome orbs and decorative elements: Reduce COUNT on mobile (4 orbs → 2), reduce size
- Iridescent backgrounds: Use simpler gradients on mobile (3 stops instead of 7)
- Glossy card overlays (::before with glass highlight): Keep — lightweight CSS, works on all devices
- Centered, hero-driven layout adapts naturally to mobile

### Touch Targets
- Glossy pill buttons: Already generous (pill shape, 12px+ padding) — naturally touch-friendly
- Chrome orbs that are clickable: Ensure 44px minimum diameter

### Performance
- **Chrome gradients** (multi-stop linear gradients): Lightweight — no concern
- **Radial gradients for chrome orbs**: Minimal impact
- **Iridescent gradient animation** (background-position shifting): Safe at 8s+ cycle times
- **Glossy card ::before overlay**: Simple gradient pseudo-element — negligible impact
- **Multiple box-shadows** (inset gloss + outer glow): Moderate — simplify to 1-2 layers on mobile if many cards
- Y2K is generally PERFORMANCE-FRIENDLY — its effects are CSS gradients, not blur or backdrop-filter

## Content & Voice

### Headline Tone
Playful, bubbly, and optimistic — the voice of pop culture at the millennium:
- "SO Fresh", "Totally Connected", "Digital Dreams"
- "Welcome to the Future", "Ready. Set. Go."
- Can use playful formatting: asterisks (*sparkle*), tildes (~vibes~)
- ALL CAPS for impact, mixed case for playfulness

### Body Copy
Casual, upbeat, and youth-oriented:
- Short, punchy sentences
- Exclamation marks are welcome (unlike most styles)
- Pop-culture references and optimistic tech language
- "Connect with friends!", "Discover what's new!", "Your digital playground"

### CTAs
Energetic and action-oriented:
- "Let's Go!", "Enter", "Join Now", "Get In"
- Can be playful: "Click Me!", "Take Me There"
- Short — one to three words
- The glossy button design does the heavy lifting; the text can be simple

### Microcopy
Fun and lighthearted:
- Error: "Oops! Something went wrong. Try again?"
- Empty state: "Nothing here yet! Start exploring."
- Loading: "Loading..." with an animated chrome spinner or progress bar

### Content Density
MODERATE — Y2K interfaces weren't sparse, but they weren't information-dense either. The decorative elements (chrome orbs, glossy surfaces, iridescent backgrounds) take up visual space, leaving moderate room for content.

## Icons & Illustrations

### Icon Style
Glossy, rounded, and 3D-rendered — matching the bubbly Y2K aesthetic:
- Icons should look like miniature glossy objects — rounded, with gradient fill and highlight
- 3D rendered icons are ideal (think: macOS Aqua-era icons, early iOS)
- If using flat icon sets: Choose the FILLED variant and add a glossy gradient overlay
- Rounded icon shapes: circles, rounded squares, pill shapes

### Recommended Approach
- Custom icons with gradient fills and glossy highlights
- If using sets: Phosphor Icons (fill weight) — apply glossy treatment via CSS
- 3D rendered icon packs or emoji-style icons
- Avoid: Thin line icons (too minimal), sharp geometric icons (too angular)

### Illustrations & Photography
- Photography: Bright, saturated, pop-culture energy. Think: product shots on chrome backgrounds, people in futuristic outfits
- Color treatment: High saturation, slight blur/glow, pink/blue tint
- 3D renders: Chrome spheres, metallic objects, iridescent surfaces — VERY Y2K
- CD-ROM / disc imagery: Circular rainbow-gradient elements referencing disc iridescence

### Decorative Elements (Essential)
- Chrome orbs (radial gradient spheres)
- Star sparkles (4-pointed star shapes in white/silver)
- Bubble shapes (translucent circles with glossy highlights)
- Iridescent disc shapes (rainbow gradients in circles)
- These decorations are ESSENTIAL — they create the Y2K atmosphere

## Accessibility

### Contrast
- **Chrome gradient text**: The metallic gradient ranges from very light (#F5F5F5) to medium (#808080). On light backgrounds, the lightest parts FAIL contrast. Solutions:
  - Use chrome text only on dark backgrounds where even the lightest chrome color meets 4.5:1
  - Add a dark text-shadow behind chrome text for safety: `filter: drop-shadow(0 2px 2px rgba(0,0,0,0.3))`
  - Provide a solid-color fallback for the `color` property
- **Hot pink (#EC4899) on white**: ~3.5:1 — FAILS for small text. Darken to #DB2777 (4.6:1) for body text.
- **Baby blue (#7DD3FC) on white**: ~2.5:1 — FAILS. Use only on dark backgrounds or as decoration, not text.
- **Dark mode**: Silver/white text on dark backgrounds — generally excellent contrast.

### Focus States
Glossy, matching the bubbly aesthetic:
```css
:focus-visible {
  outline: 2px solid var(--y2k-blue, #0EA5E9);
  outline-offset: 3px;
  box-shadow: 0 0 12px rgba(14, 165, 233, 0.4);
  border-radius: inherit;
}
```
The glow focus ring harmonizes with Y2K's glowing, glossy aesthetic.

### Motion
- `prefers-reduced-motion`: Disable iridescent gradient shifts, floating chrome orbs, sparkle animations, shimmer effects
- Keep: Static chrome gradients, glossy highlights (::before overlay), static iridescent backgrounds
- The style remains fully recognizable without animation — chrome, gloss, and color palette carry the identity

### Known Risks
- **Chrome gradient text readability**: The multi-stop metallic gradient creates variable contrast across the text — some characters may be hard to read. Always add a drop-shadow and test at the gradient's lightest point.
- **Glossy card overlay** (::before with white gradient): Reduces contrast of content beneath it by adding a white layer. Ensure the overlay is limited to the top 50% and doesn't cover text.
- **Candy-bright colors on white**: Baby blue, lavender, and light pink are all LOW contrast on white. Reserve these for decorative elements, not text.
- **Chrome orbs and decorative sparkles**: All decorative — mark as `aria-hidden="true"`.
- **Iridescent animations**: Slowly shifting colors can be disorienting for some users. Respect `prefers-reduced-motion`.

## Do's and Don'ts

### Do
- Use chrome/metallic gradients on text, logos, or decorative elements
- Add glossy highlight overlays to create the "shiny plastic" look
- Include decorative chrome orbs, stars, and bubble shapes
- Use the Y2K color palette: silver, baby blue, hot pink, lavender
- Make buttons look like glossy aqua bubbles
- Add shimmer/glow animations for extra Y2K energy
- Generous border-radius on everything (16px+ or pill)

### Don't
- Use matte, flat surfaces — because Y2K's entire visual language is built on SHINE; the glossy highlight, the chrome reflection, the iridescent sheen all simulate the physical materials (CDs, translucent plastic, polished metal) that defined the era's product design
- Skip the metallic/chrome element — because chrome is THE defining visual signature of Y2K; without it, the design reads as "glossy modern" not Y2K Revival, and loses its era-specific identity
- Use dark, moody colors without metallic contrast (that's Dark Mode, not Y2K)
- Over-complicate the layout — Y2K decoration goes ON a clean structure
- Use sharp corners (0px radius) — Y2K is rounded, bubbly, organic
- Make text unreadable over chrome/metallic backgrounds — because the multi-stop gradients create variable contrast that can make some letters invisible; always add a drop-shadow safety net
- Forget the decorative elements — chrome orbs and sparkles make it Y2K, not just "shiny"

## Implementation Hints (Tailwind + CSS)

```css
/* Chrome text */
.chrome-text {
  background: linear-gradient(180deg, #F5F5F5 0%, #B0B0B0 25%, #E8E8E8 50%, #909090 75%, #C8C8C8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0 2px 2px rgba(0,0,0,0.3));
}

/* Glossy button */
.y2k-button {
  background: linear-gradient(to bottom, #7DD3FC 0%, #0EA5E9 50%, #0284C7 100%);
  border-radius: 999px;
  padding: 12px 32px;
  color: white;
  font-weight: 600;
  border: 1px solid rgba(255,255,255,0.3);
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,0.5),
    0 4px 12px rgba(14, 165, 233, 0.4);
}

/* Iridescent background */
.y2k-iridescent {
  background: linear-gradient(135deg, #FF9AA2, #FFB7B2, #FFDAC1, #E2F0CB, #B5EAD7, #C7CEEA, #DDA0DD);
  background-size: 300% 300%;
  animation: iridescent-shift 8s ease infinite;
}
@keyframes iridescent-shift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

/* Chrome orb */
.y2k-orb {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: radial-gradient(circle at 30% 30%, #FFF 0%, #D4D4D4 30%, #888 60%, #444 80%, #777 100%);
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
}

/* Glossy card */
.y2k-card {
  background: rgba(255,255,255,0.9);
  border-radius: 20px;
  border: 1px solid rgba(255,255,255,0.6);
  box-shadow: 0 8px 24px rgba(0,0,0,0.1);
  position: relative;
  overflow: hidden;
}
.y2k-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 50%;
  background: linear-gradient(to bottom, rgba(255,255,255,0.5), transparent);
  pointer-events: none;
}
```

```
/* Tailwind classes */
/* Background */
bg-gradient-to-br from-[#E8E8F0] via-[#D0D0E0] to-[#F0F0F8]

/* Chrome heading (use inline style for complex gradient) */
text-6xl font-extrabold uppercase tracking-wider

/* Glossy button */
bg-gradient-to-b from-[#7DD3FC] via-[#0EA5E9] to-[#0284C7] text-white rounded-full px-8 py-3 font-semibold shadow-[inset_0_1px_0_rgba(255,255,255,0.5),0_4px_12px_rgba(14,165,233,0.4)] border border-white/30

/* Pink accent button */
bg-gradient-to-b from-[#F9A8D4] via-[#EC4899] to-[#DB2777] text-white rounded-full px-8 py-3

/* Glossy card */
bg-white/90 rounded-2xl border border-white/60 shadow-[0_8px_24px_rgba(0,0,0,0.1)] p-6

/* Font stack */
font-display: 'Bungee', 'Fredoka', 'Outfit', sans-serif
font-body: 'Inter', 'DM Sans', 'Poppins', sans-serif

/* Color tokens */
--color-chrome-light: #F0F0F0
--color-chrome-mid: #B0B0B0
--color-chrome-dark: #808080
--color-baby-blue: #7DD3FC
--color-electric-blue: #0EA5E9
--color-hot-pink: #EC4899
--color-lavender: #DDA0DD
--color-iridescent-start: #FF9AA2
--color-bg: #E8E8F0
--color-text: #1A1A2E
```

## Reference Touchstones

When building in this style, channel the spirit of:
- Mac OS X Aqua interface (2001) — the original glossy UI
- Apple's original iMac G3 (translucent colored plastic)
- The Matrix trilogy's visual identity
- Destiny's Child, NSYNC, Britney Spears-era album art and websites
- Early 2000s Nokia phone UIs
- Windows XP's glossy interface elements
- Hajime Sorayama's chrome robot illustrations
- Y2K fashion: Balenciaga's archive collections, Mugler
- CD-ROM surface iridescence
- Chrome WordArt from Microsoft Office 2000
