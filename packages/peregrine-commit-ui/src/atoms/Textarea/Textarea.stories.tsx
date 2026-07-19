import type { Meta, StoryObj } from '@storybook/react';

import { Textarea } from './Textarea';

const meta: Meta<typeof Textarea> = {
  title: 'Atoms/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  args: {
    label: 'Message',
    placeholder: 'Tell me about your project...',
    rows: 4,
  },
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {};

export const Tall: Story = {
  args: { rows: 8 },
};

export const WithHelpText: Story = {
  args: { helpText: 'Feel free to include links to your work.' },
};

export const WithError: Story = {
  args: { error: 'Message is required.' },
};
