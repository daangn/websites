import * as React from 'react';
import { rem } from 'polished';
import { graphql } from 'gatsby';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import { styled } from 'gatsby-theme-stitches/src/config';
import { vars } from '@seed-design/design-token';

export const fragment = graphql`
  fragment PrismicAdsContentDataBodyFeaturesSection_data on PrismicAdsContentDataBodyFeaturesSection {
    primary {
      section_id
      section_title {
        text
      }
    }
    items {
      feature_name
      feature_description {
        html
      }
      feature_link {
        url
      }
      preview_image {
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
  data: GatsbyTypes.PrismicAdsContentDataBodyFeaturesSection_dataFragment;
};

export default function PrismicAdsContentDataBodyFeaturesSection({
  data: { primary, items },
}: Props) {
  const [tabIndex, setTabIndex] = React.useState(0);

  return (
    <Container id={primary.section_id || undefined}>
      <Content>
        <Title>{primary.section_title?.text || ''}</Title>
        <Features>
          <TabControl>
            {items.map((item, i) => (
              <TabButton
                // rome-ignore lint/suspicious/noArrayIndexKey: intentional
                key={i}
                active={i === tabIndex}
                onClick={() => {
                  setTabIndex(i);
                }}
              >
                {item.feature_name || `항목 ${i + 1}`}
              </TabButton>
            ))}
          </TabControl>
          <FeatureContainer>
            <Track
              css={{
                $$tabIndex: tabIndex,
              }}
            >
              {items.map((item, i) => {
                const image =
                  item.preview_image?.localFile?.childImageSharp?.gatsbyImageData &&
                  getImage(item.preview_image.localFile.childImageSharp.gatsbyImageData);
                return (
                  // rome-ignore lint/suspicious/noArrayIndexKey: intentional
                  <FeatureItem key={i}>
                    <FeatureItemContent>
                      {image && (
                        <GatsbyImage
                          image={image}
                          alt={item.preview_image.alt || ''}
                          loading="lazy"
                        />
                      )}
                      <FeatureItemBody>
                        <FeatureTitle>{item.feature_name || ''}</FeatureTitle>
                        <FeatureDescription
                          dangerouslySetInnerHTML={{
                            __html: item.feature_description?.html || '',
                          }}
                        />
                        <FeatureGuideLink
                          href={item.feature_link?.url || '#'}
                          target="_blank"
                          rel="noopener noreferrer"
                          id={tabIndex === 0 ? 'guide-feed' : 'guide-search'}
                        >
                          {item.feature_name || `항목 ${i + 1}`} 가이드 바로가기
                        </FeatureGuideLink>
                      </FeatureItemBody>
                    </FeatureItemContent>
                  </FeatureItem>
                );
              })}
            </Track>
          </FeatureContainer>
        </Features>
      </Content>
    </Container>
  );
}

const Container = styled('section', {
  paddingY: '5rem',
});

const Content = styled('div', {
  display: 'grid',
  textAlign: 'center',
  gap: rem(20),

  '@md': {
    gap: rem(70),
  },
});

const Title = styled('h2', {
  typography: '$subtitle2',

  '@md': {
    typography: '$heading4',
  },
});

const Features = styled('div', {
  display: 'grid',
  gap: rem(40),
});

const TabControl = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  gap: '1.5rem',
});

const TabButton = styled('button', {
  typography: '$body2',
  borderRadius: 999,
  cursor: 'pointer',
  padding: `${rem(8)} ${rem(16)}`,

  variants: {
    active: {
      true: {
        color: vars.$semantic.color.onPrimary,
        background: vars.$semantic.color.primary,
        border: 'none',
      },
      false: {
        border: `1px solid ${vars.$semantic.color.divider3}`,
        background: vars.$semantic.color.paperDefault,
      },
    },
  },
});

const FeatureContainer = styled('div', {
  display: 'flex',
  width: '100%',
  overflow: 'hidden',
});

const Track = styled('div', {
  display: 'flex',
  width: '100%',
  transform: 'translateX(calc($$tabIndex * -100%))',
});

const FeatureItem = styled('div', {
  flexShrink: 0,
  width: '100%',
});

const FeatureItemContent = styled('div', {
  contentArea: true,

  display: 'grid',
  gap: rem(20),

  '@md': {
    gridTemplateColumns: '1fr 1fr',
  },
});

const FeatureItemBody = styled('div', {
  display: 'grid',
  margin: 'auto',
  textAlign: 'left',
  gap: '1.5rem',
  width: '100%',

  '@md': {
    gridTemplateRows: 'repeat(3, max-content)',
    width: '90%',
  },
});

const FeatureTitle = styled('h3', {
  typography: '$subtitle3',
  textAlign: 'center',

  '@md': {
    typography: '$subtitle2',
    textAlign: 'left',
  },
});

const FeatureDescription = styled('div', {
  typography: '$body3',

  display: 'grid',
  gap: '1.5rem',
  wordBreak: 'keep-all',

  '& ul': {
    listStyle: 'none',
    padding: 0,
    display: 'grid',
    gap: rem(8),
  },

  '& ul > li': {
    background: vars.$scale.color.carrot50,
    padding: `${rem(5)} ${rem(10)}`,
  },

  '& ul > li::before': {
    content: '""',
    display: 'inline-block',
    width: '1em',
    height: '1em',
    marginRight: '0.5rem',
    backgroundImage: `url("data:image/svg+xml,%3Csvg fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M15.208 3.362c.504.364.618 1.067.254 1.571l-6.787 9.412a1.125 1.125 0 0 1-1.74.104L2.622 9.762a1.125 1.125 0 0 1 1.656-1.524l3.379 3.673 5.98-8.294a1.125 1.125 0 0 1 1.57-.255Z' fill='%23FF7E36'%3E%3C/path%3E%3C/svg%3E")`,
  },
});

const FeatureGuideLink = styled('a', {
  display: 'grid',
  typography: '$body2',
  fontWeight: 'bold',
  color: 'currentColor',
  textAlign: 'center',
  textDecoration: 'none',
  paddingY: rem(10),
  border: `1px solid ${vars.$semantic.color.divider3}`,
});
