import type { SelectHTMLAttributes } from 'react';
import { useId } from 'react';

import type { SpacingProps } from '../../theme/spacingProps';
import { extractSpacingProps } from '../../theme/spacingProps';
import { Label, LabelText, StyledSelect } from './Select.styles';

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps
  extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'style'>, SpacingProps {
  label?: string;
  options: SelectOption[];
}

export function Select({ label, options, id, ...props }: SelectProps) {
  const generatedId = useId();
  const selectId = id ?? generatedId;
  const [spacing, rest] = extractSpacingProps(props);

  return (
    <Label htmlFor={selectId} $spacing={spacing}>
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
