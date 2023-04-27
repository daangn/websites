import { vars } from '@seed-design/design-token';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { styled } from 'gatsby-theme-stitches/src/config';
import { rem } from 'polished';
import React from 'react';

type PostBodyGroupImageProps = {
  slice: GatsbyTypes.PostGroupImageSection;
};

const PostBodyGroupImage: React.FC<PostBodyGroupImageProps> = ({ slice }) => {
  const groupImage1 =
    slice.groupImage1.childImageSharp?.gatsbyImageData &&
    getImage(slice.groupImage1.childImageSharp?.gatsbyImageData);
  const groupImage2 =
    slice.groupImage2.childImageSharp?.gatsbyImageData &&
    getImage(slice.groupImage2.childImageSharp?.gatsbyImageData);
  const groupImage1Alt = slice.primary.group_image1.alt || '';
  const groupImage2Alt = slice.primary.group_image2.alt || '';
  const groupImageCaption = slice?.groupImageCaption || '';

  if (!(groupImage1 && groupImage2)) {
    return null;
  }

  return (
    <Container>
      <GroupImageWrapper>
        <ImageWrapper>
          <Image image={groupImage1} alt={groupImage1Alt} />
        </ImageWrapper>
        <ImageWrapper>
          <Image image={groupImage2} alt={groupImage2Alt} />
        </ImageWrapper>
      </GroupImageWrapper>
      {groupImageCaption && <Caption>{groupImageCaption}</Caption>}
    </Container>
  );
};

const Container = styled('section', {
  width: '100%',
});

const GroupImageWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  gap: rem(12),
});

const ImageWrapper = styled('div', {
  width: '50%',
});

const Image = styled(GatsbyImage, {
  width: '100%',
});

const Caption = styled('p', {
  textAlign: 'center',
  color: vars.$scale.color.gray600,
  typography: '$caption2',
  marginTop: rem(8),
  marginBottom: rem(32),
});

export default PostBodyGroupImage;
