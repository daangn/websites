import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/config';
import { GatsbyImage } from "gatsby-plugin-image";

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

  // 배너가 보일 경우 아래 타이틀 안보이게 숨기기
  "& + h1": {
    display: 'none',
  }
});

const Banner = styled('div', {
  flex: 1,
})

const BannerImg = styled(GatsbyImage, {
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
            alt
            gatsbyImageData
          }
          right {
            alt
            gatsbyImageData
          }
        }
      }
    }
  `);

  const banner = staticData?.prismicTeamBanner?.data;

  if (!banner) {
    return null;
  }
  if (!banner.left || !banner.right) {
    return null;
  }

  return (
    <Container>
      <Banner>
        <BannerImg image={banner.left.gatsbyImageData as any} alt={banner.left.alt as string} />
      </Banner>
      <Banner>
        <BannerImg image={banner.right.gatsbyImageData as any} alt={banner.right.alt as string} />
      </Banner>
    </Container>
  );
};

export default BannerArea;
