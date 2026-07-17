import type { TokenRecord } from './types';

/**
 * Merges partial overrides onto a default token record, so a consumer can
 * rebrand a subset of tokens without redeclaring the ones they don't change.
 */
export function mergeTokens<T extends TokenRecord>(defaults: T, overrides?: Partial<T>): T {
  return { ...defaults, ...overrides };
}
