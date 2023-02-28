import * as React from 'react';
import { rem } from 'polished';
import { matchSorter } from 'match-sorter';
import { graphql, navigate, Link, type PageProps, type HeadProps } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/config';
import { HeadSeo } from 'gatsby-plugin-head-seo/src';
import { FAQPageJsonLd } from 'gatsby-plugin-head-seo/src/jsonld';
import { required } from '@cometjs/core';
import { vars } from '@seed-design/design-token';
import { useTranslation } from '@karrotmarket/gatsby-theme-website-team/src/translation';

import { DefaultLayoutHead } from '../layouts/DefaultLayout';
import _PageTitle from '../components/PageTitle';
import FaqAccordion from '../components/FaqAccordion';
import _SearchInput from '../components/SearchInput';
import _FaqList from '../components/FaqList';
import { useURLSearchParams } from '../utils/useURLSearchParams';

export const query = graphql`
  query TeamWebsite_FaqPage(
    $id: String!
    $locale: String!
    $navigationId: String!
  ) {
    ...TeamWebsite_DefaultLayout_query

    prismicTeamContents(
      lang: { eq: $locale }
    ) {
      data {
        twitter_site_handle

        faq_page_meta_title
        faq_page_meta_description
        faq_page_title {
          text
        }

        faq_page_entries {
          faq_category_title
          faq_page {
            id
            uid
            document {
              ... on PrismicFaq {
                data {
                  display_name
                }
              }
            }
          }
        }
      }
    }

    prismicFaq(
      id: { eq: $id }
    ) {
      uid
      data {
        ...TeamWebsite_FaqAccordion_faqData
        entries {
          keywords
        }
      }
    }
  }
`;

const Container = styled('main', {
  contentArea: true,
  maxWidth: rem(1200),
});

const PageTitle = styled(_PageTitle, {
  marginBottom: rem(56),

  '@sm': {
    marginBottom: rem(80),
  },
});

const Filters = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: rem(52),
  flexDirection: 'column',

  '@lg': {
    flexDirection: 'row',
  },
});

const FaqGroupList = styled('ul', {
  listStyle: 'none',
  padding: 0,
  display: 'flex',
  alignItems: 'center',
  overflow: 'auto',
  gap: rem(50),
  marginBottom: rem(52),

  '@lg': {
    marginBottom: '0',
  },
});

const FaqGroup = styled('li', {
  fontSize: '$subtitle3',
  fontWeight: 'bold',
  float: 'left',
  whiteSpace: 'nowrap',
});

const FaqGroupLink = styled(Link, {
  color: vars.$scale.color.gray900,
  textDecoration: 'none',
  variants: {
    selected: {
      true: {
        color: vars.$scale.color.carrot500,
      },
      false: {
        '&:hover': {
          color: vars.$scale.color.gray600,
        },
      },
    },
  },
});

const FaqList = styled(_FaqList, {
  minHeight: '80vh',
});

const SearchInput = styled(_SearchInput, {
  '@lg': {
    minWidth: rem(300),
  },
});

type FaqPageProps = PageProps<GatsbyTypes.TeamWebsite_FaqPageQuery>;
const FaqPage: React.FC<FaqPageProps> = ({ data }) => {
  required(data.prismicTeamContents?.data);

  const messages = useTranslation();

  const searchParams = useURLSearchParams();
  const searchQuery = searchParams.get('q') || '';
  const [query, setQuery] = React.useState(searchQuery || '');

  const handleSearchInputChange = (value: string) => {
    setQuery(value);
    searchParams.set('q', value);
    navigate(`?${searchParams.toString()}`);
  };

  React.useEffect(() => {
    if (query !== searchQuery) {
      navigate(`?q=${query}`, { replace: true });
    }
  }, [query, searchQuery]);

  const searchResults = {
    entries: [
      ...matchSorter(data.prismicFaq.data.entries, searchQuery, { keys: ['question', 'keywords'] }),
    ],
  };

  return (
    <Container>
      <PageTitle>{data.prismicTeamContents.data.faq_page_title.text}</PageTitle>
      <Filters>
        <FaqGroupList>
          {data.prismicTeamContents.data.faq_page_entries.map((faq) => (
            <FaqGroup key={faq.faq_page.id}>
              <FaqGroupLink
                to={`/faq/${faq.faq_page.uid}/?${searchParams.toString()}`}
                selected={faq.faq_page.uid === data.prismicFaq.uid}
              >
                {faq.faq_category_title}
              </FaqGroupLink>
            </FaqGroup>
          ))}
        </FaqGroupList>
        <SearchInput
          query={query}
          onChangeQuery={handleSearchInputChange}
          placeholder={messages.faq_page__search}
        />
      </Filters>
      {searchQuery ? (
        <FaqList faqLists={searchResults} emptyPlaceHolderLink={`/faq/${data.prismicFaq.uid}/`} />
      ) : (
        <FaqAccordion data={data.prismicFaq.data} />
      )}
    </Container>
  );
};

export default FaqPage;

type FaqPageHeadProps = HeadProps<GatsbyTypes.TeamWebsite_FaqPageQuery>;
export const Head: React.FC<FaqPageHeadProps> = ({ data, location }) => {
  required(data.prismicTeamContents?.data);

  const metaTitle = data.prismicTeamContents.data.faq_page_meta_title;
  const metaDescription = data.prismicTeamContents.data.faq_page_meta_description;

  return (
    <HeadSeo location={location} title={metaTitle} description={metaDescription}>
      {(props) => [
        <DefaultLayoutHead {...props} location={location} data={data} />,
        <FAQPageJsonLd
          faq={{
            '@type': 'FAQPage',
            mainEntity: data.prismicFaq.data.entries!.map((faq) => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer.text,
              },
            })),
          }}
        />,
      ]}
    </HeadSeo>
  );
};
