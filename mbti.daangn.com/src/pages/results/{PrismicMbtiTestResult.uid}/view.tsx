import * as React from 'react'
import { graphql, PageProps } from 'gatsby'

import ResultPageView from '@src/components/ResultPage'

const MBTITargetResultViewPage = ({
  data: { prismicMbtiTestResult },
}: PageProps<GatsbyTypes.MBTITargetResultViewPageQuery>) => {
  if (!prismicMbtiTestResult?.data) {
    throw new Error('There is no mbtiTargetResult')
  }

  return <ResultPageView data={prismicMbtiTestResult.data} preview />
}

export const query = graphql`
  query MBTITargetResultViewPage($uid: String!) {
    prismicMbtiTestResult(uid: { eq: $uid }) {
      id
      uid
      data {
        ...ResultPageView_prismicMbtiTestResult
      }
    }
  }
`

export default MBTITargetResultViewPage
