import * as React from 'react';
import { rem } from 'polished';
import { graphql } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/stitches.config';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import { mapLink, useLinkParser } from '~/link';

import DetailLink from '~/components/DetailLink';

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
      inverted
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
  contentArea: true,

  display: 'grid',
  gap: rem(60),
  gridTemplateAreas: [
    '"title"',
    '"illust"',
  ].join('\n'),

  '@md': {
    gap: rem(40),
    gridTemplateColumns: '1fr 1fr',
  },

  variants: {
    alignTitle: {
      left: {
        '@md': {
          gridTemplateAreas: [
            '"title illust"',
          ].join('\n'),
        },
      },
      right: {
        '@md': {
          gridTemplateAreas: [
            '"illust title"',
          ].join('\n'),
        },
      },
    },
  },
});

const TitleContainer = styled('div', {
  gridArea: 'title',
  display: 'grid',
  gridTemplateRows: 'repeat(3, min-content)',
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
  gridArea: 'illust',
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
    <Container
      alignTitle={data.primary.inverted === true ? 'right' : 'left'}
    >
      <TitleContainer>
        <KeyText>{data.primary.key_text}</KeyText>
        <Title>{data.primary.title?.text}</Title>
        {link && <DetailLink link={link}>자세히 보기</DetailLink>}
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
