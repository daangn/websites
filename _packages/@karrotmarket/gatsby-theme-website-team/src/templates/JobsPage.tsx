import { required } from '@cometjs/core';
import SeedIcon from '@karrotmarket/gatsby-theme-seed-design/src/Icon';
import { useTranslation } from '@karrotmarket/gatsby-theme-website-team/src/translation';
import { vars } from '@seed-design/design-token';
import { type HeadProps, type PageProps, graphql, navigate } from 'gatsby';
import { HeadSeo } from 'gatsby-plugin-head-seo/src';
import { styled } from 'gatsby-theme-stitches/src/config';
import { rem } from 'polished';
import * as React from 'react';
import $ from 'text2vdom';

import _JobPostList from '../components/JobPostList';
import PageTitle from '../components/PageTitle';
import SearchInput from '../components/SearchInput';
import { DefaultLayoutHead } from '../layouts/DefaultLayout';
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
      filter: {
        searchable: { eq: true }
        departments: {
          elemMatch: {
            id: { glob: $departmentId }
          }
        }
      }
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
        employmentType
      }
    }
  }
`;

const Container = styled('div', {
  contentArea: true,
  contentSpaceTop: true,
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
  width: rem(18),
  right: rem(20),
  top: '50%',
  transform: 'translateY(-50%)',
  color: vars.$scale.color.gray700,
  pointerEvents: 'none',
});

const JobPostList = styled(_JobPostList, {
  minHeight: '80vh',
});

type JobsPageProps = PageProps<GatsbyTypes.TeamWebsite_JobsPageQuery>;
const JobsPage: React.FC<JobsPageProps> = ({ data, pageContext, location }) => {
  required(data.prismicTeamContents?.data);

  const messages = useTranslation();

  const initialSearchParams = new URLSearchParams(location.search);
  const initialSearchQuery = initialSearchParams.get('q') || '';
  const employmentType = initialSearchParams.get('etype') || '';
  const corporate = initialSearchParams.get('corp') || '';

  const allCorporates = new Set<string>();
  const allEmploymentTypes = new Set<string>();
  for (const jobPost of data.allJobPost.nodes) {
    allCorporates.add(jobPost.corporate);
    allEmploymentTypes.add(jobPost.employmentType);
  }

  const allSelectedJobPosts = data.allDepartmentFilteredJobPost.nodes.filter((node) => {
    if (!corporate) return true;

    return node.corporate === corporate;
  });

  const [searchQuery, setSearchQuery] = React.useState(initialSearchQuery);
  const deferredSearchQuery = React.useDeferredValue(searchQuery);

  const searchResults = useFlexSearch(deferredSearchQuery);

  const handleSearchQueryChange = React.useCallback((query: string) => {
    setSearchQuery(query);

    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set('q', query);

    const search = searchParams.toString();
    if (search) {
      navigate(`?${search}#${filterAnchorId}`);
    } else {
      navigate(`#${filterAnchorId}`);
    }
  }, []);

  const handleResetFilter = React.useCallback(() => {
    setSearchQuery('');
  }, []);

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

    const searchParams = new URLSearchParams(window.location.search);
    if (value) {
      searchParams.set(query, value);
    } else {
      searchParams.delete(query);
    }

    const search = searchParams.toString();
    if (search) {
      navigate(`?${search}#${filterAnchorId}`);
    } else {
      navigate(`#${filterAnchorId}`);
    }
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
              <ExpandIcon name="icon_expand_more_regular" aria-hidden />
            </SelectWrapper>
            <SelectWrapper css={{ gridArea: 'corporate' }}>
              <Select defaultValue={corporate} onChange={(e) => onFilterChange(e, 'corp')}>
                <option key="*" value="">
                  {messages.jobs_page__corporate_all}
                </option>
                {allCorporates.has('KARROT_MARKET') && (
                  <option key="KARROT_MARKET" value="KARROT_MARKET">
                    {messages.jobs_page__KARROT_MARKET}
                  </option>
                )}
                {allCorporates.has('KARROT_PAY') && (
                  <option key="KARROT_PAY" value="KARROT_PAY">
                    {messages.jobs_page__KARROT_PAY}
                  </option>
                )}
                {/* Note: corporate 추가까지 고려할 수 있어야 마땅하나 국제화 처리의 미비로 표시하지 않음. */}
              </Select>
              <ExpandIcon name="icon_expand_more_regular" aria-hidden />
            </SelectWrapper>
            <EtypeSelectWrapper css={{ gridArea: 'etype' }}>
              <Select value={employmentType} onChange={(e) => onFilterChange(e, 'etype')}>
                <option value="">{messages.jobs_page__employment_type_all}</option>
                {allEmploymentTypes.has('FULL_TIME') && (
                  <option value="FULL_TIME">{messages.jobs_page__employment_type_fulltime}</option>
                )}
                {allEmploymentTypes.has('CONTRACTOR') && (
                  <option value="CONTRACTOR">
                    {messages.jobs_page__employment_type_contractor}
                  </option>
                )}
                {allEmploymentTypes.has('INTERN') && (
                  <option value="INTERN">{messages.jobs_page__employment_type_intern}</option>
                )}
                {allEmploymentTypes.has('ASSISTANT') && (
                  <option value="ASSISTANT">{messages.jobs_page__employment_type_assistant}</option>
                )}
                {allEmploymentTypes.has('PART_TIME') && (
                  <option value="PART_TIME">{messages.jobs_page__employment_type_parttime}</option>
                )}
              </Select>
              <ExpandIcon name="icon_expand_more_regular" aria-hidden />
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
            resetLink={`/jobs/#${filterAnchorId}`}
            onResetFilter={handleResetFilter}
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
