import { Link } from 'gatsby';
import { rem } from 'polished';
import { styled } from 'gatsby-theme-stitches/src/config';
import { vars } from '@seed-design/design-token';

const PostFooter = () => {
  return (
    <Footer>
      <Home to="/blog">블로그 홈</Home>
    </Footer>
  );
};

const Footer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  boxSizing: 'border-box',
  width: 'max-content',
  maxWidth: rem(1200),
  margin: '0 auto',
  marginTop: rem(66),
  paddingX: rem(84),
});

const Home = styled(Link, {
  width: 'fit-content',
  padding: `${rem(16)} ${rem(20)}`,
  border: 'none',
  borderRadius: rem(40),
  backgroundColor: vars.$scale.color.gray50,
  color: vars.$scale.color.gray900,
  fontSize: '$body1',
  fontWeight: 'bold',
  textDecoration: 'none',
  pointer: 'cursor',
});

export default PostFooter;
