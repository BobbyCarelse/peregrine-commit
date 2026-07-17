import styled, { css } from 'styled-components';

import type { SpacingProps } from '../../theme/spacingProps';
import { spacingCss } from '../../theme/spacingProps';

export type SectionHeadingAlign = 'left' | 'center';

export const Wrapper = styled.div<{ $align: SectionHeadingAlign; $spacing: SpacingProps }>`
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

  ${spacingCss}
`;
