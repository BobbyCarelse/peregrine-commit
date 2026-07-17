/**
 * Typed convenience mirror of the CSS custom properties defined in `tokens.css.ts`.
 * Values are `var(--...)` strings, so `props.theme.color.accent` resolves through
 * the same cascade as writing `var(--color-accent)` directly — this exists purely
 * for editor autocomplete, not as a second source of truth.
 */
export const theme = {
  color: {
    bg: 'var(--color-bg)',
    surface: 'var(--color-surface)',
    surfaceSunken: 'var(--color-surface-sunken)',
    border: 'var(--color-border)',
    borderStrong: 'var(--color-border-strong)',
    textPrimary: 'var(--color-text-primary)',
    textSecondary: 'var(--color-text-secondary)',
    textOnAccent: 'var(--color-text-on-accent)',
    textMuted: 'var(--color-text-muted)',
    accent: 'var(--color-accent)',
    accentHover: 'var(--color-accent-hover)',
    accentActive: 'var(--color-accent-active)',
    accentSoft: 'var(--color-accent-soft)',
    focusRing: 'var(--color-focus-ring)',
    success: 'var(--color-success)',
    danger: 'var(--color-danger)',
    warning: 'var(--color-warning)',
    scrim: 'var(--color-scrim)',
  },
  space: {
    1: 'var(--space-1)',
    2: 'var(--space-2)',
    3: 'var(--space-3)',
    4: 'var(--space-4)',
    5: 'var(--space-5)',
    6: 'var(--space-6)',
    8: 'var(--space-8)',
    10: 'var(--space-10)',
    12: 'var(--space-12)',
    16: 'var(--space-16)',
    20: 'var(--space-20)',
    24: 'var(--space-24)',
    32: 'var(--space-32)',
  },
  radius: {
    sm: 'var(--radius-sm)',
    md: 'var(--radius-md)',
    lg: 'var(--radius-lg)',
    xl: 'var(--radius-xl)',
    full: 'var(--radius-full)',
  },
  shadow: {
    sm: 'var(--shadow-sm)',
    md: 'var(--shadow-md)',
    lg: 'var(--shadow-lg)',
    focus: 'var(--shadow-focus)',
  },
  motion: {
    ease: 'var(--ease-standard)',
    fast: 'var(--duration-fast)',
    base: 'var(--duration-base)',
    slow: 'var(--duration-slow)',
  },
  font: {
    display: 'var(--font-display)',
    body: 'var(--font-body)',
    mono: 'var(--font-mono)',
  },
  text: {
    displayXl: 'var(--text-display-xl)',
    displayLg: 'var(--text-display-lg)',
    displayMd: 'var(--text-display-md)',
    displaySm: 'var(--text-display-sm)',
    headingLg: 'var(--text-heading-lg)',
    headingMd: 'var(--text-heading-md)',
    headingSm: 'var(--text-heading-sm)',
    bodyLg: 'var(--text-body-lg)',
    bodyMd: 'var(--text-body-md)',
    bodySm: 'var(--text-body-sm)',
    labelMd: 'var(--text-label-md)',
    labelSm: 'var(--text-label-sm)',
    monoMd: 'var(--text-mono-md)',
    monoSm: 'var(--text-mono-sm)',
  },
  inset: {
    sm: 'var(--inset-sm)',
    md: 'var(--inset-md)',
    lg: 'var(--inset-lg)',
    xl: 'var(--inset-xl)',
  },
  stack: {
    xs: 'var(--stack-xs)',
    sm: 'var(--stack-sm)',
    md: 'var(--stack-md)',
    lg: 'var(--stack-lg)',
    section: 'var(--stack-section)',
  },
  inline: {
    xs: 'var(--inline-xs)',
    sm: 'var(--inline-sm)',
    md: 'var(--inline-md)',
    lg: 'var(--inline-lg)',
  },
  control: {
    heightSm: 'var(--control-height-sm)',
    heightMd: 'var(--control-height-md)',
    heightLg: 'var(--control-height-lg)',
    padX: 'var(--control-pad-x)',
    radius: 'var(--control-radius)',
    border: 'var(--control-border)',
    font: 'var(--control-font)',
    gap: 'var(--control-gap)',
  },
  surface: {
    radius: 'var(--surface-radius)',
    border: 'var(--surface-border)',
    shadowRaised: 'var(--surface-shadow-raised)',
    shadowOverlay: 'var(--surface-shadow-overlay)',
  },
  focusRing: {
    ring: 'var(--focus-ring)',
    offset: 'var(--focus-ring-offset)',
  },
} as const;

export type PeregrineTheme = typeof theme;

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface DefaultTheme extends PeregrineTheme {}
}
