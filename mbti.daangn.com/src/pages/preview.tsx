import * as React from 'react'
import styled from '@emotion/styled'
import { withPreviewResolver } from 'gatsby-source-prismic'

import { linkResolver } from '@src/linkResolver'

const Preview: React.FC = () => {
  return <Base></Base>
}

const Base = styled.div``

export default withPreviewResolver(Preview, {
  repositoryName: 'karrot',
  linkResolver,
})
