import { describe, expect, it } from 'vitest';

import { defaultColorTokensDark, defaultColorTokensLight } from './colors';
import { defaultFontImports } from './fonts';
import { defaultSemanticTokens } from './semantic';
import { defaultSpacingTokens } from './spacing';
import { defaultTypographyTokens } from './typography';

describe('default token modules', () => {
  it('exposes the light and dark color palettes with the accent alias remapped', () => {
    expect(defaultColorTokensLight['color-accent']).toBe('var(--pc-rust-500)');
    expect(defaultColorTokensDark['color-accent']).toBe('var(--pc-mint-400)');
  });

  it('exposes the spacing scale and derived radius/shadow tokens', () => {
    expect(defaultSpacingTokens['space-4']).toBe('16px');
    expect(defaultSpacingTokens['radius-md']).toBe('8px');
    expect(defaultSpacingTokens['shadow-focus']).toBe('0 0 0 3px var(--color-focus-ring)');
  });

  it('exposes the type scale keyed off the display/body font families', () => {
    expect(defaultTypographyTokens['font-display']).toContain('Archivo');
    expect(defaultTypographyTokens['text-body-md']).toBe(
      'var(--font-weight-400) 1rem/1.6 var(--font-body)',
    );
  });

  it('exposes the font-weight scale referenced by the type scale', () => {
    expect(defaultTypographyTokens['font-weight-400']).toBe('400');
    expect(defaultTypographyTokens['font-weight-700']).toBe('700');
  });

  it('exposes the webfont import URLs', () => {
    expect(defaultFontImports).toHaveLength(2);
    expect(defaultFontImports[0]).toContain('fonts.googleapis.com');
  });

  it('exposes semantic tokens derived from the canonical default primitive var() names', () => {
    expect(defaultSemanticTokens['inset-md']).toBe('var(--space-4)');
    expect(defaultSemanticTokens['control-height-md']).toBe('40px');
    expect(defaultSemanticTokens['surface-radius']).toBe('var(--radius-lg)');
  });
});
