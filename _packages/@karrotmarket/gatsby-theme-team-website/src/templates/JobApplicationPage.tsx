import * as React from 'react';
import type { PageProps } from 'gatsby';
import { graphql, navigate } from 'gatsby';
import { styled } from 'gatsby-theme-stitches/src/config';
import { GatsbySeo } from 'gatsby-plugin-next-seo';
import { rem } from 'polished';
import { required } from '@cometjs/core';
import type { PropOf, RefOf } from '@cometjs/react-utils';
import { mapAbstractType } from '@cometjs/graphql-utils';

import _PageTitle from '../components/PageTitle';
import _FormField from '../components/FormField';
import FileAttachmentField from '../components/formField/FileAttachmentField';
import ShortTextField from '../components/formField/ShortTextField';
import LongTextField from '../components/formField/LongTextField';
import SingleSelectField from '../components/formField/SingleSelectField';
import MultiSelectField from '../components/formField/MultiSelectField';
import YesNoField from '../components/formField/YesNoField';
import TermsField from '../components/formField/TermsField';
import Button from '../components/Button';
import _Spinner from '../components/Spinner';

import { makeNewEndpoint } from '../utils/applicationForm';

import messages from './jobApplicationPage/messages';

type JobApplicationPageProps = PageProps<GatsbyTypes.TeamWebsite_JobApplicationPageQuery, GatsbyTypes.SitePageContext>;

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
          description
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
});

const FormField = styled(_FormField, {
  marginBottom: rem(32),
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

const makeEndpoint = (boardToken: string, jobId: string): string => {
  const host = process.env.GATSBY_JOB_APPLICATION_FORM_HOST || 'http://localhost:8787';
  return `${host.replace(/\/$/, '')}/boards/${boardToken}/jobs/${jobId}/application/proxy`;
};

const JobApplicationPage: React.FC<JobApplicationPageProps> = ({
  data,
}) => {
  required(data.jobPost);

  const [state, dispatch] = React.useReducer(reducer, initialState);

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
          window.alert(messages.alert_completed);
        } else {
          dispatch('INVALID');
          const message = await response.text();
          window.alert(message);
        }
      } catch (e) {
        console.error(e);
        window.alert(messages.alert_failed);
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
      <GatsbySeo noindex />
      <FormField
        as={ShortTextField}
        name="first_name"
        label={messages.field_name_label}
        placeholder={messages.field_name_placeholder}
        required
      />
      {/* Treat the first_name as fullname */}
      <input type="hidden" name="last_name" value={"\u200b"} />
      <FormField
        as={ShortTextField}
        type="tel"
        name="phone"
        label={messages.field_phone_label}
        placeholder={messages.field_phone_placeholder}
        required
      />
      <FormField
        as={ShortTextField}
        type="email"
        name="email"
        label={messages.field_email_label}
        placeholder={messages.field_email_placeholder}
        required
      />
      <FormField
        as={FileAttachmentField}
        name="resume"
        accepts={greenhouseAcceptedMimeTypes}
        label={messages.field_resume_label}
        description={messages.field_resume_description}
        placeholder={messages.field_resume_placeholder}
        required
      />
      {portfolioField && (
        <FormField
          as={FileAttachmentField}
          accepts={greenhouseAcceptedMimeTypes}
          name={portfolioField.name}
          label={messages.field_portfolio_label}
          description={messages.field_portfolio_description}
          placeholder={messages.field_portfolio_placeholder}
          required={portfolioField.required}
        />
      )}
      {data.jobPost.parentJob.questions
        // Note: Custom Question 만 따로 렌더링
        .filter(question => question.name.startsWith('question'))
        .map(question => mapAbstractType(question, {
        GreenhouseJobBoardJobQuestionForShortText: question => (
          <FormField
            as={ShortTextField}
            key={question.name}
            name={question.name}
            label={question.label}
            required={question.required}
          />
        ),
        GreenhouseJobBoardJobQuestionForLongText: question => (
          <FormField
            as={LongTextField}
            key={question.name}
            name={question.name}
            label={question.label}
            required={question.required}
          />
        ),
        GreenhouseJobBoardJobQuestionForAttachment: question => (
          <FormField
            as={FileAttachmentField}
            key={question.name}
            accepts={greenhouseAcceptedMimeTypes}
            placeholder={messages.custom_field_file_placeholder}
            name={question.name}
            label={question.label}
            required={question.required}
          />
        ),
        GreenhouseJobBoardJobQuestionForYesNo: question => (
          <FormField
            as={YesNoField}
            key={question.name}
            name={question.name}
            label={question.label}
            required={question.required}
          />
        ),
        GreenhouseJobBoardJobQuestionForSingleSelect: question => (
          <FormField
            as={SingleSelectField}
            key={question.name}
            name={question.name}
            label={question.label}
            required={question.required}
            options={[...question.options]}
          />
        ),
        GreenhouseJobBoardJobQuestionForMultiSelect: question => (
          <FormField
            as={MultiSelectField}
            key={question.name}
            name={question.name}
            label={question.label}
            required={question.required}
            options={[...question.options]}
          />
        ),
      }))}
      {data.privacyPolicy?.data?.content?.html && (
        <FormField
          as={TermsField}
          terms={data.privacyPolicy.data.content.html}
          label={messages.terms_privacy_info}
        />
      )}
      {data.sensitiveInfoPolicy?.data?.content?.html && (
        <FormField
          as={TermsField}
          terms={data.sensitiveInfoPolicy.data.content.html}
          label={messages.terms_sensitive_info}
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
          messages.button_submit
        )}
      </Button>
    </Form>
  );
};

export default JobApplicationPage;
