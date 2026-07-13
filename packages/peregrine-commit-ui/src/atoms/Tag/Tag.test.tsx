import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';
import { describe, expect, it, vi } from 'vitest';

import { Tag } from './Tag';

describe('Tag', () => {
  it('renders its text content', () => {
    render(<Tag>React</Tag>);
    expect(screen.getByText('React')).toBeInTheDocument();
  });

  it('does not render a remove button when onRemove is omitted', () => {
    render(<Tag>React</Tag>);
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });

  it('fires onRemove when the remove button is clicked', async () => {
    const onRemove = vi.fn();
    const user = userEvent.setup();
    render(<Tag onRemove={onRemove}>React</Tag>);

    await user.click(screen.getByRole('button', { name: 'Remove' }));

    expect(onRemove).toHaveBeenCalledTimes(1);
  });

  it('has no accessibility violations without a remove button', async () => {
    const { container } = render(<Tag>React</Tag>);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('has no accessibility violations with a remove button', async () => {
    const { container } = render(<Tag onRemove={vi.fn()}>React</Tag>);
    expect(await axe(container)).toHaveNoViolations();
  });
});
