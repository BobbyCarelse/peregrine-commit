import { defaultTypographyTokens, mergeTokens, tokensToCss } from '@peregrine-commit/token-factory';

/** Font families, type scale, and letter-tracking primitives (tokens/typography.css). */
export const typographyCss = tokensToCss(mergeTokens(defaultTypographyTokens));
