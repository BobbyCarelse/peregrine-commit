import type { HTMLAttributes } from 'react';

import type { SpacingProps } from '../../theme/spacingProps';
import { extractSpacingProps } from '../../theme/spacingProps';
import type { BadgeTone } from './Badge.styles';
import { StyledBadge } from './Badge.styles';

export interface BadgeProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'style'>, SpacingProps {
  /** Color treatment. @default "neutral" */
  tone?: BadgeTone;
}

export function Badge({ tone = 'neutral', ...props }: BadgeProps) {
  const [spacing, rest] = extractSpacingProps(props);
  return <StyledBadge $tone={tone} $spacing={spacing} {...rest} />;
}
