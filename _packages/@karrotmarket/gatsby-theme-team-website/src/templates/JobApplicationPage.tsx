import * as React from 'react';
import type { PageProps } from 'gatsby';
import { graphql, navigate } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/config';
import { GatsbySeo } from 'gatsby-plugin-next-seo';
import { rem } from 'polished';
import { required } from '@cometjs/core';
import type { PropOf, RefOf } from '@cometjs/react-utils';

import _PageTitle from '../components/PageTitle';
import _FormField from '../components/FormField';
import Button from '../components/Button';
import _Spinner from '../components/Spinner';

import type { ApplicationForm } from '../utils/applicationForm';
import { makeClient, makeEndpoint } from '../utils/applicationForm';
import * as Base64 from '../utils/base64';

type JobApplicationPageProps = PageProps<GatsbyTypes.TeamWebsite_JobApplicationPageQuery, GatsbyTypes.SitePageContext>;

export const query = graphql`
  query TeamWebsite_JobApplicationPage($id: String!) {
    ...TeamWebsite_DefaultLayout_query
    ...TeamWebsite_JobPostLayout_query
    jobPost(id: { eq: $id }) {
      ghId
      title
      boardToken
      portfolioRequired
    }
    privacyPolicy: prismicTermsAndConditions(uid: { eq: "job-application-privacy" }) {
      id
      data {
        content {
          html
        }
      }
    }
    sensitiveInfoPolicy: prismicTermsAndConditions(uid: { eq: "job-application-sensitive" }) {
      id
      data {
        content {
          html
        }
      }
    }
  }
`;

type State = (
  | 'initial'
  | 'invalid'
  | 'fetching'
  | 'completed'
);

type Action = (
  | 'INVALID'
  | 'FETCH_START'
  | 'FETCH_COMPLETE'
);

const initialState: State = 'initial';

const reducer: React.Reducer<State, Action> = (state, action) => {
  switch (action) {
    case 'INVALID': {
      switch (state) {
        case 'initial':
        case 'fetching':
        case 'invalid': {
          return 'invalid';
        }
      }
      break;
    }

    case 'FETCH_START': {
      switch (state) {
        case 'initial':
        case 'invalid': {
          return 'fetching';
        }
      }
      break;
    }

    case 'FETCH_COMPLETE': {
      if (state === 'fetching') {
        return 'completed';
      }
      break;
    }
  }
  return state;
};

const Form = styled('form', {
});

const FormField = styled(_FormField, {
  marginBottom: rem(32),
});

const FormHelpText = styled('p', {
  color: '$gray600',
  fontSize: '$caption1',
  marginBottom: rem(48),
});

const Spinner = styled(_Spinner, {
  height: '50%',
});

const greenhouseAcceptedMimeTypes = [
  'text/plain',
  'application/rtf',
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
];

const JobApplicationPage: React.FC<JobApplicationPageProps> = ({
  data,
}) => {
  required(data.jobPost);

  const [state, dispatch] = React.useReducer(reducer, initialState);

  const jobApplicationFormEndpoint = makeEndpoint(
    process.env.GATSBY_JOB_APPLICATION_FORM_HOST || 'http://localhost:8787',
    data.jobPost.boardToken,
    data.jobPost.ghId,
  );

  type FormRef = RefOf<typeof Form>;
  const formRef = React.useRef<FormRef>(null);

  type SubmitHandler = NonNullable<PropOf<typeof Form, 'onSubmit'>>;
  const handleSubmit: SubmitHandler = e => {
    e.preventDefault();

    if (!formRef.current) {
      return;
    }

    const formData = new FormData(formRef.current);

    const applicationForm: ApplicationForm = {
      phoneNumber: formData.get('phone_number') as string,
      email: formData.get('email') as string,
      name: formData.get('name') as string,
      resume: formData.get('resume') as File,
      portfolio: formData.get('portfolio') as File,
      veterans: formData.get('veterans') as string,
      disability: formData.get('disability') as string,
      alternativeCivilian: formData.get('alternative_civilian') as string,
    };

    (async () => {
      required(data.jobPost);

      const client = makeClient({
        fetch,
        endpoint: jobApplicationFormEndpoint,
        encodeFile: async file => {
          const content = await Base64.fromBlob(file);
          return { content, filename: file.name };
        },
        portfolioRequired: data.jobPost.portfolioRequired,
      });

      if (client.validate(applicationForm)) {
        dispatch('FETCH_START');

        try {
          const response = await client.submit(applicationForm);

          if (response.ok) {
            dispatch('FETCH_COMPLETE');
            window.alert('지원서가 제출되었습니다. 빠른 시일 내에 검토 후 연락드리겠습니다 :)');
          } else {
            dispatch('INVALID');
            const message = await response.text();
            window.alert(message);
          }
        } catch (e) {
          console.error(e);
          window.alert('지원서 제출에 실패했습니다. 문제가 지속되는 경우 recruit@daangn.com 으로 문의주시면 도움 드리겠습니다.');
        }
      } else {
        dispatch('INVALID');
      }
    })();
  };

  React.useEffect(() => {
    required(data.jobPost);

    if (state === 'completed') {
      navigate('/completed/');
    }
  }, [state]);

  return (
    <Form
      ref={formRef}
      method="post"
      action={jobApplicationFormEndpoint}
      onSubmit={handleSubmit}
    >
      <GatsbySeo noindex />
      <FormField
        variants={{ type: 'text' }}
        name="name"
        label="이름"
        placeholder="지원자 이름을 입력해주세요."
        required
      />
      <FormField
        variants={{ type: 'tel' }}
        name="phone_number"
        label="전화번호"
        placeholder="연락 가능한 전화번호를 입력해주세요."
        required
      />
      <FormField
        variants={{ type: 'email' }}
        name="email"
        label="이메일"
        placeholder="이메일 주소를 입력해주세요."
        required
      />
      <FormField
        variants={{
          type: 'file',
          accepts: greenhouseAcceptedMimeTypes,
        }}
        name="resume"
        label="이력서 및 경력기술서"
        description="파일은 pdf, doc, docx, txt, rtf 형식만 사용할 수 있습니다."
        placeholder="파일 첨부하기"
        required
      />
      <FormField
        variants={{
          type: 'file',
          accepts: greenhouseAcceptedMimeTypes,
        }}
        name="portfolio"
        label="포트폴리오"
        placeholder="파일 첨부하기"
        description="*포트폴리오는 최대 50MB까지 업로드 가능해요."
        required={data.jobPost.portfolioRequired}
      />
      <FormField
        variants={{
          type: 'radio',
          options: [
            { label: '해당', value: 'skilled_industrial_personnel' },
            { label: '비해당', value: 'no' },
          ],
          defaultValue: 'no',
        }}
        name="alternative_civilian"
        label="산업기능요원"
        required
      />
      <FormField
        variants={{
          type: 'select',
          options: [
            { label: '해당 없음', value: 'no' },
            { label: '일반', value: 'normal' },
            { label: '산재', value: 'industry' },
            { label: '보훈', value: 'military' },
          ],
          defaultValue: 'no',
        }}
        label="장애사항"
        name="disability"
        required
      />
      <FormField
        variants={{
          type: 'radio',
          options: [
            { label: '대상', value: 'yes' },
            { label: '비대상', value: 'no' },
          ],
          defaultValue: 'no',
        }}
        name="veterans"
        label="보훈대상 여부"
        required
      />
      <FormHelpText>
        * 보훈 및 장애 사항은 채용 과정에서 불이익이 없습니다.
      </FormHelpText>
      {data.privacyPolicy?.data?.content?.html && (
        <FormField
          variants={{
            type: 'terms',
            terms: data.privacyPolicy.data.content.html,
          }}
          name="privacy"
          label="개인정보 수집 및 이용동의"
          required
        />
      )}
      {data.sensitiveInfoPolicy?.data?.content?.html && (
        <FormField
          variants={{
            type: 'terms',
            terms: data.sensitiveInfoPolicy.data.content.html,
          }}
          name="sensitive"
          label="민감정보 수집 및 이용동의"
          required
        />
      )}
      <Button
        as="button"
        type="primary"
        fullWidth
        disabled={state === 'fetching'}
      >
        {state === 'fetching' ? (
          <Spinner />
        ) : (
          '동의 후 제출하기'
        )}
      </Button>
    </Form>
  );
};

export default JobApplicationPage;
