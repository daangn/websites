"use strict";

exports.__esModule = true;
exports.onCreateNode = exports.createSchemaCustomization = exports.pluginOptionsSchema = void 0;

var _types = require("./types");

const pluginOptionsSchema = ({
  Joi
}) => {
  return Joi.object({
    baseUrl: Joi.string().uri().required(),
    uid: Joi.string().required()
  });
};

exports.pluginOptionsSchema = pluginOptionsSchema;

const createSchemaCustomization = ({
  actions,
  schema
}, options) => {
  // must be validated by pluginOptionsSchema
  const pluginOptions = options;
  const baseUrl = new URL(pluginOptions.baseUrl);
  const gql = String.raw;
  actions.createTypes(gql`
    type SiteNavigation implements Node
      @dontInfer
      @childOf(types: ["PrismicSiteNavigation"])
    {
      headerEntries: [SiteNavigationEntry!]!
      footerEntries: [SiteNavigationEntry!]!
      socialProfiles: [SocialProfileEntry!]!
    }

    enum SocialService {
      FACEBOOK
      INSTAGRAM
      TWITTER
      LINKEDIN
      MEDIUM
      GITHUB
    }
  `);
  actions.createTypes([schema.buildInterfaceType({
    name: 'SiteNavigationEntry',
    resolveType: source => {
      if (source.link.link_type !== 'Web') {
        throw new Error('SiteNavigation.link 값은 Web 링크만 사용할 수 있습니다.');
      }

      const url = new URL(source.link.url);
      return url.origin === baseUrl.origin ? 'SiteNavigationEntryInternal' : 'SiteNavigationEntryExternal';
    },
    fields: {
      href: {
        type: 'String!',
        resolve: source => {
          if (source.link.link_type !== 'Web') {
            throw new Error('SiteNavigation.link 값은 Web 링크만 사용할 수 있습니다.');
          }

          return source.link.url;
        }
      },
      displayName: {
        type: 'String!',
        resolve: source => source.display_name
      },
      category: {
        type: 'String'
      }
    }
  }), schema.buildObjectType({
    name: 'SiteNavigationEntryInternal',
    interfaces: ['SiteNavigationEntry'],
    fields: {
      href: {
        type: 'String!',
        resolve: source => {
          if (source.link.link_type !== 'Web') {
            throw new Error('SiteNavigation.link 값은 Web 링크만 사용할 수 있습니다.');
          }

          return source.link.url;
        }
      },
      displayName: {
        type: 'String!',
        resolve: source => source.display_name
      },
      category: {
        type: 'String'
      },
      pathname: {
        type: 'String!',
        resolve: source => {
          if (source.link.link_type !== 'Web') {
            throw new Error('SiteNavigation.link 값은 Web 링크만 사용할 수 있습니다.');
          }

          const url = new URL(source.link.url);
          return url.pathname;
        }
      }
    }
  }), schema.buildObjectType({
    name: 'SiteNavigationEntryExternal',
    interfaces: ['SiteNavigationEntry'],
    fields: {
      href: {
        type: 'String!',
        resolve: source => {
          if (source.link.link_type !== 'Web') {
            throw new Error('SiteNavigation.link 값은 Web 링크만 사용할 수 있습니다.');
          }

          return source.link.url;
        }
      },
      displayName: {
        type: 'String!',
        resolve: source => source.display_name
      },
      category: {
        type: 'String'
      },
      url: {
        type: 'String!',
        resolve: source => {
          if (source.link.link_type !== 'Web') {
            throw new Error('SiteNavigation.link 값은 Web 링크만 사용할 수 있습니다.');
          }

          return source.link.url;
        }
      }
    }
  }), schema.buildObjectType({
    name: 'SocialProfileEntry',
    fields: {
      service: {
        type: 'SocialService!',
        resolve: source => {
          return source.social_type.toUpperCase();
        }
      },
      url: {
        type: 'String!',
        resolve: source => {
          if (source.link.link_type !== 'Web') {
            throw new Error('SiteNavigation.link 값은 Web 링크만 사용할 수 있습니다.');
          }

          return source.link.url;
        }
      }
    }
  })]);
};

exports.createSchemaCustomization = createSchemaCustomization;

const onCreateNode = ({
  node,
  createNodeId,
  createContentDigest,
  actions
}, options) => {
  // must be validated by pluginOptionsSchema
  const {
    uid
  } = options;

  if ((0, _types.isPrismicSiteNavigationNode)(node)) {
    if (node.uid === uid) {
      const siteNavigationNode = {
        id: createNodeId(`PrismicSiteNavigation:${node.id} >>> SiteNavigation`),
        headerEntries: node.data.header_entries,
        footerEntries: node.data.footer_entries,
        socialProfiles: node.data.social_entries
      };
      actions.createNode({
        parent: node.id,
        children: [],
        internal: {
          type: 'SiteNavigation',
          contentDigest: createContentDigest(siteNavigationNode)
        },
        ...siteNavigationNode
      });
      actions.createParentChildLink({
        parent: node,
        child: siteNavigationNode
      });
    }
  }
};

exports.onCreateNode = onCreateNode;