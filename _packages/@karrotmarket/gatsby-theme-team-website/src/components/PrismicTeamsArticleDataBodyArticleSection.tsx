import * as React from 'react';
import { rem } from 'polished';
import { graphql } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/config';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import { Condition } from '@cometjs/core';
import { vars } from '@seed-design/design-token'

type PrismicTeamsArticleDataBodyArticleSectionProps = {
  data: GatsbyTypes.PrismicTeamsArticleDataBodyArticleSection_dataFragment,
  className?: string,
};

export const query = graphql`
  fragment PrismicTeamsArticleDataBodyArticleSection_data on PrismicTeamsArticleDataBodyArticleSection {
    primary {
      title {
        text
      }
      body_text {
        html
      }
    }
    items {
      thumbnail_description {
        text
      }
      thumbnail_image {
        alt
        localFile {
          childImageSharp {
            gatsbyImageData(
              quality: 100
              width: 760
              layout: CONSTRAINED
            )
          }
        }
      }
    }
  }
`;

const Container = styled('section', {
  display: 'grid',
  gap: rem(24),
});

const Title = styled('h2', {
  typography: '$subtitle3',

  '@md': {
    typography: '$subtitle2',
  },
});

const BodyText = styled('div', {
  typography: '$body2',
  color: vars.$scale.color.gray700,
});

const ThumbnailContainer = styled('div', {
  display: 'grid',
  gap: rem(24),
});

const Thumbnail = styled('figure', {
  display: 'grid',
  gap: rem(24),
});

const ThumbnailImage = styled(GatsbyImage, {
  marginX: rem(-24),

  '@md': {
    marginX: 0,
  },
});

const ThumbnailCaption = styled('figcaption', {
  typography: '$caption1',
  color: vars.$scale.color.gray500,
});

const PrismicTeamsArticleDataBodyArticleSection: React.FC<PrismicTeamsArticleDataBodyArticleSectionProps> = ({
  data,
  className,
}) => {
  if (!data.primary?.title?.text) {
    return null;
  }

  return (
    <Container className={className}>
      <Title>{data.primary.title.text}</Title>
      <BodyText dangerouslySetInnerHTML={{ __html: data.primary.body_text?.html || '' }} />
      <ThumbnailContainer>
        {data.items?.filter(Condition.isTruthy).map((item, i) => {
          const image = item.thumbnail_image?.localFile?.childImageSharp?.gatsbyImageData && getImage(item.thumbnail_image.localFile.childImageSharp.gatsbyImageData);
          if (image == null) {
            return null
          }

          return (
            <Thumbnail key={i}>
              <ThumbnailImage
                image={image}
                alt={item.thumbnail_image?.alt || ''}
              />
              <ThumbnailCaption>
                {item.thumbnail_description?.text || ''}
              </ThumbnailCaption>
            </Thumbnail>
          );
        })}
      </ThumbnailContainer>
    </Container>
  );
};

export default PrismicTeamsArticleDataBodyArticleSection;
