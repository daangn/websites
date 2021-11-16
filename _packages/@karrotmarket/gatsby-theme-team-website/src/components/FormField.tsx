/// <reference types="react/experimental" />

import * as React from 'react';
import { styled } from 'gatsby-theme-stitches/src/config';
import { rem } from 'polished';
import type { PropOf } from '@cometjs/react-utils';

import messages from './formField/messages';

type FormFieldVariants = (
  | {
    type: 'text',
  }
  | {
    type: 'longtext',
  }
  | {
    type: 'tel',
  }
  | {
    type: 'email',
  }
  | {
    type: 'select',
    options: {
      value: string,
      label: string,
    }[],
    defaultValue?: string,
  }
  | {
    type: 'checkbox',
    defaultChecked?: boolean,
  }
  | {
    type: 'radio',
    options: {
      value: string,
      label: string,
    }[],
    defaultValue?: string,
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
  typography: '$body2',
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
  typography: '$body2',
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

const LongTextInput = styled(Input, {
  minHeight: rem(104),
});

const FileInput = styled(Input, {
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

const Select = styled(Input, {
  boxSizing: 'border-box',
  display: 'grid',
  gridTemplateAreas: '"select"',
  gridArea: 'select',
  alignItems: 'center',
  appearance: 'none',
  backgroundColor: '$white',
  '&::-ms-expand': {
    display: 'none',
  },
  '&::after': {
    content: '""',
    gridArea: 'select',
    justifySelf: 'end',
    width: '0.8em',
    height: '0.5em',
    clipPath: 'polygon(100% 0%, 0 0%, 50% 100%)',
    background: '$gray500',
  },
});

const CheckboxContainer = styled('label', {
  display: 'inline-grid',
  gridTemplateColumns: 'min-content auto',
  gridGap: '0.5em',
});

const Checkbox = styled('span', {
  display: 'grid',
  gridTemplateAreas: '"checkbox"',
  '& > *': {
    gridArea: 'checkbox',
  },
});

const CheckboxControl = styled('input', {
  opacity: 0,
  width: '1em',
  height: '1em',
});

const CheckboxLabel = styled('span', {
});

const Checkmark = styled('span', {
  width: '1.2em',
  height: '1.2em',
  border: '1px solid $gray500',
  borderRadius: '0.3em',
  color: '$carrot500',
  transition: 'box-shadow .25s ease',
  'input:focus + &': {
    boxShadow: '0 0 0 0.05em #fff, 0 0 0.15em 0.1em currentColor',
  },
});

const CheckmarkSvg = styled('svg', {
  transition: 'transform 0.1s ease-in 25ms',
  transform: 'scale(0)',
  transformOrigin: 'bottom left',
  'input:checked + * > &': {
    transform: 'scale(1)',
  }
});

// fieldset 이면 좋겠으나...
// See https://bugs.chromium.org/p/chromium/issues/detail?id=375693
const RadioGroupContainer = styled('div', {
  display: 'grid',
  border: 'none',
  padding: 0,
});

// legend 이면 좋겠으나...
// See https://bugs.chromium.org/p/chromium/issues/detail?id=375693
const RadioGroupLabel = styled('div', {
  display: 'inline-flex',
  alignItems: 'center',
  color: '$gray700',
  typography: '$body2',
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

const RadioButtonContainer = styled('div', {
  display: 'grid',
});

const RadioButton = styled('label', {
  display: 'flex',
  alignItems: 'center',
  typography: '$body2',
  color: '$gray700',
  cursor: 'pointer',
});

const RadioButtonInput = styled('input', {
  appearance: 'none',
});

const Radiomark = styled('span', {
  display: 'grid',
  alignItems: 'center',
  justifyContent: 'center',
  width: rem(16),
  height: rem(16),
  borderRadius: '50%',
  border: '1px solid $gray500',
  marginRight: rem(14),
  color: '$carrot500',
  transition: 'box-shadow .25s ease',

  'input:focus + &': {
    boxShadow: '0 0 0 0.05em #fff, 0 0 0.15em 0.1em currentColor',
  },

  'input:checked + &': {
    borderColor: '$carrot500',
  },

  'input:checked + &::after': {
    background: '$carrot500',
  },

  '&::after': {
    content: '',
    width: rem(10),
    height: rem(10),
    borderRadius: '50%',
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
  children,
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
    case 'tel': {
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
    }
    case 'longtext': {
      return (
        <Container className={className}>
          <Label htmlFor={id} required={required}>
            {label}
          </Label>
          <LongTextInput
            as="textarea"
            id={id}
            name={name}
            placeholder={placeholder}
            rows={5}
          />
          {description && (
            <Description>{description}</Description>
          )}
        </Container>
      );
    }
    case 'select': {
      return (
        <Container className={className}>
          <Label htmlFor={id} required={required}>
            {label}
          </Label>
          <Select
            as="select"
            id={id}
            name={name}
            defaultValue={variants.defaultValue}
          >
            {variants.options.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Select>
        </Container>
      );
    }
    case 'checkbox': {
      return (
        <CheckboxContainer className={className}>
          <Checkbox>
            <CheckboxControl type="checkbox" name={name} defaultChecked={variants.defaultChecked} />
            <Checkmark>
              <CheckmarkSvg viewBox="0 0 24 24" fill="none">
                <rect width="24" height="24" rx="4" fill="none"/>
                <rect width="24" height="24" rx="4" stroke="currentColor"/>
                <path d="M18.4711 7.52876C18.7314 7.78911 18.7314 8.21122 18.4711 8.47157L10.4711 16.4716C10.2107 16.7319 9.78862 16.7319 9.52827 16.4716L5.52827 12.4716C5.26792 12.2112 5.26792 11.7891 5.52827 11.5288C5.78862 11.2684 6.21073 11.2684 6.47108 11.5288L9.99967 15.0574L17.5283 7.52876C17.7886 7.26841 18.2107 7.26841 18.4711 7.52876Z" fill="currentColor" />
              </CheckmarkSvg>
            </Checkmark>
          </Checkbox>
          <CheckboxLabel>{label}</CheckboxLabel>
        </CheckboxContainer>
      );
    }
    case 'radio': {
      return (
        <RadioGroupContainer
          className={className}
          aria-role="radiogroup"
        >
          {label && (
            <RadioGroupLabel key="label" required={required}>
              {label}
            </RadioGroupLabel>
          )}
          <RadioButtonContainer
            css={{
              gridTemplateColumns: `repeat(${variants.options.length}, 1fr)`,
            }}
          >
            {variants.options.map(option => (
              <RadioButton key={option.value}>
                <RadioButtonInput
                  type="radio"
                  name={name}
                  value={option.value}
                  defaultChecked={option.value === variants.defaultValue}
                />
                <Radiomark />
                {option.label}
              </RadioButton>
            ))}
          </RadioButtonContainer>
        </RadioGroupContainer>
      );
    }
    case 'file': {
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
              {filename || messages.attach_file}
            </FileInput>
          </label>
          {description && (
            <Description>{description}</Description>
          )}
        </Container>
      );
    }
    case 'terms': {
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
  }
};

export default FormField;
