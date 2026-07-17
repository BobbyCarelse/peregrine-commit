import styled from 'styled-components';

import type { SpacingProps } from '../../theme/spacingProps';
import { spacingCss } from '../../theme/spacingProps';

export const Label = styled.label<{ $spacing: SpacingProps }>`
  display: flex;
  flex-direction: column;
  gap: var(--stack-xs);
  font-family: var(--font-body);

  ${spacingCss}
`;

export const LabelText = styled.span`
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--color-text-primary);
`;

export const StyledSelect = styled.select`
  height: var(--control-height-md);
  box-sizing: border-box;
  padding: 0 var(--inset-sm);
  border-radius: var(--control-radius);
  border: 1.5px solid var(--color-border);
  background: var(--color-surface);
  color: var(--color-text-primary);
  font-size: 0.9375rem;
  font-family: var(--font-body);
  outline: none;
  transition: border-color var(--duration-fast) var(--ease-standard);

  &:focus-visible {
    border-color: var(--color-accent);
    box-shadow: var(--shadow-focus);
  }
`;
