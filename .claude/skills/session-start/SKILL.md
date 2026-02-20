---
name: session-start
description: Run the session startup checklist to load context and identify current priorities
disable-model-invocation: true
allowed-tools: Read, Glob, Grep, Bash
---

# Session Start Checklist

Run this checklist at the beginning of every work session.

## 1. Check for Interrupted Work

```bash
test -f docs/SESSION_CONTEXT.md && echo "FOUND: Interrupted work detected" || echo "No interrupted work"
```

If `docs/SESSION_CONTEXT.md` exists:
- Read it and resume from the "If Interrupted" section
- Tell the user what was in progress

## 2. Load Context

Read these files (skip if they don't exist):
- `MEMORY.md` or check `~/.claude/projects/` for auto-memory
- `docs/HANDOFF.md` — current priorities and recent completions
- `docs/CURRENT_STATUS.md` — what works and what's blocked

## 3. Quick Health Check

Run `git status` to check for uncommitted changes from a previous session.
Only run a full build/typecheck if HANDOFF.md or SESSION_CONTEXT.md mentions
a failing build or incomplete work. Don't burn 30-60 seconds on a clean codebase.

## 4. Report to User

Summarize in a brief table:

| Context | Status |
|---------|--------|
| Interrupted work | Yes/No (and what) |
| Current priority | From HANDOFF.md |
| Uncommitted changes | From git status |
| Blockers | From CURRENT_STATUS.md |

Then ask: "What would you like to work on?"
