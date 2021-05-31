import * as React from 'react';
import { rem } from 'polished';
import { graphql } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/stitches.config';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import { mapLink, useLinkParser } from '~/link';

type PrismicTeamContentsDataMainBodyTitleAndIllustrationProps = {
  data: GatsbyTypes.PrismicTeamContentsDataMainBodyTitleAndIllustration_dataFragment,
  className?: string,
};

export const query = graphql`
  fragment PrismicTeamContentsDataMainBodyTitleAndIllustration_data on PrismicTeamContentsDataMainBodyTitleAndIllustration {
    primary {
      key_text
      title {
        text
      }
      illustration {
        alt
        localFile {
          childImageSharp {
            gatsbyImageData(
              width: 560
              layout: FULL_WIDTH
            )
          }
        }
      }
      link {
        url
      }
    }
  }
`;

const Container = styled('section', {
  display: 'grid',
  gridTemplateColumns: 'auto',

  '@md': {
    gridTemplateColumns: '1fr 1fr',
    gap: rem(40),
  },
});

const TitleContainer = styled('div', {
  display: 'grid',
  gridTemplateRows: 'min-content auto min-content',
});

const KeyText = styled('span', {
  fontSize: '$body2',
  fontWeight: 'bold',
  marginBottom: rem(16),

  '@md': {
    fontSize: '$subtitle3',
    marginBottom: rem(24),
  },
});

const Title = styled('h1', {
  whiteSpace: 'pre-line',
  fontSize: '$subtitle2',
  marginBottom: rem(24),

  '@md': {
    fontSize: '$heading4',
    marginBottom: rem(32),
  },
});

const Illustration = styled(GatsbyImage, {
});

const PrismicTeamContentsDataMainBodyTitleAndIllustration: React.FC<PrismicTeamContentsDataMainBodyTitleAndIllustrationProps> = ({
  data,
}) => {
  const parseLink = useLinkParser();

  if (data.primary == null) {
    return null;
  }

  const image = data.primary.illustration?.localFile?.childImageSharp?.gatsbyImageData && getImage(data.primary.illustration.localFile.childImageSharp.gatsbyImageData);
  const link = data.primary.link?.url && parseLink(data.primary.link.url);

  return (
    <Container>
      <TitleContainer>
        <KeyText>{data.primary.key_text}</KeyText>
        <Title>{data.primary.title?.text}</Title>
        {link && mapLink(link, {
          Internal: null,
          External: null,
        })}
      </TitleContainer>
      {image && (
        <Illustration
          image={image}
          alt={data.primary.illustration?.alt || ''}
        />
      )}
    </Container>
  );
};

export default PrismicTeamContentsDataMainBodyTitleAndIllustration;
