# Peregrine Commit

Turborepo monorepo for Peregrine Commit.

## Structure

- `apps/api` — Express + TypeScript API, rate limited, tested with Jest + Supertest.
- `apps/web` — React + TypeScript frontend (Vite), tested with Jest + Testing Library, documented in Storybook.
- `packages/ui` — the design system: Atomic Design component library built with styled-components, tested with Vitest + Testing Library + jest-axe, documented in Storybook.
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
