import type { Meta, StoryObj } from '@storybook/html';

import { defaultColorTokensDark, defaultColorTokensLight } from '../defaults/colors';
import { createGrid, createSection, createTile } from './helpers';

const meta: Meta = {
  title: 'Tokens/Colors',
};
export default meta;

type Story = StoryObj;

function createSwatchTile(name: string, value: string): HTMLDivElement {
  const swatch = document.createElement('div');
  swatch.style.width = '96px';
  swatch.style.height = '64px';
  swatch.style.borderRadius = 'var(--radius-md)';
  swatch.style.border = '1px solid var(--color-border)';
  swatch.style.background = `var(--${name})`;
  return createTile(name, value, swatch);
}

export const Palette: Story = {
  render: () => {
    const root = document.createElement('div');

    const lightPrimitives = createGrid();
    for (const [name, value] of Object.entries(defaultColorTokensLight)) {
      if (name.startsWith('pc-')) lightPrimitives.append(createSwatchTile(name, value));
    }

    // Dark primitives use different var names than light, so they're scoped locally
    // to a `[data-theme='dark']` box rather than following the toolbar toggle below.
    const darkPrimitives = createGrid();
    darkPrimitives.dataset.theme = 'dark';
    darkPrimitives.style.padding = 'var(--space-6)';
    darkPrimitives.style.borderRadius = 'var(--radius-lg)';
    darkPrimitives.style.background = 'var(--color-bg)';
    for (const [name, value] of Object.entries(defaultColorTokensDark)) {
      if (name.startsWith('pc-')) darkPrimitives.append(createSwatchTile(name, value));
    }

    const semantics = createGrid();
    for (const [name, value] of Object.entries(defaultColorTokensLight)) {
      if (!name.startsWith('pc-')) semantics.append(createSwatchTile(name, value));
    }

    root.append(
      createSection('Light primitives', lightPrimitives),
      createSection('Dark primitives', darkPrimitives),
      createSection('Semantic aliases — try the Theme toolbar above', semantics),
    );
    return root;
  },
};
