import type { InputHTMLAttributes } from 'react';

import type { SwitchSize } from './Switch.styles';
import { HiddenInput, Label, LabelText, Thumb, Track } from './Switch.styles';

export interface SwitchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  label: string;
  /** @default "md" */
  size?: SwitchSize;
}

export function Switch({ label, size = 'md', ...rest }: SwitchProps) {
  return (
    <Label>
      <HiddenInput type="checkbox" role="switch" {...rest} />
      <Track $size={size}>
        <Thumb $size={size} />
      </Track>
      <LabelText>{label}</LabelText>
    </Label>
  );
}
