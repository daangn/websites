import React from "react";
import { rem } from "polished";
import { graphql } from "gatsby";
import { useInView } from "react-intersection-observer";
import { styled } from "gatsby-theme-stitches/src/stitches.config";

import { Grid } from "@src/components/Grid";
import { Html } from "@src/components/Html";
import { Flex } from "@src/components/Flex";
import { Space } from "@src/components/Space";

import PhoneMockupVerify from "@src/components/phoneMockup/PhoneMockupVerify";
import PhoneMockupChat from "@src/components/phoneMockup/PhoneMockupChat";

// @ts-ignore
import { ReactComponent as KeywordIcon } from "@src/icons/keyword.svg";
// @ts-ignore
import { ReactComponent as LocationIcon } from "@src/icons/location_outline.svg";
// @ts-ignore
import { ReactComponent as ReservationIcon } from "@src/icons/reservation.svg";
// @ts-ignore
import { ReactComponent as WriteIcon } from "@src/icons/write.svg";

export const query = graphql`
  fragment MockupSection_content on PrismicGlobalContentsDataMainBodyMockupSection {
    primary {
      text {
        html
      }
      background_color
      text_highlight_color
      phone_mockup_component
      text_on_right
    }
    items {
      icon
      text
    }
  }
`;

type PhoneMockupType = "PhoneMockupVerify" | "PhoneMockupChat";
const PhoneMockup: { [key in PhoneMockupType]: React.FC } = {
  PhoneMockupVerify,
  PhoneMockupChat,
};

type MockupIconType = "Keyword" | "Location" | "Reservation" | "Write";
const MockupIcon: { [key in MockupIconType]: React.FC } = {
  Keyword: KeywordIcon,
  Location: LocationIcon,
  Reservation: ReservationIcon,
  Write: WriteIcon,
};

type MockupSectionProps = {
  content: GatsbyTypes.MockupSection_contentFragment;
};

const Section = styled("section", {
  width: "100%",
  "@md": {
    height: "780px",
  },
});

const Container = styled("div", {
  display: "flex",
  margin: "0 auto",
  height: "100%",
  flexDirection: "column",
  textAlign: "center",
  padding: `${rem(56)} ${rem(26)}`,

  variants: {
    textPosition: {
      left: {
        flexDirection: "column",
        "@md": {
          flexDirection: "row",
        },
      },
      right: {
        flexDirection: "column",
        "@md": {
          flexDirection: "row-reverse",
        },
      },
    },
  },

  "@md": {
    width: "$maxContent",
    flexDirection: "row",
    textAlign: "left",
    padding: 0,
    justifyContent: "space-between",
  },
});

const InfoContainer = styled("div", {
  display: "flex",
  span: {
    opacity: 0.6,
    alignItems: "center",
  },
  justifyContent: "center",

  "@md": {
    justifyContent: "flex-start",
  },
});

const MockupSection: React.FC<MockupSectionProps> = ({ content }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.55 });

  if (!content.primary || !content.items) return <></>;

  const {
    text,
    background_color,
    text_highlight_color,
    phone_mockup_component,
    text_on_right,
  } = content.primary;
  const PhoneMockupComponent =
    PhoneMockup[phone_mockup_component as PhoneMockupType];

  return (
    <Section css={{ background: background_color }} ref={ref}>
      <Container textPosition={text_on_right ? "right" : "left"}>
        <Flex colCenterY alignItems={{ "@i": "center", "@md": "flex-start" }}>
          <Html html={text?.html} highlightColor={text_highlight_color} />
          <Grid
            gridTemplateColumns={{
              "@i": "max-content",
              "@md": "repeat(2, max-content)",
            }}
            columnGap={{ "@i": 0, "@md": 30 }}
            rowGap={{ "@i": 10, "@md": 0 }}
            marginTop={{ "@i": 16, "@md": 40 }}
            marginBottom={{ "@i": 36, "@md": 0 }}
          >
            {content.items.map((info, i) => {
              const Icon = MockupIcon[info?.icon as MockupIconType];
              return (
                <InfoContainer key={i}>
                  <Icon />
                  <Space w={5}></Space>
                  <span>{info?.text}</span>
                </InfoContainer>
              );
            })}
          </Grid>
        </Flex>
        <Flex
          rowCenterY
          justifyContent={{ "@i": "center", "@md": "flex-start" }}
        >
          <div ref={ref}>
            <PhoneMockupComponent inView={inView}></PhoneMockupComponent>
          </div>
        </Flex>
      </Container>
    </Section>
  );
};

export default MockupSection;
