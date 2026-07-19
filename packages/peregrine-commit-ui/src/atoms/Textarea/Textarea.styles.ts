import styled, { css } from 'styled-components';

import type { SpacingProps } from '../../theme/spacingProps';
import { spacingCss } from '../../theme/spacingProps';

export const Field = styled.div<{ $spacing: SpacingProps }>`
  display: flex;
  flex-direction: column;
  gap: var(--stack-xs);
  font-family: var(--font-body);

  ${spacingCss}
`;

export const Label = styled.label`
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--color-text-primary);
`;

export const StyledTextarea = styled.textarea<{ $hasError: boolean }>`
  padding: 10px var(--inset-sm);
  border-radius: var(--control-radius);
  border: 1.5px solid var(--color-border);
  background: var(--color-surface);
  color: var(--color-text-primary);
  font-size: 0.9375rem;
  font-family: var(--font-body);
  outline: none;
  resize: vertical;
  transition: border-color var(--duration-fast) var(--ease-standard);

  &:focus-visible {
    border-color: var(--color-accent);
    box-shadow: var(--shadow-focus);
  }

  ${({ $hasError }) =>
    $hasError &&
    css`
      border-color: var(--color-danger);

      &:focus-visible {
        border-color: var(--color-danger);
      }
    `}
`;

export const HelpText = styled.span<{ $isError: boolean }>`
  font-size: 0.75rem;
  color: ${({ $isError }) => ($isError ? 'var(--color-danger)' : 'var(--color-text-secondary)')};
`;
