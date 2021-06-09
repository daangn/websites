import React from 'react'
import styled from '@emotion/styled'
import { graphql } from 'gatsby'

interface Props {
  data: GatsbyTypes.ResultTags_dataFragment
}

const ResultTags: React.FC<Props> = ({ data: { tags = [] } }) => {
  return (
    <Base>
      <List>
        {tags.map((tag, idx) => (
          <Item key={idx}># {tag?.tag_name}</Item>
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
    background: ${({ theme }) => theme.colors.$blue50};
    color: #2db0cb;
  }
  :nth-of-type(3n - 1) {
    background: ${({ theme }) => theme.colors.$green50};
    color: ${({ theme }) => theme.colors.$green500};
  }
  :nth-of-type(3n - 2) {
    background: ${({ theme }) => theme.colors.$carrot50};
    color: ${({ theme }) => theme.colors.$carrot600};
  }
`

export const fragment = graphql`
  fragment ResultTags_data on PrismicMbtiTestResultDataType {
    tags {
      tag_name
    }
  }
`

export default ResultTags
