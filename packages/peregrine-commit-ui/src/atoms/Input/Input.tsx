import type { InputHTMLAttributes } from 'react';
import { useId } from 'react';

import type { SpacingProps } from '../../theme/spacingProps';
import { extractSpacingProps } from '../../theme/spacingProps';
import { Field, HelpText, Label, StyledInput } from './Input.styles';

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'style'>,
    SpacingProps {
  label?: string;
  type?: 'text' | 'email' | 'tel' | 'password';
  /** Error message. Renders in place of `helpText` and marks the field invalid. */
  error?: string;
  helpText?: string;
}

export function Input({ label, type = 'text', error, helpText, id, ...props }: InputProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const descriptionId = error || helpText ? `${inputId}-description` : undefined;
  const [spacing, rest] = extractSpacingProps(props);

  return (
    <Field $spacing={spacing}>
      {label && <Label htmlFor={inputId}>{label}</Label>}
      <StyledInput
        id={inputId}
        type={type}
        $hasError={Boolean(error)}
        aria-invalid={Boolean(error)}
        aria-describedby={descriptionId}
        {...rest}
      />
      {(error || helpText) && (
        <HelpText id={descriptionId} $isError={Boolean(error)}>
          {error || helpText}
        </HelpText>
      )}
    </Field>
  );
}
