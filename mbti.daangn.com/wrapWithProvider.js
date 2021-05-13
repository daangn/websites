import React from 'react'
import { PreviewStoreProvider } from 'gatsby-source-prismic'

import { OpenAppStateProvider } from '@src/context/openAppState'

import './src/styles/global.css'

export default ({ element }) => {
  return (
    <PreviewStoreProvider>
      <OpenAppStateProvider>{element}</OpenAppStateProvider>
    </PreviewStoreProvider>
  )
}
