import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import { describe, expect, it } from 'vitest';
import { Stats } from './Stats';

describe('Stats', () => {
  it('renders the stat and description', () => {
    render(<Stats stat="7+ yrs" description="In production" />);
    expect(screen.getByText('7+ yrs')).toBeInTheDocument();
    expect(screen.getByText('In production')).toBeInTheDocument();
  });

  it('has no accessibility violations by default', async () => {
    const { container } = render(<Stats stat="7+ yrs" description="In production" />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
