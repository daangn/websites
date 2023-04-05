import { PrismicRichText } from '@prismicio/react';
import { vars } from '@seed-design/design-token';
import { styled } from 'gatsby-theme-stitches/src/config';
import { rem } from 'polished';
import React from 'react';

const PostBodyVerticalQuote = ({
  slice,
}: {
  slice: GatsbyTypes.PostVerticalQuoteSection;
}) => {
  return (
    <Container>
      <PrismicRichText
        field={slice.primary.vertical_quote}
      />
    </Container>
  );
};

const Container = styled('section', {
  boxSizing: 'border-box',
  width: '100%',
  paddingLeft: rem(16),
  borderLeft: `4px solid ${vars.$scale.color.gray700}`,
});

export default PostBodyVerticalQuote;
