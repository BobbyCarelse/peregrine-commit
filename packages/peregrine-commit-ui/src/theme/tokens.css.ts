import { createGlobalStyle } from 'styled-components';

import { baseCss } from './tokens/base';
import { colorsCss } from './tokens/colors';
import { semanticCss } from './tokens/semantic';
import { spacingCss } from './tokens/spacing';
import { typographyCss } from './tokens/typography';

/**
 * Composes Peregrine Commit's design tokens (theme/tokens/{colors,spacing,typography,semantic,base})
 * into one global stylesheet, mirroring tokens/{colors,spacing,typography,semantic,base}.css
 * in the Claude Design project, so future token updates land in the matching file.
 *
 * Webfonts are not loaded here: `@import` inside a runtime-injected style tag is unreliable.
 * The consuming app loads Archivo, Source Sans 3 and IBM Plex Mono itself (see the README).
 */
export const GlobalStyle = createGlobalStyle`
  ${colorsCss}

  ${spacingCss}

  ${typographyCss}

  ${semanticCss}

  ${baseCss}
`;
