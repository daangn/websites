import * as React from 'react';

import * as Field from './Field';

type Props = {
  id?: string;
  type?: 'text' | 'email' | 'tel';
  className?: string;
  label: string;
  name: string;
  required?: boolean;
  placeholder?: string;
  description?: string;
};

const ShortTextField: React.FC<Props> = ({
  id: propId,
  type = 'text',
  className,
  placeholder,
  label,
  name,
  description,
  required = false,
}) => {
  const reactId = React.useId();
  const id = propId || reactId;

  return (
    <Field.Container className={className}>
      <Field.Label htmlFor={id} required={required}>
        {label}
      </Field.Label>
      <Field.Input type={type} id={id} name={name} required={required} placeholder={placeholder} />
      {description && <Field.Description>{description}</Field.Description>}
    </Field.Container>
  );
};

export default ShortTextField;
