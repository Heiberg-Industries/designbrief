# Corporate Modern

> Trust through clarity — professional design that doesn't feel corporate.

## Non-Negotiables

**If you skip any of these three, it is not Corporate Modern.** These balance professionalism with contemporary polish — without them, the result is either "boring enterprise" or "too casual for business":

1. **A calm, trustworthy color palette dominated by blues and neutrals.** Corporate Modern's palette is built on confidence and trust. The primary color is almost always a blue (from navy to bright blue) — the most universally trustworthy color. Backgrounds are clean white or very light gray. Accent colors are restrained and professional (a secondary blue, teal, or warm neutral). If your page uses vivid pinks, limes, or neon colors, it's not Corporate Modern. The palette should make a CFO feel comfortable.

2. **Consistent, systematic component design with moderate corner rounding.** Every button, card, input, and badge uses the same design language: consistent padding, consistent 8px-12px border-radius, consistent shadow depth, consistent font weights. Nothing is "special" or "hand-crafted" — the system IS the design. The border-radius is the key signal: 8px-12px (modern, approachable, but not bubbly). Not 0px (too harsh/brutalist), not 24px+ (too playful).

3. **Clean information hierarchy with generous whitespace and clear sections.** Content is organized into clearly delineated sections with generous padding (80px-120px between sections). Typography has a clear 3-4 level hierarchy. Features, pricing, and content blocks use consistent card or grid layouts. The page should feel ORGANIZED — a viewer should instantly understand the information architecture. Dense, cluttered layouts break the Corporate Modern feel.

### Quick self-test

Would a B2B SaaS company put their logo on this page? Does the color palette feel "trustworthy" and "professional"? Is the border-radius consistent (8-12px) everywhere? Is the page organized into clear sections with generous whitespace? If yes, it's Corporate Modern.

## Identity

- **Origin**: Evolved from early 2010s corporate web design through influence from successful SaaS companies (Stripe, Slack, Notion, Linear). Represents the "grown-up" version of tech design — professional enough for enterprise, modern enough to not feel dated.
- **Mood**: Professional, trustworthy, clean, systematic, contemporary, confident, approachable
- **Best for**: Enterprise SaaS, B2B products, consulting firms, financial services, legal tech, healthcare platforms, HR tools, agency websites, corporate marketing
- **Avoid for**: Children's products, gaming, nightlife/entertainment, street fashion, anything that needs to feel rebellious, artistic, or counter-culture

## Typography

### Philosophy
Typography in Corporate Modern is **invisible in the best way** — it's so clean and well-organized that readers focus on the content, not the type. Professional, readable, and systematically applied.

### Font Characteristics
- **Primary (headings)**: Clean, modern sans-serifs with good weight range. Semi-bold to Bold (600-700) for headings. Professional without being boring.
  - Families to consider: Inter, Plus Jakarta Sans, DM Sans, Outfit, Source Sans 3, Lato, Nunito Sans
- **Secondary (body)**: Same family at regular weight (400). High legibility at 14px-16px.
- **ONE font family** for the entire site — consistency is king in Corporate Modern

### Scale & Weight
- Clear, systematic scale: Display (48px-56px), H1 (36px-40px), H2 (28px-32px), H3 (20px-24px), Body (16px), Small (14px), Caption (12px)
- Headings: Semi-bold (600) to Bold (700). Not Extra-bold (too heavy for professional settings).
- Body: Regular (400). Occasionally Medium (500) for emphasis.
- Line-height: 1.5-1.6 for body, 1.2-1.3 for headings
- ALL CAPS: Only for small labels, badges, and overline text. NEVER for headings.

## Color

### Philosophy
Color communicates trust, competence, and calm. The palette is PROFESSIONAL — dominated by blues and neutrals, with carefully chosen secondary colors that support rather than distract.

### Palette Construction
- **Primary**: A confident blue. The exact shade varies by personality:
  - Corporate/trustworthy: #1E40AF, #1D4ED8 (deep blue)
  - Modern/friendly: #3B82F6, #2563EB (bright blue)
  - Bold/tech: #4F46E5, #6366F1 (indigo/violet-blue)
- **Background**: White (#FFFFFF) for main content, very light gray (#F9FAFB, #F3F4F6) for alternating sections
- **Surface/cards**: White (#FFFFFF) with subtle shadow on gray sections
- **Text**: Near-black (#111827, #1F2937) for primary, gray (#6B7280, #9CA3AF) for secondary
- **Secondary accent**: One supporting color, used sparingly:
  - Teal: #0D9488, #14B8A6
  - Green (success/growth): #059669, #10B981
  - Warm: #F59E0B (sparingly, for attention)
- **Semantic colors**: Green for success, red (#DC2626) for error, amber (#F59E0B) for warning, blue for info

### Color Application
- **Hero section**: White or very light background, dark text. No colored hero backgrounds.
- **App bar/navbar**: White with subtle bottom border/shadow
- **Primary buttons**: Primary blue fill, white text
- **Secondary buttons**: Outlined or ghost (primary color text, no fill)
- **Cards**: White on gray sections, or with subtle border on white sections
- **Feature sections**: Alternate between white and light gray backgrounds

## Spacing & Layout

### Grid System
- 12-column grid, max-width 1200-1280px
- Consistent gutters (24px-32px)
- Content is centered with comfortable margins

### Spacing Philosophy
- **Generous and systematic** — based on an 8px grid
- Section padding: 80px-120px vertical (generous, but not minimalism-level)
- Card padding: 24px-32px
- Between cards in a grid: 24px-32px
- Element spacing: 8, 12, 16, 24, 32, 48, 64 (systematic scale)
- Whitespace communicates professionalism — never feel crowded

### Composition
- **Section-based pages**: Hero → Features → Social Proof → Pricing → CTA → Footer
- **3-4 column grids** for features and pricing
- **Alternating sections**: White and light gray backgrounds create rhythm
- **Centered CTAs**: Call-to-action blocks centered with generous spacing above/below
- **Social proof**: Logo bars, testimonial cards, or metric highlights

## Borders & Shadows

### Philosophy
Subtle depth through soft shadows and light borders. Nothing dramatic — the depth should be felt, not seen.

### Implementation
- **Shadows**: Soft, multi-layered shadows for cards and elevated elements:
  - Cards: `0 1px 3px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.06)`
  - Elevated (hover): `0 10px 15px rgba(0,0,0,0.1), 0 4px 6px rgba(0,0,0,0.05)`
  - Modal: `0 20px 25px rgba(0,0,0,0.15), 0 8px 10px rgba(0,0,0,0.05)`
- **Borders**: 1px light gray (#E5E7EB, #D1D5DB) for inputs, cards on white backgrounds, and dividers
- **Border radius**: 8px-12px. This is the signature. Consistent across ALL components.
  - Buttons: 8px
  - Cards: 12px
  - Inputs: 8px
  - Badges: 6px or full-round (pill)
  - Modals: 12px-16px
- **Dividers**: 1px gray, used between sections or list items

## Components

### Buttons
- Primary: Blue fill, white text, 8px radius, medium weight (500-600)
  - Padding: 12px 24px (comfortable, not cramped)
  - Hover: Slightly darker blue
- Secondary: White fill, blue text, 1px blue border, 8px radius
  - Hover: Light blue tinted background
- Ghost: No border, blue text
  - Hover: Very light blue background
- Destructive: Red fill for dangerous actions
- All buttons: consistent height (40px-44px), consistent text size (14px-15px)

### Cards
- White fill, 12px radius, soft shadow on gray sections OR 1px border on white sections
- Internal padding: 24px-32px
- Consistent heading/body/action structure
- Hover: shadow deepens slightly (optional)

### Navigation
- White top nav with subtle bottom shadow or 1px border
- Logo left, links center or right, CTA button right
- Clean text links in dark gray, active in primary blue
- Sticky on scroll is standard
- Mobile: hamburger menu with clean slide-out

### Inputs & Forms
- 1px gray border, white fill, 8px radius
- Focus: border turns primary blue, optional subtle blue ring
- Labels: above input, medium weight (500), dark text
- Error state: red border, red helper text
- Consistent padding (12px 16px internal)

### Feature Sections
- 3-column grid of feature cards, each with icon + heading + description
- Icons: Simple, line-style, in primary color
- Cards or simple stacks (icon above heading above text)

### Social Proof
- Logo bar: grayscale customer logos in a horizontal row
- Testimonials: card-based with quote, avatar, name, title
- Metrics: large numbers with short labels ("99.9% uptime", "10K+ users")

## Motion

### Philosophy
Animation is **polished but invisible** — it makes the UI feel responsive and modern without drawing attention to itself.

### Implementation
- **Transitions**: 150-250ms, ease-out. Standard for all state changes.
- **Hover**: Subtle shadow increase on cards, color darken on buttons. 150ms.
- **Entrances**: Optional fade-in-on-scroll (subtle, 300ms, translateY 10px → 0). Don't overdo it.
- **Loading**: Clean progress bars or spinners in primary color
- **Micro-interactions**: Button press (slight scale 0.98), smooth toggle switches, input focus transitions
- **Avoid**: Bouncy springs, dramatic entrances, parallax, anything that feels "fun" over "professional"

## Dark Mode & Light Mode

### Philosophy
Light-first. Corporate Modern is overwhelmingly light mode — white backgrounds signal professionalism and openness. Dark mode is supported but secondary.

### Light Mode (Default)
- White (#FFFFFF) backgrounds for main content, very light gray (#F9FAFB, #F3F4F6) for alternating sections
- Near-black text (#111827, #1F2937) for primary, gray (#6B7280) for secondary
- This is the canonical Corporate Modern look

### Dark Mode
- **Base background**: Cool dark gray — #111827 (gray-900) or #1F2937 (gray-800)
- **Card surfaces**: #1F2937 or #374151 (gray-700) — one step lighter than the base
- **Borders**: Gray-700 (#374151) — borders become more important in dark mode to define edges that shadows can't
- **Text**: White (#FFFFFF) for primary, gray-300 (#D1D5DB) for secondary
- **Primary accent**: Slightly brightened blue — #3B82F6 (blue-500) or #60A5FA (blue-400) to maintain vibrancy against dark backgrounds
- **Alternating sections**: Use slightly lighter dark grays (#1F2937 vs #111827) instead of white/gray-50
- The blue-dominant palette works beautifully in dark mode — blue is one of the best accent colors against dark backgrounds

## Responsive & Mobile

### Breakpoint Behavior
- **12-column grid collapses**: 3-col features → 2-col (tablet) → 1-col (mobile)
- **Typography scales**: Display 48-56px → 32-36px on mobile. Headings scale proportionally.
- **Section padding**: 80-120px vertical → 48-64px on mobile
- **Card padding**: 24-32px → 16-20px on mobile

### Mobile Navigation
- Sticky white navbar with hamburger menu icon
- Clean slide-out panel (full-width or 80% width from right)
- Same white background, same clean typography
- Touch-friendly tap targets throughout

### Mobile-Specific Adjustments
- Touch targets already comfortable at 40-44px button heights
- Cards stack in a single column with consistent vertical spacing
- Logo bar wraps to 2 rows or becomes a horizontally scrollable strip
- Pricing cards stack vertically with the "popular" card positioned on top
- This style is inherently responsive-friendly — the systematic grid and generous spacing translate naturally to smaller screens

## Content & Voice

### Tone
Professional, clear, benefit-oriented. Think Stripe or Intercom's copywriting — authoritative without being stiff, warm without being casual.

### Headlines
- Benefit-driven, not feature-driven: "Ship faster with confidence", "Built for teams that scale"
- Clear and direct — the reader should instantly understand the value proposition
- Sentence case, not Title Case for most headlines

### Body Copy
- Clear, avoids jargon, speaks to business outcomes
- Short paragraphs (2-3 sentences max in marketing sections)
- Active voice preferred

### CTAs
- Professional action verbs: "Get started", "Request demo", "Start free trial", "Talk to sales"
- Never aggressive or pushy: avoid "Buy NOW!", "Don't miss out!!"

### Microcopy & UI Text
- Error messages: factual and helpful ("Payment failed — please check your card details")
- Empty states: warm but professional ("No projects yet. Create your first project to get started.")
- No slang, no exclamation marks, no emoji
- Confirmations are clear and specific

### Social Proof Copy
- Specific numbers and outcomes: "99.9% uptime", "Trusted by 10,000+ teams", "4.8/5 on G2"
- Named customer quotes with real titles and companies

## Icons & Illustrations

### Icons
- **Style**: Simple, line-style at 1.5px stroke weight
- **Color**: Primary blue or gray-400 — never multicolor
- **Size**: Consistent 20-24px throughout the interface
- **Libraries**: Heroicons (outline variant) or Lucide are perfect fits for Corporate Modern
- **Usage**: Primarily in feature sections, navigation, and form inputs. Used to support text, never as standalone communication.

### Illustrations
- Clean, geometric, semi-flat style with muted colors from the brand palette
- Think Stripe's illustration style — abstract, professional, slightly technical
- No 3D renders, no hand-drawn/sketchy styles, no cartoon characters
- Used sparingly — in hero sections, empty states, or feature explanations

### Photography
- Professional, bright, well-lit images
- Diverse team photos in modern office settings
- Product screenshots presented with browser chrome or device frames
- Clean and corporate but not generic stock-photo energy — authenticity matters

## Accessibility

### Inherent Strengths
Corporate Modern is naturally accessibility-friendly — clean hierarchy, blue on white (strong contrast), systematic spacing, and consistent component patterns all contribute to an accessible baseline. The systematic approach naturally produces accessible UIs.

### Known Risks
- **Light gray secondary text**: #6B7280 (gray-500) on white backgrounds yields approximately 4.6:1 contrast — borderline for WCAG AA on small text. **Use #4B5563 (gray-600) for body-sized secondary text** to ensure compliance.
- **Blue on light gray**: Primary blue on gray-50 backgrounds — verify contrast if using lighter blue shades.

### Focus States
- Blue outline ring matching the primary color: `ring-2 ring-blue-600 ring-offset-2`
- Visible and consistent across all interactive elements
- Never remove focus indicators — they are essential for keyboard navigation

### Motion Sensitivity
- Respect `prefers-reduced-motion`: disable fade-in-on-scroll entrance animations, reduce transitions to instant or near-instant
- Core functionality must never depend on animation

### Semantic Structure
- The section-based layout maps naturally to semantic HTML landmarks (`header`, `main`, `section`, `footer`)
- Clear heading hierarchy (h1 → h2 → h3) follows naturally from the typographic scale
- Card grids should use proper list markup when representing collections

## Do's and Don'ts

### Do
- Use a blue-dominant palette with neutral supporting colors — blue is the most universally trusted color and anchors the entire Corporate Modern identity
- Keep border-radius consistent (8-12px) across all components — inconsistent rounding is the fastest way to break the systematic feel
- Organize content into clear sections with generous whitespace — whitespace signals professionalism and makes content scannable
- Use systematic spacing based on an 8px grid — systematic spacing creates the subconscious sense of order that defines this style
- Include social proof elements (logos, testimonials, metrics) — B2B buyers need evidence, and social proof is the most efficient trust signal
- Make the page feel trustworthy and organized — Corporate Modern exists to convert business buyers, and trust is the prerequisite
- Test at multiple screen sizes — corporate sites reach decision-makers on every device, from desktop monitors to phones in taxis

### Don't
- Use vivid, playful colors (neon, hot pink, lime green) — they undermine the professional credibility that Corporate Modern is built on
- Use 0px border-radius (too brutalist) or 24px+ (too playful) — the 8-12px range is the signature; outside it, the style identity breaks
- Crowd content together — professional = spacious; dense layouts signal "enterprise legacy software" not "modern SaaS"
- Use decorative or display fonts — they draw attention to themselves, breaking the "invisible typography" principle
- Add unnecessary animation — every motion should be purposeful; gratuitous animation feels unserious to business buyers
- Use dark backgrounds for the main page — light backgrounds signal professionalism and openness; dark is reserved for dark mode, not the default
- Sacrifice readability for style — content is king in B2B; if a prospect can't quickly scan your value proposition, no amount of polish saves it

## Implementation Hints (Tailwind + CSS)

```css
/* Core Corporate Modern */
.corp-card {
  background: #ffffff;
  border-radius: 12px;
  padding: 32px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.06);
}

.corp-button {
  background: #2563EB;
  color: #ffffff;
  border-radius: 8px;
  padding: 12px 24px;
  font-weight: 500;
  font-size: 14px;
  transition: background 0.15s ease;
}
.corp-button:hover {
  background: #1D4ED8;
}
```

```
/* Tailwind classes */
/* Card */
bg-white rounded-xl p-6 shadow-[0_1px_3px_rgba(0,0,0,0.1),0_1px_2px_rgba(0,0,0,0.06)]

/* Card on white section (border instead of shadow) */
bg-white rounded-xl p-6 border border-gray-200

/* Primary button */
bg-blue-600 text-white rounded-lg px-6 py-3 text-sm font-medium hover:bg-blue-700 transition-colors duration-150

/* Secondary button */
border border-blue-600 text-blue-600 rounded-lg px-6 py-3 text-sm font-medium hover:bg-blue-50 transition-colors duration-150

/* Section (gray) */
bg-gray-50 py-24 lg:py-32

/* Section (white) */
bg-white py-24 lg:py-32

/* Navbar */
bg-white border-b border-gray-200 sticky top-0 z-50

/* Font stack */
font-primary: 'Inter', 'DM Sans', system-ui, sans-serif

/* Color tokens */
--color-primary: #2563EB
--color-primary-hover: #1D4ED8
--color-bg: #FFFFFF
--color-bg-alt: #F9FAFB
--color-text-primary: #111827
--color-text-secondary: #6B7280
--color-border: #E5E7EB
--color-success: #059669
--color-error: #DC2626
--color-warning: #F59E0B
```

## Reference Touchstones

When building in this style, channel the spirit of:
- Stripe's marketing and documentation pages
- Notion's marketing site
- Linear's public-facing pages (the non-dark parts)
- Slack's marketing site
- Vercel's product marketing
- Intercom's website
- Atlassian's design system (at its cleanest)
- Any successful B2B SaaS company's landing page from 2023-2025
