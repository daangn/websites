import type { NodePluginArgs } from 'gatsby';

import type { GreenhouseJobNode } from './types';

interface FieldParser<FieldType> {
  (
    node: GreenhouseJobNode,
    context: NodePluginArgs,
  ): FieldType | undefined;
}

function findMetadataById<T extends string | number | null = string | number | null>(
  node: GreenhouseJobNode,
  id: number,
) {
  const metadata = node.metadata.find(v => v.id === id);
  return metadata && ({ type: metadata.value_type, value: metadata.value as T });
}

export const corporate: FieldParser<(
  | 'KARROT_MARKET'
  | 'KARROT_PAY'
  | null
)> = (
  node,
  { reporter },
) => {
  const fieldId = 6128545003;
  const field = findMetadataById(node, fieldId);
  return field && (() => {
    switch (field.value) {
      case '당근마켓': return 'KARROT_MARKET';
      case '당근페이': return 'KARROT_PAY';
      case null: {
        reporter.warn(reporter.stripIndent`
           필드 값이 비어있습니다.

           https://app3.greenhouse.io/plans/${node.ghId}
        `);
        return null;
      }
      default: {
        reporter.error(reporter.stripIndent`
          알 수 없는 Corporate 필드 값 입니다. 값: ${field.value}

          Greenhouse 에서 커스텀 필드 형식을 확인하고 코드를 올바르게 변경해주세요.

          See https://app3.greenhouse.io/custom_fields/jobs/${fieldId}
        `);
        return null;
      }
    }
  })();
};

export const employmentType: FieldParser<(
  | 'FULL_TIME'
  | 'CONTRACTOR'
  | 'INTERN'
)> = (
  node,
  { reporter },
) => {
  const fieldId = 503398003;
  const field = findMetadataById(node, fieldId);
  return field && (() => {
    switch (field.value) {
      case '정규직': return 'FULL_TIME';
      case '계약직': return 'CONTRACTOR';
      case '인턴': return 'INTERN';
      case null: {
        reporter.warn(reporter.stripIndent`
          Employment Type 필드 값이 비어있습니다.

          See https://app3.greenhouse.io/plans/${node.ghId}
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

export const alternativeCivilianService: FieldParser<boolean> = (
  node,
  { reporter },
) => {
  const fieldId = 5784622003;
  const field = findMetadataById(node, fieldId);
  return field && (() => {
    if (field.type === 'yes_no') {
      if (field.value == null) {
        reporter.warn(reporter.stripIndent`
          Alternative Civilian Service 필드 값이 비어있습니다.

          See https://app3.greenhouse.io/plans/${node.ghId}
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

export const priorExperience: FieldParser<(
  | 'YES'
  | 'NO'
  | 'WHATEVER'
)> = (
  node,
  { reporter },
) => {
  const fieldId = 5784623003;
  const field = findMetadataById(node, fieldId);
  return field && (() => {
    switch (field.value) {
      case '경력': return 'YES';
      case '신입': return 'NO';
      case '신입/경력': return 'WHATEVER';
      case null: {
          reporter.warn(reporter.stripIndent`
            Prior Experience 필드 값이 비어있습니다.

            See https://app3.greenhouse.io/plans/${node.ghId}
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

export const keywords: FieldParser<string[]> = (
  node,
) => {
  const metadata = findMetadataById(node, 6008744003);
  return (
    metadata?.value
    && typeof metadata.value === 'string'
    && metadata.value.split(',').map(part => part.trim())
  ) || [];
}

export const chapter: FieldParser<string> = (
  node,
) => {
  const metadata = findMetadataById<string>(node, 6015694003);
  return metadata?.value ?? '';
}

export const portfolioRequirement: FieldParser<boolean> = (
  node,
  { reporter },
) => {
  const fieldId = 6248317003;
  const field = findMetadataById(node, 6248317003);
  return field && (() => {
    switch (field.value) {
      case '필수': {
        return true;
      }
      case '필수아님': {
        return false;
      }
      case null: {
        reporter.warn(reporter.stripIndent`
           필드 값이 비어있습니다.

           See https://app3.greenhouse.io/plans/${node.ghId}
        `);
        break;
      }
      default:
        reporter.error(reporter.stripIndent`
          알 수 없는 Portfolio Requirement 필드 값입니다. 값: ${field.value}

          Greenhouse 에서 커스텀 필드 형식을 확인하고 코드를 올바르게 변경해주세요.

          See https://app3.greenhouse.io/custom_fields/jobs/${fieldId}
        `);
        break;
    }
  })();
};
