import React, { useCallback } from 'react'
import styled from '@emotion/styled'
import { useRecoilValue } from 'recoil'
import { css, Global, keyframes } from '@emotion/react'
import { colors } from '@daangn/design-token'
import { navigate } from 'gatsby'

import { mbtiAnswersAtom } from '@src/store/mbti'
import { Base } from '@src/styles'
import { getMBTIResult, MBTI_RESULT_LOCALSTORAGE_KEY } from '@src/constants/mbti'

import Url from '!!url-loader?modules!@src/images/img_analysis_carrot.png'

const Analysis: React.FC = () => {
  const [spot, setSpot] = React.useState('')
  const allMBTIAnswers = useRecoilValue(mbtiAnswersAtom)
  const [willUnmount, setWillUnmount] = React.useState(false)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setSpot((prev) => (prev.length > 2 ? '' : prev + '.'))
    }, 250)
    const timer = setTimeout(() => {
      clearInterval(interval)
      setWillUnmount(true)
    }, 2500)
    return () => {
      clearInterval(interval)
      clearTimeout(timer)
    }
  }, [allMBTIAnswers])

  const handleAnimationEnd = useCallback(() => {
    if (willUnmount) {
      const result = getMBTIResult(allMBTIAnswers).toLowerCase()
      localStorage.setItem(MBTI_RESULT_LOCALSTORAGE_KEY, result)
      navigate(`/results/${result}/`)
    }
  }, [allMBTIAnswers, willUnmount])

  return (
    <Container outro={willUnmount} onAnimationEnd={handleAnimationEnd}>
      <Img src={Url} alt="" />

      <Paragraph>
        당신의 씀씀이를
        <br />
        분석하고 있어요{spot}
      </Paragraph>
      <Global
        styles={css`
          body {
            background-color: ${willUnmount ? '#F4F1EE' : colors.light.$carrot500};
            transition: background-color 250ms;
          }
        `}
      />
    </Container>
  )
}

const FadeIn = keyframes`
  from {
    opacity: 0;
  } to {
    opacity: 1;
  }
`
const FadeOut = keyframes`
  from {
    opacity: 1;
  } to {
    opacity: 0;
  }
`
const Container = styled(Base)<{ outro: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: transparent;
  justify-content: center;
  align-items: center;
  padding: 0 3rem;
  animation: 250ms ${({ outro }) => (outro ? FadeOut : FadeIn)} forwards;
`
const Paragraph = styled.p`
  font-weight: bold;
  font-size: 1.5rem;
  line-height: 125%;
  text-align: center;
  letter-spacing: -0.03em;
  color: #ffffff;
  margin: 1rem 0 0;
`
const Img = styled.img`
  width: 100%;
  max-width: 400px;
  display: block;
`

export default Analysis
