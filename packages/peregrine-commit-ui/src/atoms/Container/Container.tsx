import type { HTMLAttributes } from 'react';

import { StyledContainer } from './Container.styles';

export type ContainerProps = HTMLAttributes<HTMLDivElement>;

export function Container(props: ContainerProps) {
  return <StyledContainer {...props} />;
}
