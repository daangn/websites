import { PrismicRichText } from '@prismicio/react';
import { vars } from '@seed-design/design-token';
import { styled } from 'gatsby-theme-stitches/src/config';
import { rem } from 'polished';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import React from 'react';

type PostBodyRichTextProps = {
  slice: GatsbyTypes.PostRichTextSection;
};

const PostBodyRichText: React.FC<PostBodyRichTextProps> = ({ slice }) => {
  React.useEffect(() => {
    Prism.highlightAll();
  }, []);

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
            <EmbedWrapper>
              <Embed
                key={key}
                data-oembed={node.oembed.embed_url}
                data-oembed-type={node.oembed.type}
                data-oembed-provider={node.oembed.provider_name}
                dangerouslySetInnerHTML={{ __html: node.oembed.html ?? '' }}
              />
            </EmbedWrapper>
          ),
        }}
      />
    </Container>
  );
};

const Container = styled('section', {
  width: '100%',
  marginBottom: rem(10),
  fontSize: '$body2',
  lineHeight: rem(28),
  letterSpacing: rem(0.1),
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
  marginTop: rem(40),
  marginBottom: rem(18.72),
  lineHeight: "150%",
  fontSize: rem(26),

  '@sm': {
    fontSize: rem(30),
  },
});

const Heading3 = styled('h3', {
  marginTop: rem(24),
  marginBottom: rem(14),
  lineHeight: "150%",
  fontSize: rem(22),

  '@sm': {
    fontSize: rem(25),
  },
});

const Description = styled('p', {
  width: '100%',
  minHeight: rem(16),
  marginBottom: rem(12),
  lineHeight: rem(28),
  letterSpacing: rem(0),
  fontSize: rem(17),
  textAlign: 'left',
  wordBreak: 'keep-all',

  '@sm': {
    fontSize: rem(17),
    lineHeight: rem(28),
    letterSpacing: rem(0.1),
  },
});

const UList = styled('ul', {
  margin: 0,
  marginBottom: rem(12),
  paddingInlineStart: rem(32),

  '@sm': {
    lineHeight: rem(30),
    paddingInlineStart: rem(42),
  },
});

const OList = styled('ol', {
  margin: 0,
  marginBottom: rem(12),
  paddingInlineStart: rem(32),

  '@sm': {
    paddingInlineStart: rem(42),
    lineHeight: rem(30),
  },
});

const Image = styled('img', {
  width: '100%',
  margin: `${rem(20)} 0`,
});

const EmbedWrapper = styled('div', {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const Embed = styled('div', {
  '& > iframe': {
    width: 300,
    height: 160,

    '@sm': {
      width: 500,
      height: 300,
    },
  },
});

export default PostBodyRichText;
