import type { HTMLAttributes } from 'react';

import type { SectionHeadingAlign } from './SectionHeading.styles';
import { Description, Eyebrow, Title, Wrapper } from './SectionHeading.styles';

export interface SectionHeadingProps extends HTMLAttributes<HTMLDivElement> {
  eyebrow?: string;
  title: string;
  description?: string;
  /** @default "left" */
  align?: SectionHeadingAlign;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  ...rest
}: SectionHeadingProps) {
  return (
    <Wrapper $align={align} {...rest}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <Title>{title}</Title>
      {description && <Description>{description}</Description>}
    </Wrapper>
  );
}
