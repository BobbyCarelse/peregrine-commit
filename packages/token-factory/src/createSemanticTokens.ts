import { DEFAULT_CONTROL_HEIGHTS, DEFAULT_FOCUS_RING_OFFSET } from './types';
import type { SemanticTokenPrimitives, TokenRecord } from './types';

/**
 * Derives the layer-2 semantic token set (inset/stack/inline rhythm, control and
 * surface anatomy, focus ring) from layer-1 primitives, matching the token
 * architecture documented in the Peregrine Commit design system.
 */
export function createSemanticTokens(primitives: SemanticTokenPrimitives): TokenRecord {
  const { space, radius, borderWidth, color, shadow, controlFont } = primitives;
  const controlHeights = { ...DEFAULT_CONTROL_HEIGHTS, ...primitives.controlHeights };
  const focusRingOffset = primitives.focusRingOffset ?? DEFAULT_FOCUS_RING_OFFSET;

  return {
    'inset-sm': space[3],
    'inset-md': space[4],
    'inset-lg': space[6],
    'inset-xl': space[8],

    'stack-xs': space[1],
    'stack-sm': space[2],
    'stack-md': space[4],
    'stack-lg': space[8],
    'stack-section': space[20],

    'inline-xs': space[1],
    'inline-sm': space[2],
    'inline-md': space[4],
    'inline-lg': space[6],

    'control-height-sm': controlHeights.sm,
    'control-height-md': controlHeights.md,
    'control-height-lg': controlHeights.lg,
    'control-pad-x': space[4],
    'control-radius': radius.md,
    'control-border': `${borderWidth.sm} solid ${color.borderStrong}`,
    'control-font': controlFont,
    'control-gap': 'var(--inline-xs)',

    'surface-radius': radius.lg,
    'surface-border': `${borderWidth.sm} solid ${color.border}`,
    'surface-shadow-raised': shadow.md,
    'surface-shadow-overlay': shadow.lg,

    'focus-ring': shadow.focus,
    'focus-ring-offset': focusRingOffset,
  };
}
