import * as React from 'react';
import { rem } from 'polished';
import { navigate, PageProps } from 'gatsby';
import { graphql } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/config';
import { GatsbySeo, FAQJsonLd } from 'gatsby-plugin-next-seo';
import { required } from '@cometjs/core';

import _PageTitle from '../components/PageTitle';
import FaqAccordion from '../components/FaqAccordion';
import _Search from '../components/Search';
import { useFaqSearch } from '../utils/useFaqSearch'
import { ReactComponent as SearchdSvg } from '../assets/searchOutlineM.svg';
import _FaqList from '../components/FaqList';

type FaqPageProps = PageProps<GatsbyTypes.TeamWebsite_FaqPageQuery, GatsbyTypes.SitePageContext>;

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
          faq_page {
            id
            uid
          }
        }
      }
    }

    allPrismicFaq {
      nodes {
        id
        data {
          entries {
            question
            answer {
              html
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
  marginBottom: rem(56),
  flexDirection: 'column-reverse',

  '@lg': {
    flexDirection: 'row'
  }
});

const FaqGroupWrapper = styled('ul', {
  display: 'flex',
  alignItems: 'center',
  padding: '0',
  overflow: 'auto',
  gap: rem(50),
  marginTop: rem(56),

  '@lg': {
    marginTop: '0'
  }
});

const FaqGroup = styled('li', {
  fontSize: '$subtitle3',
  fontWeight: 'bold',
  listStyle: 'none',
  float: 'left',
  cursor: 'pointer',
  whiteSpace: 'nowrap',

  variants: {
    selected: {
      true: {
        color: '$carrot600',
      },
      false: {
        '&:hover': {
          color: '$gray600'
        },
      }
    }
  }
});

const FaqList = styled(_FaqList, {
  minHeight: '80vh',
});

const Search = styled(_Search, {
  '@lg': {
    minWidth: rem(300)
  }
});

const FaqPage: React.FC<FaqPageProps> = ({
  data,
}) => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [_isSearchPending, startSearchTransition] = React.useTransition();

  const handleSearchInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    startSearchTransition(() => {
      setSearchQuery(e.target.value);
    });
  }

  const searchResults = useFaqSearch(searchQuery);

  required(data.prismicTeamContents?.data)

  const onGroupChange = (uid: string) => {
    navigate(`/faq/${uid}/`)
  }

  return (
    <Container>
      <GatsbySeo
        title={data.prismicTeamContents.data.faq_page_meta_title}
        description={data.prismicTeamContents.data.faq_page_meta_description}
        twitter={data.prismicTeamContents.data.twitter_site_handle != null ? {
          cardType: 'summary',
          site: data.prismicTeamContents.data.twitter_site_handle,
        } : undefined}
      />
      <FAQJsonLd
        questions={data.prismicFaq.data.entries!.map(faq => ({
          question: faq!.question || '',
          answer: faq!.answer!.text || '',
        }))}
      />
      <PageTitle>
        {data.prismicTeamContents.data.faq_page_title.text}
      </PageTitle>
      <Filters>
        <FaqGroupWrapper>
          {data.prismicTeamContents?.data.faq_page_entries.map((faq) => (
            <FaqGroup 
              key={faq.faq_page.id} 
              selected={faq.faq_page.uid === data.prismicFaq.uid} 
              onClick={() => onGroupChange(faq.faq_page.uid)}
            >
              {faq.faq_page.uid.replace(/\-/, ' ')}
            </FaqGroup>
          ))}
        </FaqGroupWrapper>
        <Search>
          <input 
            placeholder='검색'
            onChange={handleSearchInputChange}
          />
          <SearchdSvg />
        </Search>
      </Filters>
      {searchQuery ? <FaqList searchResults={searchResults} data={data.allPrismicFaq} /> : <FaqAccordion data={data.prismicFaq.data} />}
    </Container>
  );
};

export default FaqPage;
