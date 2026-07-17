import type { ElementType, HTMLAttributes } from 'react';

import type { FontWeightProps } from '../../theme/fontWeightProps';
import type { SpacingProps } from '../../theme/spacingProps';
import { extractSpacingProps } from '../../theme/spacingProps';
import type { TextColor, TextSize, TextVariant } from './Text.styles';
import { StyledText } from './Text.styles';

export interface TextProps
  extends Omit<HTMLAttributes<HTMLParagraphElement>, 'style'>,
    SpacingProps,
    FontWeightProps {
  /** Which type scale to draw from. @default "body" */
  variant?: TextVariant;
  /** @default "md" */
  size?: TextSize;
  /** @default "primary" */
  color?: TextColor;
  /** Underlying element to render, e.g. "span" for inline text. @default "p" */
  as?: ElementType;
}

export function Text({
  variant = 'body',
  size = 'md',
  color = 'primary',
  as = 'p',
  weight,
  ...props
}: TextProps) {
  const [spacing, rest] = extractSpacingProps(props);
  return (
    <StyledText
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
