import * as React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { rem } from 'polished';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { styled } from 'gatsby-theme-stitches/src/config';

type IllustrationSectionProps = {
  content: GatsbyTypes.IllustrationSection_contentFragment;
};

export const query = graphql`
  fragment IllustrationSection_content on PrismicGlobalContentsDataMainBodyIllustrationSection {
    primary {
      title {
        html
      }
      text {
        html
      }
      inverted
      image {
        alt
        localFile {
          childImageSharp {
            gatsbyImageData(quality: 100, placeholder: NONE)
          }
        }
      }
    }
  }
`;

const IllustrationSection: React.FC<IllustrationSectionProps> = ({ content }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  if (!content.primary) return <></>;
  const { title, text, image, inverted } = content.primary;

  const sideImage =
    image?.localFile?.childImageSharp?.gatsbyImageData &&
    getImage(image.localFile.childImageSharp.gatsbyImageData);

  return (
    <Section ref={ref}>
      <Container
        inverted={inverted}
        animate={{
          opacity: inView ? 1 : 0,
          y: inView ? 0 : 130,
        }}
        transition={{
          duration: 0.5,
        }}
      >
        <TopContainer>
          <Title dangerouslySetInnerHTML={{ __html: title.html }} />
          <Text dangerouslySetInnerHTML={{ __html: text.html }} />
        </TopContainer>

        <BottomContainer>
          {sideImage && <GatsbyImage image={sideImage} alt={image?.alt || ''} />}
        </BottomContainer>
      </Container>
    </Section>
  );
};

const Section = styled('section', {
  '*': {
    fontFamily: '$gilroy',
  },
  height: 'auto',
  width: '100%',
  position: 'relative',
  marginTop: rem(120),

  '@lg': {
    marginTop: rem(160),
    height: '500px',
  },
});

const Container = styled(motion.div, {
  height: '100%',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-end',
  textAlign: 'left',

  boxSizing: 'border-box',
  paddingLeft: rem(16),
  paddingRight: rem(16),
  '@sm': {
    width: rem(540),
    paddingLeft: rem(24),
    paddingRight: rem(24),
  },
  '@md': {
    gap: rem(30),

    flexDirection: 'row',
    textAlign: 'left',
    justifyContent: 'initial',
    alignItems: 'initial',

    width: rem(720),
  },
  '@lg': {
    width: rem(960),
  },
  '@xl': {
    width: rem(1150),
  },

  variants: {
    inverted: {
      false: {
        flexDirection: 'column',
        '@md': {
          flexDirection: 'row-reverse',
        },
      },
    },
  },
});

const TopContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  flex: 1,
});

const BottomContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  flex: 1,
});

const Title = styled('h2', {
  '*': {
    marginBottom: rem(24),
    fontSize: '$heading3',
    lineHeight: '120%',

    '@lg': {
      fontSize: '$heading2',
      lineHeight: '115%',
    },
  },
});

const Text = styled('div', {
  '*': {
    marginBottom: rem(64),
    fontSize: '$subtitle2',
    color: '#4D5159',
    letterSpacing: '-0.055em',
    '@lg': {
      marginBottom: rem(0),
      fontSize: '$subtitle1',
      marginRight: rem(36),
    },
  },
});

export default IllustrationSection;
