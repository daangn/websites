import { vars } from '@seed-design/design-token';
import { styled } from 'gatsby-theme-stitches/src/config';
import { GatsbyImage } from 'gatsby-plugin-image';
import { rem } from 'polished';
import React from 'react';

type FullWidthImageProps = {
  slice: GatsbyTypes.FullWidthImage;
};

const FullWidthImageSection: React.FC<FullWidthImageProps> = ({ slice }) => {
  return (
    <Section>
      <ImageWrappe>
        <Image
          image={slice.primary.image.localFile.childImageSharp.gatsbyImageData}
          alt={slice.primary.image.alt}
        />
      </ImageWrappe>
      {/* <Text>{slice.primary.description}</Text> */}
      <Text
        dangerouslySetInnerHTML={{
          __html: slice.primary.description.html || '',
        }}
      />
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
  width: '100%',
  height: '100%',
});

const Text = styled('span', {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: 2,
  textAlign: 'center',
  color: vars.$scale.color.gray00,
  fontWeight: 'bold',
  fontSize: vars.$scale.dimension.fontSize500,

  '@sm': {
    fontSize: vars.$scale.dimension.fontSize700,
  },
});

export default FullWidthImageSection;
