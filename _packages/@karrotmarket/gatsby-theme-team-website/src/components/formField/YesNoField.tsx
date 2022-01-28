import * as React from 'react';

import SingleSelectField from './SingleSelectField';
import messages from '../../translations.json';

type Props = Omit<
  React.ComponentProps<typeof SingleSelectField>,
  'options'
>;

const YES_NO_OPTIONS = [
  { label: messages.form_field__no_placeholder, value: '0' },
  { label: messages.form_field__yes_placeholder, value: '1' },
];

const YesNoField: React.FC<Props> = ({
  ...props
}) => {
  return (
    <SingleSelectField
      {...props}
      options={YES_NO_OPTIONS}
    />
  );
};

export default YesNoField;
