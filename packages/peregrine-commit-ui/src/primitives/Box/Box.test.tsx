import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import { describe, expect, it } from 'vitest';

import { Box } from './Box';

describe('Box', () => {
  it('renders its children', () => {
    render(
      <Box>
        <p>Content</p>
      </Box>,
    );
    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it('forwards native div attributes', () => {
    render(<Box data-testid="wrapper">Content</Box>);
    expect(screen.getByTestId('wrapper')).toBeInTheDocument();
  });

  it('has no accessibility violations', async () => {
    const { container } = render(
      <Box>
        <p>Content</p>
      </Box>,
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  it('defaults to a standard block box', () => {
    render(<Box data-testid="wrapper">Content</Box>);
    expect(screen.getByTestId('wrapper')).not.toHaveStyle({ display: 'flex' });
  });

  it('switches to flex and applies flex properties when flex is true', () => {
    render(
      <Box
        data-testid="wrapper"
        flex
        gap="space-4"
        alignItems="center"
        justifyContent="space-between"
        flexDirection="row"
        flexWrap="wrap"
      >
        Content
      </Box>,
    );
    expect(screen.getByTestId('wrapper')).toHaveStyle({
      display: 'flex',
      gap: 'var(--space-4)',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'row',
      flexWrap: 'wrap',
    });
  });

  it('ignores gap and flex properties when flex is not set', () => {
    render(
      <Box data-testid="wrapper" gap="space-4" alignItems="center">
        Content
      </Box>,
    );
    expect(screen.getByTestId('wrapper')).not.toHaveStyle({ gap: 'var(--space-4)' });
  });

  it('applies background as a CSS variable', () => {
    render(
      <Box data-testid="wrapper" background="surface-sunken">
        Content
      </Box>,
    );
    expect(screen.getByTestId('wrapper')).toHaveStyle({
      backgroundColor: 'var(--color-surface-sunken)',
    });
  });

  it('applies spacing props as CSS', () => {
    render(
      <Box data-testid="wrapper" p="space-4" mt="space-6">
        Content
      </Box>,
    );
    expect(screen.getByTestId('wrapper')).toHaveStyle({
      padding: 'var(--space-4)',
      marginTop: 'var(--space-6)',
    });
  });
});
