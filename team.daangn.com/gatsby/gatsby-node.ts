import type { GatsbyNode, Node } from 'gatsby';
import { Option } from '@cometjs/core';

interface NormalizedAPI<T1, T2, Return> {
  (t1: T1, t2: T2): Return | Promise<Return>;
}

export type NormalizeAPI<T extends keyof GatsbyNode> = (
  NonNullable<GatsbyNode[T]> extends NormalizedAPI<infer T1, infer T2, infer Return>
  ? NormalizedAPI<T1, T2, Return>
  : false
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
}) => {
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

    type JobPost implements Node
      @dontInfer
      @childOf(types: ["GreenhouseJob"]) {

      title: String!

      boardUrl: String!

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
};

export const onCreateNode: NormalizeAPI<'onCreateNode'> = ({
  node,
  actions,
  createNodeId,
  createContentDigest,
  reporter,
}) => {
  type GreenhouseJobNode = Node & GatsbyTypes.GreenhouseJob;

  function isGreenhouseJobNode(node: Node): node is GreenhouseJobNode {
    return node.internal.type === 'GreenhouseJob';
  }

  if (!isGreenhouseJobNode(node)) {
    return;
  }

  function findMetadataById(node: GreenhouseJobNode, id: string) {
    return Option.map(
      node.metadata.find(v => v.id === id),
      metadata => ({
        type: metadata.type,
        value: metadata.value,
      } as const),
    );
  }

  function employmentType(node: GreenhouseJobNode) {
    const fieldId = '503398003';
    const field = findMetadataById(node, fieldId);
    return Option.map(field, field => {
      switch (field.value) {
        case '정규직': return 'FULL_TIME';
        case '계약직': return 'CONTRACTOR';
        case '인턴': return 'INTERN';
        default:
          reporter.panic(reporter.stripIndent`
            알 수 없는 Employment Type 필드 값 입니다. 값: ${field.value}

            Greenhouse 에서 커스텀 필드 형식을 확인하고 코드를 올바르게 변경해주세요.

            See https://app3.greenhouse.io/custom_fields/jobs/${fieldId}
          `);
      }
    });
  }

  function alternativeCivilianService(node: GreenhouseJobNode) {
    const fieldId = '5784622003';
    const field = findMetadataById(node, fieldId);
    return Option.map(field, field => {
      switch (field.value) {
        case 'yes': return true;
        case 'no': return false;
        case null:
        default:
          reporter.panic(reporter.stripIndent`
            Alternative Civilian Service 필드 값이 올바르지 않습니다. 값: ${field.value}

            Greenhouse 에서 커스텀 필드 형식을 확인하고 코드를 올바르게 변경해주세요.

            See https://app3.greenhouse.io/custom_fields/jobs/${fieldId}
          `);
      }
    });
  }

  function priorExperience(node: GreenhouseJobNode) {
    const fieldId = '5784623003';
    const field = findMetadataById(node, fieldId);
    return Option.map(field, field => {
      switch (field.value) {
        case '경력': return 'YES';
        case '신입': return 'NO';
        case '신입/경력': return 'WHATEVER';
        default:
          reporter.panic(reporter.stripIndent`
            Prior Experience 필드 값이 올바르지 않습니다. 값: ${field.value}

            Greenhouse 에서 커스텀 필드 형식을 확인하고 코드를 올바르게 변경해주세요.

            See https://app3.greenhouse.io/custom_fields/jobs/${fieldId}
          `);
      }
    });
  }

  // NOTE: 몇 필드들은 required 지만 나중에 추가 되서 값이 없을 수 있음
  // 일단 기본값을 넣어 두지만 최종적으로는 그린하우스에서 모두 값을 제공해야함
  const content = {
    title: node.title,

    boardUrl: node.boardUrl,

    // FIXME: required, 값 없으면 일단 정규직 지원인 셈 침
    employmentType: employmentType(node) ?? 'FULL_TIME',
    // FIXME: required, 값 없으면 일단 산업기능요원 못하는 셈 침
    alternativeCivilianService: alternativeCivilianService(node) ?? false,
    // FIXME: required, 값 없으면 일단 경력 채용인 셈 침
    priorExperience: priorExperience(node) ?? 'YES',
    // FIXME: required, 값 없으면 empty?
    chapter: findMetadataById(node, '6008743003') ?? '',
    keywords: Option.map(
      findMetadataById(node, '6008744003'),
      ({ value }) => value?.split(',').map(part => part.trim()),
    ) ?? [],
  };

  const jobPostNode = {
    id: createNodeId(`${node.id} >>> JobPost`),
    internal: {
      type: 'JobPost',
      contentDigest: createContentDigest(content),
    },
    ...content,
  };

  actions.createNode(jobPostNode);
  actions.createParentChildLink({
    parent: node,
    // See https://github.com/gatsbyjs/gatsby/issues/19993
    child: jobPostNode as unknown as Node,
  });
};
