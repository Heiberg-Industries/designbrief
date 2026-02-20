# Coding Conventions

> Referenced from CLAUDE.md. Read on-demand when writing or reviewing code.
> Only include conventions that differ from language/framework defaults.

## Language & Module Style

- **Language**: JavaScript (Node.js) for CLI, Markdown for content
- **Module system**: CommonJS (`require`) — for broad Node.js compatibility (>=18)
- **Import style**: Standard `require()`, no bundler

## File Organization

- **Style files**: One style per file in `styles/`, kebab-case naming (`glassmorphism.md`, `dark-mode-premium.md`)
- **Adapter files**: One per tool in tool-specific directories (`.cursor/rules/`, `.windsurf/rules/`)
- **CLI**: Single file at `bin/cli.js`

## Naming Conventions

| Thing | Convention | Example |
|-------|-----------|---------|
| Style files | kebab-case .md | `art-deco.md`, `y2k-revival.md` |
| Style names (display) | Title Case | Art Deco, Y2K Revival |
| Sections in styles | Numbered, Title Case | `## 3. Color` |
| Config files | UPPER_CASE .md | `SKILL.md`, `AGENTS.md`, `STYLE-TEMPLATE.md` |

## Style File Writing Conventions

- Use heading level 2 (`##`) for numbered sections, heading level 3 (`###`) for subsections
- Non-Negotiables section uses a numbered list of exactly 3 items
- Do's/Don'ts use checkboxes with "why" explanations in parentheses
- Implementation Hints include both Tailwind classes and CSS custom properties
- Reference Touchstones list real products/sites, not abstract descriptions
- Keep descriptions as guardrails (families, characteristics, ranges) not specifications

## Commit Conventions

- **Style**: Conventional commits
- **Example**: `feat: add aurora style`, `fix: update _index.md metadata`
- **Branch naming**: `feature/xxx`, `fix/xxx`
