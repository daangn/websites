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
  }
`;

const Container = styled('div', {
  display: 'grid',
  gridTemplate: `
    "title       title       title" auto
    "corporate   employment  ."     auto /
     max-content max-content 1fr
  `,
  paddingY: rem(24),
  borderBottom: '1px solid $gray200',

  variants: {
    layout: {
      table: {
        gridTemplate: `
          "title  corporate   employment" auto /
           auto   ${rem(120)} ${rem(120)}
        `,
      },
    },
  },
});

const Title = styled('h3', {
  fontSize: '$body2',
  gridArea: 'title',
  marginBottom: rem(8),

  variants: {
    size: {
      sm: {
        fontSize: '$subtitle2',
      },
    },
  },
});

const JobProperty = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '$gray600',
  fontSize: '$caption1',

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
      <Title size={{ '@sm': 'sm' }}>
        {jobPost.title}
      </Title>
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
