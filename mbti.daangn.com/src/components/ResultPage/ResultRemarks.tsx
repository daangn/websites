import React from 'react'
import styled from '@emotion/styled'

interface Props {}

const REMARKS = [
  {
    title: '득템',
    description: '얻을 득(得)자와 영어의 아이템( item )을 합성한 말로, 좋은 물건을 손에 넣었다는 뜻',
  },
  {
    title: '부캐',
    description: '평소의 모습이 아닌 새로운 모습이나 캐릭터로 행동하는 대상을 가리키는 말',
  },
]

const ResultRemarks: React.FC<Props> = () => {
  return (
    <Base>
      <ul>
        {REMARKS.map((remark, idx) => (
          <Item key={idx}>
            <TitleWrapper>
              <Bullit />
              <Title>{remark.title}</Title>
            </TitleWrapper>
            <Description>{remark.description}</Description>
          </Item>
        ))}
      </ul>
    </Base>
  )
}

const Base = styled.div``
const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
`
const Item = styled.li`
  & + & {
    margin-top: 1rem;
  }
`
const Bullit = styled.span`
  margin-right: 0.5rem;
  width: 0.25rem;
  height: 0.25rem;
  border-radius: 0.25rem;
  background: ${({ theme }) => theme.colors.gray600};
`
const Title = styled.strong`
  font-size: 0.75rem;
  line-height: 150%;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.colors.gray600};
`
const Description = styled.p`
  font-size: 0.75rem;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.gray600};
  margin: 0.125rem 0 0;
`

export default ResultRemarks
