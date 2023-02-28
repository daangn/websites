import * as React from 'react';
import { graphql, navigate, type PageProps, type HeadProps } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/config';
import { HeadSeo } from 'gatsby-plugin-head-seo/src';
import { rem } from 'polished';
import $ from 'text2vdom';
import { required } from '@cometjs/core';
import { vars } from '@seed-design/design-token';
import { useTranslation } from '@karrotmarket/gatsby-theme-website-team/src/translation';
import SeedIcon from '@karrotmarket/gatsby-theme-website-team/src/components/SeedIcon';

import { DefaultLayoutHead } from '../layouts/DefaultLayout';
import PageTitle from '../components/PageTitle';
import _JobPostList from '../components/JobPostList';
import SearchInput from '../components/SearchInput';
import { useFlexSearch } from '../utils/useFlexSearch';

import BannerArea from './jobsPage/BannerArea';

export const query = graphql`
  query TeamWebsite_JobsPage($departmentId: String!, $locale: String!, $navigationId: String!) {
    ...TeamWebsite_DefaultLayout_query
    prismicTeamContents(lang: {eq: $locale}) {
      data {
        jobs_page_meta_title
        jobs_page_meta_description
        jobs_page_meta_image {
          localFile {
            childImageSharp {
              fixed(width: 1200, height: 630, toFormat: PNG, quality: 90) {
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
    currentJobDepartment: jobDepartment(id: {eq: $departmentId}) {
      name
    }
    allDepartmentFilteredJobPost: allJobPost(
      filter: {departments: {elemMatch: {id: {glob: $departmentId}}}}
      sort: {title: ASC}
    ) {
      nodes {
        ...TeamWebsite_JobPostList_jobPosts
        absoluteUrl
      }
    }
    allJobDepartment(filter: {jobPosts: {elemMatch: {id: {glob: "*"}}}}) {
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
    allJobPost {
      totalCount
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
  gridTemplateAreas: ['"department"', '"corporate"', '"search"'].join('\n'),
  gap: rem(16),

  '@md': {
    gridTemplateAreas: ['"department corporate etype"', '"search search search"'].join('\n'),
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
});

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
    display: 'grid',
  },
  '@lg': {
    display: 'grid',
  },
});

const ExpandIcon = styled(SeedIcon, {
  position: 'absolute',
  width: '0.8em',
  right: rem(20),
  top: rem(20),
  color: vars.$scale.color.gray700,
});

const JobPostList = styled(_JobPostList, {
  minHeight: '80vh',
});

type JobsPageProps = PageProps<GatsbyTypes.TeamWebsite_JobsPageQuery>;
const JobsPage: React.FC<JobsPageProps> = ({ data, pageContext, location }) => {
  required(data.prismicTeamContents?.data);

  const messages = useTranslation();

  const searchParams = new URLSearchParams(location.search);
  const employmentType = searchParams.get('etype') || '';
  const corporate = searchParams.get('corp') || '';

  const allCorporates = data.allJobPost.nodes.reduce((acc, jobPost) => {
    const corporateType = jobPost.corporate;
    for (const corporate of acc) {
      if (corporate === corporateType) {
        return acc;
      }
    }
    acc.push(jobPost.corporate);

    return acc;
  }, []);

  const allSelectedJobPosts = data.allDepartmentFilteredJobPost.nodes.filter((node) => {
    if (!corporate) return true;

    return node.corporate === corporate;
  });

  const [searchQuery, setSearchQuery] = React.useState('');
  const deferredSearchQuery = React.useDeferredValue(searchQuery);

  const handleSearchQueryChange = React.useCallback((query: string) => {
    setSearchQuery(query);
  }, []);

  const searchResults = useFlexSearch(deferredSearchQuery);

  const filterAnchorId = '_filter';
  const onDepartmentFilterChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    const selectedDepartment = data.allJobDepartment.nodes.find(
      (department) => department.id === e.target.value,
    );

    if (selectedDepartment) {
      const { slug } = selectedDepartment;
      if (slug) {
        navigate(`/jobs/${slug}/${window.location.search}#${filterAnchorId}`);
      }
    } else {
      navigate(`/jobs/${window.location.search}#${filterAnchorId}`);
    }
  };

  const onFilterChange = (e: React.ChangeEvent<HTMLSelectElement>, query: string) => {
    const value = e.target.value;
    if (value) {
      searchParams.set(query, value);
    } else {
      searchParams.delete(query);
    }
    navigate(`?${searchParams.toString()}#${filterAnchorId}`);
  };

  return (
    <>
      {/* 임시 배너 영역 */}
      <BannerArea />

      <Container>
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
            <SelectWrapper css={{ gridArea: 'department' }}>
              <Select defaultValue={pageContext.departmentId} onChange={onDepartmentFilterChange}>
                <option key="*" value="*">
                  {$(messages.jobs_page__chapter_all, {
                    n: () => <>{data.allJobPost.totalCount}</>,
                  })}
                </option>
                {data.allJobDepartment.nodes.map((department) => (
                  <option key={department.id} value={department.id}>
                    {`${department.name} (${department.jobPosts.length})`}
                  </option>
                ))}
              </Select>
              <ExpandIcon name="icon_expand_more_regular" />
            </SelectWrapper>
            <SelectWrapper css={{ gridArea: 'corporate' }}>
              <Select defaultValue={corporate} onChange={(e) => onFilterChange(e, 'corp')}>
                <option key="*" value="">
                  {$(messages.jobs_page__corporate_all, {
                    n: () => <>{allCorporates.length}</>,
                  })}
                </option>
                {allCorporates.map((corp) => {
                  return (
                    <option key={corp} value={corp}>
                      {messages[`jobs_page__${corp}`]}
                    </option>
                  );
                })}
              </Select>
              <ExpandIcon name="icon_expand_more_regular" />
            </SelectWrapper>
            <EtypeSelectWrapper css={{ gridArea: 'etype' }}>
              <Select value={employmentType} onChange={(e) => onFilterChange(e, 'etype')}>
                <option value="">{messages.jobs_page__employment_type_all}</option>
                <option value="FULL_TIME">{messages.jobs_page__employment_type_fulltime}</option>
                <option value="CONTRACTOR">{messages.jobs_page__employment_type_contractor}</option>
                <option value="INTERN">{messages.jobs_page__employment_type_intern}</option>
                <option value="ASSISTANT">{messages.jobs_page__employment_type_assistant}</option>
              </Select>
              <ExpandIcon name="icon_expand_more_regular" />
            </EtypeSelectWrapper>
            <SearchInput
              query={searchQuery}
              onChangeQuery={handleSearchQueryChange}
              placeholder={messages.jobs_page__search}
            />
          </Filters>
          <JobPostList
            jobPosts={allSelectedJobPosts}
            filterEmploymentType={employmentType}
            searchResults={searchResults}
          />
        </Content>
      </Container>
    </>
  );
};

export default JobsPage;

type JobsPageHeadProps = HeadProps<GatsbyTypes.TeamWebsite_JobsPageQuery>;
export const Head: React.FC<JobsPageHeadProps> = ({ data, location }) => {
  required(data.prismicTeamContents?.data);

  const messages = useTranslation();

  const metaTitleBase =
    data.prismicTeamContents.data.jobs_page_meta_title || messages.jobs_page__default_meta_title;
  const metaTitle = data.currentJobDepartment
    ? `${data.currentJobDepartment.name} | ${metaTitleBase}`
    : metaTitleBase;

  const metaDescription = data.prismicTeamContents.data.jobs_page_meta_description;
  const metaImage =
    data.prismicTeamContents.data.jobs_page_meta_image?.localFile?.childImageSharp?.fixed;

  return (
    <HeadSeo location={location} title={metaTitle} description={metaDescription}>
      {(props) => (
        <DefaultLayoutHead
          {...props}
          location={location}
          data={data}
          image={
            metaImage && {
              url: new URL(
                metaImage.src,
                metaImage.src.startsWith('http') ? metaImage.src : props.url,
              ),
              width: metaImage.width,
              height: metaImage.height,
            }
          }
        />
      )}
    </HeadSeo>
  );
};
