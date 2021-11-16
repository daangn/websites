import * as React from 'react';

import SingleSelectField from './SingleSelectField';
import messages from './messages';

type Props = Omit<
  React.ComponentProps<typeof SingleSelectField>,
  'options'
>;

const YES_NO_OPTIONS = [
  { label: messages.select_no, value: '0' },
  { label: messages.select_yes, value: '1' },
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
