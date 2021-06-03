import * as React from 'react';
import { rem } from 'polished';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { styled } from 'gatsby-theme-stitches/src/stitches.config';

type PrismicTeamContentsDataMainBodyKeyVisualProps = {
  data: GatsbyTypes.PrismicTeamContentsDataMainBodyKeyVisual_dataFragment,
  className?: string,
};

export const query = graphql`
  fragment PrismicTeamContentsDataMainBodyKeyVisual_data on PrismicTeamContentsDataMainBodyKeyVisual {
    primary {
      key_visual_image {
        alt
        localFile {
          childImageSharp {
            gatsbyImageData(
              width: 1920
              layout: FULL_WIDTH
              quality: 100
            )
          }
        }
      }
      description {
        text
        html
      }
      expanded
    }
  }
`;

const Container = styled('section', {
  display: 'grid',
  gridTemplateRows: 'auto auto',
  gap: rem(40),

  '@sm': {
    gap: rem(80),
  },
});

const KeyVisual = styled(GatsbyImage, {
  variants: {
    expanded: {
      true: {
        marginX: rem(-24),
      },
      false: {
        marginX: 0,
      },
    },
  },
});

const Description = styled('p', {
  fontSize: '$body2',
  fontWeight: 'bold',

  '@sm': {
    fontSize: '$subtitle2',
  },
});

const PrismicTeamContentsDataMainBodyKeyVisual: React.FC<PrismicTeamContentsDataMainBodyKeyVisualProps> = ({
  data,
  className,
}) => {
  if (data.primary?.key_visual_image?.localFile?.childImageSharp == null) {
    return null;
  }

  const keyVisualImage = getImage(data.primary.key_visual_image.localFile.childImageSharp.gatsbyImageData);
  return (
    <Container className={className}>
      {keyVisualImage && (
        <KeyVisual
          image={keyVisualImage}
          alt={data.primary.key_visual_image.alt ?? ''}
          expanded={{ '@initial': data.primary.expanded ?? false, '@md': false }}
        />
      )}
      <Description>
        {data.primary.description?.text}
      </Description>
    </Container>
  );
};

export default PrismicTeamContentsDataMainBodyKeyVisual;
