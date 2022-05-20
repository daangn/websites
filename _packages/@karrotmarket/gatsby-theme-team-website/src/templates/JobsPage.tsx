import * as React from 'react';
import type { PageProps } from 'gatsby';
import { graphql, navigate } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/config';
import { useSiteOrigin } from '@karrotmarket/gatsby-theme-website/src/siteMetadata';
import { GatsbySeo } from 'gatsby-plugin-next-seo';
import { rem } from 'polished';
import $ from 'text2vdom';
import { required } from '@cometjs/core';
import { vars } from '@seed-design/design-token';

import { ReactComponent as SearchdSvg } from '../assets/searchOutlineM.svg';
import PageTitle from '../components/PageTitle';
import _JobPostList from '../components/JobPostList';
import Search from '../components/Search'
import {ReactComponent as ExpandMoreOutlineIcon} from '../assets/expand_more_outline_m.svg';
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

    allDepartmentFilteredJobPost: allJobPost(
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
          id: { 
            glob: "*" 
          }
        }
      }
    }) {
      nodes {
        id
        name
        slug
        jobPosts {
          id
          corporate
        }
      }
    }

    # Note: Corporate reduce용 전체 jobPost
    allJobPost {
      nodes {
        corporate
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
    '"corporate"',
    '"department"',
    '"search"',
  ].join('\n'),
  gap: rem(16),

  '@md': {
    gridTemplateAreas: [
      '"corporate department etype"',
      '"search search search"',
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

const SelectWrapper = styled('div', {
  position: 'relative',
  display: 'grid',
})

const Select = styled('select', {
  display: 'grid',
  alignItems: 'center',
  width: '100%',
  height: rem(52),
  border: `1px solid ${vars.$scale.color.gray400}`,
  backgroundColor: vars.$semantic.color.paperDefault,
  borderRadius: rem(8),
  typography: '$body2',
  paddingLeft: rem(20),
  paddingRight: rem(50),
  boxSizing: 'border-box',
  gridTemplateAreas: '"select"',
  appearance: 'none',
  color: vars.$scale.color.gray700,

  '&:focus': {
    border: `1px solid ${vars.$scale.color.carrot500}`,
  },
  '::placeholder': {
    color: vars.$scale.color.gray500,
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
    backgroundColor: vars.$scale.color.gray500,
  },
});

const EtypeSelectWrapper = styled(SelectWrapper, {
  display: 'none',
  '@md': {
    display: 'grid'
  },
  '@lg': {
    display: 'grid'
  }
})

const ExpandIcon = styled(ExpandMoreOutlineIcon, {
  position: 'absolute',
  width: '0.8em',
  height: '0.5em',
  right: rem(20),
  top: rem(23),
  color: vars.$scale.color.gray700,
})

const JobPostList = styled(_JobPostList, {
  minHeight: '80vh',
});

const JobsPageTemplate: React.FC<JobsPageTemplateProps> = ({
  data,
  pageContext,
  location
}) => {
  const siteOrigin = useSiteOrigin();
  const messages = useTranslation();

  const searchParams = new URLSearchParams(location.search)
  const allCorporates = data.allJobPost.nodes.reduce((acc, jobPost) => {
    const corporateType = jobPost.corporate
    for (const corporate of acc) {
      if (corporate === corporateType) {
        return acc
      }
    }
    acc.push(jobPost.corporate)
    
    return acc
  }, [])

  const currentCorp = allCorporates.find((corp) => corp === searchParams.get('corp'))

  const departmentElemMatch = data.allJobDepartment.nodes.filter((node) => {
    if (!currentCorp) return true

    return Boolean(node.jobPosts.find((jobPost) => jobPost.corporate === currentCorp))
  })

  const corpFilteredJobDepartments = departmentElemMatch.map((node) => {
    if (!currentCorp) return node

    return {
      ...node,
      jobPosts: node.jobPosts.filter((jobPost) => jobPost.corporate === currentCorp)
    }
  })

  const jobPostsTotalCount = corpFilteredJobDepartments.reduce((acc, curr) => acc + curr.jobPosts.length, 0)
  const allSelectedJobPosts = data.allDepartmentFilteredJobPost.nodes.filter((node) => {
    if (!currentCorp) return true

    return node.corporate === currentCorp
  })


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

  const onCorpFilterChange: React.ChangeEventHandler<HTMLSelectElement> = e => {
    const selectedCorp = e.target.value
    if (selectedCorp) {
      searchParams.set('corp', selectedCorp)
      navigate(`/jobs/?${searchParams.toString()}#${filterAnchorId}`)  
    } else {
      navigate(`/jobs/#${filterAnchorId}`)
    }
  }

  return (
    <>
      {/* 임시 배너 영역 */}
      <BannerArea />

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
          <FilterAnchor id={filterAnchorId} />
          <Filters>
            <SelectWrapper css={{ gridArea: 'corporate' }}>
              <Select 
                defaultValue={currentCorp} 
                onChange={onCorpFilterChange}
              >
                <option key="*" value="">
                  {$(messages.jobs_page__corporate_all, {
                    n: () => <>{allCorporates.length}</>
                  })}
                </option>
                {allCorporates.map((corp) => {
                  return (
                    <option 
                      key={corp}
                      value={corp}
                    >
                      {messages[`jobs_page__${corp}`]}
                    </option>
                  )
                })}
              </Select>
              <ExpandIcon />
            </SelectWrapper>
            <SelectWrapper css={{ gridArea: 'department' }}>
              <Select
                defaultValue={pageContext.departmentId}
                onChange={onFilterChange}
              >
                <option
                  key="*"
                  value="*"
                >
                  {$(messages.jobs_page__chapter_all, {
                    n: () => <>{jobPostsTotalCount}</>
                  })}
                </option>
                {corpFilteredJobDepartments
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
              <ExpandIcon />
            </SelectWrapper>
            <EtypeSelectWrapper css={{ gridArea: 'etype' }}>
              <Select
                value={filterEmploymentType}
                onChange={e => setFilterEmploymentType(e.target.value)}
              >
                <option value="">{messages.jobs_page__employment_type_all}</option>
                <option value="FULL_TIME">{messages.jobs_page__employment_type_fulltime}</option>
                <option value="CONTRACTOR">{messages.jobs_page__employment_type_contractor}</option>
                <option value="INTERN">{messages.jobs_page__employment_type_intern}</option>
                <option value="ASSISTANT">{messages.jobs_page__employment_type_assistant}</option>
              </Select>
              <ExpandIcon />
            </EtypeSelectWrapper>
            <Search>
              <input
                placeholder={messages.jobs_page__search}
                onChange={handleSearchInputChange}
              />
              <SearchdSvg />
            </Search>
          </Filters>
          <JobPostList
            jobPosts={allSelectedJobPosts}
            filterEmploymentType={filterEmploymentType}
            searchResults={searchResults}
          />
        </Content>
      </Container>
    </>
  );
};

export default JobsPageTemplate;
