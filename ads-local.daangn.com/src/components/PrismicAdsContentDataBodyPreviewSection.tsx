import * as React from 'react';
import { rem } from 'polished';
import { graphql } from 'gatsby';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import { styled } from 'gatsby-theme-stitches/src/config';
import { vars } from '@seed-design/design-token';

export const fragment = graphql`
  fragment PrismicAdsContentDataBodyPreviewSection_data on PrismicAdsContentDataBodyPreviewSection {
    primary {
      section_id
      section_title {
        text
      }
      section_description {
        text
      }
      reversed
      image {
        alt
        localFile {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
    }
  }
`;

type Props = {
  data: GatsbyTypes.PrismicAdsContentDataBodyPreviewSection_dataFragment;
};

export default function PrismicAdsContentDataBodyPreviewSection({ data: { primary } }: Props) {
  const previewImage =
    primary.image?.localFile?.childImageSharp?.gatsbyImageData &&
    getImage(primary.image.localFile.childImageSharp.gatsbyImageData);

  return (
    <Container id={primary.section_id || undefined} reversed={primary.reversed ?? false}>
      <Content reversed={primary.reversed ?? false}>
        <TextWrapper reversed={primary.reversed ?? false}>
          <Title>{primary.section_title.text || ''}</Title>
          <Description>{primary.section_description.text || ''}</Description>
        </TextWrapper>
        <Preview>
          {previewImage && (
            <GatsbyImage image={previewImage} alt={primary.image.alt || ''} loading="lazy" />
          )}
        </Preview>
      </Content>
    </Container>
  );
}

const Container = styled('section', {
  variants: {
    reversed: {
      true: {
        background: vars.$scale.color.carrotAlpha50,
      },
      false: {},
    },
  },
});

const Content = styled('div', {
  contentArea: true,

  display: 'grid',
  gridTemplate: ['"text"    auto', `"preview" ${rem(300)}`].join('\n'),
  paddingTop: rem(90),

  '@md': {
    alignItems: 'center',
  },

  variants: {
    reversed: {
      true: {
        '@md': {
          gridTemplate: [`"text preview" ${rem(680)} /`, ' 1fr  1fr'].join('\n'),
        },
      },
      false: {
        '@md': {
          gridTemplate: [`"preview text" ${rem(680)} /`, ' 1fr     1fr'].join('\n'),
        },
      },
    },
  },
});

const TextWrapper = styled('div', {
  gridArea: 'text',
  wordBreak: 'keep-all',
  display: 'grid',
  gridTemplateRows: 'repeat(2, max-content)',
  gap: rem(12),
  textAlign: 'center',

  '@md': {
    textAlign: 'left',
  },

  variants: {
    reversed: {
      true: {
        '@md': {
          paddingLeft: rem(100),
        },
      },
    },
  },
});

const Title = styled('h2', {
  typography: '$subtitle2',
  whiteSpace: 'pre-line',

  '@md': {
    typography: '$heading4',
  },
});

const Description = styled('p', {
  whiteSpace: 'pre-line',
  typography: '$body2',

  '@md': {
    typography: '$subtitle3',
  },
});

const Preview = styled('div', {
  gridArea: 'preview',
  overflow: 'hidden',
});
