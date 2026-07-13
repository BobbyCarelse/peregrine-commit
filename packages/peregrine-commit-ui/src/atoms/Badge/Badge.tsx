import type { HTMLAttributes } from 'react';

import type { BadgeTone } from './Badge.styles';
import { StyledBadge } from './Badge.styles';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  /** Color treatment. @default "neutral" */
  tone?: BadgeTone;
}

export function Badge({ tone = 'neutral', ...rest }: BadgeProps) {
  return <StyledBadge $tone={tone} {...rest} />;
}
