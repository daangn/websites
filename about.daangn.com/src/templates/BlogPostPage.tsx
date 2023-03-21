import { required } from '@cometjs/core';
import { SliceZone } from '@prismicio/react';
import { vars } from '@seed-design/design-token';
import { type PageProps, graphql } from 'gatsby';
import { keyframes, styled } from 'gatsby-theme-stitches/src/config';
import { rem } from 'polished';
import * as React from 'react';

import Author from '../components/blogPostPage/Author';
import PostBodyRichText from '../components/blogPostPage/PostBodyRichText';
import PostFooter from '../components/blogPostPage/PostFooter';
import PostHeader from '../components/blogPostPage/PostHeader';
import RelatedPost from '../components/blogPostPage/RelatedPost';
import ShareButtons from '../components/blogPostPage/ShareButtons';
import TagList from '../components/blogPostPage/TagList';

export const query = graphql`
  query BlogPostPage($id: String!, $locale: String!, $navigationId: String!) {
    ...TeamWebsite_DefaultLayout_query
    post(id: { eq: $id }) {
      slug
      ...PostHeader_data
      thumbnailImage {
        publicURL
      }
      ...Tags_post
      ...Author_post
      ...RelatedPost_post
      body {
        primary
        content
        id
        items
        slice_type: sliceType
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
          {data.post.thumbnailImage.publicURL && (
            <ThumbnailImage src={data.post.thumbnailImage.publicURL} />
          )}
          <PostBody>
            <ContentContainer>
              <SliceZone
                // rome-ignore lint/suspicious/noExplicitAny: intentional
                slices={data.post.body as any[]}
                components={{
                  rich_text_section: PostBodyRichText,
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
        <RelatedPost data={data.post} />
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
  borderRadius: rem(40),
  marginBottom: rem(88),
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
