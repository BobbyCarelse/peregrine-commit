import styled from 'styled-components';

export type TextVariant = 'body' | 'label' | 'mono';
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

export const StyledText = styled.p<{ $variant: TextVariant; $size: TextSize; $color: TextColor }>`
  margin: 0;
  font: ${({ $variant, $size }) => sizeFont[$variant][$size]};
  color: ${({ $color }) => colorVar[$color]};
`;
