import { vars } from '@seed-design/design-token';
import { type HeadProps, Link, type PageProps, graphql } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/config';
import { rem } from 'polished';
import * as React from 'react';

import IconFleamarket from '../assets/icon_fleamarket.png';
import SeviceImage1 from '../assets/service_img_01.png';
import IconCommunity from '../assets/icon_community.png';
import SeviceImage2 from '../assets/service_img_02.png';
import IconStore from '../assets/icon_store.png';
import SeviceImage3 from '../assets/service_img_03.png';
import IconBusiness from '../assets/icon_business.png';
import SeviceImage4 from '../assets/service_img_04.png';
import IconJobs from '../assets/icon_jobs.png';
import SeviceImage5 from '../assets/service_img_05.png';
import IconUsedcar from '../assets/icon_usedcar.png';
import SeviceImage6 from '../assets/service_img_06.png';
import IconRealestate from '../assets/icon_realestate.png';
import SeviceImage7 from '../assets/service_img_07.png';
import IconPay from '../assets/icon_pay.png';
import SeviceImage8 from '../assets/service_img_08.png';

export const query = graphql`
query ServicePage($locale: String!, $navigationId: String!) {
  ...TeamWebsite_DefaultLayout_query
}
`;

const ServicePage: React.FC = () => {
  return (
    <Container>
      <TitleArea>
        <Title>당신근처의 당근마켓</Title>
      </TitleArea>
      <Card>
        <LeftContent>
          <ServiceTitle>
            <ServiceIcon src={IconFleamarket} alt='중고거래_아이콘' />
            <ServieaName>중고거래</ServieaName>
          </ServiceTitle>
          <ServiceDescription>
            당근에서 동네 이웃들과 가깝고 따뜻한 거래를 경험해요.
            <br />
            동네인증, 매너온도는 물론 머신러닝 기술을 통한 게시글 분석으로
            모두가 안전하게 거래할 수 있도록 노력하고 있어요.
          </ServiceDescription>
        </LeftContent>
        <RightContent>
          <ServiceImage src={SeviceImage1} alt='중고거래_서비스이미지' />
        </RightContent>
      </Card>
      <CardLine />

      <Card>
        <LeftContent>
          <ServiceTitle>
            <ServiceIcon src={IconCommunity} alt='동네생활_아이콘' />
            <ServieaName>동네생활</ServieaName>
          </ServiceTitle>
          <ServiceDescription>
            동네 실시간 소식부터, 맛집 정보, 모임, 일상 공유까지.
            지금 우리 동네의 다양한 이야기를 이웃과 함께 나누어요.
            동네 이웃만 알 수 있는 진짜 정보를 동네생활에서 확인해보세요.
          </ServiceDescription>
        </LeftContent>
        <RightContent>
          <ServiceImage src={SeviceImage2} alt='동네생활_서비스이미지' />
        </RightContent>
      </Card>
      <CardLine />

      <Card>
        <LeftContent>
          <ServiceTitle>
            <ServiceIcon src={IconStore} alt='동네가게_아이콘' />
            <ServieaName>동네가게</ServieaName>
          </ServiceTitle>
          <ServiceDescription>
            동네 실시간 소식부터, 맛집 정보, 모임, 일상 공유까지.
            지금 우리 동네의 다양한 이야기를 이웃과 함께 나누어요.
            동네 이웃만 알 수 있는 진짜 정보를 동네생활에서 확인해보세요.
          </ServiceDescription>
        </LeftContent>
        <RightContent>
          <ServiceImage src={SeviceImage3} alt='동네가게_서비스이미지' />
        </RightContent>
      </Card>
      <CardLine />

      <Card>
        <LeftContent>
          <ServiceTitle>
            <ServiceIcon src={IconBusiness} alt='당근비즈니스_아이콘' />
            <ServieaName>당근비즈니스</ServieaName>
          </ServiceTitle>
          <ServiceDescription>
            당근 이웃을 내 고객으로 만드는 강력한 비결!
            사장님부터 마케터까지 비즈니스 성장을 경험할 수 있어요.
          </ServiceDescription>
        </LeftContent>
        <RightContent>
          <ServiceImage src={SeviceImage4} alt='당근비즈니스_서비스이미지' />
        </RightContent>
      </Card>

      <SubCardWrapper>
        <SubCard>
          <SubCardTitle>비즈프로필</SubCardTitle>
          <SubCardDesctiption>
            당근 속 내 가게, 비즈프로필을 만들어보세요. 이웃에게 알리고 싶은 소식 발행부터 쿠폰, 채팅, 광고까지 다양한 기능을 통해 근처 이웃에게 가게를 알릴 수 있어요.
          </SubCardDesctiption>
        </SubCard>

        <SubCard>
          <SubCardTitle>브랜드프로필</SubCardTitle>
          <SubCardDesctiption>
            브랜드프로필은 전국 곳곳의 지점 또는 대리점을 가지고 있는 브랜드 본사를 위한 서비스예요. 통합적으로 지점 정보 등록, 광고 및 프로모션 관리를 할 수 있어요.
          </SubCardDesctiption>
        </SubCard>

        <SubCard>
          <SubCardTitle>광고</SubCardTitle>
          <SubCardDesctiption>
            동네 이웃이 가장 많이 보는 당근에서 내 가게와 브랜드를 알리고, 매출을 늘릴 수 있어요. 전국은 물론 읍・면・동까지 세부적으로 원하는 지역을 타겟팅할 수 있어요.
          </SubCardDesctiption>
        </SubCard>
      </SubCardWrapper>
      <CardLine />

      <Card>
        <LeftContent>
          <ServiceTitle>
            <ServiceIcon src={IconJobs} alt='당근알바_아이콘' />
            <ServieaName>당근알바</ServieaName>
          </ServiceTitle>
          <ServiceDescription>
            우리 동네에서 찾는 당근알바. 당근하듯 쉽고 빠르게 동네에서 일거리를 찾고 일할 분을 구할 수 있어요.
            단기 알바부터 전문 일거리까지 가장 가까운 거리의 다양한 알바를 지금 바로 구해보세요.
          </ServiceDescription>
        </LeftContent>
        <RightContent>
          <ServiceImage src={SeviceImage5} alt='당근알바_서비스이미지' />
        </RightContent>
      </Card>
      <CardLine />

      <Card>
        <LeftContent>
          <ServiceTitle>
            <ServiceIcon src={IconUsedcar} alt='중고차직거래_아이콘' />
            <ServieaName>중고차 직거래</ServieaName>
          </ServiceTitle>
          <ServiceDescription>
            직거래로 합리적인 가격에 중고차 거래를 해보세요.
            투명하고 객관적인 차량 정보를 제공해 누구나 쉽게 중고차 매물을 살펴보고, 편리하게 거래할 수 있어요.
          </ServiceDescription>
        </LeftContent>
        <RightContent>
          <ServiceImage src={SeviceImage6} alt='중고차직거래_서비스이미지' />
        </RightContent>
      </Card>
      <CardLine />

      <Card>
        <LeftContent>
          <ServiceTitle>
            <ServiceIcon src={IconRealestate} alt='부동산직거래_아이콘' />
            <ServieaName>부동산 직거래</ServieaName>
          </ServiceTitle>
          <ServiceDescription>
            당근에서 부동산도 편리하고, 투명하게 직거래 할 수 있어요.
            기술력을 기반으로 허위 매물을 걸러내고, 부동산 거래 수요가 활발히 연결될 수 있도록 매물 정보를 정교화해요.
          </ServiceDescription>
        </LeftContent>
        <RightContent>
          <ServiceImage src={SeviceImage7} alt='부동산직거래_서비스이미지' />
        </RightContent>
      </Card>
      <CardLine />

      <Card>
        <LeftContent>
          <ServiceTitle>
            <ServiceIcon src={IconPay} alt='당근페이_아이콘' />
            <ServieaName>당근페이</ServieaName>
          </ServiceTitle>
          <ServiceDescription>
            현금과 개인정보를 주고받지 않고 더 쉽고 안전하게 송금해요.
            당근페이는 동네를 기반으로 일어나는 다양한 금융 생활에 활력을 더하고 싶어요.
          </ServiceDescription>
        </LeftContent>
        <RightContent>
          <ServiceImage src={SeviceImage8} alt='당근페이_서비스이미지' />
        </RightContent>
      </Card>
    </Container>
  );
};

const Container = styled('main', {
  contentArea: true,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const TitleArea = styled('section', {
  width: '100%',
  textAlign: 'left',
  marginBottom: rem(100),
});

const Title = styled('h1', {
  fontSize: rem(40),
  textAlign: 'left',
});

const Card = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  minHeight: rem(220),
  maxHeight: rem(400),
});

const CardLine = styled('hr', {
  borderWidth: '0 0 1px 0',
  borderColor: vars.$scale.color.gray200,
  width: '100%',
  margin: `${rem(68)} 0`,
});

const LeftContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  width: '40%',
});

const ServiceIcon = styled('img', {
  width: rem(72),
  marginBottom: rem(80),
});

const ServiceTitle = styled('div', {
  display: 'flex',
  flexDirection: 'column',
});

const ServieaName = styled('h2', {
  fontSize: '$subtitle2',
});

const ServiceDescription = styled('p', {
  fontSize: '$body2',
  color: vars.$scale.color.gray600,
  letterSpacing: rem(0.6),
  lineHeight: '150%',
});

const RightContent = styled('div', {
  width: '40%',
  marginLeft: rem(80),
  background: 'lightblue',
});


const ServiceImage = styled('img', {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

const SubCardWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  width: '100%',
  marginTop: rem(60),
});

const SubCard = styled('div', {
  maxWidth: rem(328),
});

const SubCardTitle = styled('h3', {
  fontSize: '$subtitle3',
  marginBottom: rem(20),
});

const SubCardDesctiption = styled('p', {
  fontSize: '$caption1',
  color: vars.$scale.color.gray600,
  letterSpacing: rem(0.4),
  lineHeight: '140%',
});

export default ServicePage;
