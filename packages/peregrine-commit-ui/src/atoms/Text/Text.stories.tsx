import type { Meta, StoryObj } from '@storybook/react';

import { Text } from './Text';

const meta: Meta<typeof Text> = {
  title: 'Atoms/Text',
  component: Text,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['body', 'label', 'mono'] },
    size: { control: 'select', options: ['lg', 'md', 'sm'] },
    color: {
      control: 'select',
      options: [
        'primary',
        'secondary',
        'muted',
        'accent',
        'onAccent',
        'success',
        'danger',
        'warning',
      ],
    },
    weight: { control: 'select', options: [100, 200, 300, 400, 500, 600, 700, 800, 900] },
  },
  args: {
    children:
      "I'm Bobby Carelse, a full-stack engineer who's shipped for banks, exchanges, farms, and schools.",
    variant: 'body',
    size: 'md',
    color: 'primary',
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {};

export const Secondary: Story = {
  args: { color: 'secondary' },
};

export const Label: Story = {
  args: { variant: 'label', size: 'sm', children: 'HOW I WORK' },
};

export const Mono: Story = {
  args: { variant: 'mono', children: 'git commit -m "ship it"' },
};

export const WeightOverride: Story = {
  args: { weight: 800, children: 'Body copy, bumped to a heavier weight.' },
};

export const TypeScale: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <Text variant="body" size="lg">
        Body LG — Committed to production, not just to Figma.
      </Text>
      <Text variant="body" size="md">
        Body MD — Committed to production, not just to Figma.
      </Text>
      <Text variant="body" size="sm">
        Body SM — Committed to production, not just to Figma.
      </Text>
      <Text variant="label" size="md">
        Label MD
      </Text>
      <Text variant="label" size="sm">
        Label SM
      </Text>
      <Text variant="mono" size="md">
        Mono MD — a1b2c3d
      </Text>
      <Text variant="mono" size="sm">
        Mono SM — a1b2c3d
      </Text>
    </div>
  ),
};
