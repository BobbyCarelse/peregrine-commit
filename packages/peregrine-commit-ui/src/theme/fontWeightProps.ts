import type { FontWeightKey } from '@peregrine-commit/token-factory';

/** The standard CSS numeric font-weight scale, matching the `--font-weight-*` primitive tokens. */
export type FontWeightToken = FontWeightKey;

export interface FontWeightProps {
  /** Overrides the variant/size's built-in font-weight. */
  weight?: FontWeightToken;
}

export const fontWeightVar = (token: FontWeightToken) => `var(--font-weight-${token})`;
