import { createGlobalStyle } from 'styled-components';

import { baseCss } from './tokens/base';
import { colorsCss } from './tokens/colors';
import { fontsCss } from './tokens/fonts';
import { semanticCss } from './tokens/semantic';
import { spacingCss } from './tokens/spacing';
import { typographyCss } from './tokens/typography';

/**
 * Composes Peregrine Commit's design tokens (theme/tokens/{fonts,colors,spacing,typography,semantic,base})
 * into one global stylesheet, mirroring tokens/{fonts,colors,spacing,typography,semantic,base}.css
 * in the Claude Design project, so future token updates land in the matching file.
 */
export const GlobalStyle = createGlobalStyle`
  ${fontsCss}

  ${colorsCss}

  ${spacingCss}

  ${typographyCss}

  ${semanticCss}

  ${baseCss}
`;
