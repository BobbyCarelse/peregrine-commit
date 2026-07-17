import type { TextareaHTMLAttributes } from 'react';
import { useId } from 'react';

import type { SpacingProps } from '../../theme/spacingProps';
import { extractSpacingProps } from '../../theme/spacingProps';
import { Label, LabelText, StyledTextarea } from './Textarea.styles';

export interface TextareaProps
  extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'style'>,
    SpacingProps {
  label?: string;
}

export function Textarea({ label, id, rows = 4, ...props }: TextareaProps) {
  const generatedId = useId();
  const textareaId = id ?? generatedId;
  const [spacing, rest] = extractSpacingProps(props);

  return (
    <Label htmlFor={textareaId} $spacing={spacing}>
      {label && <LabelText>{label}</LabelText>}
      <StyledTextarea id={textareaId} rows={rows} {...rest} />
    </Label>
  );
}
