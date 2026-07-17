import type { InputHTMLAttributes } from 'react';

import type { SpacingProps } from '../../theme/spacingProps';
import { extractSpacingProps } from '../../theme/spacingProps';
import type { SwitchSize } from './Switch.styles';
import { HiddenInput, Label, LabelText, Thumb, Track } from './Switch.styles';

export interface SwitchProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'size' | 'style'>,
    SpacingProps {
  label: string;
  /** @default "md" */
  size?: SwitchSize;
}

export function Switch({ label, size = 'md', ...props }: SwitchProps) {
  const [spacing, rest] = extractSpacingProps(props);
  return (
    <Label $spacing={spacing}>
      <HiddenInput type="checkbox" role="switch" {...rest} />
      <Track $size={size}>
        <Thumb $size={size} />
      </Track>
      <LabelText>{label}</LabelText>
    </Label>
  );
}
