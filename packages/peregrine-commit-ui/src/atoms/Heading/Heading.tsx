import type { ElementType, HTMLAttributes } from 'react';

import type { FontWeightProps } from '../../theme/fontWeightProps';
import type { SpacingProps } from '../../theme/spacingProps';
import { extractSpacingProps } from '../../theme/spacingProps';
import type { HeadingColor, HeadingSize, HeadingVariant } from './Heading.styles';
import { StyledHeading } from './Heading.styles';

export interface HeadingProps
  extends Omit<HTMLAttributes<HTMLHeadingElement>, 'style'>,
    SpacingProps,
    FontWeightProps {
  /** Which type scale to draw from. @default "display" */
  variant?: HeadingVariant;
  /** @default "md" */
  size?: HeadingSize;
  /** @default "primary" */
  color?: HeadingColor;
  /** Underlying heading element to render, so visual size stays independent of semantic level. @default "h2" */
  as?: ElementType;
}

export function Heading({
  variant = 'display',
  size = 'md',
  color = 'primary',
  as = 'h2',
  weight,
  ...props
}: HeadingProps) {
  const [spacing, rest] = extractSpacingProps(props);
  return (
    <StyledHeading
      as={as}
      $variant={variant}
      $size={size}
      $color={color}
      $weight={weight}
      $spacing={spacing}
      {...rest}
    />
  );
}
