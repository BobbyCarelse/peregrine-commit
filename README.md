# Peregrine Commit

Turborepo monorepo for Peregrine Commit.

## Structure

- `apps/` — applications (React frontend + NestJS backend go here).
- `packages/peregrine-commit-ui` — the design system: Atomic Design component library built with styled-components, tested with Vitest + Testing Library + jest-axe, documented in Storybook.
- `packages/eslint-config` — shared ESLint flat config.
- `packages/typescript-config` — shared `tsconfig.json` bases.

## Getting started

```bash
pnpm install
pnpm build
pnpm lint
pnpm check-types
pnpm test
pnpm --filter peregrine-commit-ui storybook
```
