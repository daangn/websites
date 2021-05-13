"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports.onCreateNode = exports.createSchemaCustomization = void 0;

var _types = require("./types");

var greenhouseJobBlockParser = _interopRequireWildcard(require("./greenhouseJobBlockParser"));

var greenhouseJobCustomFieldParser = _interopRequireWildcard(require("./greenhouseJobCustomFieldParser"));

const createSchemaCustomization = ({
  actions,
  schema,
  reporter
}) => {
  const gql = String.raw;
  actions.createTypes(gql`
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

      # 회사 (당근마켓, 망근페이)
      corporate: JobCorporate

      # 고용 형태
      employmentType: JobEmploymentType!

      # 산업기능요원 근무 가능합니까?
      alternativeCivilianService: Boolean!

      # 경력? 신입?
      priorExperience: JobPriorExperience!

      # 소속 챕터 (=직무)
      chapter: String!

      # 검색 키워드
      keywords: [String!]!
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
  `);
  actions.createTypes(schema.buildInterfaceType({
    name: 'JobPostContentSection',
    resolveType: source => {
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
        type: 'String!'
      },
      level: {
        type: 'HeadingLevel!'
      },
      rawContent: {
        type: 'String!'
      }
    }
  }));
};

exports.createSchemaCustomization = createSchemaCustomization;

const onCreateNode = ctx => {
  const {
    node,
    actions,
    createNodeId,
    createContentDigest
  } = ctx; // Note: 나중에 다른 타입 추가로 transform 할 수 있으므로 early return 하지 않겠습니다.

  if ((0, _types.isGreenhouseJobNode)(node)) {
    var _fieldParser$employme, _fieldParser$alternat, _fieldParser$priorExp, _fieldParser$chapter, _fieldParser$keywords;

    const {
      content,
      raw: rawContent
    } = greenhouseJobBlockParser.parseHtml(node.content);
    const fieldParser = greenhouseJobCustomFieldParser;
    const nodeSource = {
      id: createNodeId(`GreenhouseJob:${node.id} >>> JobPost`),
      title: node.title,
      boardUrl: node.absolute_url,
      rawContent,
      content,
      corporate: fieldParser.corporate(node, ctx),
      employmentType: (_fieldParser$employme = fieldParser.employmentType(node, ctx)) !== null && _fieldParser$employme !== void 0 ? _fieldParser$employme : 'FULL_TIME',
      alternativeCivilianService: (_fieldParser$alternat = fieldParser.alternativeCivilianService(node, ctx)) !== null && _fieldParser$alternat !== void 0 ? _fieldParser$alternat : false,
      priorExperience: (_fieldParser$priorExp = fieldParser.priorExperience(node, ctx)) !== null && _fieldParser$priorExp !== void 0 ? _fieldParser$priorExp : 'YES',
      chapter: (_fieldParser$chapter = fieldParser.chapter(node, ctx)) !== null && _fieldParser$chapter !== void 0 ? _fieldParser$chapter : '',
      keywords: (_fieldParser$keywords = fieldParser.keywords(node, ctx)) !== null && _fieldParser$keywords !== void 0 ? _fieldParser$keywords : []
    };
    const jobPostNode = {
      parent: node.id,
      children: [],
      internal: {
        type: 'JobPost',
        contentDigest: createContentDigest(nodeSource)
      },
      ...nodeSource
    };
    actions.createNode(jobPostNode);
    actions.createParentChildLink({
      parent: node,
      // See https://github.com/gatsbyjs/gatsby/issues/19993
      child: jobPostNode
    });
  }
};

exports.onCreateNode = onCreateNode;