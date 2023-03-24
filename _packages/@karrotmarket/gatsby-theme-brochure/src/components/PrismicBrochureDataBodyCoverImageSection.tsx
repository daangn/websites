import * as React from 'react';
import { graphql } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/config';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

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
  const wideImage =
    section.primary.cover_image?.thumbnails?.wide?.localFile?.childImageSharp?.gatsbyImageData

  return (
    <RootContainer id={section.primary.section_id || undefined}>
      <ImageContainer>
        <GatsbyImage
          image={wideImage}
          alt={section.primary.cover_image.alt}
          objectFit="cover"
          style={{
            minHeight: '18.75rem',
          }}
        />
      </ImageContainer>
    </RootContainer>
  );
}

const ImageContainer = styled("div", {
  objectFit: 'cover',
  minHeight: '18.75rem',
})
