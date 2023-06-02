import { vars } from '@seed-design/design-token';
import { styled } from 'gatsby-theme-stitches/src/config';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import { rem } from 'polished';

type HorizontalCardProps = {
  slice: GatsbyTypes.PrismicCompanyContentDataBodyHorizontalCard;
};

const HorizontalCard: React.FC<HorizontalCardProps> = ({ slice }) => {
  const image =
    slice.primary?.image?.localFile?.childImageSharp?.gatsbyImageData &&
    getImage(slice.primary.image.localFile.childImageSharp.gatsbyImageData);

  const mobileImage =
    slice.primary?.image_mobile?.localFile?.childImageSharp?.gatsbyImageData &&
    getImage(slice.primary.image_mobile.localFile.childImageSharp.gatsbyImageData);

  return (
    <Container>
      <TextArea>
        <TextWapper>
          <Title
            dangerouslySetInnerHTML={{
              __html: slice.primary?.title?.html || '',
            }}
          />
          <Description>{slice.primary.description}</Description>
        </TextWapper>
      </TextArea>
      {image && mobileImage && (
        <ImageArea>
          <Image image={image} alt={slice.primary?.image?.alt || ''} />
          <MobileImage image={mobileImage} alt={slice.primary?.image_mobile?.alt || ''} />
        </ImageArea>
      )}
    </Container>
  );
};

const Container = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  width: '100%',
  height: 'auto',
  margin: `${rem(40)} 0`,
  boxSizing: 'border-box',

  '@md': {
    height: '100vh',
    padding: `${rem(80)} ${rem(40)}`,
    margin: 0,
    flexDirection: 'row',
    justifyContent: 'center',
  },

  '@xl': {
    padding: `${rem(80)} ${rem(80)}`,
  },

  '@xxl': {
    padding: `${rem(80)} ${rem(120)}`,
  },
});

const TextArea = styled('div', {
  display: 'flex',
  justifyContent: 'flex-end',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  padding: rem(16),
  boxSizing: 'border-box',

  '@md': {
    width: '50%',
    alignItems: 'flex-start',
    marginBottom: 0,
    paddingBottom: 0,
  },
});

const TextWapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: 'auto',
  alignItems: 'center',
  marginRight: rem(0),

  '@md': {
    alignItems: 'flex-start',
    marginRight: rem(60),
  },
});

const Title = styled('div', {
  lineHeight: '200%',
  fontSize: vars.$scale.dimension.fontSize200,
  color: vars.$scale.color.gray900,

  '@md': {
    fontSize: vars.$scale.dimension.fontSize500,
  },
});

const Description = styled('p', {
  marginTop: rem(24),
  lineHeight: '150%',
  textAlign: 'left',
  color: vars.$scale.color.gray700,

  '@md': {
    maxWidth: rem(300),
  },

  '@lg': {
    maxWidth: rem(400),
    marginTop: rem(48),
  },
});

const ImageArea = styled('div', {
  display: 'flex',
  width: '100%',
  maxHeight: '650px',
  overflow: 'hidden',
  padding: '0',

  '@md': {
    width: rem(450),
  },
});

const Image = styled(GatsbyImage, {
  display: 'none !important',
  width: '100%',
  height: 'auto',
  borderRadius: rem(60),

  '@md': {
    display: 'block !important',
  },
});

const MobileImage = styled(GatsbyImage, {
  display: 'block !important',
  width: '100%',
  height: '100%',

  '@md': {
    display: 'none !important',
  },
});

export default HorizontalCard;
