import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';
import { describe, expect, it, vi } from 'vitest';

import { Checkbox } from './Checkbox';

describe('Checkbox', () => {
  it('associates the label with the checkbox', () => {
    render(<Checkbox label="Subscribe to updates" onChange={vi.fn()} />);
    expect(screen.getByLabelText('Subscribe to updates')).toBeInTheDocument();
  });

  it('reflects the checked prop', () => {
    render(<Checkbox label="Subscribe to updates" checked readOnly />);
    expect(screen.getByLabelText('Subscribe to updates')).toBeChecked();
  });

  it('fires onChange when toggled', async () => {
    const onChange = vi.fn();
    const user = userEvent.setup();
    render(<Checkbox label="Subscribe to updates" checked={false} onChange={onChange} />);

    await user.click(screen.getByLabelText('Subscribe to updates'));

    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it('has no accessibility violations unchecked', async () => {
    const { container } = render(<Checkbox label="Subscribe to updates" onChange={vi.fn()} />);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('has no accessibility violations checked', async () => {
    const { container } = render(<Checkbox label="Subscribe to updates" checked readOnly />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
