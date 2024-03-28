import { vars } from '@seed-design/design-token';
import { GatsbyImage } from 'gatsby-plugin-image';
import { styled } from 'gatsby-theme-stitches/src/config';
import { rem } from 'polished';
import React from 'react';
import { SimpleReveal } from 'simple-reveal';

import CtaButton from '../CtaButton';

type ListCardProps = {
  slice: GatsbyTypes.ListCard;
};

const ListCardSection: React.FC<ListCardProps> = ({ slice }) => {
  return (
    <CultureSection>
      <SimpleReveal
        render={({ ref, cn, style }) => (
          <CultureSectionTitle ref={ref} className={cn()} style={style}>
            당근 팀은 이렇게 일해요
          </CultureSectionTitle>
        )}
        duration={1000}
        delay={200}
        initialTransform="translateY(2rem)"
      />
      <CardWrapper>
        {slice.items.map((item, i) => (
          <SimpleReveal
            key={item?.card_title}
            render={({ ref, cn, style }) => (
              <CultureDescriptionCard ref={ref} className={cn()} style={style}>
                <CultureTextWapper>
                  <DescritionTitle>{item.card_title}</DescritionTitle>
                  <Description>{item.card_description.text}</Description>
                </CultureTextWapper>
                <GraphicWrapper>
                  <CultureGraphic
                    image={item.card_image.localFile.childImageSharp.gatsbyImageData}
                    alt={item.card_image.alt ?? ''}
                  />
                </GraphicWrapper>
              </CultureDescriptionCard>
            )}
            duration={1000}
            delay={200 * (i + 1)}
            initialTransform="translateY(2rem)"
          />
        ))}
        <SimpleReveal
          render={({ ref, cn, style }) => (
            <BlogCard key="cta-to-blog" ref={ref} className={cn()} style={style}>
              <CultureTextWapper>
                <BlogCardTitle>당근 팀 문화는 끊임없이 발전 중이에요</BlogCardTitle>
                <CtaButton link="/blog/category/culture/">블로그 글 보러가기</CtaButton>
              </CultureTextWapper>
            </BlogCard>
          )}
          duration={1000}
          delay={1200}
          initialTransform="translateY(2rem)"
        />
      </CardWrapper>
    </CultureSection>
  );
};

const CultureSection = styled('section', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: `${rem(96)} 0`,

  '@sm': {
    margin: `${rem(160)} 0`,
  },
});

const CultureSectionTitle = styled('h2', {
  maxWidth: rem(200),
  marginBottom: rem(32),
  lineHeight: '150%',
  fontSize: vars.$scale.dimension.fontSize600,
  textAlign: 'center',

  '@md': {
    maxWidth: rem(800),
    marginBottom: rem(80),
    fontSize: vars.$scale.dimension.fontSize900,
  },
});

const CardWrapper = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(1, 1fr)',
  gap: rem(14),
  justifyItems: 'center',

  '@md': {
    gridTemplateColumns: 'repeat(1, 1fr)',
    gap: rem(14),
  },

  '@lg': {
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: rem(30),
  },
});

const CultureDescriptionCard = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  width: '90%',
  maxWidth: rem(405),
  height: rem(400),
  padding: `${rem(36)} ${rem(40)}`,
  borderRadius: rem(30),
  border: `1px solid ${vars.$scale.color.gray50}`,
  backgroundColor: vars.$scale.color.gray00,
  boxShadow: 'rgba(0, 0, 0, 0.05) 0px 4px 8px 0px',
  boxSizing: 'border-box',

  '@md': {
    width: rem(405),
    height: rem(434),
    padding: `${rem(46)} ${rem(50)}`,
  },
});

const CultureTextWapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  marginBottom: 0,

  '@sm': {
    marginBottom: rem(38),
  },
});

const DescritionTitle = styled('h3', {
  marginBottom: rem(16),
  maxWidth: rem(180),
  fontWeight: 'bold',
  fontSize: vars.$scale.dimension.fontSize500,

  '@md': {
    maxWidth: rem(260),
    fontSize: vars.$scale.dimension.fontSize700,
  },
});

const Description = styled('div', {
  maxWidth: rem(290),
  width: '100%',
  lineHeight: '140%',
  textAlign: 'left',
  color: vars.$scale.color.gray700,

  '@md': {
    width: '100%',
    lineHeight: '150%',
  },
});

const GraphicWrapper = styled('div', {
  width: '100%',
});

const CultureGraphic = styled(GatsbyImage, {
  width: rem(98),
  height: rem(98),
  marginBottom: rem(0),

  '@sm': {
    width: rem(108),
    height: rem(108),
    marginBottom: rem(0),
  },
});

const BlogCard = styled(CultureDescriptionCard, {
  backgroundColor: '#FFDD87',
});

const BlogCardTitle = styled(DescritionTitle, {
  maxWidth: rem(240),

  '@md': {
    maxWidth: rem(400),
  },
});

export default ListCardSection;
