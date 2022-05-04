import { styled } from 'gatsby-theme-stitches/src/config';
import { rem } from 'polished';

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
    border: '1px solid $gray400',
    boxSizing: 'border-box',
    borderRadius: rem(8),
    typography: '$body2',
    paddingLeft: rem(52),
    paddingRight: rem(14),
    '::placeholder': {
      color: '$gray500',
    },
    '&:focus': {
      border: '1px solid $carrot500',
    },
    '&:focus~svg': {
      color: '$carrot500',
    },
  },
  '& > img':{
    color:'$gray400',
    position:'absolute',
    left: rem(20),
  },
});

export default Search;