# CloudFlare Workers

서버리스 함수가 필요할 때 [CloudFlare Workers] 를 사용합니다.

## Wrangler

Wrangler를 이용해서 관리합니다. ([Wrangler 가이드] 참고)

공용 계정(join123)을 사용해서 로그인 하세요.

```bash
wrangler login
```

워크스페이스 경로에 [`wrangler.toml`](https://developers.cloudflare.com/workers/cli-wrangler/configuration) 파일을 추가합니다.

```toml
name = '[워커 이름]'

# 공용 계정 account_id
account_id = 'aad5c82543cd1f267b89737d0f56405e'
```

## 왜 [Gatsby Functions] 안쓰나요?

- [Gatsby Cloud] Hosting 이외 다른 호스팅 서비스와 통합되지 않습니다.
- 더 빠릅니다.
- 더 저렴합니다.

[CloudFlare Workers]: https://workers.cloudflare.com
[Gatsby Functions]: https://www.gatsbyjs.com/docs/reference/functions/
[Wrangler 가이드]: https://developers.cloudflare.com/workers/get-started/guide
