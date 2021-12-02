import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/config';

const Container = styled('aside', {
  display: 'flex',
  alignItems: 'flex-start',
  width: '100%',
  marginBottom: '3rem',
  flexDirection: 'column',

  '@sm': {
    flexDirection: 'row',
    marginTop: '-5rem',
  },
});

const Banner = styled('div', {
  flex: 1,
})

const BannerImg = styled('img', {
  width: '100%',
})

const BannerArea: React.FC = () => {
  const staticData = useStaticQuery<GatsbyTypes.BannerAreaStaticQuery>(graphql`
    query BannerAreaStatic {
      prismicTeamBanner(
        tags: {
          in: ["team.daangn.com"]
        }
      ) {
        data {
          left {
            url
          }
          right {
            url
          }
        }
      }
    }
  `);

  const banner = staticData?.prismicTeamBanner?.data;
  if (!banner) {
    return null;
  }
  if (!(banner.left && banner.right)) {
    return null;
  }

  return (
    <Container>
      <Banner>
        <BannerImg src={banner.left.url} />
      </Banner>
      <Banner>
        <BannerImg src={banner.right.url} />
      </Banner>
    </Container>
  );
};

export default BannerArea;
