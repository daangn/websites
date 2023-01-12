import { rem } from "polished";
import { styled } from "gatsby-theme-stitches/src/config";
import { vars } from '@seed-design/design-token';
import { ReactComponent as FacebookIcon } from "../../assets/facebook.svg";
import { ReactComponent as LinkedinIcon } from "../../assets/linkedin.svg";
import { ReactComponent as TwitterIcon } from "../../assets/twitter.svg";
import { ReactComponent as ShareIcon } from "../../assets/icon_share.svg";

type ShareButtonsProps = {
  visible: boolean;
};

const ShareButtons: React.FC<ShareButtonsProps> = ({ visible }) => {
  const onClickFacebook = () => {};
  const onClickLinkedin = () => {};

  const onClickTwitter = () => {
    const url = encodeURIComponent("https://about.daangn.com/blog/archive/큰-장바구니가-도착했어요/");
    const text = "큰 장바구니가 도착했어요";
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`,'당근 큰 장바구니', 'width=450, height=450');
  };

  const onClickShare = async () => {
    try {
      await navigator.share({
        url: "https://about.daangn.com/blog/archive/큰-장바구니가-도착했어요/",
        text: "당근마켓 블로그에 방문해보세요.",
      });
    } catch (error) {
      alert("share");
    }
  };

  return (
    <ShareContainer visible={visible}>
      <ShareButton>
        <FacebookIcon />
      </ShareButton>
      <ShareButton>
        <LinkedinIcon />
      </ShareButton>
      <ShareButton onClick={onClickTwitter}>
        <TwitterIcon />
      </ShareButton>
      <ShareButton onClick={onClickShare}>
        <ShareIcon/>
      </ShareButton>
    </ShareContainer>
  );
};

const ShareContainer = styled("div", {
  display: "flex",
  position: "fixed",
  top: "35%",
  right: "10%",
  flexDirection: "column",
  height: rem(300),
  marginTop: rem(44),
  marginLeft: rem(26),
  transition: "opacity 1.5s",
  variants: {
    visible: {
      true: {
        opacity: 1,
      },
      false: {
        opacity: 0,
      },
    },
  },
});

const ShareButton = styled("button", {
  width: rem(32),
  height: rem(32),
  border: "none",
  borderRadius: "50%",
  lineHeight: rem(40),
  marginBottom: rem(20),
  backgroundColor: vars.$scale.color.gray50,
  color: vars.$scale.color.gray700,
  cursor: "pointer",
});

export default ShareButtons;
