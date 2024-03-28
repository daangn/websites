import { useLinkParser } from '@karrotmarket/gatsby-theme-website/src/link';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { styled } from 'gatsby-theme-stitches/src/config';
import { rem } from 'polished';
import * as React from 'react';

import _DetailLink from './DetailLink';

type PrismicTeamContentsDataCultureBodyWideBannerProps = {
  data: GatsbyTypes.PrismicTeamContentsDataCultureBodyWideBanner_dataFragment;
  className?: string;
};

export const query = graphql`
  fragment PrismicTeamContentsDataCultureBodyWideBanner_data on PrismicTeamContentsDataCultureBodyWideBanner {
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

const Container = styled('section', {});

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

const PrismicTeamContentsDataCultureBodyWideBanner: React.FC<
  PrismicTeamContentsDataCultureBodyWideBannerProps
> = ({ data, className }) => {
  const parseLink = useLinkParser();

  if (data.primary == null) {
    return null;
  }

  const thumbnailImage =
    data.primary.thumbnail?.localFile?.childImageSharp?.gatsbyImageData &&
    getImage(data.primary.thumbnail.localFile.childImageSharp.gatsbyImageData);

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
          <DetailLink link={parseLink(data.primary.link.url)} message={data.primary.link_text} />
        )}
      </BannerContainer>
    </Container>
  );
};

export default PrismicTeamContentsDataCultureBodyWideBanner;
