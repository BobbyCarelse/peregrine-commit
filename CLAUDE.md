# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Turborepo monorepo (pnpm workspaces) for Peregrine Commit — a marketing site + client work platform. `packages/peregrine-commit-ui` is a from-scratch Atomic Design component library whose tokens/component specs originate in a Claude Design project ("Peregrine Commit Design System"); it is not just internal scaffolding, it's the product design system.

## Commands

Run from repo root unless noted; Turborepo fans these out per-package via `turbo.json` (each task except `dev`/`storybook` depends on `^build` of its workspace deps):

```bash
pnpm install
pnpm build            # turbo run build
pnpm lint              # turbo run lint (eslint --max-warnings 0 per package)
pnpm check-types        # turbo run check-types (tsc --noEmit)
pnpm test               # turbo run test
pnpm format:check       # prettier --check . (CI also runs this — run before pushing)
pnpm storybook          # turbo run storybook (all packages that have one)
```

Scope any of the above to one package with `--filter`, e.g. `pnpm --filter @peregrine-commit/ui test` or `pnpm --filter @peregrine-commit/ui storybook` (port 6006). `apps/web`'s Storybook runs on port 6007 (`storybook dev -p 6007`). `packages/token-factory` also has a Storybook, on port 6010 — it uses the `@storybook/html-vite` framework (not React) since token-factory is a plain-TS library; its stories render token values as plain DOM elements (`document.createElement`) styled via `var(--token-name)`, sourced from CSS the `.storybook/preview.ts` builds with the package's own `tokensToCss`/`fontImportsToCss` serializers rather than hardcoded values.

Per-package test runners differ — `cd` into the package or use `--filter` and check its `package.json` for the exact single-test invocation:

- `apps/api`, `apps/web`: Jest (`jest`, `jest --watch`)
- `packages/peregrine-commit-ui`, `packages/token-factory`: Vitest (`vitest run`, `vitest`)

Database (only needed for `apps/api` work that touches MySQL): copy `docker/.env.example` to `docker/.env`, then `pnpm docker:up` / `pnpm docker:down`.

CI (`.github/workflows/ci.yml`) runs, in order: format:check → lint → check-types → test → build → `docker compose config` validation. Match that order locally before pushing.

There's a project skill at `packages/peregrine-commit-ui/.claude/skills/run-peregrine-commit-ui/` for building/launching/screenshotting that package's Storybook (Playwright driver against a running dev server, since `chromium-cli` isn't installed here) — use it instead of improvising when asked to visually verify a component.

## Workspace layout

- `apps/api` — Express 5 + TypeScript, rate-limited (`express-rate-limit`), tested with Jest + Supertest. Plain Node service, not NestJS.
- `apps/web` — React 18 + TypeScript, Vite, tested with Jest + React Testing Library (not Vitest — deliberately different from `peregrine-commit-ui`), documented in Storybook. Consumes `@peregrine-commit/ui`. The page is composed in `src/App.tsx` as `AppLayout` wrapping an ordered list of top-level section components from `src/sections/` (e.g. `Hero`, `Explore`, `Experience`, `Resume`) — each section is a standalone component built from `@peregrine-commit/ui` atoms/molecules/organisms, and reordering the page means reordering that list, not touching the sections themselves. `AppLayout` (`src/layouts/AppLayout`) owns theme-mode state via `useThemeMode` and wraps children in `PeregrineThemeProvider`.
- `packages/peregrine-commit-ui` (npm name `@peregrine-commit/ui`) — the Atomic Design component library: styled-components, Vitest + Testing Library + jest-axe, Storybook, built with tsup (ESM+CJS+d.ts).
- `packages/token-factory` (`@peregrine-commit/token-factory`) — plain-TS, no-React library that owns the design tokens end to end (see Token architecture below).
- `packages/eslint-config` — shared ESLint flat config (`@peregrine-commit/eslint-config`).
- `packages/typescript-config` — shared tsconfig bases: `base.json` (strict ES2022 root), `node-library.json` (CommonJS/Node10 resolution — used by `apps/api` so it doesn't need forced `.js` import extensions), `react-app.json` (DOM libs, `noEmit`, used by `apps/web`), `react-library.json` (DOM libs, declaration output, used by `peregrine-commit-ui`).
- `docker/` — Compose file for a local MySQL 8.4 service used by `apps/api`.

Workspace packages are referenced as `workspace:*` and internal package names are scoped `@peregrine-commit/*` except `peregrine-commit-ui`'s own npm name, which is unscoped-suffix `@peregrine-commit/ui` (not `@peregrine-commit/peregrine-commit-ui`) — its directory name and package name differ deliberately.

## Token architecture (design system)

Tokens flow through two packages, not one — don't hand-edit generated files:

1. **`packages/token-factory/src/defaults/*.ts`** owns the actual default layer-1 primitive values (colors, spacing, typography, fonts) as flat `TokenRecord`s, mirroring the Claude Design project's `tokens/*.css` files verbatim.
2. **`packages/token-factory/src/createSemanticTokens.ts`** derives layer-2 semantic tokens (`--inset-*`, `--stack-*`, `--inline-*`, `--control-*`, `--surface-*`, `--focus-ring*`) from layer-1 primitives passed in as `var(--...)` refs; `defaults/semantic.ts` exports the pre-computed result against the canonical primitives.
3. **`mergeTokens(defaults, overrides?)`** is a flat shallow merge — how a consumer rebrands a subset of tokens without redeclaring the rest.
4. **`packages/peregrine-commit-ui/src/theme/tokens/*.ts`** (one file per type: `colors.ts`, `spacing.ts`, `typography.ts`, `fonts.ts`, `semantic.ts`, plus static `base.ts` for the CSS reset) are thin composers: each calls the matching token-factory default + `mergeTokens()` (no overrides — this package ships the stock brand) + a serializer (`tokensToCss`/`fontImportsToCss`), producing a CSS string.
5. **`theme/tokens.css.ts`** is a barrel that concatenates those CSS strings into `GlobalStyle`.
6. **`theme/theme.ts`** is a hand-maintained typed mirror (`var(--...)` string values, no dynamic derivation) purely for styled-components `props.theme.*` autocomplete — it is not a second source of truth.

When the design source changes: edit `token-factory`'s `createSemanticTokens.ts` or `defaults/*.ts`, never `tokens.css.ts` or `theme/tokens/*.ts` directly. There is currently no runtime rebrand prop on `PeregrineThemeProvider` — token composition is build-time only.

**Light/dark mode** is a separate axis from rebranding and _is_ runtime: `PeregrineThemeProvider` takes an optional `mode?: 'light' | 'dark'` prop (default `light`) and renders a `data-theme="dark"` wrapper div when dark is active. This works because `theme/tokens/colors.ts` emits two CSS blocks — `tokensToCss(mergeTokens(defaultColorTokensLight))` unscoped, then `tokensToCss(mergeTokens(defaultColorTokensDark), { selector: "[data-theme='dark']" })` — both sourced from token-factory's `defaults/colors.ts`. Other token types (spacing, typography, semantic) have no dark variant; only color primitives/aliases flip. `apps/web` drives this via its own `useThemeMode` hook (`src/hooks/useThemeMode.ts`), which persists the choice to `localStorage` and falls back to `prefers-color-scheme`.

## Component conventions (peregrine-commit-ui)

Every component lives in its own directory under `primitives/`, `atoms/`, `molecules/`, or `organisms/` with a fixed file set: `X.tsx`, `X.styles.ts`, `X.test.tsx`, `X.stories.tsx`, `index.ts`. New components should follow whichever existing component is the closest analog rather than introducing a new pattern. `primitives/Box` is the lowest-level layout primitive (flex/gap/alignment/background/spacing props) — new layout-oriented components should build on `Box` rather than styling a bare `div`; `atoms/Container` is already `styled(Box)`.

Styles are defined outside the component, in `X.styles.ts`, and consumed via transient props (`$variant`, `$size`, etc.) so they never leak to the DOM — see `Button.tsx`/`Button.styles.ts` for the canonical shape: the `.tsx` file maps public props to `$`-prefixed props on a `styled.*` component whose variant/size branches are `Record<Variant, css\`...\`>` lookups keyed off those props.

All new/changed public exports go through `packages/peregrine-commit-ui/src/index.ts` (component + its prop/variant types) — nothing is consumable from outside the package unless it's re-exported there.

Vite/`@vitejs/plugin-react` are pinned workspace-wide to `^6.4.3`/`^4.7.0` because Storybook 8.6.18's peer range caps at `vite ^6`; don't let `pnpm add` resolve a newer major for any package that touches Vite, since pnpm hoists one version across the workspace and will break the others' Storybook.
