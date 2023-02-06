import * as React from "react";
import { rem } from "polished";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage as Picture, getImage } from "gatsby-plugin-image";
import { styled } from "gatsby-theme-stitches/src/config";
import { vars } from "@seed-design/design-token";

import { ReactComponent as IconCheck } from "~/image/icon_check.svg";

export const Main04 = () => {
  const ImageQuery =
    useStaticQuery<GatsbyTypes.AdsProductImgQueryQuery>(graphql`
      query AdsProductImgQuery {
        feedImg: file(relativePath: { eq: "img_sub_pc_03_1.png" }) {
          childImageSharp {
            gatsbyImageData(
              height: 420
              quality: 75
              formats: [WEBP, AUTO]
              placeholder: NONE
            )
          }
        }
        feedImgMobile: file(relativePath: { eq: "img_sub_pc_03_1.png" }) {
          childImageSharp {
            gatsbyImageData(
              height: 320
              quality: 75
              formats: [WEBP, AUTO]
              placeholder: NONE
            )
          }
        }
        searchImg: file(relativePath: { eq: "img_sub_pc_03_2.png" }) {
          childImageSharp {
            gatsbyImageData(
              height: 420
              quality: 75
              formats: [WEBP, AUTO]
              placeholder: NONE
            )
          }
        }
        searchImgMobile: file(relativePath: { eq: "img_sub_pc_03_2.png" }) {
          childImageSharp {
            gatsbyImageData(
              height: 320
              quality: 75
              formats: [WEBP, AUTO]
              placeholder: NONE
            )
          }
        }
      }
    `);

  const [activeTab, setActiveTab] = React.useState<"FEED" | "SEARCH">("FEED");

  const searchImg = getImage(
    ImageQuery.searchImg!.childImageSharp!.gatsbyImageData
  );
  const feedImg = getImage(
    ImageQuery.feedImg!.childImageSharp!.gatsbyImageData
  );
  const searchImgMobile = getImage(
    ImageQuery.searchImgMobile!.childImageSharp!.gatsbyImageData
  );
  const feedImgMobile = getImage(
    ImageQuery.feedImgMobile!.childImageSharp!.gatsbyImageData
  );

  return (
    <Section>
      <Container>
        <GridRow>
          <TitleBig>광고 상품을 둘러보세요</TitleBig>
        </GridRow>
        <ButtonRow>
          <Pill
            active={activeTab === "FEED"}
            onClick={() => setActiveTab("FEED")}
          >
            피드 광고
          </Pill>
          <Pill
            active={activeTab === "SEARCH"}
            onClick={() => setActiveTab("SEARCH")}
          >
            검색 광고
          </Pill>
        </ButtonRow>

        {activeTab === "FEED" && (
          <ContentArea>
            <Picture
              alt="feed"
              image={
                typeof window !== "undefined" && window.innerWidth < 768
                  ? feedImgMobile!
                  : feedImg!
              }
              imgStyle={{ objectPosition: "top" }}
            />
            <DescriptionContainer>
              <Title>피드 광고</Title>
              <Description>
                선택한 동네 홈 피드에 광고를 노출하는 상품이에요.
                <br />
                중고거래 게시글 사이에 광고를 자연스럽게 노출하고, 더 많은
                고객을 만들어 보세요!
              </Description>
              <AccentTextGroup>
                <AccentText>
                  <StyledIconCheck width={rem(18)} height={rem(18)} />
                  <strong>동네 이웃에게 골고루</strong>&nbsp;가게를 알려보세요.
                </AccentText>
                <AccentText>
                  <StyledIconCheck width={rem(18)} height={rem(18)} />
                  <strong>가게 소식이나 가게 정보</strong>를 광고할 수 있어요.
                </AccentText>
              </AccentTextGroup>
              <OutlinedButton
                id="guide-feed"
                onClick={() =>
                  window.open(
                    "https://bizschool.daangn.com/displayads",
                    "_blank"
                  )
                }
              >
                피드 광고 가이드 바로가기
              </OutlinedButton>
            </DescriptionContainer>
          </ContentArea>
        )}
        {activeTab === "SEARCH" && (
          <ContentArea>
            <Picture
              alt="search"
              image={
                typeof window !== "undefined" && window.innerWidth < 768
                  ? searchImgMobile!
                  : searchImg!
              }
              imgStyle={{ objectPosition: "top" }}
            />
            <DescriptionContainer>
              <Title>검색 광고</Title>
              <Description>
                선택한 동네의 키워드 검색 결과에 광고를 노출할 수 있어요.
              </Description>
              <AccentTextGroup>
                <AccentText>
                  <StyledIconCheck width={rem(18)} height={rem(18)} />
                  <strong>특정 키워드를 검색한 이웃에게</strong>&nbsp;가게를
                  알려보세요.
                </AccentText>
                <AccentText>
                  <StyledIconCheck width={rem(18)} height={rem(18)} />
                  <strong>가게 정보</strong>를 광고할 수 있어요.
                </AccentText>
              </AccentTextGroup>
              <OutlinedButton
                id="guide-search"
                onClick={() =>
                  window.open(
                    "https://bizschool.daangn.com/searchads",
                    "_blank"
                  )
                }
              >
                검색 광고 가이드 바로가기
              </OutlinedButton>
            </DescriptionContainer>
          </ContentArea>
        )}
      </Container>
    </Section>
  );
};

const Section = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: vars.$semantic.color.paperDefault,
  paddingY: rem(80),
  overflow: "hidden",

  "@md": {
    paddingY: rem(160),
  },
});

const Container = styled("div", {
  display: "grid",
  gridTemplateRows: "repeat(4, auto)",
  justifyItems: "center",

  "@md": {
    width: "100%",
    maxWidth: 1160,
    paddingX: 0,
    gridTemplateRows: "repeat(2, auto)",
  },
});

const GridRow = styled("div", {
  display: "grid",
  gridTemplateRows: "auto",
  alignItems: "center",
  justifyItems: "center",
  marginBottom: rem(12),
  "@md": {
    justifyItems: "start",
    marginBottom: rem(70),
  },
});

const TitleBig = styled("p", {
  fontSize: "$subtitle2",
  fontWeight: "bold",

  "@md": {
    fontSize: rem(42),
    lineHeight: rem(52),
  },
});

const ButtonRow = styled("div", {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
});

const Pill = styled("div", {
  display: "flex",
  justifyContent: "center",
  typography: "$body2",
  alignItems: "center",
  paddingY: rem(7),
  paddingX: rem(16),
  border: "1px solid #EAEBEE",
  borderRadius: rem(100),
  backgroundColor: "$white",
  cursor: "pointer",

  "& + &": {
    marginLeft: rem(12),
    "@md": {
      marginLeft: rem(24),
    },
  },

  variants: {
    active: {
      true: {
        backgroundColor: vars.$semantic.color.primary,
        color: vars.$semantic.color.onPrimary,
      },
    },
  },
});

const ContentArea = styled("div", {
  display: "grid",
  gridTemplateRows: "repeat(2, 1fr)",

  "@md": {
    gridTemplateColumns: "repeat(2, 1fr)",
    gridTemplateRows: "repeat(1, auto)",
  },
  marginTop: rem(40),
});

const Title = styled("p", {
  typography: "$subtitle3",
  fontWeight: "bold",

  "@md": {
    typography: "$subtitle2",
  },
});

const DescriptionContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  paddingX: rem(20),
  paddingTop: rem(24),
  maxWidth: rem(468),
  "@md": {
    paddingX: rem(0),
    paddingTop: rem(0),
    alignItems: "flex-start",
    marginTop: rem(30),
    marginLeft: rem(36),
  },
});

const Description = styled("p", {
  typography: "$body3",
  wordBreak: "keep-all",
  marginTop: rem(12),
});

const AccentText = styled("div", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  fontSize: rem(16),
  lineHeight: rem(28),
  backgroundColor: vars.$scale.color.carrot50,
  paddingX: rem(10),
  paddingY: rem(6),

  "& + &": {
    marginTop: rem(6),
  },
});

const StyledIconCheck = styled(IconCheck, {
  path: {
    fill: vars.$semantic.color.primary,
  },
  viewBox: "0 0 24 24",
  marginRight: rem(12),
});

const AccentTextGroup = styled("div", {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  marginTop: rem(40),
});

const OutlinedButton = styled("div", {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  marginTop: rem(40),
  paddingY: rem(10),
  typography: "$body2",
  fontWeight: "bold",
  border: `1px solid #DCDEE3`,
  borderRadius: rem(6),
  cursor: "pointer",
});
