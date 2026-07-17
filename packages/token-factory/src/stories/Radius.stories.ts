import type { Meta, StoryObj } from '@storybook/html';

import { defaultSpacingTokens } from '../defaults/spacing';
import { createGrid, createSection, createTile } from './helpers';

const meta: Meta = {
  title: 'Tokens/Radius & Borders',
};
export default meta;

type Story = StoryObj;

export const Radius: Story = {
  render: () => {
    const grid = createGrid();
    for (const [name, value] of Object.entries(defaultSpacingTokens)) {
      if (!name.startsWith('radius-')) continue;

      const box = document.createElement('div');
      box.style.width = '96px';
      box.style.height = '96px';
      box.style.borderRadius = `var(--${name})`;
      box.style.background = 'var(--color-accent-soft)';
      box.style.border = '1.5px solid var(--color-accent)';

      grid.append(createTile(name, value, box));
    }
    return createSection('radius-*', grid);
  },
};

export const BorderWidth: Story = {
  render: () => {
    const grid = createGrid();
    for (const [name, value] of Object.entries(defaultSpacingTokens)) {
      if (!name.startsWith('border-width-')) continue;

      const box = document.createElement('div');
      box.style.width = '96px';
      box.style.height = '96px';
      box.style.borderRadius = 'var(--radius-md)';
      box.style.borderStyle = 'solid';
      box.style.borderWidth = `var(--${name})`;
      box.style.borderColor = 'var(--color-border-strong)';

      grid.append(createTile(name, value, box));
    }
    return createSection('border-width-*', grid);
  },
};
