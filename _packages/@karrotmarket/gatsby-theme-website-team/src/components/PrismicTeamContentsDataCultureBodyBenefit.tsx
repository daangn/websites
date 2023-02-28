import * as React from 'react';
import { rem } from 'polished';
import { graphql } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/config';
import { vars } from '@seed-design/design-token';

type PrismicTeamContentsDataCultureBodyBenefitProps = {
  data: GatsbyTypes.PrismicTeamContentsDataCultureBodyBenefit_dataFragment;
  className?: string;
};

export const query = graphql`
  fragment PrismicTeamContentsDataCultureBodyBenefit_data on PrismicTeamContentsDataCultureBodyBenefit {
    primary {
      title {
        text
      }
    }
    items {
      subtitle
      subtext
      description {
        html
      }
    }
  }
`;

const Container = styled('article', {
  contentArea: true,
  width: '100%',
  display: 'grid',
  gap: rem(64),

  '@md': {
    gap: rem(100),
  },
});

const Header = styled('header', {
  display: 'grid',
  gap: rem(32),
});

const Title = styled('h2', {
  whiteSpace: 'pre-line',
  typography: '$subtitle2',

  '@md': {
    typography: '$heading4',
  },
});

const BenefitGroupList = styled('ol', {
  listStyle: 'none',
  paddingLeft: 0,
  display: 'grid',
  gap: rem(48),

  '@lg': {
    gridTemplateColumns: '1fr 1fr',
    gap: `${rem(80)} ${rem(144)}`,
  },
});

const BenefitGroup = styled('li', {
  display: 'grid',
  gridTemplateRows: 'min-content',
  gap: rem(24),
});

const BenefitGroupTitle = styled('h3', {
  display: 'inline-flex',
  alignItems: 'flex-start',
  typography: '$subtitle3',

  '@md': {
    typography: '$subtitle1',
  },

  '&::before': {
    content: 'attr(data-num)',
    color: vars.$scale.color.carrot500,
    fontSize: '0.8em',
    lineHeight: 1,
    marginRight: rem(16),
    transform: 'translateY(50%)',

    '@md': {
      fontSize: '0.6em',
    },
  },
});

const Benefit = styled('div', {
  display: 'grid',
  gap: rem(8),

  '@md': {
    gap: rem(24),
  },
});

const BenefitSummary = styled('p', {
  typography: '$body2',
  color: vars.$scale.color.gray700,
});

const BenefitDetail = styled('div', {
  typography: '$body2',
  color: vars.$scale.color.gray700,
  '& > ul': {
    paddingLeft: rem(24),
    display: 'grid',
    gap: rem(8),
  },
});

const PrismicTeamContentsDataCultureBodyBenefit: React.FC<
  PrismicTeamContentsDataCultureBodyBenefitProps
> = ({ data, className }) => {
  return (
    <Container className={className}>
      <Header>
        <Title>{data.primary?.title?.text}</Title>
      </Header>
      <BenefitGroupList>
        {(data.items || []).map((item, i) => (
          // rome-ignore lint/suspicious/noArrayIndexKey: intentional
          <BenefitGroup key={i}>
            <BenefitGroupTitle data-num={(i + 1).toString().padStart(2, '0')}>
              {item.subtitle}
            </BenefitGroupTitle>
            <Benefit>
              <BenefitSummary>{item.subtext}</BenefitSummary>
              <BenefitDetail dangerouslySetInnerHTML={{ __html: item.description?.html || '' }} />
            </Benefit>
          </BenefitGroup>
        ))}
      </BenefitGroupList>
    </Container>
  );
};

export default PrismicTeamContentsDataCultureBodyBenefit;
