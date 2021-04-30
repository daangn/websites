import * as React from 'react';
import { graphql, Link } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/stitches.config';
import { rem } from 'polished';

import JobPostTitleText from './JobPostTitleText';

type JobPostingListItemProps = {
  jobPost: GatsbyTypes.JobPostingListItem_jobPostFragment,
};

export const query = graphql`
  fragment JobPostingListItem_jobPost on JobPost {
    id
    title
    chapter
    employmentType
    priorExperience
    pagePath: gatsbyPath(filePath: "/jobs/{JobPost.parent__(GreenhouseJob)__ghId}")
  }
`;

const Container = styled('li', {
  display: 'grid',
  gridTemplate: `
    "title      title       title       title       title" auto
    "chapter    department  prior       employment  ."     auto /
    max-content max-content max-content max-content 1fr
  `,
  paddingY: rem(24),
  borderBottom: '1px solid $gray200',

  variants: {
    layout: {
      table: {
        gridTemplate: `
          "chapter     title department  prior       employment" auto /
          ${rem(120)}  auto  ${rem(120)} ${rem(120)} ${rem(120)}
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

const JobPostLink = styled(Link, {
  display: 'block',
  color: 'inherit',
  transition: 'color .3s',
  textDecoration: 'none',
  '&:hover': {
    color: '$gray600',
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

const Chapter = styled(JobProperty, {
  gridArea: 'chapter',
  color: '$gray600',
  fontSize: '$caption1',

  variants: {
    layout: {
      table: {
        justifySelf: 'flex-start',
      },
    },
  },
});

const Department = styled(JobProperty, {
  gridArea: 'department',
});

const PriorExperience = styled(JobProperty, {
  gridArea: 'prior',
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

const JobPostingListItem: React.FC<JobPostingListItemProps> = ({
  jobPost,
}) => {
  return (
    <JobPostLink to={jobPost.pagePath!}>
      <Container layout={{ '@lg': 'table' }}>
        <Title size={{ '@sm': 'sm' }}>
            {jobPost.title}
        </Title>
        <Chapter layout={{ '@lg': 'table' }}>
          {jobPost.chapter}
        </Chapter>
        <Department layout={{ '@lg': 'table' }}>
          {'당근마켓'}
        </Department>
        <PriorExperience layout={{ '@lg': 'table' }}>
          {{
            YES: '경력',
            NO: '신입',
            WHATEVER: '경력/신입',
          }[jobPost.priorExperience]}
        </PriorExperience>
        <EmploymentType layout={{ '@lg': 'table' }}>
          {{
            FULL_TIME: '정규직',
            INTERN: '인턴',
            CONTRACTOR: '계약직',
          }[jobPost.employmentType]}
        </EmploymentType>
      </Container>
    </JobPostLink>
  );
};

export default JobPostingListItem;
