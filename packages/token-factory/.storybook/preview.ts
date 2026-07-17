import type { Decorator, Preview } from '@storybook/html';

import { defaultColorTokensDark, defaultColorTokensLight } from '../src/defaults/colors';
import { defaultFontImports } from '../src/defaults/fonts';
import { defaultSemanticTokens } from '../src/defaults/semantic';
import { defaultSpacingTokens } from '../src/defaults/spacing';
import { defaultTypographyTokens } from '../src/defaults/typography';
import { fontImportsToCss, tokensToCss } from '../src/serialize';

/**
 * Dogfoods the package's own serializer to turn its default token layers into
 * real CSS custom properties, so stories can style elements with `var(--...)`
 * exactly as a consumer would rather than duplicating raw token values.
 */
const tokensCss = [
  fontImportsToCss(defaultFontImports),
  tokensToCss(defaultSpacingTokens),
  tokensToCss(defaultTypographyTokens),
  tokensToCss(defaultSemanticTokens),
  tokensToCss(defaultColorTokensLight),
  tokensToCss(defaultColorTokensDark, { selector: "[data-theme='dark']" }),
].join('\n');

const styleTag = document.createElement('style');
styleTag.textContent = tokensCss;
document.head.appendChild(styleTag);

const withTheme: Decorator = (Story, context) => {
  const mode = context.globals.theme === 'dark' ? 'dark' : 'light';

  const wrapper = document.createElement('div');
  if (mode === 'dark') {
    wrapper.dataset.theme = 'dark';
  }
  wrapper.style.minHeight = '100vh';
  wrapper.style.padding = 'var(--space-8)';
  wrapper.style.background = 'var(--color-bg)';
  wrapper.style.color = 'var(--color-text-primary)';
  wrapper.style.font = 'var(--text-body-md)';

  const result = Story();
  wrapper.append(result instanceof Node ? result : document.createTextNode(String(result)));
  return wrapper;
};

const preview: Preview = {
  parameters: {
    layout: 'fullscreen',
  },
  globalTypes: {
    theme: {
      description: 'Peregrine Commit color mode',
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: [
          { value: 'light', title: 'Light' },
          { value: 'dark', title: 'Dark' },
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [withTheme],
};

export default preview;
