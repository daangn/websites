import * as React from "react";
import { graphql, type PageProps } from "gatsby";
import { rem } from "polished";
import { required } from "@cometjs/core";
import { SliceZone } from "@prismicio/react";
import { styled } from "gatsby-theme-stitches/src/config";
import { vars } from "@seed-design/design-token";
import PostBodyRichText from "../components/blogPostPage/PostBodyRichText";
import ImageSection from "../components/blogPostPage/ImageSection";
import PostList from "../components/blog/PostList";
import ShareButtons from "../components/blogPostPage/ShareButtons";
import Author from "../components/blogPostPage/Author";
import TagList from "../components/blogPostPage/TagList";
import PostHeader from "../components/blogPostPage/PostHeader";
import PostFooter from "../components/blogPostPage/PostFooter";

export const query = graphql`
  query BlogPostPage($id: String!, $locale: String!, $navigationId: String!) {
    ...TeamWebsite_DefaultLayout_query
    blogPost(id: { eq: $id }) {
      slug
      title
      thumbnailImage {
        publicURL
      }
      category {
        name
        uid
      }
      tags
      author {
        nickname
        image {
          publicURL
        }
        role
      }
      relatedPosts {
        slug
        title
        summary
        thumbnailImage {
          publicURL
        }
        category {
          name
          uid
        }
      }
      body {
        ... on BlogPostRichTextSection {
          id
          slice_type: sliceType
          primary
          items
        }
        ... on BlogPostImageSection {
          id
          slice_type: sliceType
          imagePrimary: primary
          items
        }
      }
    }
  }
`;

type BlogPostPageProps = PageProps<GatsbyTypes.BlogPostPageQuery>;

const BlogPostPage: React.FC<BlogPostPageProps> = ({ data }) => {
  const [visible, setVisible]= React.useState(false);
  const targetRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      const {intersectionRatio, isIntersecting} = entries[0]

      if (entries[0].intersectionRatio === 0) {
        setVisible(false);
      } else {
        setVisible(true);
      }
    };

    const io = new IntersectionObserver(observerCallback, {
      rootMargin: "-450px 0px -50px 0px",
      // threshold: 0.5
    });

    io.observe(targetRef.current as Element);

    return () => io.disconnect();
  }, []);

  return (
    data.blogPost && (
      <>
        <Container>
          <PostHeader
            title={data.blogPost.title}
            category={data.blogPost.category?.name}
            publishDate="2023.01.01"
          />
          {data.blogPost.thumbnailImage.publicURL && (
            <ThumbnailImage src={data.blogPost.thumbnailImage.publicURL} />
          )}
          <PostBody>
            <ContentContainer ref={targetRef}>
              <SliceZone
                slices={data.blogPost.body as any[]}
                components={{
                  rich_text_section: PostBodyRichText,
                  image_section: ImageSection,
                }}
              />
            </ContentContainer>
            <ShareButtons visible={visible} />
            <Author data={data.blogPost.author} />
            <TagList tags={data.blogPost.tags} />
          </PostBody>
          <PostFooter />
        </Container>
        <RelatedPosts>
          <RelatedPostsTitle>추천 포스트</RelatedPostsTitle>
          <PostList data={data.blogPost.relatedPosts} />
        </RelatedPosts>
      </>
    )
  );
};

const Container = styled("div", {
  blogContentArea: true,
  color: vars.$scale.color.gray900,
});

const ThumbnailImage = styled("img", {
  width: 1024,
  height: 600,
  marginBottom: rem(44),
});

const PostBody = styled("section", {
  boxSizing: "border-box",
  maxWidth: rem(1200),
  margin: "0 auto",
  paddingX: rem(84),
});

const ContentContainer = styled("div", {
  display: "flex",
  flexFlow: "row nowrap",
  height: "auto",
  overflow: "auto",
});

const RelatedPosts = styled("section", {
  width: "100%",
  marginTop: rem(88),
  padding: `${rem(56)} 0`,
  backgroundColor: vars.$scale.color.gray50,
  fontSize: rem(14),
});

const RelatedPostsTitle = styled("h2", {
  blogContentArea: true,
});

export default BlogPostPage;
