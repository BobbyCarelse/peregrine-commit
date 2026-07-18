import styled, { css } from 'styled-components';

import type { SpacingProps } from '../../theme/spacingProps';
import { spacingCss } from '../../theme/spacingProps';

export const Wrapper = styled.div<{ $centered: boolean; $spacing: SpacingProps }>`
  display: flex;
  flex-direction: column;
  gap: 12px;
  text-align: ${({ $centered }) => ($centered ? 'center' : 'left')};
  max-width: ${({ $centered }) => ($centered ? '640px' : '560px')};

  ${({ $centered }) =>
    $centered &&
    css`
      margin-inline: auto;
    `}

  ${spacingCss}
`;
