import React from 'react'
import { colors } from '@daangn/design-token'
import { DaangnThemeProvider } from '@daangn/emotion-react-theme'

import Toast from '@src/components/Toast'

const Layout: React.FC = ({ children }) => {
  return (
    <DaangnThemeProvider colors={colors.light}>
      {children}
      <Toast />
    </DaangnThemeProvider>
  )
}

export default Layout
