import * as React from 'react'
import { graphql, PageProps, navigate } from 'gatsby'
import { useRecoilValue, useResetRecoilState, useSetRecoilState } from 'recoil'
import { colors } from '@daangn/design-token'
import styled from '@emotion/styled'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { keyframes } from '@emotion/react'

import Layout from '@src/components/Layout'
import { hasValidAnswerSelector, mbtiAnswersAtom, selectedAnswerByIndexSelector } from '@src/store/mbti'
import { Base, clickAfterDimm, PaddingContainer } from '@src/styles'
import Navbar from '@src/components/Navbar'
import { bridge } from '@src/bridge'
import { MBTIValue } from '@src/constants/mbti'
import Analysis from '@src/components/Analysis'
import { useReplaceToResultPage } from '@src/hooks/useReplaceToResultPage'

export default function MBTIQuestionPage({
  data: {
    mbtiQuestionNode,
    allMbtiQuestionNode: { totalCount },
  },
}: PageProps<GatsbyTypes.MBTIQuestionPageQuery>) {
  const { answers, idx, imageFile, title, isLast } = mbtiQuestionNode!
  const { show: visible } = useReplaceToResultPage()
  const [selectedAnswer, setSelectedAnswer] = React.useState<null | MBTIValue>(null)
  const [showAnalysis, setShowAnalysis] = React.useState(false)
  const isValid = useRecoilValue(hasValidAnswerSelector(idx - 1))
  const setGlobalSelectedAnswer = useSetRecoilState(selectedAnswerByIndexSelector(idx - 1))
  const resetAnswers = useResetRecoilState(mbtiAnswersAtom)

  const handleReplace = React.useCallback(() => {
    navigate(`/`, {
      replace: true,
    })
    resetAnswers()
  }, [resetAnswers])

  const handleAnimationEnd = React.useCallback(() => {
    if (selectedAnswer) {
      if (!isLast) {
        selectedAnswer && navigate(`/q/${idx + 1}/`)
      } else {
        setShowAnalysis(true)
      }
    }
  }, [isLast, selectedAnswer, idx])

  React.useEffect(() => {
    selectedAnswer && setGlobalSelectedAnswer(selectedAnswer)
  }, [selectedAnswer, setGlobalSelectedAnswer])

  React.useEffect(() => {
    if (!isValid) {
      handleReplace()
    }
  }, [isValid, handleReplace])

  return visible ? (
    <Layout>
      {!showAnalysis && (
        <Base>
          <Navbar
            iconColor={colors.light.$gray900}
            theme={bridge.environment}
            appendRight={<ResetButton onClick={handleReplace}>처음으로</ResetButton>}
          />
          <InnerContainer>
            <ContentWrapper willUnmount={!!selectedAnswer} onAnimationEnd={handleAnimationEnd}>
              {imageFile?.childImageSharp && (
                <GatsbyImage
                  image={getImage(imageFile?.childImageSharp.gatsbyImageData)!}
                  alt={`${idx} 번 문제`}
                  className="number-asset"
                />
              )}
              <Title>{title}</Title>
              <ul>
                {answers.map((answer) => (
                  <AnswerItem key={answer.target}>
                    <AnswerItemButton
                      selected={answer.target === selectedAnswer}
                      onClick={() => {
                        if (!selectedAnswer) {
                          setSelectedAnswer(answer.target)
                        }
                      }}>
                      {answer.text}
                    </AnswerItemButton>
                  </AnswerItem>
                ))}
              </ul>
            </ContentWrapper>
            <ProgressWrapper>
              <ProgressText>
                {idx}/{totalCount}
              </ProgressText>
              <ProgressBarWrapper>
                <ProgressBar totalCount={totalCount} currentIndex={idx} />
              </ProgressBarWrapper>
            </ProgressWrapper>
          </InnerContainer>
        </Base>
      )}
      {isLast && showAnalysis && <Analysis />}
    </Layout>
  ) : null
}

const ResetButton = styled.button`
  ${clickAfterDimm};
  padding: 0.5rem;
  font-size: 1rem;
  line-height: 150%;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.colors.gray900};
`
const InnerContainer = styled(PaddingContainer)`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 0.75rem;
  padding-bottom: 3rem;
`

const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0,1rem,0);
  }
  to {
    opacity: 1;
    transform: translate3d(0,0,0);
  }
`
const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: translate3d(0,0,0);
  }
  to {
    opacity: 0;
    transform: translate3d(0,1rem,0);
  }
  
`
const ContentWrapper = styled.div<{ willUnmount: boolean }>`
  flex: 1;
  animation: 350ms ${({ willUnmount }) => (willUnmount ? fadeOut : fadeUp)} 0ms forwards;
  opacity: 0;

  .number-asset > div {
    display: none;
  }
`
const Title = styled.h1`
  font-weight: bold;
  font-size: 1.25rem;
  line-height: 130%;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.colors.gray900};
  margin: 0.5rem 0 3rem;
`

const AnswerItem = styled.li`
  margin-bottom: 1rem;
  &:last-of-type {
    margin: 0;
  }
`
const AnswerItemButton = styled.button<{ selected?: boolean }>`
  width: 100%;
  text-align: start;
  border: 1px solid ${({ theme, selected }) => (selected ? theme.colors.carrot500 : theme.colors.gray200)};
  box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.1);
  border-radius: 0.875rem;
  padding: 1.5rem;
  cursor: pointer;
  display: block;
  font-weight: bold;
  font-size: 1rem;
  line-height: 150%;
  letter-spacing: -0.02em;
  background: ${({ theme, selected }) => (selected ? theme.colors.carrot500 : '#fff')};
  color: ${({ theme, selected }) => (selected ? '#fff' : theme.colors.gray700)};
  transition: all 125ms;
`
const ProgressWrapper = styled.div``
const ProgressText = styled.p`
  text-align: right;
  font-weight: bold;
  font-size: 0.875rem;
  line-height: 130%;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.colors.carrot500};
`
const ProgressBarWrapper = styled.div`
  height: 0.5rem;
  background: ${({ theme }) => theme.colors.carrot50};
  border-radius: 3.75rem;
  position: relative;
  overflow: hidden;
`

interface ProgressBarProps {
  currentIndex: number
  totalCount: number
}
const progressAnimation = ({ currentIndex, totalCount }: ProgressBarProps) => keyframes`
  0% {
    transform: translateX(-${(100 - ((currentIndex - 1) / totalCount) * 100).toFixed(2)}%);
  }
  100% {
    transform: translateX(-${(100 - (currentIndex / totalCount) * 100).toFixed(2)}%);
  }
`

const ProgressBar = styled.span<ProgressBarProps>`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  height: 100%;
  animation: 450ms ${progressAnimation} 0ms forwards;
  border-radius: 3.75rem;
  background: ${({ theme }) => theme.colors.carrot500};
`

export const query = graphql`
  query MBTIQuestionPage($id: String!) {
    mbtiQuestionNode(id: { eq: $id }) {
      title
      answers {
        target
        text
      }
      idx
      isLast
      imageFile {
        childImageSharp {
          gatsbyImageData(width: 30, formats: [AUTO, WEBP, AVIF], layout: FIXED)
        }
      }
    }
    allMbtiQuestionNode {
      totalCount
    }
  }
`
