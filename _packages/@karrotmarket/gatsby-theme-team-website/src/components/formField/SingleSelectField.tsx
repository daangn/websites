/// <reference types="react/next" />
import * as React from 'react';
import { styled } from 'gatsby-theme-stitches/src/config';
import { rem } from 'polished';
import { vars } from '@seed-design/design-token';

import * as Field from './Field';
import { useTranslation } from '@karrotmarket/gatsby-plugin-lokalise-translation/src/translation';

type Props = {
  id?: string,
  className?: string,
  label: string,
  name: string,
  description?: string,
  required?: boolean,
  options: Array<{
    label: string,
    value: string,
  }>,
  defaultValue?: string,
};

const Container = styled(Field.Container, {
  display: 'grid',
  gridTemplateAreas: '"label" "select"',

});

const Label = styled(Field.Label, {
  gridArea: 'label',
});

const Select = styled(Field.Input, {
  boxSizing: 'border-box',
  display: 'grid',
  gridTemplateAreas: '"select"',
  gridArea: 'select',
  alignItems: 'center',
  appearance: 'none',
  padding: 0,
  '&::after': {
    content: '""',
    gridArea: 'select',
    gridColumnStart: 'none',
    gridColumnEnd: 'none',
    justifySelf: 'end',
    width: '0.8em',
    height: '0.5em',
    marginRight: rem(20),
    clipPath: 'polygon(100% 0%, 0 0%, 50% 100%)',
    background: vars.$scale.color.gray500,
  },
});

const InnerSelect = styled(Field.Input, {
  width: '100%',
  border: 'none',
  boxSizing: 'border-box',
  gridArea: 'select',
  gridColumnEnd: 4,
  alignItems: 'center',
  appearance: 'none',
  backgroundColor: 'transparent',
  '&::-ms-expand': {
    display: 'none',
  },
});

const SingleSelectField: React.FC<Props> = ({
  id: propId,
  className,
  label,
  name,
  description,
  required,
  options,
  defaultValue = '',
}) => {
  const messages = useTranslation();

  const reactId = React.useId();
  const id = propId || reactId;

  return (
    <Container className={className}>
      <Field.Label htmlFor={id} required={required}>
        {label}
      </Field.Label>
      <Select as="div">
        <InnerSelect
          as="select"
          id={id}
          name={name}
          required={required}
          defaultValue={defaultValue}
        >
          <option value="">{messages.form_field__empty_placeholder}</option>
          {options.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </InnerSelect>
      </Select>
      {description && (
        <Field.Description>{description}</Field.Description>
      )}
    </Container>
  );
};

export default SingleSelectField;
