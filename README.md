# anymem + anycode Monorepo

Monorepo for `anymem` and `anycode`.

Current implemented baseline is the standalone `anymem` core API scaffold.

## Current Implementation
- `apps/anymem-api`: standalone HTTP API skeleton for `anymem`
- `packages/anymem-contracts`: shared approval and workflow constants
- `tests`: built-in API tests using `node:test`

## Run
```bash
npm run dev:anymem-api
```

Compatibility alias:
```bash
npm run dev:api
```

API defaults to `http://127.0.0.1:4010`.

Override the dev state path with `ANYMEM_STATE_FILE=/path/to/state.json`.

## Manual Checks
```bash
curl http://127.0.0.1:4010/healthz
curl http://127.0.0.1:4010/api/v1/meta
```

## Tests
```bash
npm test
```
