import styled, { css } from 'styled-components';

import type { SpacingProps } from '../../theme/spacingProps';
import { spacingCss } from '../../theme/spacingProps';

export type IconButtonVariant = 'primary' | 'secondary';
export type IconButtonSize = 'sm' | 'md' | 'lg';

export const sizeDimensions: Record<IconButtonSize, number> = {
  sm: 32,
  md: 40,
  lg: 48,
};

const sizeStyles: Record<IconButtonSize, ReturnType<typeof css>> = {
  sm: css`
    width: var(--control-height-sm);
    height: var(--control-height-sm);
  `,
  md: css`
    width: var(--control-height-md);
    height: var(--control-height-md);
  `,
  lg: css`
    width: var(--control-height-lg);
    height: var(--control-height-lg);
  `,
};

const variantStyles: Record<IconButtonVariant, ReturnType<typeof css>> = {
  primary: css`
    background: var(--color-accent);
    border: 1.5px solid var(--color-accent);
    color: var(--color-text-on-accent);

    &:hover:not(:disabled) {
      background: var(--color-accent-hover);
      border-color: var(--color-accent-hover);
    }
  `,
  secondary: css`
    background: transparent;
    border: 1.5px solid var(--color-border-strong);
    color: var(--color-text-primary);

    &:hover:not(:disabled) {
      background: var(--color-accent-soft);
    }
  `,
};

export const StyledIconButton = styled.button<{
  $variant: IconButtonVariant;
  $size: IconButtonSize;
  $spacing: SpacingProps;
}>`
  border-radius: var(--control-radius);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background var(--duration-fast) var(--ease-standard);

  ${({ $size }) => sizeStyles[$size]}
  ${({ $variant }) => variantStyles[$variant]}
  ${spacingCss}

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
