import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import downloadAtAppStoreUrl from '~/assets/download-appstore.svg';

import DownloadLinkButton from './DownloadLinkButton';

type Props = {
  id?: string;
  className?: string;
};

export default function DownloadLinkButtonAppStore({ id, className }: Props) {
  const staticData = useStaticQuery<GatsbyTypes.DownloadLinkButtonAppStoreStaticQuery>(graphql`
    query DownloadLinkButtonAppStoreStatic {
      prismicAdsContent {
        data {
          appstore_app_id
        }
      }
    }
  `);

  if (!staticData.prismicAdsContent?.data.appstore_app_id) {
    throw new Error('appstore_app_id 가 입력되지 않았습니다.');
  }

  return (
    <DownloadLinkButton
      id={id}
      className={className}
      href={`https://apps.apple.com/kr/${staticData.prismicAdsContent.data.appstore_app_id}`}
    >
      <img
        src={downloadAtAppStoreUrl}
        alt='"App Store 에서 다운로드 하기"라고 써있는 뱃지 이미지'
      />
    </DownloadLinkButton>
  );
}
