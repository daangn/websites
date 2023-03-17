import * as React from 'react';
import { graphql } from 'gatsby';

import downloadAtPlayStoreImage from '../assets/download-playstore.svg';
import { getPlayStoreUrl } from '../utils/getPlayStoreUrl';
import DownloadLinkButton from './DownloadLinkButton';

export const fragments = graphql`
  fragment DownloadLinkButtonPlayStore_brochureData on PrismicBrochureDataType {
    playstore_id
  }
`;

type Props = {
  id?: string;
  className?: string;
  brochureData: GatsbyTypes.DownloadLinkButtonPlayStore_brochureDataFramgment;
};

export default function DownloadLinkButtonPlayStore({ id, className, brochureData }: Props) {
  if (!brochureData.playstore_id) {
    throw new Error('playstore_id 가 입력되지 않았습니다.');
  }

  return (
    <DownloadLinkButton
      id={id}
      className={className}
      href={getPlayStoreUrl(brochureData.playstore_id)}
    >
      <img
        src={downloadAtPlayStoreImage}
        // FIXME: i18n
        alt='"Play Store 에서 다운로드하기" 라고 써있는 뱃지 이미지'
      />
    </DownloadLinkButton>
  );
}
