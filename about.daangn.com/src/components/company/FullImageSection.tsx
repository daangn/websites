import { vars } from '@seed-design/design-token';
import { styled } from 'gatsby-theme-stitches/src/config';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import { rem } from 'polished';

type FullImageProps = {
  slice: GatsbyTypes.PrismicCompanyContentDataBodyFullImage;
};

const FullImageSection: React.FC<FullImageProps> = ({ slice }) => {
  const image =
    slice.primary?.full_image?.localFile?.childImageSharp?.gatsbyImageData &&
    getImage(slice.primary.full_image.localFile.childImageSharp.gatsbyImageData);

  return (
    <HeroImageSection>
      {image && <Image image={image} alt={slice.primary?.full_image?.alt || ''} />}
      <Text
        dangerouslySetInnerHTML={{
          __html: slice?.primary?.text?.html || '',
        }}
      />
    </HeroImageSection>
  );
};

const HeroImageSection = styled('section', {
  width: '100%',
  height: 'calc(100vh - 58px)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  overflow: 'hidden',

  '@sm': {
    height: 'calc(100vh - 68px)',
  },
});

const Image = styled(GatsbyImage, {
  width: '100%',
  height: '100%',
  position: 'absolute',
  top: 0,
  left: 0,
  objectFit: 'cover',
  filter: 'brightness(50%)',
  zIndex: -1,
});

const Text = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  position: 'absolute',
  alignItems: 'center',
  textAlign: 'center',
  fontSize: vars.$scale.dimension.fontSize200,
  color: vars.$scale.color.gray00,
  zIndex: 0,
  lineHeight: '130%',

  '@sm': {
    fontSize: vars.$scale.dimension.fontSize400,
  },

  '& p': {
    marginTop: rem(16),
    color: vars.$scale.color.gray400,
  },

  '& h1': {
    fontSize: vars.$scale.dimension.fontSize600,
    lineHeight: '120%',

    '@sm': {
      fontSize: vars.$scale.dimension.fontSize800,
    },
  },
});

export default FullImageSection;
