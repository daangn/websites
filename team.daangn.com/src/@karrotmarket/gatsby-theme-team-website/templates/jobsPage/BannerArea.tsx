import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { styled } from 'gatsby-theme-stitches/src/config';
import { rem } from 'polished';
import * as React from 'react';

const BannerArea: React.FC = () => {
  const staticData = useStaticQuery<GatsbyTypes.BannerAreaStaticQuery>(graphql`
    query BannerAreaStatic {
      prismicTeamBanner(tags: {in: ["team.daangn.com"]}) {
        data {
          __typename
          image_360 {
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
          image_576 {
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
          image_768 {
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
          href {
            id
            url
          }
          background_color
        }
      }
    }
`);

  const banner = staticData?.prismicTeamBanner?.data;

  if (!(banner && banner.image_360?.alt && banner.image_576?.alt && banner.image_768?.alt && banner.href?.url)) {
    return null;
  }

  const image360 = banner.image_360.localFile?.childImageSharp?.gatsbyImageData && getImage(
    banner.image_360?.localFile?.childImageSharp?.gatsbyImageData,
  );
  const image576 = banner.image_576.localFile?.childImageSharp?.gatsbyImageData && getImage(
    banner.image_576?.localFile?.childImageSharp?.gatsbyImageData,
  );
  const image768 = banner.image_768.localFile?.childImageSharp?.gatsbyImageData && getImage(
    banner.image_768?.localFile?.childImageSharp?.gatsbyImageData,
  );

  if (!image360) {
    return null;
  }
  if (!image576) {
    return null;
  }
  if (!image768) {
    return null;
  }

  return (
    <Container
      css={{
        backgroundColor: banner.background_color
      }}
      href={banner.href?.url}
      target="_blank"
      rel="noopener"
    >
      <Banner>
        <BannerImage360 image={image360} alt={banner.image_360.alt} />
        <BannerImage576 image={image576} alt={banner.image_576.alt} />
        <BannerImage768 image={image768} alt={banner.image_768.alt} /> 
      </Banner>
    </Container>
  );
};

const Container = styled('a', {
  display: 'block',
  cursor: 'pointer',
  marginTop: rem(-36),
  marginBottom: rem(36),

  '@sm': {
    marginTop: rem(-100),
    marginBottom: rem(100),
  },
});

const Banner = styled('div', {
  margin: "0 auto",
  width: '100%',
  maxWidth: rem(360),
  '@sm': {
    maxWidth: rem(576),
  },
  '@md': {
    maxWidth: rem(768),
  },
})

const BannerImage360 = styled(GatsbyImage, {
  display: 'block',
  '@sm': {
    display: 'none',
  }
})

const BannerImage576 = styled(GatsbyImage, {
  display: 'none',
  '@sm': {
    display: 'block',
  },
  '@md': {
    display: 'none',
  }
})

const BannerImage768 = styled(GatsbyImage, {
  display: 'none',
  '@md': {
    display: 'block',
  }
})

export default BannerArea;
