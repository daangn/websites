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
      portfolioRequired
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
            window.alert(messages.alert_completed);
          } else {
            dispatch('INVALID');
            const message = await response.text();
            window.alert(message);
          }
        } catch (e) {
          console.error(e);
          window.alert(messages.alert_failed);
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
        label={messages.field_name_label}
        placeholder={messages.field_name_placeholder}
        required
      />
      <FormField
        variants={{ type: 'tel' }}
        name="phone_number"
        label={messages.field_phone_label}
        placeholder={messages.field_phone_placeholder}
        required
      />
      <FormField
        variants={{ type: 'email' }}
        name="email"
        label={messages.field_email_label}
        placeholder={messages.field_email_placeholder}
        required
      />
      <FormField
        variants={{
          type: 'file',
          accepts: greenhouseAcceptedMimeTypes,
        }}
        name="resume"
        label={messages.field_resume_label}
        description={messages.field_resume_description}
        placeholder={messages.field_resume_placeholder}
        required
      />
      <FormField
        variants={{
          type: 'file',
          accepts: greenhouseAcceptedMimeTypes,
        }}
        name="portfolio"
        label={messages.field_portfolio_label}
        placeholder={messages.field_portfolio_placeholder}
        description={messages.field_portfolio_description}
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
          label={messages.terms_privacy_info}
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
          label={messages.terms_sensitive_info}
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
          messages.button_submit
        )}
      </Button>
    </Form>
  );
};

export default JobApplicationPage;
