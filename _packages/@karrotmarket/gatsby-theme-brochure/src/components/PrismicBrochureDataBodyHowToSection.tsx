import * as React from 'react';
import { styled } from 'gatsby-theme-stitches/src/config';
import { graphql } from 'gatsby';

import RootContainer from './prismicBrochureDataBodyHowToSection/RootContainer';
import { vars } from '@seed-design/design-token';
import { rem } from 'polished';
import { GatsbyImage } from 'gatsby-plugin-image';
import SubtitleContainer from './prismicBrochureDataBodyHowToSection/SubtitleContainer';

export const fragments = graphql`
  fragment PrismicBrochureDataBodyHowToSection_section on PrismicBrochureDataBodyHowToSection {
    primary {
      section_id

      title {
        html
      }

      theme
    }

    items {
      step_image {
        alt
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      step_title
      step_description {
        html
      }
    }
  }
`;

type Props = {
  section: GatsbyTypes.PrismicBrochureDataBodyHowToSection_sectionFragment;
};

export default function PrismicBrochureDataBodyHowToSection({ section }: Props) {
  return (
    <RootContainer id={section.primary.section_id || undefined}>
      <Container>
        <Inner>
          <SubtitleContainer />
          <TitleContainer
            dangerouslySetInnerHTML={{
              __html: section.primary.title.html,
            }}
          />
          <Steps>
            {section.items.map((item, i: number) => {
              return (
                // rome-ignore lint/suspicious/noArrayIndexKey: 순서가 바뀌지 않음
                <Step key={i}>
                  <StepImageContainer>
                    <GatsbyImage
                      image={item.step_image.localFile.childImageSharp.gatsbyImageData}
                      alt={item.step_title}
                    />
                  </StepImageContainer>
                  <StepTitle theme={section.primary.theme}>{item.step_title}</StepTitle>
                  <StepDescriptionContainer
                    dangerouslySetInnerHTML={{
                      __html: item.step_description.html,
                    }}
                  />
                </Step>
              );
            })}
          </Steps>
        </Inner>
      </Container>
    </RootContainer>
  );
}

const Container = styled('div', {
  display: 'flex',
  justifyContent: 'center',
});

const Inner = styled('div', {
  width: '45rem',
  marginTop: '5rem',
  padding: '2rem',
  '@lg': {
    width: '60rem',
  },
});

const TitleContainer = styled('div', {
  fontSize: rem(28),
  letterSpacing: rem(0),
  fontWeight: 'bold',
  marginBottom: '4.4375rem',
  '@lg': {
    fontSize: rem(42),
  },
});

const Steps = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '2.25rem',
  '@lg': {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
});

const Step = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '30rem',
});

const StepImageContainer = styled('div', {
  width: '100%',
  borderRadius: '1.25rem',
  overflow: 'hidden',
  marginBottom: '1.5rem',
  '@lg': {
    width: '18.5rem',
    height: '18.5rem',
  },
});

const StepTitle = styled('div', {
  backgroundColor: vars.$scale.color.carrot50,
  padding: '1rem',
  textAlign: 'center',
  fontSize: '1.125rem',
  fontWeight: 'bold',
  borderRadius: '.75rem',
  marginBottom: '1rem',
  variants: {
    theme: {
      green: {
        backgroundColor: vars.$scale.color.green50,
      },
      carrot: {
        backgroundColor: vars.$scale.color.carrot50,
      },
    },
  },
});

const StepDescriptionContainer = styled('div', {
  fontSize: '1.125rem',
  fontWeight: 'normal',
  color: vars.$scale.color.gray700,
});
