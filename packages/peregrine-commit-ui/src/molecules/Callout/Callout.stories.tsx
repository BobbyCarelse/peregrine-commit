import type { Meta, StoryObj } from '@storybook/react';

import { Callout } from './Callout';

const meta: Meta<typeof Callout> = {
  title: 'Molecules/Callout',
  component: Callout,
  tags: ['autodocs'],
  argTypes: {
    tone: { control: 'select', options: ['info', 'accent', 'success'] },
  },
  args: {
    children: 'Committed to production, not just to Figma.',
    tone: 'info',
  },
};

export default meta;
type Story = StoryObj<typeof Callout>;

export const Default: Story = {};

export const Info: Story = {
  args: { tone: 'info' },
};

export const Accent: Story = {
  args: { tone: 'accent' },
};

export const Success: Story = {
  args: { tone: 'success' },
};
