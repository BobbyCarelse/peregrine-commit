import type { TextareaHTMLAttributes } from 'react';
import { useId } from 'react';

import { Label, LabelText, StyledTextarea } from './Textarea.styles';

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

export function Textarea({ label, id, rows = 4, ...rest }: TextareaProps) {
  const generatedId = useId();
  const textareaId = id ?? generatedId;

  return (
    <Label htmlFor={textareaId}>
      {label && <LabelText>{label}</LabelText>}
      <StyledTextarea id={textareaId} rows={rows} {...rest} />
    </Label>
  );
}
