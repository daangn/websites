import * as React from 'react'
import styled from '@emotion/styled'
import { colors } from '@daangn/design-token'
import { css, Global } from '@emotion/react'
import throttle from 'lodash.throttle'
import debounce from 'lodash.debounce'
import { graphql } from 'gatsby'
import { getImage, GatsbyImage } from 'gatsby-plugin-image'

import Layout from '@src/components/Layout'
import { Base } from '@src/styles'
import Navbar, { NavbarRef } from '@src/components/Navbar'
import { bridge } from '@src/bridge'
import ResultTags from '@src/components/ResultPage/ResultTags'
import ResultComments from '@src/components/ResultPage/ResultComments'
import ResultRelations from '@src/components/ResultPage/ResultRelations'
import ResultRemarks from '@src/components/ResultPage/ResultRemarks'

interface Props {
  data: GatsbyTypes.ResultPageView_prismicMbtiTestResultFragment
  preview?: boolean
}

const ResultPageView: React.FC<Props> = ({ data, children, preview }) => {
  const navbarRef = React.useRef<NavbarRef>(null)
  const cardEl = React.useRef<HTMLDivElement>(null)
  const [showNavbarBg, setShowNavbarBg] = React.useState(false)

  React.useEffect(() => {
    let navbarHeight = navbarRef.current?.getHeight() || 0

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
      navbarHeight = navbarRef.current?.getHeight() || 0
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

  const thumbnail = data.thumbnail.localFile?.childImageSharp?.gatsbyImageData
    ? getImage(data.thumbnail.localFile?.childImageSharp?.gatsbyImageData)
    : null

  return (
    <Layout>
      <Container>
        {preview ? (
          <Margin />
        ) : (
          <Navbar
            showClose
            iconColor={colors.light.$gray900}
            theme={bridge.environment}
            ref={navbarRef}
            showNavigationBg={showNavbarBg}
          />
        )}

        <ImageWrapper>
          <ImageArea />
        </ImageWrapper>
        <FloatingImageWrapper preview={preview}>
          <ImageArea />
          {thumbnail ? (
            <GatsbyImage loading="eager" image={thumbnail} objectFit="contain" alt={data.summary || ''} />
          ) : (
            <HeroImg src={data.thumbnail.url} />
          )}
        </FloatingImageWrapper>

        <CardWrapper ref={cardEl}>
          <Card>
            <MarginContainer margin="0 0 1.5rem">
              <ResultTags data={data} />
            </MarginContainer>

            <MarginContainer>
              <ResultComments data={data} />
            </MarginContainer>

            <Divider />
            <MarginContainer>
              <ResultRelations data={data} />
            </MarginContainer>

            {Boolean(data.remarks?.length) && (
              <>
                <Divider />
                <MarginContainer>
                  <ResultRemarks data={data} />
                </MarginContainer>
              </>
            )}

            {children}
          </Card>
        </CardWrapper>
      </Container>

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
  min-height: 100%;
  flex: 1 0 auto;
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
const FloatingImageWrapper = styled(ImageWrapper)<{ preview?: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  ${({ preview }) => {
    switch (bridge.environment) {
      case 'Cupertino':
        return css`
          transform: translate(0, ${preview ? '1rem' : '2.75rem'});
        `
      default:
        return css`
          transform: translate(0, ${preview ? '1rem' : '3.5rem'});
        `
    }
  }};
  z-index: -1;

  * {
    transition: opacity 200ms !important;
  }
  .gatsby-image-wrapper {
    display: block;
    width: 100%;
    > div:first-of-type {
      width: 100% !important;
      max-width: 100% !important;
    }
  }
`
const ImageArea = styled.div`
  margin-top: 100%;
`
const CardWrapper = styled.div`
  position: relative;
  margin-top: -0.5rem;
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
`
const Card = styled.div`
  flex: 1 0 auto;
  background: #ffffff;
  box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.04);
  border-top-left-radius: 0.875rem;
  border-top-right-radius: 0.875rem;
  padding: 1.5rem 1.5rem 3rem;
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

const HeroImg = styled.img`
  max-width: 500px;
  width: 100%;
  display: block;
`

const Margin = styled.div`
  height: 1rem;
`

export const fragment = graphql`
  fragment ResultPageView_prismicMbtiTestResult on PrismicMbtiTestResultDataType {
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
          gatsbyImageData(
            width: 750
            formats: [WEBP, AVIF, AUTO]
            layout: CONSTRAINED
            placeholder: BLURRED
            blurredOptions: { width: 50 }
          )
        }
      }
    }
    remarks {
      __typename
    }
    ...ResultRemarks_data
    ...ResultRelations_data
  }
`

export default ResultPageView
