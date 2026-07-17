import { defaultSpacingTokens, mergeTokens, tokensToCss } from '@peregrine-commit/token-factory';

/** Spacing, radius, border, shadow, motion, and layout primitives (tokens/spacing.css). */
export const spacingCss = tokensToCss(mergeTokens(defaultSpacingTokens));
