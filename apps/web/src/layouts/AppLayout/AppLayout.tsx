import { type ReactNode } from 'react';
import { Navbar } from '../../components';
import { Box, Footer, PeregrineThemeProvider } from '@peregrine-commit/ui';
import { useThemeMode } from '../../hooks/useThemeMode';

interface AppLayoutProps {
  children: ReactNode;
}

export const AppLayout = ({ children }: AppLayoutProps) => {
  const { mode, toggleMode } = useThemeMode();

  return (
    <PeregrineThemeProvider mode={mode}>
      <Box background="bg">
        <Navbar mode={mode} toggleMode={toggleMode} />
        {children}
        <Footer />
      </Box>
    </PeregrineThemeProvider>
  );
};
