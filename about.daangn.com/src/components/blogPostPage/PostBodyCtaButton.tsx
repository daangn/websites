import { mapLink, useLinkParser } from '@karrotmarket/gatsby-theme-website/src/link';
import { vars } from '@seed-design/design-token';
import { Link } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/config';
import { rem } from 'polished';
import React from 'react';

type PostBodyCtaButtonProps = {
  slice: GatsbyTypes.PostCtaButtonSection;
};

const PostBodyCtaButton: React.FC<PostBodyCtaButtonProps> = ({ slice }) => {
  const parseLink = useLinkParser();
  return (
    <Container>
      <strong>{slice.primary.cta_phrase}</strong>
      {mapLink(parseLink(slice.primary.cta_button_url?.url), {
        Internal: (link) => (
          <Button to={link.pathname} id="post-cta">
            {slice.primary.cta_button_text}
          </Button>
        ),
        External: (link) => (
          <Button as="a" href={link.url.href} rel="external noopener" id="post-cta">
            {slice.primary.cta_button_text}
          </Button>
        ),
      })}
    </Container>
  );
};

const Container = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  padding: `${rem(40)} 0`,
  marginTop: rem(20),
  marginBottom: rem(40),
  borderRadius: rem(10),
  backgroundColor: vars.$scale.color.gray100,
  textAlign: 'center',
  color: vars.$scale.color.gray700,

  '@md': {
    padding: `${rem(60)} 0`,
    borderRadius: rem(20),
  },
});

const Button = styled(Link, {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minWidth: rem(100),
  height: rem(40),
  marginTop: rem(12),
  padding: `${rem(22)} ${rem(16)}`,
  border: 'none',
  borderRadius: rem(6),
  backgroundColor: vars.$scale.color.carrot500,
  color: vars.$scale.color.gray00,
  fontWeight: 'bold',
  fontSize: '$body2',
  cursor: 'pointer',
});

export default PostBodyCtaButton;
