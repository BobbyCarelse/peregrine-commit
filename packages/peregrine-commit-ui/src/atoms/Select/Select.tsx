import type { SelectHTMLAttributes } from 'react';
import { useId } from 'react';

import { Label, LabelText, StyledSelect } from './Select.styles';

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: SelectOption[];
}

export function Select({ label, options, id, ...rest }: SelectProps) {
  const generatedId = useId();
  const selectId = id ?? generatedId;

  return (
    <Label htmlFor={selectId}>
      {label && <LabelText>{label}</LabelText>}
      <StyledSelect id={selectId} {...rest}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </StyledSelect>
    </Label>
  );
}
