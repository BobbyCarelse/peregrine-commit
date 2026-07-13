import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import { describe, expect, it } from 'vitest';

import { Callout } from './Callout';

const tones = ['info', 'accent', 'success'] as const;

describe('Callout', () => {
  it('renders its content inside a note landmark', () => {
    render(<Callout>Ship it commit by commit.</Callout>);
    expect(screen.getByRole('note')).toHaveTextContent('Ship it commit by commit.');
  });

  it('has no accessibility violations by default', async () => {
    const { container } = render(<Callout>Ship it commit by commit.</Callout>);
    expect(await axe(container)).toHaveNoViolations();
  });

  it.each(tones)('renders the "%s" tone with no accessibility violations', async (tone) => {
    const { container } = render(<Callout tone={tone}>Ship it commit by commit.</Callout>);
    expect(await axe(container)).toHaveNoViolations();
  });
});
