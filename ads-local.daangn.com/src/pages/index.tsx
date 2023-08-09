import * as React from 'react';
import { graphql, type PageProps, type HeadProps } from 'gatsby';
import { HeadSeo, OpenGraph, TwitterCard } from 'gatsby-plugin-head-seo/src';
import { globalStyles } from 'gatsby-theme-stitches/src/config';

export const query = graphql`
  query IndexPage {
    site {
      siteMetadata {
        siteUrl
        title
        description
      }
    }

    prismicAdsContent {
      data {
        meta_title
        meta_description
        meta_image {
          localFile {
            publicURL
          }
          dimensions {
            width
            height
          }
        }
        disclaimer {
          html
        }
      }
    }
  }
`;

export default function IndexPage() {
  globalStyles();

  return <div />;
}

export function Head({ data, location }: HeadProps<GatsbyTypes.IndexPageQuery>) {
  // rome-ignore lint/style/noNonNullAssertion: intentional
  const siteMetadata = data.site?.siteMetadata!;
  // rome-ignore lint/style/noNonNullAssertion: intentional
  const prismicAdsContent = data.prismicAdsContent!;

  // rome-ignore lint/style/noNonNullAssertion: intentional
  const siteUrl = new URL(siteMetadata.siteUrl!);
  const image = prismicAdsContent.data.meta_image;

  return (
    <>
      <meta name="robots" content="noindex" />
      <meta http-equiv="refresh" content="0; url=https://business.daangn.com/" />
      <HeadSeo location={location}>
        {(props) => [
          <OpenGraph
            og={{
              ...props,
              type: 'website',
              // rome-ignore lint/style/noNonNullAssertion: intentional
              title: prismicAdsContent.data.meta_title || siteMetadata.title!,
              // rome-ignore lint/style/noNonNullAssertion: intentional
              description: prismicAdsContent.data.meta_description || siteMetadata.description!,
              ...(image && {
                images: [
                  {
                    // rome-ignore lint/style/noNonNullAssertion: intentional
                    url: new URL(image.localFile!.publicURL!, siteUrl),
                    // rome-ignore lint/style/noNonNullAssertion: intentional
                    width: image.dimensions!.width,
                    // rome-ignore lint/style/noNonNullAssertion: intentional
                    height: image.dimensions!.height,
                  },
                ],
              }),
            }}
          />,
          <TwitterCard
            card={{
              ...props,
              type: image ? 'summary_large_image' : 'summary',
            }}
          />,
        ]}
      </HeadSeo>
    </>
  );
}
