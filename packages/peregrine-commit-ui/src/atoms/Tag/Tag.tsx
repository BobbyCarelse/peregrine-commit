import type { HTMLAttributes } from 'react';

import { X } from '../../icons';
import type { SpacingProps } from '../../theme/spacingProps';
import { extractSpacingProps } from '../../theme/spacingProps';
import { RemoveButton, StyledTag } from './Tag.styles';

export interface TagProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'style'>, SpacingProps {
  /** Called when the remove (×) button is clicked. Omit to render a non-removable tag. */
  onRemove?: () => void;
}

export function Tag({ children, onRemove, ...props }: TagProps) {
  const [spacing, rest] = extractSpacingProps(props);
  return (
    <StyledTag $spacing={spacing} {...rest}>
      {children}
      {onRemove && (
        <RemoveButton type="button" onClick={onRemove} aria-label="Remove">
          <X size={12} aria-hidden="true" />
        </RemoveButton>
      )}
    </StyledTag>
  );
}
