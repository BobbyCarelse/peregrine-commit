import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import { describe, expect, it } from 'vitest';

import { SectionHeading } from './SectionHeading';

describe('SectionHeading', () => {
  it('renders the title as a heading', () => {
    render(<SectionHeading title="How I work" />);
    expect(screen.getByRole('heading', { name: 'How I work', level: 2 })).toBeInTheDocument();
  });

  it('renders the eyebrow and description when provided', () => {
    render(<SectionHeading eyebrow="How I work" title="Process" description="Commit by commit." />);
    expect(screen.getByText('How I work')).toBeInTheDocument();
    expect(screen.getByText('Commit by commit.')).toBeInTheDocument();
  });

  it('omits the eyebrow and description when not provided', () => {
    render(<SectionHeading title="Process" />);
    expect(screen.queryByText('Commit by commit.')).not.toBeInTheDocument();
  });

  it('has no accessibility violations by default', async () => {
    const { container } = render(<SectionHeading title="How I work" />);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('has no accessibility violations when centered', async () => {
    const { container } = render(<SectionHeading title="How I work" centered />);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('centers content as a block when centered is set', () => {
    render(<SectionHeading data-testid="wrapper" title="How I work" centered />);
    expect(screen.getByTestId('wrapper')).toHaveStyle({ textAlign: 'center' });
  });

  it('left-aligns content by default', () => {
    render(<SectionHeading data-testid="wrapper" title="How I work" />);
    expect(screen.getByTestId('wrapper')).toHaveStyle({ textAlign: 'left' });
  });
});
