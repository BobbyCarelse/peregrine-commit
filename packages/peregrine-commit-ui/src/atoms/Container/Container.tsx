import type { BoxProps } from '../../primitives/Box';
import { StyledContainer } from './Container.styles';

export type ContainerProps = BoxProps;

export function Container(props: ContainerProps) {
  return <StyledContainer {...props} />;
}
