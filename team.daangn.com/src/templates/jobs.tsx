import * as React from 'react';
import type { PageProps } from 'gatsby';
import { graphql, navigate } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/stitches.config';
import { useSiteOrigin } from '@karrotmarket/gatsby-theme-website/src/siteMetadata';
import { GatsbySeo } from 'gatsby-plugin-next-seo';
import { rem } from 'polished';
import { required } from '@cometjs/core';
import {ReactComponent as SearchdSvg} from '~/assets/searchOutlineM.svg';

import PageTitle from '~/components/PageTitle';
import _JobPostList from '~/components/JobPostList';
import expandMoreOutlineUrl from '!!file-loader!~/assets/expand_more_outline_m.svg'
import { useFlexSearch } from '../utils/useFlexSearch';

type JobsPageTemplateProps = PageProps<GatsbyTypes.JobsPageTemplateQuery, GatsbyTypes.SitePageContext>;

export const query = graphql`
  query JobsPageTemplate($pattern: String) {
    ...DefaultLayout_query

    prismicTeamContents {
      data {
        jobs_page_meta_title
        jobs_page_meta_description
        jobs_page_meta_image {
          localFile {
            childImageSharp {
              fixed(
                width: 1200
                height: 630
                toFormat: PNG
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

    currentGreenhouseJobs: allGreenhouseJob(
      filter: {
        childJobPost: {
          slug: { regex: $pattern }
        }
      }
      sort: {
        fields: childJobPost___title
        order: ASC
      }
    ) {
      ...JobPostList_jobs

      # Command E 인덱싱용 ㅎㅎ..
      nodes {
        childJobPost {
          absoluteUrl
        }
      }
    }

    allGreenhouseJob(
      sort: {
        fields: childJobPost___title
        order: ASC
      }
    ) {
      totalCount

      allChapter: group(
        field: childJobPost___chapter,
        limit: 1
      ) {
        fieldValue
        totalCount
        nodes {
          childJobPost {
            chapter
            slug
          }
        }
      }

      allEmploymentType: group(
        field: childJobPost___employmentType
      ) {
        fieldValue
      }
    }

    localSearchJobPosts {
      index
    }
  }
`;

const Container = styled('section', {
  contentArea: true,
});

const Content = styled('div', {
  display: 'grid',
  gap: rem(20),
});

const Filters = styled('div', {
  display: 'grid',
  gap: rem(16),

  '@sm': {
    display:'flex',
    gap: rem(20),
    
    '& > *':{
      width:rem(260),
    }
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
  backgroundImage: `url(${expandMoreOutlineUrl})`,
  backgroundPosition: `right ${rem(26)} top ${rem(23)}`,
  backgroundRepeat: 'no-repeat',
  color: '$gray700',
  
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
const Search = styled('div', {
  display: 'inline-flex',
  position: 'relative',
  marginLeft: 'auto',
  alignItems: 'center',
  
  '& > input':{
    flex:1,
    alignItems: 'center',
    height: rem(52),
    border: '1px solid $gray400',
    boxSizing: 'border-box',
    borderRadius: rem(8),
    typography: '$body2',
    paddingLeft: rem(52),
    paddingRight: rem(14),
    '::placeholder': {
      color: '$gray500',
    },
    '&:focus': {
      border: '1px solid $carrot500',
    },
    '&:focus~svg': {
      color: '$carrot500',
    },
  },
  '& > svg':{
    color:'$gray400',
    position:'absolute',
    left:rem(20),
  }
});

const JobPostList = styled(_JobPostList, {
  minHeight: '80vh',
});

const JobsPageTemplate: React.FC<JobsPageTemplateProps> = ({
  data,
  pageContext,
}) => {
  const siteOrigin = useSiteOrigin();

  const [filterEmploymentType, setFilterEmploymentType] = React.useState('');
  const [searchQuery, setSearchQuery] = React.useState('');

  const searchResults = useFlexSearch(searchQuery, data.localSearchJobPosts?.index)

  required(data.prismicTeamContents?.data);

  const metaTitleBase = data.prismicTeamContents.data.jobs_page_meta_title || '당근마켓 채용';
  const metaTitle = pageContext.chapter
    ? `${pageContext.chapter} 채용 | ${metaTitleBase}`
    : metaTitleBase;

  const metaDescription = data.prismicTeamContents.data.jobs_page_meta_description;
  const metaImage = data.prismicTeamContents.data.jobs_page_meta_image?.localFile?.childImageSharp?.fixed;

  const onFilterChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    const selectedChapterGroup = data.allGreenhouseJob.allChapter
      .find(chapterGroup => chapterGroup.nodes[0]?.childJobPost?.chapter === e.target.value);

      if (selectedChapterGroup) {
        const { slug } = selectedChapterGroup.nodes[0]?.childJobPost ?? {};
        if (slug) {
          navigate(`/jobs/${slug}/${window.location.search}`);
        }
      } else {
        navigate(`/jobs/${window.location.search}`);
      }
  }

  return (
    <Container>
      <GatsbySeo
        title={metaTitle}
        description={metaDescription}
        openGraph={{
          title: metaTitle,
          description: metaDescription,
          ...metaImage && {
            images: [{
              url: siteOrigin + metaImage.src,
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
            onChange={onFilterChange}
          >
            <option
              key=""
              value=""
            >
              {`전체 직군 (${data.allGreenhouseJob.totalCount})`}
            </option>
            {data.allGreenhouseJob.allChapter
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
            <option value="ASSISTANT">어시스턴트</option>
          </Select>
          <Search >
            <input placeholder="검색" onChange={e=>setSearchQuery(e.target.value)}/>
            <SearchdSvg />
          </Search>
        </Filters>
        <JobPostList
          jobs={data.currentGreenhouseJobs}
          filterEmploymentType={filterEmploymentType}
          searchResults={searchResults}
        />
      </Content>
    </Container>
  );
};

export default JobsPageTemplate;
