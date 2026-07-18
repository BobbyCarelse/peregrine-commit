import { Footer, PeregrineThemeProvider } from '@peregrine-commit/ui';
import { type ReactNode } from 'react';
import { Navbar } from '../../components';
import { useThemeMode } from '../../hooks/useThemeMode';

interface AppLayoutProps {
  children: ReactNode;
}

export const AppLayout = ({ children }: AppLayoutProps) => {
  const { mode, toggleMode } = useThemeMode();

  return (
    <PeregrineThemeProvider mode={mode}>
      <Navbar mode={mode} toggleMode={toggleMode} />
      {children}
      <Footer />
    </PeregrineThemeProvider>
  );
};
