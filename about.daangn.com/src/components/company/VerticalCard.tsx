import { vars } from '@seed-design/design-token';
import { styled } from 'gatsby-theme-stitches/src/config';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import { rem } from 'polished';

type VerticalCardProps = {
  slice: GatsbyTypes.PrismicCompanyContentDataBodyVerticalCard;
};

const VerticalCard: React.FC<VerticalCardProps> = ({ slice }) => {
  const image =
    slice.primary?.full_width_image?.localFile?.childImageSharp?.gatsbyImageData &&
    getImage(slice.primary.full_width_image.localFile.childImageSharp.gatsbyImageData);

  return (
    <Container>
      <ImageWrapper>
        {image && (
          <Image
            image={image}
            alt={slice.primary?.full_width_image?.alt || ''}
          />
        )}
      </ImageWrapper>
      <TextWapper>
        <Title
          dangerouslySetInnerHTML={{
            __html: slice.primary?.title?.html || '',
          }}
        />
        <Description>{slice.primary.description}</Description>
      </TextWapper>
    </Container>
  );
};

const Container = styled('section', {
  display: 'flex',
  flexDirection: 'column-reverse',
  justifyContent: 'flex-end',
  width: '100%',
  height: 'auto',
  margin: `${rem(40)} 0`,
  boxSizing: 'border-box',

  '@md': {
    flexDirection: 'column',
    height: '100vh',
    margin: 0,
  },
});

const ImageWrapper = styled('div', {
  display: 'flex',
  width: '100%',
  height: '40%',

  '@md': {
    height: '60%',
  },
});

const Image = styled(GatsbyImage, {
  width: '100%',
  height: '100%',
  border: 'none',
  objectFit: 'cover',
});

const TextWapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  height: 'auto',
  marginLeft: rem(0),
  padding: rem(16),
  textAlign: 'center',

  '@md': {
    height: '40%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: rem(20),
    marginTop: rem(40),
    textAlign: 'left',
  },
});

const Title = styled('h2', {
  width: '100%',
  marginBottom: rem(20),
  fontSize: vars.$scale.dimension.fontSize200,
  color: vars.$scale.color.gray900,

  '@md': {
    width: '50%',
    marginBottom: 0,
    fontSize: vars.$scale.dimension.fontSize500,
  },
});

const Description = styled('p', {
  width: '100%',
  lineHeight: '150%',
  textAlign: 'left',
  color: vars.$scale.color.gray700,

  '@md': {
    width: '50%',
    maxWidth: rem(440),
  },
});

export default VerticalCard;

