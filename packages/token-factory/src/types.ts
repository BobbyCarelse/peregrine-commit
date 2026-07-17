export type SpaceKey = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 16 | 20 | 24 | 32;

export type SpaceScale = Record<SpaceKey, string>;

/** The standard CSS numeric font-weight scale. */
export type FontWeightKey = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

export interface RadiusScale {
  sm: string;
  md: string;
  lg: string;
  xl: string;
  full: string;
}

export interface BorderWidthScale {
  sm: string;
  md: string;
  lg: string;
}

export interface SemanticColorRefs {
  border: string;
  borderStrong: string;
  focusRing: string;
}

export interface ShadowRefs {
  md: string;
  lg: string;
  focus: string;
}

export interface ControlHeights {
  sm: string;
  md: string;
  lg: string;
}

export const DEFAULT_CONTROL_HEIGHTS: ControlHeights = {
  sm: '32px',
  md: '40px',
  lg: '48px',
};

export const DEFAULT_FOCUS_RING_OFFSET = '2px';

/** Layer-1 primitives a consumer feeds in to derive the layer-2 semantic token set. */
export interface SemanticTokenPrimitives {
  space: SpaceScale;
  radius: RadiusScale;
  borderWidth: BorderWidthScale;
  color: SemanticColorRefs;
  shadow: ShadowRefs;
  /** Typography role driving control label text, e.g. `var(--text-label-md)`. */
  controlFont: string;
  /** @default 32px / 40px / 48px */
  controlHeights?: Partial<ControlHeights>;
  /** @default 2px */
  focusRingOffset?: string;
}

/** A flat map of CSS custom-property name (without the `--` prefix) to its value. */
export type TokenRecord = Record<string, string>;
