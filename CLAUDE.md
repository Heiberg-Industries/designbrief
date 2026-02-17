# CLAUDE.md

UI Skills is a library of 20 UI design direction files that serve as style guardrails for AI-generated interfaces. The styles are **guiding, not prescriptive** — they define aesthetic DNA, not pixel-perfect specifications.

## Project Structure

```
ui-skills/
├── styles/                    # The core product — 20 style definition files
│   ├── _index.md              # Catalog with mood/industry tags and recommendation matrix
│   └── {style-name}.md        # Individual style guardrails
├── SKILL.md                   # Agent Skills standard — skill definition (root)
├── AGENTS.md                  # Codex fallback instructions
├── STYLE-TEMPLATE.md          # Blank template for new styles
├── PASTE-INSTRUCTIONS.md      # Copy-paste instructions for Lovable/Bolt/v0
├── .cursor/rules/             # Cursor adapter
├── .windsurf/rules/           # Windsurf adapter
├── CLAUDE.md                  # This file
├── README.md                  # Public-facing documentation
└── LICENSE                    # PolyForm Noncommercial 1.0
```

## Key Files

- `SKILL.md` — The Agent Skills standard skill definition (root level)
- `styles/_index.md` — Full catalog of all 20 styles with mood/industry tags
- `styles/{name}.md` — Individual style guardrail files

## When Working on UI

1. Read `SKILL.md` for the full workflow
2. If the user specifies a style, read `styles/{name}.md`
3. If no style is specified, read `styles/_index.md` and help the user choose
4. Apply the style's guardrails to all UI code generation

## When Editing Style Files

- Every style follows the anatomy in `STYLE-TEMPLATE.md`
- Required sections: Non-Negotiables, Identity, Typography, Color, Spacing & Layout, Borders & Shadows, Components, Motion, Do's/Don'ts, Implementation Hints, Reference Touchstones
- The Non-Negotiables section is critical — it defines the 3 things that MUST be present for the style to be recognizable
- Update `styles/_index.md` whenever a style is added or removed
- Keep descriptions as guardrails (families, characteristics, ranges) not specifications (exact hex codes only)

## Multi-Tool Distribution

UI Skills uses the [Agent Skills open standard](https://agentskills.io) (SKILL.md). This is natively supported by:
- Claude Code, OpenAI Codex CLI, GitHub Copilot (VS Code)

Adapter files exist for: Cursor (`.cursor/rules/`), Windsurf (`.windsurf/rules/`)
Paste instructions exist for: Lovable, Bolt.new, v0
