import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

type Props = {
  // query: GatsbyTypes.ResultList_queryFragment
}

export default function ResultList({ query }: Props) {
  return (
    <ul>
      {/* {query.allTestResult.nodes.map((node) => (
        <li key={node.id}>
          <Link to={node.pagePath as string}>{node.title}</Link>
        </li>
      ))} */}
    </ul>
  )
}

// export const query = graphql`
//   fragment ResultList_query on Query {
//     allTestResult {
//       nodes {
//         id
//         title
//         pagePath: gatsbyPath(filePath: "/results/{TestResult.code}")
//       }
//     }
//   }
// `
