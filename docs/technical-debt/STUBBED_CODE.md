# Stubbed & Hardcoded Code Tracker

Track all placeholder code, stubs, hardcoded values, and TODO items.

## Format

| # | Type | Location | Description | Priority | Status |
|---|------|----------|-------------|----------|--------|
| 1 | HARDCODE | `package.json:2` | Package name is "TBD" — needs real name before npm publish | HIGH | OPEN |
| 2 | HARDCODE | `bin/cli.js:245-257` | Help text says "21 styles" but should dynamically count from STYLES array | LOW | OPEN |

### Types
- **STUB**: Placeholder implementation (returns fake data, throws not-implemented)
- **HARDCODE**: Value that should come from config/DB/environment
- **TODO**: Incomplete implementation marked with TODO comment
- **MOCK**: Mock data used instead of real data source

### Priority
- **HIGH**: Blocks production use or causes incorrect behavior
- **MEDIUM**: Affects functionality but has workaround
- **LOW**: Cosmetic or non-critical

### Status
- **OPEN**: Not yet addressed
- **FIXED**: Resolved (include date and commit)
- **DEFERRED**: Intentionally postponed (include reason)
