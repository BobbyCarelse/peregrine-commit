import type { Decorator, Preview } from '@storybook/react';

import { PeregrineThemeProvider } from '../src/theme/ThemeProvider';

const withTheme: Decorator = (Story, context) => {
  const mode = context.globals.theme === 'dark' ? 'dark' : 'light';
  return (
    <PeregrineThemeProvider mode={mode}>
      <div style={{ padding: '2rem' }}>
        <Story />
      </div>
    </PeregrineThemeProvider>
  );
};

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
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
