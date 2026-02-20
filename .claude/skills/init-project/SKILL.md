---
name: init-project
description: Bootstrap a new project's Claude Code configuration through an interactive Q&A
disable-model-invocation: true
allowed-tools: Read, Write, Edit, Glob, Grep, Bash
---

# Project Bootstrap Q&A

You are setting up Claude Code configuration for a new project. Walk the user through
an interactive Q&A to gather the information needed, then generate all config files.

## Step 0: Auto-Detect from Codebase

BEFORE asking any questions, silently read these files if they exist:
- `package.json` (or `pyproject.toml`, `go.mod`, `Cargo.toml`, `Gemfile`)
- `tsconfig.json` / `jsconfig.json`
- Directory listing of the project root and `src/` (if exists)
- Any existing `README.md`
- `.github/workflows/` directory listing

Pre-fill answers from what you find. Only ask questions you can't answer from the code.

## Step 1: Gather Project Info

Ask remaining questions in conversational groups (2-3 at a time, not all at once).
Present what you auto-detected and ask the user to confirm or correct.

### Stack & Structure
- What is this project? (1-2 sentence description)
- Framework and language? (e.g., Next.js + TypeScript, Python + FastAPI)
- Package manager? (npm, pnpm, yarn, pip, etc.)
- Monorepo or single package?
- Key directory structure? (or let me read it from the codebase)

### Commands
- Dev server command? (e.g., `pnpm dev`)
- Build/typecheck command? (e.g., `pnpm build`)
- Test command? (e.g., `pnpm test`)
- Lint command? (e.g., `pnpm lint`)

### Architecture
- API style? (REST, tRPC, GraphQL, none)
- Database and ORM? (Prisma + PostgreSQL, Drizzle, none, etc.)
- Auth provider? (Firebase, NextAuth, Clerk, custom, none)
- Multi-tenant? (data scoped per organization/account?)

### Security & Sensitive Files
- File patterns to deny access to? (default: .env, .env.*, secrets/**)
- Any additional sensitive directories?

### Deployment
- Where is this deployed? (Vercel, AWS, GCP, etc.)
- CI/CD pipeline? (GitHub Actions, Cloud Build, etc.)
- Environment names? (production, staging, local)

### Workflow
- Working solo or with a team?
- Branch strategy? (feature branches + PR, trunk-based, etc.)
- Any external services with MCP servers? (Figma, Notion, GitHub, etc.)

### Communication
- Your technical level? (non-developer, some technical knowledge, developer)
- How should I explain things? (plain language, some technical detail, full detail)

## Step 2: Generate Config Files

Based on the answers, update these files:

1. **CLAUDE.md** — Fill in all [PLACEHOLDER] sections
2. **docs/architecture.md** — Write architecture overview based on answers
3. **docs/conventions.md** — Write coding conventions based on stack
4. **docs/CURRENT_STATUS.md** — Initialize with "Project just set up"
5. **docs/HANDOFF.md** — Initialize with first session context
6. **.claude/settings.json** — Adjust permissions and hooks for the stack:
   - Add stack-specific deny rules (e.g., deny editing lock files)
   - Adjust allowed Bash commands for the project's toolchain
7. **.claude/rules/** — Adjust path globs to match actual project structure:
   - api-patterns.md: update paths for actual API directory
   - database-safety.md: update paths for actual schema/migration location
   - ui-completeness.md: update paths for actual component directories
   - architecture-guard.md: no path restriction (always loaded)

## Step 3: Verify

After generating, run:
1. Show the user a summary of what was created
2. Suggest they review CLAUDE.md
3. Run the project's build/typecheck command to verify clean state
4. Suggest first commit: `git add .claude/ CLAUDE.md docs/ && git commit -m "Add Claude Code project configuration"`

## Important

- Do NOT guess answers — ask if unsure
- Read existing files (package.json, tsconfig.json, etc.) to pre-fill what you can
- Keep CLAUDE.md under 100 lines — move details to docs/
- Adapt rules path globs to match the actual project structure
