import styled from 'styled-components';

import type { SpacingProps } from '../../theme/spacingProps';
import { spacingCss } from '../../theme/spacingProps';

export type SwitchSize = 'sm' | 'md';

const trackDimensions: Record<SwitchSize, { width: number; height: number }> = {
  sm: { width: 32, height: 18 },
  md: { width: 40, height: 22 },
};

const thumbDimension: Record<SwitchSize, number> = {
  sm: 12,
  md: 16,
};

// Desired visual gap between the thumb and the track's outer edge.
const thumbGap = 3;

// Track has a 1px border (--border-width-sm), and with global box-sizing:
// border-box that border eats into the padding box that absolutely
// positioned children (like Thumb) are placed relative to. Subtract it so
// the thumb's rendered inset from the track's outer edge stays symmetric.
const trackBorderWidth = 1;
const thumbInset = thumbGap - trackBorderWidth;

const thumbTravel = (size: SwitchSize) =>
  trackDimensions[size].width - thumbDimension[size] - thumbGap * 2;

export const Label = styled.label<{ $spacing: SpacingProps }>`
  display: inline-flex;
  align-items: center;
  gap: var(--inline-sm);
  font-family: var(--font-body);
  cursor: pointer;

  &:has(input:disabled) {
    cursor: not-allowed;
  }

  ${spacingCss}
`;

// Visually hidden but still focusable and in the accessibility tree — the
// visible track/thumb below are purely decorative, driven by this input's state.
export const HiddenInput = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`;

export const Thumb = styled.span<{ $size: SwitchSize }>`
  position: absolute;
  top: ${thumbInset}px;
  left: ${thumbInset}px;
  border-radius: var(--radius-full);
  background: var(--color-surface);
  box-shadow: var(--shadow-sm);
  transition: transform var(--duration-fast) var(--ease-standard);
  width: ${({ $size }) => thumbDimension[$size]}px;
  height: ${({ $size }) => thumbDimension[$size]}px;
`;

export const Track = styled.span<{ $size: SwitchSize }>`
  position: relative;
  display: inline-flex;
  flex-shrink: 0;
  border-radius: var(--radius-full);
  background: var(--color-surface-sunken);
  border: var(--border-width-sm) solid var(--color-border-strong);
  transition:
    background var(--duration-fast) var(--ease-standard),
    border-color var(--duration-fast) var(--ease-standard);
  width: ${({ $size }) => trackDimensions[$size].width}px;
  height: ${({ $size }) => trackDimensions[$size].height}px;

  ${HiddenInput}:checked + & {
    background: var(--color-accent);
    border-color: var(--color-accent);
  }

  ${HiddenInput}:checked + & ${Thumb} {
    transform: translateX(${({ $size }) => thumbTravel($size)}px);
  }

  ${HiddenInput}:focus-visible + & {
    box-shadow: var(--shadow-focus);
  }

  ${HiddenInput}:disabled + & {
    opacity: 0.5;
  }
`;

export const LabelText = styled.span`
  font-size: 0.9375rem;
  color: var(--color-text-primary);
`;
