import { createGlobalStyle } from 'styled-components';

/**
 * Ports Peregrine Commit's design tokens (tokens/{fonts,base,colors,spacing,typography}.css)
 * verbatim as CSS custom properties, so future token updates from the Claude Design
 * project can be pasted in directly without touching component code.
 */
export const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Archivo:wght@500;600;700;800&family=Source+Sans+3:wght@400;500;600;700&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&display=swap");

  :root {
    /* ---- Base palette (light / default) ---- */
    --pc-ink-900: #1a1a18;
    --pc-stone-600: #726f65;
    --pc-sand-200: #d9d4c4;
    --pc-rust-500: #c97a1e;
    --pc-paper-50: #faf8f2;

    /* ---- Semantic aliases (light) ---- */
    --color-bg: var(--pc-paper-50);
    --color-surface: #ffffff;
    --color-surface-sunken: var(--pc-sand-200);
    --color-border: color-mix(in oklch, var(--pc-stone-600) 35%, var(--pc-sand-200));
    --color-border-strong: var(--pc-stone-600);

    --color-text-primary: var(--pc-ink-900);
    --color-text-secondary: var(--pc-stone-600);
    --color-text-on-accent: var(--pc-paper-50);
    --color-text-muted: color-mix(in oklch, var(--pc-stone-600) 70%, var(--pc-paper-50));

    --color-accent: var(--pc-rust-500);
    --color-accent-hover: color-mix(in oklch, var(--pc-rust-500) 85%, black);
    --color-accent-active: color-mix(in oklch, var(--pc-rust-500) 70%, black);
    --color-accent-soft: color-mix(in oklch, var(--pc-rust-500) 14%, white);

    --color-focus-ring: color-mix(in oklch, var(--pc-rust-500) 60%, white);

    --color-success: #4b7c4a;
    --color-danger: #a5402e;
    --color-warning: var(--pc-rust-500);

    --color-scrim: rgb(26 26 24 / 0.5);

    /* Spacing scale (4px base) */
    --space-1: 4px;
    --space-2: 8px;
    --space-3: 12px;
    --space-4: 16px;
    --space-5: 20px;
    --space-6: 24px;
    --space-8: 32px;
    --space-10: 40px;
    --space-12: 48px;
    --space-16: 64px;
    --space-20: 80px;
    --space-24: 96px;
    --space-32: 128px;

    /* Radius */
    --radius-sm: 4px;
    --radius-md: 8px;
    --radius-lg: 12px;
    --radius-xl: 16px;
    --radius-full: 999px;

    /* Borders */
    --border-width-sm: 1px;
    --border-width-md: 1.5px;
    --border-width-lg: 2px;

    /* Shadow */
    --shadow-sm: 0 1px 2px rgb(26 26 24 / 0.06);
    --shadow-md: 0 4px 12px rgb(26 26 24 / 0.1);
    --shadow-lg: 0 12px 32px rgb(26 26 24 / 0.14);
    --shadow-focus: 0 0 0 3px var(--color-focus-ring);

    /* Motion */
    --ease-standard: cubic-bezier(0.4, 0, 0.2, 1);
    --duration-fast: 120ms;
    --duration-base: 200ms;
    --duration-slow: 320ms;

    /* Layout */
    --container-max: 1200px;
    --container-pad: clamp(20px, 5vw, 64px);

    /* Fonts */
    --font-display: 'Archivo', 'Archivo Fallback', 'Arial Narrow', sans-serif;
    --font-body: 'Source Sans 3', 'Source Sans Fallback', Arial, sans-serif;
    --font-mono: 'IBM Plex Mono', 'SFMono-Regular', Consolas, monospace;

    /* Type scale */
    --text-display-xl: 700 4rem/1.02 var(--font-display);
    --text-display-lg: 700 3rem/1.05 var(--font-display);
    --text-display-md: 700 2rem/1.1 var(--font-display);
    --text-display-sm: 700 1.5rem/1.15 var(--font-display);

    --text-heading-lg: 600 1.375rem/1.3 var(--font-display);
    --text-heading-md: 600 1.125rem/1.35 var(--font-display);
    --text-heading-sm: 600 0.9375rem/1.4 var(--font-display);

    --text-body-lg: 400 1.125rem/1.6 var(--font-body);
    --text-body-md: 400 1rem/1.6 var(--font-body);
    --text-body-sm: 400 0.875rem/1.55 var(--font-body);

    --text-label-md: 600 0.875rem/1.3 var(--font-body);
    --text-label-sm: 600 0.75rem/1.3 var(--font-body);

    --text-mono-md: 400 0.9375rem/1.5 var(--font-mono);
    --text-mono-sm: 400 0.8125rem/1.5 var(--font-mono);

    --tracking-tight: -0.02em;
    --tracking-normal: 0;
    --tracking-wide: 0.06em;
    --tracking-wider: 0.12em;
  }

  [data-theme='dark'] {
    --pc-forest-950: #16211d;
    --pc-forest-700: #2f5d4f;
    --pc-mint-400: #6fbf9a;
    --pc-cream-100: #ede7d8;
    --pc-charcoal-800: #2a2a28;

    --color-bg: var(--pc-forest-950);
    --color-surface: var(--pc-charcoal-800);
    --color-surface-sunken: color-mix(in oklch, var(--pc-forest-950) 60%, black);
    --color-border: color-mix(in oklch, var(--pc-forest-700) 60%, var(--pc-charcoal-800));
    --color-border-strong: var(--pc-forest-700);

    --color-text-primary: var(--pc-cream-100);
    --color-text-secondary: color-mix(in oklch, var(--pc-cream-100) 65%, var(--pc-forest-950));
    --color-text-on-accent: var(--pc-forest-950);
    --color-text-muted: color-mix(in oklch, var(--pc-cream-100) 50%, var(--pc-forest-950));

    --color-accent: var(--pc-mint-400);
    --color-accent-hover: color-mix(in oklch, var(--pc-mint-400) 85%, white);
    --color-accent-active: color-mix(in oklch, var(--pc-mint-400) 70%, black);
    --color-accent-soft: color-mix(in oklch, var(--pc-mint-400) 16%, var(--pc-forest-950));

    --color-focus-ring: var(--pc-mint-400);

    --color-success: #6fbf9a;
    --color-danger: #e08469;
    --color-warning: #e0b65c;

    --color-scrim: rgb(0 0 0 / 0.6);
  }

  * {
    box-sizing: border-box;
  }

  html,
  body {
    margin: 0;
    padding: 0;
    background: var(--color-bg);
    color: var(--color-text-primary);
    font: var(--text-body-md);
    -webkit-font-smoothing: antialiased;
  }

  body {
    font-family: var(--font-body);
  }

  h1,
  h2,
  h3,
  h4 {
    font-family: var(--font-display);
    margin: 0;
    letter-spacing: var(--tracking-tight);
  }

  p {
    margin: 0;
  }

  a {
    color: var(--color-accent);
    text-decoration: none;
  }

  a:hover {
    color: var(--color-accent-hover);
    text-decoration: underline;
  }

  :focus-visible {
    outline: none;
    box-shadow: var(--shadow-focus);
    border-radius: var(--radius-sm);
  }

  img,
  svg {
    display: block;
    max-width: 100%;
  }
`;
