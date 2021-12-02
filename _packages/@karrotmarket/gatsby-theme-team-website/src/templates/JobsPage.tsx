import * as React from 'react';
import type { PageProps } from 'gatsby';
import { graphql, navigate} from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/config';
import { useSiteOrigin } from '@karrotmarket/gatsby-theme-website/src/siteMetadata';
import { GatsbySeo } from 'gatsby-plugin-next-seo';
import { rem } from 'polished';
import { required } from '@cometjs/core';
import { ReactComponent as SearchdSvg } from '../assets/searchOutlineM.svg';

import PageTitle from '../components/PageTitle';
import _JobPostList from '../components/JobPostList';
import expandMoreOutlineUrl from '!!file-loader!../assets/expand_more_outline_m.svg';
import { useFlexSearch } from '../utils/useFlexSearch';

import messages from './jobsPage/messages';

type JobsPageTemplateProps = PageProps<GatsbyTypes.TeamWebsite_JobsPageTemplateQuery, GatsbyTypes.SitePageContext>;

export const query = graphql`
  query TeamWebsite_JobsPageTemplate(
    $pattern: String
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

    prismicTeamBanner(
      lang: { eq: $locale }
    ) {
      data {
        left {
          url
        }
        right {
          url
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
      ...TeamWebsite_JobPostList_jobs

      # Command E 인덱싱용 ㅎㅎ..
      nodes {
        absoluteUrl
      }
    }

    allJobPost(
      sort: {
        fields: title
        order: ASC
      }
    ) {
      totalCount

      allChapter: group(
        field: chapter
        limit: 1
      ) {
        fieldValue
        totalCount
        nodes {
          chapter
          slug
        }
      }

      allEmploymentType: group(
        field: employmentType
      ) {
        fieldValue
      }
    }
  }
`;

const Container = styled('section', {
  contentArea: true,
});

const BannerArea = styled('div', {
  display: 'flex',
  alignItems: 'flex-start',
  width: '100%',
  marginBottom: '3rem',
  flexDirection: 'column',

  '@sm': {
    flexDirection: 'row',
    marginTop: '-5rem',
  },
})

const Banner = styled('div', {
  flex: 1,
})

const BannerImg = styled('img', {
  width: '100%',
})

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
  alignItems: 'center',
  
  '@sm': {
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
  const [filterEmploymentType, setFilterEmploymentType] = React.useState('');
  const [searchQuery, setSearchQuery] = React.useState('');
  const [_isSearchPending, startSearchTransition] = React.useTransition();

  const handleSearchInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    startSearchTransition(() => {
      setSearchQuery(e.target.value);
    });
  }

  const searchResults = useFlexSearch(searchQuery)

  required(data.prismicTeamContents?.data);

  const metaTitleBase = data.prismicTeamContents.data.jobs_page_meta_title || messages.meta_title_default;
  const metaTitle = pageContext.chapter
    ? `${pageContext.chapter} | ${metaTitleBase}`
    : metaTitleBase;

  const metaDescription = data.prismicTeamContents.data.jobs_page_meta_description;
  const metaImage = data.prismicTeamContents.data.jobs_page_meta_image?.localFile?.childImageSharp?.fixed;

  const onFilterChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    const selectedChapterGroup = data.allJobPost.allChapter
      .find(chapterGroup => chapterGroup.nodes[0]?.chapter === e.target.value);

      if (selectedChapterGroup) {
        const { slug } = selectedChapterGroup.nodes[0] ?? {};
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
      {!data.prismicTeamBanner?.data?.left?.url && (
        <PageTitle
          css={{
            marginBottom: rem(56),
          }}
        >
          {data.prismicTeamContents.data?.jobs_page_title?.text}
        </PageTitle>
      )}
      {data.prismicTeamBanner?.data?.left?.url && data.prismicTeamBanner.data?.right?.url && (
        <BannerArea>
          <Banner>
            <BannerImg src={data.prismicTeamBanner.data.left.url} />
          </Banner>
          <Banner>
            <BannerImg src={data.prismicTeamBanner.data.right.url} />
          </Banner>
        </BannerArea>
      )}
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
              {`${messages.chapter_all} (${data.allJobPost.totalCount})`}
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
            <option value="">{messages.employment_type_all}</option>
            <option value="FULL_TIME">{messages.employment_type_fulltime}</option>
            <option value="CONTRACTOR">{messages.employment_type_contractor}</option>
            <option value="INTERN">{messages.employment_type_intern}</option>
            <option value="ASSISTANT">{messages.employment_type_assistant}</option>
          </Select>
          <Search >
            <input
              placeholder={messages.search_placeholder}
              onChange={handleSearchInputChange}
            />
            <SearchdSvg />
          </Search>
        </Filters>
        <JobPostList
          jobs={data.currentJobPosts}
          filterEmploymentType={filterEmploymentType}
          searchResults={searchResults}
        />
      </Content>
    </Container>
  );
};

export default JobsPageTemplate;
