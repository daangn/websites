import { IconArrowRightLine } from '@karrotmarket/react-monochrome-icon';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import Button from './Button';
import Centered from './Centered';
import * as css from './WorkingCulture.css';

export const query = graphql`
  fragment TeamWebsite_WorkingCulture_query on Query {
    prismicVisionPage {
      data {
        working_culture_title {
          text
        }
        working_culture_card_1_title {
          text
        }
        working_culture_card_1_image {
          gatsbyImageData
        }
        working_culture_card_1_button_label {
          text
        }
        working_culture_card_1_button_href {
          url
        }
        working_culture_card_2_title {
          text
        }
        working_culture_card_2_image {
          gatsbyImageData
        }
        working_culture_card_2_button_label {
          text
        }
        working_culture_card_2_button_href {
          url
        }
      }
    }
  }
`;

type Props = {
  query: GatsbyTypes.TeamWebsite_WorkingCulture_queryFragment;
};

export default function WorkingCulture(props: Props) {
  return (
    <Centered>
      <div className={css.container}>
        <div className={css.title}>
          <span>{props.query.prismicVisionPage?.data.working_culture_title.text}</span>
        </div>
        <div className={css.cards}>
          <div className={css.cardRatio}>
            <div className={css.card}>
              <div className={css.cardTitle}>
                <span>{props.query.prismicVisionPage?.data.working_culture_card_1_title.text}</span>
              </div>
              <div className={css.cardButton}>
                <Button
                  icon={<IconArrowRightLine size={18} />}
                  to={
                    props.query.prismicVisionPage?.data.working_culture_card_1_button_href?.url ??
                    undefined
                  }
                >
                  {props.query.prismicVisionPage?.data.working_culture_card_1_button_label.text}
                </Button>
              </div>
              <div className={css.cardIllustration}>
                {props.query.prismicVisionPage?.data.working_culture_card_1_image && (
                  <GatsbyImage
                    className={css.cardIllustrationImage}
                    image={
                      props.query.prismicVisionPage?.data.working_culture_card_1_image
                        ?.gatsbyImageData
                    }
                    alt="working culture"
                  />
                )}
              </div>
            </div>
          </div>
          <div className={css.cardRatio}>
            <div className={css.card}>
              <div className={css.cardTitle}>
                <span>{props.query.prismicVisionPage?.data.working_culture_card_2_title.text}</span>
              </div>
              <div className={css.cardButton}>
                <Button
                  icon={<IconArrowRightLine size={18} />}
                  to={
                    props.query.prismicVisionPage?.data.working_culture_card_2_button_href?.url ??
                    undefined
                  }
                >
                  {props.query.prismicVisionPage?.data.working_culture_card_2_button_label.text}
                </Button>
              </div>
              <div className={css.cardIllustration}>
                {props.query.prismicVisionPage?.data.working_culture_card_2_image && (
                  <GatsbyImage
                    className={css.cardIllustrationImage}
                    image={
                      props.query.prismicVisionPage?.data.working_culture_card_2_image
                        ?.gatsbyImageData
                    }
                    alt="working culture"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Centered>
  );
}
