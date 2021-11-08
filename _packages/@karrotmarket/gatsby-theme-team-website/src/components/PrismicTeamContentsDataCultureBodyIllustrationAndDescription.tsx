import * as React from 'react';
import { rem } from 'polished';
import { graphql } from 'gatsby';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import { styled } from 'gatsby-theme-stitches/src/config';

import { useLinkParser } from '@karrotmarket/gatsby-theme-website/src/link';
import DetailLink from './DetailLink';

type PrismicTeamContentsDataCultureBodyIllustrationAndDescriptionProps = {
  data: GatsbyTypes.PrismicTeamContentsDataCultureBodyIllustrationAndDescription_dataFragment,
  className?: string,
};

export const query = graphql`
  fragment PrismicTeamContentsDataCultureBodyIllustrationAndDescription_data on PrismicTeamContentsDataCultureBodyIllustrationAndDescription {
    primary {
      illustration {
        alt
        localFile {
          childImageSharp {
            gatsbyImageData(
              quality: 80
              layout: FULL_WIDTH
            )
          }
        }
      }
      expanded
      inverted
      description {
        text
      }
      link {
        url
      }
      link_text
    }
  }
`;

const Container = styled('section', {
  contentArea: true,
  width: '100%',
  display: 'grid',
  gap: rem(40),

  gridTemplateAreas: [
    '"illustration"',
    '"description"',
  ].join('\n'),

  variants: {
    expanded: {
      true: {
      },
    },
    alignIllustration: {
      left: {
        '@xl': {
          gridTemplateColumns: '0.5fr 0.5fr 1fr',
          gridTemplateAreas: [
            '"illustration illustration description"',
          ].join('\n'),
        }
      },
      right: {
        '@xl': {
          gridTemplateColumns: '1fr 0.5fr 0.5fr',
          gridTemplateAreas: [
            '"description illustration illustration"',
          ].join('\n'),
        },
      },
    },
  },

  compoundVariants: [
    {
      expanded: true,
      alignIllustration: 'left',
      css: {
        '@xl': {
          gridTemplateColumns: '1.5fr 1.5fr 1fr',
        },
      },
    },
    {
      expanded: true,
      alignIllustration: 'right',
      css: {
        '@xl': {
          gridTemplateColumns: '1fr 1.5fr 1.5fr',
        },
      },
    },
  ],
});

const IllustrationContainer = styled('figure', {
  gridArea: 'illustration',
});

const DescriptionContainer = styled('div', {
  gridArea: 'description',
  display: 'grid',
  gridTemplateRows: 'repeat(2, min-content)',
  gap: rem(24),

  '@sm': {
    gap: rem(32),
  },
});

const Description = styled('p', {
  typography: '$body2',

  '@sm': {
    typography: '$subtitle3',
  },
});

const PrismicTeamContentsDataCultureBodyIllustrationAndDescription: React.FC<
  PrismicTeamContentsDataCultureBodyIllustrationAndDescriptionProps
> = ({
  data,
  className,
}) => {
  const parseLink = useLinkParser();

  const image = data.primary?.illustration?.localFile?.childImageSharp?.gatsbyImageData && getImage(
    data.primary.illustration.localFile.childImageSharp.gatsbyImageData
  );

  if (image == null || data.primary?.description == null) {
    return null;
  }

  return (
    <Container
      className={className}
      expanded={data.primary.expanded === true}
      alignIllustration={data.primary?.inverted === true ? 'right' : 'left'}
    >
      <IllustrationContainer>
        <GatsbyImage
          image={image}
          alt={data.primary?.illustration?.alt || ''}
        />
      </IllustrationContainer>
      <DescriptionContainer>
        <Description>{data.primary.description.text}</Description>
        {data.primary.link?.url && (
          <DetailLink link={parseLink(data.primary.link.url)}>
            {data.primary.link_text || '자세히 보기'}
          </DetailLink>
        )}
      </DescriptionContainer>
    </Container>
  );
};

export default PrismicTeamContentsDataCultureBodyIllustrationAndDescription;
