import * as React from 'react';
import { rem } from 'polished';
import { graphql } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/stitches.config';
import { mapLink, useLinkParser } from '~/link';

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

const Description = styled('div', {
  '& > p': {
    marginBottom: rem(32),
  },

  '@md': {
    '& > p': {
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
    <Container>
      <TitleContainer>
        <KeyText>{data.primary.key_text}</KeyText>
        <Title>{data.primary.title?.text}</Title>
        {link && mapLink(link, {
          Internal: null,
          External: null,
        })}
      </TitleContainer>
      <Description dangerouslySetInnerHTML={{ __html: data.primary.description?.html || '' }}/>
    </Container>
  );
};

export default PrismicTeamContentsDataMainBodyTitleAndDescription;
