type JobPostLike = {
  corporate?: string,
  employmentType?: string,
}

export default function *generateProperties(jobPost: JobPostLike): Generator<string, void, unknown> {
  if (jobPost.corporate) {
    const corporate = {
      KARROT_MARKET: 'Karrot',
      KARROT_PAY: 'Karrot Pay',
    }[jobPost.corporate];
    if (corporate) {
      yield corporate;
    }
  }

  if (jobPost.employmentType) {
    const employmentType = {
      FULL_TIME: 'Full-time',
      CONTRACTOR: 'Contract',
      INTERN: 'Intern',
      ASSISTANT: 'Temporary',
    }[jobPost.employmentType];
    if (employmentType) {
      yield employmentType;
    }
  }
}
