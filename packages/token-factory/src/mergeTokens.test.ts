import { describe, expect, it } from 'vitest';

import { mergeTokens } from './mergeTokens';

describe('mergeTokens', () => {
  const defaults = { 'color-accent': '#c97a1e', 'color-bg': '#faf8f2' };

  it('returns the defaults untouched when no overrides are given', () => {
    expect(mergeTokens(defaults)).toEqual(defaults);
  });

  it('overrides only the keys provided, keeping the rest of the defaults', () => {
    const merged = mergeTokens(defaults, { 'color-accent': '#0057ff' });

    expect(merged).toEqual({ 'color-accent': '#0057ff', 'color-bg': '#faf8f2' });
  });

  it('does not mutate the original defaults object', () => {
    mergeTokens(defaults, { 'color-accent': '#0057ff' });

    expect(defaults['color-accent']).toBe('#c97a1e');
  });
});
