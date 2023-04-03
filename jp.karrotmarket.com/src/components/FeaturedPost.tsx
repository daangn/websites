import { vars } from '@seed-design/design-token';
import { getImage, GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import { styled } from 'gatsby-theme-stitches/src/config';
import { rem } from 'polished';
import * as React from 'react';

type FeaturedPostProps = {
  id: string;
  title: string;
  bodyIntro: string;
  noteUrl: string;
  eyecatch: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData;
    } | null;
  };
};

const FeaturedPost: React.FC<FeaturedPostProps> = (props) => {
  const thumbnailImage =
    props.eyecatch.childImageSharp?.gatsbyImageData &&
    getImage(props.eyecatch.childImageSharp?.gatsbyImageData);

  return (
    <Container target="_blank" rel="external noopener" href={props.noteUrl}>
      <FeaturedImage image={thumbnailImage} alt={`${props.title}_イメージ`} />
      <FeaturedDescription>
        <FeaturedTitle>{props.title}</FeaturedTitle>
        <FeaturedSummary>{props.bodyIntro}</FeaturedSummary>
      </FeaturedDescription>
    </Container>
  );
};

const Container = styled('a', {
  display: 'none',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: rem(50),
  marginBottom: rem(100),
  textDecoration: 'none',

  '@md': {
    display: 'flex',
  },
});

const FeaturedImage = styled(GatsbyImage, {
  opacity: 0.99,
  width: '100%',
  maxWidth: rem(1020),
  maxheight: 614,
  borderRadius: rem(20),
  '-webkit-border-radius': rem(20),
  '-moz-border-radius': rem(20),

  '@sm': {
    borderRadius: rem(40),
    '-webkit-border-radius': rem(40),
    '-moz-border-radius': rem(40),
  },
});

const FeaturedDescription = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  marginTop: rem(20),
  wordWrap: 'break-word',
  textAlign: 'center',

  '@sm': {
    marginTop: rem(40),
  },
});

const FeaturedTitle = styled('h1', {
  color: vars.$scale.color.gray900,
  marginBottom: rem(2),
  typography: '$subtitle3',
  fontSize: rem(22),

  '@sm': {
    typography: '$subtitle2',
    marginBottom: rem(10),
  },

  '@lg': {
    typography: '$subtitle1',
  },
});

const FeaturedSummary = styled('p', {
  maxWidth: rem(800),
  color: vars.$scale.color.gray600,
  typography: '$subtitle4',
  textAlign: 'center',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',

  '@lg': {
    typography: '$body2',
  },
});

export default FeaturedPost;
