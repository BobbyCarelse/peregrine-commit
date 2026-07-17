import styled, { css } from 'styled-components';

import type { SpacingProps } from '../../theme/spacingProps';
import { spacingCss } from '../../theme/spacingProps';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

const sizeStyles: Record<ButtonSize, ReturnType<typeof css>> = {
  sm: css`
    height: var(--control-height-sm);
    padding: 0 14px;
    font-size: 0.8125rem;
    gap: var(--inline-xs);
  `,
  md: css`
    height: var(--control-height-md);
    padding: 0 var(--control-pad-x);
    font-size: 0.9375rem;
    gap: var(--inline-sm);
  `,
  lg: css`
    height: var(--control-height-lg);
    padding: 0 28px;
    font-size: 1.0625rem;
    gap: var(--inline-sm);
  `,
};

const variantStyles: Record<ButtonVariant, ReturnType<typeof css>> = {
  primary: css`
    background: var(--color-accent);
    color: var(--color-text-on-accent);
    border: 1.5px solid var(--color-accent);

    &:hover:not(:disabled) {
      background: var(--color-accent-hover);
      border-color: var(--color-accent-hover);
    }

    &:active:not(:disabled) {
      background: var(--color-accent-active);
      border-color: var(--color-accent-active);
    }
  `,
  secondary: css`
    background: transparent;
    color: var(--color-text-primary);
    border: 1.5px solid var(--color-border-strong);

    &:hover:not(:disabled) {
      background: var(--color-accent-soft);
      border-color: var(--color-accent);
    }
  `,
  ghost: css`
    background: transparent;
    color: var(--color-accent);
    border: 1.5px solid transparent;

    &:hover:not(:disabled) {
      background: var(--color-accent-soft);
    }
  `,
};

export const StyledButton = styled.button<{
  $variant: ButtonVariant;
  $size: ButtonSize;
  $spacing: SpacingProps;
}>`
  font-family: var(--font-body);
  font-weight: 600;
  border-radius: var(--control-radius);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition:
    background var(--duration-fast) var(--ease-standard),
    border-color var(--duration-fast) var(--ease-standard);

  ${({ $size }) => sizeStyles[$size]}
  ${({ $variant }) => variantStyles[$variant]}
  ${spacingCss}

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
