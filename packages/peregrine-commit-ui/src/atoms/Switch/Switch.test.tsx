import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';
import { describe, expect, it, vi } from 'vitest';

import { Switch } from './Switch';

const sizes = ['sm', 'md'] as const;

describe('Switch', () => {
  it('associates the label with the switch', () => {
    render(<Switch label="Enable dark mode" onChange={vi.fn()} />);
    expect(screen.getByRole('switch', { name: 'Enable dark mode' })).toBeInTheDocument();
  });

  it('reflects the checked prop', () => {
    render(<Switch label="Enable dark mode" checked readOnly />);
    expect(screen.getByRole('switch')).toBeChecked();
  });

  it('fires onChange when toggled', async () => {
    const onChange = vi.fn();
    const user = userEvent.setup();
    render(<Switch label="Enable dark mode" checked={false} onChange={onChange} />);

    await user.click(screen.getByRole('switch'));

    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it('does not fire onChange when disabled', async () => {
    const onChange = vi.fn();
    const user = userEvent.setup();
    render(<Switch label="Enable dark mode" disabled onChange={onChange} />);

    await user.click(screen.getByRole('switch'));

    expect(onChange).not.toHaveBeenCalled();
    expect(screen.getByRole('switch')).toBeDisabled();
  });

  it('has no accessibility violations unchecked', async () => {
    const { container } = render(<Switch label="Enable dark mode" onChange={vi.fn()} />);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('has no accessibility violations checked', async () => {
    const { container } = render(<Switch label="Enable dark mode" checked readOnly />);
    expect(await axe(container)).toHaveNoViolations();
  });

  it.each(sizes)('renders the "%s" size with no accessibility violations', async (size) => {
    const { container } = render(
      <Switch label="Enable dark mode" size={size} onChange={vi.fn()} />,
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});
