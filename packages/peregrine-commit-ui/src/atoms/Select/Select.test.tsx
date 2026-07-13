import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';
import { describe, expect, it, vi } from 'vitest';

import { Select } from './Select';

const options = [
  { value: 'banking', label: 'Banking' },
  { value: 'crypto', label: 'Crypto' },
  { value: 'logistics', label: 'Logistics' },
];

describe('Select', () => {
  it('associates the label with the select and renders every option', () => {
    render(<Select label="Industry" options={options} onChange={vi.fn()} />);
    const select = screen.getByLabelText('Industry');

    expect(select).toBeInTheDocument();
    expect(screen.getAllByRole('option')).toHaveLength(3);
  });

  it('fires onChange when a new option is picked', async () => {
    const onChange = vi.fn();
    const user = userEvent.setup();
    render(<Select label="Industry" options={options} value="banking" onChange={onChange} />);

    await user.selectOptions(screen.getByLabelText('Industry'), 'crypto');

    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it('has no accessibility violations', async () => {
    const { container } = render(<Select label="Industry" options={options} onChange={vi.fn()} />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
