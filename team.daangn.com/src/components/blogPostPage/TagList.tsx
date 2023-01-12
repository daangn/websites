import { styled } from "gatsby-theme-stitches/src/config";

import Tag from "./Tag";

const TagList = ({ tags }) => {
  return (
    <TagContainer>
      {tags.map((tag) => (
        <Tag key={tag}>{tag}</Tag>
      ))}
    </TagContainer>
  );
};

const TagContainer = styled("div", {
  display: "flex",
});

export default TagList;
