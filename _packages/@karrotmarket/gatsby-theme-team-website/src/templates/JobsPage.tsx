import * as React from 'react';
import type { PageProps } from 'gatsby';
import { graphql, navigate } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/config';
import { useSiteOrigin } from '@karrotmarket/gatsby-theme-website/src/siteMetadata';
import { GatsbySeo } from 'gatsby-plugin-next-seo';
import { rem } from 'polished';
import $ from 'text2vdom';
import { required } from '@cometjs/core';
import { ReactComponent as SearchdSvg } from '../assets/searchOutlineM.svg';

import PageTitle from '../components/PageTitle';
import _JobPostList from '../components/JobPostList';
import expandMoreOutlineUrl from '!!file-loader!../assets/expand_more_outline_m.svg';
import { useFlexSearch } from '../utils/useFlexSearch';

import BannerArea from './jobsPage/BannerArea';
import { useTranslation } from '@karrotmarket/gatsby-plugin-lokalise-translation/src/translation';

type JobsPageTemplateProps = PageProps<GatsbyTypes.TeamWebsite_JobsPageTemplateQuery, GatsbyTypes.SitePageContext>;

export const query = graphql`
  query TeamWebsite_JobsPageTemplate(
    $departmentId: String!
    $locale: String!
    $navigationId: String!
  ) {
    ...TeamWebsite_DefaultLayout_query

    prismicTeamContents(
      lang: { eq: $locale }
    ) {
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

    currentJobDepartment: jobDepartment(
      id: { eq: $departmentId }
    ) {
      name
    }

    allSelectedJobPost: allJobPost(
      filter: {
        departments: {
          elemMatch: {
            id: { glob: $departmentId }
          }
        }
      }
      sort: {
        fields: title
        order: ASC
      }
    ) {
      nodes {
        ...TeamWebsite_JobPostList_jobPosts

        # Note: Command E 인덱싱용으로 노출
        absoluteUrl
      }
    }

    allJobDepartment(filter: {
      jobPosts: {
        elemMatch: {
          id: { glob: "*" }
        }
      }
    }) {
      nodes {
        id
        name
        slug
        jobPosts {
          id
        }
      }
    }

    allJobPost(
      sort: {
        fields: title
        order: ASC
      }
    ) {
      totalCount

      allEmploymentType: group(
        field: employmentType
      ) {
        fieldValue
      }
    }
  }
`;

const Container = styled('div', {
  contentArea: true,
});

const Content = styled('main', {
  display: 'grid',
  position: 'relative',
  gap: rem(20),
});

const FilterAnchor = styled('div', {
  position: 'absolute',
  bottom: '100%',
  height: rem(58),

  '@sm': {
    height: rem(68),
  },
});

const Filters = styled('div', {
  display: 'grid',
  gridTemplateAreas: [
    '"department"',
    '"etype"',
    '"search"',
  ].join('\n'),
  gap: rem(16),

  '@md': {
    gridTemplateAreas: [
      '"department etype"',
      '"search search"',
    ].join('\n'),
    gap: rem(20),


  },

  '@lg': {
    display: 'flex',
  },

  '& > *': {
    minWidth: rem(260),
  },
});

const Select = styled('select', {
  display: 'grid',
  alignItems: 'center',
  height: rem(52),
  border: '1px solid $gray400',
  borderRadius: rem(8),
  typography: '$body2',
  paddingLeft: rem(20),
  paddingRight: rem(50),
  boxSizing: 'border-box',
  gridTemplateAreas: '"select"',
  appearance: 'none',
  backgroundColor: '$white',
  backgroundImage: `url(${expandMoreOutlineUrl})`,
  backgroundPosition: `right ${rem(20)} top ${rem(23)}`,
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
  gridArea: 'search',
  display: 'inline-flex',
  position: 'relative',
  alignItems: 'center',
  width: '100%',

  '@lg': {
    width: 'auto',
    marginLeft: 'auto',
  },

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
  },
});

const JobPostList = styled(_JobPostList, {
  minHeight: '80vh',
});

const JobsPageTemplate: React.FC<JobsPageTemplateProps> = ({
  data,
  pageContext,
}) => {
  const siteOrigin = useSiteOrigin();
  const messages = useTranslation();

  const [filterEmploymentType, setFilterEmploymentType] = React.useState('');
  const [searchQuery, setSearchQuery] = React.useState('');
  const [_isSearchPending, startSearchTransition] = React.useTransition();

  const handleSearchInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    startSearchTransition(() => {
      setSearchQuery(e.target.value);
    });
  }

  const searchResults = useFlexSearch(searchQuery);

  required(data.prismicTeamContents?.data);

  const metaTitleBase = data.prismicTeamContents.data.jobs_page_meta_title || messages.jobs_page__default_meta_title;
  const metaTitle = data.currentJobDepartment
    ? `${data.currentJobDepartment.name} | ${metaTitleBase}`
    : metaTitleBase;

  const metaDescription = data.prismicTeamContents.data.jobs_page_meta_description;
  const metaImage = data.prismicTeamContents.data.jobs_page_meta_image?.localFile?.childImageSharp?.fixed;

  const filterAnchorId = '_filter';
  const onFilterChange: React.ChangeEventHandler<HTMLSelectElement> = e => {
    const selectedDepartment = data.allJobDepartment.nodes
      .find(department => department.id === e.target.value);

      if (selectedDepartment) {
        const { slug } = selectedDepartment;
        if (slug) {
          navigate(`/jobs/${slug}/${window.location.search}#${filterAnchorId}`);
        }
      } else {
        navigate(`/jobs/${window.location.search}#${filterAnchorId}`);
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

      {/* 임시 배너 영역 */}
      <BannerArea />

      <Content>
        <FilterAnchor id={filterAnchorId} />
        <Filters>
          <Select
            defaultValue={pageContext.departmentId}
            onChange={onFilterChange}
            css={{ gridArea: 'department' }}
          >
            <option
              key="*"
              value="*"
            >
              {$(messages.jobs_page__chapter_all, {
                n: () => <>{data.allJobPost.totalCount}</>
              })}
            </option>
            {data.allJobDepartment.nodes
              .map(department => (
                <option
                  key={department.id}
                  value={department.id}
                >
                  {`${department.name} (${department.jobPosts.length})`}
                </option>
              ))
            }
          </Select>
          <Select
            value={filterEmploymentType}
            onChange={e => setFilterEmploymentType(e.target.value)}
            css={{ gridArea: 'etype' }}
          >
            <option value="">{messages.jobs_page__employment_type_all}</option>
            <option value="FULL_TIME">{messages.jobs_page__employment_type_fulltime}</option>
            <option value="CONTRACTOR">{messages.jobs_page__employment_type_contractor}</option>
            <option value="INTERN">{messages.jobs_page__employment_type_intern}</option>
            <option value="ASSISTANT">{messages.jobs_page__employment_type_assistant}</option>
          </Select>
          <Search >
            <input
              placeholder={messages.jobs_page__search}
              onChange={handleSearchInputChange}
            />
            <SearchdSvg />
          </Search>
        </Filters>
        <JobPostList
          jobPosts={data.allSelectedJobPost.nodes}
          filterEmploymentType={filterEmploymentType}
          searchResults={searchResults}
        />
      </Content>
    </Container>
  );
};

export default JobsPageTemplate;
