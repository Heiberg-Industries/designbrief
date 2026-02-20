# Style Name

> One-line tagline capturing the essence of this style.

## Non-Negotiables

**If you skip any of these three, it is not [Style Name].** These define the style — without them, the result is generic rather than recognizably [Style Name]:

1. **First non-negotiable.** Detailed explanation of why this is essential and what it looks like in practice.

2. **Second non-negotiable.** Detailed explanation with specific examples of correct and incorrect implementation.

3. **Third non-negotiable.** Detailed explanation including CSS/code examples where helpful.

### Quick self-test

[2-4 yes/no questions that validate whether a design meets this style's requirements.]

## Identity

- **Origin**: Historical roots, key practitioners, cultural context
- **Mood**: 5-8 mood keywords
- **Best for**: Industries, product types, contexts where this style excels
- **Avoid for**: Contexts where this style is inappropriate and why

## Typography

### Philosophy
[What role does typography play in this style?]

### Font Characteristics
- **Primary (headings)**: Font families, weight range, characteristics
- **Secondary (body)**: Font families, legibility considerations
- **Avoid**: Fonts that contradict the style

### Scale & Weight
- Heading sizes, weights, line-height
- Body sizes, weights, line-height
- Letter-spacing guidance
- Case preferences (ALL CAPS, sentence case, etc.)

## Color

### Philosophy
[What is the color theory behind this style?]

### Palette Construction
- **Background**: Hex values, descriptions
- **Primary accent**: Hex values, descriptions
- **Secondary accent**: Hex values, descriptions
- **Text**: Primary and secondary text colors
- **Surface/cards**: Card and container colors

### Color Application
[How and where to apply colors — backgrounds, accents, text, interactive elements]

## Spacing & Layout

### Grid System
[Grid philosophy, column count, max-width]

### Spacing Philosophy
[Generous vs. tight, mathematical vs. organic]
- Section padding ranges
- Element spacing ranges
- Card/container padding ranges

### Composition
[Layout patterns, asymmetry vs. symmetry, visual weight distribution]

## Borders & Shadows

### Philosophy
[How does this style handle edges and depth?]

### Implementation
- **Borders**: Width, color, style, when to use
- **Shadows**: Box-shadow values, shadow color, blur radius
- **Border radius**: Range for different element types
- **Dividers**: How sections are separated

## Components

### Buttons
[Shape, fill, border, radius, padding, hover/active states]

### Cards
[Background, radius, shadow, padding, border, content hierarchy]

### Navigation
[Position, background, link style, active state, mobile behavior]

### Inputs
[Background, border, focus state, radius, padding]

### [Style-specific components]
[Any components unique to this style — decorative elements, dividers, etc.]

## Motion

### Philosophy
[What is the animation personality of this style?]

### Implementation
- **Transitions**: Duration, easing, properties
- **Hover effects**: What changes on hover
- **Entrances**: How elements appear on scroll/load
- **Micro-interactions**: Small feedback animations
- **Avoid**: Animation types that contradict the style

## Dark Mode & Light Mode

### Mode Preference
[Is this style light-first, dark-first, or equally suited to both? Why?]

### Palette Adaptation
- **Background**: How the background changes (specific values, not "just invert")
- **Surfaces/cards**: How card and container colors adapt
- **Text**: Primary and secondary text colors in the alternate mode
- **Accents**: Whether accent colors shift or remain constant
- **Borders & shadows**: How these change (shadows are less visible in dark mode, borders become more important for definition)

### Implementation
```css
/* Dark/light mode CSS custom properties or Tailwind dark: classes */
```

### Guidance
[Which mode is recommended as primary? Any caveats or trade-offs when using the alternate mode?]

## Responsive & Mobile

### Breakpoint Strategy
[How should layouts adapt across breakpoints? What is the mobile-first vs. desktop-first approach for this style?]

### Typography Scaling
- **Headings**: How heading sizes compress on mobile (specific mobile sizes)
- **Body**: Whether body text size changes
- **Hierarchy**: Does the dramatic hierarchy compress or maintain proportions?

### Spacing Adaptation
- **Section padding**: Desktop → Tablet → Mobile ranges
- **Element spacing**: How gaps between elements compress
- **Container padding**: Card and container padding at mobile

### Layout Collapse
- **Grid strategy**: How multi-column grids collapse (e.g., 3-col → 2-col → 1-col)
- **Component stacking**: Order of stacked elements on mobile
- **Navigation**: Mobile navigation pattern (hamburger, bottom sheet, tab bar, etc.)

### Touch & Performance
- **Touch targets**: Minimum 44px for all interactive elements
- **Performance**: Any style-specific concerns (e.g., heavy blur effects, complex gradients) and how to simplify for mobile devices

## Content & Voice

### Headline Tone
[What kind of headlines suit this style? Punchy? Elegant? Minimal? Authoritative? Provide 2-3 example headlines.]

### Body Copy
[Writing style for body text — casual or formal? Long-form or concise? What reading level? What personality?]

### CTAs & Microcopy
- **Button labels**: Action-oriented or invitational? Examples of good CTA text for this style.
- **Error messages**: Tone and personality (friendly? matter-of-fact? playful?)
- **Empty states**: How to handle empty states in this style's voice
- **Tooltips & helpers**: Tone for instructional microcopy

### Content Density
[How much text is appropriate per section? What is the text-to-visual ratio? Does this style favor fewer words with more whitespace, or denser informational layouts?]

## Icons & Illustrations

### Icon Style
[Line, filled, duotone, 3D, hand-drawn? What weight? What size relationship to the style's border weights and typography?]

### Illustration Approach
[If applicable — flat, 3D, isometric, hand-drawn, photographic? What mood should illustrations convey?]

### Photography Direction
[If applicable — what kind of photography suits this style? Mood, color treatment, subject matter, cropping style.]

### Recommended Sources
[Specific icon sets, illustration packs, or photography styles that complement the style. e.g., Phosphor Icons, Lucide, Heroicons, unDraw, etc.]

## Accessibility

### Contrast & Readability
- **Known risks**: Specific accessibility challenges inherent to this style (e.g., low contrast in neumorphism, variable backgrounds in glassmorphism)
- **Minimum contrast**: Verified contrast ratios for the style's typical palette (WCAG AA: 4.5:1 body text, 3:1 large text/UI elements)
- **Remediation**: How to fix contrast issues without breaking the style's aesthetic

### Focus States
[How should focus indicators look in this style? Style-specific focus rings/outlines that match the aesthetic while remaining clearly visible. Provide CSS/Tailwind examples.]

### Motion Sensitivity
[`prefers-reduced-motion` fallbacks — what to disable or simplify for users who are sensitive to motion. Which of the style's animations are essential vs. decorative?]

### Screen Reader Considerations
[Are there decorative elements that need `aria-hidden`? Background shapes, ornamental borders, or visual-only indicators that need text alternatives?]

## Do's and Don'ts

### Do
- [5-8 essential practices]

### Don't
- [5-8 common mistakes to avoid]

## Implementation Hints (Tailwind + CSS)

```css
/* Key CSS patterns for this style */
```

```
/* Tailwind classes */
/* Background */

/* Card */

/* Button */

/* Heading */

/* Body text */

/* Font stack */

/* Color tokens */
```

## Reference Touchstones

When building in this style, channel the spirit of:
- [3-8 real-world references — products, designers, movements, brands]
