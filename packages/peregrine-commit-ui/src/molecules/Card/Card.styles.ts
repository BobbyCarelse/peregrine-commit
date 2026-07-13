import styled, { css } from 'styled-components';

export const StyledCard = styled.div<{ $interactive: boolean; $padding: string }>`
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: ${({ $padding }) => $padding};
  box-shadow: none;
  transition: box-shadow var(--duration-fast) var(--ease-standard);

  ${({ $interactive }) =>
    $interactive &&
    css`
      cursor: pointer;

      &:hover,
      &:focus-visible {
        box-shadow: var(--shadow-sm);
      }
    `}
`;
