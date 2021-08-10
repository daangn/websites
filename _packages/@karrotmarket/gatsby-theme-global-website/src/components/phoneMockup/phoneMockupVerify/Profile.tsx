import * as React from "react";
import { em } from "polished";
import { motion } from "framer-motion";
import { styled } from "../../../gatsby-theme-stitches/stitches.config";

import { Flex } from "../../Flex";

interface ProfileProps {
  image: string;
  name: string;
  id: string;
  buttonText: string;
}

const Profile: React.FC<ProfileProps> = ({ image, name, id, buttonText }) => {
  return (
    <Wrapper
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 1.5,
        duration: 0.5,
      }}
    >
      <Image src={image} />
      <Container>
        <UserContainer>
          <Name>{name}</Name>
          <IdText>{id}</IdText>
        </UserContainer>
        <Button>{buttonText}</Button>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled(motion.div, {
  display: "flex",
  flexDirection: "row",
  padding: em(24),
  background: "white",
  borderRadius: em(24),
  boxShadow: `${em(2)} ${em(6)} ${em(16)} ${em(8)} #00000010`,
  width: em(270),
  marginBottom: em(20),
  "*": {
    fontFamily: "$system",
  },
});

const Image = styled("img", {
  width: em(70),
  height: em(70),
  borderRadius: em(70),
  marginRight: em(20),
});

const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
});

const UserContainer = styled("div", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
});

const Name = styled("div", {
  fontSize: em(18),
  fontWeight: "bold",
  marginRight: em(6),
});

const IdText = styled("div", {
  fontSize: em(14),
});

const Button = styled("button", {
  border: `${em(1)} solid $gray300`,
  height: em(46),
  background: "white",
  fontSize: em(12),
  borderRadius: em(6),
  padding: `0 ${em(64)}`,
  fontWeight: "bold",
  marginTop: em(14),
});

export default Profile;
