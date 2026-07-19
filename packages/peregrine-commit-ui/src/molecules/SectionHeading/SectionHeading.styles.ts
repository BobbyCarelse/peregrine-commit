import styled, { css } from 'styled-components';

import type { SpaceToken, SpacingProps } from '../../theme/spacingProps';
import { spacingCss } from '../../theme/spacingProps';

export const Wrapper = styled.div<{
  $centered: boolean;
  $spacing: SpacingProps;
  gap?: SpaceToken;
}>`
  display: flex;
  flex-direction: column;
  gap: ${({ gap }) => (gap ? `var(--${gap})` : 'var(--space-3)')};
  text-align: ${({ $centered }) => ($centered ? 'center' : 'left')};
  max-width: ${({ $centered }) => ($centered ? '640px' : '560px')};

  ${({ $centered }) =>
    $centered &&
    css`
      margin-inline: auto;
    `}

  ${spacingCss}
`;
