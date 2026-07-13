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
