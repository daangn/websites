import React from 'react'
import { colors } from '@daangn/design-token'
import { DaangnThemeProvider } from '@daangn/emotion-react-theme'
import { GatsbySeo } from 'gatsby-plugin-next-seo'
import { Helmet } from 'react-helmet-async'

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
      <Helmet>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1.0, minimum-scale=1, user-scalable=no"
        />
      </Helmet>

      {children}
    </DaangnThemeProvider>
  )
}

export default Layout
