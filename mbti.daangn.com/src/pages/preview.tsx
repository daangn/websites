import * as React from 'react'
import { withPreviewResolver } from 'gatsby-source-prismic'

import { linkResolver } from '@src/linkResolver'
import Layout from '@src/components/Layout'
import ErrorPage from '@src/components/Error'

const Preview: React.FC = () => {
  return (
    <Layout>
      <ErrorPage />
    </Layout>
  )
}

export default withPreviewResolver(Preview, {
  repositoryName: 'karrot',
  linkResolver,
})
