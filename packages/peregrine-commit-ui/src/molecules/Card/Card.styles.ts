import styled, { css } from 'styled-components';

import type { SpacingProps } from '../../theme/spacingProps';
import { spacingCss } from '../../theme/spacingProps';

export const StyledCard = styled.div<{ $interactive: boolean; $spacing: SpacingProps }>`
  background: var(--color-surface);
  border: var(--surface-border);
  border-radius: var(--surface-radius);
  box-shadow: none;
  transition: box-shadow var(--duration-fast) var(--ease-standard);

  ${spacingCss}

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
