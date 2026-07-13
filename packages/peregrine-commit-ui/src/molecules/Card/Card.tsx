import type { HTMLAttributes } from 'react';

import { StyledCard } from './Card.styles';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /** Adds hover/focus elevation and a pointer cursor for clickable cards. @default false */
  interactive?: boolean;
  /** CSS padding value. @default "24px" */
  padding?: string;
}

export function Card({ interactive = false, padding = '24px', ...rest }: CardProps) {
  return (
    <StyledCard
      $interactive={interactive}
      $padding={padding}
      tabIndex={interactive ? 0 : undefined}
      {...rest}
    />
  );
}
