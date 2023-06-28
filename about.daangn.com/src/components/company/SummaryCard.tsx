import { vars } from '@seed-design/design-token';
import { styled } from 'gatsby-theme-stitches/src/config';
import React from 'react';
import { rem } from 'polished';
import { SimpleReveal } from 'simple-reveal';

type SummaryCardProps = {
  slice: GatsbyTypes.PrismicCompanyContentDataBodySummaryCard;
};

const SummaryCard: React.FC<SummaryCardProps> = ({ slice }) => {
  return (
    <Container>
      <TitleWrapper>
        <SimpleReveal
          render={({ ref, cn, style }) => (
            <Title ref={ref} className={cn()} style={style}>
              {slice.primary.title?.text}
            </Title>
          )}
          duration={1000}
          delay={200}
          initialTransform="translateY(2rem)"
        />
      </TitleWrapper>
      <CardWrapper>
        {slice.items.map((item, i) => (
          <SimpleReveal
            render={({ ref, cn, style }) => (
              <Card key={item.summary_text} ref={ref} className={cn()} style={style}>
                <CardText>{item.summary_text}</CardText>
                <IconWrapper>
                  <IconImage
                    src={item.graphic_image?.localFile?.publicURL || ''}
                    alt={item.graphic_image?.alt || ''}
                  />
                </IconWrapper>
              </Card>
            )}
            duration={1000}
            delay={300 * (i + 1)}
            initialTransform="translateY(2rem)"
          />
        ))}
      </CardWrapper>
    </Container>
  );
};

const Container = styled('section', {
  contentArea: true,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  height: 'auto',
  marginY: rem(96),

  '@sm': {
    marginY: rem(160),
  },
});

const TitleWrapper = styled('div', {
  width: '100%',
  textAlign: 'center',

  '@sm': {
    textAlign: 'left',
  },
});

const Title = styled('h2', {
  maxWidth: rem(335),
  margin: 0,
  marginBottom: rem(48),
  fontSize: vars.$scale.dimension.fontSize600,

  '@md': {
    maxWidth: rem(520),
    margin: `${rem(40)} 0`,
    marginBottom: rem(60),
    fontSize: vars.$scale.dimension.fontSize900,
  },
});

const CardWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  gap: rem(14),

  '@lg': {
    gap: rem(24),
  },

  '@xl': {
    justifyContent: 'flex-start',
    gap: rem(30),
  },
});

const Card = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  height: rem(120),
  padding: rem(16),
  backgroundColor: vars.$scale.color.gray100,
  borderRadius: rem(18),
  boxSizing: 'border-box',

  '@md': {
    flexDirection: 'column',
    alignItems: 'flex-start',
    maxWidth: rem(420),
    height: rem(300),
    padding: rem(30),
  },

  '@lg': {
    maxWidth: rem(480),
    height: rem(300),
  },

  '@xl': {
    maxWidth: rem(550),
    height: rem(340),
    padding: rem(35),
    borderRadius: rem(24),
  },
});

const CardText = styled('h3', {
  maxWidth: rem(200),
  fontSize: vars.$scale.dimension.fontSize300,

  '@md': {
    maxWidth: rem(260),
    fontSize: vars.$scale.dimension.fontSize700,
  },
});

const IconWrapper = styled('div', {
  width: 'auto',
  height: rem(50),
  textAlign: 'right',

  '@md': {
    width: '100%',
    height: rem(100),
  },
});

const IconImage = styled('img', {
  height: '100%',
});

export default SummaryCard;
