import { SliceZone } from '@prismicio/react';
import { vars } from '@seed-design/design-token';
import { type HeadProps, type PageProps, graphql } from 'gatsby';
import { keyframes, styled } from 'gatsby-theme-stitches/src/config';
import { HeadSeo, OpenGraph, TwitterCard } from 'gatsby-plugin-head-seo/src';
import { GatsbyImage } from 'gatsby-plugin-image';
import { rem } from 'polished';
import * as React from 'react';

import Author from '../components/blogPostPage/Author';
import PostBodyCtaButton from '../components/blogPostPage/PostBodyCtaButton';
import PostBodyGroupImage from '../components/blogPostPage/PostBodyGroupImage';
import PostBodyQuote from '../components/blogPostPage/PostBodyQuote';
import PostBodyRichText from '../components/blogPostPage/PostBodyRichText';
import PostBodyDivider from '../components/blogPostPage/PostBodyDivider';
import PostBodyVerticalQuote from '../components/blogPostPage/PostBodyVerticalQuote';
import PostFooter from '../components/blogPostPage/PostFooter';
import PostHeader from '../components/blogPostPage/PostHeader';
import PostBodySingleImage from '../components/blogPostPage/PostBodySingleImage';
import ShareButtons from '../components/blogPostPage/ShareButtons';
import TagList from '../components/blogPostPage/TagList';
// import RelatedPost from '../components/blogPostPage/RelatedPost';

export const query = graphql`
  query BlogPostPage($id: String!, $locale: String!, $navigationId: String!) {
    ...TeamWebsite_DefaultLayout_query
    post(id: { eq: $id }) {
      ...PostHeader_data
      thumbnailImage {
        childImageSharp {
          gatsbyImageData
        }
      }
      ...Tags_post
      ...Author_post
      ...RelatedPost_post
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
        ... on PostGroupImageSection {
          id
          slice_type: sliceType
          primary
          groupImageCaption
          groupImage1 {
            childImageSharp {
              gatsbyImageData
            }
          }
          groupImage2 {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        ... on PostQuoteSection {
          id
          primary
          slice_type: sliceType
        }
        ... on PostVerticalQuoteSection {
          id
          primary
          slice_type: sliceType
        }
        ... on PostCtaButtonSection {
          id
          primary
          slice_type: sliceType
        }
        ... on PostSingleImageSection {
          id
          imageCaption
          slice_type: sliceType
          image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        ... on PostDivider {
          id
          slice_type: sliceType
          fullWidthLineDivider
          dotDivider
          lineDivider
        }
      }
    }
    prismicBlogContent {
      data {
        blog_page_meta_description
      }
    }
  }
`;

type BlogPostPageProps = PageProps<GatsbyTypes.BlogPostPageQuery>;

const BlogPostPage: React.FC<BlogPostPageProps> = ({ data }) => {
  const [modalOpen, setModalOpen] = React.useState(false);

  return (
    data.post && (
      <>
        <Container>
          <PostHeader postHeader={data.post} />
          {data.post.thumbnailImage.childImageSharp?.gatsbyImageData && (
            <ThumbnailImage
              image={data.post.thumbnailImage.childImageSharp?.gatsbyImageData}
              alt={`${data.post.title}_포스트썸네일`}
            />
          )}
          <PostBody>
            <ContentContainer>
              <SliceZone
                // rome-ignore lint/suspicious/noExplicitAny: intentional
                slices={data.post.body as any[]}
                components={{
                  rich_text_section: PostBodyRichText,
                  group_image_section: PostBodyGroupImage,
                  quote_section: PostBodyQuote,
                  vertical_quote_section: PostBodyVerticalQuote,
                  cta_button: PostBodyCtaButton,
                  single_image_section: PostBodySingleImage,
                  divider: PostBodyDivider,
                }}
              />
            </ContentContainer>
            <ShareButtons onClickLinkShare={setModalOpen} />
            <Author data={data.post.author} />
            <TagList data={data.post.tags} />
          </PostBody>
          <PostFooter />
          {modalOpen && <Modal>링크가 복사되었어요</Modal>}
        </Container>
        {/* <RelatedPost data={data.post} /> */}
      </>
    )
  );
};

type BlogPostPageHeadProps = HeadProps<GatsbyTypes.BlogPostPageQuery>;

export const Head: React.FC<BlogPostPageHeadProps> = ({ data, location }) => {
  const title = data.post?.title ? `${data.post.title} | 당근마켓 블로그` : '당근마켓 블로그';
  const description = data.prismicBlogContent?.data?.blog_page_meta_description || '';
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
  marginTop: rem(36),
  textAlign: 'center',
  color: vars.$scale.color.gray900,

  '@sm': {
    marginTop: rem(40),
  },

  '@md': {
    blogContentArea: true,
  },
});

const ThumbnailImage = styled(GatsbyImage, {
  maxWidth: 1024,
  maxHeight: 600,
  width: '100%',
  borderRadius: rem(15),
  marginBottom: rem(24),
  opacity: 0.99,

  '@sm': {
    borderRadius: rem(30),
    marginBottom: rem(88),
  },
});

const PostBody = styled('section', {
  position: 'relative',
  boxSizing: 'border-box',
  maxWidth: rem(1024),
  margin: '0 auto',
  textAlign: 'left',

  '@md': {
    paddingX: rem(84),
  },
});

const smoothAppear = keyframes({
  '0%': {
    opacity: 0,
    transform: 'translateY(-5%)',
  },
  '100%': {
    opacity: 1,
    transform: 'translateY(0)',
  },
});

const Modal = styled('div', {
  position: 'fixed',
  top: '10%',
  left: 0,
  right: 0,
  margin: '0 auto',
  width: rem(200),
  height: rem(50),
  lineHeight: rem(50),
  borderRadius: rem(8),
  backgroundColor: vars.$scale.color.gray50,
  boxShadow: '0 0 8px 0 rgba(0, 0, 0, 0.1)',
  color: vars.$scale.color.gray900,
  animation: `${smoothAppear} 0.3s ease-in-out`,
});

const ContentContainer = styled('div', {
  display: 'flex',
  flexFlow: 'row nowrap',
  flexDirection: 'column',
  alignItems: 'center',
  height: 'auto',
  overflow: 'auto',
});

export default BlogPostPage;
