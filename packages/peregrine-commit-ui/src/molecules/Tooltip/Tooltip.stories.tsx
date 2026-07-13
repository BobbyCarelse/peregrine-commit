import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../../atoms/Button';
import { Tooltip } from './Tooltip';

const meta: Meta<typeof Tooltip> = {
  title: 'Molecules/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  args: {
    label: 'Opens in a new tab',
  },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  render: (args) => (
    <Tooltip {...args}>
      <Button variant="secondary">See my work</Button>
    </Tooltip>
  ),
};
