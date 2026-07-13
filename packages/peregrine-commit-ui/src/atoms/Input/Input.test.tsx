import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';
import { describe, expect, it, vi } from 'vitest';

import { Input } from './Input';

const types = ['text', 'email', 'tel', 'password'] as const;

describe('Input', () => {
  it('associates the label with the input', () => {
    render(<Input label="Email" />);
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
  });

  it('fires onChange as the user types', async () => {
    const onChange = vi.fn();
    const user = userEvent.setup();
    render(<Input label="Email" onChange={onChange} />);

    await user.type(screen.getByLabelText('Email'), 'hi');

    expect(onChange).toHaveBeenCalledTimes(2);
  });

  it('marks the field invalid and shows the error message', () => {
    render(<Input label="Email" error="Enter a valid email" />);
    const input = screen.getByLabelText('Email');

    expect(input).toHaveAttribute('aria-invalid', 'true');
    expect(screen.getByText('Enter a valid email')).toBeInTheDocument();
  });

  it('shows help text when there is no error', () => {
    render(<Input label="Email" helpText="We will never share this" />);
    expect(screen.getByText('We will never share this')).toBeInTheDocument();
  });

  it('has no accessibility violations by default', async () => {
    const { container } = render(<Input label="Email" />);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('has no accessibility violations with an error', async () => {
    const { container } = render(<Input label="Email" error="Enter a valid email" />);
    expect(await axe(container)).toHaveNoViolations();
  });

  it.each(types)('renders the "%s" type with no accessibility violations', async (type) => {
    const { container } = render(<Input label="Field" type={type} />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
