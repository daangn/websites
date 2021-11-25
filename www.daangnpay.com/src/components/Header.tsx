import { FC } from "react";
import { styled } from "@karrotmarket/gatsby-theme-global-website/src/gatsby-theme-stitches/config";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { rem, em } from "polished";

interface Props {
  image_data: any;
  alt?: string;
}

const Header: FC<Props> = ({ image_data, alt }) => {
  const image = image_data && getImage(image_data);

  const onLinkClick = () => {
    alert('준비 중 입니다')
  }

  return (
    <Wrapper>
      <Box>
        <Logo>
          <GatsbyImage image={image} alt={alt || ""} />
          <LogoText>당근페이</LogoText>
        </Logo>

        <Nav>
          <Link type="button" onClick={onLinkClick}>About</Link>
          <Link type="button" onClick={onLinkClick}>FAQ</Link>
          <Link type="button" onClick={onLinkClick}>Recruit</Link>
          <Link type="button" onClick={onLinkClick}>Blog</Link>
        </Nav>
      </Box>
    </Wrapper>
  );
};

const Wrapper = styled("header", {
  position: "absolute",
  top: 20,
  left: 0,
  width: '100%',
  zIndex: 10,
});

const Box = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  maxWidth: '1040px',
  margin: "0 auto",
});

const Logo = styled("button", {
  display: "flex",
  alignItems: "center",
  backgroundColor: 'transparent',
  appearance: 'none',
  border: 'none',
});

const LogoText = styled('h3', {
  marginLeft: 12,
  paddingTop: 6,
  color: 'white',
});

const Nav = styled("nav", {
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  flex: "1 1",
});

const Link = styled('button', {
  margin: '0 20px',
  color: 'white',
  backgroundColor: 'transparent',
  appearance: 'none',
  border: 'none',
  cursor: 'pointer',
})

export default Header;
