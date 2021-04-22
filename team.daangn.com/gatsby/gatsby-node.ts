import type {
  GatsbyNode,
  Node,
  NodeInput,
} from 'gatsby';
import _ from 'lodash';
import cheerio from 'cheerio';
import { decode as decodeEntities } from 'html-entities';
import type { GreenhouseJob } from '@karrotmarket/gatsby-source-greenhouse-job-board/types';

interface NormalizedAPI<T1, T2, Return> {
  (t1: T1, t2: T2): Return | Promise<Return>;
}

type NormalizeAPI<T extends keyof GatsbyNode> = (
  NonNullable<GatsbyNode[T]> extends NormalizedAPI<infer T1, infer T2, infer Return>
  ? NormalizedAPI<T1, T2, Return>
  : false
);

type GreenhouseJobNode = (
  & Node
  & Omit<GreenhouseJob, 'id'>
  & { ghId: number }
);

type PrismicLink = (
  | {
    link_type: 'Any',
  }
  | {
    link_type: 'Web',
    url: string,
  }
);
type PrismicSiteNavigationNode = (
  & Node
  & {
    uid: string,
    prismicId: string,
    data: {
      canonical_link: PrismicLink,
      header_entries: {
        display_name: string | null,
        category: string | null,
        link: PrismicLink,
      }[],
      footer_entries: {
        display_name: string | null,
        category: string | null,
        link: PrismicLink,
      }[],
      social_entries: {
        social_type: string | null,
        link: PrismicLink,
      }[],
    },
  }
);

const gql = String.raw;

export const onCreateBabelConfig: NormalizeAPI<'onCreateBabelConfig'> = ({
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

export const createSchemaCustomization: NormalizeAPI<'createSchemaCustomization'> = ({
  actions,
  schema,
  reporter,
}) => {
  actions.createTypes(
    schema.buildInterfaceType({
      name: 'JobPostContentSection',
      resolveType: (source: { tagName: string }) => {
        switch (source.tagName) {
          case 'p':
            return 'JobPostContentParagraphSection';
          case 'ol':
            return 'JobPostContentOrderedListSection';
          case 'ul':
            return 'JobPostContentUnorderedListSection';
          default:
            reporter.panic(`<${source.tagName}> is not supported`);
        }
      },
      fields: {
        title: {
          type: 'String!',
        },
        level: {
          type: 'HeadingLevel!',
        },
        rawContent: {
          type: 'String!',
        },
      },
    }),
  );
  actions.createTypes(gql`
    enum JobEmploymentType {
      FULL_TIME
      CONTRACTOR
      INTERN
    }

    enum JobPriorExperience {
      # 경력 있음
      YES

      # 경력 없음
      NO

      # 무관
      WHATEVER
    }

    enum HeadingLevel {
      H1
      H2
      H3
      H4
      H5
      H6
    }

    type JobPostContentUnorderedListSection implements JobPostContentSection {
      title: String!
      level: HeadingLevel!

      # HTML content (unsafe)
      rawContent: String!

      items: [String!]!
    }

    type JobPostContentOrderedListSection implements JobPostContentSection {
      title: String!
      level: HeadingLevel!

      # HTML content (unsafe)
      rawContent: String!

      items: [String!]!
    }

    type JobPostContentParagraphSection implements JobPostContentSection {
      title: String!
      level: HeadingLevel!

      # HTML content (unsafe)
      rawContent: String!

      paragraph: String!
    }

    type JobPost implements Node
      @dontInfer
      @childOf(types: ["GreenhouseJob"])
    {
      title: String!

      boardUrl: String!

      # Parsed content
      content: [JobPostContentSection!]!

      # HTML content (unsafe)
      rawContent: String!

      # 고용 형태
      employmentType: JobEmploymentType!

      # 산업기능요원 근무 가능합니까?
      alternativeCivilianService: Boolean!

      # 경력? 신입?
      priorExperience: JobPriorExperience!

      # 소속 챕터 (=직무)
      chapter: String!

      keywords: [String!]!
    }
  `);

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

  actions.createTypes([
    schema.buildInterfaceType({
      name: 'SiteNavigationEntry',
      resolveType: (source: { link: PrismicLink }) => {
        if (source.link.link_type !== 'Web') {
          throw new Error(
            'SiteNavigation.link 값은 Web 링크만 사용할 수 있습니다.',
          );
        }
        const url = new URL(source.link.url);

        // FIXME: plugin options 로 분리
        return url.origin === 'https://team.daangn.com'
          ? 'SiteNavigationEntryInternal'
          : 'SiteNavigationEntryExternal'
      },
      fields: {
        href: {
          type: 'String!',
          resolve: (source: { link: PrismicLink }) => {
            if (source.link.link_type !== 'Web') {
              throw new Error(
                'SiteNavigation.link 값은 Web 링크만 사용할 수 있습니다.',
              );
            }
            return source.link.url;
          },
        },
        displayName: {
          type: 'String!',
          resolve: (source: { display_name: string }) => source.display_name,
        },
        category: {
          type: 'String',
        },
      },
    }),
    schema.buildObjectType({
      name: 'SiteNavigationEntryInternal',
      interfaces: ['SiteNavigationEntry'],
      fields: {
        href: {
          type: 'String!',
          resolve: (source: { link: PrismicLink }) => {
            if (source.link.link_type !== 'Web') {
              throw new Error(
                'SiteNavigation.link 값은 Web 링크만 사용할 수 있습니다.',
              );
            }
            return source.link.url;
          },
        },
        displayName: {
          type: 'String!',
          resolve: (source: { display_name: string }) => source.display_name,
        },
        category: {
          type: 'String',
        },
        pathname: {
          type: 'String!',
          resolve: (source: { link: PrismicLink }) => {
            if (source.link.link_type !== 'Web') {
              throw new Error(
                'SiteNavigation.link 값은 Web 링크만 사용할 수 있습니다.',
              );
            }
            const url = new URL(source.link.url);
            return url.pathname;
          },
        },
      },
    }),
    schema.buildObjectType({
      name: 'SiteNavigationEntryExternal',
      interfaces: ['SiteNavigationEntry'],
      fields: {
        href: {
          type: 'String!',
          resolve: (source: { link: PrismicLink }) => {
            if (source.link.link_type !== 'Web') {
              throw new Error(
                'SiteNavigation.link 값은 Web 링크만 사용할 수 있습니다.',
              );
            }
            return source.link.url;
          },
        },
        displayName: {
          type: 'String!',
          resolve: (source: { display_name: string }) => source.display_name,
        },
        category: {
          type: 'String',
        },
        url: {
          type: 'String!',
          resolve: (source: { link: PrismicLink }) => {
            if (source.link.link_type !== 'Web') {
              throw new Error(
                'SiteNavigation.link 값은 Web 링크만 사용할 수 있습니다.',
              );
            }
            return source.link.url;
          },
        },
      },
    }),
    schema.buildObjectType({
      name: 'SocialProfileEntry',
      fields: {
        service: {
          type: 'SocialService!',
          resolve: (source: { social_type: string }) => {
            return source.social_type.toUpperCase();
          },
        },
        url: {
          type: 'String!',
          resolve: (source: { link: PrismicLink }) => {
            if (source.link.link_type !== 'Web') {
              throw new Error(
                'SiteNavigation.link 값은 Web 링크만 사용할 수 있습니다.',
              );
            }
            return source.link.url;
          },
        },
      },
    }),
  ]);
};

export const onCreateNode: NormalizeAPI<'onCreateNode'> = ({
  node,
  actions,
  createNodeId,
  createContentDigest,
  reporter,
}) => {
  function isPrismicSiteNavigationNode(node: Node): node is PrismicSiteNavigationNode {
    return node.internal.type === 'PrismicSiteNavigation';
  }

  function isGreenhouseJobNode(node: Node): node is GreenhouseJobNode {
    return node.internal.type === 'GreenhouseJob';
  }

  if (isPrismicSiteNavigationNode(node)) {
    const siteNavigationNode = {
      id: createNodeId(`PrismicSiteNavigation:${node.id} >>> SiteNavigation`),
      headerEntries: node.data.header_entries,
      footerEntries: node.data.footer_entries,
      socialProfiles: node.data.social_entries,
    };
    actions.createNode({
      ...siteNavigationNode,
      parent: node.id,
      internal: {
        type: 'SiteNavigation',
        contentDigest: createContentDigest(siteNavigationNode),
      },
    });
    actions.createParentChildLink({
      parent: node,
      child: siteNavigationNode as unknown as Node,
    });
  }

  if (isGreenhouseJobNode(node)) {
    function findMetadataById(node: GreenhouseJobNode, id: number) {
      const metadata = node.metadata.find(v => v.id === id);
      return metadata && ({ type: metadata.value_type, value: metadata.value });
    }

    function employmentType(node: GreenhouseJobNode) {
      const fieldId = 503398003;
      const field = findMetadataById(node, fieldId);
      return field && (() => {
        switch (field.value) {
          case '정규직': return 'FULL_TIME';
          case '계약직': return 'CONTRACTOR';
          case '인턴': return 'INTERN';
          case null: {
            reporter.warn(reporter.stripIndent`
              Employment Type 필드 값이 비어있습니다. (Greenhouse ID: ${node.ghId})
            `);
            return 'FULL_TIME';
          }
          default:
            reporter.panic(reporter.stripIndent`
              알 수 없는 Employment Type 필드 값 입니다. 값: ${field.value}

              Greenhouse 에서 커스텀 필드 형식을 확인하고 코드를 올바르게 변경해주세요.

              See https://app3.greenhouse.io/custom_fields/jobs/${fieldId}
            `);
        }
      })();
    }

    function alternativeCivilianService(node: GreenhouseJobNode) {
      const fieldId = 5784622003;
      const field = findMetadataById(node, fieldId);
      return field && (() => {
        if (field.type === 'yes_no') {
          if (field.value == null) {
            reporter.warn(reporter.stripIndent`
              Alternative Civilian Service 필드 값이 비어있습니다. (Greenhouse ID: ${node.ghId})
            `);
            return false;
          }
          if (typeof field.value === 'boolean') {
            return field.value;
          }
        }
        reporter.panic(reporter.stripIndent`
          Alternative Civilian Service 필드 값이 올바르지 않습니다. 값: ${field.value}

          Greenhouse 에서 커스텀 필드 형식을 확인하고 코드를 올바르게 변경해주세요.

          See https://app3.greenhouse.io/custom_fields/jobs/${fieldId}
        `);
      })();
    }

    function priorExperience(node: GreenhouseJobNode) {
      const fieldId = 5784623003;
      const field = findMetadataById(node, fieldId);
      return field && (() => {
        switch (field.value) {
          case '경력': return 'YES';
          case '신입': return 'NO';
          case '신입/경력': return 'WHATEVER';
          case null: {
              reporter.warn(reporter.stripIndent`
                Prior Experience 필드 값이 비어있습니다. (Greenhouse Id: ${node.ghId})
              `);
            return 'YES';
          }
          default:
            reporter.panic(reporter.stripIndent`
              Prior Experience 필드 값이 올바르지 않습니다. 값: ${field.value}

              Greenhouse 에서 커스텀 필드 형식을 확인하고 코드를 올바르게 변경해주세요.

              See https://app3.greenhouse.io/custom_fields/jobs/${fieldId}
            `);
        }
      })();
    }

    function keywords(node: GreenhouseJobNode) {
      const metadata = findMetadataById(node, 6008744003);
      return (
        metadata?.value
        && typeof metadata.value === 'string'
        && metadata.value.split(',').map(part => part.trim())
      ) ?? [];
    }

    const $ = cheerio.load(decodeEntities(node.content), null, false);
    $('.content-intro').remove();
    $('.content-conclusion').remove();

    // NOTE: 몇 필드들은 required 지만 나중에 추가 되서 값이 없을 수 있음
    // 일단 기본값을 넣어 두지만 최종적으로는 그린하우스에서 모두 값을 제공해야함
    const jobPostNodeSource = {
      title: node.title,

      boardUrl: node.absolute_url,

      rawContent: $.root().html(),
      content: [...extractSections($)],

      employmentType: employmentType(node),
      alternativeCivilianService: alternativeCivilianService(node),
      priorExperience: priorExperience(node),
      // FIXME
      chapter: findMetadataById(node, 6008743003) ?? '',
      // FIXME
      keywords: keywords(node),
    };

    const jobPostNode: NodeInput = {
      id: createNodeId(`${node.id} >>> JobPost`),
      parent: node.id,
      children: [],
      internal: {
        type: 'JobPost',
        contentDigest: createContentDigest(jobPostNodeSource),
      },
      ...jobPostNodeSource,
    };

    actions.createNode(jobPostNode);
    actions.createParentChildLink({
      parent: node,
      // See https://github.com/gatsbyjs/gatsby/issues/19993
      child: jobPostNode as unknown as Node,
    });
  }
};

function *extractSections($: cheerio.Root) {
  const heading = 'h1,h2,h3,h4,h5,h6';

  let $cursor = $.root().children(heading).first();
  while ($cursor.length) {
    const $body = $cursor.next();

    const headingElement = $cursor.get(0);
    const bodyElement = $body.get(0);
    if (!(headingElement && bodyElement)) {
      return;
    }

    const title = $cursor.text();
    const level = headingElement.tagName.toUpperCase();

    switch (bodyElement.tagName.toLowerCase()) {
      case 'p':
        yield {
          tagName: 'p',
          title,
          level,
          rawContent: $body.html(),
          paragraph: $body.text(),
        } as const;
        break;
      case 'ol':
        yield {
          tagName: 'ol',
          title,
          level,
          rawContent: $body.html(),
          items: $body.children('li').map(function () { return $(this).text() }).get(),
        } as const;
        break;
      case 'ul':
        yield {
          tagName: 'ul',
          title,
          level,
          rawContent: $body.html(),
          items: $body.children('li').map(function () { return $(this).text() }).get(),
        } as const;
        break;
      // Add more sections...
    }

    $cursor = $body.next(heading);
  }
}
