import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { NavBar } from './NavBar';

const meta: Meta<typeof NavBar> = {
  title: 'Organisms/NavBar',
  component: NavBar,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    links: [
      { href: '#work', label: 'Work' },
      { href: '#process', label: 'How I work' },
      { href: '#about', label: 'About' },
    ],
    activeHref: '#work',
    ctaLabel: 'Start a project',
    onNavigate: fn(),
    onCta: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof NavBar>;

export const Default: Story = {};
