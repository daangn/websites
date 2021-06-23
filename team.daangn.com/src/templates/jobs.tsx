import * as React from 'react';
import type { PageProps } from 'gatsby';
import { graphql, navigate } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/stitches.config';
import { GatsbySeo } from 'gatsby-plugin-next-seo';
import { rem } from 'polished';
import { required } from '@cometjs/core';

import PageTitle from '~/components/PageTitle';
import _JobPostList from '~/components/JobPostList';

type JobsPageTemplateProps = PageProps<GatsbyTypes.JobsPageTemplateQuery, GatsbyTypes.SitePageContext>;

export const query = graphql`
  query JobsPageTemplate($pattern: String) {
    ...DefaultLayout_query

    prismicTeamContents {
      _previewable
      data {
        jobs_page_meta_title
        jobs_page_meta_description
        jobs_page_meta_image {
          localFile {
            childImageSharp {
              fixed(
                width: 1200
                height: 630
                toFormat: JPG
                quality: 90
              ) {
                src
                width
                height
              }
            }
          }
        }
        jobs_page_title {
          text
        }
      }
    }

    currentJobPosts: allJobPost(
      filter: {
        slug: { regex: $pattern }
      }
      sort: {
        fields: title
        order: ASC
      }
    ) {
      ...JobPostList_jobPosts
    }

    allJobPost(
      sort: {
        fields: title
        order: ASC
      }
    ) {
      totalCount

      allChapter: group(field: chapter, limit: 1) {
        fieldValue
        totalCount
        nodes {
          chapter
          slug
        }
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
  minHeight: '80vh',
});

const JobsPageTemplate: React.FC<JobsPageTemplateProps> = ({
  data,
  pageContext,
}) => {
  const [filterChapter, setFilterChapter] = React.useState(pageContext.chapter || '');
  const [filterEmploymentType, setFilterEmploymentType] = React.useState('');

  React.useEffect(() => {
    const selectedChapterGroup = data.allJobPost.allChapter
      .find(chapterGroup => chapterGroup.nodes[0]?.chapter === filterChapter);

    if (selectedChapterGroup) {
      const { slug } = selectedChapterGroup.nodes[0];
      navigate(`/jobs/${slug}/${window.location.search}`);
    } else {
      navigate(`/jobs/${window.location.search}`);
    }
  }, [filterChapter]);

  required(data.prismicTeamContents?.data);

  const metaImage = data.prismicTeamContents.data.jobs_page_meta_image?.localFile?.childImageSharp?.fixed;

  return (
    <Container>
      <GatsbySeo
        title={data.prismicTeamContents.data.jobs_page_meta_title}
        description={data.prismicTeamContents.data.jobs_page_meta_description}
        openGraph={{
          title: data.prismicTeamContents.data.jobs_page_meta_title,
          description: data.prismicTeamContents.data.jobs_page_meta_description,
          ...metaImage && {
            images: [{
              url: location.origin + metaImage.src,
              width: metaImage.width,
              height: metaImage.height,
            }],
          },
        }}
        twitter={{
          ...metaImage && {
            cardType: 'summary_large_image',
          },
        }}
      />
      <PageTitle
        css={{
          marginBottom: rem(56),
        }}
      >
        {data.prismicTeamContents.data?.jobs_page_title?.text}
      </PageTitle>
      <Content>
        <Filters>
          <Select
            defaultValue={pageContext.chapter || ''}
            onChange={e => setFilterChapter(e.target.value)}
          >
            <option
              key=""
              value=""
            >
              {`전체 직군 (${data.allJobPost.totalCount})`}
            </option>
            {data.allJobPost.allChapter
            .map(chapterGroup => {
              return (
                <option
                  key={chapterGroup.fieldValue}
                  value={chapterGroup.fieldValue}
                >
                  {`${chapterGroup.fieldValue} (${chapterGroup.totalCount})`}
                </option>
              )
            })}
          </Select>
          <Select
            value={filterEmploymentType}
            onChange={e => setFilterEmploymentType(e.target.value)}
          >
            <option value="">전체 고용형태</option>
            <option value="FULL_TIME">정규직</option>
            <option value="CONTRACTOR">계약직</option>
            <option value="INTERN">인턴</option>
          </Select>
        </Filters>
        <JobPostList
          jobPosts={data.currentJobPosts}
          filterEmploymentType={filterEmploymentType}
        />
      </Content>
    </Container>
  );
};

export default JobsPageTemplate;
