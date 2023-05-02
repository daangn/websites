import * as React from 'react';
import { rem } from 'polished';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';
import { vars } from '@seed-design/design-token';
import { styled } from 'gatsby-theme-stitches/src/config';

import { ReactComponent as KarrotIcon } from '../../icons/karrot.svg';

type ParallaxIconType = 'Karrot';
const ParallaxIcon: { [key in ParallaxIconType]: React.FC } = {
  Karrot: KarrotIcon,
};

export const query = graphql`
  fragment ParallaxSection_content on PrismicGlobalContentsDataMainBodyParallaxSection {
    primary {
      title {
        html
      }
      top_icon
      top_text {
        text
      }
      background_image {
        alt
        localFile {
          childImageSharp {
            gatsbyImageData(
              quality: 100
              layout: FULL_WIDTH
              formats: [AUTO, AVIF, WEBP]
            )
          }
        }
      }
    }
  }
`;

type ParallaxSectionProps = {
  content: GatsbyTypes.ParallaxSection_contentFragment;
};

const ParallaxSection: React.FC<ParallaxSectionProps> = ({ content }) => {
  if (!content.primary) return <></>;

  const { title, top_icon, top_text, background_image } = content.primary;
  const TopIcon = ParallaxIcon[top_icon as ParallaxIconType];

  const bgImage =
    background_image?.localFile?.childImageSharp?.gatsbyImageData &&
    getImage(background_image.localFile.childImageSharp.gatsbyImageData);

  return (
    <ParallaxProvider>
      <Section>
        <ParallaxBanner
          style={{ height: '100%' }}
          layers={[
            {
              children: (
                <Background>
                  {bgImage && <BackgroundImage image={bgImage} alt={background_image?.alt || ''} />}
                </Background>
              ),
              speed: 0.2,
              expanded: true,
            },
          ]}
        >
          <Container>
            <TopContainer>
              <TopIcon />
              <TopText>{top_text?.text}</TopText>
            </TopContainer>
            <Title dangerouslySetInnerHTML={{ __html: title.html }} />
          </Container>
        </ParallaxBanner>
      </Section>
    </ParallaxProvider>
  );
};

const Section = styled('section', {
  overflow: 'hidden',
  height: '400px',
  width: '100%',
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '@md': {
    height: '600px',
  },
});

const Container = styled('div', {
  position: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%,-50%)',
  zIndex: 0,
  width: 'min(100vw, $maxContent)',
  margin: '0 auto',
  color: vars.$semantic.color.paperBackground,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  height: '100%',
});

const Title = styled('div', {
  '*': {
    fontSize: '$heading5',
    lineHeight: '$heading5',

    '@md': {
      fontSize: '$heading2',
      lineHeight: '$heading2',
    },
  },
});

const TopContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  marginBottom: rem(12),
});

const TopText = styled('div', {
  fontSize: '$body1',
  lineHeight: '$body1',
  marginLeft: rem(4),

  '@md': {
    fontSize: '$subtitle3',
    lineHeight: '$subtitle3',
  },
});

const Background = styled('div', {
  transform: 'translateY(12%)',
  height: '600px',
  width: '100%',
  position: 'relative',

  '@sm': {
    transform: 'translateY(0%)',
  },
  '@md': {
    height: '800px',
    transform: 'translateY(5%)',
  },
});

const BackgroundImage = styled(GatsbyImage, {
  height: '70%!important',
  objectPosition: 'bottom 50% left 50%',

  '@sm': {
    objectPosition: 'bottom 50% left 50%',
    height: '100%!important',
  },

  '@md': {
    objectPosition: 'bottom 50% left 50%',
    height: '100%!important',
  },
});

export default ParallaxSection;
