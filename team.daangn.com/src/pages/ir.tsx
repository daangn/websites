import * as React from 'react';
import { rem } from 'polished';
import type { PageProps } from 'gatsby';
import { graphql, Link } from 'gatsby';
import { GatsbySeo } from 'gatsby-plugin-next-seo';
import { styled } from 'gatsby-theme-stitches/src/config';
import { vars } from '@seed-design/design-token';
import PageTitle from '@karrotmarket/gatsby-theme-team-website/src/components/PageTitle';
import FadeInWhenVisible from '@karrotmarket/gatsby-theme-team-website/src/components/FadeInWhenVisible';

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
      sort: {
        fields: first_publication_date
        order: DESC
      }
    ) {
      nodes {
        uid
        first_publication_date(locale: "ko", formatString: "YYYY-MM-DD")
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
  display: 'grid',
  borderBottom: `1px solid ${vars.$scale.color.gray200}`,
});

const IrLink = styled(Link, {
  display: 'flex',
  paddingY: '1.5rem',
  alignItems: 'center',
  justifyContent: 'space-between',
  textDecoration: 'none',
  color: 'inherit',
});

const IrTitle = styled('span', {
  typography: '$subtitle2',
  fontWeight: 'bold',
  '&:hover': {
    color: vars.$scale.color.gray600,
  },
  '@media not (prefers-reduced-motion: reduce)': {
    transition: 'color .3s',
  },
});

const IrPublicationDate = styled('time', {
  color: vars.$scale.color.gray600,
});

const IrListPage: React.FC<IrListPageProps> = ({
  data,
}) => {
  return (
    <Container>
      <GatsbySeo
        title="당근마켓 IR"
        description="당근마켓에서 제공하는 다양한 투자자 정보입니다."
      />
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
            <FadeInWhenVisible key={ir.uid}>
              <IrListItem>
                <IrLink to={`/ir/${ir.uid}/`}>
                  <IrTitle>
                    {ir.data.title?.text}
                  </IrTitle>
                  <IrPublicationDate>
                    {ir.first_publication_date}
                  </IrPublicationDate>
                </IrLink>
              </IrListItem>
            </FadeInWhenVisible>
          ))}
        </IrList>
      </Content>
    </Container>
  );
};

export default IrListPage;
