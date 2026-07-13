import styled from 'styled-components';

export const Bubble = styled.span`
  position: absolute;
  bottom: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%);
  background: var(--color-text-primary);
  color: var(--color-bg);
  font-family: var(--font-body);
  font-size: 0.75rem;
  padding: 6px 10px;
  border-radius: var(--radius-sm);
  white-space: nowrap;
  z-index: 10;
  opacity: 0;
  pointer-events: none;
  transition: opacity var(--duration-fast) var(--ease-standard);
`;

export const Wrapper = styled.span`
  position: relative;
  display: inline-flex;

  &:hover ${Bubble}, &:focus-within ${Bubble} {
    opacity: 1;
  }
`;
