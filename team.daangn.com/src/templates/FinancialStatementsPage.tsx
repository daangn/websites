import * as React from 'react';
import { rem } from 'polished';
import type { PageProps } from 'gatsby';
import { graphql, Link } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/config';
import { required } from '@cometjs/core';
import { vars } from '@seed-design/design-token';
import { GatsbySeo } from 'gatsby-plugin-next-seo';
import _PageTitle from '@karrotmarket/gatsby-theme-team-website/src/components/PageTitle';

type FinancialStatementsPageProps = PageProps<GatsbyTypes.FinancialStatementsPageQuery>;

export const query = graphql`
  query FinancialStatementsPage(
    $uid: String!
    $locale: String!
    $navigationId: String!
  ) {
    ...TeamWebsite_DefaultLayout_query

    allPrismicFinancialStatements(
      filter: {
        tags: {
          in: ["team.daangn.com"]
        }
      }
      sort: {
        fields: data___year
        order: DESC
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

    prismicFinancialStatements(
      uid: { eq: $uid }
    ) {
      uid
      data {
        title {
          text
        }
        key_label
        value_label
        items {
          key
          value
          summary
        }
      }
    }
  }
`;

const Container = styled('main', {
  contentArea: true,
});

const PageTitle = styled(_PageTitle, {
  marginBottom: rem(56),

  '@sm': {
    marginBottom: rem(80),
  },
});

const SubpageNav = styled('nav', {
  marginBottom: rem(52),
});

const SubpageNavList = styled('ul', {
  listStyle: 'none',
  padding: 0,
  display: 'flex',
  alignItems: 'center',
  overflow: 'auto',
  gap: rem(50),
});

const SubpageNavListItem = styled('li', {
  fontSize: '$subtitle3',
  fontWeight: 'bold',
  whiteSpace: 'nowrap',
});

const SubpageLink = styled(Link, {
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

const ContentScrollTarget = styled('div', {
  position: 'absolute',
  bottom: '100%',
  height: rem(58),
  '@sm': {
    height: rem(68),
  },
});

const Content = styled('div', {
  position: 'relative',
  display: 'grid',
  gridTemplateColumns: 'auto',
  gap: '1rem',

  '@sm': {
    gridTemplateColumns: 'max-content auto',
    gap: '2rem',
  },
});

const SideNav = styled('nav', {
});

const SideNavList = styled('ul', {
  display: 'grid',
  gap: '0.2rem',
  listStyle: 'none',
  padding: 0,

  '@sm': {
    gap: '0.5rem',
  },
});

const SideNavItem = styled('li', {
  typography: '$body2',
});

const SideNavLink = styled(Link, {
  color: vars.$scale.color.gray600,
  textDecoration: 'none',
  fontWeight: 'bold',
  variants: {
    selected: {
      true: {
        color: vars.$semantic.color.primary,
      },
    },
  },
});

const Table = styled('table', {
  borderCollapse: 'collapse',
  borderSpacing: 0,
  'th, td': {
    typography: '$caption1',
    padding: '8px 0',
  },
});

const TableCaption = styled('caption', {
  textAlign: 'left',
  typography: '$subtitle3',
});

const TableRow = styled('tr', {
  boxSizing: 'border-box',
  borderBottom: `1px solid ${vars.$semantic.color.divider1}`,
});

const TableRowHeader = styled('th', {
  fontWeight: 'bold',
  borderBottom: `1px solid ${vars.$semantic.color.divider3}`,
  variants: {
    position: {
      start: {
        textAlign: 'left',
      },
      end: {
        textAlign: 'right',
      },
    },
  },
});

const TableColHeader = styled('th', {
  fontWeight: 'normal',
  textAlign: 'left',

  variants: {
    summary: {
      true: {
        fontWeight: 'bold',
      },
    },
  },
});

const TableColValue = styled('td', {
  fontVariantNumeric: 'tabular-nums',
  textAlign: 'right',
});

const FinancialStatementsPage: React.FC<FinancialStatementsPageProps> = ({
  data,
}) => {
  required(data.prismicFinancialStatements?.data?.items);

  const finances = data.allPrismicFinancialStatements.nodes
    .filter(node => node.data.title?.text)

  return (
    <Container>
      <GatsbySeo
        title="당근마켓 IR"
        description="당근마켓에서 제공하는 공식 투자자 정보입니다."
      />
      <PageTitle>
        Investor Relations
      </PageTitle>
      <SubpageNav>
        <SubpageNavList>
          <SubpageNavListItem>
            <SubpageLink to="/ir/" selected={false}>
              공시
            </SubpageLink>
          </SubpageNavListItem>
          <SubpageNavListItem>
            <SubpageLink to="/ir/finances/" selected>
              재무제표
            </SubpageLink>
          </SubpageNavListItem>
        </SubpageNavList>
      </SubpageNav>
      <Content>
        <ContentScrollTarget id="content" />
        <SideNav>
          <SideNavList>
            {finances.map(finance => (
              <SideNavItem key={finance.uid}>

                <SideNavLink
                  to={`/ir/finances/${finance.uid}/#content`}
                  selected={finance.uid === data.prismicFinancialStatements!.uid}
                >
                  {finance.data.title!.text!}
                </SideNavLink>
              </SideNavItem>
            ))}
          </SideNavList>
        </SideNav>
        <Table>
          <TableCaption style={{ display: 'none' }}>
            {data.prismicFinancialStatements.data?.title?.text}
          </TableCaption>
          <thead>
            <tr>
              <TableRowHeader scope="row" position="start">
                {data.prismicFinancialStatements.data.key_label || '항목'}
              </TableRowHeader>
              <TableRowHeader scope="row" position="end">
                {data.prismicFinancialStatements.data.value_label || '값'}
              </TableRowHeader>
            </tr>
          </thead>
          <tbody>
            {data.prismicFinancialStatements.data.items
              .filter(item => item!.key && item!.value)
              .map(item => (
                <TableRow key={item!.key}>
                  <TableColHeader
                    scope="col"
                    summary={item!.summary ?? false}
                  >
                    {item!.key}
                  </TableColHeader>
                  <TableColValue>
                    {item!.value}
                  </TableColValue>
                </TableRow>
              ))
            }
          </tbody>
        </Table>
      </Content>
    </Container>
  );
};

export default FinancialStatementsPage;
