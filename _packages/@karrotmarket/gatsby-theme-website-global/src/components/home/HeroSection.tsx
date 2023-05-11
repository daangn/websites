import * as React from 'react';
import { rem } from 'polished';
import { graphql } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/config';

import AppLink from '../AppLink';
import PhoneMockupHome from '../phoneMockup/PhoneMockupHome';
import HeroSectionBackground from './HeroSectionBackground';

export const query = graphql`
  fragment HeroSection_content on PrismicGlobalContentsDataMainBodyHeroSection {
    primary {
      title {
        html
      }
      text {
        html
      }
      background_color
      side_image {
        url
        localFile {
          childImageSharp {
            gatsbyImageData(quality: 100, placeholder: NONE)
          }
        }
        dimensions {
          width
          height
        }
      }
    }
  }
  fragment HeroSection_links on PrismicGlobalContentsDataType {
    ...AppLink_links
  }
`;

type HeroSectionProps = {
  content: GatsbyTypes.HeroSection_contentFragment;
  links: GatsbyTypes.DownloadSection_linksFragment;
};

const HeroSection: React.FC<HeroSectionProps> = ({ content, links }) => {
  if (!(content.primary && links)) return <></>;
  const { title, background_color, text } = content.primary;

  return (
    <Section css={{ background: background_color }}>
      <HeroSectionBackground />
      <Container>
        <LeftContainer>
          <Title dangerouslySetInnerHTML={{ __html: title?.html }} />
          <Text dangerouslySetInnerHTML={{ __html: text?.html }} />
          <AppLink theme="primary" type="desktop" links={links} />
        </LeftContainer>
        <RightContainer>
          <PhoneMockupHome />
        </RightContainer>
      </Container>
    </Section>
  );
};

const Section = styled('section', {
  height: '582px',
  width: '100%',
  position: 'relative',
  overflow: 'hidden',
  '@md': {
    height: '780px',
  },
});

const Container = styled('div', {
  height: '100%',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-end',
  textAlign: 'center',
  position: 'relative',
  '@md': {
    width: '$maxContent',
    flexDirection: 'row',
    textAlign: 'left',
    justifyContent: 'initial',
    alignItems: 'initial',
  },
});

const LeftContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
});

const RightContainer = styled('div', {
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'center',
  flex: 1,
});

const Title = styled('div', {
  '*': {
    fontSize: rem(32),
    lineHeight: '120%',
    marginTop: rem(82),

    '@md': {
      fontSize: '$heading1',
      lineHeight: '$heading1',

      // https://daangn.slack.com/archives/C01DG5MV5UH/p1683018916888919?thread_ts=1682373700.371559&cid=C01DG5MV5UH
      width: '400px',
    },
  },
});

const Text = styled('div', {
  marginBottom: rem(32),
  '@md': {
    marginBottom: rem(36),
  },

  marginTop: rem(16),
  '*': {
    fontSize: rem(18),
    lineHeight: '120%',

    '@md': {
      fontSize: rem(28),
      lineHeight: '1.5',
    },
  },
});

export default HeroSection;
