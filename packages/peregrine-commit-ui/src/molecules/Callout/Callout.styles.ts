import styled, { css } from 'styled-components';

export type CalloutTone = 'info' | 'accent' | 'success';

const toneBorder: Record<CalloutTone, ReturnType<typeof css>> = {
  info: css`
    border-color: var(--color-border);
  `,
  accent: css`
    border-color: var(--color-accent);
  `,
  success: css`
    border-color: var(--color-success);
  `,
};

export const toneIconColor: Record<CalloutTone, string> = {
  info: 'var(--color-text-secondary)',
  accent: 'var(--color-accent)',
  success: 'var(--color-success)',
};

export const StyledCallout = styled.div<{ $tone: CalloutTone }>`
  display: flex;
  gap: 12px;
  padding: 14px 16px;
  border-radius: var(--radius-md);
  border-width: 1.5px;
  border-style: solid;
  background: var(--color-surface);
  font-family: var(--font-body);
  font-size: 0.9375rem;
  color: var(--color-text-primary);

  ${({ $tone }) => toneBorder[$tone]}
`;

export const IconSlot = styled.span<{ $color: string }>`
  flex-shrink: 0;
  color: ${({ $color }) => $color};
`;
