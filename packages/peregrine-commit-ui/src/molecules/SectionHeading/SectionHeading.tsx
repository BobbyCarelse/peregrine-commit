import type { HTMLAttributes } from 'react';

import { Heading } from '../../atoms/Heading';
import { Text } from '../../atoms/Text';
import type { SpacingProps } from '../../theme/spacingProps';
import { extractSpacingProps } from '../../theme/spacingProps';
import type { SectionHeadingAlign } from './SectionHeading.styles';
import { Wrapper } from './SectionHeading.styles';

export interface SectionHeadingProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'style'>, SpacingProps {
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
  ...props
}: SectionHeadingProps) {
  const [spacing, rest] = extractSpacingProps(props);

  return (
    <Wrapper $align={align} $spacing={spacing} {...rest}>
      {eyebrow && (
        <Text as="span" variant="overline" color="accent">
          {eyebrow}
        </Text>
      )}
      <Heading variant="display" size="md">
        {title}
      </Heading>
      {description && (
        <Text variant="body" size="lg" color="secondary">
          {description}
        </Text>
      )}
    </Wrapper>
  );
}
