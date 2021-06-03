import * as React from 'react';
import { rem } from 'polished';
import { graphql } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/stitches.config';
import { useLinkParser } from '~/link';

import DetailLink from './DetailLink';

type PrismicTeamContentsDataMainBodyTitleAndDescriptionProps = {
  data: GatsbyTypes.PrismicTeamContentsDataMainBodyTitleAndDescription_dataFragment,
  className?: string,
};

export const query = graphql`
  fragment PrismicTeamContentsDataMainBodyTitleAndDescription_data on PrismicTeamContentsDataMainBodyTitleAndDescription {
    primary {
      key_text
      title {
        text
      }
      inverted
      description {
        html
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
  gap: rem(24),
  gridTemplateAreas: [
    '"title"',
    '"description"',
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
            '"title description"',
          ].join('\n'),
        },
      },
      right: {
        '@md': {
          gridTemplateAreas: [
            '"title description"',
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

const Description = styled('div', {
  gridArea: 'description',
  color: '$gray700',

  '& > p': {
    fontSize: '$body2',
    marginBottom: rem(32),
  },

  '@md': {
    '& > p': {
      fontSize: '$body1',
      marginBottom: rem(40),
    },

  },
});

const PrismicTeamContentsDataMainBodyTitleAndDescription: React.FC<PrismicTeamContentsDataMainBodyTitleAndDescriptionProps> = ({
  data,
}) => {
  const parseLink = useLinkParser();

  if (data.primary == null) {
    return null;
  }

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
      <Description dangerouslySetInnerHTML={{ __html: data.primary.description?.html || '' }}/>
    </Container>
  );
};

export default PrismicTeamContentsDataMainBodyTitleAndDescription;
