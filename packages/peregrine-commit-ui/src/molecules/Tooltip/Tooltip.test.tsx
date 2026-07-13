import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import { describe, expect, it } from 'vitest';

import { Tooltip } from './Tooltip';

describe('Tooltip', () => {
  it('renders the label in a tooltip role', () => {
    render(
      <Tooltip label="Open in a new tab">
        <button type="button">Visit</button>
      </Tooltip>,
    );
    expect(screen.getByRole('tooltip')).toHaveTextContent('Open in a new tab');
  });

  it("wires the trigger's aria-describedby to the tooltip content", () => {
    render(
      <Tooltip label="Open in a new tab">
        <button type="button">Visit</button>
      </Tooltip>,
    );
    const trigger = screen.getByRole('button', { name: 'Visit' });
    const tooltip = screen.getByRole('tooltip');

    expect(trigger).toHaveAttribute('aria-describedby', tooltip.id);
  });

  it('has no accessibility violations', async () => {
    const { container } = render(
      <Tooltip label="Open in a new tab">
        <button type="button">Visit</button>
      </Tooltip>,
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});
