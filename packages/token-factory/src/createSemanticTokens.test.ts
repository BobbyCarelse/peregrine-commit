import { describe, expect, it } from 'vitest';

import { createSemanticTokens } from './createSemanticTokens';
import type { SemanticTokenPrimitives } from './types';

const primitives: SemanticTokenPrimitives = {
  space: {
    1: 'var(--space-1)',
    2: 'var(--space-2)',
    3: 'var(--space-3)',
    4: 'var(--space-4)',
    5: 'var(--space-5)',
    6: 'var(--space-6)',
    8: 'var(--space-8)',
    10: 'var(--space-10)',
    12: 'var(--space-12)',
    16: 'var(--space-16)',
    20: 'var(--space-20)',
    24: 'var(--space-24)',
    32: 'var(--space-32)',
  },
  radius: {
    sm: 'var(--radius-sm)',
    md: 'var(--radius-md)',
    lg: 'var(--radius-lg)',
    xl: 'var(--radius-xl)',
    full: 'var(--radius-full)',
  },
  borderWidth: {
    sm: 'var(--border-width-sm)',
    md: 'var(--border-width-md)',
    lg: 'var(--border-width-lg)',
  },
  color: {
    border: 'var(--color-border)',
    borderStrong: 'var(--color-border-strong)',
    focusRing: 'var(--color-focus-ring)',
  },
  shadow: {
    md: 'var(--shadow-md)',
    lg: 'var(--shadow-lg)',
    focus: 'var(--shadow-focus)',
  },
  controlFont: 'var(--text-label-md)',
};

describe('createSemanticTokens', () => {
  it('derives inset/stack/inline rhythm from the space scale', () => {
    const tokens = createSemanticTokens(primitives);

    expect(tokens['inset-sm']).toBe('var(--space-3)');
    expect(tokens['inset-md']).toBe('var(--space-4)');
    expect(tokens['inset-lg']).toBe('var(--space-6)');
    expect(tokens['inset-xl']).toBe('var(--space-8)');

    expect(tokens['stack-xs']).toBe('var(--space-1)');
    expect(tokens['stack-section']).toBe('var(--space-20)');

    expect(tokens['inline-xs']).toBe('var(--space-1)');
    expect(tokens['inline-lg']).toBe('var(--space-6)');
  });

  it('defaults control heights to 32/40/48px when not overridden', () => {
    const tokens = createSemanticTokens(primitives);

    expect(tokens['control-height-sm']).toBe('32px');
    expect(tokens['control-height-md']).toBe('40px');
    expect(tokens['control-height-lg']).toBe('48px');
  });

  it('allows overriding control heights and focus ring offset', () => {
    const tokens = createSemanticTokens({
      ...primitives,
      controlHeights: { md: '44px' },
      focusRingOffset: '3px',
    });

    expect(tokens['control-height-sm']).toBe('32px');
    expect(tokens['control-height-md']).toBe('44px');
    expect(tokens['focus-ring-offset']).toBe('3px');
  });

  it('composes control and surface anatomy from radius/border/color/shadow primitives', () => {
    const tokens = createSemanticTokens(primitives);

    expect(tokens['control-radius']).toBe('var(--radius-md)');
    expect(tokens['control-border']).toBe(
      'var(--border-width-sm) solid var(--color-border-strong)',
    );
    expect(tokens['control-font']).toBe('var(--text-label-md)');
    expect(tokens['control-gap']).toBe('var(--inline-xs)');

    expect(tokens['surface-radius']).toBe('var(--radius-lg)');
    expect(tokens['surface-border']).toBe('var(--border-width-sm) solid var(--color-border)');
    expect(tokens['surface-shadow-raised']).toBe('var(--shadow-md)');
    expect(tokens['surface-shadow-overlay']).toBe('var(--shadow-lg)');

    expect(tokens['focus-ring']).toBe('var(--shadow-focus)');
  });
});
