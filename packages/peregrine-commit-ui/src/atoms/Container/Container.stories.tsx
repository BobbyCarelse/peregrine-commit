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

export const PrimaryBackground: Story = {
  render: () => (
    <Container background="bg" p="space-6">
      Uses the primary page background (`color-bg`).
    </Container>
  ),
};

export const SecondaryBackground: Story = {
  render: () => (
    <Container background="surface-sunken" p="space-6">
      Uses the secondary, sunken background (`color-surface-sunken`) for visual separation from the
      primary background — flips with the Theme toolbar above.
    </Container>
  ),
};
