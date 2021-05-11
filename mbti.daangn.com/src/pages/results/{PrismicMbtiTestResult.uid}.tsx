import * as React from 'react'
import styled from '@emotion/styled'
import { colors } from '@daangn/design-token'
import { css, Global } from '@emotion/react'
import throttle from 'lodash.throttle'
import debounce from 'lodash.debounce'
import { graphql, Link, PageProps } from 'gatsby'
import html2canvas from 'html2canvas'
import { getAccurateAgent } from '@egjs/agent'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import Layout from '@src/components/Layout'
import { Base, clickAfterDimm } from '@src/styles'
import Navbar, { NavbarRef } from '@src/components/Navbar'
import { bridge } from '@src/bridge'
import ResultTags from '@src/components/ResultPage/ResultTags'
import ResultComments from '@src/components/ResultPage/ResultComments'
import ResultRelations from '@src/components/ResultPage/ResultRelations'
import ResultRemarks from '@src/components/ResultPage/ResultRemarks'
import { MBTI_RESULT_LOCALSTORAGE_KEY } from '@src/constants/mbti'
import { useShare } from '@src/hooks/useShare'
import Modal from '@src/components/Modal'
import Portal from '@src/components/Portal'
import DownloadIc from '@src/images/ic_download_outline_m.svg'

const checkIsMobileSafari = async () => {
  const agent = await getAccurateAgent()

  if (agent) {
    return agent.browser.webkit && window.innerWidth < 1200
  }
  return false
}

const MBTITargetResultPage = ({
  data: { mbtiTargetResult },
  params: { code },
}: PageProps<GatsbyTypes.MBTITargetResultPageQuery>) => {
  if (!mbtiTargetResult?.data) {
    throw new Error('There is no mbtiTargetResult')
  }
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
  const ref = React.useRef<HTMLDivElement>(null)
  const isLoadingToExtractCanvas = React.useRef(false)

  const [image, setImage] = React.useState<null | string>(null)

  const handleClickDownload = React.useCallback(() => {
    window.scrollTo(0, 0)
    if (ref.current && !isLoadingToExtractCanvas.current) {
      isLoadingToExtractCanvas.current = true
      html2canvas(ref.current, { backgroundColor: '#f4f1ee' })
        .then(async (canvas) => {
          isLoadingToExtractCanvas.current = false
          const image = canvas.toDataURL()
          const isMobileSafari = await checkIsMobileSafari()
          if (isMobileSafari) {
            setImage(image)
          } else {
            const link = document.createElement('a')
            link.download = `${code}.jpeg`
            link.href = image
            link.click()
          }
        })
        .catch(() => {
          isLoadingToExtractCanvas.current = false
        })
    }
  }, [code])
  // const thumbnail = getImage(mbtiTargetResult.data.thumbnail.localFile.childImageSharp.gatsbyImageData)

  return (
    <Layout>
      <Container ref={ref}>
        <Navbar
          showClose
          iconColor={colors.light.$gray900}
          theme={bridge.environment}
          ref={navbarRef}
          showNavigationBg={showNavbarBg}
        />
        <ImageWrapper>
          <ImageArea />
          <FloatingImageWrapper marginTop={assetMarginTop}>
            <ImageArea />
            <HeroImg src={mbtiTargetResult.data.thumbnail.url} />
          </FloatingImageWrapper>
        </ImageWrapper>

        <CardWrapper ref={cardEl}>
          <Card>
            <MarginContainer margin="0 0 1.5rem">
              <ResultTags data={mbtiTargetResult.data} />
            </MarginContainer>

            <MarginContainer>
              <ResultComments data={mbtiTargetResult.data} />
            </MarginContainer>

            <Divider />
            <MarginContainer>
              <ResultRelations data={mbtiTargetResult.data} />
            </MarginContainer>

            {Boolean(mbtiTargetResult.data.remarks?.length) && (
              <>
                <Divider />
                <MarginContainer>
                  <ResultRemarks data={mbtiTargetResult.data} />
                </MarginContainer>
              </>
            )}
            <ButtonsWrapper>
              <ButtonWrapper>
                <KarrotButton>환상의 케미 이웃 만나러 가기</KarrotButton>
              </ButtonWrapper>

              <ButtonWrapper>
                <OutlineWhiteButton onClick={handleClickDownload}>결과 이미지 저장하기</OutlineWhiteButton>
              </ButtonWrapper>

              <RetryButtonWrapper>
                <Link to="/" onClick={handleClickRetryButton} className="mbti-test-retry-button">
                  테스트 다시하기
                </Link>
              </RetryButtonWrapper>
            </ButtonsWrapper>
          </Card>
        </CardWrapper>
      </Container>
      <Portal>
        <DownloadButton onClick={handleClickShare}>나의 유형 결과 공유하기</DownloadButton>
      </Portal>

      <Modal
        open={!!image}
        onClose={() => {
          setImage(null)
        }}>
        <div>
          <DownloadImageGuideMessage>
            <DownloadIconImage src={DownloadIc} />
            <span>아래 이미지를 꾹 눌러 저장하세요</span>
          </DownloadImageGuideMessage>
          {image && <DownloadImage src={image} />}
        </div>
      </Modal>

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

const Container = styled(Base)`
  height: auto;
  min-height: 100vh;
  flex: 1;
`
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
  padding-bottom: 3.5rem;
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
const OutlineWhiteButton = styled.button`
  ${defaultButtonStyles};
  ${clickAfterDimm}

  background: #fff;
  color: ${({ theme }) => theme.colors.gray700};
  border: 1px solid ${({ theme }) => theme.colors.gray300};

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

const KarrotButton = styled(OutlineWhiteButton)`
  ${defaultButtonStyles}
  background: #fff;
  border-color: ${({ theme }) => theme.colors.carrot500};
  color: ${({ theme }) => theme.colors.carrot500};
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
const HeroImg = styled.img`
  max-width: 500px;
  width: 100%;
  display: block;
`
const DownloadButton = styled.button`
  ${clickAfterDimm};

  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  min-height: 3.5rem;
  background: ${({ theme }) => theme.colors.carrot500};
  padding: 0.875rem;
  font-weight: bold;
  font-size: 1.1875rem;
  line-height: 140%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  letter-spacing: -0.03em;
  color: #ffffff;
`

const DownloadImage = styled.img`
  display: block;
  width: 100%;
  pointer-events: auto;
`

const DownloadImageGuideMessage = styled.p`
  margin: 0 0 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-weight: bold;
  font-size: 1rem;
  line-height: 150%;
  letter-spacing: -0.02em;
  color: #ffffff;
`
const DownloadIconImage = styled.img`
  width: 24px;
  display: block;
  margin-right: 0.375rem;
`

export const query = graphql`
  query MBTITargetResultPage($uid: String!) {
    mbtiTargetResult: prismicMbtiTestResult(uid: { eq: $uid }) {
      id
      uid
      data {
        ...ResultTags_data
        ...ResultComments_data
        relations {
          __typename
        }
        summary
        thumbnail {
          alt
          url
          localFile {
            childImageSharp {
              gatsbyImageData(width: 500, formats: [AUTO], layout: FIXED)
            }
          }
        }
        remarks {
          __typename
        }
        ...ResultRemarks_data
        ...ResultRelations_data
      }
      __typename
    }
  }
`

export default MBTITargetResultPage
