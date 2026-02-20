---
paths:
  - "**/prisma/**"
  - "**/migrations/**"
  - "**/schema.*"
  - "**/models/**"
  - "**/db/**"
---

# Database Safety

Consult this checklist when modifying schema, writing migrations, or changing queries.

## Schema Changes

- [ ] Using proper migration tool (not raw push to production)?
- [ ] Reviewed generated SQL before applying?
- [ ] Migration handles existing data (not just new records)?
- [ ] New required columns have default value or backfill step?
- [ ] Removing columns/tables has backup strategy?
- [ ] ORM client regenerated after schema change?

## Query Safety

- [ ] Every query scoped to user's organization/account?
- [ ] List queries have pagination (no unbounded SELECT)?
- [ ] Related writes wrapped in transaction?
- [ ] Using correct field names? (Check MEMORY.md for project-specific gotchas)

## Data Integrity

- [ ] Changing a relation: what happens to existing records?
- [ ] Changing an enum: old values handled?
- [ ] New index matches actual query patterns?

## Impact Check

- [ ] Does this affect schema used by multiple apps/packages?
- [ ] If YES: checked all consumers of affected model?
