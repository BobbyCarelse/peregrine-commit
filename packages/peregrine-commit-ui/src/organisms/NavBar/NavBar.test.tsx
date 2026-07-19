import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';
import { describe, expect, it, vi } from 'vitest';

import { NavBar } from './NavBar';

const links = [
  { href: '#work', label: 'Work' },
  { href: '#about', label: 'About' },
];

// The menu toggle is only visually shown under a `max-width` media query, so
// jsdom always resolves it to `display: none`. That makes its accessible
// name compute to "" (hidden elements have no accname) and excludes it from
// getByRole, so it's queried by its aria-label attribute directly instead.
function getToggle(label: 'Open menu' | 'Close menu') {
  return screen.getByLabelText(label, { selector: 'button' });
}

describe('NavBar', () => {
  it('renders the brand name and every nav link', () => {
    render(<NavBar links={links} />);
    expect(screen.getByText('Peregrine Commit')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Work' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument();
  });

  it('marks the active link with aria-current', () => {
    render(<NavBar links={links} activeHref="#about" />);
    expect(screen.getByRole('link', { name: 'About' })).toHaveAttribute('aria-current', 'page');
    expect(screen.getByRole('link', { name: 'Work' })).not.toHaveAttribute('aria-current');
  });

  it('fires onNavigate instead of a full page navigation', async () => {
    const onNavigate = vi.fn();
    const user = userEvent.setup();
    render(<NavBar links={links} onNavigate={onNavigate} />);

    await user.click(screen.getByRole('link', { name: 'Work' }));

    expect(onNavigate).toHaveBeenCalledWith('#work');
  });

  it('renders a CTA button and fires onCta when clicked', async () => {
    const onCta = vi.fn();
    const user = userEvent.setup();
    render(<NavBar ctaLabel="Start a project" onCta={onCta} />);

    await user.click(screen.getByRole('button', { name: 'Start a project' }));

    expect(onCta).toHaveBeenCalledTimes(1);
  });

  it('has no accessibility violations', async () => {
    const { container } = render(<NavBar links={links} activeHref="#work" />);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('toggles the mobile menu open and closed', async () => {
    const user = userEvent.setup();
    render(<NavBar links={links} />);

    const toggle = getToggle('Open menu');
    expect(toggle).toHaveAttribute('aria-expanded', 'false');

    await user.click(toggle);
    expect(getToggle('Close menu')).toHaveAttribute('aria-expanded', 'true');

    await user.click(getToggle('Close menu'));
    expect(getToggle('Open menu')).toHaveAttribute('aria-expanded', 'false');
  });

  it('closes the mobile menu when a link is clicked, while still navigating', async () => {
    const onNavigate = vi.fn();
    const user = userEvent.setup();
    render(<NavBar links={links} onNavigate={onNavigate} />);

    await user.click(getToggle('Open menu'));
    expect(getToggle('Close menu')).toBeInTheDocument();

    await user.click(screen.getByRole('link', { name: 'Work' }));

    expect(onNavigate).toHaveBeenCalledWith('#work');
    expect(getToggle('Open menu')).toBeInTheDocument();
  });
});
