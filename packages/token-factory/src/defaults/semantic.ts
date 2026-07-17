import { createSemanticTokens } from '../createSemanticTokens';
import type { TokenRecord } from '../types';

/**
 * Default layer-2 semantic tokens, derived from the canonical default
 * layer-1 primitive var() names (see defaults/{colors,spacing,typography}.ts).
 */
export const defaultSemanticTokens: TokenRecord = createSemanticTokens({
  space: {
    0: 'var(--space-0)',
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
});
