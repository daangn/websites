/// <reference types="react/experimental" />
import * as React from 'react';
import { styled } from 'gatsby-theme-stitches/src/config';
import type { PropOf } from '@cometjs/react-utils';

import * as Field from './Field';
import messages from './messages';

type Props = {
  id?: string,
  name: string,
  label: string,
  placeholder?: string,
  description?: string,
  className?: string,
  required?: boolean,

  /**
   * Mime-types
   */
  accepts: string[],
};

const FileInput = styled(Field.Input, {
  display: 'flex',
  color: '$gray500',
  cursor: 'pointer',
  transition: 'box-shadow .25s ease',
  'input:focus + label > &': {
    border: '1px solid $carrot500',
    // Note: $carrot500 을 써야하는데 브라우저 버그 때문에 css variable 적용이 안됨
    boxShadow: '0 0 0 0.05em #fff, 0 0 0.15em 0.1em #ff7e36',
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
  const reactId = React.unstable_useOpaqueIdentifier();
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
        <FileInput as="div">
          {filename || messages.attach_file}
        </FileInput>
      </label>
      {description && (
        <Field.Description>{description}</Field.Description>
      )}
    </Field.Container>
  );
};

export default FileAttachmentField;
