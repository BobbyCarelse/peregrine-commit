import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import { describe, expect, it } from 'vitest';

import { Footer } from './Footer';

describe('Footer', () => {
  it('renders the copyright line and a mailto link with the default email', () => {
    render(<Footer />);
    expect(screen.getByText(/Peregrine Commit\. Built by Bobby Carelse\./)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Email' })).toHaveAttribute(
      'href',
      'mailto:hello@peregrinecommit.com',
    );
  });

  it('uses a custom email when provided', () => {
    render(<Footer email="bobby@example.com" />);
    expect(screen.getByRole('link', { name: 'Email' })).toHaveAttribute(
      'href',
      'mailto:bobby@example.com',
    );
  });

  it('only renders GitHub/LinkedIn links when URLs are provided', () => {
    const { rerender } = render(<Footer />);
    expect(screen.queryByRole('link', { name: 'GitHub' })).not.toBeInTheDocument();
    expect(screen.queryByRole('link', { name: 'LinkedIn' })).not.toBeInTheDocument();

    rerender(
      <Footer
        githubUrl="https://github.com/example"
        linkedinUrl="https://linkedin.com/in/example"
      />,
    );
    expect(screen.getByRole('link', { name: 'GitHub' })).toHaveAttribute(
      'href',
      'https://github.com/example',
    );
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toHaveAttribute(
      'href',
      'https://linkedin.com/in/example',
    );
  });

  it('has no accessibility violations by default', async () => {
    const { container } = render(<Footer />);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('has no accessibility violations with every link present', async () => {
    const { container } = render(
      <Footer
        githubUrl="https://github.com/example"
        linkedinUrl="https://linkedin.com/in/example"
      />,
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});
