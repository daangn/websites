import * as React from 'react'
import styled from '@emotion/styled'
import { css, Global, keyframes } from '@emotion/react'
import { StaticImage } from 'gatsby-plugin-image'
import { colors } from '@daangn/design-token'
import { graphql, Link, PageProps } from 'gatsby'
import { GatsbySeo } from 'gatsby-plugin-next-seo'

import Layout from '@src/components/Layout'
import { clickAfterDimm, Base, PaddingContainer } from '@src/styles'
import Navbar from '@src/components/Navbar'
import { bridge } from '@src/bridge'
import { useShare } from '@src/hooks/useShare'
import { useReplaceToResultPage } from '@src/hooks/useReplaceToResultPage'
import Participants from '@src/components/Intro/Participants'
import { useParticipants } from '@src/hooks/useParticipants'

const MBTIIntroPage: React.FC<PageProps<GatsbyTypes.MBTIIntroPageQuery>> = ({ data: { prismicMbtiIntro } }) => {
  const { show } = useReplaceToResultPage()
  const handleClickShare = useShare()
  const [participants, dispatch] = useParticipants()

  const handleClickStart = () => {
    dispatch({ type: 'req_post' })
  }
  return (
    <Layout>
      <Global
        styles={css`
          html {
            background: #f4f1ee;
          }
        `}
      />
      <GatsbySeo
        title={prismicMbtiIntro?.data?.title}
        description={prismicMbtiIntro?.data?.description}
        openGraph={{
          images: prismicMbtiIntro?.data?.opengraph_image
            ? [
                {
                  ...prismicMbtiIntro.data.opengraph_image.dimensions,
                  url: prismicMbtiIntro.data.opengraph_image.url,
                },
              ]
            : [],
          title: prismicMbtiIntro?.data?.title,
          description: prismicMbtiIntro?.data?.description,
        }}
      />
      <Container show={show}>
        <Navbar iconColor={colors.light.$gray900} theme={bridge.environment} showClose />
        <InnerContainer>
          <Title>
            <StaticImage
              src="../images/img_main_text.png"
              width={936}
              placeholder="none"
              height={378}
              formats={['auto']}
              alt="성격으로 알아보는 당신의 씀씀이 테스트"
              style={{ width: '100%', maxWidth: 500 }}
            />
          </Title>
          <IllustWrapper>
            <StaticImage
              src="../images/img_main_illust.png"
              width={936}
              height={744}
              placeholder="none"
              formats={['auto']}
              alt="당근마켓"
              style={{ width: '100%', maxWidth: 500 }}
            />
          </IllustWrapper>

          <Bottom>
            <Participants participants={participants} />

            <Link to="/q/" className="karrot-button" onClick={handleClickStart}>
              테스트 시작하기
            </Link>
            <WhiteButton onClick={handleClickShare}>테스트 공유하기</WhiteButton>
          </Bottom>
        </InnerContainer>
      </Container>
    </Layout>
  )
}
const Container = styled(Base)<{ show: boolean }>`
  visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
`

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
`
const Title = styled(ImageWrapper)`
  margin: 0.25rem 0;
`
const InnerContainer = styled(PaddingContainer)`
  flex: 1;
  display: flex;
  flex-direction: column;
`
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`
const buttonStyle = css`
  ${clickAfterDimm};
  border-radius: 80px;
  width: 100%;
  min-height: 3.5rem;
  font-weight: bold;
  font-size: 1.25rem;
  line-height: 125%;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: -0.03em;
  opacity: 0;
  padding: 0.9375rem;
`
const WhiteButton = styled.button`
  ${buttonStyle};
  background: #ffffff;
  color: ${({ theme }) => theme.colors.carrot500};
  animation: 300ms ${fadeIn} 250ms forwards;
`
const Bottom = styled.div`
  padding: 0.75rem 0 2rem;

  .karrot-button {
    ${buttonStyle};
    background: ${({ theme }) => theme.colors.carrot500};
    color: #fff;
    box-shadow: 0 0.25rem 0.625rem rgba(255, 138, 61, 0.4);
    margin: 0 0 1rem;
    animation: 300ms ${fadeIn} 150ms forwards;
  }
`
const IllustWrapper = styled(ImageWrapper)`
  margin: 0 0 0.875rem;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const query = graphql`
  query MBTIIntroPage {
    prismicMbtiIntro {
      data {
        title
        description
        opengraph_image {
          url
          dimensions {
            width
            height
          }
        }
      }
    }
  }
`

export default MBTIIntroPage
