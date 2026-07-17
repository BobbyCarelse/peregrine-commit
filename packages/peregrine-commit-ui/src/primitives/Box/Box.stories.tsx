import type { Meta, StoryObj } from '@storybook/react';

import { Box } from './Box';

const meta: Meta<typeof Box> = {
  title: 'Primitives/Box',
  component: Box,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Box>;

export const Default: Story = {
  render: () => (
    <Box p="space-6" background="surface-sunken">
      A standard block box with padding and a background.
    </Box>
  ),
};

export const Flex: Story = {
  render: () => (
    <Box flex gap="space-4" alignItems="center" justifyContent="space-between" p="space-6">
      <div style={{ background: 'var(--color-surface-sunken)', padding: 24 }}>Left</div>
      <div style={{ background: 'var(--color-surface-sunken)', padding: 24 }}>Right</div>
    </Box>
  ),
};

export const Backgrounds: Story = {
  render: () => (
    <Box flex gap="space-4">
      <Box p="space-6" background="bg">
        bg
      </Box>
      <Box p="space-6" background="surface">
        surface
      </Box>
      <Box p="space-6" background="surface-sunken">
        surface-sunken
      </Box>
    </Box>
  ),
};
