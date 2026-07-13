import styled from 'styled-components';

export const StyledTag = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 10px 4px 12px;
  border-radius: var(--radius-sm);
  border: 1px solid var(--color-border);
  background: var(--color-surface);
  font-family: var(--font-body);
  font-size: 0.8125rem;
  color: var(--color-text-primary);
`;

export const RemoveButton = styled.button`
  display: inline-flex;
  padding: 0;
  border: none;
  background: none;
  color: var(--color-text-secondary);
  cursor: pointer;

  &:hover {
    color: var(--color-text-primary);
  }
`;
