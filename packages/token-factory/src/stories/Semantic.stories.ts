import type { Meta, StoryObj } from '@storybook/html';

import { defaultSemanticTokens } from '../defaults/semantic';
import { createGrid, createSection } from './helpers';

const meta: Meta = {
  title: 'Tokens/Semantic',
};
export default meta;

type Story = StoryObj;

export const Rhythm: Story = {
  render: () => {
    const rows = document.createElement('div');
    rows.style.display = 'flex';
    rows.style.flexDirection = 'column';
    rows.style.gap = 'var(--space-4)';

    for (const [name, value] of Object.entries(defaultSemanticTokens)) {
      const isRhythmToken =
        name.startsWith('inset-') || name.startsWith('stack-') || name.startsWith('inline-');
      if (!isRhythmToken) continue;

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

    return createSection('inset-* / stack-* / inline-*', rows);
  },
};

export const ControlsAndSurfaces: Story = {
  render: () => {
    const row = createGrid();

    for (const size of ['sm', 'md', 'lg'] as const) {
      const control = document.createElement('div');
      control.textContent = `Button ${size}`;
      control.style.display = 'flex';
      control.style.alignItems = 'center';
      control.style.height = `var(--control-height-${size})`;
      control.style.padding = '0 var(--control-pad-x)';
      control.style.borderRadius = 'var(--control-radius)';
      control.style.border = 'var(--control-border)';
      control.style.font = 'var(--control-font)';
      control.style.background = 'var(--color-surface)';
      row.append(control);
    }

    const surface = document.createElement('div');
    surface.textContent = 'surface-* card (raised)';
    surface.style.width = '220px';
    surface.style.padding = 'var(--inset-lg)';
    surface.style.borderRadius = 'var(--surface-radius)';
    surface.style.border = 'var(--surface-border)';
    surface.style.boxShadow = 'var(--surface-shadow-raised)';
    surface.style.background = 'var(--color-surface)';
    surface.style.font = 'var(--text-body-sm)';
    row.append(surface);

    const focusRing = document.createElement('div');
    focusRing.textContent = 'focus-ring';
    focusRing.tabIndex = 0;
    focusRing.style.width = '160px';
    focusRing.style.padding = 'var(--inset-md)';
    focusRing.style.borderRadius = 'var(--radius-sm)';
    focusRing.style.background = 'var(--color-surface)';
    focusRing.style.boxShadow = 'var(--focus-ring)';
    focusRing.style.font = 'var(--text-body-sm)';
    row.append(focusRing);

    return createSection('control-* / surface-* / focus-ring (tab to the last box to focus it)', row);
  },
};
