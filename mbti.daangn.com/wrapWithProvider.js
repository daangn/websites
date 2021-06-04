import React from 'react'
import { PreviewStoreProvider } from 'gatsby-source-prismic'
import { KarrotThemeProvider } from '@karrotmarket/react-emotion-theme'

import { OpenAppStateProvider } from '@src/context/openAppState'

import './src/styles/global.css'

export default ({ element }) => {
  return (
    <KarrotThemeProvider>
      <PreviewStoreProvider>
        <OpenAppStateProvider>{element}</OpenAppStateProvider>
      </PreviewStoreProvider>
    </KarrotThemeProvider>
  )
}
