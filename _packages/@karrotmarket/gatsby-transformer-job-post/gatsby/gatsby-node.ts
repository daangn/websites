import type {
  GatsbyNode,
  Node,
  NodeInput
} from 'gatsby';
import { isGreenhouseJobNode } from './types';

import * as greenhouseJobBlockParser from './greenhouseJobBlockParser';
import * as greenhouseJobCustomFieldParser from './greenhouseJobCustomFieldParser';
export const pluginOptionsSchema: GatsbyNode['pluginOptionsSchema'] = ({
  Joi,
}) => {
  return Joi.object({
    defaultTags: Joi.object().pattern(Joi.string(), Joi.array().items(Joi.string()))
  });
};

type PluginOptions = {
  defaultTags:{ [boardToken:string]: string[] }
};

export const createSchemaCustomization: GatsbyNode['createSchemaCustomization'] = ({
  actions,
  schema,
  reporter,
}) => {
  const gql = String.raw;

  actions.createTypes(gql`
    # 이건 assertion이 안되네
    type GreenhouseJob implements Node {
      childJobPost: JobPost!
    }

    type JobPost implements Node
      @dontInfer
      @childOf(types: ["GreenhouseJob"])
    {
      ghId: String!

      updatedAt: Date! @dateformat

      # 공고 유효 기간
      validThrough: Date @dateformat

      title: String!

      boardUrl: String!

      # Parsed content
      content: [JobPostContentSection!]!

      # HTML content (unsafe)
      rawContent: String!

      # 회사 (당근마켓, 당근페이)
      corporate: JobCorporate

      # 고용 형태
      employmentType: JobEmploymentType!

      # 산업기능요원 근무 가능합니까?
      alternativeCivilianService: Boolean!

      # 경력? 신입?
      priorExperience: JobPriorExperience!

      # 소속 챕터 (=직무)
      chapter: String!

      # 포트폴리오 필수 여부
      portfolioRequired: Boolean!

      # 검색 키워드
      keywords: [String!]!

      # 정렬 선호 순위 값 (signed, 기본값: 0)
      order: Int!

      # 외부 링크 (공고가 바깥에서 열리는 경우.. 좀 컨텐츠 많으면 노션 링크 선호되는 경우 있음)
      externalUrl: String

      # 목록에서 표시할 태그
      tags: [String!]!
    }
  `);

  actions.createTypes(gql`
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
  const { defaultTags } = options as unknown as PluginOptions;

  // Note: 나중에 다른 타입 추가로 transform 할 수 있으므로 early return 하지 않겠습니다.
  if (isGreenhouseJobNode(node)) {
    const { content, raw: rawContent } = greenhouseJobBlockParser.parseContent(node.content);
    const fieldParser = greenhouseJobCustomFieldParser;

    const nodeSource = {
      id: createNodeId(`GreenhouseJob:${node.id} >>> JobPost`),
      updatedAt: node.updated_at,
      ghId: node.ghId.toString(),
      title: node.title,
      boardUrl: node.absolute_url,
      rawContent,
      content,
      validThrough: fieldParser.validThrough(node, ctx) ?? null,
      corporate: fieldParser.corporate(node, ctx),
      employmentType: fieldParser.employmentType(node, ctx) ?? 'FULL_TIME',
      alternativeCivilianService: fieldParser.alternativeCivilianService(node, ctx) ?? false,
      priorExperience: fieldParser.priorExperience(node, ctx) ?? 'YES',
      chapter: fieldParser.chapter(node, ctx) ?? '',
      portfolioRequired: fieldParser.portfolioRequirement(node, ctx) ?? false,
      keywords: fieldParser.keywords(node, ctx) ?? [],
      order: fieldParser.order(node, ctx) ?? 0,
      externalUrl: fieldParser.externalUrl(node, ctx)?.toString() ?? null,
      tags: [ ...defaultTags[node.boardToken] ?? [], ...fieldParser.tags(node, ctx) ?? [] ],
    };

    const jobPostNode: NodeInput = {
      parent: node.id,
      children: [],
      internal: {
        type: 'JobPost',
        contentDigest: createContentDigest(nodeSource),
      },
      ...nodeSource,
    };

    actions.createNode(jobPostNode);
    actions.createParentChildLink({
      parent: node,
      // See https://github.com/gatsbyjs/gatsby/issues/19993
      child: jobPostNode as unknown as Node,
    });
  }
};
