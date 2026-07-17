import {
  defaultColorTokensDark,
  defaultColorTokensLight,
  mergeTokens,
  tokensToCss,
} from '@peregrine-commit/token-factory';

/**
 * Light + dark color primitives and semantic aliases (tokens/colors.css in the
 * design system). Ships the stock Peregrine Commit brand — a consuming app that
 * wants a different palette calls `mergeTokens(defaultColorTokensLight, {...})`
 * itself rather than overriding this file.
 */
export const colorsCss =
  tokensToCss(mergeTokens(defaultColorTokensLight)) +
  tokensToCss(mergeTokens(defaultColorTokensDark), { selector: "[data-theme='dark']" });
