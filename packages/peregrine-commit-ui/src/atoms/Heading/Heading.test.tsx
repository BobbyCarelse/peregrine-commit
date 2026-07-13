import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import { describe, expect, it } from 'vitest';

import { Heading } from './Heading';

const displaySizes = ['xl', 'lg', 'md', 'sm'] as const;
const headingSizes = ['lg', 'md', 'sm'] as const;
const colors = ['primary', 'secondary', 'muted', 'accent', 'onAccent'] as const;

describe('Heading', () => {
  it('renders its children', () => {
    render(<Heading>I build software that has to work.</Heading>);
    expect(screen.getByText('I build software that has to work.')).toBeInTheDocument();
  });

  it('renders as an h2 by default', () => {
    render(<Heading>Title</Heading>);
    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument();
  });

  it('renders as the element passed via "as"', () => {
    render(<Heading as="h1">Title</Heading>);
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });

  it('has no accessibility violations by default', async () => {
    const { container } = render(<Heading>Title</Heading>);
    expect(await axe(container)).toHaveNoViolations();
  });

  it.each(displaySizes)(
    'renders the "display" variant at "%s" size with no accessibility violations',
    async (size) => {
      const { container } = render(
        <Heading variant="display" size={size}>
          Title
        </Heading>,
      );
      expect(await axe(container)).toHaveNoViolations();
    },
  );

  it.each(headingSizes)(
    'renders the "heading" variant at "%s" size with no accessibility violations',
    async (size) => {
      const { container } = render(
        <Heading variant="heading" size={size}>
          Title
        </Heading>,
      );
      expect(await axe(container)).toHaveNoViolations();
    },
  );

  it.each(colors)('renders the "%s" color with no accessibility violations', async (color) => {
    const { container } = render(<Heading color={color}>Title</Heading>);
    expect(await axe(container)).toHaveNoViolations();
  });
});
