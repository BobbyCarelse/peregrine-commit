import styled, { css } from 'styled-components';

export type IconButtonVariant = 'primary' | 'secondary';
export type IconButtonSize = 'sm' | 'md' | 'lg';

export const sizeDimensions: Record<IconButtonSize, number> = {
  sm: 32,
  md: 40,
  lg: 48,
};

const sizeStyles: Record<IconButtonSize, ReturnType<typeof css>> = {
  sm: css`
    width: ${sizeDimensions.sm}px;
    height: ${sizeDimensions.sm}px;
  `,
  md: css`
    width: ${sizeDimensions.md}px;
    height: ${sizeDimensions.md}px;
  `,
  lg: css`
    width: ${sizeDimensions.lg}px;
    height: ${sizeDimensions.lg}px;
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
}>`
  border-radius: var(--radius-md);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background var(--duration-fast) var(--ease-standard);

  ${({ $size }) => sizeStyles[$size]}
  ${({ $variant }) => variantStyles[$variant]}

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
