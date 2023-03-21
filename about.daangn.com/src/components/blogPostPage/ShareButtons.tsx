import SeedIcon from '@karrotmarket/gatsby-theme-seed-design/src/Icon';
import { styled } from 'gatsby-theme-stitches/src/config';
import { rem } from 'polished';
import * as React from 'react';

import { ReactComponent as FacebookIcon } from '../../assets/facebook.svg';
import { ReactComponent as LinkedinIcon } from '../../assets/linkedin.svg';
import { ReactComponent as TwitterIcon } from '../../assets/twitter.svg';
import Button from './Button';

type ShareButtonsProps = {
  onClickLinkShare: React.Dispatch<React.SetStateAction<boolean>>;
};

const ShareButtons: React.FC<ShareButtonsProps> = ({ onClickLinkShare }) => {
  const onClickSnsShare = (key: string) => {
    const url = window.location.href;
    const text = '당근의 소식을 전해요';

    switch (key) {
      case 'META':
        window.open(`http://www.facebook.com/sharer.php?u=${url}&t=${text}`, '_blank');
        break;
      case 'TWITTER':
        window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
        break;
      case 'LINKEDIN':
        window.open(
          `http://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${text}`,
          '_blank',
        );
    }
  };

  const onClickShare = async () => {
    try {
      await navigator.share({
        url: window.location.href,
        text: '당근의 소식을 전해요',
      });
    } catch (error) {
      onClickLinkShare(true);

      setTimeout(() => {
        onClickLinkShare(false);
      }, 1500);
    }
  };

  return (
    <ShareContainer>
      <Button onClick={() => onClickSnsShare('META')}>
        <FacebookIcon />
      </Button>
      <Button onClick={() => onClickSnsShare('LINKEDIN')}>
        <LinkedinIcon />
      </Button>
      <Button onClick={() => onClickSnsShare('TWITTER')}>
        <TwitterIcon />
      </Button>
      <Button onClick={onClickShare}>
        <SeedIcon name="icon_ios_share_fill" size="100%" />
      </Button>
    </ShareContainer>
  );
};

const ShareContainer = styled('div', {
  display: 'none',
  position: 'absolute',
  flexDirection: 'column',

  '@md': {
    display: 'flex',
    height: rem(300),
    top: 0,
    right: 4,
  },
});

export default ShareButtons;
