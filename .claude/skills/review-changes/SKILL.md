---
name: review-changes
description: Review staged or recent code changes using the code-reviewer subagent
disable-model-invocation: true
allowed-tools: Read, Grep, Glob, Bash, Task
---

# Review Code Changes

Review recent code changes with a fresh-context subagent.

## What to Review

Check what's available:
1. First check for staged changes: `git diff --staged`
2. If nothing staged, check unstaged changes: `git diff`
3. If nothing unstaged, check last commit: `git diff HEAD~1`

## Launch Review

Delegate to the `code-reviewer` subagent with the diff output.

The reviewer should:
1. Read the full diff
2. Read each modified file in full (not just the diff)
3. Check against project rules in `.claude/rules/`
4. Report findings organized by severity:
   - 🔴 **Critical** — Must fix before commit (bugs, security, data loss)
   - 🟡 **Warning** — Should fix (code quality, missing edge cases)
   - 🟢 **Suggestion** — Consider improving (naming, readability)

## After Review

Present findings to the user. For each critical/warning item, offer to fix it.

If no issues found, confirm the code is ready to commit.
