import styled from 'styled-components';

import type { SpaceToken, SpacingProps } from '../../theme/spacingProps';
import { spacingCss } from '../../theme/spacingProps';

export type BoxGap = SpaceToken;
export type BoxAlignItems = 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline';
export type BoxJustifyContent =
  'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
export type BoxFlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse';
export type BoxFlexWrap = 'nowrap' | 'wrap' | 'wrap-reverse';
/** Background color, applied as `background-color: var(--color-*)` from the token factory's background/surface scale. */
export type BoxBackground = 'bg' | 'surface' | 'surface-sunken';

const BOX_BACKGROUND_VAR: Record<BoxBackground, string> = {
  bg: 'var(--color-bg)',
  surface: 'var(--color-surface)',
  'surface-sunken': 'var(--color-surface-sunken)',
};

export const StyledBox = styled.div<{
  $flex?: boolean;
  $gap?: BoxGap;
  $alignItems?: BoxAlignItems;
  $justifyContent?: BoxJustifyContent;
  $flexDirection?: BoxFlexDirection;
  $flexWrap?: BoxFlexWrap;
  $background?: BoxBackground;
  $spacing: SpacingProps;
}>`
  ${({ $flex, $gap, $alignItems, $justifyContent, $flexDirection, $flexWrap }) => {
    if (!$flex) return '';

    const declarations = ['display: flex;'];
    if ($gap) declarations.push(`gap: var(--${$gap});`);
    if ($alignItems) declarations.push(`align-items: ${$alignItems};`);
    if ($justifyContent) declarations.push(`justify-content: ${$justifyContent};`);
    if ($flexDirection) declarations.push(`flex-direction: ${$flexDirection};`);
    if ($flexWrap) declarations.push(`flex-wrap: ${$flexWrap};`);
    return declarations.join('\n');
  }}

  ${({ $background }) => $background && `background-color: ${BOX_BACKGROUND_VAR[$background]};`}

  ${spacingCss}
`;
