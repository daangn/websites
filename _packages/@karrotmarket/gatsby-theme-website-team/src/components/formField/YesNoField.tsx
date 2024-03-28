import { useTranslation } from '@karrotmarket/gatsby-theme-website-team/src/translation';
import * as React from 'react';

import SingleSelectField from './SingleSelectField';

type Props = Omit<React.ComponentProps<typeof SingleSelectField>, 'options'>;

const YesNoField: React.FC<Props> = ({ ...props }) => {
  const messages = useTranslation();

  const YES_NO_OPTIONS = [
    { label: messages.form_field__no_placeholder, value: '0' },
    { label: messages.form_field__yes_placeholder, value: '1' },
  ];

  return <SingleSelectField {...props} options={YES_NO_OPTIONS} />;
};

export default YesNoField;
