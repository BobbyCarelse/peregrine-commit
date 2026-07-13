import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Switch } from './Switch';

const meta: Meta<typeof Switch> = {
  title: 'Atoms/Switch',
  component: Switch,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['sm', 'md'] },
  },
  args: {
    label: 'Enable dark mode',
    onChange: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Off: Story = {
  args: { checked: false },
};

export const On: Story = {
  args: { checked: true },
};

export const Small: Story = {
  args: { size: 'sm' },
};

export const Disabled: Story = {
  args: { disabled: true },
};
