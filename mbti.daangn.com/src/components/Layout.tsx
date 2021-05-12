import React from 'react'
import { colors } from '@daangn/design-token'
import { DaangnThemeProvider } from '@daangn/emotion-react-theme'

const Layout: React.FC = ({ children }) => {
  return <DaangnThemeProvider colors={colors.light}>{children}</DaangnThemeProvider>
}

export default Layout
