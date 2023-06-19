import * as React from 'react';
import { PrismicRichText } from '@prismicio/react';
import { rem } from 'polished';
import { styled } from 'gatsby-theme-stitches/src/config';
import { vars } from '@seed-design/design-token';

type PrPostBodySummaryBulletSection = {
  slice: GatsbyTypes.PostSummaryBulletSection;
};

const PrPostBodySummaryBulletSection: React.FC<PrPostBodySummaryBulletSection> = ({ slice }) => {
  return (
    <Container>
      <PrismicRichText
        field={slice.primary.summary_bullet_content}
        components={{
          paragraph: ({ children, key }) => <Paragraph key={key}>{children}</Paragraph>,
          list: ({ children, key }) => <UList key={key}>{children}</UList>,
          strong: ({ children, key }) => <Strong key={key}>{children}</Strong>,
        }}
      />
    </Container>
  );
};

const Container = styled('section', {
  width: '100%',
  marginBottom: rem(40),
  fontSize: vars.$scale.dimension.fontSize150,

  '@sm': {
    fontSize: vars.$scale.dimension.fontSize200,
  },
});

const UList = styled('ul', {
  lineHeight: rem(30),
  paddingInlineStart: rem(20),
});

const Strong = styled('strong', {
  fontWeight: 700,
});

const Paragraph = styled('p', {
  lineHeight: rem(30),
});

export default PrPostBodySummaryBulletSection;
