import styled from 'styled-components';

export const StyledFooter = styled.footer`
  border-top: 1px solid var(--color-border);
  background: var(--color-bg);
`;

export const Content = styled.div`
  max-width: var(--container-max);
  margin: 0 auto;
  padding: 32px var(--container-pad);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
`;

export const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Copyright = styled.span`
  font-family: var(--font-body);
  font-size: 0.8125rem;
  color: var(--color-text-secondary);
`;

export const Links = styled.div`
  display: flex;
  gap: 20px;
`;

export const FooterLink = styled.a`
  font-family: var(--font-body);
  font-size: 0.8125rem;
  color: var(--color-text-secondary);

  &:hover {
    color: var(--color-accent);
  }
`;
