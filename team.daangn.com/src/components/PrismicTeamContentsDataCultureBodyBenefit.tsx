import * as React from 'react';
import { rem } from 'polished';
import { graphql } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/stitches.config';

type PrismicTeamContentsDataCultureBodyBenefitProps = {
  data: GatsbyTypes.PrismicTeamContentsDataCultureBodyBenefit_dataFragment,
  className?: string,
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
  fontSize: '$subtitle2',

  '@md': {
    fontSize: '$heading4',
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
  gap: rem(24),
});

const BenefitGroupTitle = styled('h3', {
  display: 'inline-flex',
  fontSize: '$subtitle3',

  '@md': {
    fontSize: '$subtitle1',
  },

  '&::before': {
    content: 'attr(data-num)',
    color: '$carrot500',
    fontSize: '0.8em',
    marginRight: rem(16),
    transform: 'translateY(10%)',

    '@md': {
      fontSize: '0.6em',
    },
  },
});

const Benefits = styled('div', {
  color: '$gray700',
  lineHeight: 1.5,
  '& > ul': {
    paddingLeft: rem(24),
    display: 'grid',
    gap: rem(8),
  },
});

const PrismicTeamContentsDataCultureBodyBenefit: React.FC<PrismicTeamContentsDataCultureBodyBenefitProps> = ({
  data,
  className,
}) => {
  return (
    <Container className={className}>
      <Header>
        <Title>
          {data.primary?.title?.text}
        </Title>
      </Header>
      <BenefitGroupList>
        {(data.items || []).map((item, i) => (
          <BenefitGroup key={i}>
            <BenefitGroupTitle data-num={(i + 1).toString().padStart(2, '0')}>
              {item.subtitle}
            </BenefitGroupTitle>
            <Benefits
              dangerouslySetInnerHTML={{ __html: item.description?.html || '' }}
            />
          </BenefitGroup>
        ))}
      </BenefitGroupList>
    </Container>
  );
};

export default PrismicTeamContentsDataCultureBodyBenefit;
