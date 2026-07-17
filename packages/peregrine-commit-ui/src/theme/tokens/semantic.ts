import { defaultSemanticTokens, mergeTokens, tokensToCss } from '@peregrine-commit/token-factory';

/**
 * Layer 2 of the token architecture (inset/stack/inline rhythm, control and
 * surface anatomy, focus ring), matching tokens/semantic.css in the design
 * system. Ships token-factory's stock defaults, consistent with the other
 * files in this folder.
 */
export const semanticCss = tokensToCss(mergeTokens(defaultSemanticTokens));
