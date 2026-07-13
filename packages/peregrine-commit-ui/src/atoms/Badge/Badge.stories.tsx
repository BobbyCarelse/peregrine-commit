import type { Meta, StoryObj } from '@storybook/react';

import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
  title: 'Atoms/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    tone: { control: 'select', options: ['neutral', 'accent', 'success'] },
  },
  args: {
    children: 'New',
    tone: 'neutral',
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {};

export const Neutral: Story = {
  args: { tone: 'neutral' },
};

export const Accent: Story = {
  args: { tone: 'accent' },
};

export const Success: Story = {
  args: { tone: 'success' },
};
