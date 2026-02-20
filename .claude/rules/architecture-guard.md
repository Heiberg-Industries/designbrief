# Architecture Guard

Consult this checklist for ANY change that touches package boundaries,
creates new patterns, or modifies shared code.

## Import Boundaries

- [ ] Respects package boundaries? (apps import packages, not reverse)
- [ ] Importing from public API (barrel exports), not deep internal paths?
- [ ] New export added to package's index/barrel file?

## Configuration Source

- [ ] Configuration read from DB/environment (not hardcoded)?
- [ ] New configurable value has admin UI?
- [ ] New configurable value has DB table/column?

## No Hardcoding Rule

- [ ] No hardcoded IDs, model names, or magic strings?
- [ ] No hardcoded URLs that should come from environment?
- [ ] No setTimeout() simulating async work?
- [ ] No placeholder/stub returns?

## Pattern Compliance

- [ ] Follows how similar features are already implemented?
- [ ] If deviating: flagged to user as architectural choice?
- [ ] Using existing shared utilities instead of re-implementing?

## Shared Code Impact

- [ ] Modified shared code: checked all apps/packages that import it?
- [ ] Changed function signature: found all callers?
- [ ] Changed exports: grepped for all imports?

## Flagging

When you notice a repeated pattern that could be abstracted, an inconsistency
with how other features work, or a cleaner design — FLAG IT to the user.
Do NOT silently implement architectural changes.
