import { describe, expect, it } from 'vitest';

import { fontImportsToCss, tokensToCss } from './serialize';

describe('tokensToCss', () => {
  it('serializes a token map into a :root rule by default', () => {
    const css = tokensToCss({ 'inset-sm': 'var(--space-3)', 'stack-xs': 'var(--space-1)' });

    expect(css).toBe(':root {\n  --inset-sm: var(--space-3);\n  --stack-xs: var(--space-1);\n}\n');
  });

  it('supports a custom selector, e.g. for a dark-mode remap', () => {
    const css = tokensToCss(
      { 'focus-ring': 'var(--pc-mint-400)' },
      { selector: '[data-theme="dark"]' },
    );

    expect(css).toBe('[data-theme="dark"] {\n  --focus-ring: var(--pc-mint-400);\n}\n');
  });

  it('produces an empty rule body for an empty token map', () => {
    expect(tokensToCss({})).toBe(':root {\n\n}\n');
  });
});

describe('fontImportsToCss', () => {
  it('serializes each URL into its own @import statement', () => {
    const css = fontImportsToCss([
      'https://fonts.example.com/a.css',
      'https://fonts.example.com/b.css',
    ]);

    expect(css).toBe(
      '@import url("https://fonts.example.com/a.css");\n@import url("https://fonts.example.com/b.css");\n',
    );
  });

  it('returns just a trailing newline for an empty list', () => {
    expect(fontImportsToCss([])).toBe('\n');
  });
});
