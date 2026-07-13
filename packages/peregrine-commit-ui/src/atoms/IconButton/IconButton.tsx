import type { LucideIcon } from 'lucide-react';
import type { ButtonHTMLAttributes } from 'react';

import type { IconButtonSize, IconButtonVariant } from './IconButton.styles';
import { sizeDimensions, StyledIconButton } from './IconButton.styles';

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Icon component from `lucide-react`, e.g. `ArrowUpRight`. */
  icon: LucideIcon;
  /** Accessible label, also used as the native tooltip. */
  label: string;
  /** Visual style. @default "secondary" */
  variant?: IconButtonVariant;
  /** Size. @default "md" */
  size?: IconButtonSize;
}

export function IconButton({
  icon: Icon,
  label,
  variant = 'secondary',
  size = 'md',
  type = 'button',
  ...rest
}: IconButtonProps) {
  return (
    <StyledIconButton
      type={type}
      aria-label={label}
      title={label}
      $variant={variant}
      $size={size}
      {...rest}
    >
      <Icon size={sizeDimensions[size] * 0.45} aria-hidden="true" />
    </StyledIconButton>
  );
}
