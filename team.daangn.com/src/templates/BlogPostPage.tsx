import * as React from 'react';
import { graphql, type PageProps } from 'gatsby';
import { rem } from 'polished';
import { required } from '@cometjs/core';
import { SliceZone } from '@prismicio/react';
import { styled, keyframes } from 'gatsby-theme-stitches/src/config';
import { vars } from '@seed-design/design-token';

import PostBodyRichText from '../components/blogPostPage/PostBodyRichText';
import ShareButtons from '../components/blogPostPage/ShareButtons';
import Author from '../components/blogPostPage/Author';
import TagList from '../components/blogPostPage/TagList';
import PostHeader from '../components/blogPostPage/PostHeader';
import PostFooter from '../components/blogPostPage/PostFooter';
import RelatedPost from '../components/blogPostPage/\bRelatedPost';

export const query = graphql`
  query BlogPostPage($id: String!, $locale: String!, $navigationId: String!) {
    ...TeamWebsite_DefaultLayout_query
    blogPost(id: { eq: $id }) {
      slug
      ...PostHeader_data
      thumbnailImage {
        publicURL
      }
      ...Tags_blogPost
      ...Author_blogPost
      ...RelatedPost_blogPost
      body {
        ... on BlogPostRichTextSection {
          id
          slice_type: sliceType
          primary
          items
        }
      }
    }
  }
`;

type BlogPostPageProps = PageProps<GatsbyTypes.BlogPostPageQuery>;

const BlogPostPage: React.FC<BlogPostPageProps> = ({ data }) => {
  const [modalOpen, setModalOpen] = React.useState(false);

  return (
    data.blogPost && (
      <>
        <Container>
          <PostHeader postHeader={data.blogPost} />
          {data.blogPost.thumbnailImage.publicURL && (
            <ThumbnailImage src={data.blogPost.thumbnailImage.publicURL} />
          )}
          <PostBody>
            <ContentContainer>
              <SliceZone
                // rome-ignore lint/suspicious/noExplicitAny: intentional
                slices={data.blogPost.body as any[]}
                components={{
                  rich_text_section: PostBodyRichText,
                }}
              />
            </ContentContainer>
            <ShareButtons onClickLinkShare={setModalOpen} />
            <Author data={data.blogPost.author} />
            <TagList data={data.blogPost.tags} />
          </PostBody>
          <PostFooter />
          {modalOpen && <Modal>링크가 복사되었어요</Modal>}
        </Container>
        <RelatedPost data={data.blogPost} />
      </>
    )
  );
};

const Container = styled('div', {
  contentArea: true,
  textAlign: 'center',
  color: vars.$scale.color.gray900,

  '@md': {
    blogContentArea: true,
  },
});

const ThumbnailImage = styled('img', {
  maxWidth: 1024,
  maxHeight: 600,
  width: '100%',
  borderRadius: rem(8),
  marginBottom: rem(44),
});

const PostBody = styled('section', {
  position: 'relative',
  boxSizing: 'border-box',
  maxWidth: rem(1024),
  paddingX: rem(8),
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
  height: 'auto',
  overflow: 'auto',
});

export default BlogPostPage;
