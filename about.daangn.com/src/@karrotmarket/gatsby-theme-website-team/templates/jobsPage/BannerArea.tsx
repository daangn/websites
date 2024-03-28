import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';

import Banner from './Banner';
import Carousel from './Carousel';

const BannerArea: React.FC = () => {
  const staticData = useStaticQuery<GatsbyTypes.BannerAreaStaticQuery>(graphql`
    query BannerAreaStatic {
      prismicTeamBanner(tags: {in: ["team.daangn.com"]}) {
        data {
          __typename
          body {
            ... on PrismicTeamBannerDataBodyBanner {
              id
              items {
                image_size_360 {
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
                image_size_576 {
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
                image_size_768 {
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
                link_href {
                  id
                  url
                }
                bg_color
              }
            }
          }
        }
      }
    }
`);

  const banners = staticData.prismicTeamBanner?.data.body[0].items;

  if (!banners?.length) {
    return null;
  }

  const validBanners = banners.filter((banner) => {
    if (!banner.link_href?.url) {
      return false;
    }
    if (
      !(
        banner.image_size_360?.alt &&
        banner.image_size_360.localFile?.childImageSharp?.gatsbyImageData
      )
    ) {
      return false;
    }
    if (
      !(
        banner.image_size_576?.alt &&
        banner.image_size_576.localFile?.childImageSharp?.gatsbyImageData
      )
    ) {
      return false;
    }
    if (
      !(
        banner.image_size_768?.alt &&
        banner.image_size_768.localFile?.childImageSharp?.gatsbyImageData
      )
    ) {
      return false;
    }

    return true;
  });

  if (!validBanners.length) {
    return null;
  }

  return (
    <Carousel>
      {validBanners.map((banner, i) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: intentional
        <Banner key={i} item={banner as GatsbyTypes.PrismicTeamBannerDataBodyBannerItem} />
      ))}
    </Carousel>
  );
};

export default BannerArea;
