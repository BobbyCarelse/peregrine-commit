import type { Meta, StoryObj } from '@storybook/html';

import { defaultSpacingTokens } from '../defaults/spacing';
import { createSection } from './helpers';

const meta: Meta = {
  title: 'Tokens/Spacing',
};
export default meta;

type Story = StoryObj;

export const Scale: Story = {
  render: () => {
    const rows = document.createElement('div');
    rows.style.display = 'flex';
    rows.style.flexDirection = 'column';
    rows.style.gap = 'var(--space-4)';

    for (const [name, value] of Object.entries(defaultSpacingTokens)) {
      if (!name.startsWith('space-')) continue;

      const bar = document.createElement('div');
      bar.style.width = `var(--${name})`;
      bar.style.height = 'var(--space-6)';
      bar.style.borderRadius = 'var(--radius-sm)';
      bar.style.background = 'var(--color-accent)';
      bar.style.flexShrink = '0';

      const label = document.createElement('div');
      label.textContent = `--${name}  (${value})`;
      label.style.font = 'var(--text-mono-sm)';
      label.style.color = 'var(--color-text-secondary)';

      const row = document.createElement('div');
      row.style.display = 'flex';
      row.style.alignItems = 'center';
      row.style.gap = 'var(--space-4)';
      row.append(bar, label);

      rows.append(row);
    }

    return createSection('space-*', rows);
  },
};
