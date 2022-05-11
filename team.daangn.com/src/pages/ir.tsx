import * as React from 'react';
import { rem } from 'polished';
import type { PageProps } from 'gatsby';
import { graphql, Link } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/config';
import PageTitle from '@karrotmarket/gatsby-theme-team-website/src/components/PageTitle';

type IrListPageProps = PageProps<GatsbyTypes.IrListPageQuery>;

export const query = graphql`
  query IrListPage(
    $locale: String!
    $navigationId: String!
  ) {
    ...TeamWebsite_DefaultLayout_query

    allPrismicIr(
      filter: {
        uid: {
          ne: null
        }
        tags: {
          in: ["team.daangn.com"]
        }
      }
    ) {
      nodes {
        uid
        data {
          title {
            text
          }
        }
      }
    }
  }
`;

const Container = styled('main', {
  contentArea: true,
});

const Content = styled('div', {
  display: 'grid',
  position: 'relative',
});

const IrList = styled('ul', {
  listStyle: 'none',
  padding: 0,
});

const IrListItem = styled('li', {
});

const IrListPage: React.FC<IrListPageProps> = ({
  data,
}) => {
  return (
    <Container>
      <PageTitle
        css={{
          marginBottom: rem(56),
        }}
      >
        Investor Relations
      </PageTitle>
      <Content>
        <IrList>
          {data.allPrismicIr.nodes.map(ir => (
            <IrListItem key={ir.uid}>
              <Link to={`/ir/${ir.uid}/`}>
                {ir.data.title?.text}
              </Link>
            </IrListItem>
          ))}
        </IrList>
      </Content>
    </Container>
  );
};

export default IrListPage;
