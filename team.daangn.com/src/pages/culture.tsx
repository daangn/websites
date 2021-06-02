import * as React from 'react';
import type { PageProps } from 'gatsby';
import { graphql } from 'gatsby';
import { required } from '@cometjs/core';

import PageTitle from '~/components/PageTitle';

type CulturePageProps = PageProps<GatsbyTypes.CulturePageQuery, GatsbyTypes.SitePageContext>;

export const query = graphql`
  query CulturePage {
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

const CulturePage: React.FC<CulturePageProps> = ({
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

export default CulturePage;
