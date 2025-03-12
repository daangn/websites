// @ts-check

/**
 * @typedef {(
 *   import('@karrotmarket/gatsby-source-greenhouse-jobboard/types').GreenhouseJobBoardJobNode
 * )} GreenhouseJobBoardJobNode
 *
 * @typedef {import('gatsby').NodePluginArgs} NodePluginArgs
 */

/**
 * @template FieldType
 * @typedef {(
 *   node: GreenhouseJobBoardJobNode,
 *   context: NodePluginArgs
 * ) => FieldType | undefined} FieldParser
 */

/**
 * @template {string | number | null} [T=string | number | null]
 * @param {GreenhouseJobBoardJobNode} node
 * @param {number} id
 * @return {{
 *   type: GreenhouseJobBoardJobNode['metadata'][number]['value_type'],
 *   value: T | null,
 * } | undefined}
 */
function findMetadataById(node, id) {
  const metadata = node.metadata.find((v) => v.id === id);
  return (
    metadata && {
      type: metadata.value_type,
      /** @type {T | null} */
      // @ts-ignore
      value: metadata.value,
    }
  );
}

/**
 * @type {FieldParser<'KARROT_MARKET' | 'KARROT_PAY' | null>}
 */
export const corporate = (node, { reporter }) => {
  const fieldId = 6128545003;
  const field = findMetadataById(node, fieldId);
  return (
    field &&
    (() => {
      switch (field.value) {
        case '당근':
        case '당근마켓':
          return 'KARROT_MARKET';
        case '당근페이':
          return 'KARROT_PAY';
        case 'Karrot Canada':
          return 'KARROT_MARKET';
        case 'Karrot Japan':
          return 'KARROT_MARKET';
        case null: {
          reporter.warn(reporter.stripIndent`
            Corporate 필드 값이 비어있습니다. (See https://app3.greenhouse.io/plans/${node.ghId})
          `);
          return null;
        }
        default: {
          reporter.error(reporter.stripIndent`
            알 수 없는 Corporate 필드 값 입니다. 값: ${field.value}

            Greenhouse 에서 커스텀 필드 형식을 확인하고 코드를 올바르게 변경해주세요.

            See https://app3.greenhouse.io/custom_fields/jobs/${fieldId}
            See https://app3.greenhouse.io/plans/${node.ghId}
          `);
          return null;
        }
      }
    })()
  );
};

/** @type {FieldParser<'FULL_TIME' | 'CONTRACTOR' | 'INTERN' | 'ASSISTANT' | 'PART_TIME'>} */
export const employmentType = (node, { reporter }) => {
  const fieldId = 5033980003;
  const field = findMetadataById(node, fieldId);
  return (
    field &&
    (() => {
      switch (field.value) {
        case '정규직':
          return 'FULL_TIME';
        case '계약직':
          return 'CONTRACTOR';
        case '인턴':
          return 'INTERN';
        case '어시스턴트':
          return 'ASSISTANT';
        case '파트타임':
          return 'PART_TIME';
        case null: {
          reporter.warn(reporter.stripIndent`
          Employment Type 필드 값이 비어있습니다. (https://app3.greenhouse.io/plans/${node.ghId})
        `);
          return 'FULL_TIME';
        }
        default:
          reporter.panic(reporter.stripIndent`
          알 수 없는 Employment Type 필드 값 입니다. 값: ${field.value}

          Greenhouse 에서 커스텀 필드 형식을 확인하고 코드를 올바르게 변경해주세요.

          See https://app3.greenhouse.io/custom_fields/jobs/${fieldId}
          See https://app3.greenhouse.io/plans/${node.ghId}
        `);
      }
    })()
  );
};

/** @type {FieldParser<boolean>} */
export const alternativeCivilianService = (node, { reporter }) => {
  const fieldId = 5784622003;
  const field = findMetadataById(node, fieldId);
  return (
    field &&
    (() => {
      if (field.type === 'yes_no') {
        if (field.value == null) {
          reporter.warn(reporter.stripIndent`
          Alternative Civilian Service 필드 값이 비어있습니다. (See https://app3.greenhouse.io/plans/${node.ghId})
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
      See https://app3.greenhouse.io/plans/${node.ghId}
    `);
    })()
  );
};

/** @type {FieldParser<'YES' | 'NO' | 'WHATEVER'>} */
export const priorExperience = (node, { reporter }) => {
  const fieldId = 5784623003;
  const field = findMetadataById(node, fieldId);
  return (
    field &&
    (() => {
      switch (field.value) {
        case '경력':
          return 'YES';
        case '신입':
          return 'NO';
        case '신입/경력':
          return 'WHATEVER';
        case null: {
          reporter.warn(reporter.stripIndent`
            Prior Experience 필드 값이 비어있습니다. (See https://app3.greenhouse.io/plans/${node.ghId})
          `);
          return 'YES';
        }
        default:
          reporter.panic(reporter.stripIndent`
          Prior Experience 필드 값이 올바르지 않습니다. 값: ${field.value}

          Greenhouse 에서 커스텀 필드 형식을 확인하고 코드를 올바르게 변경해주세요.

          See https://app3.greenhouse.io/custom_fields/jobs/${fieldId}
          See https://app3.greenhouse.io/plans/${node.ghId}
        `);
      }
    })()
  );
};

/** @type {FieldParser<string[]>} */
export const keywords = (node) => {
  const metadata = findMetadataById(node, 6008744003);
  return (
    (metadata?.value &&
      typeof metadata.value === 'string' &&
      metadata.value.split(',').map((part) => part.trim())) ||
    []
  );
};

/** @type {FieldParser<string>} */
export const chapter = (node) => {
  const metadata = findMetadataById(node, 6015694003);
  // @ts-ignore
  return metadata?.value ?? '';
};

/** @type {FieldParser<number>} */
export const order = (node) => {
  const fieldId = 6990001003;
  const field = findMetadataById(node, fieldId);
  // @ts-ignore
  return field && (field.value ?? 0 | 0);
};

/** @type {FieldParser<string[]>} */
export const tags = (node) => {
  const fieldId = 6990204003;
  const field = findMetadataById(node, fieldId);
  return (
    field &&
    (() => {
      return (
        field.value
          // @ts-ignore
          ?.split(',')
          .map((value) => value.trim())
          .filter(Boolean)
      );
    })()
  );
};

/** @type {FieldParser<Date>} */
export const validThrough = (node) => {
  const fieldId = 6972127003;
  const field = findMetadataById(node, fieldId);
  return (
    field &&
    (() => {
      return field.value ? new Date(field.value) : undefined;
    })()
  );
};

/** @type {FieldParser<URL>} */
export const externalUrl = (node) => {
  const fieldId = 7142945003;
  const field = findMetadataById(node, fieldId);
  return (
    field &&
    (() => {
      // @ts-ignore
      return field.value ? new URL(field.value) : undefined;
    })()
  );
};
