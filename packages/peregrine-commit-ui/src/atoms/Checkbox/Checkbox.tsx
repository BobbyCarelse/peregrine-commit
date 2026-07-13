import type { InputHTMLAttributes } from 'react';

import { Label, LabelText, StyledCheckbox } from './Checkbox.styles';

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: string;
}

export function Checkbox({ label, ...rest }: CheckboxProps) {
  return (
    <Label>
      <StyledCheckbox type="checkbox" {...rest} />
      <LabelText>{label}</LabelText>
    </Label>
  );
}
