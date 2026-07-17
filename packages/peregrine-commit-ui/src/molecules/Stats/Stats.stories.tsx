import type { Meta, StoryObj } from '@storybook/react';

import { Stats } from './Stats';

const meta: Meta<typeof Stats> = {
  title: 'Molecules/Stats',
  component: Stats,
  tags: ['autodocs'],
  argTypes: {
    description: { control: 'text' },
    stat: { control: 'text' },
  },
  args: {
    stat: '7+ yrs',
    description: 'In productions',
  },
};

export default meta;
type Story = StoryObj<typeof Stats>;

export const Default: Story = {};
