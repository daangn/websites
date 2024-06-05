interface Env {
  /**
   * A shared authorization key for websites administrators
   */
  WEBSITES_ADMIN_KEY: string;

  /**
   * A GitHub fine-grained token with the following permissions
   * - "Actions" repository permissions (write)
   *
   * @see https://docs.github.com/en/rest/actions/workflows?apiVersion=2022-11-28#create-a-workflow-dispatch-event
   */
  GITHUB_API_TOKEN: string;

  /**
   * R2 bucket binding for build artifacts
   */
  ARTIFACTS: R2Bucket;
}
