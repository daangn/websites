type JobPostLike = {
  corporate?: string,
  chapter?: string,
  employmentType?: string,
  priorExperience?: string,
}

export default function *generateProperties(jobPost: JobPostLike): Generator<string, void, unknown> {
  if (jobPost.corporate) {
    const corporate = {
      KARROT_MARKET: '당근마켓',
      KARROT_PAY: '당근페이',
    }[jobPost.corporate];
    if (corporate) {
      yield corporate;
    }
  }
  
  if (jobPost.chapter) {
    yield jobPost.chapter;
  }

  if (jobPost.employmentType) {
    const employmentType = {
      FULL_TIME: '정규직',
      CONTRACTOR: '계약직',
      INTERN: '인턴',
      ASSISTANT: '어시스턴트',
    }[jobPost.employmentType];
    if (employmentType) {
      yield employmentType;
    }
  }

  if (jobPost.priorExperience) {
    const priorExperience = {
      YES: '경력',
      NO: '신입',
      WHATEVER: '경력/신입',
    }[jobPost.priorExperience];
    if (priorExperience) {
      yield priorExperience;
    }
  }
}
