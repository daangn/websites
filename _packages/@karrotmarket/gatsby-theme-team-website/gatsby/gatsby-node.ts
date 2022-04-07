import type { GatsbyNode, Page } from 'gatsby';
import type { PluginOptions } from './types';

const gql = String.raw;

export const pluginOptionsSchema: GatsbyNode['pluginOptionsSchema'] = ({
  Joi,
}) => {
  return Joi.object({
    locale: Joi.string().required(),
    navigationId: Joi.string().required(),
  });
};

export const onCreateBabelConfig: GatsbyNode['onCreateBabelConfig'] = ({
  actions,
}) => {
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
      locale: String!
    }
  `);

  // Strip HTML description
  const resolveDescriptionText = (source: { description?: string }) => {
    const tags = /<[^>]*>?/gm;
    return source.description
      ? source.description.replace(tags, '')
      : null;
  };

  actions.createTypes([
    schema.buildInterfaceType({
      name: 'GreenhouseJobBoardJobQuestion',
      fields: {
        descriptionText: {
          type: 'String',
          resolve: resolveDescriptionText,
        },
      },
    }),
    ...[
      'GreenhouseJobBoardJobQuestionForAttachment',
      'GreenhouseJobBoardJobQuestionForShortText',
      'GreenhouseJobBoardJobQuestionForLongText',
      'GreenhouseJobBoardJobQuestionForYesNo',
      'GreenhouseJobBoardJobQuestionForSingleSelect',
      'GreenhouseJobBoardJobQuestionForMultiSelect',
    ].map(name => schema.buildObjectType({
      name,
      interfaces: ['GreenhouseJobBoardJobQuestion'],
      fields: {
        descriptionText: {
          type: 'String',
          resolve: resolveDescriptionText,
        },
      },
    })),
  ]);
 
  // metadata
  actions.createTypes([
    schema.buildObjectType({
      name: 'JobPost',
      interfaces: ['Node'],
      fields: {
        // Note: Command E 인덱싱 용으로 추가함
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

export const createPages: GatsbyNode['createPages'] = async ({
  graphql,
  actions,
}, pluginOptions) => {
  const {
    locale,
    navigationId,
  } = pluginOptions as unknown as PluginOptions;

  type Data = {
    prismicTeamContents: {
      data?: {
        enable_faq_page?: boolean,
        enable_life_page?: boolean,
        enable_culture_page?: boolean,
      },
    },
    allPrismicTeamsArticle: {
      nodes: Array<{
        uid: string,
      }>,
    },
    allJobPost: {
      nodes: Array<{
        id: string,
        ghId: string,
      }>,
    },
    allJobDepartment: {
      nodes: Array<{
        id: string,
        slug: string,
      }>,
    },
  };

  const { data, errors } = await graphql<Data>(gql`
    query ($locale: String!) {
      prismicTeamContents(lang: { eq: $locale }) {
        data {
          enable_faq_page
          enable_life_page
          enable_culture_page
        }
      }
      allPrismicTeamsArticle(
        filter: {
          lang: { eq: $locale }
        }
      ) {
        nodes {
          uid
        }
      }
      allJobPost {
        nodes {
          id
          ghId
        }
      }
      allJobDepartment {
        nodes {
          id
          slug
        }
      }
    }
  `, { locale });

  if (errors) {
    throw errors;
  }

  if (!data) {
    throw new Error('Failed to load data');
  }

  if (!data.prismicTeamContents?.data) {
    throw new Error(`Prismic ${locale} 에 채용사이트 컨텐츠 데이터가 없습니다.`);
  }

  if (data.prismicTeamContents.data.enable_faq_page) {
    actions.createPage({
      path: '/faq/',
      component: require.resolve('./src/templates/FaqPage.tsx'),
      context: {
        locale,
        navigationId,
      },
    });
  }

  if (data.prismicTeamContents.data.enable_life_page) {
    actions.createPage({
      path: '/culture/life/',
      component: require.resolve('./src/templates/LifePage.tsx'),
      context: {
        locale,
        navigationId,
      },
    });
  }

  if (data.prismicTeamContents.data.enable_culture_page) {
    actions.createPage({
      path: '/culture/',
      component: require.resolve('./src/templates/CulturePage.tsx'),
      context: {
        locale,
        navigationId,
      },
    });
  }

  for (const jobPost of data.allJobPost.nodes) {
    actions.createPage({
      path: `/jobs/${jobPost.ghId}/`,
      component: require.resolve('./src/templates/JobPostPage.tsx'),
      context: {
        locale,
        navigationId,
        id: jobPost.id,
        ghId: jobPost.ghId,
      },
    });
    actions.createPage({
      path: `/jobs/${jobPost.ghId}/apply/`,
      component: require.resolve('./src/templates/JobApplicationPage.tsx'),
      context: {
        locale,
        navigationId,
        id: jobPost.id,
        ghId: jobPost.ghId,
      },
    });
  }

  actions.createPage({
    path: `/jobs/`,
    component: require.resolve('./src/templates/JobsPage.tsx'),
    context: {
      locale,
      navigationId,
      // Note: 전체 post 필터링 시 glob 으로 사용
      departmentId: '*',
    },
  });

  for (const department of data.allJobDepartment.nodes) {
    actions.createPage({
      path: `/jobs/${department.slug}/`,
      component: require.resolve('./src/templates/JobsPage.tsx'),
      context: {
        locale,
        navigationId,
        departmentId: department.id,
      },
    });
  }

  for (const article of data.allPrismicTeamsArticle.nodes) {
    actions.createPage({
      path: `/jobs/article/${article.uid}/`,
      component: require.resolve('./src/templates/PrismicTeamsArticlePage.tsx'),
      context: {
        locale,
        navigationId,
        uid: article.uid,
      },
    });
  }
};

export const onCreatePage: GatsbyNode['onCreateNode'] = ({
  page: _page,
  actions,
}, pluginOptions) => {
  const {
    locale,
    navigationId,
  } = pluginOptions as unknown as PluginOptions;

  const page = _page as Page;

  actions.deletePage(page);
  actions.createPage({
    ...page,
    context: {
      ...page.context,
      locale,
      navigationId,
    },
  });
}
