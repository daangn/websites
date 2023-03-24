import * as React from 'react';
import { graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';

import RootContainer from './prismicBrochureDataBodyCoverImageSection/RootContainer';

export const fragments = graphql`
  fragment PrismicBrochureDataBodyCoverImageSection_section on PrismicBrochureDataBodyCoverImageSection {
    primary {
      section_id

      title {
        html
      }

      cover_image {
        alt
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
        thumbnails {
          wide {
            alt
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  }
`;

type Props = {
  section: GatsbyTypes.PrismicBrochureDataBodyCoverImageSection_sectionFragment;
};

export default function PrismicBrochureDataBodyCoverImageSection({ section }: Props) {
  const defaultCoverImage =
    section.primary.cover_image?.localFile?.childImageSharp?.gatsbyImageData &&
    getImage(section.primary.coverImage.localFile.childImageSharp.gatsbyImageData);
  const wideImage =
    section.primary.cover_image?.thumbnails?.wide?.localFile?.childImageSharp?.gatsbyImageData &&
    getImage(
      section.primary.cover_image.thumbnails.wide.localFile.childImageSharp?.gatsbyImageData,
    );

  return (
    <RootContainer id={section.primary.section_id || undefined}>
      TODO: PrismicBrochureDataBodyCoverImageSection
    </RootContainer>
  );
}
