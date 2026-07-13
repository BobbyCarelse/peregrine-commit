import type { HTMLAttributes } from 'react';

import { Button } from '../../atoms/Button';
import { Brand, BrandName, Content, Header, Nav, NavLink } from './NavBar.styles';

export interface NavBarLink {
  href: string;
  label: string;
}

export interface NavBarProps extends Omit<HTMLAttributes<HTMLElement>, 'onClick'> {
  links?: NavBarLink[];
  activeHref?: string;
  onNavigate?: (href: string) => void;
  /** @default "Start a project" */
  ctaLabel?: string;
  onCta?: () => void;
}

export function NavBar({
  links = [],
  activeHref,
  onNavigate,
  ctaLabel = 'Start a project',
  onCta,
  ...rest
}: NavBarProps) {
  return (
    <Header {...rest}>
      <Content>
        <Brand>
          <svg viewBox="0 0 120 120" width={26} height={26} aria-hidden="true">
            <path
              d="M18,98 L60,22 L102,98"
              fill="none"
              stroke="var(--color-text-primary)"
              strokeWidth={22}
              strokeLinecap="square"
              strokeLinejoin="miter"
            />
            <line
              x1={60}
              y1={22}
              x2={60}
              y2={4}
              stroke="var(--color-accent)"
              strokeWidth={8}
              strokeLinecap="round"
            />
            <circle cx={60} cy={22} r={11} fill="var(--color-accent)" />
          </svg>
          <BrandName>Peregrine Commit</BrandName>
        </Brand>

        <Nav aria-label="Primary">
          {links.map((link) => (
            <NavLink
              key={link.href}
              href={link.href}
              $active={activeHref === link.href}
              aria-current={activeHref === link.href ? 'page' : undefined}
              onClick={(event) => {
                if (onNavigate) {
                  event.preventDefault();
                  onNavigate(link.href);
                }
              }}
            >
              {link.label}
            </NavLink>
          ))}
        </Nav>

        <Button variant="primary" size="sm" onClick={onCta}>
          {ctaLabel}
        </Button>
      </Content>
    </Header>
  );
}
