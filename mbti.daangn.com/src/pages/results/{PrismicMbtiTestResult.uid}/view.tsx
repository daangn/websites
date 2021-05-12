import * as React from 'react'
import { graphql, PageProps } from 'gatsby'
import { css, Global } from '@emotion/react'
import { GatsbySeo } from 'gatsby-plugin-next-seo'

import ResultPageView from '@src/components/ResultPage'

const MBTITargetResultViewPage = ({
  data: { prismicMbtiTestResult },
}: PageProps<GatsbyTypes.MBTITargetResultViewPageQuery>) => {
  if (!prismicMbtiTestResult?.data) {
    throw new Error('There is no mbtiTargetResult')
  }

  return (
    <ResultPageView data={prismicMbtiTestResult.data} preview>
      <Global
        styles={css`
          @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;700&display=swap');
          @font-face {
            font-family: 'Noto Color Emoji';
            src: url('/fonts/noto/NotoColorEmoji.ttf') format('truetype');
          }
          * {
            font-family: 'Noto Sans KR', sans-serif, 'Noto Color Emoji';
          }
        `}
      />
      <GatsbySeo noindex />
    </ResultPageView>
  )
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
