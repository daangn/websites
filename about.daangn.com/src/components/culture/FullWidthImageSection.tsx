import { vars } from '@seed-design/design-token';
import { styled } from 'gatsby-theme-stitches/src/config';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import { rem } from 'polished';
import React from 'react';
import { SimpleReveal } from 'simple-reveal';

type FullWidthImageProps = {
  slice: GatsbyTypes.FullWidthImage;
};

const FullWidthImageSection: React.FC<FullWidthImageProps> = ({ slice }) => {
  const image =
    slice.primary?.image?.localFile?.childImageSharp?.gatsbyImageData &&
    getImage(slice.primary.image.localFile.childImageSharp.gatsbyImageData);

  const mobileImage =
    slice.primary?.vertical_image?.localFile?.childImageSharp?.gatsbyImageData &&
    getImage(slice.primary.vertical_image.localFile.childImageSharp.gatsbyImageData);

  return (
    <Section>
      <ImageWrappe>
        <Image image={image} alt={slice.primary?.image?.alt || ''} />
        <MobileImage image={mobileImage} alt={slice.primary?.vertical_image?.alt || ''} />
      </ImageWrappe>
      <Text>
        <SimpleReveal
          render={({ ref, cn, style }) => (
            <p ref={ref} className={cn()} style={style}>
              {slice.primary.description.text}
            </p>
          )}
          duration={1000}
          delay={200}
          initialTransform="translateY(2rem)"
        />
      </Text>
    </Section>
  );
};

const Section = styled('section', {
  position: 'relative',
  width: '100%',
  height: rem(450),
  marginTop: rem(80),
});

const ImageWrappe = styled('div', {
  position: 'absolute',
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  top: 0,
  left: 0,
  zIndex: 1,
});

const Image = styled(GatsbyImage, {
  display: 'none !important',
  width: '100%',
  height: '100%',

  '@sm': {
    display: 'block !important',
  },
});

const MobileImage = styled(GatsbyImage, {
  display: 'block !important',
  width: '100%',
  height: '100%',

  '@sm': {
    display: 'none !important',
  },
});

const Text = styled('span', {
  position: 'absolute',
  top: '50%',
  left: '50%',
  width: rem(250),
  transform: 'translate(-50%, -50%)',
  zIndex: 2,
  textAlign: 'center',
  color: vars.$scale.color.gray00,
  lineHeight: '150%',
  fontWeight: 'bold',
  fontSize: vars.$scale.dimension.fontSize500,

  '@sm': {
    fontSize: vars.$scale.dimension.fontSize700,
    width: rem(450),
  },
});

export default FullWidthImageSection;
