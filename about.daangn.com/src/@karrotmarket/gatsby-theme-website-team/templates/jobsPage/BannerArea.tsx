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
                  gatsbyImageData(
                    width: 360
                    layout: FULL_WIDTH
                    formats: [AVIF, AUTO]
                  )
                }
                image_size_576 {
                  alt
                  gatsbyImageData(
                    width: 576
                    layout: FULL_WIDTH
                    formats: [AVIF, AUTO]
                  )
                }
                image_size_768 {
                  alt
                  gatsbyImageData(
                    width: 768
                    layout: FULL_WIDTH
                    formats: [AVIF, AUTO]
                  )
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
        banner.image_size_360?.gatsbyImageData
      )
    ) {
      return false;
    }
    if (
      !(
        banner.image_size_576?.alt &&
        banner.image_size_576?.gatsbyImageData
      )
    ) {
      return false;
    }
    if (
      !(
        banner.image_size_768?.alt &&
        banner.image_size_768?.gatsbyImageData
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
