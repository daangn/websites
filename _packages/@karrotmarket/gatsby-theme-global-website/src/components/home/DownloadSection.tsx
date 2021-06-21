import * as React from "react";
import { graphql } from "gatsby";

import { styled } from "../../gatsby-theme-stitches/stitches.config";

import { Space } from "../Space";
import AppLink from "../AppLink";

import { ReactComponent as KarrotLogoIcon } from "../../icons/karrot_logo.svg";
import { rem } from "polished";

export const query = graphql`
  fragment DownloadSection_content on PrismicGlobalContentsDataMainBodyDownloadSection {
    primary {
      title {
        text
      }
    }
  }
  fragment DownloadSection_links on PrismicGlobalContentsDataType {
    ...AppLink_links
  }
`;

type DownloadSectionProps = {
  content: GatsbyTypes.DownloadSection_contentFragment;
  links: GatsbyTypes.DownloadSection_linksFragment;
};

const DownloadSection: React.FC<DownloadSectionProps> = ({
  content,
  links,
}) => {
  if (!content.primary || !links) return <></>;

  const { title } = content.primary;

  return (
    <Section>
      <Container>
        <KarrotLogoIcon></KarrotLogoIcon>
        <Space h={28}></Space>
        <Title>{title.text}</Title>
        <AppLink theme="light" type="desktop" links={links}></AppLink>
        <Space h={24}></Space>
      </Container>
    </Section>
  );
};

const Section = styled("section", {
  width: "100%",
  height: "410px",
  "@md": {
    height: "610px",
  },
});

const Container = styled("div", {
  height: "100%",
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

const Title = styled("h2", {
  marginBottom: 0,
  fontSize: "$heading4",
  lineHeight: "$heading4",

  "@md": {
    marginBottom: rem(42),
    fontSize: "$heading2",
    lineHeight: "$heading2",
  },
});

export default DownloadSection;
