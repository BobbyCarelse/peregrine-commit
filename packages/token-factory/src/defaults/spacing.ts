import type { TokenRecord } from '../types';

/** Peregrine Commit's default spacing, radius, border, shadow, motion, and layout primitives. */
export const defaultSpacingTokens: TokenRecord = {
  'space-0': '2px',
  'space-1': '4px',
  'space-2': '8px',
  'space-3': '12px',
  'space-4': '16px',
  'space-5': '20px',
  'space-6': '24px',
  'space-8': '32px',
  'space-10': '40px',
  'space-12': '48px',
  'space-16': '64px',
  'space-20': '80px',
  'space-24': '96px',
  'space-32': '128px',

  'radius-sm': '4px',
  'radius-md': '8px',
  'radius-lg': '12px',
  'radius-xl': '16px',
  'radius-full': '999px',

  'border-width-sm': '1px',
  'border-width-md': '1.5px',
  'border-width-lg': '2px',

  'shadow-sm': '0 1px 2px rgb(26 26 24 / 0.06)',
  'shadow-md': '0 4px 12px rgb(26 26 24 / 0.1)',
  'shadow-lg': '0 12px 32px rgb(26 26 24 / 0.14)',
  'shadow-focus': '0 0 0 3px var(--color-focus-ring)',

  'ease-standard': 'cubic-bezier(0.4, 0, 0.2, 1)',
  'duration-fast': '120ms',
  'duration-base': '200ms',
  'duration-slow': '320ms',

  'container-max': '1200px',
  'container-pad': 'clamp(20px, 5vw, 64px)',
};
