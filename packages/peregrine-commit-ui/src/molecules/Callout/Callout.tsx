import type { HTMLAttributes } from 'react';

import { CheckCircle2, Info, Sparkle } from '../../icons';
import type { CalloutTone } from './Callout.styles';
import { IconSlot, StyledCallout, toneIconColor } from './Callout.styles';

const toneIcon = {
  info: Info,
  accent: Sparkle,
  success: CheckCircle2,
} as const;

export interface CalloutProps extends HTMLAttributes<HTMLDivElement> {
  /** @default "info" */
  tone?: CalloutTone;
}

export function Callout({ tone = 'info', children, ...rest }: CalloutProps) {
  const Icon = toneIcon[tone];

  return (
    <StyledCallout $tone={tone} role="note" {...rest}>
      <IconSlot $color={toneIconColor[tone]}>
        <Icon size={20} aria-hidden="true" />
      </IconSlot>
      <div>{children}</div>
    </StyledCallout>
  );
}
