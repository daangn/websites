import { graphql, useStaticQuery } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/config';

import DownloadLinkButtonPlayStore from '@karrotmarket/gatsby-theme-brochure/src/components/DownloadLinkButtonPlayStore';
import DownloadLinkButtonAppStore from '@karrotmarket/gatsby-theme-brochure/src/components/DownloadLinkButtonAppStore';

type Props = {
  id?: string;
};

export default function Extension({ id }: Props) {
  if (id === 'pc_app_download') {
    const staticData = useStaticQuery(graphql`
      query PrismicBrochureDataBodyHeroTypeFSectionExtensionStatic {
        prismicBrochure(uid: { eq: "jp-home" }) {
          data {
            ...DownloadLinkButtonAppStore_brochureData
            ...DownloadLinkButtonPlayStore_brochureData
          }
        }
      }
    `);

    return (
      <ButtonContainer>
        <DownloadLinkButtonPlayStore
          id="google_bottom"
          brochureData={staticData.prismicBrochure.data}
        />
        <DownloadLinkButtonAppStore
          id="apple_bottom"
          brochureData={staticData.prismicBrochure.data}
        />
      </ButtonContainer>
    );
  }

  return null;
}

const ButtonContainer = styled('div', {
  display: 'none',

  '@md': {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, max-content)',
    gap: '1rem',
  },
});
