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
      <p>{slice.primary.cta_phrase}</p>
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
  width: '100%',
  marginTop: rem(100),
  marginBottom: rem(60),
  textAlign: 'center',
  color: vars.$scale.color.gray700,
  borderRadius: rem(22),
  // backgroundColor: vars.$scale.color.gray100,
  // padding: `${rem(40)} 0`,
});

const Button = styled('button', {
  width: rem(100),
  height: rem(40),
  marginTop: rem(20),
  border: `2px solid ${vars.$scale.color.carrot500}`,
  borderRadius: rem(4),
  backgroundColor: vars.$scale.color.carrot500,
  fontWeight: 'bold',
  fontSize: '$body3',
  color: vars.$scale.color.gray100,
  cursor: 'pointer',
});

export default PostBodyCtaButton;
