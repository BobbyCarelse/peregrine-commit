import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import { describe, expect, it } from 'vitest';

import { Text } from './Text';

const variants = ['body', 'label', 'mono', 'overline'] as const;
const sizes = ['lg', 'md', 'sm'] as const;
const colors = [
  'primary',
  'secondary',
  'muted',
  'accent',
  'onAccent',
  'success',
  'danger',
  'warning',
] as const;

describe('Text', () => {
  it('renders its children', () => {
    render(<Text>Honest work and honest feedback.</Text>);
    expect(screen.getByText('Honest work and honest feedback.')).toBeInTheDocument();
  });

  it('renders as a <p> by default', () => {
    render(<Text data-testid="text">Content</Text>);
    expect(screen.getByTestId('text').tagName).toBe('P');
  });

  it('renders as the element passed via "as"', () => {
    render(
      <Text as="span" data-testid="text">
        Content
      </Text>,
    );
    expect(screen.getByTestId('text').tagName).toBe('SPAN');
  });

  it('has no accessibility violations by default', async () => {
    const { container } = render(<Text>Content</Text>);
    expect(await axe(container)).toHaveNoViolations();
  });

  it.each(variants)(
    'renders the "%s" variant with no accessibility violations',
    async (variant) => {
      const { container } = render(<Text variant={variant}>Content</Text>);
      expect(await axe(container)).toHaveNoViolations();
    },
  );

  it.each(sizes)('renders the "%s" size with no accessibility violations', async (size) => {
    const { container } = render(<Text size={size}>Content</Text>);
    expect(await axe(container)).toHaveNoViolations();
  });

  it.each(colors)('renders the "%s" color with no accessibility violations', async (color) => {
    const { container } = render(<Text color={color}>Content</Text>);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('overrides the variant/size font-weight when "weight" is passed', () => {
    render(
      <Text data-testid="text" weight={800}>
        Content
      </Text>,
    );
    expect(screen.getByTestId('text')).toHaveStyle({ fontWeight: 'var(--font-weight-800)' });
  });
});
