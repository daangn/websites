import * as React from 'react';
import { rem } from 'polished';
import { graphql, useStaticQuery } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/config';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const Container = styled('aside', {
  display: 'grid',
  gridTemplateColumns: '1fr',
  width: '100%',
  marginBottom: rem(48),

  '@md': {
    gridTemplateColumns: '1fr 1fr',
    gridTemplateRows: '1fr',
  },
});

const Banner = styled('div', {})

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
            localFile {
              childImageSharp {
                gatsbyImageData(
                  layout: FULL_WIDTH
                  placeholder: TRACED_SVG
                  formats: [AVIF, WEBP, AUTO]
                )
              }
            }
          }
          right {
            alt
            localFile {
              childImageSharp {
                gatsbyImageData(
                  layout: FULL_WIDTH
                  placeholder: TRACED_SVG
                  formats: [AVIF, WEBP, AUTO]
                )
              }
            }
          }
        }
      }
    }
  `);

  const banner = staticData?.prismicTeamBanner?.data;
  if (!(banner && banner.left?.alt && banner.right?.alt)) {
    return null;
  }

  const leftImage = banner.left.localFile?.childImageSharp?.gatsbyImageData && getImage(
    banner.left?.localFile?.childImageSharp?.gatsbyImageData,
  );
  if (!leftImage) {
    return null;
  }

  const rightImage = banner.right.localFile?.childImageSharp?.gatsbyImageData && getImage(
    banner.right?.localFile?.childImageSharp?.gatsbyImageData,
  );
  if (!rightImage) {
    return null;
  }

  return (
    <Container>
      <Banner>
        <GatsbyImage image={leftImage} alt={banner.left.alt} />
      </Banner>
      <Banner>
        <GatsbyImage image={rightImage} alt={banner.right.alt} />
      </Banner>
    </Container>
  );
};

export default BannerArea;
