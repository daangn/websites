import { PrismicRichText } from "@prismicio/react";
import { rem } from "polished";
import { styled } from "gatsby-theme-stitches/src/config";
import { vars } from '@seed-design/design-token';

const PostBodyRichText = ({
  slice,
}: {
  slice: Queries.PrismicEventPageDataBodyHeroMedia
}) => {
  return (
    <section>
      <PrismicRichText
        field={slice.primary.content}
        components={{
          heading2: ({ children, key }) => <SubTitle key={key}>{children}</SubTitle>,
          paragraph: ({ children, key }) => <Description key={key}>{children}</Description>,
          image: ({ node }) => {
            return (
              <Image
                src={node.url}
                alt={node.alt ?? undefined}
                data-copyright={node.copyright ? node.copyright : undefined}
              />
            );
          },
        }}
      />
    </section>
  );
}

const SubTitle = styled("h2", {
  fontSize: rem(20),
  marginTop: rem(40),
  marginBottom: rem(18),
});

const Description = styled("p", {
  fontSize: rem(13),
  lineHeight: rem(22),
  color: vars.$scale.color.gray600,
  letterSpacing: rem(-0.1),
});

const Image = styled("img", {
  width: "100%",
  margin: `${rem(20)} 0`,
});

export default PostBodyRichText;
