import type { TokenRecord } from './types';

function toCamelCase(kebab: string): string {
  return kebab.replace(/-([a-z0-9])/g, (_, char: string) => char.toUpperCase());
}

/**
 * Converts a token map into `var(--token-name)` references keyed by camelCase,
 * for building typed theme mirrors that consume the tokens without re-typing
 * every token name by hand.
 */
export function tokenKeysToVarRefs(tokens: TokenRecord): Record<string, string> {
  return Object.fromEntries(
    Object.keys(tokens).map((name) => [toCamelCase(name), `var(--${name})`]),
  );
}
