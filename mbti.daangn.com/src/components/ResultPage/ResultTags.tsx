import React from 'react'
import styled from '@emotion/styled'

interface Props {}

const TAGS = ['우리동네 해결사', '남을 위한 플렉스', '고민상담소']

const ResultTags: React.FC<Props> = () => {
  return (
    <Base>
      <List>
        {TAGS.map((item, idx) => (
          <Item key={idx}># {item}</Item>
        ))}
      </List>
    </Base>
  )
}

const Base = styled.div``
const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`
const Item = styled.li`
  margin: 0 0.5rem 0.5rem 0;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-weight: bold;
  font-size: 0.875rem;
  line-height: 150%;
  letter-spacing: -0.02em;
  white-space: nowrap;

  :nth-of-type(3n) {
    background: ${({ theme }) => theme.colors.blue50};
    color: #2db0cb;
  }
  :nth-of-type(3n - 1) {
    background: ${({ theme }) => theme.colors.green50};
    color: ${({ theme }) => theme.colors.green500};
  }
  :nth-of-type(3n - 2) {
    background: ${({ theme }) => theme.colors.carrot50};
    color: ${({ theme }) => theme.colors.carrot600};
  }
`

export default ResultTags
