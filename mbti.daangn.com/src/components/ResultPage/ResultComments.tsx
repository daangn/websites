import React from 'react'
import styled from '@emotion/styled'
import { graphql } from 'gatsby'

interface Props {
  data: GatsbyTypes.ResultComments_dataFragment
}

const ResultComments: React.FC<Props> = ({ data: { comments = [] } }) => {
  return (
    <Base>
      <ul>
        {comments.map((comment, idx) => (
          <Item key={idx}>
            <BullitWrapper>
              <Bullit />
            </BullitWrapper>
            <P>{comment?.text}</P>
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
  flex: 1 0 auto;
  margin: 0;
  font-size: 1rem;
  line-height: 150%;
  align-items: center;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.colors.gray900};
`

export const fragment = graphql`
  fragment ResultComments_data on PrismicMbtiTestResultDataType {
    comments {
      text
    }
  }
`

export default ResultComments
