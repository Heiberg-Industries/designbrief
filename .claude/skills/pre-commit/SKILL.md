---
name: pre-commit
description: Run the pre-commit verification checklist before creating a git commit
disable-model-invocation: true
allowed-tools: Read, Grep, Glob, Bash, Task
---

# Pre-Commit Checklist

Run this before every commit to catch issues early.

## 1. Build Verification

Run the project's build/typecheck command. If it fails, fix before committing.

## 2. Lint Check

Run the project's lint command. Fix any new lint errors.

## 3. Test Check

Run relevant tests for the changed files. If tests fail, fix before committing.

## 4. Unintended Changes

```bash
git status
git diff --staged --stat
```

Check for:
- Files that shouldn't be committed (`.env`, debug logs, temp files)
- Unrelated changes mixed in (should be separate commits)
- Generated files that need regenerating

## 5. Code Review (Optional)

If significant code was written, suggest running `/review-changes` separately for
a fresh-context review before committing.

## 6. Commit

If all checks pass:
1. Stage the relevant files (prefer specific files over `git add .`)
2. Write a descriptive commit message
3. Commit

Report the result to the user.
