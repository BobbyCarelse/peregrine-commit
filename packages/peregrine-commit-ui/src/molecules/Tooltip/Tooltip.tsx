import type { ReactElement, ReactNode } from 'react';
import { cloneElement, isValidElement, useId } from 'react';

import { Bubble, Wrapper } from './Tooltip.styles';

export interface TooltipProps {
  label: string;
  /** A single focusable/hoverable element the tooltip attaches to. */
  children: ReactNode;
}

export function Tooltip({ label, children }: TooltipProps) {
  const tooltipId = useId();

  const trigger = isValidElement(children)
    ? cloneElement(children as ReactElement<{ 'aria-describedby'?: string }>, {
        'aria-describedby': tooltipId,
      })
    : children;

  return (
    <Wrapper>
      {trigger}
      <Bubble role="tooltip" id={tooltipId}>
        {label}
      </Bubble>
    </Wrapper>
  );
}
