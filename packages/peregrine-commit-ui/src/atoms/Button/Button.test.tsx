import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';
import { describe, expect, it, vi } from 'vitest';

import { Button } from './Button';

const variants = ['primary', 'secondary', 'ghost'] as const;
const sizes = ['sm', 'md', 'lg'] as const;

describe('Button', () => {
  it('renders children as a native button', () => {
    render(<Button>Start a project</Button>);
    expect(screen.getByRole('button', { name: 'Start a project' })).toBeInTheDocument();
  });

  it('defaults to type="button" so it never accidentally submits a form', () => {
    render(<Button>Go</Button>);
    expect(screen.getByRole('button')).toHaveAttribute('type', 'button');
  });

  it('fires onClick when clicked', async () => {
    const onClick = vi.fn();
    const user = userEvent.setup();
    render(<Button onClick={onClick}>Go</Button>);

    await user.click(screen.getByRole('button'));

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('does not fire onClick when disabled', async () => {
    const onClick = vi.fn();
    const user = userEvent.setup();
    render(
      <Button disabled onClick={onClick}>
        Go
      </Button>,
    );

    await user.click(screen.getByRole('button'));

    expect(onClick).not.toHaveBeenCalled();
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('has no accessibility violations by default', async () => {
    const { container } = render(<Button>Start a project</Button>);
    expect(await axe(container)).toHaveNoViolations();
  });

  it.each(variants)(
    'renders the "%s" variant with no accessibility violations',
    async (variant) => {
      const { container } = render(<Button variant={variant}>Go</Button>);
      expect(await axe(container)).toHaveNoViolations();
    },
  );

  it.each(sizes)('renders the "%s" size with no accessibility violations', async (size) => {
    const { container } = render(<Button size={size}>Go</Button>);
    expect(await axe(container)).toHaveNoViolations();
  });
});
