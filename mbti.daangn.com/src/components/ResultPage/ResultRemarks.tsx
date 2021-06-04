import React from 'react'
import styled from '@emotion/styled'
import { graphql } from 'gatsby'

interface Props {
  data: GatsbyTypes.ResultRemarks_dataFragment
}

const ResultRemarks: React.FC<Props> = ({ data: { remarks = [] } }) => {
  return (
    <Base>
      <ul>
        {remarks.map((remark, idx) => (
          <Item key={idx}>
            <TitleWrapper>
              <Bullit />
              <Title>{remark?.remark_name}</Title>
            </TitleWrapper>
            <Description>{remark?.remark_description?.text}</Description>
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
  background: ${({ theme }) => theme.colors.$gray600};
`
const Title = styled.strong`
  font-size: 0.75rem;
  line-height: 150%;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.colors.$gray600};
`
const Description = styled.p`
  font-size: 0.75rem;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.$gray600};
  margin: 0.125rem 0 0;
`

export const fragment = graphql`
  fragment ResultRemarks_data on PrismicMbtiTestResultDataType {
    remarks {
      remark_name
      remark_description {
        text
      }
    }
  }
`

export default ResultRemarks
