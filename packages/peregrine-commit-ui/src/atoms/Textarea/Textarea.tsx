import type { TextareaHTMLAttributes } from 'react';
import { useId } from 'react';

import type { SpacingProps } from '../../theme/spacingProps';
import { extractSpacingProps } from '../../theme/spacingProps';
import { Field, HelpText, Label, StyledTextarea } from './Textarea.styles';

export interface TextareaProps
  extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'style'>, SpacingProps {
  label?: string;
  /** Error message. Renders in place of `helpText` and marks the field invalid. */
  error?: string;
  helpText?: string;
}

export function Textarea({ label, error, helpText, id, rows = 4, ...props }: TextareaProps) {
  const generatedId = useId();
  const textareaId = id ?? generatedId;
  const descriptionId = error || helpText ? `${textareaId}-description` : undefined;
  const [spacing, rest] = extractSpacingProps(props);

  return (
    <Field $spacing={spacing}>
      {label && <Label htmlFor={textareaId}>{label}</Label>}
      <StyledTextarea
        id={textareaId}
        rows={rows}
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
