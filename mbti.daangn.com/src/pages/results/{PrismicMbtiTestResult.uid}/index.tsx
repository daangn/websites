import * as React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { graphql, Link, PageProps } from 'gatsby'
import { getAccurateAgent } from '@egjs/agent'
import { withPreview } from 'gatsby-source-prismic'

import { clickAfterDimm } from '@src/styles'
import { MBTI_RESULT_LOCALSTORAGE_KEY } from '@src/constants/mbti'
import { useShare } from '@src/hooks/useShare'
import Modal from '@src/components/Modal'
import Portal from '@src/components/Portal'
import DownloadIc from '@src/images/ic_download_outline_m.svg'
import ResultPageView from '@src/components/ResultPage'
import { isValidResult } from '@src/utils'

const checkIsMobileSafari = async () => {
  const agent = await getAccurateAgent()

  if (agent) {
    return agent.browser.webkit && window.innerWidth < 1200
  }
  return false
}

const MBTITargetResultPage = ({
  data: { prismicMbtiTestResult },
  params: { uid: code },
}: PageProps<GatsbyTypes.MBTITargetResultPageQuery>) => {
  if (!prismicMbtiTestResult?.data) {
    throw new Error('There is no mbtiTargetResult')
  }

  const [isUserResult, setIsUserResult] = React.useState(false)

  React.useEffect(() => {
    const result = localStorage.getItem(MBTI_RESULT_LOCALSTORAGE_KEY)
    setIsUserResult(isValidResult(result || ''))
  }, [])

  const handleClickRetryButton = () => {
    localStorage.removeItem(MBTI_RESULT_LOCALSTORAGE_KEY)
  }

  const handleClickShare = useShare()

  const [image, setImage] = React.useState<null | string>(null)

  const handleClickDownload = React.useCallback(async () => {
    const image = `/results/${code}/view.jpeg`
    const isMobileSafari = await checkIsMobileSafari()
    if (isMobileSafari) {
      setImage(image)
    } else {
      const link = document.createElement('a')
      link.download = `${code}.jpeg`
      link.href = image
      link.click()
    }
  }, [code])

  return (
    <ResultPageView data={prismicMbtiTestResult.data}>
      <ButtonsWrapper>
        <ButtonWrapper>
          <KarrotButton>환상의 케미 이웃 만나러 가기</KarrotButton>
        </ButtonWrapper>

        {isUserResult && (
          <ButtonWrapper>
            <OutlineWhiteButton onClick={handleClickDownload}>결과 이미지 저장하기</OutlineWhiteButton>
          </ButtonWrapper>
        )}

        <RetryButtonWrapper>
          <Link to="/" onClick={handleClickRetryButton} className="mbti-test-retry-button">
            테스트 다시하기
          </Link>
        </RetryButtonWrapper>
      </ButtonsWrapper>

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
    </ResultPageView>
  )
}

const ButtonsWrapper = styled.div`
  padding: 1rem 0 3.5rem;
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
    prismicMbtiTestResult(uid: { eq: $uid }) {
      id
      uid
      data {
        ...ResultPageView_prismicMbtiTestResult
      }
    }
  }
`

export default withPreview(MBTITargetResultPage)
