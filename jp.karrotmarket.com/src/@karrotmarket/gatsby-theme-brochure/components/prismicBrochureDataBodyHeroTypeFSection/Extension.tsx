import { graphql, useStaticQuery } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/config';

import DownloadLinkButtonPlayStore from '@karrotmarket/gatsby-theme-brochure/src/components/DownloadLinkButtonPlayStore';
import DownloadLinkButtonAppStore from '@karrotmarket/gatsby-theme-brochure/src/components/DownloadLinkButtonAppStore';

type Props = {
  id?: string;
};

export default function Extension({ id }: Props) {
  // Note: 여기 반드시 *정적*으로 유지해야 됩니다. Hook 만들지 마세요.

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
          id="google_top"
          brochureData={staticData.prismicBrochure.data}
        />
        <DownloadLinkButtonAppStore id="apple_top" brochureData={staticData.prismicBrochure.data} />
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
