import React from "react";
import { graphql } from "gatsby";
import { styled } from "gatsby-theme-stitches/src/stitches.config";

import { Html } from "@src/components/Html";
import { Space } from "@src/components/Space";
import AppLink from "@src/components/AppLink";

// @ts-ignore
import { ReactComponent as KarrotLogoIcon } from "@src/icons/karrot_logo.svg";

type DownloadSectionProps = {
  content: GatsbyTypes.DownloadSection_contentFragment;
  links: GatsbyTypes.DownloadSection_linksFragment;
};

export const query = graphql`
  fragment DownloadSection_content on PrismicGlobalContentsDataMainBodyDownloadSection {
    primary {
      title {
        html
      }
    }
  }
  fragment DownloadSection_links on PrismicGlobalContentsDataType {
    ...AppLink_links
  }
`;

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
        <Html html={title?.html} marginBottom={{ "@i": 0, "@md": 42 }}></Html>
        <AppLink theme="light" type="desktop" links={links}></AppLink>
        <Space h={24}></Space>
      </Container>
    </Section>
  );
};

export default DownloadSection;
