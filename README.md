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
