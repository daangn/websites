import { vars } from '@seed-design/design-token';
import { styled } from 'gatsby-theme-stitches/src/config';
import { GatsbyImage } from 'gatsby-plugin-image';
import { rem } from 'polished';
import React from 'react';

type ListCardProps = {
  slice: GatsbyTypes.ListCard;
};

const ListCardSection: React.FC<ListCardProps> = ({ slice }) => {
  return (
    <CultureSection>
      <TempKeyText>우리의 문화</TempKeyText>
      <CultureSectionTitle>당근마켓 팀은 이렇게 일해요</CultureSectionTitle>
      {/* <TempTextWrapper>
        <TempTitleContainer>
          <TempTitle>당근마켓 팀은 이렇게 일해요</TempTitle>
        </TempTitleContainer>
        <TempDescription>
          당근마켓의 팀원 모두는 사업가이자 사용자의 마음을 읽어내는 사람들이에요. 동네 커뮤니티의
          가치를 재발견하고, 지역에 속한 모든 주체의 삶에 긍정적 영향을 줄 수 있는 서비스를
          만들어요. 문제를 발견하고 가설을 검증하는 끊임 없는 시행착오 속에서, 회사와 우리는 함께
          성장하고 있어요.
        </TempDescription>
      </TempTextWrapper> */}
      <CardWrapper>
        {slice.items.map((item) => (
          <CultureDescriptionCard key={item?.card_title}>
            <CultureTextWapper>
              <DescritionTitle>{item.card_title}</DescritionTitle>
              {/* <DescriptionSummary>{item.card_summary}</DescriptionSummary> */}
              <Description>
                {item.card_description.text}
              </Description>
            </CultureTextWapper>
            <GraphicWrapper>
              <CultureGraphic
                image={item.card_image.localFile.childImageSharp.gatsbyImageData}
                alt={item.card_image.alt ?? ''}
              />
            </GraphicWrapper>
          </CultureDescriptionCard>
        ))}
      </CardWrapper>
    </CultureSection>
  );
};

const CultureSection = styled('section', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: `${rem(160)} 0`,
});

const TempTextWrapper = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-end',
  marginBottom: rem(60),
});

const TempTitleContainer = styled('div', {
  display: 'flex',
  width: '50%',
  flexDirection: 'column',
  alignItems: 'flex-start',
});

const TempKeyText = styled('span', {
  typography: '$body2',
  fontWeight: 'bold',
  marginBottom: rem(4),

  '@md': {
    typography: '$subtitle3',
    marginBottom: rem(8),
  },
});

const TempTitle = styled('h2', {
  maxWidth: rem(250),
  whiteSpace: 'pre-line',
  typography: '$subtitle2',
  marginBottom: rem(24),

  '@md': {
    typography: '$heading4',
    marginBottom: rem(32),
  },
});

const TempDescription = styled('div', {
  width: '50%',
  maxWidth: rem(550),
  color: vars.$scale.color.gray700,
  typography: '$body2',
  marginBottom: rem(32),

  '@md': {
    typography: '$body1',
    marginBottom: rem(40),
  },
});

const CultureSectionTitle = styled('h2', {
  // margin: `${rem(72)} 0`,
  marginBottom: rem(120),
  fontSize: vars.$scale.dimension.fontSize800,

  '@md': {
    fontSize: vars.$scale.dimension.fontSize900,
  },
});

const CardWrapper = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: rem(30),
});

const CultureDescriptionCard = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  width: rem(405),
  height: rem(548),
  padding: `${rem(46)} ${rem(50)}`,
  border: 'none',
  backgroundColor: vars.$scale.color.gray00,
  boxShadow: 'none',
  boxSizing: 'border-box',

  '@md': {
    borderRadius: rem(30),
    boxShadow: '0px 0px 64px 0px rgba(17, 12, 46, 0.15) ',
  },
});

const CultureTextWapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  marginBottom: rem(38),
});

const DescritionTitle = styled('h3', {
  marginBottom: rem(16),
  maxWidth: rem(230),
  fontWeight: 'bold',
  fontSize: vars.$scale.dimension.fontSize600,

  '@md': {
    fontSize: vars.$scale.dimension.fontSize700,
  },
});

const DescriptionSummary = styled('p', {
  fontSize: vars.$scale.dimension.fontSize300,

  '@md': {
    marginBottom: rem(60),
    fontSize: vars.$scale.dimension.fontSize400,
  },
});

const Description = styled('div', {
  maxWidth: rem(500),
  width: '100%',
  lineHeight: '150%',
  textAlign: 'left',
  color: vars.$scale.color.gray700,

  '@md': {
    width: '100%',
  },
});

const GraphicWrapper = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
});

const CultureGraphic = styled(GatsbyImage, {
  width: rem(216),
  height: rem(216),
});

export default ListCardSection;
