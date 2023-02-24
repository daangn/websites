import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import downloadAtPlayStoreUrl from '~/assets/download-playstore.svg';

import DownloadLinkButton from './DownloadLinkButton';

type Props = {
  id?: string,
  className?: string,
};

export default function DownloadLinkButtonPlayStore({
  id,
  className,
}: Props) {
  const staticData = useStaticQuery<GatsbyTypes.DownloadLinkButtonPlayStoreStaticQuery>(graphql`
    query DownloadLinkButtonPlayStoreStatic {
      prismicAdsContent {
        data {
          playstore_app_id
        }
      }
    }
  `);

  if (!staticData.prismicAdsContent?.data.playstore_app_id) {
    throw new Error('playstore_app_id 가 입력되지 않았습니다.');
  }

  return (
    <DownloadLinkButton
      id={id}
      className={className}
      href={`https://play.google.com/store/apps/details?id=${staticData.prismicAdsContent.data.playstore_app_id}`}
    >
      <img
        src={downloadAtPlayStoreUrl}
        alt='"Play Store 에서 다운로드하기" 라고 써있는 뱃지 이미지'
      />
    </DownloadLinkButton>
  );
}
