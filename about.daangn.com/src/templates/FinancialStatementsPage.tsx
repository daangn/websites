import _PageTitle from '@karrotmarket/gatsby-theme-website-team/src/components/PageTitle';
import { vars } from '@seed-design/design-token';
import { type HeadProps, Link, type PageProps, graphql } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/config';
import { rem } from 'polished';
import * as React from 'react';

export const query = graphql`
  query FinancialStatementsPage($uid: String!, $locale: String!, $navigationId: String!) {
    ...TeamWebsite_DefaultLayout_query

    allPrismicFinancialStatements(
      filter: {
        tags: {
          in: ["team.daangn.com"]
        }
      }
      sort: {
        first_publication_date: DESC
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

    prismicFinancialStatements(uid: {eq: $uid}) {
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
        note {
          html
        }
      }
    }
  }
`;

const Container = styled('main', {
  contentArea: true,
  contentSpaceTop: true,
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

const SideNav = styled('nav', {});

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

const FinancialStatements = styled('div', {
  display: 'grid',
  gap: '16px',
});

const Note = styled('div', {
  typography: '$body2',
  textAlign: 'left',
  whiteSpace: 'pre-line',
  wordBreak: 'keep-all',
  '& > p': {
    marginY: rem(16),
  },
});

type FinancialStatementsPageProps = PageProps<GatsbyTypes.FinancialStatementsPageQuery>;
const FinancialStatementsPage: React.FC<FinancialStatementsPageProps> = ({ data: prismicData }) => {
  // biome-ignore lint/style/noNonNullAssertion: intentional
  const current = prismicData.prismicFinancialStatements!;
  const all = prismicData.allPrismicFinancialStatements.nodes.filter(
    (node) => node.data.title?.text,
  );

  return (
    <Container>
      <PageTitle>Investor Relations</PageTitle>
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
            {all.map((finance) => (
              <SideNavItem key={finance.uid}>
                <SideNavLink
                  to={`/ir/finances/${finance.uid}/#content`}
                  selected={finance.uid === current.uid}
                >
                  {/* biome-ignore lint/style/noNonNullAssertion: intentional */}
                  {finance.data.title!.text!}
                </SideNavLink>
              </SideNavItem>
            ))}
          </SideNavList>
        </SideNav>
        <FinancialStatements>
          <Table>
            <TableCaption style={{ display: 'none' }}>{current.data?.title?.text}</TableCaption>
            <thead>
              <tr>
                <TableRowHeader scope="row" position="start">
                  {current.data.key_label || '항목'}
                </TableRowHeader>
                <TableRowHeader scope="row" position="end">
                  {current.data.value_label || '값'}
                </TableRowHeader>
              </tr>
            </thead>
            <tbody>
              {current.data.items
                .filter((item) => item.key && item.value)
                .map((item) => (
                  <TableRow key={item.key}>
                    <TableColHeader scope="col" summary={item.summary ?? false}>
                      {item.key}
                    </TableColHeader>
                    <TableColValue>{item.value}</TableColValue>
                  </TableRow>
                ))}
            </tbody>
          </Table>
          {current.data.note.html && (
            <Note dangerouslySetInnerHTML={{ __html: current.data.note.html }} />
          )}
        </FinancialStatements>
      </Content>
    </Container>
  );
};
export default FinancialStatementsPage;

type FinancialStatementsPageHeadProps = HeadProps<GatsbyTypes.FinancialStatementsPageQuery>;
export const Head: React.FC<FinancialStatementsPageHeadProps> = () => {
  return (
    <>
      <title>당근마켓 IR</title>
      <meta name="description" content="당근마켓에서 제공하는 공식 투자자 정보입니다." />
    </>
  );
};
