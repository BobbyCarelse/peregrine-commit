import styled, { css } from 'styled-components';

export type SectionHeadingAlign = 'left' | 'center';

export const Wrapper = styled.div<{ $align: SectionHeadingAlign }>`
  display: flex;
  flex-direction: column;
  gap: 12px;
  text-align: ${({ $align }) => $align};
  max-width: ${({ $align }) => ($align === 'center' ? '640px' : '560px')};

  ${({ $align }) =>
    $align === 'center' &&
    css`
      margin-inline: auto;
    `}
`;

export const Eyebrow = styled.span`
  font-family: var(--font-body);
  font-weight: 700;
  font-size: 0.75rem;
  letter-spacing: var(--tracking-wider);
  text-transform: uppercase;
  color: var(--color-accent);
`;

export const Title = styled.h2`
  font-family: var(--font-display);
  font-weight: 800;
  font-size: clamp(1.75rem, 1.4rem + 1.5vw, 2.5rem);
  line-height: 1.1;
  color: var(--color-text-primary);
  margin: 0;
`;

export const Description = styled.p`
  font-family: var(--font-body);
  font-size: 1.0625rem;
  line-height: 1.6;
  color: var(--color-text-secondary);
  margin: 0;
`;
