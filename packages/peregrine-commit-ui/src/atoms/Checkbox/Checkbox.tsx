import type { InputHTMLAttributes } from 'react';

import type { SpacingProps } from '../../theme/spacingProps';
import { extractSpacingProps } from '../../theme/spacingProps';
import { Label, LabelText, StyledCheckbox } from './Checkbox.styles';

export interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'style'>, SpacingProps {
  label: string;
}

export function Checkbox({ label, ...props }: CheckboxProps) {
  const [spacing, rest] = extractSpacingProps(props);
  return (
    <Label $spacing={spacing}>
      <StyledCheckbox type="checkbox" {...rest} />
      <LabelText>{label}</LabelText>
    </Label>
  );
}
