import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';
import { describe, expect, it, vi } from 'vitest';

import { NavBar } from './NavBar';

const links = [
  { href: '#work', label: 'Work' },
  { href: '#about', label: 'About' },
];

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
});
