/** Base element reset, applied globally (tokens/base.css in the design system). */
export const baseCss = `
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
