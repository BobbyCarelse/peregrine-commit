import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import { describe, expect, it, vi } from 'vitest';

import { Card } from './Card';

describe('Card', () => {
  it('renders its children', () => {
    render(
      <Card>
        <p>Project details</p>
      </Card>,
    );
    expect(screen.getByText('Project details')).toBeInTheDocument();
  });

  it('is not focusable by default', () => {
    render(<Card data-testid="card">Content</Card>);
    expect(screen.getByTestId('card')).not.toHaveAttribute('tabindex');
  });

  it('becomes keyboard-focusable when interactive', () => {
    render(
      <Card interactive data-testid="card" onClick={vi.fn()}>
        Content
      </Card>,
    );
    expect(screen.getByTestId('card')).toHaveAttribute('tabindex', '0');
  });

  it('has no accessibility violations at rest', async () => {
    const { container } = render(
      <Card>
        <p>Project details</p>
      </Card>,
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  it('has no accessibility violations when interactive', async () => {
    const { container } = render(
      <Card interactive onClick={vi.fn()}>
        <p>Project details</p>
      </Card>,
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});
