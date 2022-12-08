import * as React from 'react';
import { graphql } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/config';
import { rem } from 'polished';
import { vars } from '@seed-design/design-token';

import generateProperties from './jobPostSummary/generateProperties';

type JobPostSummaryProps = {
  jobPost: GatsbyTypes.TeamWebsite_JobPostSummary_jobPostFragment,
};

export const query = graphql`
  fragment TeamWebsite_JobPostSummary_jobPost on JobPost {
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
    "title       tags" auto
    ".           ."    ${rem(8)}
    "properties  ."    auto /
     auto 1fr
  `,
  alignItems: 'center',
  paddingY: rem(24),
  borderBottom: `1px solid ${vars.$scale.color.gray200}`,

  '@lg': {
    gridTemplate: `
      "title       tags properties " auto /
       max-content auto max-content
    `,
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

  transition: 'opacity .3s',
  'a:hover &': {
    opacity: 0.6,
  },

  '@sm': {
    marginLeft: rem(12),
  },
});

const Tag = styled('span', {
  typography: '$caption3',
  fontWeight: 'bold',
  color: vars.$static.color.white,
  background: vars.$scale.color.carrot500,
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

const Properties = styled('div', {
  display: 'flex',
  gridArea: 'properties',

  '@lg': {
    justifyContent: 'flex-end',
  },
});

const Property = styled('div', {
  color: vars.$scale.color.gray600,
  typography: '$caption1',

  '& + &:before': {
    content: '""',
    display: 'inline-block',
    marginX: rem(16),
    height: '0.8em',
    borderLeft: `1px solid ${vars.$scale.color.gray300}`,
  },

  '@lg': {
    width: rem(120),
    textAlign: 'right',
    '& + &:before': {
      display: 'none',
    },
  },
});

const JobPostSummary: React.FC<JobPostSummaryProps> = ({
  jobPost,
}) => {
  return (
    <Container>
      <Title>{jobPost.title}</Title>
      <TagContainer>
        {jobPost.tags.map(tag => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </TagContainer>
      <Properties>
        {[...generateProperties(jobPost)].map(property => (
          <Property key={property}>
            {property}
          </Property>
        ))}
      </Properties>
    </Container>
  );
};

export default JobPostSummary;
