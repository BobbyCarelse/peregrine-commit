import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import { describe, expect, it } from 'vitest';

import { Container } from './Container';

describe('Container', () => {
  it('renders its children', () => {
    render(
      <Container>
        <p>Content</p>
      </Container>,
    );
    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it('forwards native div attributes', () => {
    render(<Container data-testid="wrapper">Content</Container>);
    expect(screen.getByTestId('wrapper')).toBeInTheDocument();
  });

  it('has no accessibility violations', async () => {
    const { container } = render(
      <Container>
        <p>Content</p>
      </Container>,
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});
