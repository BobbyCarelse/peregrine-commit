import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Tag } from './Tag';

const meta: Meta<typeof Tag> = {
  title: 'Atoms/Tag',
  component: Tag,
  tags: ['autodocs'],
  args: {
    children: 'React',
  },
};

export default meta;
type Story = StoryObj<typeof Tag>;

export const Default: Story = {};

export const Removable: Story = {
  args: { onRemove: fn() },
};
