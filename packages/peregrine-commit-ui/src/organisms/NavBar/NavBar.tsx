import type { HTMLAttributes, ReactNode } from 'react';
import { useState } from 'react';

import { Button } from '../../atoms/Button';
import { Menu, X } from '../../icons';
import type { SpacingProps } from '../../theme/spacingProps';
import { extractSpacingProps } from '../../theme/spacingProps';
import {
  Brand,
  BrandName,
  Content,
  CtaSlot,
  Header,
  MenuToggle,
  Nav,
  NavGroup,
  NavLink,
} from './NavBar.styles';

export interface NavBarLink {
  href: string;
  label: string;
}

export interface NavBarProps
  extends Omit<HTMLAttributes<HTMLElement>, 'onClick' | 'style'>, SpacingProps {
  links?: NavBarLink[];
  activeHref?: string;
  onNavigate?: (href: string) => void;
  ctaLabel?: string;
  onCta?: () => void;
  ctaElement?: ReactNode;
}

export function NavBar({
  links = [],
  activeHref,
  onNavigate,
  ctaLabel,
  onCta,
  ctaElement,
  ...props
}: NavBarProps) {
  const [spacing, rest] = extractSpacingProps(props);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Header $spacing={spacing} {...rest}>
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

        <MenuToggle
          type="button"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          aria-controls="navbar-menu"
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </MenuToggle>

        <NavGroup id="navbar-menu" $open={isOpen}>
          <Nav aria-label="Primary">
            {links.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                $active={activeHref === link.href}
                aria-current={activeHref === link.href ? 'page' : undefined}
                onClick={(event) => {
                  setIsOpen(false);
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

          {ctaElement ? (
            <CtaSlot>{ctaElement}</CtaSlot>
          ) : ctaLabel && onCta ? (
            <CtaSlot>
              <Button variant="primary" size="sm" onClick={onCta}>
                {ctaLabel}
              </Button>
            </CtaSlot>
          ) : null}
        </NavGroup>
      </Content>
    </Header>
  );
}
