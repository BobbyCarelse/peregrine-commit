# Peregrine Commit

Turborepo monorepo for Peregrine Commit.

## Structure

- `apps/api` — Express + TypeScript API, rate limited, tested with Jest + Supertest.
- `apps/web` — React + TypeScript frontend (Vite), tested with Jest + Testing Library, documented in Storybook.
- `packages/peregrine-commit-ui` (`@peregrine-commit/ui`) — the design system: Atomic Design component library built with styled-components, tested with Vitest + Testing Library + jest-axe, documented in Storybook. Published to GitHub Packages.
- `packages/token-factory` (`@peregrine-commit/token-factory`) — design tokens used by the ui package. Published to GitHub Packages.
- `packages/eslint-config` — shared ESLint flat config.
- `packages/typescript-config` — shared `tsconfig.json` bases.
- `docker/` — Docker Compose setup for the project's MySQL database.

## Getting started

```bash
pnpm install
pnpm build
pnpm lint
pnpm check-types
pnpm test
pnpm --filter @peregrine-commit/ui storybook
```

## Database

Copy `docker/.env.example` to `docker/.env` and adjust the credentials, then:

```bash
pnpm docker:up   # start MySQL
pnpm docker:down # stop MySQL
```

## Publishing the design system

`@peregrine-commit/token-factory` and `@peregrine-commit/ui` are published to
GitHub Packages (`https://npm.pkg.github.com`) by
[`.github/workflows/publish.yml`](.github/workflows/publish.yml). The workflow
builds both packages and publishes token-factory first, then ui. `pnpm publish`
rewrites ui's `workspace:*` dependency on token-factory to the exact
token-factory version, so the two always ship as a matching pair.

### Releasing

1. Bump `version` in both `packages/token-factory/package.json` and
   `packages/peregrine-commit-ui/package.json` to the same new version
   (semver; e.g. `0.1.0` → `0.2.0`). Merge that to `main`.
2. Tag the merge commit and push the tag:

   ```bash
   git checkout main && git pull
   git tag v0.2.0
   git push origin v0.2.0
   ```

   The tag must match the package versions, or the workflow fails. You can
   also run the workflow by hand from the Actions tab (**Publish packages** →
   **Run workflow**).

A published version cannot be overwritten. If a version is already in the
registry the workflow skips it; to ship a fix, bump the version again.

The workflow authenticates with its own `GITHUB_TOKEN` (`packages: write`).
GitHub Packages only accepts an npm scope that matches the account that owns
the package, and a workflow's `GITHUB_TOKEN` can only write packages for the
account that owns the repository. So publishing `@peregrine-commit/*` needs
this repository to live under the `Peregrine-Commit` organisation. While it
lives under `BobbyCarelse`, transfer it first (Settings → Transfer) and update
`repository.url` in both `package.json` files to the new location.

### Installing in another project

Consumers need a GitHub token with the `read:packages` scope (a classic
personal access token locally; in GitHub Actions, the workflow's
`GITHUB_TOKEN` with `permissions: packages: read`, after granting the consuming
repository access to the package in the package settings). Add an `.npmrc`
next to the consumer's `package.json`:

```ini
@peregrine-commit:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${NODE_AUTH_TOKEN}
```

Never commit the token itself; export it in the environment:

```bash
export NODE_AUTH_TOKEN=<token with read:packages>
pnpm add @peregrine-commit/ui@0.1.0 styled-components@^6.1.0 react react-dom
```

`react`, `react-dom` (18.2+) and `styled-components` (6.1+) are peer
dependencies; `@peregrine-commit/token-factory` is installed with ui. Both
packages ship ESM and CommonJS builds with TypeScript types.

The ui bundle starts with a `'use client'` directive, so its components can be
rendered from React Server Components (e.g. Next.js App Router pages). They
render as client components.

### Fonts

`GlobalStyle` does not load any webfonts. The app loads them itself:

| Family        | Weights            | CSS variable     | Used for                    |
| ------------- | ------------------ | ---------------- | --------------------------- |
| Archivo       | 500, 600, 700, 800 | `--font-display` | display text and headings   |
| Source Sans 3 | 400, 500, 600, 700 | `--font-body`    | body text, labels, controls |
| IBM Plex Mono | 400, 500           | `--font-mono`    | monospace text              |

`GlobalStyle` sets the variables to `'Archivo', …`, `'Source Sans 3', …` and
`'IBM Plex Mono', …` with system fallbacks. A `<link>` to Google Fonts with
those family names works as is. With `next/font`, the generated family names
are hashed, so point the variables at them. Put the classes on `<body>` (or
any element inside `<html>`) so they win over the `:root` defaults:

```tsx
// app/layout.tsx
import { Archivo, IBM_Plex_Mono, Source_Sans_3 } from 'next/font/google';

const display = Archivo({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-display',
});
const body = Source_Sans_3({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
});
const mono = IBM_Plex_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-mono' });

// <body className={`${display.variable} ${body.variable} ${mono.variable}`}>
```

### Overriding the palette

`GlobalStyle` emits the stock Peregrine palette as CSS custom properties: the
light palette on `:root`, and the dark palette on `[data-theme='dark']`.
`PeregrineThemeProvider mode="dark"` sets `data-theme="dark"` on its wrapper
`<div>`. An app can also set it on `<html>` and render `<GlobalStyle />`
directly. Components only read the semantic `--color-*` variables:

| Variable                 | Light (`:root`)            | Dark (`[data-theme='dark']`)  |
| ------------------------ | -------------------------- | ----------------------------- |
| `--color-bg`             | `--pc-paper-50` `#faf8f2`  | `--pc-forest-950` `#16211d`   |
| `--color-surface`        | `#ffffff`                  | `--pc-charcoal-800` `#2a2a28` |
| `--color-surface-sunken` | `--pc-sand-200` `#d9d4c4`  | forest-950 mixed with black   |
| `--color-border`         | stone-600 / sand-200 mix   | forest-700 / charcoal-800 mix |
| `--color-border-strong`  | `--pc-stone-600` `#726f65` | `--pc-forest-700` `#2f5d4f`   |
| `--color-text-primary`   | `--pc-ink-900` `#1a1a18`   | `--pc-cream-100` `#ede7d8`    |
| `--color-text-secondary` | `--pc-stone-600`           | cream-100 / forest-950 mix    |
| `--color-text-on-accent` | `--pc-paper-50`            | `--pc-forest-950`             |
| `--color-text-muted`     | stone-600 / paper-50 mix   | cream-100 / forest-950 mix    |
| `--color-accent`         | `--pc-rust-500` `#c97a1e`  | `--pc-mint-400` `#6fbf9a`     |
| `--color-accent-hover`   | rust-500 darkened          | mint-400 lightened            |
| `--color-accent-active`  | rust-500 darkened further  | mint-400 darkened             |
| `--color-accent-soft`    | rust-500 tint              | mint-400 over forest-950      |
| `--color-focus-ring`     | rust-500 tint              | `--pc-mint-400`               |
| `--color-success`        | `#4b7c4a`                  | `#6fbf9a`                     |
| `--color-danger`         | `#a5402e`                  | `#e08469`                     |
| `--color-warning`        | `--pc-rust-500`            | `#e0b65c`                     |
| `--color-scrim`          | `rgb(26 26 24 / 0.5)`      | `rgb(0 0 0 / 0.6)`            |

The full definitions are in `packages/token-factory/src/defaults/colors.ts`.
The `--pc-*` variables are brand primitives, and only the `--color-*` values
above reference them. Override the semantic variables, not the primitives.

The `<style>` tags from styled-components are injected late in `<head>`, so an
app stylesheet with the same specificity can lose. Use a more specific selector
for overrides:

```css
html:root {
  --color-bg: #f4efe4;
  --color-accent: #b5532a;
}
html[data-theme='dark'] {
  --color-bg: #0f1a16;
  --color-accent: #7fd1a8;
}
```

`html:root` also outranks the stock `[data-theme='dark']` rule. So when you
override a variable, override it in both blocks. Otherwise the light value
shows in dark mode too.
