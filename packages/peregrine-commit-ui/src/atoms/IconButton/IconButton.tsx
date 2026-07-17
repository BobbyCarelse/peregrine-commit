import type { LucideIcon } from 'lucide-react';
import type { ButtonHTMLAttributes } from 'react';

import type { SpacingProps } from '../../theme/spacingProps';
import { extractSpacingProps } from '../../theme/spacingProps';
import type { IconButtonSize, IconButtonVariant } from './IconButton.styles';
import { sizeDimensions, StyledIconButton } from './IconButton.styles';

export interface IconButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'style'>,
    SpacingProps {
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
  ...props
}: IconButtonProps) {
  const [spacing, rest] = extractSpacingProps(props);
  return (
    <StyledIconButton
      type={type}
      aria-label={label}
      title={label}
      $variant={variant}
      $size={size}
      $spacing={spacing}
      {...rest}
    >
      <Icon size={sizeDimensions[size] * 0.45} aria-hidden="true" />
    </StyledIconButton>
  );
}
