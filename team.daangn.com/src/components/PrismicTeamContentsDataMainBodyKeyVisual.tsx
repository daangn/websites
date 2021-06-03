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
              layout: CONSTRAINED
              quality: 100
            )
          }
        }
      }
      description {
        text
      }
      expanded
    }
  }
`;

const Container = styled('section', {
  display: 'grid',
  gridTemplateRows: 'auto auto',
  gap: rem(40),

  '@md': {
    contentArea: true,
    gap: rem(80),
  },
});

const ImageContainer = styled('figure', {
  variants: {
    expanded: {
      true: {
      },
      false: {
        paddingX: rem(24),
      },
    },
  },
});
const KeyVisual = styled(GatsbyImage, {

});

const Description = styled('p', {
  contentArea: true,

  fontSize: '$body2',
  fontWeight: 'bold',
  paddingX: rem(24),

  '@md': {
    fontSize: '$subtitle2',
    paddingX: rem(0),
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
        <ImageContainer
          expanded={{ '@initial': data.primary.expanded ?? false, '@md': true }}
        >
          <KeyVisual
            image={keyVisualImage}
            alt={data.primary.key_visual_image.alt ?? ''}
          />
        </ImageContainer>
      )}
      <Description>
        {data.primary.description?.text}
      </Description>
    </Container>
  );
};

export default PrismicTeamContentsDataMainBodyKeyVisual;
