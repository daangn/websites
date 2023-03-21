import * as React from 'react';
import { graphql } from 'gatsby';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import { rem } from 'polished';
import { styled } from 'gatsby-theme-stitches/src/config';
import { vars } from '@seed-design/design-token';

export const fragments = graphql`
  fragment PrismicBrochureDataBodyHeroTypeBSection_section on PrismicBrochureDataBodyHeroTypeBSection {
    primary {
      section_id

      title {
        html
      }

      description {
        html
      }

      direction

      background_color

      background_image {
        alt
        localFile {
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH
              placeholder: BLURRED
            )
          }
        }
        thumbnails {
          wide {
            alt
            localFile {
              childImageSharp {
                gatsbyImageData(
                  layout: FULL_WIDTH
                  placeholder: BLURRED
                )
              }
            }
          }
        }
      }

      extension
    }
  }
`;

type Props = {
  section: GatsbyTypes.PrismicBrochureDataBodyHeroSection_sectionFragment;
};

export default function PrismicBrochureDataBodyHeroTypeBSection({ section }: Props) {
  console.log(section);

  const defaultBackgroundImage =
    section.primary.background_image?.localFile?.childImageSharp?.gatsbyImageData &&
    getImage(section.primary.background_image.localFile.childImageSharp.gatsbyImageData);

  const wideBackgroundImage =
    section.primary.background_image?.thumbnails?.wide?.localFile?.childImageSharp
      ?.gatsbyImageData &&
    getImage(
      section.primary.background_image.thumbnails.wide.localFile.childImageSharp.gatsbyImageData,
    );

  return (
    <Container id={section.primary.section_id || undefined}>
      <DefaultBackground
        image={defaultBackgroundImage}
        alt={section.primary.background_image?.alt || ''}
        loading="lazy"
        aria-hidden
      />
      <WideBackground
        image={wideBackgroundImage}
        alt={section.primary.background_image?.thumbnails?.wide?.alt || ''}
        loading="lazy"
        aria-hidden
      />
      <Content>
        <TitleContainer
          dangerouslySetInnerHTML={{
            __html: section.primary.title?.html || '',
          }}
        />
      </Content>
    </Container>
  );
}

const Container = styled('section', {
  display: 'flex',
  justifyContent: 'center',
  position: 'relative',

  variants: {
    backgroundColor: {},
  },
});

const DefaultBackground = styled(GatsbyImage, {
  pointerEvents: 'none',
  userSelect: 'none',
  width: '100%',
  '&&': {
    '@md': {
      display: 'none',
    },
  },
});

const WideBackground = styled(GatsbyImage, {
  pointerEvents: 'none',
  userSelect: 'none',
  width: '100%',
  '&&': {
    display: 'none',

    '@md': {
      display: 'inline-block',
    },
  },
});

const Content = styled('div', {
  contentArea: true,
  width: '100%',
  position: 'absolute',
  textAlign: 'center',
});

const TitleContainer = styled('div', {
  '& h1': {
    typography: '$subtitle1',
    wordBreak: 'keep-all',
    whiteSpace: 'initial',

    '@md': {
      typography: '$heading3',
      whiteSpace: 'pre-line',
    },
  },

  variants: {
    direction: {
      row: {},
      column: {},
    },
  },
});
