---
name: session-end
description: Run the session cleanup checklist before ending work
disable-model-invocation: true
allowed-tools: Read, Write, Edit, Bash, Glob
---

# Session End Checklist

Run this before ending a work session to ensure continuity.

## 1. Check Task Status

Is the current task complete?

### If COMPLETE:
- Delete `docs/SESSION_CONTEXT.md` if it exists
- Update `docs/HANDOFF.md`:
  - Add completed work to "Recently Completed" with today's date
  - Update "Next Priority" if needed
  - Remove entries older than 7 days from "Recently Completed"
- Update `docs/CURRENT_STATUS.md` if status changed

### If INCOMPLETE:
- Create or update `docs/SESSION_CONTEXT.md` with:
  - What was accomplished so far
  - The exact next action (specific step, not a phase)
  - Any blockers or open questions
  - Files that were being modified
- Update `docs/HANDOFF.md` noting work is in progress

## 2. Check for Uncommitted Changes

```bash
git status
```

- If there are uncommitted changes that pass build: suggest committing
- If changes don't pass build: note this in SESSION_CONTEXT.md

## 3. Check for New Lessons

Were any gotchas, surprises, or important decisions discovered during this session?
If yes, add them to MEMORY.md immediately.

## 4. Report

Tell the user:
- What was completed
- What's saved for next session (if anything)
- Any new entries added to MEMORY.md
