/// <reference types="react/experimental" />

import * as React from 'react';
import { styled } from 'gatsby-theme-stitches/src/stitches.config';
import { rem } from 'polished';
import type { PropOf } from '@cometjs/react-utils';

type FormFieldVariants = (
  | {
    type: 'text',
  }
  | {
    type: 'tel',
  }
  | {
    type: 'email',
  }
  | {
    type: 'file',
    accepts: string[],
  }
  | {
    type: 'terms',
    terms: string,
  }
);
type FormFieldProps = {
  variants: FormFieldVariants,
  name: string,
  label: string,
  className?: string,
  placeholder?: string,
  description?: string,
  required?: boolean,
};

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
});

const Label = styled('label', {
  display: 'inline-flex',
  alignItems: 'center',
  color: '$gray700',
  fontSize: '$body2',
  marginBottom: rem(8),
  variants: {
    required: {
      true: {
        '&::after': {
          content: '""',
          display: 'inline-block',
          marginLeft: rem(4),
          width: rem(6),
          height: rem(6),
          background: '$carrot500',
          borderRadius: '50%',
        },
      },
    },
  },
});

const Input = styled('input', {
  display: 'inline-flex',
  alignItems: 'center',
  height: rem(52),
  border: '1px solid $gray400',
  borderRadius: rem(8),
  fontSize: '$body2',
  paddingX: rem(20),
  '&:focus': {
    border: '1px solid $carrot500',
  },
  '::placeholder': {
    color: '$gray500',
  },
});

const TextInput = styled(Input, {
});

const FileInput = styled(Input, {
  display: 'flex',
  color: '$gray500',
  cursor: 'pointer',
  'input:focus + label > &': {
    border: '1px solid $carrot500',
  },
});

const TermsInput = styled(Input, {
  display: 'block',
  height: rem(200),
  paddingY: rem(16),
  overflowY: 'auto',
  color: '$gray700',
  whiteSpace: 'pre-line',
  '> p, ul': {
    marginBottom: rem(16),
  },
  '> ul': {
    paddingLeft: rem(16),
  },
});

const Description = styled('p', {
  color: '$gray600',
  marginTop: rem(16),
});

const FormField: React.FC<FormFieldProps> = ({
  variants,
  name,
  label,
  className,
  placeholder,
  description,
  required = false,
}) => {
  const id = React.unstable_useOpaqueIdentifier();

  const [filename, setFilename] = React.useState(placeholder);
  const fileRef = React.useRef<HTMLInputElement>(null);

  type ChangeHandler = NonNullable<PropOf<typeof Input, 'onChange'>>;
  const handleFileChange: ChangeHandler = () => {
    if (fileRef.current?.files?.[0]) {
      setFilename(fileRef.current.files[0].name);
    }
  };

  switch (variants.type) {
    case 'text':
    case 'email':
    case 'tel':
      return (
        <Container className={className}>
          <Label htmlFor={id} required={required}>
            {label}
          </Label>
          <TextInput
            id={id}
            name={name}
            type={variants.type}
            placeholder={placeholder}
          />
          {description && (
            <Description>{description}</Description>
          )}
        </Container>
      );
    case 'file':
      return (
        <Container className={className}>
          <input
            ref={fileRef}
            id={id}
            name={name}
            type="file"
            accept={variants.accepts.join(', ')}
            onChange={handleFileChange}
            style={{ opacity: 0, height: 0 }}
          />
          <label htmlFor={id}>
            <Label as="div" required={required} css={{ display: 'flex' }}>
              {label}
            </Label>
            <FileInput as="div">
              {filename || '파일 첨부하기'}
            </FileInput>
          </label>
          {description && (
            <Description>{description}</Description>
          )}
        </Container>
      );
    case 'terms':
      return (
        <Container className={className}>
          <Label as="div" required={required}>
            {label}
          </Label>
          <TermsInput as="div" dangerouslySetInnerHTML={{ __html: variants.terms }} />
          {description && (
            <Description>{description}</Description>
          )}
        </Container>
      );
  }
};

export default FormField;
