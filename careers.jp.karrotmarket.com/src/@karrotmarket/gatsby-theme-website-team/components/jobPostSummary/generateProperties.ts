type JobPostLike = {
  corporate?: string,
}

export default function *generateProperties(jobPost: JobPostLike): Generator<string, void, unknown> {
  if (jobPost.corporate) {
    yield {
      'KARROT_MARKET': 'Karrot',
      'KARROT_PAY': 'Karrot Pay',
    }[jobPost.corporate] || 'Karrot';
  }
}
