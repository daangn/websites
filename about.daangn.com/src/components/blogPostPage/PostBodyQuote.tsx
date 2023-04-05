import { PrismicRichText } from '@prismicio/react';
import { vars } from '@seed-design/design-token';
import { styled } from 'gatsby-theme-stitches/src/config';
import { rem } from 'polished';
import React from 'react';

import { ReactComponent as QuoteOpen } from '../../assets/icon_quote_open.svg';
import { ReactComponent as QuoteClose } from '../../assets/icon_quote_close.svg';

const PostBodyQuote = ({
  slice,
}: {
  slice: GatsbyTypes.PostQuoteSection;
}) => {
  return (
    <Container>
      <QuoteOpen />
      <PrismicRichText
        field={slice.primary.quote}
        components={{
          paragraph: ({ children, key }) => <QuoteText key={key}>{children}</QuoteText>,
          heading3: ({ children, key }) => (<Heading3 key={key}>{children}</Heading3>),
          heading4: ({ children, key }) => (<Heading4 key={key}>{children}</Heading4>),
          heading5: ({ children, key }) => (<Heading5 key={key}>{children}</Heading5>),
        }}
      />
      <QuoteClose />
    </Container>
  );
};

const Container = styled('section', {
  width: '100%',
  textAlign: 'center',
  color: vars.$scale.color.gray600,
});

const QuoteText = styled('p', {
  margin: `${rem(20)} 0`,
});

const Heading3 = styled(QuoteText, {
  typography: '$subtitle1',
  fontWeight: 'bold',
});

const Heading4 = styled(QuoteText, {
  typography: '$subtitle2',
  fontWeight: 'bold',
});

const Heading5 = styled(QuoteText, {
  typography: '$subtitle3',
  fontWeight: 'bold',
});

export default PostBodyQuote;
