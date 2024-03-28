import { useLinkParser } from '@karrotmarket/gatsby-theme-website/src/link';
import { vars } from '@seed-design/design-token';
import { graphql } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/config';
import { rem } from 'polished';
import * as React from 'react';

import DetailLink from './DetailLink';

type PrismicTeamContentsDataMainBodyTitleAndDescriptionProps = {
  data: GatsbyTypes.PrismicTeamContentsDataMainBodyTitleAndDescription_dataFragment;
  className?: string;
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
  gridTemplateAreas: ['"title"', '"description"'].join('\n'),

  '@md': {
    gap: rem(40),
    gridTemplateColumns: '1fr 1fr',
  },

  variants: {
    alignTitle: {
      left: {
        '@md': {
          gridTemplateAreas: ['"title description"'].join('\n'),
        },
      },
      right: {
        '@md': {
          gridTemplateAreas: ['"description title"'].join('\n'),
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
  typography: '$body2',
  fontWeight: 'bold',
  marginBottom: rem(16),

  '@md': {
    typography: '$subtitle3',
    marginBottom: rem(24),
  },
});

const Title = styled('h1', {
  whiteSpace: 'pre-line',
  typography: '$subtitle2',
  marginBottom: rem(24),

  '@md': {
    typography: '$heading4',
    marginBottom: rem(32),
  },
});

const Description = styled('div', {
  gridArea: 'description',
  color: vars.$scale.color.gray700,

  '& > p': {
    typography: '$body2',
    marginBottom: rem(32),
  },

  '@md': {
    '& > p': {
      typography: '$body1',
      marginBottom: rem(40),
    },
  },
});

const PrismicTeamContentsDataMainBodyTitleAndDescription: React.FC<
  PrismicTeamContentsDataMainBodyTitleAndDescriptionProps
> = ({ data }) => {
  const parseLink = useLinkParser();

  if (data.primary == null) {
    return null;
  }

  const link = data.primary.link?.url && parseLink(data.primary.link.url);

  return (
    <Container alignTitle={data.primary.inverted === true ? 'right' : 'left'}>
      <TitleContainer>
        <KeyText>{data.primary.key_text}</KeyText>
        <Title>{data.primary.title?.text}</Title>
        {link && <DetailLink link={link} />}
      </TitleContainer>
      <Description dangerouslySetInnerHTML={{ __html: data.primary.description?.html || '' }} />
    </Container>
  );
};

export default PrismicTeamContentsDataMainBodyTitleAndDescription;
