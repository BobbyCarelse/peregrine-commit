import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['primary', 'secondary', 'ghost'] },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    disabled: { control: 'boolean' },
  },
  args: {
    children: 'Start a project',
    variant: 'primary',
    size: 'md',
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {};

export const Primary: Story = {
  args: { variant: 'primary', children: 'Start a project' },
};

export const Secondary: Story = {
  args: { variant: 'secondary', children: 'See my work' },
};

export const Ghost: Story = {
  args: { variant: 'ghost', children: 'Learn more' },
};

export const Disabled: Story = {
  args: { disabled: true },
};
