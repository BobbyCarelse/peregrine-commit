import type { Meta, StoryObj } from '@storybook/html';

import { defaultTypographyTokens } from '../defaults/typography';
import { createSection } from './helpers';

const meta: Meta = {
  title: 'Tokens/Typography',
};
export default meta;

type Story = StoryObj;

export const TypeScale: Story = {
  render: () => {
    const rows = document.createElement('div');
    rows.style.display = 'flex';
    rows.style.flexDirection = 'column';
    rows.style.gap = 'var(--space-6)';

    for (const [name, value] of Object.entries(defaultTypographyTokens)) {
      if (!name.startsWith('text-')) continue;

      const sample = document.createElement('div');
      sample.textContent = 'Peregrine Commit — Aa Bb Cc 123';
      sample.style.font = `var(--${name})`;

      const label = document.createElement('div');
      label.textContent = `--${name}  (${value})`;
      label.style.font = 'var(--text-mono-sm)';
      label.style.color = 'var(--color-text-secondary)';
      label.style.marginTop = 'var(--space-1)';

      const row = document.createElement('div');
      row.append(sample, label);
      rows.append(row);
    }

    return createSection('text-*', rows);
  },
};

export const Tracking: Story = {
  render: () => {
    const rows = document.createElement('div');
    rows.style.display = 'flex';
    rows.style.flexDirection = 'column';
    rows.style.gap = 'var(--space-4)';

    for (const [name, value] of Object.entries(defaultTypographyTokens)) {
      if (!name.startsWith('tracking-')) continue;

      const sample = document.createElement('div');
      sample.textContent = `${name} — PEREGRINE COMMIT (${value})`;
      sample.style.font = 'var(--text-heading-sm)';
      sample.style.letterSpacing = `var(--${name})`;
      rows.append(sample);
    }

    return createSection('tracking-*', rows);
  },
};
