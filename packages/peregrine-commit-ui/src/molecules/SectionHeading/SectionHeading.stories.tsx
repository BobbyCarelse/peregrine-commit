import type { Meta, StoryObj } from '@storybook/react';

import { SectionHeading } from './SectionHeading';

const meta: Meta<typeof SectionHeading> = {
  title: 'Molecules/SectionHeading',
  component: SectionHeading,
  tags: ['autodocs'],
  argTypes: {
    centered: { control: 'boolean' },
  },
  args: {
    eyebrow: 'How I work',
    title: 'Committed to production, not just to Figma.',
    description:
      "I'm Bobby Carelse, a full-stack engineer who's shipped for banks, exchanges, farms, and schools.",
    centered: false,
  },
};

export default meta;
type Story = StoryObj<typeof SectionHeading>;

export const Default: Story = {};

export const Centered: Story = {
  args: { centered: true },
};

export const TitleOnly: Story = {
  args: { eyebrow: undefined, description: undefined },
};
