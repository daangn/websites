import * as React from 'react'
import { graphql, PageProps, navigate } from 'gatsby'
import { colors } from '@daangn/design-token'
import styled from '@emotion/styled'
import { css, Global, keyframes } from '@emotion/react'
import { mapAbstractType } from '@cometjs/graphql-utils'
import { withPreview } from 'gatsby-source-prismic'
import { GatsbySeo } from 'gatsby-plugin-next-seo'

import Layout from '@src/components/Layout'
import { Base, clickAfterDimm, PaddingContainer } from '@src/styles'
import Navbar from '@src/components/Navbar'
import { bridge } from '@src/bridge'
import { MBTIValue } from '@src/constants/mbti'
import Analysis from '@src/components/Analysis'
import { useQuestionNumberWithRoute } from '@src/hooks/useQuestionNumberWithRoute'
import { useReplaceToResultPage } from '@src/hooks/useReplaceToResultPage'
import { ReactComponent as Num1 } from '@src/images/numbers/img_num_01.svg'
import { ReactComponent as Num2 } from '@src/images/numbers/img_num_02.svg'
import { ReactComponent as Num3 } from '@src/images/numbers/img_num_03.svg'
import { ReactComponent as Num4 } from '@src/images/numbers/img_num_04.svg'
import { ReactComponent as Num5 } from '@src/images/numbers/img_num_05.svg'
import { ReactComponent as Num6 } from '@src/images/numbers/img_num_06.svg'
import { ReactComponent as Num7 } from '@src/images/numbers/img_num_07.svg'
import { ReactComponent as Num8 } from '@src/images/numbers/img_num_08.svg'
import { ReactComponent as Num9 } from '@src/images/numbers/img_num_09.svg'
import { ReactComponent as Num10 } from '@src/images/numbers/img_num_10.svg'
import { ReactComponent as Num11 } from '@src/images/numbers/img_num_11.svg'
import { ReactComponent as Num12 } from '@src/images/numbers/img_num_12.svg'
import AnswerItem from '@src/components/AnswerItem'

const Numbers = [Num1, Num2, Num3, Num4, Num5, Num6, Num7, Num8, Num9, Num10, Num11, Num12]

function MBTIQuestionPage({ data: { prismicMbtiTestQuestion } }: PageProps<GatsbyTypes.MBTIQuestionPageQuery>) {
  if (!prismicMbtiTestQuestion?.data) {
    throw new Error('There is no data')
  }
  const totalCount = prismicMbtiTestQuestion.data.body.length

  const { idx, push } = useQuestionNumberWithRoute()

  const isLast = idx === totalCount - 1

  const { show: visible } = useReplaceToResultPage()
  const [selectedAnswer, setSelectedAnswer] = React.useState<null | MBTIValue>(null)
  const [showAnalysis, setShowAnalysis] = React.useState(false)

  const [allMbtiAnswers, setAllMbtiAnswers] = React.useState<MBTIValue[]>([])

  const currentQuestionBody = prismicMbtiTestQuestion.data.body[idx]

  const handleReplace = React.useCallback(() => {
    navigate(`/`, {
      replace: true,
    })
  }, [])

  const handleAnimationEnd = () => {
    if (selectedAnswer) {
      if (!isLast) {
        selectedAnswer && push({ idx: idx + 1 }, '')
      } else {
        setShowAnalysis(true)
      }
    }
  }

  const handleSelectAnswer = React.useCallback(
    (selectAnswer: MBTIValue) => {
      setSelectedAnswer(selectAnswer)
      setAllMbtiAnswers((prevState) => [...prevState.slice(0, idx), selectAnswer])
    },
    [idx]
  )

  React.useEffect(() => {
    if (!currentQuestionBody) {
      handleReplace()
    }
  }, [currentQuestionBody, handleReplace])

  React.useEffect(
    () => () => {
      setSelectedAnswer(null)
    },
    [idx]
  )

  const NumberComponent = Numbers[idx]

  return (
    <>
      {visible && currentQuestionBody ? (
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
                  <NumberAssetWraper>{NumberComponent && <NumberComponent />}</NumberAssetWraper>

                  <Title>{currentQuestionBody.primary?.question}</Title>
                  <ul>
                    {mapAbstractType(currentQuestionBody, {
                      PrismicMbtiTestQuestionBodyIe: (questionBody) => (
                        <>
                          <AnswerItem
                            onSelect={handleSelectAnswer}
                            selected={selectedAnswer}
                            target="I"
                            text={questionBody.primary?.answer_i?.text}
                          />
                          <AnswerItem
                            onSelect={handleSelectAnswer}
                            selected={selectedAnswer}
                            target="E"
                            text={questionBody.primary?.answer_e?.text}
                          />
                        </>
                      ),
                      PrismicMbtiTestQuestionBodyNs: (questionBody) => (
                        <>
                          <AnswerItem
                            onSelect={handleSelectAnswer}
                            selected={selectedAnswer}
                            target="N"
                            text={questionBody.primary?.answer_n?.text}
                          />
                          <AnswerItem
                            onSelect={handleSelectAnswer}
                            selected={selectedAnswer}
                            target="S"
                            text={questionBody.primary?.answer_s?.text}
                          />
                        </>
                      ),
                      PrismicMbtiTestQuestionBodyFt: (questionBody) => (
                        <>
                          <AnswerItem
                            onSelect={handleSelectAnswer}
                            selected={selectedAnswer}
                            target="F"
                            text={questionBody.primary?.answer_f?.text}
                          />
                          <AnswerItem
                            onSelect={handleSelectAnswer}
                            selected={selectedAnswer}
                            target="T"
                            text={questionBody.primary?.answer_t?.text}
                          />
                        </>
                      ),
                      PrismicMbtiTestQuestionBodyPj: (questionBody) => (
                        <>
                          <AnswerItem
                            onSelect={handleSelectAnswer}
                            selected={selectedAnswer}
                            target="P"
                            text={questionBody.primary?.answer_p?.text}
                          />
                          <AnswerItem
                            onSelect={handleSelectAnswer}
                            selected={selectedAnswer}
                            target="J"
                            text={questionBody.primary?.answer_j?.text}
                          />
                        </>
                      ),
                    })}
                  </ul>
                </ContentWrapper>
                <ProgressWrapper>
                  <ProgressText>
                    {idx + 1}/{totalCount}
                  </ProgressText>
                  <ProgressBarWrapper>
                    <ProgressBar totalCount={totalCount} currentIndex={idx + 1} />
                  </ProgressBarWrapper>
                </ProgressWrapper>
              </InnerContainer>
            </Base>
          )}
          <Global
            styles={css`
              body {
                background: #fff;
              }
            `}
          />

          {isLast && showAnalysis && <Analysis allMbtiAnswers={allMbtiAnswers} />}
        </Layout>
      ) : null}

      <GatsbySeo noindex />
    </>
  )
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
const NumberAssetWraper = styled.span`
  width: 1.875rem;
  height: 1.875rem;
  display: block;
`

export const query = graphql`
  query MBTIQuestionPage {
    prismicMbtiTestQuestion {
      data {
        body {
          __typename
          ... on PrismicMbtiTestQuestionBodyIe {
            primary {
              question
              answer_i {
                text
              }
              answer_e {
                text
              }
            }
          }
          ... on PrismicMbtiTestQuestionBodyNs {
            primary {
              question
              answer_n {
                text
              }
              answer_s {
                text
              }
            }
          }
          ... on PrismicMbtiTestQuestionBodyFt {
            primary {
              question
              answer_f {
                text
              }
              answer_t {
                text
              }
            }
          }
          ... on PrismicMbtiTestQuestionBodyPj {
            primary {
              question
              answer_p {
                text
              }
              answer_j {
                text
              }
            }
          }
        }
      }
    }
  }
`

export default withPreview(MBTIQuestionPage)
