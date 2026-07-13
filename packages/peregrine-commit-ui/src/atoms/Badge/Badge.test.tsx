import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import { describe, expect, it } from 'vitest';

import { Badge } from './Badge';

const tones = ['neutral', 'accent', 'success'] as const;

describe('Badge', () => {
  it('renders its text content', () => {
    render(<Badge>New</Badge>);
    expect(screen.getByText('New')).toBeInTheDocument();
  });

  it('has no accessibility violations by default', async () => {
    const { container } = render(<Badge>New</Badge>);
    expect(await axe(container)).toHaveNoViolations();
  });

  it.each(tones)('renders the "%s" tone with no accessibility violations', async (tone) => {
    const { container } = render(<Badge tone={tone}>New</Badge>);
    expect(await axe(container)).toHaveNoViolations();
  });
});
