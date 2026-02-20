---
paths:
  - "**/components/**"
  - "**/app/**/*.tsx"
  - "**/app/**/*.jsx"
  - "**/pages/**/*.tsx"
  - "**/pages/**/*.jsx"
---

# UI Completeness

Consult this checklist when creating or modifying UI components/pages.

## States

- [ ] Loading state: skeleton/spinner while data loads?
- [ ] Error state: user-friendly message on failure?
- [ ] Empty state: meaningful display when no data (not blank screen)?
- [ ] Success state: happy path visually correct?

## Responsiveness

- [ ] Works at mobile width (480px)?
- [ ] Works at tablet width (768px)?
- [ ] Text truncated properly (no overflow)?

## Accessibility

- [ ] Interactive elements have visible focus styles?
- [ ] Images have alt text?
- [ ] Buttons/links have descriptive labels?
- [ ] Form inputs have associated labels?

## Consistency

- [ ] Uses existing design system components (not custom implementations)?
- [ ] Follows project color/spacing tokens?
- [ ] Forms used in create AND edit use shared component with `mode` prop?

## Pattern Compliance

- [ ] New component pattern that doesn't exist elsewhere? Flag to user as potential convention
