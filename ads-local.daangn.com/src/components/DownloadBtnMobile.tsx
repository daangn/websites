import React from 'react';
import { graphql } from 'gatsby';
import { rem } from 'polished';
import { styled } from 'gatsby-theme-stitches/src/config';
import { vars } from '@seed-design/design-token';

export const fragment = graphql`
  fragment DownloadBtnMobile_data on PrismicAdsContentDataType {
    app_download_link {
      url
    }
  }
`;

type Props = {
  data: GatsbyTypes.DownloadBtnMobile_dataFragment;
};

export default function DownloadBtnMobile({ data }: Props) {
  if (!data.app_download_link?.url) {
    throw new Error('앱 다운로드 링크가 누락됐습니다');
  }

  return (
    <Wrapper>
      <Button href={data.app_download_link.url}>당근마켓 앱 다운로드</Button>
    </Wrapper>
  );
}

const Wrapper = styled('div', {
  position: 'fixed',
  zIndex: 10,
  bottom: 0,
  left: 0,
  right: 0,

  '@md': {
    display: 'none',
  },
});

const Button = styled('a', {
  display: 'flex',

  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  marginX: rem(16),
  // paddingY: rem(13),
  height: rem(54),
  marginBottom: rem(16),
  borderRadius: 10,
  backgroundColor: vars.$semantic.color.primary,
  color: vars.$semantic.color.onPrimary,
  fontSize: 16,
  fontWeight: 'bold',
  textDecoration: 'none',

  '&:hover': {
    backgroundColor: vars.$semantic.color.primaryHover,
  },
});
