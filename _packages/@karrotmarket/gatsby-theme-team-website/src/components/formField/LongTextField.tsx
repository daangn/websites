/// <reference types="react/experimental" />
import * as React from 'react';
import { styled } from 'gatsby-theme-stitches/src/config';
import { rem } from 'polished';

import * as Field from './Field';

type Props = {
  id?: string,
  className?: string,
  label: string,
  name: string,
  required?: boolean,
  placeholder?: string,
  description?: string,
};

const LongTextInput = styled(Field.Input, {
  minHeight: rem(104),
  paddingY: rem(8),
});

const LongTextField: React.FC<Props> = ({
  id: propId,
  className,
  placeholder,
  label,
  name,
  description,
  required = false,
}) => {
  const reactId = React.unstable_useOpaqueIdentifier();
  const id = propId || reactId;

  return (
    <Field.Container className={className}>
      <Field.Label htmlFor={id} required={required}>
        {label}
      </Field.Label>
      <LongTextInput
        as="textarea"
        id={id}
        name={name}
        placeholder={placeholder}
        rows={5}
      />
      {description && (
        <Field.Description>{description}</Field.Description>
      )}
    </Field.Container>
  );
};

export default LongTextField;
