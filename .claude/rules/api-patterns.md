---
paths:
  - "**/api/**"
  - "**/routes/**"
  - "**/server/**"
---

# API Patterns

Consult this checklist when modifying or creating API routes.

## Request Handling

- [ ] Input validated with schema validation (Zod, Joi, etc.)?
- [ ] Authentication checked?
- [ ] Authorization checked (user has permission for this action)?
- [ ] Multi-tenant: queries scoped to user's organization/account?

## Error Handling

- [ ] Appropriate HTTP status codes (not just 500)?
- [ ] Error messages safe for clients (no internal details leaked)?
- [ ] Errors logged server-side for debugging?

## Resilience

- [ ] External API calls have timeout?
- [ ] External API calls have retry with backoff?
- [ ] Long-running operations queued (not blocking request)?

## Data Flow

- [ ] Response data scoped to user's organization/account?
- [ ] Multi-step writes wrapped in a transaction?
- [ ] If response shape changed: all consumers updated?

## Pattern Compliance

- [ ] Follows same pattern as existing similar endpoints?
- [ ] If NOT: documented why and flagged to user?
