import styled, { css } from 'styled-components';

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-family: var(--font-body);
`;

export const Label = styled.label`
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--color-text-primary);
`;

export const StyledInput = styled.input<{ $hasError: boolean }>`
  padding: 10px 12px;
  border-radius: var(--radius-sm);
  border: 1.5px solid var(--color-border);
  background: var(--color-surface);
  color: var(--color-text-primary);
  font-size: 0.9375rem;
  font-family: var(--font-body);
  outline: none;
  transition: border-color var(--duration-fast) var(--ease-standard);

  &:focus-visible {
    border-color: var(--color-accent);
    box-shadow: var(--shadow-focus);
  }

  ${({ $hasError }) =>
    $hasError &&
    css`
      border-color: var(--color-danger);

      &:focus-visible {
        border-color: var(--color-danger);
      }
    `}
`;

export const HelpText = styled.span<{ $isError: boolean }>`
  font-size: 0.75rem;
  color: ${({ $isError }) => ($isError ? 'var(--color-danger)' : 'var(--color-text-secondary)')};
`;
