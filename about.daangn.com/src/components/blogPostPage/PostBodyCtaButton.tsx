import { vars } from '@seed-design/design-token';
import { styled } from 'gatsby-theme-stitches/src/config';
import { rem } from 'polished';
import React from 'react';

type PostBodyCtaButtonProps = {
  slice: GatsbyTypes.PostCtaButtonSection;
};

const PostBodyCtaButton: React.FC<PostBodyCtaButtonProps> = ({ slice }) => {
  return (
    <Container>
      <strong>{slice.primary.cta_phrase}</strong>
      <Button
        onClick={() => {
          window.location.href = slice.primary.cta_button_url?.url;
        }}
      >
        {slice.primary.cta_button_text}
      </Button>
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

const Button = styled('button', {
  display: 'flex',
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
