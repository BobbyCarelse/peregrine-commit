import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';
import { describe, expect, it, vi } from 'vitest';

import { Textarea } from './Textarea';

describe('Textarea', () => {
  it('associates the label with the textarea', () => {
    render(<Textarea label="Message" />);
    expect(screen.getByLabelText('Message')).toBeInTheDocument();
  });

  it('defaults to 4 rows', () => {
    render(<Textarea label="Message" />);
    expect(screen.getByLabelText('Message')).toHaveAttribute('rows', '4');
  });

  it('respects a custom rows value', () => {
    render(<Textarea label="Message" rows={8} />);
    expect(screen.getByLabelText('Message')).toHaveAttribute('rows', '8');
  });

  it('fires onChange as the user types', async () => {
    const onChange = vi.fn();
    const user = userEvent.setup();
    render(<Textarea label="Message" onChange={onChange} />);

    await user.type(screen.getByLabelText('Message'), 'hi');

    expect(onChange).toHaveBeenCalledTimes(2);
  });

  it('marks the field invalid and shows the error message', () => {
    render(<Textarea label="Message" error="Message is required" />);
    const textarea = screen.getByLabelText('Message');

    expect(textarea).toHaveAttribute('aria-invalid', 'true');
    expect(screen.getByText('Message is required')).toBeInTheDocument();
  });

  it('shows help text when there is no error', () => {
    render(<Textarea label="Message" helpText="Markdown is supported" />);
    expect(screen.getByText('Markdown is supported')).toBeInTheDocument();
  });

  it('has no accessibility violations', async () => {
    const { container } = render(<Textarea label="Message" />);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('has no accessibility violations with an error', async () => {
    const { container } = render(<Textarea label="Message" error="Message is required" />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
