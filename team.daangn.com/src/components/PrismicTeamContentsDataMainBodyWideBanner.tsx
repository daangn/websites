import * as React from 'react';
import { rem } from 'polished';
import { graphql } from 'gatsby';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import { styled } from 'gatsby-theme-stitches/src/config';
import { useLinkParser } from '@karrotmarket/gatsby-theme-website/src/link';
import _DetailLink from '~/components/DetailLink';

type PrismicTeamContentsDataMainBodyWideBannerProps = {
  data: GatsbyTypes.PrismicTeamContentsDataMainBodyWideBanner_dataFragment,
  className?: string,
};

export const query = graphql`
  fragment PrismicTeamContentsDataMainBodyWideBanner_data on PrismicTeamContentsDataMainBodyWideBanner {
    primary {
      title {
        text
      }
      thumbnail {
        alt
        localFile {
          childImageSharp {
            gatsbyImageData(
              height: 540
              layout: CONSTRAINED
              quality: 100
            )
          }
        }
      }
      background_color
      link_text
      link {
        url
      }
    }
  }
`;

const Container = styled('section', {
});

const BannerImage = styled(GatsbyImage, {
  width: '100%',
});

const BannerContainer = styled('section', {
  display: 'grid',
  justifyContent: 'center',
  gap: rem(32),
  paddingX: rem(64),
  paddingY: rem(72),

  '@md': {
    paddingY: rem(100),
  },
});

const Title = styled('h1', {
  textAlign: 'center',
  typography: '$subtitle2',

  '@md': {
    typography: '$heading4',
  },
});

const DetailLink = styled(_DetailLink, {
  justifyContent: 'center',
});

const PrismicTeamContentsDataMainBodyWideBanner: React.FC<PrismicTeamContentsDataMainBodyWideBannerProps> = ({
  data,
  className,
}) => {
  const parseLink = useLinkParser();

  if (data.primary == null) {
    return null;
  }

  const thumbnailImage = data.primary.thumbnail?.localFile?.childImageSharp?.gatsbyImageData && getImage(
    data.primary.thumbnail.localFile.childImageSharp.gatsbyImageData
  );

  return (
    <Container className={className}>
      {thumbnailImage && (
        <BannerImage
          image={thumbnailImage}
          objectFit="cover"
          objectPosition="center"
          alt={data.primary.thumbnail?.alt || ''}
        />
      )}
      <BannerContainer
        css={{
          backgroundColor: data.primary.background_color,
        }}
      >
        <Title>{data.primary.title?.text}</Title>
        {data.primary.link?.url && (
          <DetailLink link={parseLink(data.primary.link.url)}>
            {data.primary.link_text || '자세히 보기'}
          </DetailLink>
        )}
      </BannerContainer>
    </Container>
  );
};

export default PrismicTeamContentsDataMainBodyWideBanner;
