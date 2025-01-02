import { PrismicRichText } from '@prismicio/react';
import { vars } from '@seed-design/design-token';
import { styled } from 'gatsby-theme-stitches/src/config';
import { rem } from 'polished';
import React from 'react';

import { IconQuotationmark2LeftFill, IconQuotationmark2RightFill } from '@daangn/react-monochrome-icon';

type PostBodyQuoteProps = {
  slice: GatsbyTypes.PostQuoteSection;
};

const PostBodyQuote: React.FC<PostBodyQuoteProps> = ({ slice }) => {
  return (
    <Container>
      <IconQuotationmark2LeftFill size={18} />
      <PrismicRichText
        field={slice.primary.quote}
        components={{
          paragraph: ({ children, key }) => <QuoteText key={key}>{children}</QuoteText>,
          heading3: ({ children, key }) => <Heading3 key={key}>{children}</Heading3>,
          heading4: ({ children, key }) => <Heading4 key={key}>{children}</Heading4>,
          heading5: ({ children, key }) => <Heading5 key={key}>{children}</Heading5>,
        }}
      />
      <IconQuotationmark2RightFill size={18} />
    </Container>
  );
};

const Container = styled('section', {
  width: '100%',
  textAlign: 'center',
  color: vars.$scale.color.gray600,
  margin: `${rem(50)} 0`,
});

const QuoteText = styled('p', {
  margin: `${rem(20)} 0`,
  padding: `0 ${rem(8)}`,
});

const Heading3 = styled(QuoteText, {
  typography: '$subtitle2',
  fontWeight: 'bold',

  '@md': {
    typography: '$subtitle1',
  },
});

const Heading4 = styled(QuoteText, {
  typography: '$subtitle3',
  fontWeight: 'bold',

  '@md': {
    typography: '$subtitle2',
  },
});

const Heading5 = styled(QuoteText, {
  typography: '$subtitle4',
  fontWeight: 'bold',

  '@md': {
    typography: '$subtitle3',
  },
});

export default PostBodyQuote;
