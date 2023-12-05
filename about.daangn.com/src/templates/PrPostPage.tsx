import * as React from 'react';
import { type HeadProps, type PageProps, graphql, Link } from 'gatsby';
import { rem } from 'polished';
import { GatsbyImage } from 'gatsby-plugin-image';
import { HeadSeo, OpenGraph, TwitterCard } from 'gatsby-plugin-head-seo/src';
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
      summary
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
      thumbnailImage {
        childImageSharp {
          gatsbyImageData
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
              <p key={quote.text}>"{quote.text}"</p>
            ))}
          </HeaderQuoteWrapper>
        )}
      </Header>
      <Body>
        <Divider />
        {data?.post?.thumbnailImage.childImageSharp?.gatsbyImageData && (
          <ThumbnailImage
            image={data.post.thumbnailImage.childImageSharp?.gatsbyImageData}
            alt={`${data.post.title}_PR썸네일`}
          />
        )}
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

type PrPostPageHeadProps = HeadProps<GatsbyTypes.PrPostPageQuery>;

export const Head: React.FC<PrPostPageHeadProps> = ({ data, location }) => {
  const title = data.post?.title ? `${data.post?.title} | 당근 보도자료` : '당근 보도자료';
  const description = data.post?.summary || '';
  const metaImage = data.post?.ogImage.childImageSharp?.fixed;

  return (
    <HeadSeo location={location} title={title} description={description}>
      {(props) => [
        <OpenGraph
          key="og"
          og={{
            ...props,
            type: 'website',
            ...(metaImage && {
              images: [
                {
                  url: new URL(
                    metaImage.src,
                    metaImage.src.startsWith('http') ? metaImage.src : props.url,
                  ),
                  width: metaImage.width,
                  height: metaImage.height,
                },
              ],
            }),
          }}
        />,
        <TwitterCard
          key="twitter"
          card={{
            ...props,
            type: 'summary_large_image',
          }}
        />,
      ]}
    </HeadSeo>
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
  maxWidth: rem(300),
  fontSize: vars.$scale.dimension.fontSize500,
  marginBottom: rem(20),

  '@md': {
    maxWidth: rem(700),
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
  maxWidth: rem(300),
  lineHeight: 1.5,
  fontWeight: 600,
  color: vars.$scale.color.gray700,
  fontSize: vars.$scale.dimension.fontSize150,

  '@md': {
    maxWidth: rem(700),
    fontSize: vars.$scale.dimension.fontSize200,
  },
});

const Divider = styled('hr', {
  width: '100%',
  maxWidth: rem(900),
  marginTop: rem(32),
  border: 'none',
  borderTop: `1px solid ${vars.$scale.color.gray300}`,

  '@md': {
    marginTop: rem(64),
  },
});

const ThumbnailImage = styled(GatsbyImage, {
  width: '100%',
  maxWidth: rem(900),
  marginTop: rem(20),

  '@sm': {
    marginTop: rem(60),
  },
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
  border: `1px solid ${vars.$scale.color.gray100}`,
  boxSizing: 'border-box',
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
