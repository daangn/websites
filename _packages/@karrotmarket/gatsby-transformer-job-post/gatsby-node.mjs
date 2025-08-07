// @ts-check

/**
 * @typedef {(
 *   import('@karrotmarket/gatsby-source-greenhouse-jobboard/types').GreenhouseJobBoardDepartmentNode
 * )} GreenhouseJobBoardDepartmentNode
 *
 * @typedef {(
 *   import('@karrotmarket/gatsby-source-greenhouse-jobboard/types').GreenhouseJobBoardJobNode
 * )} GreenhouseJobBoardJobNode
 *
 * @typedef {import('gatsby').GatsbyNode} GatsbyNode
 * @typedef {import('gatsby').NodeInput} NodeInput
 *
 * @typedef {import('./types').PluginOptions} PluginOptions
 */

import slugify from 'cjk-slug';

import * as greenhouseJobBlockParser from './greenhouseJobBlockParser.mjs';
import * as greenhouseJobCustomFieldParser from './greenhouseJobCustomFieldParser.mjs';
import { isGreenhouseDepartmentNode, isGreenhouseJobNode } from './types.mjs';

/** @type {GatsbyNode['pluginOptionsSchema']} */
export const pluginOptionsSchema = ({ Joi }) => {
  return Joi.object({
    defaultTags: Joi.object().pattern(Joi.string(), Joi.array().items(Joi.string())),
  });
};

/** @type {GatsbyNode['createSchemaCustomization']} */
export const createSchemaCustomization = (ctx, options) => {
  const { actions, schema } = ctx;

  /** @type {PluginOptions} */
  // @ts-ignore
  const { defaultTags = {} } = options;

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
          /** @param {GreenhouseJobBoardJobNode} source */
          resolve(source) {
            return source.updated_at;
          },
        },
        validThrough: {
          type: 'Date',
          description: '공고 유효기간',
          extensions: {
            dateformat: {},
          },
          /** @param {GreenhouseJobBoardJobNode} source */
          resolve(source) {
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
          /** @param {GreenhouseJobBoardJobNode} source */
          resolve(source) {
            return source.absolute_url;
          },
        },
        content: {
          type: '[JobPostContentSection!]!',
          description: 'Parsed content',
          /** @param {GreenhouseJobBoardJobNode} source */
          resolve(source) {
            const { content } = greenhouseJobBlockParser.parseContent(source.content);
            return content;
          },
        },
        rawContent: {
          type: 'String!',
          description: 'HTML content (unsafe)',
          /** @param {GreenhouseJobBoardJobNode} source */
          resolve(source) {
            return source.content;
          },
        },
        corporate: {
          type: 'JobCorporate', // 이거 왜 nullable 이더라...?
          description: '회사 (당근, 당근페이)',
          /** @param {GreenhouseJobBoardJobNode} source */
          resolve(source) {
            return fieldParser.corporate(source, ctx);
          },
        },
        employmentType: {
          type: 'JobEmploymentType!',
          description: '고용 형태',
          /** @param {GreenhouseJobBoardJobNode} source */
          resolve(source) {
            return fieldParser.employmentType(source, ctx) ?? 'FULL_TIME';
          },
        },
        alternativeCivilianService: {
          type: 'Boolean!',
          description: '산업기능요원 근무 가능합니까?',
          /** @param {GreenhouseJobBoardJobNode} source */
          resolve(source) {
            return fieldParser.alternativeCivilianService(source, ctx) ?? false;
          },
        },
        priorExperience: {
          type: 'JobPriorExperience!',
          description: '경력? 신입?',
          /** @param {GreenhouseJobBoardJobNode} source */
          resolve(source) {
            return fieldParser.priorExperience(source, ctx) ?? 'YES';
          },
        },
        chapter: {
          type: 'String!',
          description: '소속 챕터 (=직무)',
          deprecationReason: 'departments로 대체됨',
          /** @param {GreenhouseJobBoardJobNode} source */
          resolve(source) {
            return fieldParser.chapter(source, ctx) ?? '';
          },
        },
        departments: {
          type: '[JobDepartment!]!',
          description: '소속',
          /** @param {GreenhouseJobBoardJobNode} source */
          async resolve(source, _args, ctx) {
            const departmentIds = source.departments
              .filter((department) => !department.child_ids.length)
              .filter((department) => department.id !== 0)
              .map((department) => department.id.toString());

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
          /** @param {GreenhouseJobBoardJobNode} source */
          resolve(source) {
            return fieldParser.keywords(source, ctx) ?? [];
          },
        },
        order: {
          type: 'Int!',
          description: '정렬 선호 순위 값 (signed, 기본값: 0)',
          /** @param {GreenhouseJobBoardJobNode} source */
          resolve(source) {
            return fieldParser.order(source, ctx) ?? 0;
          },
        },
        externalUrl: {
          type: 'String',
          description:
            '외부 링크 (공고가 바깥에서 열리는 경우.. 좀 컨텐츠 많으면 노션 링크 선호되는 경우 있음)',
          /** @param {GreenhouseJobBoardJobNode} source */
          resolve(source) {
            return fieldParser.externalUrl(source, ctx)?.toString() ?? null;
          },
        },
        tags: {
          type: '[String!]!',
          description: '목록에서 표시할 태그',
          /** @param {GreenhouseJobBoardJobNode} source */
          resolve(source) {
            return [
              ...(defaultTags[source.boardToken] ?? []),
              ...(fieldParser.tags(source, ctx) ?? []),
            ];
          },
        },
        searchable: {
          type: 'Boolean!',
          resolve: (source) => !source.fields?.hidden,
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
          /** @param {GreenhouseJobBoardDepartmentNode} source */
          resolve(source) {
            return source.ghId.toString();
          },
        },
        name: {
          type: 'String!',
        },
        slug: {
          type: 'String',
          /** @param {GreenhouseJobBoardDepartmentNode} source */
          resolve(source) {
            return slugify(source.name);
          },
        },
        jobPosts: {
          type: '[JobPost!]!',
          /** @param {GreenhouseJobBoardDepartmentNode} source */
          async resolve(source, _args, ctx) {
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
      PART_TIME
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

/** @type {GatsbyNode['onCreateNode']} */
export const onCreateNode = (ctx) => {
  const { node, actions, createNodeId, createContentDigest } = ctx;
  if (isGreenhouseJobNode(node)) {
    /** @type {NodeInput} */
    const jobPostNode = {
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

    /** @type {NodeInput} */
    const jobChapterNode = {
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
