import { NavBar as BaseNavbar } from '@peregrine-commit/ui';
import type { ThemeMode } from '../../hooks/useThemeMode';

interface NavbarProps {
  mode: ThemeMode;
  toggleMode: () => void;
}

export const Navbar = ({ mode, toggleMode }: NavbarProps) => {
  return (
    <BaseNavbar
      links={[
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About' },
        { href: '/services', label: 'Services' },
        { href: '/resume', label: 'Resume' },
        { href: '/contact', label: 'Contact' },
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
