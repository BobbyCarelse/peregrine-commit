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

  it('applies background as a CSS variable', () => {
    render(
      <Container data-testid="wrapper" background="surface-sunken">
        Content
      </Container>,
    );
    expect(screen.getByTestId('wrapper')).toHaveStyle({
      backgroundColor: 'var(--color-surface-sunken)',
    });
  });

  it('applies flex, gap, and alignment as CSS', () => {
    render(
      <Container
        data-testid="wrapper"
        flex
        gap="space-4"
        alignItems="center"
        justifyContent="space-between"
        flexDirection="row"
        flexWrap="wrap"
      >
        Content
      </Container>,
    );
    const wrapper = screen.getByTestId('wrapper');
    expect(wrapper).toHaveStyle({
      display: 'flex',
      gap: 'var(--space-4)',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'row',
      flexWrap: 'wrap',
    });
  });
});
