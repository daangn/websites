import { IconArrowRightLine } from '@karrotmarket/react-monochrome-icon';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import Centered from './Centered';
import * as css from './ProStory.css';

export const query = graphql`
  fragment TeamWebsite_ProStory_query on Query {
    prismicVisionPage {
      data {
        pro_story_title {
          text
        }
        pro_story_subtitle {
          text
        }

        # Pro Story 1
        pro_story_1_image {
          gatsbyImageData
          alt
        }
        pro_story_1_title {
          text
        }
        pro_story_1_caption {
          text
        }
        pro_story_1_link {
          url
        }

        # Pro Story 2
        pro_story_2_image {
          gatsbyImageData
          alt
        }
        pro_story_2_title {
          text
        }
        pro_story_2_caption {
          text
        }
        pro_story_2_link {
          url
        }

        # Pro Story 3
        pro_story_3_image {
          gatsbyImageData
          alt
        }
        pro_story_3_title {
          text
        }
        pro_story_3_caption {
          text
        }
        pro_story_3_link {
          url
        }

        # Pro Story 4
        pro_story_4_image {
          gatsbyImageData
          alt
        }
        pro_story_4_title {
          text
        }
        pro_story_4_caption {
          text
        }
        pro_story_4_link {
          url
        }
      }
    }
  }
`;

type Props = {
  query: GatsbyTypes.TeamWebsite_ProStory_queryFragment;
};

export default function ProStory({ query: data }: Props) {
  const stories = [
    {
      title: data.prismicVisionPage.data.pro_story_1_title.text,
      caption: data.prismicVisionPage.data.pro_story_1_caption.text,
      image: data.prismicVisionPage.data.pro_story_1_image.gatsbyImageData,
      imageAlt: data.prismicVisionPage.data.pro_story_1_image.alt,
      link: data.prismicVisionPage.data.pro_story_1_link?.url,
    },
    {
      title: data.prismicVisionPage.data.pro_story_2_title.text,
      caption: data.prismicVisionPage.data.pro_story_2_caption.text,
      image: data.prismicVisionPage.data.pro_story_2_image.gatsbyImageData,
      imageAlt: data.prismicVisionPage.data.pro_story_2_image.alt,
      link: data.prismicVisionPage.data.pro_story_2_link?.url,
    },
    {
      title: data.prismicVisionPage.data.pro_story_3_title.text,
      caption: data.prismicVisionPage.data.pro_story_3_caption.text,
      image: data.prismicVisionPage.data.pro_story_3_image.gatsbyImageData,
      imageAlt: data.prismicVisionPage.data.pro_story_3_image.alt,
      link: data.prismicVisionPage.data.pro_story_3_link?.url,
    },
    {
      title: data.prismicVisionPage.data.pro_story_4_title.text,
      caption: data.prismicVisionPage.data.pro_story_4_caption.text,
      image: data.prismicVisionPage.data.pro_story_4_image.gatsbyImageData,
      imageAlt: data.prismicVisionPage.data.pro_story_4_image.alt,
      link: data.prismicVisionPage.data.pro_story_4_link?.url,
    },
  ];

  return (
    <Centered>
      <div className={css.container}>
        <div className={css.subtitle}>
          <span>{data.prismicVisionPage.data.pro_story_subtitle.text}</span>
        </div>
        <div className={css.grid}>
          <div className={css.title}>
            <span>{data.prismicVisionPage.data.pro_story_title.text}</span>
          </div>
          <div className={css.cards}>
            {stories.map((d) => (
              <a key={d.title} className={css.card} href={d.link}>
                <div className={css.cardImage}>
                  <GatsbyImage image={d.image} alt={d.imageAlt} />
                </div>
                <div className={css.cardTitles}>
                  <div className={css.cardTitle}>{d.title}</div>
                  <div className={css.cardCaption}>
                    {d.caption}
                    <IconArrowRightLine className={css.cardCaptionIcon} width={14} height={14} />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </Centered>
  );
}
