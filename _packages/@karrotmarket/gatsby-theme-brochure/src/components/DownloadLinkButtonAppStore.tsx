import * as React from 'react';
import { graphql } from 'gatsby';

import downloadAtAppStoreImage from '../assets/download-appstore.svg';
import { getAppStoreUrl } from '../utils/getAppStoreUrl';
import DownloadLinkButton from './DownloadLinkButton';

export const fragments = graphql`
  fragment DownloadLinkButtonAppStore_brochureData on PrismicBrochureDataType {
    appstore_id
  }
`;

type Props = {
  id?: string;
  className?: string;
  brochureData: GatsbyTypes.DownloadLinkButtonAppStore_brochureDataFragment;
};

export default function DownloadLinkButtonAppStore({ id, className, brochureData }: Props) {
  if (!brochureData.appstore_id) {
    // FIXME: i18n
    throw new Error('appstore_id 가 입력되지 않았습니다.');
  }

  return (
    <DownloadLinkButton
      id={id}
      className={className}
      href={getAppStoreUrl(brochureData.appstore_id)}
    >
      <img
        src={downloadAtAppStoreImage}
        // FIXME: i18n
        alt='"App Store 에서 다운로드 하기"라고 써있는 뱃지 이미지'
      />
    </DownloadLinkButton>
  );
}
