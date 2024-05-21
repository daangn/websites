import SeedIcon from '@karrotmarket/gatsby-theme-seed-design/src/Icon';
import { vars } from '@seed-design/design-token';
import { navigate } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/config';
import { rem } from 'polished';
import * as React from 'react';

type Props = {
  search: string;
  onSearchChange: (query: string) => void;
};

const SearchInput = ({ search, onSearchChange }: Props) => {
  const handleSearchQueryChange = React.useCallback<React.ChangeEventHandler<HTMLInputElement>>(
    (e) => {
      onSearchChange(e.currentTarget.value);
    },
    [onSearchChange],
  );

  return (
    <Container>
      <Icon name="icon_search_regular" />
      <Input
        type="text"
        placeholder="블로그 검색"
        value={search}
        onChange={handleSearchQueryChange}
      />
    </Container>
  );
};

const Container = styled('div', {
  display: 'none',
  gap: '10px',
  alignItems: 'center',
  padding: '10px 20px',
  border: 'none',
  borderRadius: rem(40),
  fontSize: rem(18),
  color: vars.$scale.color.gray600,
  backgroundColor: vars.$scale.color.gray100,

  '@media (min-width: 880px)': {
    display: 'flex',
  },

  '&:focus-within': {
    outline: `1px solid ${vars.$scale.color.gray700}`,
  },
});

const Icon = styled(SeedIcon, {
  width: rem(24),
  height: rem(24),

  ':focus-within > &': {
    color: vars.$scale.color.gray800,
  },
});

const Input = styled('input', {
  width: rem(120),
  backgroundColor: vars.$scale.color.gray100,
  fontSize: '$body2',
  color: vars.$scale.color.gray700,
  border: 'none',
  outline: 'none',
});

export default SearchInput;
