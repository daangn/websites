import React from 'react'
import styled from '@emotion/styled'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import { colors } from '@daangn/design-token'

import { bridge } from '@src/bridge'

import Navbar from './Navbar'

const ErrorPage: React.FC = () => {
  return (
    <Base>
      <Navbar theme={bridge.environment} iconColor={colors.light.$gray900} showClose showNavigationBg />
      <ErrorBase>
        <Contents>
          <IconWrapper>
            <StaticImage
              src="../images/img_detail_view_empty.png"
              alt="놀란 당근이"
              width={110}
              height={201}
              placeholder="none"
            />
          </IconWrapper>
          <Title>해당 페이지로 접근이 불가능해요.</Title>
          <BackButtonWrapper>
            <Link to="/" className="move-to-intro">
              테스트 하러가기
            </Link>
          </BackButtonWrapper>
        </Contents>
      </ErrorBase>
    </Base>
  )
}

const Base = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  background: #fff;
`
const ErrorBase = styled.div`
  flex: 1;
  width: 100%;
  background: #fff;
  padding: 0 0 1.1875rem;
  display: flex;
  align-items: center;
`

const Contents = styled.div`
  flex: 1;
  width: 100%;
`

const Title = styled.p`
  font-size: 1rem;
  line-height: 1.375rem;
  letter-spacing: -0.02em;
  color: #868e96;
  text-align: center;
  margin: 1.5rem 0 1rem;
`
const BackButtonWrapper = styled.div`
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  padding: 0 1rem 0;

  .move-to-intro {
    width: 10rem;
    min-height: 2.5rem;
    background: #ffffff;
    border: 1px solid #dde2e6;
    border-radius: 0.3125rem;
    font-weight: bold;
    font-size: 1rem;
    letter-spacing: -0.02em;
    color: #212529;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    transition: background-color 150ms;
    background: #ffffff;

    :hover {
      background-color: rgba(0, 0, 0, 0.03);
    }
  }
`
const IconWrapper = styled.div`
  display: flex;
  justify-content: center;

  * {
    transition: opacity 100ms !important;
  }
`

export default ErrorPage
