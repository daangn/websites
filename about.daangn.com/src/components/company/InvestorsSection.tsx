import { vars } from '@seed-design/design-token';
import { styled } from 'gatsby-theme-stitches/src/config';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import { rem } from 'polished';
import { SimpleReveal } from 'simple-reveal';

type InvestorsSectionProps = {
  slice: GatsbyTypes.PrismicCompanyContentDataBodyInvestorsSection;
};

const InvestorsSection: React.FC<InvestorsSectionProps> = ({ slice }) => {
  return (
    <Container>
      <SimpleReveal
        render={({ ref, cn, style }) => (
          <Title ref={ref} className={cn()} style={style}>
            {slice?.primary.title?.text}
          </Title>
        )}
        duration={1000}
        delay={400}
        initialTransform="translateY(2rem)"
      />
      <SimpleReveal
        render={({ ref, cn, style }) => (
          <LogoWapper ref={ref} className={cn()} style={style}>
            {slice.items.map((item, index) => (
              <Logo
                // rome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                key={index}
                src={item?.image?.localFile?.publicURL || ''}
                alt={item?.image?.alt || ''}
              />
            ))}
          </LogoWapper>
        )}
        duration={1000}
        delay={600}
        initialTransform="translateY(2rem)"
      />
    </Container>
  );
};

const Container = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: 'auto',
  backgroundColor: vars.$scale.color.gray50,
  padding: `${rem(80)} 0`,

  '@md': {
    padding: `${rem(160)} 0`,
  },
});

const Title = styled('h2', {
  width: '100%',
  maxWidth: rem(330),
  marginBottom: rem(40),
  paddingTop: rem(40),
  textAlign: 'center',
  fontSize: vars.$scale.dimension.fontSize600,

  '@md': {
    maxWidth: rem(500),
    paddingTop: 0,
    fontSize: vars.$scale.dimension.fontSize900,
  },

  '@lg': {
    maxWidth: rem(1200),
  },
});

const LogoWapper = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: rem(10),
  padding: `${rem(30)} ${rem(40)}`,

  '@md': {
    gap: rem(20),
    maxWidth: rem(1000),
  },

  '@lg': {
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: rem(44),
    padding: `${rem(40)} ${rem(20)}`,
  },
});

const Logo = styled('img', {
  width: rem(140),
  mexHeight: rem(100),
  objectFit: 'contain',

  '@sm': {
    width: rem(180),
    mexHeight: rem(100),
  },

  '@md': {
    width: rem(300),
    mexHeight: rem(120),
  },
});

export default InvestorsSection;
