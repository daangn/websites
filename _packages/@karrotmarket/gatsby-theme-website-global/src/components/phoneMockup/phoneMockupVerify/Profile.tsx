import * as React from "react";
import { em } from "polished";
import { motion } from "framer-motion";
import { styled } from "gatsby-theme-stitches/src/config";
import { ReactComponent as KarrotScoreIcon } from "../../../icons/karrot_score.svg";

interface ProfileProps {
  image: string;
  name: string;
  id: string;
  buttonText: string;
  karrotScore: number;
}

const Profile: React.FC<ProfileProps> = ({ image, name, karrotScore }) => {
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
        </UserContainer>
        <KarrotScoreContainer>
          <KarrotScoreText>Karrot Score</KarrotScoreText>
          <KarrotScoreIcon width={em(12)} />
          <KarrotScoreValue>{karrotScore}</KarrotScoreValue>
        </KarrotScoreContainer>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled(motion.div, {
  display: "flex",
  flexDirection: "row",
  padding: em(24),
  background: "white",
  borderRadius: em(8),
  boxShadow: `0 ${em(12)} ${em(14)} rgba(0, 0, 0, 0.12), 0 0 ${em(
    6
  )} rgba(0, 0, 0, 0.06)`,
  width: em(270),
  marginBottom: em(20),
  "*": {
    fontFamily: "$system",
  },
});

const Image = styled("img", {
  width: em(86),
  height: em(86),
  borderRadius: em(86),
  marginRight: em(10),
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
  fontSize: em(22),
  fontWeight: "bold",
  marginRight: em(6),
  letterSpacing: em(-0.1),
});

const KarrotScoreContainer = styled("div", {
  border: `${em(2)} solid $gray300`,
  rowCenterY: true,
  padding: `${em(8)} ${em(16)}`,
  borderRadius: em(4),
  marginTop: em(8),
});

const KarrotScoreText = styled("div", {
  fontSize: em(14),
  fontWeight: "bold",
  marginRight: em(8),
});

const KarrotScoreValue = styled("div", {
  fontSize: em(14),
  fontWeight: "bold",
  marginLeft: em(2),
});

export default Profile;
