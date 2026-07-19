import styled from 'styled-components';

import type { SpacingProps } from '../../theme/spacingProps';
import { spacingCss } from '../../theme/spacingProps';

const mobileBreakpoint = '768px';

export const Header = styled.header<{ $spacing: SpacingProps }>`
  position: sticky;
  top: 0;
  z-index: 20;
  background: var(--color-bg);
  border-bottom: 1px solid var(--color-border);

  ${spacingCss}
`;

export const Content = styled.div`
  max-width: var(--container-max);
  margin: 0 auto;
  padding: 16px var(--container-pad);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
`;

export const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const BrandName = styled.span`
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 1.0625rem;
  color: var(--color-text-primary);
`;

export const MenuToggle = styled.button`
  display: none;
  align-items: center;
  justify-content: center;
  width: var(--control-height-md);
  height: var(--control-height-md);
  border-radius: var(--control-radius);
  border: 1.5px solid var(--color-border-strong);
  background: transparent;
  color: var(--color-text-primary);
  cursor: pointer;
  transition: background var(--duration-fast) var(--ease-standard);

  &:hover {
    background: var(--color-accent-soft);
  }

  @media (max-width: ${mobileBreakpoint}) {
    display: inline-flex;
  }
`;

export const NavGroup = styled.div<{ $open: boolean }>`
  display: contents;

  @media (max-width: ${mobileBreakpoint}) {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 4px;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    padding: 12px var(--container-pad) 20px;
    background: var(--color-bg);
    border-bottom: 1px solid var(--color-border);
    overflow: hidden;
    max-height: ${({ $open }) => ($open ? '480px' : '0')};
    opacity: ${({ $open }) => ($open ? 1 : 0)};
    visibility: ${({ $open }) => ($open ? 'visible' : 'hidden')};
    pointer-events: ${({ $open }) => ($open ? 'auto' : 'none')};
    transition:
      max-height var(--duration-base) var(--ease-standard),
      opacity var(--duration-fast) var(--ease-standard),
      visibility var(--duration-base) var(--ease-standard);
  }
`;

export const CtaSlot = styled.div`
  @media (max-width: ${mobileBreakpoint}) {
    margin-top: 8px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 28px;

  @media (max-width: ${mobileBreakpoint}) {
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
  }
`;

export const NavLink = styled.a<{ $active: boolean }>`
  font-family: var(--font-body);
  font-weight: 600;
  font-size: 0.9375rem;
  color: ${({ $active }) => ($active ? 'var(--color-accent)' : 'var(--color-text-secondary)')};
  text-decoration: none;

  &:hover {
    color: var(--color-accent);
    text-decoration: none;
  }

  @media (max-width: ${mobileBreakpoint}) {
    width: 100%;
    padding: 10px 0;
  }
`;
