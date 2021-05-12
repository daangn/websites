import React from 'react'
import { PreviewStoreProvider } from 'gatsby-source-prismic'

import './src/styles/global.css'

export default ({ element }) => {
  return <PreviewStoreProvider>{element}</PreviewStoreProvider>
}
