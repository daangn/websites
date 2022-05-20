import slugify from 'cjk-slug';
import type { GatsbyNode, NodeInput } from 'gatsby';
import type {
  GreenhouseJobBoardDepartmentNode,
  GreenhouseJobBoardJobNode,
} from '@karrotmarket/gatsby-source-greenhouse-jobboard/types';

import { isGreenhouseDepartmentNode, isGreenhouseJobNode } from './types';
import * as greenhouseJobBlockParser from './greenhouseJobBlockParser';
import * as greenhouseJobCustomFieldParser from './greenhouseJobCustomFieldParser';
export const pluginOptionsSchema: GatsbyNode['pluginOptionsSchema'] = ({
  Joi,
}) => {
  return Joi.object({
    defaultTags: Joi.object().pattern(Joi.string(), Joi.array().items(Joi.string())),
  });
};

type PluginOptions = {
  defaultTags?: {
    [boardToken: string]: string[],
  },
};

export const createSchemaCustomization: GatsbyNode['createSchemaCustomization'] = (ctx, options) => {
  const { actions, schema } = ctx;
  const { defaultTags = {} } = options as unknown as PluginOptions;

  const gql = String.raw;
  const fieldParser = greenhouseJobCustomFieldParser;

  actions.createTypes([
    schema.buildObjectType({
      name: 'JobPost',
      interfaces: ['Node'],
      extensions: {
        dontInfer: {},
        childOf: {
          types: ['GreenhouseJobBoardJob'],
        },
      },
      fields: {
        ghId: {
          type: 'String!',
        },
        parentJob: {
          type: 'GreenhouseJobBoardJob!',
          extensions: {
            link: {
              from: 'parent',
            },
          },
        },
        updatedAt: {
          type: 'Date!',
          extensions: {
            dateformat: {},
          },
          resolve(source: GreenhouseJobBoardJobNode) {
            return source.updated_at;
          },
        },
        validThrough: {
          type: 'Date',
          description: '공고 유효기간',
          extensions: {
            dateformat: {},
          },
          resolve(source: GreenhouseJobBoardJobNode) {
            return fieldParser.validThrough(source, ctx) ?? null;
          },
        },
        title: {
          type: 'String!',
        },
        boardToken: {
          type: 'String!',
        },
        boardUrl: {
          type: 'String!',
          resolve(source: GreenhouseJobBoardJobNode) {
            return source.absolute_url;
          },
        },
        content: {
          type: '[JobPostContentSection!]!',
          description: 'Parsed content',
          resolve(source: GreenhouseJobBoardJobNode) {
            const { content } = greenhouseJobBlockParser.parseContent(source.content);
            return content;
          },
        },
        rawContent: {
          type: 'String!',
          description: 'HTML content (unsafe)',
          resolve(source: GreenhouseJobBoardJobNode) {
            return source.content;
          },
        },
        corporate: {
          type: 'JobCorporate', // 이거 왜 nullable 이더라...?
          description: '회사 (당근마켓, 당근페이)',
          resolve(source: GreenhouseJobBoardJobNode) {
            return fieldParser.corporate(source, ctx);
          },
        },
        employmentType: {
          type: 'JobEmploymentType!',
          description: '고용 형태',
          resolve(source: GreenhouseJobBoardJobNode) {
            return fieldParser.employmentType(source, ctx) ?? 'FULL_TIME';
          },
        },
        alternativeCivilianService: {
          type: 'Boolean!',
          description: '산업기능요원 근무 가능합니까?',
          resolve(sourcsource: GreenhouseJobBoardJobNode) {
            return fieldParser.alternativeCivilianService(sourcsource, ctx) ?? false;
          },
        },
        priorExperience: {
          type: 'JobPriorExperience!',
          description: '경력? 신입?',
          resolve(sourcsourcsource: GreenhouseJobBoardJobNode) {
            return fieldParser.priorExperience(sourcsourcsource, ctx) ?? 'YES';
          },
        },
        chapter: {
          type: 'String!',
          description: '소속 챕터 (=직무)',
          deprecationReason: 'departments로 대체됨',
          resolve(source: GreenhouseJobBoardJobNode) {
            return fieldParser.chapter(source, ctx) ?? '';
          },
        },
        departments: {
          type: '[JobDepartment!]!',
          description: '소속',
          async resolve(source: GreenhouseJobBoardJobNode, _args, ctx) {
            const departmentIds = source.departments
              .filter(department => !department.child_ids.length)
              .filter(department => department.id !== 0)
              .map(department => department.id.toString());

            const { entries } = await ctx.nodeModel.findAll({
              type: 'JobDepartment',
              query: {
                filter: {
                  ghId: {
                    in: departmentIds,
                  },
                },
                sort: {
                  fields: ['name'],
                  order: ['ASC'],
                },
              },
            });

            return entries;
          },
        },
        keywords: {
          type: '[String!]!',
          description: '검색 키워드',
          resolve(source: GreenhouseJobBoardJobNode) {
            return fieldParser.keywords(source, ctx) ?? [];
          },
        },
        order: {
          type: 'Int!',
          description: '정렬 선호 순위 값 (signed, 기본값: 0)',
          resolve(source: GreenhouseJobBoardJobNode) {
            return fieldParser.order(source, ctx) ?? 0;
          },
        },
        externalUrl: {
          type: 'String',
          description: '외부 링크 (공고가 바깥에서 열리는 경우.. 좀 컨텐츠 많으면 노션 링크 선호되는 경우 있음)',
          resolve(source: GreenhouseJobBoardJobNode) {
            return fieldParser.externalUrl(source, ctx)?.toString() ?? null;
          },
        },
        tags: {
          type: '[String!]!',
          description: '목록에서 표시할 태그',
          resolve(source: GreenhouseJobBoardJobNode) {
            return [...defaultTags[source.boardToken] ?? [], ...fieldParser.tags(source, ctx) ?? [] ];
          },
        },
      },
    }),

    schema.buildObjectType({
      name: 'JobDepartment',
      interfaces: ['Node'],
      extensions: {
        dontInfer: {},
        childOf: {
          types: ['GreenhouseJobBoardJob'],
        },
      },
      fields: {
        ghId: {
          type: 'String!',
          resolve(source: GreenhouseJobBoardDepartmentNode) {
            return source.ghId.toString();
          },
        },
        name: {
          type: 'String!',
        },
        slug: {
          type: 'String',
          resolve(source: GreenhouseJobBoardDepartmentNode) {
            return slugify(source.name);
          },
        },
        jobPosts: {
          type: '[JobPost!]!',
          async resolve(source: GreenhouseJobBoardDepartmentNode, _args, ctx) {
            const { entries } = await ctx.nodeModel.findAll({
              type: 'JobPost',
              query: {
                filter: {
                  departments: {
                    elemMatch: {
                      ghId: { eq: source.ghId.toString() },
                    },
                  },
                },
                sort: {
                  fields: ['order', 'title'],
                  order: ['DESC', 'ASC'],
                },
              },
            });
            return entries;
          },
        },
      },
    }),
  ]);

  actions.createTypes(gql`
    # 이건 assertion이 안되네
    type GreenhouseJobBoardJob implements Node {
      childJobPost: JobPost!
    }

    enum JobCorporate {
      KARROT_MARKET
      KARROT_PAY
    }

    enum JobEmploymentType {
      FULL_TIME
      CONTRACTOR
      INTERN
      ASSISTANT
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

    type JobPostContentSection {
      title: String!
      level: HeadingLevel!
      bodyHtml: String!
    }
  `);
};

export const onCreateNode: GatsbyNode['onCreateNode'] = (ctx,options) => {
  const {
    node,
    actions,
    createNodeId,
    createContentDigest,
  } = ctx;
  if (isGreenhouseJobNode(node)) {
    const jobPostNode: NodeInput = {
      ...node,
      id: createNodeId(`GreenhouseJobBoardJob:${node.id} >>> JobPost`),
      parent: node.id,
      children: [],
      internal: {
        type: 'JobPost',
        contentDigest: createContentDigest(node),
      },
    };

    actions.createNode(jobPostNode);
    actions.createParentChildLink({
      parent: node,
      child: jobPostNode,
    });

  } else if (isGreenhouseDepartmentNode(node)) {
    // Leaf node 만 다룸
    if (node.child_ids.length) {
      return;
    }

    const jobChapterNode: NodeInput = {
      ...node,
      id: createNodeId(`GreenhouseJobBoardDepartment:${node.id} >>> JobChapter`),
      parent: node.id,
      children: [],
      internal: {
        type: 'JobDepartment',
        contentDigest: createContentDigest(node),
      },
    };

    actions.createNode(jobChapterNode);
    actions.createParentChildLink({
      parent: node,
      child: jobChapterNode,
    });
  }
};
