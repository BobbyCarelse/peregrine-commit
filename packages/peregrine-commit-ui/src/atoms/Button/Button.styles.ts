import styled, { css } from 'styled-components';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

const sizeStyles: Record<ButtonSize, ReturnType<typeof css>> = {
  sm: css`
    padding: 6px 14px;
    font-size: 0.8125rem;
    gap: 6px;
  `,
  md: css`
    padding: 10px 20px;
    font-size: 0.9375rem;
    gap: 8px;
  `,
  lg: css`
    padding: 14px 28px;
    font-size: 1.0625rem;
    gap: 10px;
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

export const StyledButton = styled.button<{ $variant: ButtonVariant; $size: ButtonSize }>`
  font-family: var(--font-body);
  font-weight: 600;
  border-radius: var(--radius-md);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition:
    background var(--duration-fast) var(--ease-standard),
    border-color var(--duration-fast) var(--ease-standard);

  ${({ $size }) => sizeStyles[$size]}
  ${({ $variant }) => variantStyles[$variant]}

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
