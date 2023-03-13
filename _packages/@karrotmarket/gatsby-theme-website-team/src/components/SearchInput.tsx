import * as React from 'react';
import { styled } from 'gatsby-theme-stitches/src/config';
import { rem } from 'polished';
import { vars } from '@seed-design/design-token';
import SeedIcon from '@karrotmarket/gatsby-theme-seed-design/src/Icon';

type SearchInputProps = {
  query: string;
  onChangeQuery: (value: string) => void;
  placeholder: string;
};

const Root = styled('div', {
  gridArea: 'search',
  display: 'inline-flex',
  position: 'relative',
  alignItems: 'center',
  width: '100%',

  '@lg': {
    width: 'auto',
    marginLeft: 'auto',
  },

  '& > input': {
    flex: 1,
    alignItems: 'center',
    height: rem(52),
    background: vars.$semantic.color.paperDefault,
    border: `1px solid ${vars.$scale.color.gray400}`,
    boxSizing: 'border-box',
    borderRadius: rem(8),
    typography: '$body2',
    paddingLeft: rem(52),
    paddingRight: rem(14),
    '::placeholder': {
      color: vars.$scale.color.gray400,
    },
    '&:focus': {
      border: `1px solid ${vars.$scale.color.carrot500}`,
    },
    '&:focus~svg': {
      color: vars.$scale.color.carrot500,
    },
  },
  '& > [data-seed-icon]': {
    color: vars.$scale.color.gray400,
    position: 'absolute',
    left: rem(4),
  },
  '&:focus-within > [data-seed-icon]': {
    color: vars.$semantic.color.primary,
  },
});

const Icon = styled(SeedIcon, {
  width: '100%',
  height: '100%',
  padding: '0.9rem',
  boxSizing: 'border-box',
});

export default function SearchInput({ query, onChangeQuery, placeholder }: SearchInputProps) {
  const handleChange = React.useCallback<React.ChangeEventHandler<HTMLInputElement>>(
    (e) => {
      onChangeQuery(e.currentTarget.value);
    },
    [onChangeQuery],
  );

  return (
    <Root>
      <input placeholder={placeholder} value={query} onChange={handleChange} />
      <Icon name="icon_search_regular" />
    </Root>
  );
}
