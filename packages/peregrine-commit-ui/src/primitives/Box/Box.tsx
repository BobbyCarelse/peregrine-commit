import type { HTMLAttributes } from 'react';

import type { SpacingProps } from '../../theme/spacingProps';
import { extractSpacingProps } from '../../theme/spacingProps';
import type {
  BoxAlignItems,
  BoxBackground,
  BoxFlexDirection,
  BoxFlexWrap,
  BoxGap,
  BoxJustifyContent,
} from './Box.styles';
import { StyledBox } from './Box.styles';

export interface BoxProps extends Omit<HTMLAttributes<HTMLDivElement>, 'style'>, SpacingProps {
  /** Switches `display` to `flex`. Leave unset for a standard block box. */
  flex?: boolean;
  /** Gap between children, from the shared spacing scale. Only takes effect alongside `flex`. */
  gap?: BoxGap;
  /** `align-items`. Only takes effect alongside `flex`. */
  alignItems?: BoxAlignItems;
  /** `justify-content`. Only takes effect alongside `flex`. */
  justifyContent?: BoxJustifyContent;
  /** `flex-direction`. Only takes effect alongside `flex`. */
  flexDirection?: BoxFlexDirection;
  /** `flex-wrap`. Only takes effect alongside `flex`. */
  flexWrap?: BoxFlexWrap;
  /** Background color, from the token factory's background/surface color scale. */
  background?: BoxBackground;
}

export function Box({
  flex,
  gap,
  alignItems,
  justifyContent,
  flexDirection,
  flexWrap,
  background,
  ...props
}: BoxProps) {
  const [spacing, rest] = extractSpacingProps(props);
  return (
    <StyledBox
      $flex={flex}
      $gap={gap}
      $alignItems={alignItems}
      $justifyContent={justifyContent}
      $flexDirection={flexDirection}
      $flexWrap={flexWrap}
      $background={background}
      $spacing={spacing}
      {...rest}
    />
  );
}
