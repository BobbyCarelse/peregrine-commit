import type { HTMLAttributes } from 'react';

import { X } from '../../icons';
import { RemoveButton, StyledTag } from './Tag.styles';

export interface TagProps extends HTMLAttributes<HTMLSpanElement> {
  /** Called when the remove (×) button is clicked. Omit to render a non-removable tag. */
  onRemove?: () => void;
}

export function Tag({ children, onRemove, ...rest }: TagProps) {
  return (
    <StyledTag {...rest}>
      {children}
      {onRemove && (
        <RemoveButton type="button" onClick={onRemove} aria-label="Remove">
          <X size={12} aria-hidden="true" />
        </RemoveButton>
      )}
    </StyledTag>
  );
}
