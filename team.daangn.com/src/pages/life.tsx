import * as React from 'react';
import type { PageProps } from 'gatsby';
import { graphql } from 'gatsby';
import { required } from '@cometjs/core';

import PageTitle from '~/components/PageTitle';

type LifePageProps = PageProps<GatsbyTypes.LifePageQuery, GatsbyTypes.SitePageContext>;

export const query = graphql`
  query LifePage {
    ...DefaultLayout_query
    prismicTeamContents {
      _previewable
      data {
        culture_page_title {
          text
        }
      }
    }
  }
`;

const LifePage: React.FC<LifePageProps> = ({
  data,
}) => {
  required(data.prismicTeamContents);
  return (
    <>
      <PageTitle size={{ '@sm': 'sm' }}>
        {data.prismicTeamContents.data.culture_page_title?.text}
      </PageTitle>
    </>
  );
};

export default LifePage;
