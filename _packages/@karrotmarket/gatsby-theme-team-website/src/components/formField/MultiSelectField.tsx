/// <reference types="react/next" />
import * as React from 'react';
import { styled } from 'gatsby-theme-stitches/src/config';
import { rem } from 'polished';
import FocusTrap from 'focus-trap-react';

import * as Field from './Field';
import checkmarkUrl from '!!file-loader!./checkmark.svg';
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
};

type State = {
  opened: boolean,
  selection: {
    [value: string]: boolean,
  },
  options: Array<{
    label: string,
    value: string,
  }>,
  selectedOptions: Array<{
    label: string,
    value: string,
  }>,
};

type Action = (
  | {
    type: 'OPEN',
  }
  | {
    type: 'CLOSE',
  }
  | {
    type: 'SELECT_OPTION',
    value: string,
  }
  | {
    type: 'UNSELECT_OPTION',
    value: string,
  }
);

const reducer: React.Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case 'OPEN':
      return { ...state, opened: true };
    case 'CLOSE':
      return { ...state, opened: false };
  }

  switch (action.type) {
    case 'SELECT_OPTION': {
      state.selection[action.value] = true;
      break;
    }
    case 'UNSELECT_OPTION': {
      state.selection[action.value] = false;
      break;
    }
  }
  const selectedOptions: Array<{ label: string, value: string }> = [];
  for (const option of state.options) {
    if (state.selection[option.value]) {
      selectedOptions.push(option);
    }
  }
  return {
    ...state,
    selectedOptions,
  };
};

const Select = styled(Field.Input, {
  position: 'relative',
  boxSizing: 'border-box',
  display: 'grid',
  gridTemplateAreas: '"select"',
  gridArea: 'select',
  alignItems: 'center',
  appearance: 'none',
  backgroundColor: '$white',
  textAlign: 'left',
  '&::-ms-expand': {
    display: 'none',
  },
  '&::after': {
    content: '""',
    gridArea: 'select',
    gridColumnStart: 'none',
    gridColumnEnd: 'none',
    justifySelf: 'end',
    width: '0.8em',
    height: '0.5em',
    clipPath: 'polygon(100% 0%, 0 0%, 50% 100%)',
    background: '$gray500',
  },
});

const Selection = styled('div', {
  display: 'flex',
  gap: rem(8),
});

const SelectionItem = styled('span', {
  background: '$gray200',
  paddingX: rem(20),
  borderRadius: rem(8),
  '& + &:before': {
    marginLeft: rem(8),
  },
});

const Menu = styled('div', {
  position: 'absolute',
  display: 'grid',
  top: '100%',
  marginTop: rem(8),
  width: '100%',
  background: '$white',
  border: '1px solid $gray400',
  borderRadius: rem(8),
  overflow: 'hidden',
  zIndex: 1,
});

const MenuItem = styled('button', {
  display: 'inline-flex',
  boxSizing: 'border-box',
  width: '100%',
  background: '$white',
  border: 'none',
  outline: 'none',
  padding: rem(16),
  lineHeight: 1.3,
  textAlign: 'left',
  transition: 'transform 0.15s ease-in',

  '&:hover, &:focus': {
    background: '$gray200',
  },

  variants: {
    selected: {
      true: {
        $$offset: rem(16),
        '&::before': {
          content: '',
          display: 'inline-block',
          width: '$$offset',
          height: '$$offset',
          backgroundImage: `url(${checkmarkUrl})`,
        },
      },
    },
  },
});

const MenuItemLabel = styled('span', {
  transition: 'transform 0.3s ease',
  transform: `translateX($$offset)`,
});

const MultiSelectField: React.FC<Props> = ({
  id: propId,
  className,
  options,
  label,
  name,
  description,
  required,
}) => {
  const messages = useTranslation();

  const reactId = React.useId();
  const id = propId || reactId;

  const [state, dispatch] = React.useReducer(reducer, null, () => ({
    opened: false,
    options,
    selectedOptions: [],
    selection: Object.fromEntries(options.map(option => [option.value, false] as const)),
  }));

  // TODO: 이거 required 밸리데이션 어떻게 하지...? :thinking_face:

  return (
    <Field.Container className={className}>
      <Field.Label htmlFor={id} required={required}>
        {label}
      </Field.Label>
      <Select
        as="button"
        type="button"
        onClick={e => {
          e.preventDefault();
          dispatch({ type: 'OPEN' });
        }}
      >
        {state.selectedOptions.length === 0 && (
          messages.form_field__empty_placeholder
        )}
        <Selection>
          {state.selectedOptions.map(option => (
            <SelectionItem key={'label-' + option.value}>
              {option.label}
            </SelectionItem>
          ))}
          {state.selectedOptions.map((option, i) => (
            <input
              key={'hidden-' + option.value}
              type="hidden"
              name={name}
              value={option.value}
            />
          ))}
        </Selection>
      </Select>
      {state.opened && (
        <FocusTrap
          focusTrapOptions={{
            clickOutsideDeactivates: true,
            onDeactivate: () => dispatch({ type: 'CLOSE' }),
          }}
        >
          <Menu>
            {state.options.map(option => (
              <MenuItem
                key={option.value}
                selected={state.selection[option.value]}
                onClick={
                  e => {
                    e.preventDefault();
                    if (state.selection[option.value]) {
                      dispatch({ type: 'UNSELECT_OPTION', value: option.value });
                    } else {
                      dispatch({ type: 'SELECT_OPTION', value: option.value });
                    }
                    e.stopPropagation();
                  }
                }
              >
                <MenuItemLabel>{option.label}</MenuItemLabel>
              </MenuItem>
            ))}
          </Menu>
        </FocusTrap>
      )}
      <noscript>
        <Select
          as="select"
          id={id}
          name={name}
          required={required}
          multiple
          css={{
            width: '100%',
            minHeight: rem(120),
            '> option': {
              padding: rem(8),
            },
          }}
        >
          {options.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Select>
      </noscript>
      {description && (
        <Field.Description>{description}</Field.Description>
      )}
    </Field.Container>
  );
};

export default MultiSelectField;
