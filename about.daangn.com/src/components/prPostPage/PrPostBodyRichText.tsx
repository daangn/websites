import * as React from 'react';
import { PrismicRichText } from '@prismicio/react';
import { rem } from 'polished';
import { styled } from 'gatsby-theme-stitches/src/config';
import { vars } from '@seed-design/design-token';

type PrPostBodyRichText = {
  slice: GatsbyTypes.PostRichTextSection;
};

const PrPostBodyRichText: React.FC<PrPostBodyRichText> = ({ slice }) => {
  return (
    <Container>
      <PrismicRichText
        field={slice.primary.content}
        components={{
          heading2: ({ children, key }) => <Heading2 key={key}>{children}</Heading2>,
          heading3: ({ children, key }) => <Heading3 key={key}>{children}</Heading3>,
          paragraph: ({ children, key }) => <Description key={key}>{children}</Description>,
          preformatted: ({ node, key }) => {
            return (
              <div className="Code">
                <pre key={key}>
                  <code className="language-javascript">{node.text}</code>
                </pre>
              </div>
            );
          },
          list: ({ children, key }) => <UList key={key}>{children}</UList>,
          oList: ({ children, key }) => <OList key={key}>{children}</OList>,
          image: ({ node }) => {
            return (
              <Image
                src={node.url}
                alt={node.alt ?? undefined}
                data-copyright={node.copyright ? node.copyright : undefined}
              />
            );
          },
          embed: ({ node, key }) => (
            <Embed
              key={key}
              data-oembed={node.oembed.embed_url}
              data-oembed-type={node.oembed.type}
              data-oembed-provider={node.oembed.provider_name}
              dangerouslySetInnerHTML={{ __html: node.oembed.html ?? '' }}
            />
          ),
        }}
      />
    </Container>
  );
};

export const Head: React.FC = () => {
  return (
    <>
      <meta name="robots" content="noindex" />
    </>
  );
};

const Container = styled('section', {
  width: '100%',
  marginBottom: rem(10),
  fontSize: '$body2',
  lineHeight: rem(26),
  letterSpacing: rem(0.4),
  color: vars.$scale.color.gray900,

  '& a': {
    color: vars.$scale.color.gray900,
    fontWeight: 'bold',
  },

  '@sm': {
    fontSize: '$body1',
    lineHeight: rem(28),
    letterSpacing: rem(0.4),
  },
});

const Heading2 = styled('h2', {
  fontSize: rem(20),
  marginTop: rem(20),
  marginBottom: rem(12),

  '@sm': {
    fontSize: rem(24),
    marginTop: rem(40),
    marginBottom: rem(18.72),
  },
});

const Heading3 = styled('h3', {
  marginTop: rem(24),
  marginBottom: rem(14),
});

const Description = styled('p', {
  width: '100%',
  minHeight: rem(16),
  marginBottom: rem(12),
  lineHeight: rem(26),
  letterSpacing: rem(0.4),
  fontSize: '$body2',
  color: vars.$scale.color.gray900,
  wordBreak: 'break-all',

  '@sm': {
    fontSize: '$body1',
    lineHeight: rem(28),
    letterSpacing: rem(0.4),
  },
});

const UList = styled('ul', {
  lineHeight: rem(30),
  margin: 0,
  marginBottom: rem(12),
  paddingInlineStart: rem(42),
  color: vars.$scale.color.gray900,
});

const OList = styled('ol', {
  margin: 0,
  marginBottom: rem(12),
  lineHeight: rem(30),
  paddingInlineStart: rem(42),
  color: vars.$scale.color.gray900,
});

const Image = styled('img', {
  width: '100%',
  margin: `${rem(20)} 0`,
});

const Embed = styled('div', {});

export default PrPostBodyRichText;
