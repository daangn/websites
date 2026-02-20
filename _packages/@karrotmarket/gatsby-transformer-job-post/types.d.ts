export type PluginOptions = {
 defaultTags?: {
   [boardToken: string]: string[];
 },
 defaultMeta?: {
   [boardToken: string]: {
      title?: string;
      description?: string;
      image?: string;
   };
 },
 /**
  * 보드별 지원 약관
  * Prismic UID 목록으로 컨텐츠 연결 관리
  *
  * 지정하지 않는 경우 이전 연결을 기본값으로 사용
  * @default ['job-application-privacy', 'job-application-sensitive']
  */
 applicationTerms?: {
   [boardToken: string]: string[];
 },
};
