import { graphql, useStaticQuery } from 'gatsby'

export const useSiteMeta = () =>
  useStaticQuery<GatsbyTypes.UseSiteMetaQuery>(graphql`
    query UseSiteMeta {
      site {
        siteMetadata {
          siteUrl
          siteName
        }
      }
    }
  `)
