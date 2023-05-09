import { vars } from '@seed-design/design-token';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { styled } from 'gatsby-theme-stitches/src/config';
import { rem } from 'polished';
import React from 'react';

type PostBodySingleImageProps = {
  slice: GatsbyTypes.PostSingleImageSection;
};

const PostBodySingleImage: React.FC<PostBodySingleImageProps> = ({ slice }) => {
  const image =
    slice.image.childImageSharp?.gatsbyImageData &&
    getImage(slice.image.childImageSharp?.gatsbyImageData);
  const imageCaption = slice?.imageCaption || '';

  if (!image) {
    return null;
  }

  return (
    <Container>
      <Image image={image} alt={imageCaption} />
      <Caption>{imageCaption}</Caption>
    </Container>
  );
};

const Container = styled('section', {
  width: '100%',
  margin: `${rem(32)} 0`,
});

const Image = styled(GatsbyImage, {
  width: '100%',
});

const Caption = styled('p', {
  marginTop: rem(8),
  textAlign: 'center',
  typography: '$caption2',
  color: vars.$scale.color.gray600,
});

export default PostBodySingleImage;
