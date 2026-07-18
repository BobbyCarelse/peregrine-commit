import type { HTMLAttributes } from 'react';

import { Heading } from '../../atoms/Heading';
import { Text } from '../../atoms/Text';
import type { SpacingProps } from '../../theme/spacingProps';
import { extractSpacingProps } from '../../theme/spacingProps';
import { Wrapper } from './SectionHeading.styles';

export interface SectionHeadingProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'style'>, SpacingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  /** Centers the eyebrow, title, and description as a block. @default false */
  centered?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
  ...props
}: SectionHeadingProps) {
  const [spacing, rest] = extractSpacingProps(props);

  return (
    <Wrapper $centered={centered} $spacing={spacing} {...rest}>
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
