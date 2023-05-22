import * as React from 'react';
import { rem } from 'polished';
import { graphql, Link, type PageProps, type HeadProps } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/config';
import { vars } from '@seed-design/design-token';
import _PageTitle from '@karrotmarket/gatsby-theme-website-team/src/components/PageTitle';
import FadeInWhenVisible from '@karrotmarket/gatsby-theme-website-team/src/components/FadeInWhenVisible';

export const query = graphql`
  query IrListPage($locale: String!, $navigationId: String!) {
    ...TeamWebsite_DefaultLayout_query

    allPrismicIr(
      filter: {uid: {ne: null}, tags: {in: ["team.daangn.com"]}}
      sort: {first_publication_date: DESC}
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
  contentSpaceTop: true,
});

const Content = styled('div', {
  display: 'grid',
  position: 'relative',
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
  float: 'left',
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

const IrList = styled('ul', {
  listStyle: 'none',
  padding: 0,
});

const IrListItem = styled('li', {
  display: 'grid',
  borderBottom: `1px solid ${vars.$scale.color.gray200}`,
});

const IrLink = styled(Link, {
  display: 'grid',
  gap: '0.5rem',
  paddingY: '1.5rem',
  alignItems: 'center',
  textDecoration: 'none',
  color: 'inherit',
  '@sm': {
    gridTemplateColumns: 'auto max-content',
  },
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

type IrListPageProps = PageProps<GatsbyTypes.IrListPageQuery>;
const IrListPage: React.FC<IrListPageProps> = ({ data }) => {
  return (
    <Container>
      <PageTitle>Investor Relations</PageTitle>
      <SubpageNav>
        <SubpageNavList>
          <SubpageNavListItem>
            <SubpageLink to="/ir/" selected>
              공시
            </SubpageLink>
          </SubpageNavListItem>
          <SubpageNavListItem>
            <SubpageLink to="/ir/finances/" selected={false}>
              재무제표
            </SubpageLink>
          </SubpageNavListItem>
        </SubpageNavList>
      </SubpageNav>
      <Content>
        <IrList>
          {data.allPrismicIr.nodes.map((ir) => (
            <FadeInWhenVisible key={ir.uid}>
              <IrListItem>
                <IrLink to={`/ir/${ir.uid}/`}>
                  <IrTitle>{ir.data.title?.text}</IrTitle>
                  <IrPublicationDate>{ir.first_publication_date}</IrPublicationDate>
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

type IrListPageHeadProps = HeadProps<GatsbyTypes.IrListPageQuery>;
export const Head: React.FC<IrListPageHeadProps> = () => {
  return (
    <>
      <title>당근마켓 IR</title>
      <meta name="description" content="당근마켓에서 제공하는 공식 투자자 정보입니다." />
    </>
  );
};
