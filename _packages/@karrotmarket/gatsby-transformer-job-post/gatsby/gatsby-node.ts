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
    defaultTags: Joi.object().pattern(Joi.string(), Joi.array().items(Joi.string())),
  });
};

type PluginOptions = {
  defaultTags?: {
    [boardToken: string]: string[],
  },
};

export const createSchemaCustomization: GatsbyNode['createSchemaCustomization'] = ({
  actions,
  schema,
  reporter,
}) => {
  const gql = String.raw;

  actions.createTypes(gql`
    # 이건 assertion이 안되네
    type GreenhouseJobBoardJob implements Node {
      childJobPost: JobPost!
    }

    type JobPost implements Node
      @dontInfer
      @childOf(types: ["GreenhouseJobBoardJob"])
    {
      ghId: String!

      parentJob: GreenhouseJobBoardJob! @link(from: "parent")

      updatedAt: Date! @dateformat

      # 공고 유효 기간
      validThrough: Date @dateformat

      title: String!

      boardToken: String!

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

      # Custom Question 으로 폼 마이그레이션 중...
      # 점진적인 마이그레이션 체크를 위한 플래그 값 (마이그레이션 완료하면 제거 예정)
      _customQuestionMigrated: Boolean!
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
  const { defaultTags = {} } = options as unknown as PluginOptions;

  // Note: 나중에 다른 타입 추가로 transform 할 수 있으므로 early return 하지 않겠습니다.
  if (isGreenhouseJobNode(node)) {
    const { content, raw: rawContent } = greenhouseJobBlockParser.parseContent(node.content);
    const fieldParser = greenhouseJobCustomFieldParser;

    const customQuestionMigrated = fieldParser._customQuestionMigrated(node, ctx) ?? false;
    if (!customQuestionMigrated) {
      ctx.reporter.warn(ctx.reporter.stripIndent`
        아직 Custom Questions 마이그레이션이 완료되지 않은 공고입니다.
          See https://app3.greenhouse.io/jobapps/4780813003/edit

        Job Post에서 Custom Questions을 설정하고 Job Info에서 _customQuestionMigrated 필드를 true로 변경해주세요.
      `);
    }

    const nodeSource = {
      id: createNodeId(`GreenhouseJobBoardJob:${node.id} >>> JobPost`),
      updatedAt: node.updated_at,
      ghId: node.ghId.toString(),
      title: node.title,
      boardToken: node.boardToken,
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
      _customQuestionMigrated: customQuestionMigrated,
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
