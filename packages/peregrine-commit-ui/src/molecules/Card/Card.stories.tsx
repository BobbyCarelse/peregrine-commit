import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Card } from './Card';

const meta: Meta<typeof Card> = {
  title: 'Molecules/Card',
  component: Card,
  tags: ['autodocs'],
  args: {
    children: 'A flat, bordered surface for grouping content.',
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {};

export const Interactive: Story = {
  args: { interactive: true, onClick: fn() },
};
