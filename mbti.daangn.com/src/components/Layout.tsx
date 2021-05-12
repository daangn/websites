import React from 'react'
import { colors } from '@daangn/design-token'
import { DaangnThemeProvider } from '@daangn/emotion-react-theme'
import { GatsbySeo } from 'gatsby-plugin-next-seo'

import { useSiteMeta } from '@src/hooks/useSiteMeta'

const Layout: React.FC = ({ children }) => {
  const data = useSiteMeta()
  return (
    <DaangnThemeProvider colors={colors.light}>
      <GatsbySeo
        title={data.site?.siteMetadata.siteName}
        openGraph={{
          type: 'website',
          site_name: data.site?.siteMetadata.siteName,
          url: data.site?.siteMetadata.siteUrl,
        }}
        language="ko"
        canonical={data.site?.siteMetadata.siteUrl}
        twitter={{ cardType: 'summary_large_image', handle: '@daangnteam' }}
      />

      {children}
    </DaangnThemeProvider>
  )
}

export default Layout
