import styled from 'styled-components';

import type { SpacingProps } from '../../theme/spacingProps';
import { spacingCss } from '../../theme/spacingProps';

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

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 28px;
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
`;
