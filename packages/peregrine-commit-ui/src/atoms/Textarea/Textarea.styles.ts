import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-family: var(--font-body);
`;

export const LabelText = styled.span`
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--color-text-primary);
`;

export const StyledTextarea = styled.textarea`
  padding: 10px 12px;
  border-radius: var(--radius-sm);
  border: 1.5px solid var(--color-border);
  background: var(--color-surface);
  color: var(--color-text-primary);
  font-size: 0.9375rem;
  font-family: var(--font-body);
  outline: none;
  resize: vertical;
  transition: border-color var(--duration-fast) var(--ease-standard);

  &:focus-visible {
    border-color: var(--color-accent);
    box-shadow: var(--shadow-focus);
  }
`;
