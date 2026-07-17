import styled from 'styled-components';

import type { SpacingProps } from '../../theme/spacingProps';
import { spacingCss } from '../../theme/spacingProps';

export const Label = styled.label<{ $spacing: SpacingProps }>`
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-body);
  cursor: pointer;

  ${spacingCss}
`;

export const StyledCheckbox = styled.input`
  width: 18px;
  height: 18px;
  accent-color: var(--color-accent);
  cursor: pointer;
`;

export const LabelText = styled.span`
  font-size: 0.9375rem;
  color: var(--color-text-primary);
`;
