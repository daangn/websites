import type { OverrideProps } from '@cometjs/core';
import { Result } from '@cometjs/core';

const disability = ['no', 'normal', 'industry', 'military'] as const;
type DisabilityAnswer = typeof disability[number];

const veterans = ['yes', 'no'] as const;
type VeteransAnswer = typeof veterans[number];

const alternativeCivilian = ['no', 'skilled_industrial_personnel'] as const;
type AlternativeCivilianAnswer = typeof alternativeCivilian[number];

export type ValidApplicationForm = {
  name: string,

  email: string,

  phoneNumber: string,

  resume: File,

  /**
   * 포트폴리오, 직군에 따라 필수 여부 갈림
   */
  portfolio?: File,

  /**
   * 장애사항
   */
  disability: DisabilityAnswer,

  /**
   * 보훈대상
   */
  veterans: VeteransAnswer,

  /**
   * 대체 복무제 (현재는 산업기능요원만)
   *
   * Note: 여기 [용어집](https://www.mma.go.kr/www_mma3/webzine/48/html/menu1-5.htm) 이 있네요 개꿀
   */
  alternativeCivilian: AlternativeCivilianAnswer,

} & { ___state: 'valid' };

type InvalidApplicationForm = {
  name?: string,
  email?: string,
  phoneNumber?: string,
  resume?: File,
  portfolio?: File,
  disability?: string,
  veterans?: string,
  alternativeCivilian?: string,
};

export type ApplicationForm = (
  | ValidApplicationForm
  | InvalidApplicationForm
);

type FileContent = {

  /**
   * Base64 encoded content
   */
  content: string,

  filename: string,
};

export type ApplicationFormPayload = OverrideProps<ValidApplicationForm, {
  resume: FileContent,
  portfolio: FileContent | undefined,
}>;

type ApplicationFormParseResult = Result.T<ValidApplicationForm, {
  fields: Record<keyof InvalidApplicationForm, boolean>,
}>;

interface ApplicationFormClient {
  parse(form: ApplicationForm): ApplicationFormParseResult;
  validate(form: ApplicationForm): form is ValidApplicationForm;
  submit(form: ValidApplicationForm): Promise<Response>;
}

export const makeEndpoint = (host: string, jobId: string): string => (
  `${host.replace(/\/$/, '')}/jobs/${jobId}/application/submit`
);

interface MakeApplicationFormClient {
  (props: {
    fetch: typeof window['fetch'],
    endpoint: string,
    /**
     * Note: 정상적인 Form 요청을 프록시 처리하기가 굉장히 까다롭고 (Workers 제약)
     * + 하물며 해줘도 Greenhouse 가 제대로 처리를 못하기 때문에... 클라이언트가 다 해주는 걸로
     *
     * @See https://support.greenhouse.io/hc/en-us/requests/273870
     */
    encodeFile: (file: File) => Promise<FileContent>,
    portfolioRequired?: boolean,
  }): ApplicationFormClient;
}

export const makeClient: MakeApplicationFormClient = ({
  fetch,
  endpoint,
  encodeFile,
  portfolioRequired = false,
}) => {
  return {
    parse(form) {
      const fieldsState = {
        name: form.name != null,
        email: form.email != null,
        phoneNumber: form.phoneNumber != null,
        resume: form.resume != null,
        portfolio: !(portfolioRequired && form.portfolio == null),
        disability: form.disability != null && disability.includes(form.disability as DisabilityAnswer),
        veterans: form.veterans != null && veterans.includes(form.veterans as VeteransAnswer),
        alternativeCivilian: form.alternativeCivilian != null && alternativeCivilian.includes(form.alternativeCivilian as AlternativeCivilianAnswer),
      };

      if (Object.values(fieldsState).every(Boolean)) {
        return Result.ok(form as ValidApplicationForm);
      } else {
        return Result.err({ fields: fieldsState });
      }
    },
    validate(form): form is ValidApplicationForm {
      const result = this.parse(form);
      return Result.isOk(result);
    },
    async submit(form) {
      const resume = await encodeFile(form.resume);
      const portfolio = form.portfolio && await encodeFile(form.portfolio);
      const payload: ApplicationFormPayload = {
        ...form,
        resume,
        portfolio,
      };

      const response = await fetch(endpoint, {
        method: 'POST',
        cache: 'no-cache',
        credentials: 'omit',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      return response;
    },
  };
};

type ApplicationFormPayloadParseResult = Result.T<ApplicationFormPayload, {
  fields: Record<keyof InvalidApplicationForm, boolean>,
}>;

export const parsePayload = (payload: ApplicationFormPayload): ApplicationFormPayloadParseResult => {
  const fieldsState = {
    name: payload.name != null,
    email: payload.email != null,
    phoneNumber: payload.phoneNumber != null,
    resume: payload.resume != null,
    portfolio: true,
    disability: payload.disability != null && disability.includes(payload.disability as DisabilityAnswer),
    veterans: payload.veterans != null && veterans.includes(payload.veterans as VeteransAnswer),
    alternativeCivilian: payload.alternativeCivilian != null && alternativeCivilian.includes(payload.alternativeCivilian as AlternativeCivilianAnswer),
  };

  if (Object.values(fieldsState).every(Boolean)) {
    return Result.ok(payload);
  } else {
    return Result.err({ fields: fieldsState });
  }
}
