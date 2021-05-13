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
      title
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
  marginBottom: rem(40),
});

const PageTitle = styled(_PageTitle, {
  marginBottom: rem(25),

  variants: {
    size: {
      sm: {
        marginBottom: rem(16),
      },
    },
  },
});

const JobPostTitle = styled('p', {
  fontSize: '$subtitle3',
  fontWeight: 'bold',
  marginBottom: rem(65),
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

  type FormRef = RefOf<typeof Form>;
  const formRef = React.useRef<FormRef>(null);

  type SubmitHandler = NonNullable<PropOf<typeof Form, 'onSubmit'>>;
  const handleSubmit: SubmitHandler = e => {
    e.preventDefault();
    if (!formRef.current) {
      return;
    }
    const formData = new FormData(formRef.current);
    console.warn('TODO');
    console.warn([...formData.entries()]);
  };

  return (
    <>
      <Form ref={formRef} onSubmit={handleSubmit}>
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
          description="포트폴리오를 필수로 첨부해야 하는 포지션은 확인 후 첨부해주세요."
        />
        <FormField
          variants={{ type: 'text' }}
          name="url"
          label="링크"
          placeholder="https://"
          description="블로그나 GitHub 링크 등 자유롭게 입력해주세요."
        />
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
        <Button as="button" type="primary" fullWidget>
          동의 후 제출하기
        </Button>
      </Form>
    </>
  );
};

export default JobApplicationPage;
