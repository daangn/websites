import React from 'react';
import { PrismicRichText } from '@prismicio/react';
import { rem } from 'polished';
import { styled } from 'gatsby-theme-stitches/src/config';
import { vars } from '@seed-design/design-token';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';

const PostBodyRichText = ({
  slice,
}: {
  slice: Queries.PrismicEventPageDataBodyHeroMedia;
}) => {
  React.useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <section>
      <PrismicRichText
        field={slice.primary.content}
        components={{
          heading2: ({ children, key }) => <SubTitle key={key}>{children}</SubTitle>,
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
    </section>
  );
};

const SubTitle = styled('h2', {
  marginTop: rem(40),
  marginBottom: rem(18),
});

const Description = styled('p', {
  marginBottom: rem(12),
  lineHeight: rem(28),
  fontSize: '$body1',
  color: vars.$scale.color.gray700,
  letterSpacing: rem(0.4),
});

const UList = styled('ul', {
  lineHeight: rem(30),
  margin: 0,
  marginBottom: rem(12),
  paddingInlineStart: rem(42),
  color: vars.$scale.color.gray700,
  fontSize: '$body1',
});

const OList = styled('ol', {
  lineHeight: rem(30),
  margin: 0,
  marginBottom: rem(12),
  paddingInlineStart: rem(42),
  color: vars.$scale.color.gray700,
  fontSize: '$body1',
});

const Image = styled('img', {
  width: '100%',
  margin: `${rem(20)} 0`,
});

const Embed = styled('div', {});

export default PostBodyRichText;
