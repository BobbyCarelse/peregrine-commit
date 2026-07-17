import type { TokenRecord } from '../types';

/** Peregrine Commit's default font families, font-weight, type scale, and letter-tracking primitives. */
export const defaultTypographyTokens: TokenRecord = {
  'font-display': "'Archivo', 'Archivo Fallback', 'Arial Narrow', sans-serif",
  'font-body': "'Source Sans 3', 'Source Sans Fallback', Arial, sans-serif",
  'font-mono': "'IBM Plex Mono', 'SFMono-Regular', Consolas, monospace",

  'font-weight-100': '100',
  'font-weight-200': '200',
  'font-weight-300': '300',
  'font-weight-400': '400',
  'font-weight-500': '500',
  'font-weight-600': '600',
  'font-weight-700': '700',
  'font-weight-800': '800',
  'font-weight-900': '900',

  'text-display-xl': 'var(--font-weight-700) 4rem/1.02 var(--font-display)',
  'text-display-lg': 'var(--font-weight-700) 3rem/1.05 var(--font-display)',
  'text-display-md': 'var(--font-weight-700) 2rem/1.1 var(--font-display)',
  'text-display-sm': 'var(--font-weight-700) 1.5rem/1.15 var(--font-display)',

  'text-heading-lg': 'var(--font-weight-600) 1.375rem/1.3 var(--font-display)',
  'text-heading-md': 'var(--font-weight-600) 1.125rem/1.35 var(--font-display)',
  'text-heading-sm': 'var(--font-weight-600) 0.9375rem/1.4 var(--font-display)',

  'text-body-lg': 'var(--font-weight-400) 1.125rem/1.6 var(--font-body)',
  'text-body-md': 'var(--font-weight-400) 1rem/1.6 var(--font-body)',
  'text-body-sm': 'var(--font-weight-400) 0.875rem/1.55 var(--font-body)',

  'text-label-md': 'var(--font-weight-600) 0.875rem/1.3 var(--font-body)',
  'text-label-sm': 'var(--font-weight-600) 0.75rem/1.3 var(--font-body)',

  'text-mono-md': 'var(--font-weight-400) 0.9375rem/1.5 var(--font-mono)',
  'text-mono-sm': 'var(--font-weight-400) 0.8125rem/1.5 var(--font-mono)',

  'tracking-tight': '-0.02em',
  'tracking-normal': '0',
  'tracking-wide': '0.06em',
  'tracking-wider': '0.12em',
};
