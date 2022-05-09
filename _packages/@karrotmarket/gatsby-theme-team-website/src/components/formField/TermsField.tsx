import * as React from 'react';
import { styled } from 'gatsby-theme-stitches/src/config';
import { rem } from 'polished';
import { vars } from '@seed-design/design-token'

import * as Field from './Field';

type Props = {
  className?: string,
  label: string,
  terms: string,
  description?: string,
};

const Terms = styled(Field.Input, {
  display: 'block',
  height: rem(200),
  paddingY: rem(16),
  overflowY: 'auto',
  color: vars.$scale.color.gray700,
  whiteSpace: 'pre-line',
  '> p, ul': {
    marginBottom: rem(16),
  },
  '> ul': {
    paddingLeft: rem(16),
  },
});

const TermsField: React.FC<Props> = ({
  className,
  label,
  terms,
  description,
}) => {
  return (
    <Field.Container className={className}>
      <Field.Label as="div" required>
        {label}
      </Field.Label>
      <Terms as="div" tabindex="0" dangerouslySetInnerHTML={{ __html: terms }} />
      {description && (
        <Field.Description>{description}</Field.Description>
      )}
    </Field.Container>
  );
};

export default TermsField;
