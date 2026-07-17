import type { Meta, StoryObj } from '@storybook/react';

import { Container } from './Container';

const meta: Meta<typeof Container> = {
  title: 'Atoms/Container',
  component: Container,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Container>;

export const Default: Story = {
  render: () => (
    <Container>
      <div style={{ background: 'var(--color-surface-sunken)', padding: 24 }}>
        Max-width 1200px, centered, with a responsive side gutter.
      </div>
    </Container>
  ),
};

export const Flex: Story = {
  render: () => (
    <Container flex gap="space-4" alignItems="center" justifyContent="space-between">
      <div style={{ background: 'var(--color-surface-sunken)', padding: 24 }}>Left</div>
      <div style={{ background: 'var(--color-surface-sunken)', padding: 24 }}>Right</div>
    </Container>
  ),
};
