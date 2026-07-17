import type { ButtonHTMLAttributes } from 'react';

import type { SpacingProps } from '../../theme/spacingProps';
import { extractSpacingProps } from '../../theme/spacingProps';
import type { ButtonSize, ButtonVariant } from './Button.styles';
import { StyledButton } from './Button.styles';

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'style'>, SpacingProps {
  /** Visual style. @default "primary" */
  variant?: ButtonVariant;
  /** Size. @default "md" */
  size?: ButtonSize;
}

export function Button({
  variant = 'primary',
  size = 'md',
  type = 'button',
  ...props
}: ButtonProps) {
  const [spacing, rest] = extractSpacingProps(props);
  return <StyledButton $variant={variant} $size={size} $spacing={spacing} type={type} {...rest} />;
}
