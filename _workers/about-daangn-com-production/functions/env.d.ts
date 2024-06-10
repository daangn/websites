type Env = {
  /**
   * Public content (주로 `index.html`) 의 Cache invalidation 용으로 사용됩니다.
   *
   * Note: 값 구성을 유연하게 하기 위해 시크릿으로 따로 관리됩니다. (실제 보안이 필요한 값은 아님)
   */
  PUBLIC_TAG: string,

  CONTENT_BUCKET: R2Bucket,
}

type HonoEnv = {
  Bindings: Env,
};
