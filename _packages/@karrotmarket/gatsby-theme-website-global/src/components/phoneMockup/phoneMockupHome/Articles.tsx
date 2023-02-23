import * as React from "react";
import { em } from "polished";
import { styled } from "gatsby-theme-stitches/src/config";
import { vars } from '@seed-design/design-token';

import { Article } from "./_type";

import { ReactComponent as ChatCountIcon } from "../../../icons/chat-count.svg";
import { ReactComponent as InterestCountIcon } from "../../../icons/interest-count.svg";

interface RatingProps {
  articles: Article[];
}

const Articles: React.FC<RatingProps> = ({ articles }) => {
  return (
    <Wrapper>
      {articles.map((article, i) => {
        return (
          <Container key={i}>
            <Image src={article.image} alt="article" />
            <RightContainer>
              <Name>{article.name}</Name>
              <InfoContainer>
                <Info>{article.region}</Info>
                <Spacer />
                <Info>{article.date}</Info>
              </InfoContainer>
              <Price>{article.price}</Price>
              <BottomContainer>
                <CountInfoContainer>
                  {article.interestCount && (
                    <CountInfo>
                      <ChatCountIcon
                        width={em(16)}
                        height={em(16)}
                      ></ChatCountIcon>
                      <span>{article.interestCount}</span>
                    </CountInfo>
                  )}
                  {article.chatCount && (
                    <CountInfo>
                      <InterestCountIcon
                        width={em(13)}
                        height={em(12)}
                      ></InterestCountIcon>
                      <span>{article.chatCount}</span>
                    </CountInfo>
                  )}
                </CountInfoContainer>
              </BottomContainer>
            </RightContainer>
          </Container>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled('div', {
  display: "flex",
  flexDirection: "column",
  padding: `0 ${em(12)}`,
  textAlign: "left",
});

const Container = styled("div", {
  display: "grid",
  gridTemplateColumns: "max-content 1fr",
  gridColumnGap: em(12),
  padding: `${em(16)} 0`,
  borderBottom: "1px solid $gray200",
});

const RightContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
});

const Image = styled("img", {
  width: em(90),
  height: em(90),
  borderRadius: em(8),
});

const Name = styled("div", {
  fontSize: em(14),
  marginBottom: em(3),
});

const Price = styled("div", {
  fontSize: em(14),
  fontWeight: "bold",
});

const InfoContainer = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(3, max-content)",
  gridColumnGap: em(6),
  marginBottom: em(1),
});

const Info = styled("div", {
  fontSize: em(12),
  color: vars.$scale.color.gray600,
});

const Spacer = styled("div", {
  width: em(2),
  height: em(2),
  borderRadius: em(2),
  background: "$gray600",
  alignSelf: "center",
});

const BottomContainer = styled("div", {
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-end",
  alignItems: "flex-end",
  flex: 1,
});

const CountInfoContainer = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(2, max-content)",
  gridColumnGap: em(6),
});

const CountInfo = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(2, max-content)",
  gridColumnGap: em(1),

  "& > *": {
    alignSelf: "center",
  },

  span: {
    fontSize: em(12),
  },
  svg: {
    fill: vars.$scale.color.gray600,
  },
});

export default Articles;
