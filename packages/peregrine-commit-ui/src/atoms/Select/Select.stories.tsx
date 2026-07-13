import type { Meta, StoryObj } from '@storybook/react';

import { Select } from './Select';

const meta: Meta<typeof Select> = {
  title: 'Atoms/Select',
  component: Select,
  tags: ['autodocs'],
  args: {
    label: 'Industry',
    options: [
      { value: 'banking', label: 'Banking' },
      { value: 'crypto', label: 'Crypto' },
      { value: 'logistics', label: 'Logistics' },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {};
