import { Input as BaseInput } from '@peregrine-commit/ui';
import { useField } from 'formik';
import type { ComponentProps } from 'react';

export interface BaseInputProps extends Pick<
  ComponentProps<typeof BaseInput>,
  'placeholder' | 'type' | 'label'
> {
  name: string;
}

export const Input = ({ name, label, placeholder, type }: BaseInputProps) => {
  const [{ value }, { error }, { setValue }] = useField(name);

  return (
    <BaseInput
      name={name}
      label={label}
      placeholder={placeholder}
      type={type}
      error={error}
      value={value}
      onChange={(e) => setValue(e?.currentTarget?.value)}
    />
  );
};
