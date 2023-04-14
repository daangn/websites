import * as React from 'react';
import {
  graphql,
  Link,
  type PageProps,
} from 'gatsby';
import { rem } from "polished";
import { GatsbyImage } from 'gatsby-plugin-image';
import { SliceZone } from "@prismicio/react";
import { styled } from 'gatsby-theme-stitches/src/config';
import { vars } from '@seed-design/design-token';

import PrPostBodyRichText from '../components/prPostPage/PrPostBodyRichText';

export const query = graphql`
  query PrPostPage($id: String!, $locale: String!, $navigationId: String!) {
    ...TeamWebsite_DefaultLayout_query
    post(id: { eq: $id }) {
      uid
      title
      publishedAt
      tags
      author {
        nickname
        role
        image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      ogImage: thumbnailImage {
        childImageSharp {
          fixed(width: 1200, height: 630, toFormat: PNG, quality: 90) {
            src
            width
            height
          }
        }
      }
      body {
        ... on PostRichTextSection {
          id
          primary
          slice_type: sliceType
        }
      }
    }
  }
`;

type PrPostPageProps = PageProps<GatsbyTypes.PrPostPageQuery>;

const PrPostPage: React.FC<PrPostPageProps> = ({ data }) => {
  console.log('data ::', data);
  return (
    <Container>
      <Header>
        <Title>{data.post?.title}</Title>
        <Date>{data.post?.publishedAt}</Date>
      </Header>
      <Body>
        <ContentContainer>
          <SliceZone
            slices={data.post?.body as any[]}
            components={{
              rich_text_section: PrPostBodyRichText,
            }}
          />
        </ContentContainer>
        <Author>
          {data.post?.author?.image?.childImageSharp?.gatsbyImageData && (
            <AuthorImage
              image={data.post?.author?.image?.childImageSharp?.gatsbyImageData}
              alt="member-profile"
            />
          )}
          <AuthorInfo>
            <AuthorName>{data.post?.author?.nickname}</AuthorName>
            <p>{data.post?.author?.role}</p>
          </AuthorInfo>
        </Author>
        <Tags>
          {data.post?.tags?.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </Tags>
      </Body>
      <Footer>
        <Home to="/pr">PR 홈</Home>
      </Footer>
    </Container>
  );
};

const Container = styled("div", {
  contentArea: true,
  textAlign: "center",
  color: vars.$scale.color.gray900,
});

const Header = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginBottom: rem(66),
});

const Title = styled("h1", {
  fontSize: "$subtitle1",
  marginBottom: rem(12),

  "@md": {
    fontSize: "$heading4",
  },
});

const Date = styled("div", {
  display: "flex",
  color: vars.$scale.color.gray600,
});

const Body = styled("section", {
  position: "relative",
  boxSizing: "border-box",
  maxWidth: rem(1024),
  paddingX: rem(8),
  margin: "0 auto",
  textAlign: "left",

  "@md": {
    paddingX: rem(84),
  },
});

const ContentContainer = styled("div", {
  display: "flex",
  flexFlow: "row nowrap",
  height: "auto",
  overflow: "auto",
});

const Author = styled("div", {
  display: "flex",
  alignItems: "center",
  margin: `${rem(56)} 0`,
});

const AuthorImage = styled(GatsbyImage, {
  width: rem(50),
  height: rem(50),
  borderRadius: "50%",
});

const AuthorInfo = styled("div", {
  display: "flex",
  flexDirection: "column",
  marginLeft: rem(12),
  fontSize: "$body2",
});

const AuthorName = styled("h3", {
  marginBottom: rem(4),
  fontWeight: 600,
});

const Tags = styled("div", {
  display: "flex",
});

const Tag = styled("div", {
  width: "fit-content",
  padding: `${rem(6)} ${rem(12)}`,
  marginLeft: rem(8),
  border: "none",
  borderRadius: rem(40),
  backgroundColor: vars.$scale.color.gray50,
  fontSize: "$body2",
});

const Footer = styled("div", {
  display: "flex",
  justifyContent: "center",
  boxSizing: "border-box",
  width: "max-content",
  maxWidth: rem(1200),
  margin: "0 auto",
  marginTop: rem(66),
  paddingX: rem(84),
});

const Home = styled(Link, {
  width: "fit-content",
  padding: `${rem(16)} ${rem(20)}`,
  border: "none",
  borderRadius: rem(40),
  backgroundColor: vars.$scale.color.gray50,
  color: vars.$scale.color.gray900,
  fontSize: "$body1",
  fontWeight: "bold",
  textDecoration: "none",
  pointer: "cursor",
});

export default PrPostPage;
