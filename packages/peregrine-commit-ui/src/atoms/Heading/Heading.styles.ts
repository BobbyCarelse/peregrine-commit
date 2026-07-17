import styled from 'styled-components';

import type { FontWeightToken } from '../../theme/fontWeightProps';
import { fontWeightVar } from '../../theme/fontWeightProps';
import type { SpacingProps } from '../../theme/spacingProps';
import { spacingCss } from '../../theme/spacingProps';

export type HeadingVariant = 'display' | 'heading';
export type HeadingSize = 'xl' | 'lg' | 'md' | 'sm';
export type HeadingColor = 'primary' | 'secondary' | 'muted' | 'accent' | 'onAccent';

const sizeFont: Record<HeadingVariant, Record<HeadingSize, string>> = {
  display: {
    xl: 'var(--text-display-xl)',
    lg: 'var(--text-display-lg)',
    md: 'var(--text-display-md)',
    sm: 'var(--text-display-sm)',
  },
  heading: {
    // The heading scale tops out at `lg` — `xl` falls back to it rather than being invalid.
    xl: 'var(--text-heading-lg)',
    lg: 'var(--text-heading-lg)',
    md: 'var(--text-heading-md)',
    sm: 'var(--text-heading-sm)',
  },
};

const colorVar: Record<HeadingColor, string> = {
  primary: 'var(--color-text-primary)',
  secondary: 'var(--color-text-secondary)',
  muted: 'var(--color-text-muted)',
  accent: 'var(--color-accent)',
  onAccent: 'var(--color-text-on-accent)',
};

export const StyledHeading = styled.h2<{
  $variant: HeadingVariant;
  $size: HeadingSize;
  $color: HeadingColor;
  $weight?: FontWeightToken;
  $spacing: SpacingProps;
}>`
  margin: 0;
  font: ${({ $variant, $size }) => sizeFont[$variant][$size]};
  color: ${({ $color }) => colorVar[$color]};
  letter-spacing: var(--tracking-tight);
  ${({ $weight }) => $weight && `font-weight: ${fontWeightVar($weight)};`}

  ${spacingCss}
`;
