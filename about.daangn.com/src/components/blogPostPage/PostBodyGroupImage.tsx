import { PrismicRichText } from '@prismicio/react';
import { vars } from '@seed-design/design-token';
import { styled } from 'gatsby-theme-stitches/src/config';
import { rem } from 'polished';
import React from 'react';

const PostBodyGroupImage = ({
  slice,
}: {
  slice: GatsbyTypes.PostGroupImageSection;
}) => {
  return (
    <Container>
      <h2>그룹 이미지 섹션</h2>
    </Container>
  );
};

const Container = styled('section', {
  width: '100%',
});

export default PostBodyGroupImage;
