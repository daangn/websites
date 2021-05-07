import React from 'react'
import styled from '@emotion/styled'

interface Props {}

const COMMENTS = [
  '세상 물정 모르는 당신! 버스비가 얼마인지 알고 계시나요?',
  '절약 성향이 강하고 이것 저것 똑부러지게 잘 챙겨서 생활력도 좋아요.',
  '하지만 종종 과시하고 싶은 마음이 들면 씀씀이가 갑자기 커질 때도 있어요. 가지고 싶은 건 가져야하죠.',
  '내가 경험한 좋은 것을 주변에 알리고 추천하는 걸 좋아해요.',
  '친절한 마음으로 이웃에게 현실적인 도움을 주는 따뜻한 오지라퍼!🧡',
]

const ResultComments: React.FC<Props> = () => {
  return (
    <Base>
      <ul>
        {COMMENTS.map((comment, idx) => (
          <Item key={idx}>
            <BullitWrapper>
              <Bullit />
            </BullitWrapper>
            <P>{comment}</P>
          </Item>
        ))}
      </ul>
    </Base>
  )
}

const Base = styled.div``
const Item = styled.li`
  display: flex;
  & + & {
    margin-top: 0.75rem;
  }
`
const BullitWrapper = styled.span`
  height: 1.5rem;
  display: flex;
  align-items: center;
  margin: 0 0.5rem 0 0;
`
const Bullit = styled.span`
  width: 0.25rem;
  height: 0.25rem;
  border-radius: 0.25rem;
  background: ${({ theme }) => theme.colors.carrot400};
`
const P = styled.p`
  flex: 1;
  margin: 0;
  font-size: 1rem;
  line-height: 150%;
  align-items: center;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.colors.gray900};
`

export default ResultComments
