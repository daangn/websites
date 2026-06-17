import { vars } from '@seed-design/design-token';
import { styled } from 'gatsby-theme-stitches/src/config';
import { rem } from 'polished';

const Tag = ({ children }: { children: string }) => {
  return <Hashtag>{children}</Hashtag>;
};

const Hashtag = styled('span', {
  width: 'fit-content',
  border: 'none',
  borderRadius: rem(40),
  color: vars.$scale.color.gray600,
  fontSize: '$body2',

  '&::before': {
    content: '#',
  },

  /*
    Temporarily Disabled Styles
  */
  // padding: `${rem(8)} ${rem(16)}`,
  // backgroundColor: vars.$scale.color.gray100,
});

export default Tag;
