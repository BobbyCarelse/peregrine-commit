import { Textarea as BaseTextarea } from '@peregrine-commit/ui';
import { useField } from 'formik';
import type { BaseInputProps } from '../Input/Input';

export const Textarea = ({ name, label, placeholder }: BaseInputProps) => {
  const [{ value }, { error }, { setValue }] = useField(name);

  return (
    <BaseTextarea
      name={name}
      label={label}
      placeholder={placeholder}
      value={value}
      error={error}
      onChange={(e) => setValue(e?.currentTarget?.value)}
    />
  );
};
