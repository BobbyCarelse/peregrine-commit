import type { HTMLAttributes } from 'react';

import type { SpacingProps } from '../../theme/spacingProps';
import { extractSpacingProps } from '../../theme/spacingProps';
import { StyledCard } from './Card.styles';

export interface CardProps extends Omit<HTMLAttributes<HTMLDivElement>, 'style'>, SpacingProps {
  /** Adds hover/focus elevation and a pointer cursor for clickable cards. @default false */
  interactive?: boolean;
}

export function Card({ interactive = false, p = 'space-6', ...props }: CardProps) {
  const [restSpacing, rest] = extractSpacingProps(props);
  const spacing = { p, ...restSpacing };

  return (
    <StyledCard
      $interactive={interactive}
      $spacing={spacing}
      tabIndex={interactive ? 0 : undefined}
      {...rest}
    />
  );
}
