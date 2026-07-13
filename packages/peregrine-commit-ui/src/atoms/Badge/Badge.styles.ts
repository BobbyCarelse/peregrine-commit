import styled, { css } from 'styled-components';

export type BadgeTone = 'neutral' | 'accent' | 'success';

const toneStyles: Record<BadgeTone, ReturnType<typeof css>> = {
  neutral: css`
    background: var(--color-surface-sunken);
    color: var(--color-text-secondary);
  `,
  accent: css`
    background: var(--color-accent-soft);
    color: var(--color-accent);
  `,
  success: css`
    background: color-mix(in oklch, var(--color-success) 16%, transparent);
    color: var(--color-success);
  `,
};

export const StyledBadge = styled.span<{ $tone: BadgeTone }>`
  display: inline-flex;
  align-items: center;
  padding: 3px 10px;
  border-radius: var(--radius-full);
  font-family: var(--font-body);
  font-weight: 600;
  font-size: 0.75rem;
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;

  ${({ $tone }) => toneStyles[$tone]}
`;
