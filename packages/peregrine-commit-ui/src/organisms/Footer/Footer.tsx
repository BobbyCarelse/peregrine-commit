import type { HTMLAttributes } from 'react';

import { Brand, Content, Copyright, FooterLink, Links, StyledFooter } from './Footer.styles';

export interface FooterProps extends HTMLAttributes<HTMLElement> {
  /** @default "hello@peregrinecommit.com" */
  email?: string;
  githubUrl?: string;
  linkedinUrl?: string;
}

export function Footer({
  email = 'hello@peregrinecommit.com',
  githubUrl,
  linkedinUrl,
  ...rest
}: FooterProps) {
  return (
    <StyledFooter {...rest}>
      <Content>
        <Brand>
          <svg viewBox="0 0 120 120" width={18} height={18} aria-hidden="true">
            <path
              d="M18,98 L60,22 L102,98"
              fill="none"
              stroke="var(--color-text-secondary)"
              strokeWidth={22}
              strokeLinecap="square"
              strokeLinejoin="miter"
            />
            <circle cx={60} cy={22} r={11} fill="var(--color-text-secondary)" />
          </svg>
          <Copyright>
            © {new Date().getFullYear()} Peregrine Commit. Built by Bobby Carelse.
          </Copyright>
        </Brand>

        <Links>
          <FooterLink href={`mailto:${email}`}>Email</FooterLink>
          {githubUrl && (
            <FooterLink href={githubUrl} target="_blank" rel="noreferrer">
              GitHub
            </FooterLink>
          )}
          {linkedinUrl && (
            <FooterLink href={linkedinUrl} target="_blank" rel="noreferrer">
              LinkedIn
            </FooterLink>
          )}
        </Links>
      </Content>
    </StyledFooter>
  );
}
