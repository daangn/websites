import type { PropOf } from '@cometjs/react-utils';
import { useTranslation } from '@karrotmarket/gatsby-theme-website-team/src/translation';
import { vars } from '@seed-design/design-token';
import { styled } from 'gatsby-theme-stitches/src/config';
import * as React from 'react';

import * as Field from './Field';

type Props = {
  id?: string;
  name: string;
  label: string;
  placeholder?: string;
  description?: string;
  className?: string;
  required?: boolean;

  /**
   * Mime-types
   */
  accepts: string[];
};

const FileInput = styled(Field.Input, {
  display: 'flex',
  color: vars.$scale.color.gray500,
  cursor: 'pointer',
  transition: 'box-shadow .25s ease',
  'input:focus + label > &': {
    outlineStyle: 'solid',
    outlineColor: '-webkit-focus-ring-color',
    '@media (prefers-reduced-motion: no-preference)': {
      transition: 'outline-offset .25s ease',
      outlineOffset: '3px',
    },
  },
});

const FileAttachmentField: React.FC<Props> = ({
  id: paramId,
  name,
  label,
  placeholder,
  description,
  className,
  accepts,
  required = false,
}) => {
  const messages = useTranslation();

  const reactId = React.useId();
  const id = paramId || reactId;

  const [filename, setFilename] = React.useState(placeholder || '');
  const fileRef = React.useRef<HTMLInputElement>(null);

  type ChangeHandler = NonNullable<PropOf<typeof Field.Input, 'onChange'>>;
  const handleFileChange: ChangeHandler = () => {
    if (fileRef.current?.files?.[0]) {
      setFilename(fileRef.current.files[0].name);
    }
  };

  return (
    <Field.Container className={className}>
      <input
        ref={fileRef}
        id={id}
        name={name}
        type="file"
        accept={accepts.join(', ')}
        required={required}
        onChange={handleFileChange}
        style={{ opacity: 0, height: 0 }}
      />
      <label htmlFor={id}>
        <Field.Label as="div" required={required} css={{ display: 'flex' }}>
          {label}
        </Field.Label>
        <FileInput as="div">{filename || messages.form_field__placeholder}</FileInput>
      </label>
      {description && <Field.Description>{description}</Field.Description>}
    </Field.Container>
  );
};

export default FileAttachmentField;
