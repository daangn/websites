import * as React from 'react';
import type { PageProps } from 'gatsby';
import { graphql } from 'gatsby';
import { styled, css } from 'gatsby-theme-stitches/src/stitches.config';
import { rem } from 'polished';
import { required } from '@cometjs/core';
import type { PropOf, RefOf } from '@cometjs/react-utils';

import _PageTitle from '~/components/PageTitle';
import _FormField from '~/components/FormField';
import Button from '~/components/Button';

type JobApplicationPageProps = PageProps<GatsbyTypes.JobApplicationPageQuery, GatsbyTypes.SitePageContext>;

export const query = graphql`
  query JobApplicationPage($id: String!) {
    ...DefaultLayout_query
    ...JobPostLayout_query
    jobPost(id: { eq: $id }) {
      ghId
      title
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

const Form = styled('form', {
});

const FormField = styled(_FormField, {
  marginBottom: rem(32),
});

const FormFieldGroup = styled('div', {
  display: 'flex',
  gap: rem(32),
  marginBottom: rem(32),
});

const FormHelpText = styled('p', {
  color: '$gray600',
  fontSize: '$caption1',
  marginBottom: rem(48),
});

const CheckboxField = _FormField;

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

  const jobApplicationFormEndpoint = `${process.env.GATSBY_JOB_APPLICATION_FORM_HOST || 'http://localhost:8787'}/jobs/${data.jobPost.ghId}/application/submit`;

  type FormRef = RefOf<typeof Form>;
  const formRef = React.useRef<FormRef>(null);

  type SubmitHandler = NonNullable<PropOf<typeof Form, 'onSubmit'>>;
  const handleSubmit: SubmitHandler = e => {
    e.preventDefault();
    if (!formRef.current) {
      return;
    }
    const formData = new FormData(formRef.current);

    const resume = formData.get('resume') as File | null;
    const portfolio = formData.get('portfolio') as File | null;

    (async () => {
      required(data.jobPost);

      try {
        const response = await fetch(jobApplicationFormEndpoint, {
          method: 'POST',
          cache: 'no-cache',
          credentials: 'omit',
          body: formData,
          headers: {
            ...resume && { 'X-Upload-Resume': resume.name },
            ...portfolio && { 'X-Upload-Portfolio': portfolio.name },
          },
        });
        if (response.ok) {
          window.alert('지원서가 제출되었습니다. 빠른 시일 내에 검토 후 연락드리겠습니다 :)');
        } else {
          const message = await response.text();
          window.alert(message);
        }
      } catch (e) {
        console.error(e);
        window.alert('지원서 제출에 실패했습니다. 문제가 지속되는 경우 recruit@daangn.com 으로 문의주시면 도움 드리겠습니다.');
      }
    })();
  };

  return (
    <>
      <Form
        ref={formRef}
        method="post"
        action={jobApplicationFormEndpoint}
        onSubmit={handleSubmit}
      >
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
          required={data.jobPost.portfolioRequired}
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
          }}
          label="장애사항"
          name="disability"
          required
        />
        <FormFieldGroup>
          <CheckboxField
            variants={{ type: 'checkbox' }}
            name="alternative_civilian"
            label="산업기능요원 해당"
          />
          <CheckboxField
            variants={{ type: 'checkbox' }}
            name="veterans"
            label="보훈 대상"
          />
        </FormFieldGroup>
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
        <Button as="button" type="primary" fullWidth>
          동의 후 제출하기
        </Button>
      </Form>
    </>
  );
};

export default JobApplicationPage;
