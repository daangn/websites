type JobPostLike = {
  corporate?: string,
  employmentType?: string,
}

export default function *generateProperties(jobPost: JobPostLike): Generator<string, void, unknown> {
  if (jobPost.corporate) {
    yield {
      'KARROT_MARKET': '당근마켓',
      'KARROT_PAY': '당근페이',
    }[jobPost.corporate] || '당근마켓';
  }

  if (jobPost.employmentType) {
    const employmentType = {
      FULL_TIME: '정규직',
      INTERN: '인턴',
      ASSISTANT: '어시스턴트',
      CONTRACTOR: '계약직',
    }[jobPost.employmentType];

    if (employmentType) {
      yield employmentType;
    }
  }
}
