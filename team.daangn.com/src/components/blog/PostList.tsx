import { rem } from "polished";
import { styled } from "gatsby-theme-stitches/src/config";

import PostCard from "./PostCard";

type PostListProps = {
  data: Array<{
    slug: string;
    title: string;
    summary: string;
    thumbnailImage: {
      publicURL: string;
    },
    category: {
      name: string;
      uid: string;
    },
  }>,
};

const PostList: React.FC<PostListProps> = ({ data }) => {
  return (
    <Container>
      {data.map((node) => (
        <PostCard key={node.slug} post={node} />
      ))}
    </Container>
  );
};

const Container = styled("div", {
  width: "100%",
  contentArea: true,
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  justifyItems: "center",
  marginTop: rem(44),
});

export default PostList;
