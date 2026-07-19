import { NavBar as BaseNavbar } from '@peregrine-commit/ui';
import { useLocation, useNavigate } from 'react-router';
import type { ThemeMode } from '../../hooks/useThemeMode';

interface NavbarProps {
  mode: ThemeMode;
  toggleMode: () => void;
}

export const Navbar = ({ mode, toggleMode }: NavbarProps) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <BaseNavbar
      activeHref={pathname}
      onNavigate={(href) => navigate(href)}
      links={[
        { href: '/', label: 'Home' },
        { href: '/explore', label: 'Explore' },
        { href: '/experience', label: 'Experience' },
        { href: '/resume', label: 'Resume' },
      ]}
      ctaElement={
        <button
          type="button"
          onClick={toggleMode}
          aria-label={mode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          style={{ cursor: 'pointer', background: 'none', border: 'none', padding: 0 }}
        >
          {mode === 'dark' ? '\u{1F31E}' : '\u{1F312}'}
        </button>
      }
    />
  );
};
