import type { GatsbyNode } from 'gatsby';
import slugify from 'cjk-slug';

const gql = String.raw;

export const onCreateBabelConfig: GatsbyNode['onCreateBabelConfig'] = ({
  actions,
}) => {
  actions.setBabelPlugin({
    name: require.resolve('@babel/plugin-transform-react-jsx'),
    options: {
      runtime: 'automatic',
    },
  });

  actions.setBabelPlugin({
    name: require.resolve('babel-plugin-polished'),
    options: {},
  });
};

export const createSchemaCustomization: GatsbyNode['createSchemaCustomization'] = ({
  actions,
  schema,
}) => {
  // FIXME
  // see https://github.com/angeloashmore/gatsby-source-prismic/issues/382
  actions.createTypes(gql`
    type PrismicImageFixedType {
      base64: String
      width: Int
      height: Int
      src: String
      srcSet: String
      srcWebp: String
      srcSetWebp: String
    }

    type PrismicImageFluidType {
      base64: String
      aspectRatio: Float
      src: String
      srcSet: String
      srcWebp: String
      srcSetWebp: String
      sizes: String
    }
  `);

  // Type assertions for Site metadata
  actions.createTypes(gql`
    type Query {
      site: Site!
    }

    type Site {
      siteMetadata: SiteMetadata!
    }

    type SiteMetadata {
      siteUrl: String!
    }
  `);
//
//  // Type assertions for FAQ contents
//  actions.createTypes(gql`
//    type PrismicFaq {
//      data: PrismicFaqDataType!
//    }
//
//    type PrismicFaqDataType {
//      entries: [PrismicFaqDataEntries!]!
//    }
//  `);
//
//  // Type assertions for Teams Contents
//  actions.createTypes(gql`
//    type PrismicTeamContents {
//      data: PrismicTeamContentsDataType!
//    }
//
//    type PrismicTeamContentsDataType {
//      main_body: [PrismicTeamContentsDataMainBodySlicesType!]!
//      culture_body: [PrismicTeamContentsDataCultureBodySlicesType!]!
//      life_body: [PrismicTeamContentsDataLifeBodySlicesType!]!
//    }
//
//    # Avoid conflict
//    # type PrismicTeamContentsDataMainBodyKeyVisual {
//    #   primary: PrismicTeamContentsDataMainBodyKeyVisualPrimary!
//    # }
//
//    type PrismicTeamContentsDataMainBodyMemberQuoteCarousel {
//      items: [PrismicTeamContentsDataMainBodyMemberQuoteCarouselItem!]
//    }
//
//    type PrismicTeamContentsDataCultureBodyHowWeWork {
//    #  primary: PrismicTeamContentsDataCultureBodyHowWeWorkPrimary! 
//      items: [PrismicTeamContentsDataCultureBodyHowWeWorkItem!]
//    }
//
//    type PrismicTeamContentsDataCultureBodyBenefit {
//    #  primary: PrismicTeamContentsDataCultureBodyHowWeWorkPrimary! 
//      items: [PrismicTeamContentsDataCultureBodyBenefitItem!]
//    }
//
//    type PrismicTeamContentsDataLifeBodyLifeContent {
//    #  primary: PrismicTeamContentsDataLifeBodyLifeContentPrimary! 
//      items: [PrismicTeamContentsDataLifeBodyLifeContentItem!]
//    }
//  `);
//
//  // Type assertions for Member Profiles
//  actions.createTypes(gql`
//    type PrismicMemberProfile {
//      data: PrismicMemberProfileDataType!
//    }
//  `);
  
  actions.createTypes([
    schema.buildObjectType({
      name: 'JobPost',
      interfaces: ['Node'],
      fields: {
        slug: {
          type: 'String!',
          resolve(source: { chapter: string }) {
            return slugify(source.chapter, { lowercase: false });
          },
        },
        absoluteUrl: {
          type: 'String!',
          resolve(source: { ghId: string }, _args, ctx) {
            const site = ctx.nodeModel.getNodeById({ id: 'Site', type: 'Site' });
            const { origin } = new URL(site.siteMetadata.siteUrl);
            return origin + `/jobs/${source.ghId}/`;
          },
        },
      },
    }),
  ]);
};

export const onPostBootstrap: GatsbyNode['onPostBootstrap'] = ({
  actions,
}) => {
  actions.createRedirect({
    fromPath: '/jobs/faq/',
    toPath: '/faq/',
    isPermanent: true,
  });
};

export const createPages: GatsbyNode['createPages'] = async ({
  graphql,
  actions,
}) => {
  type Data = {
    allJobPost: {
      nodes: {
        id: string,
        ghId: string,
      }[],
      group: {
        nodes: {
          chapter: string,
          slug: string,
        }[],
      }[],
    },
  };

  const { data, errors } = await graphql<Data>(gql`
    {
      allJobPost {
        nodes {
          id
          ghId
        }
        group(field: chapter, limit: 1) {
          nodes {
            chapter
            slug
          }
        }
      }
    }
  `);

  if (errors) {
    throw errors;
  }

  for (const jobPost of data.allJobPost.nodes) {
    actions.createPage({
      path: `/jobs/${jobPost.ghId}/`,
      component: require.resolve('./src/templates/JobPostPage.tsx'),
      context: {
        id: jobPost.id,
        ghId: jobPost.ghId,
      },
    });
    actions.createPage({
      path: `/jobs/${jobPost.ghId}/apply/`,
      component: require.resolve('./src/templates/JobApplicationPage.tsx'),
      context: {
        id: jobPost.id,
        ghId: jobPost.ghId,
      },
    });
  }

  actions.createPage({
    path: `/jobs/`,
    component: require.resolve('./src/templates/jobs.tsx'),
    context: {
      pattern: `/.*/`,
      chapter: null,
      slug: null,
    },
  });

  for (const group of data.allJobPost.group) {
    const { chapter, slug } = group.nodes[0];

    actions.createPage({
      path: `/jobs/${slug}/`,
      component: require.resolve('./src/templates/jobs.tsx'),
      context: {
        pattern: `/${slug}/`,
        chapter,
        slug,
      },
    });
  }
};
