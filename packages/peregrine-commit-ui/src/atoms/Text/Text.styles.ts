import styled, { css } from 'styled-components';

import type { FontWeightToken } from '../../theme/fontWeightProps';
import { fontWeightVar } from '../../theme/fontWeightProps';
import type { SpacingProps } from '../../theme/spacingProps';
import { spacingCss } from '../../theme/spacingProps';

export type TextVariant = 'body' | 'label' | 'mono' | 'overline';
export type TextSize = 'lg' | 'md' | 'sm';
export type TextColor =
  'primary' | 'secondary' | 'muted' | 'accent' | 'onAccent' | 'success' | 'danger' | 'warning';

const sizeFont: Record<TextVariant, Record<TextSize, string>> = {
  body: {
    lg: 'var(--text-body-lg)',
    md: 'var(--text-body-md)',
    sm: 'var(--text-body-sm)',
  },
  label: {
    // The label scale only defines md/sm — `lg` falls back to `md` rather than being invalid.
    lg: 'var(--text-label-md)',
    md: 'var(--text-label-md)',
    sm: 'var(--text-label-sm)',
  },
  mono: {
    // Same as label — the mono scale only defines md/sm.
    lg: 'var(--text-mono-md)',
    md: 'var(--text-mono-md)',
    sm: 'var(--text-mono-sm)',
  },
  overline: {
    // Overline draws from the label scale — only its casing/tracking differ, applied below.
    lg: 'var(--text-label-md)',
    md: 'var(--text-label-md)',
    sm: 'var(--text-label-sm)',
  },
};

const colorVar: Record<TextColor, string> = {
  primary: 'var(--color-text-primary)',
  secondary: 'var(--color-text-secondary)',
  muted: 'var(--color-text-muted)',
  accent: 'var(--color-accent)',
  onAccent: 'var(--color-text-on-accent)',
  success: 'var(--color-success)',
  danger: 'var(--color-danger)',
  warning: 'var(--color-warning)',
};

export const StyledText = styled.p<{
  $variant: TextVariant;
  $size: TextSize;
  $color: TextColor;
  $weight?: FontWeightToken;
  $spacing: SpacingProps;
}>`
  margin: 0;
  font: ${({ $variant, $size }) => sizeFont[$variant][$size]};
  color: ${({ $color }) => colorVar[$color]};
  ${({ $weight }) => $weight && `font-weight: ${fontWeightVar($weight)};`}

  ${({ $variant }) =>
    $variant === 'overline' &&
    css`
      text-transform: uppercase;
      letter-spacing: var(--tracking-wider);
    `}

  ${spacingCss}
`;
