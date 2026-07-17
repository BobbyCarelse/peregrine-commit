import type { HTMLAttributes } from 'react';

import { CheckCircle2, Info, Sparkle } from '../../icons';
import type { SpacingProps } from '../../theme/spacingProps';
import { extractSpacingProps } from '../../theme/spacingProps';
import type { CalloutTone } from './Callout.styles';
import { IconSlot, StyledCallout, toneIconColor } from './Callout.styles';

const toneIcon = {
  info: Info,
  accent: Sparkle,
  success: CheckCircle2,
} as const;

export interface CalloutProps extends Omit<HTMLAttributes<HTMLDivElement>, 'style'>, SpacingProps {
  /** @default "info" */
  tone?: CalloutTone;
}

export function Callout({ tone = 'info', children, ...props }: CalloutProps) {
  const Icon = toneIcon[tone];
  const [spacing, rest] = extractSpacingProps(props);

  return (
    <StyledCallout $tone={tone} $spacing={spacing} role="note" {...rest}>
      <IconSlot $color={toneIconColor[tone]}>
        <Icon size={20} aria-hidden="true" />
      </IconSlot>
      <div>{children}</div>
    </StyledCallout>
  );
}
