import { NavBar as BaseNavbar, Switch } from '@peregrine-commit/ui';
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
        mode === 'dark' ? (
          <span onClick={toggleMode} style={{ cursor: 'pointer' }}>
            &#127766;
          </span>
        ) : (
          <span onClick={toggleMode} style={{ cursor: 'pointer' }}>
            &#127762;
          </span>
        )
      }
    />
  );
};
