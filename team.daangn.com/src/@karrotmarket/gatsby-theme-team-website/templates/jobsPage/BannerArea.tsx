
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

  const banners = staticData.prismicTeamBanner?.data.body[0].items

  if (!banners?.length) {
    return null
  }

  return (
    <Carousel>
      {banners.map((banner, i) => (
        <Banner key={i} item={banner as GatsbyTypes.PrismicTeamBannerDataBodyBannerItem} />
      ))}
    </Carousel>
  );
};

export default BannerArea;
