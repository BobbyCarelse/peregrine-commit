import type { ReactNode } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import { GlobalStyle } from './tokens.css';
import { theme } from './theme';

export interface PeregrineThemeProviderProps {
  children: ReactNode;
  /** Color mode. @default "light" */
  mode?: 'light' | 'dark';
}

export function PeregrineThemeProvider({ children, mode = 'light' }: PeregrineThemeProviderProps) {
  return (
    <StyledThemeProvider theme={theme}>
      <GlobalStyle />
      <div data-theme={mode === 'dark' ? 'dark' : undefined}>{children}</div>
    </StyledThemeProvider>
  );
}
