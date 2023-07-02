import * as React from 'react';
import { graphql, Link, type PageProps } from 'gatsby';
import { rem } from 'polished';
import { GatsbyImage } from 'gatsby-plugin-image';
import { SliceZone } from '@prismicio/react';
import { styled } from 'gatsby-theme-stitches/src/config';
import { vars } from '@seed-design/design-token';

import PrPostBodyRichText from '../components/prPostPage/PrPostBodyRichText';
import PrPostBodySummaryBulletSection from '../components/prPostPage/PrPostBodySummaryBulletSection';

export const query = graphql`
  query PrPostPage($id: String!, $locale: String!, $navigationId: String!) {
    ...TeamWebsite_DefaultLayout_query
    post(id: { eq: $id }) {
      uid
      title
      publishedAt
      tags
      author {
        nickname
        role
        image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      headerQuote
      ogImage: thumbnailImage {
        childImageSharp {
          fixed(width: 1200, height: 630, toFormat: PNG, quality: 90) {
            src
            width
            height
          }
        }
      }
      body {
        ... on PostRichTextSection {
          id
          primary
          slice_type: sliceType
        }
        ... on PostSummaryBulletSection {
          id
          primary
          slice_type: sliceType
        }
      }
    }
  }
`;

type PrPostPageProps = PageProps<GatsbyTypes.PrPostPageQuery>;

const PrPostPage: React.FC<PrPostPageProps> = ({ data }) => {
  return (
    <Container>
      <Header>
        <HeaderInformationWrapper>보도자료 | {data.post?.publishedAt}</HeaderInformationWrapper>
        <Title>{data.post?.title}</Title>
        {data.post?.headerQuote && (
          <HeaderQuoteWrapper>
            {data.post?.headerQuote.map((quote) => (
              <p>"{quote.text}"</p>
            ))}
          </HeaderQuoteWrapper>
        )}
      </Header>
      <Body>
        <Divider />
        <ContentContainer>
          <SliceZone
            // rome-ignore lint/suspicious/noExplicitAny: intentional
            slices={data.post?.body as any[]}
            components={{
              rich_text_section: PrPostBodyRichText,
              summary_bullet_section: PrPostBodySummaryBulletSection,
            }}
          />
        </ContentContainer>
        <Author>
          {data.post?.author?.image?.childImageSharp?.gatsbyImageData && (
            <AuthorImage
              image={data.post?.author?.image?.childImageSharp?.gatsbyImageData}
              alt="member-profile"
            />
          )}
          <AuthorInfo>
            <AuthorName>{data.post?.author?.nickname}</AuthorName>
            <p>{data.post?.author?.role}</p>
          </AuthorInfo>
        </Author>
        <Tags>
          {data.post?.tags?.map((tag) => (
            <Tag key={tag}>#{tag}</Tag>
          ))}
        </Tags>
      </Body>
      <Footer>
        <Home to="/company/pr/">PR 홈</Home>
      </Footer>
    </Container>
  );
};

export const Head: React.FC = () => {
  return (
    <>
      <meta name="robots" content="noindex, nofollow" />
    </>
  );
};

const Container = styled('div', {
  contentArea: true,
  contentSpaceTop: true,
  textAlign: 'center',
  color: vars.$scale.color.gray900,
});

const Header = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginBottom: rem(33),

  '@sm': {
    marginBottom: rem(50),
  },
});

const Title = styled('h1', {
  maxWidth: rem(600),
  fontSize: vars.$scale.dimension.fontSize600,
  marginBottom: rem(20),

  '@md': {
    fontWeight: 800,
    fontSize: vars.$scale.dimension.fontSize800,
  },
});

const HeaderInformationWrapper = styled('div', {
  marginBottom: rem(20),
  fontSize: vars.$scale.dimension.fontSize100,
  color: vars.$scale.color.gray600,
});

const HeaderQuoteWrapper = styled('div', {
  lineHeight: 1.5,
  fontWeight: 600,
  color: vars.$scale.color.gray700,
});

const Divider = styled('hr', {
  width: '100%',
  maxWidth: rem(900),
  margin: `${rem(64)} 0`,
  border: 'none',
  borderTop: `1px solid ${vars.$scale.color.gray300}`,
});

const Body = styled('section', {
  position: 'relative',
  boxSizing: 'border-box',
  maxWidth: rem(900),
  paddingX: rem(8),
  margin: '0 auto',
  textAlign: 'left',

  '@md': {
    paddingX: rem(84),
  },
});

const ContentContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  height: 'auto',
});

const Author = styled('div', {
  display: 'flex',
  alignItems: 'center',
  marginTop: rem(90),
  marginBottom: rem(48),
});

const AuthorImage = styled(GatsbyImage, {
  width: rem(50),
  height: rem(50),
  borderRadius: '50%',
});

const AuthorInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  marginLeft: rem(12),
  fontSize: '$body2',
});

const AuthorName = styled('span', {
  marginBottom: rem(4),
  fontSize: vars.$scale.dimension.fontSize300,
  fontWeight: 600,
});

const Tags = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  columnGap: rem(4),
  rowGap: rem(12),
  width: '100%',

  '@sm': {
    gap: rem(12),
  },
});

const Tag = styled('div', {
  width: 'fit-content',
  border: 'none',
  fontSize: vars.$scale.dimension.fontSize100,
  fontColor: vars.$scale.color.gray700,
});

const Footer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  boxSizing: 'border-box',
  width: 'max-content',
  maxWidth: rem(1200),
  margin: '0 auto',
  marginTop: rem(66),
  paddingX: rem(84),
});

const Home = styled(Link, {
  width: 'fit-content',
  padding: `${rem(16)} ${rem(20)}`,
  border: 'none',
  borderRadius: rem(40),
  backgroundColor: vars.$scale.color.gray50,
  color: vars.$scale.color.gray900,
  fontSize: '$body1',
  fontWeight: 'bold',
  textDecoration: 'none',
  pointer: 'cursor',
});

export default PrPostPage;
