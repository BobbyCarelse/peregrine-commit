import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';
import { ArrowUpRight } from 'lucide-react';
import { describe, expect, it, vi } from 'vitest';

import { IconButton } from './IconButton';

const variants = ['primary', 'secondary'] as const;
const sizes = ['sm', 'md', 'lg'] as const;

describe('IconButton', () => {
  it('exposes the label as an accessible name', () => {
    render(<IconButton icon={ArrowUpRight} label="Open project" />);
    expect(screen.getByRole('button', { name: 'Open project' })).toBeInTheDocument();
  });

  it('fires onClick when clicked', async () => {
    const onClick = vi.fn();
    const user = userEvent.setup();
    render(<IconButton icon={ArrowUpRight} label="Open project" onClick={onClick} />);

    await user.click(screen.getByRole('button'));

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('has no accessibility violations by default', async () => {
    const { container } = render(<IconButton icon={ArrowUpRight} label="Open project" />);
    expect(await axe(container)).toHaveNoViolations();
  });

  it.each(variants)(
    'renders the "%s" variant with no accessibility violations',
    async (variant) => {
      const { container } = render(
        <IconButton icon={ArrowUpRight} label="Open project" variant={variant} />,
      );
      expect(await axe(container)).toHaveNoViolations();
    },
  );

  it.each(sizes)('renders the "%s" size with no accessibility violations', async (size) => {
    const { container } = render(
      <IconButton icon={ArrowUpRight} label="Open project" size={size} />,
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});
