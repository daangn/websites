import * as React from 'react'
import styled from '@emotion/styled'
import { colors } from '@daangn/design-token'
import { StaticImage } from 'gatsby-plugin-image'
import { css, Global } from '@emotion/react'
import throttle from 'lodash.throttle'
import debounce from 'lodash.debounce'
import { Link } from 'gatsby'

import Layout from '@src/components/Layout'
import { Base, clickAfterDimm } from '@src/styles'
import Navbar, { NavbarRef } from '@src/components/Navbar'
import { bridge } from '@src/bridge'
import Portal from '@src/components/Portal'
import ResultTags from '@src/components/ResultPage/ResultTags'
import ResultComments from '@src/components/ResultPage/ResultComments'
import ResultRelations from '@src/components/ResultPage/ResultRelations'
import ResultRemarks from '@src/components/ResultPage/ResultRemarks'
import { MBTI_RESULT_LOCALSTORAGE_KEY } from '@src/constants/mbti'
import { useShare } from '@src/hooks/useShare'

const MBTITargetResultPage: React.FC = (
  {
    // data: { mbtiTargetResult },
  }
) => {
  const navbarRef = React.useRef<NavbarRef>(null)
  const cardEl = React.useRef<HTMLDivElement>(null)
  const [assetMarginTop, setAssetMarginTop] = React.useState(0)
  const [showNavbarBg, setShowNavbarBg] = React.useState(false)

  React.useEffect(() => {
    const navbarHeight = navbarRef.current?.getHeight() || 0
    setAssetMarginTop(navbarHeight)

    let cardOffsetTop = 0
    let showNavbar = false

    const onScroll = () => {
      const currentShowNavbarState = window.scrollY > cardOffsetTop - navbarHeight
      showNavbar !== currentShowNavbarState && setShowNavbarBg(currentShowNavbarState)
      showNavbar = currentShowNavbarState
    }
    const onResize = () => {
      if (cardEl.current) {
        cardOffsetTop = cardEl.current.offsetTop
        onScroll()
      }
    }
    onResize()
    const onScrollThrottle = throttle(onScroll, 100)
    const onResizeDebounce = debounce(onResize, 100)

    window.addEventListener('scroll', onScrollThrottle)
    window.addEventListener('resize', onResizeDebounce)
    return () => {
      window.removeEventListener('scroll', onScrollThrottle)
      window.removeEventListener('resize', onResizeDebounce)
    }
  }, [])

  const handleClickRetryButton = () => {
    localStorage.removeItem(MBTI_RESULT_LOCALSTORAGE_KEY)
  }

  const handleClickShare = useShare()

  return (
    <Layout>
      <Base>
        <Navbar
          showClose
          iconColor={colors.light.$gray900}
          theme={bridge.environment}
          ref={navbarRef}
          showNavigationBg={showNavbarBg}
        />
        <ImageWrapper>
          <ImageArea />
          <Portal>
            <FloatingImageWrapper marginTop={assetMarginTop}>
              <ImageArea />
              <StaticImage
                alt="나의 당근 유형은 공감력 만렙 생활의 달인"
                src="../../images/img_result_01.png"
                width={520}
                height={520}
                placeholder="none"
                formats={['auto']}
                transformOptions={{ fit: 'contain' }}
                style={{
                  width: '100%',
                  maxWidth: 500,
                  transition: 'none',
                }}
              />
            </FloatingImageWrapper>
          </Portal>
        </ImageWrapper>
        <CardWrapper ref={cardEl}>
          <Card>
            <MarginContainer margin="0 0 1.5rem">
              <ResultTags />
            </MarginContainer>

            <MarginContainer>
              <ResultComments />
            </MarginContainer>

            <Divider />

            <MarginContainer>
              <ResultRelations />
            </MarginContainer>

            {
              <>
                <Divider />
                <MarginContainer>
                  <ResultRemarks />
                </MarginContainer>
              </>
            }
            <ButtonsWrapper>
              <ButtonWrapper>
                <KarrotButton>환상의 케미 이웃 만나러 가기</KarrotButton>
              </ButtonWrapper>

              <ButtonWrapper>
                <OutlineWhiteButton onClick={handleClickShare}>결과 공유하기</OutlineWhiteButton>
              </ButtonWrapper>

              <RetryButtonWrapper>
                <Link to="/" onClick={handleClickRetryButton} className="mbti-test-retry-button">
                  테스트 다시하기
                </Link>
              </RetryButtonWrapper>
            </ButtonsWrapper>
          </Card>
        </CardWrapper>
      </Base>
      <Global
        styles={css`
          body {
            background: #f4f1ee;
          }
        `}
      />
    </Layout>
  )
}

const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  width: 100%;
  max-width: 31.25rem;
  margin: 0 auto;
`
const FloatingImageWrapper = styled(ImageWrapper)<{ marginTop: number }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  transform: translate(0, ${({ marginTop }) => marginTop}px);
  z-index: -1;
`
const ImageArea = styled.div`
  margin-top: 100%;
`
const CardWrapper = styled.div`
  position: relative;
  margin-top: -0.5rem;
`
const Card = styled.div`
  background: #ffffff;
  box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.04);
  border-top-left-radius: 0.875rem;
  border-top-right-radius: 0.875rem;
  padding: 1.5rem;
`
const MarginContainer = styled.div<{ margin?: string }>`
  margin: ${({ margin }) => margin || '0 0 2rem'};
`
const Divider = styled.hr`
  margin: 0;
  width: 100%;
  border: none;
  border-top: 1px solid ${({ theme }) => theme.colors.gray200};
  margin: 0 0 2rem;
`
const ButtonsWrapper = styled.div`
  padding: 1rem 0 1.5rem;
`

const defaultButtonStyles = css`
  border-radius: 0.3125rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  width: 100%;
  transition: all 200ms;
  font-size: 1.125rem;
  line-height: 140%;
  letter-spacing: -0.03em;
  min-height: 3rem;
`

const KarrotButton = styled.button`
  ${defaultButtonStyles}
  background: ${({ theme }) => theme.colors.carrot500};

  :disabled {
    background: ${({ theme }) => theme.colors.gray300};
  }
  :active:not([disabled]) {
    background: ${({ theme }) => theme.colors.carrot600};
  }
`

const OutlineWhiteButton = styled.button`
  ${defaultButtonStyles};
  ${clickAfterDimm}

  background: #fff;
  color: ${({ theme }) => theme.colors.gray900};
  border: 1px solid #dcdee3;

  :disabled::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(248, 249, 250, 0.7);
  }
`
const ButtonWrapper = styled.div`
  margin: 0 0 1rem;
`
const RetryButtonWrapper = styled.div`
  display: flex;
  justify-content: center;

  .mbti-test-retry-button {
    ${clickAfterDimm}
    padding: 0.5rem;
    text-decoration: underline;
    font-weight: bold;
    font-size: 1rem;
    line-height: 150%;
    text-align: center;
    letter-spacing: -0.02em;
    color: ${({ theme }) => theme.colors.gray600};
  }
`

export default MBTITargetResultPage
