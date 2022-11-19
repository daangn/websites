import * as React from 'react';
import {
  graphql,
  navigate,
  type PageProps,
  type HeadProps,
} from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/config';
import { HeadSeo, Robots } from 'gatsby-plugin-head-seo/src';
import { useTurnstileSiteKey } from 'gatsby-plugin-turnstile/src';
import { rem } from 'polished';
import { required } from '@cometjs/core';
import type { PropOf, RefOf } from '@cometjs/react-utils';
import { mapAbstractType } from '@cometjs/graphql-utils';

import { DefaultLayoutHead } from '../layouts/DefaultLayout';
import { JobPostLayoutHead } from '../layouts/JobPostLayout';
import _PageTitle from '../components/PageTitle';
import FileAttachmentField from '../components/formField/FileAttachmentField';
import ShortTextField from '../components/formField/ShortTextField';
import LongTextField from '../components/formField/LongTextField';
import SingleSelectField from '../components/formField/SingleSelectField';
import MultiSelectField from '../components/formField/MultiSelectField';
import YesNoField from '../components/formField/YesNoField';
import TermsField from '../components/formField/TermsField';
import Button from '../components/Button';
import _Spinner from '../components/Spinner';

import { useTranslation } from '@karrotmarket/gatsby-plugin-lokalise-translation/src/translation';

export const query = graphql`
  query TeamWebsite_JobApplicationPage(
    $id: String!
    $locale: String!
    $navigationId: String!
  ) {
    ...TeamWebsite_DefaultLayout_query
    ...TeamWebsite_JobPostLayout_query
    jobPost(id: { eq: $id }) {
      ghId
      title
      boardToken
      parentJob {
        questions {
          __typename
          name
          label
          required
          description: descriptionText
          ...on GreenhouseJobBoardJobQuestionForYesNo {
            options {
              label
              value
            }
          }
          ...on GreenhouseJobBoardJobQuestionForSingleSelect {
            options {
              label
              value
            }
          }
          ...on GreenhouseJobBoardJobQuestionForMultiSelect {
            options {
              label
              value
            }
          }
        }
      }
    }
    privacyPolicy: prismicTermsAndConditions(
      uid: { eq: "job-application-privacy" }
      lang: { eq: $locale }
    ) {
      id
      data {
        content {
          html
        }
      }
    }
    sensitiveInfoPolicy: prismicTermsAndConditions(
      uid: { eq: "job-application-sensitive" }
      lang: { eq: $locale }
    ) {
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
  '& > *': {
    marginBottom: rem(32),
  },
});

const Spinner = styled(_Spinner, {
  height: '50%',
});

// Note: Greenhouse Jobboard API 에서 지원하는 포맷 전체, pdf를 선호하지만 pdf 제출이 어려운 경우가 있을 것을 고려해서 포맷을 강제하진 않음
const greenhouseAcceptedMimeTypes = [
  'text/plain',
  'application/rtf',
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
];

const makeEndpoint = (boardToken: string, jobId: string): string => {
  const host = process.env.GATSBY_JOB_APPLICATION_FORM_HOST || 'http://localhost:8787';
  return `${host.replace(/\/$/, '')}/boards/${boardToken}/jobs/${jobId}/application/proxy`;
};

type JobApplicationPageProps = PageProps<GatsbyTypes.TeamWebsite_JobApplicationPageQuery>;
const JobApplicationPage: React.FC<JobApplicationPageProps> = ({
  data,
}) => {
  required(data.jobPost);

  const messages = useTranslation();
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const turnstileSiteKey = useTurnstileSiteKey();
  const jobApplicationFormEndpoint = makeEndpoint(data.jobPost.boardToken, data.jobPost.ghId);

  type FormRef = RefOf<typeof Form>;
  const formRef = React.useRef<FormRef>(null);

  // Note: Progressive Enhancement
  // 사실 이거 없어도 기본 폼으로 100% 동작함
  type SubmitHandler = NonNullable<PropOf<typeof Form, 'onSubmit'>>;
  const handleSubmit: SubmitHandler = e => {
    e.preventDefault();

    if (!formRef.current) {
      return;
    }

    const formData = new FormData(formRef.current);

    (async () => {
      required(data.jobPost);

      dispatch('FETCH_START');
      try {
        const response = await fetch(jobApplicationFormEndpoint, {
          method: 'POST',
          body: formData,
        });
        if (response.ok) {
          dispatch('FETCH_COMPLETE');
          window.alert(messages.job_application_page__alert_completed);
        } else {
          dispatch('INVALID');
          const message = await response.text();
          window.alert(message);
        }
      } catch (e) {
        console.error(e);
        window.alert(messages.job_application_page__alert_failed);
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

  const portfolioField = data.jobPost.parentJob.questions.find(question => question.name === 'cover_letter');

  return (
    <Form
      ref={formRef}
      method="post"
      encType="multipart/form-data"
      action={jobApplicationFormEndpoint}
      onSubmit={handleSubmit}
    >
      <div
        className="cf-turnstile"
        data-sitekey={turnstileSiteKey}
      />
      <ShortTextField
        name="first_name"
        label={messages.job_application_page__field_name_label}
        placeholder={messages.job_application_page__field_name_placeholder}
        required
      />
      {/* Treat the first_name as fullname */}
      <input type="hidden" name="last_name" value={"\u200b"} />
      <ShortTextField
        type="tel"
        name="phone"
        label={messages.job_application_page__field_phone_label}
        placeholder={messages.job_application_page__field_phone_placeholder}
        required
      />
      <ShortTextField
        type="email"
        name="email"
        label={messages.job_application_page__field_email_label}
        placeholder={messages.job_application_page__field_email_placeholder}
        required
      />
      <FileAttachmentField
        name="resume"
        accepts={greenhouseAcceptedMimeTypes}
        label={messages.job_application_page__field_resume_label}
        description={messages.job_application_page__field_resume_description}
        placeholder={messages.job_application_page__field_resume_placeholder}
        required
      />
      {portfolioField && (
        <FileAttachmentField
          accepts={greenhouseAcceptedMimeTypes}
          name={portfolioField.name}
          label={messages.job_application_page__field_portpolio_label}
          description={messages.job_application_page__field_portpolio_description}
          placeholder={messages.job_application_page__field_portpolio_placeholder}
          required={portfolioField.required}
        />
      )}
      {data.jobPost.parentJob.questions
        // Note: Custom Question 만 따로 렌더링
        .filter(question => question.name.startsWith('question'))
        .map(question => mapAbstractType(question, {
        GreenhouseJobBoardJobQuestionForShortText: question => (
          <ShortTextField
            key={question.name}
            name={question.name}
            label={question.label}
            description={question.description}
            required={question.required}
          />
        ),
        GreenhouseJobBoardJobQuestionForLongText: question => (
          <LongTextField
            key={question.name}
            name={question.name}
            label={question.label}
            description={question.description}
            required={question.required}
          />
        ),
        GreenhouseJobBoardJobQuestionForAttachment: question => (
          <FileAttachmentField
            key={question.name}
            accepts={greenhouseAcceptedMimeTypes}
            placeholder={messages.job_application_page__field_file_placeholder}
            name={question.name}
            label={question.label}
            description={question.description}
            required={question.required}
          />
        ),
        GreenhouseJobBoardJobQuestionForYesNo: question => (
          <YesNoField
            key={question.name}
            name={question.name}
            label={question.label}
            description={question.description}
            required={question.required}
          />
        ),
        GreenhouseJobBoardJobQuestionForSingleSelect: question => (
          <SingleSelectField
            key={question.name}
            name={question.name}
            label={question.label}
            description={question.description}
            required={question.required}
            options={[...question.options]}
          />
        ),
        GreenhouseJobBoardJobQuestionForMultiSelect: question => (
          <MultiSelectField
            key={question.name}
            name={question.name}
            label={question.label}
            description={question.description}
            required={question.required}
            options={[...question.options]}
          />
        ),
      }))}
      {data.privacyPolicy?.data?.content?.html && (
        <TermsField
          terms={data.privacyPolicy.data.content.html}
          label={messages.job_application_page__terms_privacy_info}
        />
      )}
      {data.sensitiveInfoPolicy?.data?.content?.html && (
        <TermsField
          terms={data.sensitiveInfoPolicy.data.content.html}
          label={messages.job_application_page__terms_sensitive_info}
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
          messages.job_application_page__button_submit
        )}
      </Button>
    </Form>
  );
};

export default JobApplicationPage;

type JobApplicationPageHeadProps = HeadProps<GatsbyTypes.TeamWebsite_JobApplicationPageQuery>;
export const Head: React.FC<JobApplicationPageHeadProps> = ({
  location,
  data,
  data: { jobPost, prismicTeamContents },
}) => {
  required(jobPost);
  required(prismicTeamContents);

  const metaTitle = `${jobPost.title} | ${prismicTeamContents.data.jobs_page_meta_title}`;
  const metaDescription = prismicTeamContents.data.jobs_page_meta_description;
  const metaImage = prismicTeamContents.data.jobs_page_meta_image?.localFile?.childImageSharp?.fixed;

  return (
    <HeadSeo
      location={location}
      title={metaTitle}
      description={metaDescription}
    >
      {props => [
        <DefaultLayoutHead
          {...props}
          location={location}
          data={data}
          image={metaImage && {
            url: new URL(
              metaImage.src,
              metaImage.src.startsWith('http')
                ? metaImage.src
                : props.url,
            ),
            width: metaImage.width,
            height: metaImage.height,
          }}
        />,
        <JobPostLayoutHead
          {...props}
          location={location}
          data={data}
        />,
        <Robots none />,
      ]}
    </HeadSeo>
  );
}
