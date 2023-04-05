import { PrismicRichText } from '@prismicio/react';
import { vars } from '@seed-design/design-token';
import { styled } from 'gatsby-theme-stitches/src/config';
import { rem } from 'polished';
import React from 'react';

type PostBodyVerticalQuoteProps = {
  slice: GatsbyTypes.PostVerticalQuoteSection;
};

const PostBodyVerticalQuote: React.FC<PostBodyVerticalQuoteProps> = ({ slice }) => {
  return (
    <Container>
      <PrismicRichText field={slice.primary.vertical_quote} />
    </Container>
  );
};

const Container = styled('section', {
  boxSizing: 'border-box',
  width: '100%',
  margin: `${rem(12)} 0`,
  paddingLeft: rem(16),
  borderLeft: `4px solid ${vars.$scale.color.gray700}`,
  fontSize: '$body2',
  lineHeight: rem(24),
  letterSpacing: rem(0.1),

  '@sm': {
    fontSize: '$body1',
    lineHeight: rem(28),
    letterSpacing: rem(0.4),
  },
});

export default PostBodyVerticalQuote;
