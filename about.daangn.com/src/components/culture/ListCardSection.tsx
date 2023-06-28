import { vars } from '@seed-design/design-token';
import { styled } from 'gatsby-theme-stitches/src/config';
import { GatsbyImage } from 'gatsby-plugin-image';
import { rem } from 'polished';
import React from 'react';
import { Link } from 'gatsby';

import CtaButton from '../CtaButton';

type ListCardProps = {
  slice: GatsbyTypes.ListCard;
};

const ListCardSection: React.FC<ListCardProps> = ({ slice }) => {
  return (
    <CultureSection>
      {/* <TempKeyText>우리의 문화</TempKeyText> */}
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
              <Description>{item.card_description.text}</Description>
            </CultureTextWapper>
            <GraphicWrapper>
              <CultureGraphic
                image={item.card_image.localFile.childImageSharp.gatsbyImageData}
                alt={item.card_image.alt ?? ''}
              />
            </GraphicWrapper>
          </CultureDescriptionCard>
        ))}
        <BlogCard key="cta-to-blog">
          <CultureTextWapper>
            <DescritionTitle>당근마켓 팀문화는 최고의 자산이에요</DescritionTitle>
            <CtaButton link="/blog/category/culture/">문화 보러가기</CtaButton>
          </CultureTextWapper>
        </BlogCard>
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

// const TempKeyText = styled('span', {
//   typography: '$body2',
//   fontWeight: 'bold',
//   marginBottom: rem(4),

//   '@md': {
//     typography: '$subtitle3',
//     marginBottom: rem(8),
//   },
// });

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
  maxWidth: rem(200),
  marginBottom: rem(32),
  fontSize: vars.$scale.dimension.fontSize600,
  textAlign: 'center',

  '@md': {
    maxWidth: rem(800),
    marginBottom: rem(120),
    fontSize: vars.$scale.dimension.fontSize900,
  },
});

const CardWrapper = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(1, 1fr)',
  gap: rem(14),
  justifyItems: 'center',

  '@md': {
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: rem(30),
  },
});

const CultureDescriptionCard = styled('div', {
  display: 'flex',
  flexDirection: 'column-reverse',
  justifyContent: 'center',
  alignItems: 'center',
  width: '90%',
  height: rem(400),
  padding: `${rem(30)} ${rem(28)}`,
  borderRadius: rem(30),
  border: `1px solid ${vars.$scale.color.gray50}`,
  backgroundColor: vars.$scale.color.gray00,
  boxShadow: '0px 0px 64px 0px rgba(125, 121, 139, 0.15) ',
  boxSizing: 'border-box',

  '@sm': {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
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
  width: '100%',
});

const CultureGraphic = styled(GatsbyImage, {
  width: rem(64),
  height: rem(64),
  marginBottom: rem(66),

  '@sm': {
    width: rem(108),
    height: rem(108),
    marginBottom: rem(0),
  },
});

const BlogCard = styled(CultureDescriptionCard, {
  backgroundColor: '#FFDD87',
  justifyContent: 'flex-end',

  '@md': {
    justifyContent: 'flex-start',
  },
});

export default ListCardSection;
