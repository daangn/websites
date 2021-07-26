import * as React from 'react';
import { graphql } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/stitches.config';
import { rem } from 'polished';

type JobPostSummaryProps = {
  jobPost: GatsbyTypes.JobPostSummary_jobPostFragment,
};

export const query = graphql`
  fragment JobPostSummary_jobPost on JobPost {
    id
    title
    chapter
    corporate
    employmentType
    priorExperience
    tags
  }
`;

const Container = styled('div', {
  display: 'grid',
  gridTemplate: `
    "title       title       title       tags" auto
    ".           .           .           ."    ${rem(8)}
    "corporate   employment  .           ."    auto /
     max-content max-content max-content 1fr
  `,
  alignItems: 'center',
  paddingY: rem(24),
  borderBottom: '1px solid $gray200',

  variants: {
    layout: {
      table: {
        gridTemplate: `
          "title       tags corporate   employment" auto /
           max-content auto ${rem(120)} ${rem(120)}
        `,
      },
    },
  },
});

const Title = styled('h3', {
  typography: '$body2',
  gridArea: 'title',

  '@sm': {
    typography: '$subtitle2',
  },
});

const TagContainer = styled('div', {
  gridArea: 'tags',
  display: 'flex',
  alignItems: 'center',
  marginLeft: rem(8),

  '@sm': {
    marginLeft: rem(12),
  },
});

const Tag = styled('span', {
  typography: '$caption3',
  fontWeight: 'bold',
  color: '$white',
  background: '$carrot500',
  borderRadius: rem(6),
  padding: `${rem(5)} ${rem(8)}`,

  '@sm': {
    typography: '$caption1',
    paddingX: rem(10),
  },

  '& + &': {
    marginLeft: rem(6),
    '@sm': {
      marginLeft: rem(8),
    },
  },
});

const JobProperty = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '$gray600',
  typography: '$caption1',

  '& + &:before': {
    content: '""',
    display: 'inline-block',
    marginX: rem(16),
    height: '0.8em',
    borderLeft: '1px solid $gray300',
  },

  variants: {
    layout: {
      table: {
        '& + &:before': {
          display: 'none',
        },
      },
    },
  },
});

const Corporate = styled(JobProperty, {
  gridArea: 'corporate',
});

const EmploymentType = styled(JobProperty, {
  gridArea: 'employment',

  variants: {
    layout: {
      table: {
        justifySelf: 'flex-end',
      },
    },
  },
});

const JobPostSummary: React.FC<JobPostSummaryProps> = ({
  jobPost,
}) => {
  return (
    <Container
      layout={{ '@lg': 'table' }}
    >
      <Title>{jobPost.title}</Title>
      <TagContainer>
        {jobPost.tags.map(tag => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </TagContainer>
      <Corporate layout={{ '@lg': 'table' }}>
        {{
          KARROT_MARKET: '당근마켓',
          KARROT_PAY: '당근페이',
        }[jobPost.corporate || 'KARROT_MARKET']}
      </Corporate>
      <EmploymentType layout={{ '@lg': 'table' }}>
        {{
          FULL_TIME: '정규직',
          INTERN: '인턴',
          CONTRACTOR: '계약직',
        }[jobPost.employmentType]}
      </EmploymentType>
    </Container>
  );
};

export default JobPostSummary;
