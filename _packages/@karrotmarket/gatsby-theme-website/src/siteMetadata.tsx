import { useStaticQuery, graphql } from 'gatsby';

export function useSiteMetadata() {
  const data = useStaticQuery<GatsbyTypes.UseSiteMetadataStaticQuery>(graphql`
    query UseSiteMetadataStatic {
      site {
        siteMetadata {
          siteUrl
        }
      }
    }
  `);

  if (!data.site) {
    throw new Error('site 쿼리 데이터가 없습니다');
  }

  return data.site.siteMetadata;
}
