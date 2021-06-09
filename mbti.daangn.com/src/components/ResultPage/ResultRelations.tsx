import React from 'react'
import styled from '@emotion/styled'
import { graphql } from 'gatsby'

interface Props {
  data: GatsbyTypes.ResultRelations_dataFragment
}

const ResultRelations: React.FC<Props> = ({ data: { relations } }) => {
  return (
    <Base>
      <ul>
        {relations.map(
          (relation, idx) =>
            relation && (
              <Item key={idx}>
                <Image src={relation.relation_entry?.document?.data?.avatar?.url || ''} />
                <RelationTextWrap>
                  <Title color={relation.relation_color!}>{relation.relation_type}</Title>
                  <Name>{relation.relation_entry?.document?.data?.summary}</Name>
                </RelationTextWrap>
              </Item>
            )
        )}
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
  flex: 1 0 auto;
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
  color: ${({ theme }) => theme.colors.$gray900};
`

export const fragments = graphql`
  fragment ResultRelations_data on PrismicMbtiTestResultDataType {
    relations {
      relation_type
      relation_color
      relation_entry {
        id
        url
        document {
          ... on PrismicMbtiTestResult {
            id
            data {
              avatar {
                dimensions {
                  width
                  height
                }
                url
              }
              summary
            }
          }
        }
      }
    }
  }
`

export default ResultRelations
