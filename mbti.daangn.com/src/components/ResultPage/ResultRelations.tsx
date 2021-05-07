import React from 'react'
import styled from '@emotion/styled'

interface Props {}

const RELATIONS = [
  {
    src: '',
    title: '환상의 케미',
    name: '실속파 최저가 사냥꾼',
    color: '#FF7E36',
  },
  {
    src: '',
    title: '환장하는 케미',
    name: '취향 독고다이',
    color: '#868B94',
  },
]

const ResultRelations: React.FC<Props> = () => {
  return (
    <Base>
      <ul>
        {RELATIONS.map((relation, idx) => (
          <Item key={idx}>
            <Image src={relation.src} />
            <RelationTextWrap>
              <Title color={relation.color}>{relation.title}</Title>
              <Name>{relation.name}</Name>
            </RelationTextWrap>
          </Item>
        ))}
      </ul>
    </Base>
  )
}

const Base = styled.div``
const Item = styled.li`
  display: flex;
  align-items: center;
  & + & {
    margin-top: 1.5rem;
  }
`
const Image = styled.img`
  width: 6rem;
  height: 6rem;
  display: block;
  border-radius: 3rem;
  overflow: hidden;
`
const RelationTextWrap = styled.div`
  flex: 1;
  margin-left: 1rem;
`
const Title = styled.span<{ color: string }>`
  display: block;
  font-weight: bold;
  font-size: 0.875rem;
  line-height: 150%;
  letter-spacing: -0.02em;
  color: ${({ color }) => color};
`
const Name = styled.span`
  font-weight: bold;
  font-size: 1.125rem;
  line-height: 135%;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.colors.gray900};
`

export default ResultRelations
