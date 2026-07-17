import type { TokenRecord } from '../types';

/** Peregrine Commit's default light-mode color primitives + semantic aliases. */
export const defaultColorTokensLight: TokenRecord = {
  'pc-ink-900': '#1a1a18',
  'pc-stone-600': '#726f65',
  'pc-sand-200': '#d9d4c4',
  'pc-rust-500': '#c97a1e',
  'pc-paper-50': '#faf8f2',

  'color-bg': 'var(--pc-paper-50)',
  'color-surface': '#ffffff',
  'color-surface-sunken': 'var(--pc-sand-200)',
  'color-border': 'color-mix(in oklch, var(--pc-stone-600) 35%, var(--pc-sand-200))',
  'color-border-strong': 'var(--pc-stone-600)',

  'color-text-primary': 'var(--pc-ink-900)',
  'color-text-secondary': 'var(--pc-stone-600)',
  'color-text-on-accent': 'var(--pc-paper-50)',
  'color-text-muted': 'color-mix(in oklch, var(--pc-stone-600) 70%, var(--pc-paper-50))',

  'color-accent': 'var(--pc-rust-500)',
  'color-accent-hover': 'color-mix(in oklch, var(--pc-rust-500) 85%, black)',
  'color-accent-active': 'color-mix(in oklch, var(--pc-rust-500) 70%, black)',
  'color-accent-soft': 'color-mix(in oklch, var(--pc-rust-500) 14%, white)',

  'color-focus-ring': 'color-mix(in oklch, var(--pc-rust-500) 60%, white)',

  'color-success': '#4b7c4a',
  'color-danger': '#a5402e',
  'color-warning': 'var(--pc-rust-500)',

  'color-scrim': 'rgb(26 26 24 / 0.5)',
};

/** Peregrine Commit's default dark-mode color primitives + semantic aliases, applied under `[data-theme='dark']`. */
export const defaultColorTokensDark: TokenRecord = {
  'pc-forest-950': '#16211d',
  'pc-forest-700': '#2f5d4f',
  'pc-mint-400': '#6fbf9a',
  'pc-cream-100': '#ede7d8',
  'pc-charcoal-800': '#2a2a28',

  'color-bg': 'var(--pc-forest-950)',
  'color-surface': 'var(--pc-charcoal-800)',
  'color-surface-sunken': 'color-mix(in oklch, var(--pc-forest-950) 60%, black)',
  'color-border': 'color-mix(in oklch, var(--pc-forest-700) 60%, var(--pc-charcoal-800))',
  'color-border-strong': 'var(--pc-forest-700)',

  'color-text-primary': 'var(--pc-cream-100)',
  'color-text-secondary': 'color-mix(in oklch, var(--pc-cream-100) 65%, var(--pc-forest-950))',
  'color-text-on-accent': 'var(--pc-forest-950)',
  'color-text-muted': 'color-mix(in oklch, var(--pc-cream-100) 50%, var(--pc-forest-950))',

  'color-accent': 'var(--pc-mint-400)',
  'color-accent-hover': 'color-mix(in oklch, var(--pc-mint-400) 85%, white)',
  'color-accent-active': 'color-mix(in oklch, var(--pc-mint-400) 70%, black)',
  'color-accent-soft': 'color-mix(in oklch, var(--pc-mint-400) 16%, var(--pc-forest-950))',

  'color-focus-ring': 'var(--pc-mint-400)',

  'color-success': '#6fbf9a',
  'color-danger': '#e08469',
  'color-warning': '#e0b65c',

  'color-scrim': 'rgb(0 0 0 / 0.6)',
};
