import { styled } from 'gatsby-theme-stitches/src/config';
import { rem } from 'polished';
import { vars } from '@seed-design/design-token';

const Search = styled('div', {
  gridArea: 'search',
  display: 'inline-flex',
  position: 'relative',
  alignItems: 'center',
  width: '100%',

  '@lg': {
    width: 'auto',
    marginLeft: 'auto',
  },

  '& > input':{
    flex:1,
    alignItems: 'center',
    height: rem(52),
    border: `1px solid ${vars.$scale.color.gray400}`,
    boxSizing: 'border-box',
    borderRadius: rem(8),
    typography: '$body2',
    paddingLeft: rem(52),
    paddingRight: rem(14),
    '::placeholder': {
      color: vars.$scale.color.gray500,
    },
    '&:focus': {
      border: `1px solid ${vars.$scale.color.carrot500}`,
    },
    '&:focus~svg': {
      color: vars.$scale.color.carrot500,
    },
  },
  '& > svg':{
    color: vars.$scale.color.gray400,
    position: 'absolute',
    left: rem(20),
  },
});

export default Search;