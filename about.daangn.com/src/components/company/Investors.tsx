import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import Centered from './Centered';
import * as css from './Investors.css';
import { media } from './media.css';

export const query = graphql`
  fragment TeamWebsite_Investors_query on Query {
    prismicVisionPage {
      data {
        investors_title {
          text
        }

        investors_1_image {
          localFile {
            id
          }
          gatsbyImageData
          alt
        }
        investors_2_image {
          localFile {
            id
          }
          gatsbyImageData
          alt
        }
        investors_3_image {
          localFile {
            id
          }
          gatsbyImageData
          alt
        }
        investors_4_image {
          localFile {
            id
          }
          gatsbyImageData
          alt
        }
        investors_5_image {
          localFile {
            id
          }
          gatsbyImageData
          alt
        }
        investors_6_image {
          localFile {
            id
          }
          gatsbyImageData
          alt
        }
        investors_7_image {
          localFile {
            id
          }
          gatsbyImageData
          alt
        }
        investors_8_image {
          localFile {
            id
          }
          gatsbyImageData
          alt
        }
        investors_9_image {
          localFile {
            id
          }
          gatsbyImageData
          alt
        }
      }
    }
  }
`;

type Props = {
  query: GatsbyTypes.TeamWebsite_Investors_queryFragment,
}

export default function Investors({ query: data }: Props) {
  const images = [
    [
      {
        image: data.prismicVisionPage.data.investors_1_image.gatsbyImageData,
        alt: data.prismicVisionPage.data.investors_1_image.alt,
      },
      {
        image: data.prismicVisionPage.data.investors_2_image.gatsbyImageData,
        alt: data.prismicVisionPage.data.investors_2_image.alt,
      },
      {
        image: data.prismicVisionPage.data.investors_3_image.gatsbyImageData,
        alt: data.prismicVisionPage.data.investors_3_image.alt,
      },
      {
        image: data.prismicVisionPage.data.investors_4_image.gatsbyImageData,
        alt: data.prismicVisionPage.data.investors_4_image.alt,
      },
    ],
    [
      {
        image: data.prismicVisionPage.data.investors_5_image.gatsbyImageData,
        alt: data.prismicVisionPage.data.investors_5_image.alt,
      },
      {
        image: data.prismicVisionPage.data.investors_6_image.gatsbyImageData,
        alt: data.prismicVisionPage.data.investors_6_image.alt,
      },
      {
        image: data.prismicVisionPage.data.investors_7_image.gatsbyImageData,
        alt: data.prismicVisionPage.data.investors_7_image.alt,
      },
      {
        image: data.prismicVisionPage.data.investors_8_image.gatsbyImageData,
        alt: data.prismicVisionPage.data.investors_8_image.alt,
      },
      {
        image: data.prismicVisionPage.data.investors_9_image.gatsbyImageData,
        alt: data.prismicVisionPage.data.investors_9_image.alt,
      },
    ],
  ];

  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      breakpoints: {
        [media.small]: { active: false },
      },
    },
    [
      Autoplay({
        active: true,
        delay: 4000,
        stopOnInteraction: false,
        stopOnMouseEnter: false,
        stopOnFocusIn: false,
        stopOnLastSnap: false,
      }),
    ],
  );

  return (
    <Centered>
      <div className={css.container}>
        <div className={css.title}>
          <span>{data.prismicVisionPage.data.investors_title.text}</span>
        </div>
        <div className={css.box} ref={emblaRef}>
          <div className={css.carouselContainer}>
            {images.map((imageGroup, i) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: no need
              <div className={css.grid} key={i}>
                <div className={css.gridRow({ columnNumber: 'two' })}>
                  <div className={css.gridItem}>
                    <div className={css.gridItemImage}>
                      <GatsbyImage image={imageGroup[0].image} alt={imageGroup[0].alt} />
                    </div>
                  </div>
                  <div className={css.gridItem}>
                    <div className={css.gridItemImage}>
                      <GatsbyImage image={imageGroup[1].image} alt={imageGroup[1].alt} />
                    </div>
                  </div>
                </div>
                <div
                  className={css.gridRow({
                    columnNumber: imageGroup.length >= 5 ? 'three' : 'two',
                  })}
                >
                  <div className={css.gridItem}>
                    <div className={css.gridItemImage}>
                      <GatsbyImage image={imageGroup[2].image} alt={imageGroup[2].alt} />
                    </div>
                  </div>
                  <div className={css.gridItem}>
                    <div className={css.gridItemImage}>
                      <GatsbyImage image={imageGroup[3].image} alt={imageGroup[3].alt} />
                    </div>
                  </div>
                  {imageGroup[4] && (
                    <div className={css.gridItem}>
                      <div className={css.gridItemImage}>
                        <GatsbyImage image={imageGroup[4].image} alt={imageGroup[4].alt} />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Centered>
  );
}
