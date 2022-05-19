/* eslint-disable */

import { graphql } from 'gatsby';

export const fragments = graphql`
  fragment AllLokaliseMessages on LokaliseMessages {
    detail_link__default_label
    form_field__empty_placeholder
    form_field__no_placeholder
    form_field__organization_name
    form_field__placeholder
    form_field__yes_placeholder
    job_application_page__alert_completed
    job_application_page__alert_failed
    job_application_page__button_submit
    job_application_page__confirm_apply
    job_application_page__field_email_label
    job_application_page__field_email_placeholder
    job_application_page__field_file_placeholder
    job_application_page__field_name_label
    job_application_page__field_name_placeholder
    job_application_page__field_phone_label
    job_application_page__field_phone_placeholder
    job_application_page__field_portpolio_description
    job_application_page__field_portpolio_label
    job_application_page__field_portpolio_placeholder
    job_application_page__field_resume_description
    job_application_page__field_resume_label
    job_application_page__field_resume_placeholder
    job_application_page__terms_privacy_info
    job_application_page__terms_sensitive_info
    job_post_layout__prior_experience_no
    job_post_layout__prior_experience_whatever
    job_post_layout__prior_experience_yes
    job_post_layout__property_karrot_market
    job_post_layout__property_karrot_pay
    job_post_layout__tab_apply
    job_post_layout__tab_view
    job_post_list__empty_placeholder__back_to_list
    job_post_list__empty_placeholder__no_results
    job_post_page__back_to_list
    job_post_page__external_post_link
    job_post_page__external_post_notice
    job_post_page__faq
    jobs_page__chapter_all
    jobs_page__default_meta_title
    jobs_page__employment_type_all
    jobs_page__employment_type_assistant
    jobs_page__employment_type_contractor
    jobs_page__employment_type_fulltime
    jobs_page__employment_type_intern
    jobs_page__search
    faq_page__search
  }
`;