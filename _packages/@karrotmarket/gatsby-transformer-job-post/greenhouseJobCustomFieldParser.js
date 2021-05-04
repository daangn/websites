"use strict";

exports.__esModule = true;
exports.chapter = exports.keywords = exports.priorExperience = exports.alternativeCivilianService = exports.employmentType = void 0;

function findMetadataById(node, id) {
  const metadata = node.metadata.find(v => v.id === id);
  return metadata && {
    type: metadata.value_type,
    value: metadata.value
  };
}

const employmentType = (node, {
  reporter
}) => {
  const fieldId = 503398003;
  const field = findMetadataById(node, fieldId);
  return field && (() => {
    switch (field.value) {
      case '정규직':
        return 'FULL_TIME';

      case '계약직':
        return 'CONTRACTOR';

      case '인턴':
        return 'INTERN';

      case null:
        {
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
};

exports.employmentType = employmentType;

const alternativeCivilianService = (node, {
  reporter
}) => {
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
};

exports.alternativeCivilianService = alternativeCivilianService;

const priorExperience = (node, {
  reporter
}) => {
  const fieldId = 5784623003;
  const field = findMetadataById(node, fieldId);
  return field && (() => {
    switch (field.value) {
      case '경력':
        return 'YES';

      case '신입':
        return 'NO';

      case '신입/경력':
        return 'WHATEVER';

      case null:
        {
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
};

exports.priorExperience = priorExperience;

const keywords = node => {
  const metadata = findMetadataById(node, 6008744003);
  return (metadata === null || metadata === void 0 ? void 0 : metadata.value) && typeof metadata.value === 'string' && metadata.value.split(',').map(part => part.trim()) || [];
};

exports.keywords = keywords;

const chapter = node => {
  var _metadata$value;

  const metadata = findMetadataById(node, 6015694003);
  return (_metadata$value = metadata === null || metadata === void 0 ? void 0 : metadata.value) !== null && _metadata$value !== void 0 ? _metadata$value : '';
};

exports.chapter = chapter;