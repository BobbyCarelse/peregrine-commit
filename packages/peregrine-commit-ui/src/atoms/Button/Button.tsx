import type { ButtonHTMLAttributes } from 'react';

import type { ButtonSize, ButtonVariant } from './Button.styles';
import { StyledButton } from './Button.styles';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style. @default "primary" */
  variant?: ButtonVariant;
  /** Size. @default "md" */
  size?: ButtonSize;
}

export function Button({
  variant = 'primary',
  size = 'md',
  type = 'button',
  ...rest
}: ButtonProps) {
  return <StyledButton $variant={variant} $size={size} type={type} {...rest} />;
}
