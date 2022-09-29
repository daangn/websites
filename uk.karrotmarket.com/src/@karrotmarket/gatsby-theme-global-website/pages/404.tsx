import * as React from "react";
import { graphql, PageProps } from "gatsby";
import { styled } from "gatsby-theme-stitches/src/config";
import Layout from "@karrotmarket/gatsby-theme-global-website/src/components/Layout";

export { Head } from '@karrotmarket/gatsby-theme-global-website/src/pages/404';

export const query = graphql`
  query NotFoundPageQuery {
    prismicSiteNavigation(uid: { eq: "global" }, lang: { eq: "en-gb" }) {
      _previewable
      ...DefaultLayout_data
    }
  }
`;

type NotFoundPageProps = PageProps<GatsbyTypes.NotFoundPageQueryQuery>;

const NotFoundPage: React.FC<NotFoundPageProps> = ({ data }) => {
  if (!data.prismicSiteNavigation?.data) throw new Error("No data");

  return (
    <Layout data={data.prismicSiteNavigation.data}>
      <Wrapper>
        <Title>Oops, sorry!</Title>
        <Text>
          Oops, we can't find the page you're looking for.
          <br />
          Make sure the address was entered correctly.
        </Text>
        <Button href="/">Go to home</Button>
      </Wrapper>
    </Layout>
  );
};

const Wrapper = styled("div", {
  height: "70vh",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

const Title = styled("h2", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "$heading5",
  "@md": {
    fontSize: "$heading3",
  },
});

const Text = styled("p", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  fontFamily: "$system",
  marginTop: 24,
  fontSize: "$body2",
  lineHeight: "160%",
  "@md": {
    marginTop: 36,
    fontSize: "$body1",
  },
});

const Button = styled("a", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "$carrot500",
  textDecoration: "none",
  marginTop: 24,
  fontSize: "$body1",
  "@md": {
    marginTop: 46,
    fontSize: "$body1",
  },

  "&:hover": {
    color: "$carrot600",
  },
});

export default NotFoundPage;
