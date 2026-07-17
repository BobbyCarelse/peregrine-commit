import type { Meta, StoryObj } from '@storybook/html';

import { defaultSpacingTokens } from '../defaults/spacing';
import { createGrid, createSection, createTile } from './helpers';

const meta: Meta = {
  title: 'Tokens/Shadows',
};
export default meta;

type Story = StoryObj;

export const Depth: Story = {
  render: () => {
    const grid = createGrid();
    for (const [name, value] of Object.entries(defaultSpacingTokens)) {
      if (!name.startsWith('shadow-')) continue;

      const box = document.createElement('div');
      box.style.width = '96px';
      box.style.height = '96px';
      box.style.borderRadius = 'var(--radius-lg)';
      box.style.background = 'var(--color-surface)';
      box.style.boxShadow = `var(--${name})`;

      grid.append(createTile(name, value, box));
    }

    const wrapper = createSection('shadow-*', grid);
    wrapper.style.padding = 'var(--space-8)';
    wrapper.style.background = 'var(--color-surface-sunken)';
    wrapper.style.borderRadius = 'var(--radius-lg)';
    return wrapper;
  },
};
