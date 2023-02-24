import * as React from 'react';
import { rem } from 'polished';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { styled } from 'gatsby-theme-stitches/src/config';
import { vars } from '@seed-design/design-token';

export const fragment = graphql`
  fragment PrismicAdsContentDataBodyStepsSection_data on PrismicAdsContentDataBodyStepsSection {
    primary {
      section_id
      section_title {
        text
      }
    }
    items {
      step_text
      step_image {
        alt
        localFile {
          childImageSharp {
            gatsbyImageData(width: 240, placeholder: BLURRED)
          }
        }
      }
    }
  }
`;

type Props = {
  data: GatsbyTypes.PrismicAdsContentDataBodyStepsSection_dataFragment,
};

export default function PrismicAdsContentDataBodyStepsSection({
  data: {
    primary,
    items,
  },
}: Props) {
  return (
    <Container
      id={primary.section_id || undefined}
    >
      <Content>
        <Title>
          {primary.section_title.text || ''}
        </Title>
        <Steps>
          {items.map((item, i) => {
            const image = item.step_image?.localFile?.childImageSharp?.gatsbyImageData && getImage(item.step_image.localFile.childImageSharp.gatsbyImageData);
            return (
              <Step key={i}>
                <StepContent>
                  <StepCaption>
                    {item.step_text || ''}
                  </StepCaption>
                  {image && (
                    <GatsbyImage
                      image={image}
                      alt={item.step_image.alt || ''}
                    />
                  )}
                </StepContent>
              </Step>
            );
          })}
        </Steps>
      </Content>
    </Container>
  );
}

const Container = styled('section', {
  background: vars.$semantic.color.paperBackground,
  paddingY: '5rem',
});

const Content = styled('div', {
  contentArea: true,
  display: 'grid',
});

const Title = styled('h2', {
  typography: '$subtitle2',
  textAlign: 'center',

  '@md': {
    typography: '$heading4',
  },
});

const Steps = styled('ol', {
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',
  listStyle: 'none',
  padding: 0,
  textAlign: 'center',
  counterReset: 'steps',

  '@xl': {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

const Step = styled('li', {
  display: 'inline-grid',
  gap: '1rem',
  background: vars.$semantic.color.paperDefault,
  textAlign: 'center',
  border: `1px solid ${vars.$semantic.color.divider3}`,
  paddingX: '4rem',
  paddingTop: '2rem',
  marginY: '2.5rem',

  '&::before': {
    counterIncrement: 'steps',
    content: '"0"counter(steps)',
    color: vars.$semantic.color.primary,
    typography: '$subtitle3',
    fontWeight: 'bold',
  },
});

const StepContent = styled('figure', {
  display: 'inline-block',
});

const StepCaption = styled('figcaption', {
  typography: '$subtitle3',
  fontWeight: 'bold',
  marginBottom: rem(12),
});
