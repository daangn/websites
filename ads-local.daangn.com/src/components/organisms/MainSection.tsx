import React from "react";
import { styled } from "~/gatsby-theme-stitches/config";
import { rem } from "polished";
import { GatsbyImage, getImage, ImageDataLike } from "gatsby-plugin-image";

type SectionProps = {
  titleBig: string[];
  subtitle: string[];
  image: ImageDataLike;
  right: boolean;
  oneLine?: boolean;
};

export const MainSection: React.FC<SectionProps> = ({
  titleBig,
  subtitle,
  image,
  right,
  oneLine,
}) => {
  // console.log(data)
  const img = getImage(image);
  return (
    <Section right={right}>
      <Container right={right}>
        <GatsbyImage
          alt="당근마켓 광고"
          image={img!}
          imgStyle={{ objectPosition: "top" }}
        />
        <Right>
          <GridRow>
            <TitleD>{titleBig[0]}</TitleD>
            <TitleD>{titleBig[1]}</TitleD>
            {oneLine ? <TitleM>{titleBig[0]}</TitleM>:<TitleM>{titleBig[0] + " " + titleBig[1]}</TitleM>}
          </GridRow>
          <GridRow>
            <Subtitle>{subtitle[0]}</Subtitle>
            <Subtitle>{subtitle[1]}</Subtitle>
          </GridRow>
        </Right>
      </Container>
    </Section>
  );
};

const Section = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "$white",
  paddingTop: rem(80),
  overflow: "hidden",

  variants: {
    right: {
      false: {
        backgroundColor: "#FBF7F2",
      },
    },
  },

  "@md": {
    paddingTop: 0,
  },
});

const Container = styled("div", {
  display: "grid",
  paddingX: rem(20),
  gridTemplateRows: "auto 300px",

  "& > :nth-child(1)": {
    order: 2,
  },
  "& > :nth-child(2)": {
    order: 1,
  },

  variants: {
    right: {
      false: {
        "@md": {
          "& > :nth-child(1)": {
            order: 2,
          },
          "& > :nth-child(2)": {
            order: 1,
            paddingLeft: rem(100),
          },
        },
      },
      true: {
        "@md": {
          "& > :nth-child(1)": {
            order: 1,
          },
          "& > :nth-child(2)": {
            order: 2,
          },
        },
      },
    },
  },

  "@md": {
    gridTemplateColumns: "repeat(2, 1fr)",
    gridTemplateRows: "auto",
    maxWidth: 1160,
    // paddingX: rem(140),
  },
});

const Right = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  "@md": {
    justifyContent: "center",
    alignItems: "flex-start",
  },
});

const GridRow = styled("div", {
  display: "grid",
  gridTemplateRows: "auto auto",
  alignItems: "center",
  justifyItems: "center",
  marginBottom: rem(12),
  Subtitle: {
    fontSize: "$body2",
    fontWeight: 400,
  },

  "@md": {
    justifyItems: "start",
    marginBottom: rem(20),
  },
});

const TitleD = styled("p", {
  display: "none",
  fontSize: rem(42),
  fontWeight: "bold",

  "@md": {
    display: "block",
    lineHeight: rem(57),
  },
});

const TitleM = styled("p", {
  display: "block",
  fontSize: "$subtitle2",
  fontWeight: "bold",

  "@md": {
    display: "none",
  },
});

const Subtitle = styled("p", {
  display: "flex",
  fontSize: "$body2",
  lineHeight: rem(28),
  "@md": {
    fontSize: "$subtitle3",
    lineHeight: rem(31),
  },
});
