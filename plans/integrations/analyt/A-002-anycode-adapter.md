# A-002 - Analyt Adapter for anycode

## Goal
Integrate anycode workflow surfaces in Analyt while preserving anycode->anymem API boundary.

## Adapter Shape
- Navigation: dedicated first-class `anycode` suite entry adjacent to `anymem`.
- Auth: Analyt passes tenant context to anycode, and anycode continues using canonical anymem token/API paths for governance operations.

## Acceptance Criteria
- Analyt can launch anycode tooling surfaces with tenant context.
- anycode continues to consume anymem through public contracts only.
- Anycode remains independently operable outside Analyt.
- Analyt failure isolation is defined so anycode degradation does not imply anymem outage, and vice versa.
- Entitlement and telemetry are separable from the anymem adapter path.
- Analyt navigation and entitlement model makes `anycode` discoverable without nesting it under `anymem`.

## Dependencies
- `C-001`, `C-002`, `C-004`, `A-001`
