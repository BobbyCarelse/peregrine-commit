import type { Meta, StoryObj } from '@storybook/react';

import { Heading } from './Heading';

const meta: Meta<typeof Heading> = {
  title: 'Atoms/Heading',
  component: Heading,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['display', 'heading'] },
    size: { control: 'select', options: ['xl', 'lg', 'md', 'sm'] },
    color: { control: 'select', options: ['primary', 'secondary', 'muted', 'accent', 'onAccent'] },
  },
  args: {
    children: 'Committed to production, not just to Figma.',
    variant: 'display',
    size: 'md',
    color: 'primary',
  },
};

export default meta;
type Story = StoryObj<typeof Heading>;

export const Default: Story = {};

export const DisplayXl: Story = {
  args: { variant: 'display', size: 'xl' },
};

export const HeadingLg: Story = {
  args: { variant: 'heading', size: 'lg' },
};

export const AccentColor: Story = {
  args: { color: 'accent' },
};

export const TypeScale: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Heading variant="display" size="xl">
        Display XL
      </Heading>
      <Heading variant="display" size="lg">
        Display LG
      </Heading>
      <Heading variant="display" size="md">
        Display MD
      </Heading>
      <Heading variant="display" size="sm">
        Display SM
      </Heading>
      <Heading variant="heading" size="lg">
        Heading LG
      </Heading>
      <Heading variant="heading" size="md">
        Heading MD
      </Heading>
      <Heading variant="heading" size="sm">
        Heading SM
      </Heading>
    </div>
  ),
};
