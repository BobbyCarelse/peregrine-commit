import type { Meta, StoryObj } from '@storybook/react';

import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Atoms/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select', options: ['text', 'email', 'tel', 'password'] },
  },
  args: {
    label: 'Email',
    placeholder: 'you@example.com',
    type: 'email',
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {};

export const WithHelpText: Story = {
  args: { helpText: 'We will never share this.' },
};

export const WithError: Story = {
  args: { error: 'Enter a valid email address.' },
};
