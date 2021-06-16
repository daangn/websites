import * as React from 'react';
import type { PageProps } from 'gatsby';
import { graphql } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/stitches.config';
import { rem } from 'polished';

import PageTitle from '~/components/PageTitle';
import _JobPostList from '~/components/JobPostList';

type JobsPageProps = PageProps<GatsbyTypes.JobsPageQuery>;

export const query = graphql`
  query JobsPage {
    ...DefaultLayout_query
    allJobPost(
      sort: {
        fields: title
        order: ASC
      }
    ) {
      ...JobPostList_jobPosts

      totalCount

      allChapter: group(field: chapter) {
        fieldValue
        totalCount
      }

      allEmploymentType: group(field: employmentType) {
        fieldValue
      }
    }
  }
`;

const Container = styled('section', {
  contentArea: true,
});

const Content = styled('div', {
  display: 'grid',
  gap: rem(8),
});

const Filters = styled('div', {
  display: 'grid',
  gap: rem(16),

  '@sm': {
    gridTemplateColumns: `repeat(2, minmax(${rem(260)}, max-content))`,
    gap: rem(20),
  },
});

const Select = styled('select', {
  display: 'grid',
  alignItems: 'center',
  height: rem(52),
  border: '1px solid $gray400',
  borderRadius: rem(8),
  typography: '$body2',
  paddingX: rem(20),
  boxSizing: 'border-box',
  gridTemplateAreas: '"select"',
  appearance: 'none',
  backgroundColor: '$white',
  '&:focus': {
    border: '1px solid $carrot500',
  },
  '::placeholder': {
    color: '$gray500',
  },
  '&::-ms-expand': {
    display: 'none',
  },
  '&::after': {
    content: '""',
    gridArea: 'select',
    justifySelf: 'end',
    width: '0.8em',
    height: '0.5em',
    clipPath: 'polygon(100% 0%, 0 0%, 50% 100%)',
    background: '$gray500',
  },
});

const JobPostList = styled(_JobPostList, {
  minHeight: '100vh',
});

const JobsPage: React.FC<JobsPageProps> = ({
  data,
}) => {
  const [filterChapter, setFilterChapter] = React.useState('');
  const [filterEmploymentType, setFilterEmployementType] = React.useState('');
  return (
    <Container>
      <PageTitle
        css={{
          marginBottom: rem(56),
        }}
      >
        {`당근마켓과 함께 할
        멋진 동료를 찾고 있어요!`}
      </PageTitle>
      <Content>
        <Filters>
          <Select
            value={filterChapter}
            onChange={e => setFilterChapter(e.target.value)}
          >
            <option
              key=""
              value=""
            >
              {`전체 직군 (${data.allJobPost.totalCount})`}
            </option>
            {data.allJobPost.allChapter
            .map(chapter => (
              <option
                key={chapter.fieldValue}
                value={chapter.fieldValue}
              >
                {`${chapter.fieldValue} (${chapter.totalCount})`}
              </option>
            ))}
          </Select>
          <Select>
            <option
              key=""
              value=""
            >
              전체 고용형태
            </option>
            {data.allJobPost.allEmploymentType
            .map(employmentType => (
              <option
                key={employmentType.fieldValue}
                value={employmentType.fieldValue}
              >
                {{
                  'FULL_TIME': '정규직',
                  'CONTRACTOR': '계약직',
                  'INTERN': '인턴',
                }[employmentType.fieldValue || '']}
              </option>
            ))}
          </Select>
        </Filters>
        <JobPostList
          jobPosts={data.allJobPost}
          filterChapter={filterChapter}
          filterEmploymentType={filterEmploymentType}
        />
      </Content>
    </Container>
  );
};

export default JobsPage;
