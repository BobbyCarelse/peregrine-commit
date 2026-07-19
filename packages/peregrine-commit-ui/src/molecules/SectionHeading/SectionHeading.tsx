import type { ComponentProps, HTMLAttributes } from 'react';

import { Heading } from '../../atoms/Heading';
import { Text } from '../../atoms/Text';
import type { SpaceToken, SpacingProps } from '../../theme/spacingProps';
import { extractSpacingProps } from '../../theme/spacingProps';
import { Wrapper } from './SectionHeading.styles';

export interface SectionHeadingProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'style'>, SpacingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  /** Centers the eyebrow, title, and description as a block. @default false */
  centered?: boolean;
  gap?: SpaceToken;
  heading?: ComponentProps<typeof Heading>;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
  gap,
  heading,
  ...props
}: SectionHeadingProps) {
  const [spacing, rest] = extractSpacingProps(props);

  return (
    <Wrapper $centered={centered} $spacing={spacing} gap={gap} {...rest}>
      {eyebrow && (
        <Text as="span" variant="overline" color="accent" weight={700}>
          {eyebrow}
        </Text>
      )}
      <Heading variant="display" size="md" weight={700} {...heading}>
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
