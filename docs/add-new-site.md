# 새 사이트 추가하는 법

1. 사이트 대표(Canonical) 도메인을 결정하고, 해당 도메인명으로 새 워크스페이스를 만듭니다. (e.g. `www.example.com`)

2. Gatsby.js 설정을 추가합니다. `_template` 폴더의 내용을 참고합니다.

3. PR을 생성하고 [메인테이너]에게 CI/CD 설정을 요청합니다.

## CI/CD

[Gatsby Cloud] 빌드 서비스와 [Vercel] 호스팅을 사용합니다.

[Vercel]이 외 다른 호스팅 옵션(e.g. S3)이 필요한 경우 [메인테이너]와 인프라 팀에 문의합니다.

### Gatsby Cloud

Gatsby.js 프로젝트 전용 빌드 & 호스팅을 제공하는 SaaS 입니다.

최적화된 [Incremental Build] 구성을 제공하여 빌드가 매우 빠릅니다.

[Gatsby Cloud] 이외 다른 호스팅 서비스와 통합할 수 있습니다.

### Vercel

정적 웹 프로젝트 빌드와 호스팅 기능을 제공하는 SaaS 입니다.

[메인테이너]: ../README.md#Maintainers
[Gatsby Cloud]: https://www.gatsbyjs.com/dashboard/organization/f6afc372-6bab-4fcf-800c-70a568546743
[Vercel]: https://vercel.com/karrot
[Incremental Build]: https://www.gatsbyjs.com/blog/2020-04-22-announcing-incremental-builds/ 
