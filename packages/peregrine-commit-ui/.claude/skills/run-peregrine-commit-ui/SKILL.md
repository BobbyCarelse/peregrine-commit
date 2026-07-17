---
name: run-peregrine-commit-ui
description: Build, launch, and drive @peregrine-commit/ui's Storybook (atoms/molecules/organisms design-system components). Use when asked to run, start, or screenshot peregrine-commit-ui, list its stories, verify a component renders, or run its tests/build.
---

`@peregrine-commit/ui` has no app of its own — its interactive surface is
Storybook. Drive it via
`.claude/skills/run-peregrine-commit-ui/driver.mjs`, a small Playwright
script that talks to a Storybook dev server already running on
`localhost:6006`. `chromium-cli` is not installed in this environment, so
this driver is a deliberate stand-in for it (same `nav → wait → screenshot`
shape).

All paths below are relative to `packages/peregrine-commit-ui/`.

## Prerequisites

None beyond the repo's existing Node 20+/pnpm setup — verified on macOS
(no `apt-get` needed). Playwright's Chromium build must be present; see
Setup.

## Setup

From the repo root (dependencies are already installed and linked in this
repo; `pnpm install` is only needed after a fresh clone):

```bash
pnpm install
```

`playwright` is already a devDependency of this package. Confirm its
cached Chromium build launches before relying on it — this avoids an
unnecessary ~200MB download if it's already present:

```bash
node -e "require('playwright').chromium.launch({headless:true}).then(b=>{console.log('ok',b.version());b.close()})"
```

If that fails (no cached browser), install it once: `npx playwright install chromium`.

## Build

```bash
pnpm build
```

Runs `tsup` → `dist/index.js`, `dist/index.cjs`, `dist/index.d.ts`.
Verified output: ESM 33.22 KB, CJS 39.34 KB, types 12.73 KB, all three
build steps succeed in ~1.4s total.

## Run (agent path)

1. Start Storybook in the background and poll until it's actually serving
   (macOS has no `timeout` command — don't assume GNU coreutils; use a
   bounded shell loop instead):

   ```bash
   pnpm storybook > /tmp/sb.log 2>&1 &
   echo $! > /tmp/sb.pid
   i=0; until curl -sf http://localhost:6006/index.json >/dev/null || [ $i -ge 60 ]; do sleep 0.5; i=$((i+1)); done
   curl -sf http://localhost:6006/index.json >/dev/null && echo READY || echo NOT_READY
   ```

2. List every story (id, title, name) — useful to find a story id without
   grepping source:

   ```bash
   node .claude/skills/run-peregrine-commit-ui/driver.mjs list
   ```

3. Screenshot one story and check for console errors:

   ```bash
   node .claude/skills/run-peregrine-commit-ui/driver.mjs screenshot atoms-button--primary
   ```

   Verified output: `screenshots/atoms-button--primary.png` (repo-root
   relative path from cwd; `screenshots/` is gitignored) shows the
   "Start a project" primary button correctly themed (copper button,
   cream background) with `console errors: none`.

4. Stop the server. Killing the PID `pnpm storybook` reported is not
   always sufficient — pnpm spawns a child that holds the port — so kill
   whatever is actually bound to 6006:

   ```bash
   kill $(cat /tmp/sb.pid) 2>/dev/null
   kill $(lsof -t -i :6006) 2>/dev/null
   ```

| driver.mjs command                | what it does                                                                                                                                                                       |
| --------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `list`                            | Fetches `/index.json` from the running Storybook, prints `id \t title > name` per story                                                                                            |
| `screenshot <story-id> [out.png]` | Navigates `iframe.html?id=<story-id>&viewMode=story`, waits for the story to actually paint, screenshots (default `screenshots/<story-id>.png`), prints any browser console errors |

Set `STORYBOOK_URL` env var if the server isn't on the default `localhost:6006`.

## Run (human path)

```bash
pnpm storybook   # -> http://localhost:6006, opens the manager UI (no --open flag, so open it manually)
```

Ctrl-C to stop.

## Test

```bash
pnpm test
```

Verified: 18 test files, 126 tests, all passing (vitest + Testing Library

- jest-axe), ~2.3s.

---

## Gotchas

- **`#storybook-root` exists before the story paints.** `waitForSelector('#storybook-root')` alone can fire before React commits — the driver waits for `#storybook-root *` (a child node) instead of a fixed `sleep`.
- **macOS has no `timeout` command.** Don't reach for `timeout 30 bash -c '...'` from Linux-oriented docs — it's not on PATH here. Use a bounded polling loop (shown above) instead.
- **Killing the `pnpm storybook` PID doesn't always free the port.** pnpm forwards to a child vite/storybook process; if the port is still bound after `kill $PID`, follow up with `kill $(lsof -t -i :6006)`.
- **`pnpm add` surfaces an unrelated peer-dependency warning** (`unmet peer vite@"^4.0.0 || ^5.0.0 || ^6.0.0": found 8.1.4`) — this refers to a different vite resolution elsewhere in the workspace lockfile, not the one this package actually uses. This package resolves `vite@6.4.3` (confirmed via `node_modules/.pnpm`) and Storybook launches correctly; the warning is pre-existing workspace drift, not something introduced by this skill.
