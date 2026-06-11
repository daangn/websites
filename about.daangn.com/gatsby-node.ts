import * as fs from 'node:fs';
import * as path from 'node:path';
import type { GatsbyNode } from 'gatsby';

// DC-1368: careers(careers.daangn.com)로 이전된 라우트를 여기로 redirect한다.
const CAREERS_ORIGIN = 'https://careers.daangn.com';

export const onCreateNode: GatsbyNode['onCreateNode'] = ({ node, actions }) => {
  if (node.internal.type === 'JobPost') {
    // FIXME: 얘네도 다 컨텐츠로 관리해야하는데...
    if ('boardToken' in node && node.boardToken === '07153') {
      // Note: 원래 tags 필터링으로 숨기려고 했는데,
      // in/nin 조건 들어가면 배열이 비어있는 노드들이 다 빠짐...
      actions.createNodeField({
        node,
        name: 'searchable',
        value: false,
      });
      actions.createNodeField({
        node,
        name: 'allowResume',
        value: false,
      });
    }
  }
};

// DC-1368: careers로 이전된 라우트의 페이지를 제거한다(about.daangn.com 한정).
// 페이지를 지우면 같은 경로의 _redirects 규칙(static/_redirects + onPostBuild 생성분)이 받는다.
// 비전 블로그 포스트(/blog/archive/...)는 createPages에서 비전만 생성하므로 애초에 여기 대상이 아니다.
export const onCreatePage: GatsbyNode['onCreatePage'] = ({ page, actions }) => {
  const p = page.path;
  const migrated =
    p === '/' ||
    p === '/culture/' ||
    p === '/completed/' ||
    p.startsWith('/faq/') ||
    // 채용 목록/상세/지원/부서는 이전 대상. 채용 아티클(/jobs/article/)은 어당 유지.
    (p.startsWith('/jobs/') && !p.startsWith('/jobs/article/'));
  if (migrated) {
    actions.deletePage(page);
  }
};

export const createPages: GatsbyNode['createPages'] = async ({
  graphql,
  actions,
  reporter,
  store,
}) => {
  const { program } = store.getState();
  const basePath = program.directory as string;

  const gql = String.raw;

  type Data = {
    allPrismicIr: {
      nodes: Array<{
        uid: string;
      }>;
    };
    allPrismicFinancialStatements: {
      nodes: Array<{
        uid: string;
      }>;
    };
    allPrPost: {
      nodes: Array<{
        id: string;
        slug: string;
      }>;
    };
    allBlogPost: {
      nodes: Array<{
        id: string;
        slug: string;
        blogCategory: Array<{ uid: string }>;
      }>;
    };
  };
  const { data, errors } = await graphql<Data>(gql`
    {
      allPrismicIr(
        filter: {
          uid: {
            ne: null
          }
          tags: {
            in: ["team.daangn.com"]
          }
        }
      ) {
        nodes {
          uid
        }
      }

      allPrismicFinancialStatements(
        filter: {
          tags: {
            in: ["team.daangn.com"]
          }
        }
        sort: {
          first_publication_date: DESC
        }
      ) {
        nodes {
          uid
        }
      }

      allPrPost: allPost(
        filter: {
          category: {
            uid: { eq: "pr" }
          }
        }
      ) {
        nodes {
          id
          slug
        }
      }

      allBlogPost: allPost(
        filter: {
          category: {
            uid: { ne: "pr" }
          }
        }
      ) {
        nodes {
          id
          slug
          blogCategory {
            uid
          }
        }
      }
    }
  `);

  if (errors) {
    reporter.panicOnBuild(errors);
  }
  if (!data) {
    throw new Error('Failed to fetch data for team.daangn.com');
  }

  for (const ir of data.allPrismicIr.nodes) {
    if (!ir.uid) {
      reporter.warn('Some ir in Prismic CMS have empty uid');
      continue;
    }
    actions.createPage({
      path: `/ir/${ir.uid}/`,
      component: path.resolve(basePath, 'src/templates/IrPage.tsx'),
      context: {
        uid: ir.uid,
      },
    });
  }

  const visited = new Set<string>();
  for (const finance of data.allPrismicFinancialStatements.nodes) {
    if (visited.has(finance.uid)) {
      console.warn(`Detected duplicated uid in financial_statements: ${finance.uid}`);
      continue;
    } else visited.add(finance.uid);

    if (!finance.uid) {
      reporter.warn('Some financial_statements in Prismic CMS have empty uid');
      continue;
    }
    actions.createPage({
      path: `/ir/finances/${finance.uid}/`,
      component: path.resolve(basePath, 'src/templates/FinancialStatementsPage.tsx'),
      context: {
        uid: finance.uid,
      },
    });
  }
  actions.createRedirect({
    fromPath: '/ir/finances/',
    toPath: `/ir/finances/${
      data.allPrismicFinancialStatements.nodes.filter((node) => node.uid)[0].uid
    }/`,
    isPermanent: false,
    redirectInBrowser: true,
  });
  actions.createRedirect({
    fromPath: '/ir/finances/2022-seperate/',
    toPath: '/ir/finances/2022-separate/',
    isPermanent: true,
    redirectInBrowser: false,
  });
  actions.createRedirect({
    fromPath: '/ir/finances/2023-seperate/',
    toPath: '/ir/finances/2023-separate/',
    isPermanent: true,
    redirectInBrowser: false,
  });

  for (const post of data.allPrPost.nodes) {
    actions.createPage({
      path: `/company/pr/archive/${post.slug}/`,
      component: path.resolve(basePath, 'src/templates/PrPostPage.tsx'),
      context: {
        id: post.id,
      },
    });
  }

  // DC-1368: 블로그는 careers로 이전. 단 비전 카테고리 포스트는 careers가 노출하지 않으므로
  // (커당 content.config의 post 로더가 category_group에 vision이 있으면 드롭) 어당에 상세 페이지를 유지한다.
  // 비전 외 포스트는 페이지를 만들지 않고 onPostBuild에서 careers로 redirect를 발행한다.
  // /blog/ 메인과 /blog/category/는 전부 careers redirect(static/_redirects)로 대체.
  for (const post of data.allBlogPost.nodes) {
    const isVision = post.blogCategory.some((category) => category.uid === 'vision');
    if (!isVision) continue;

    actions.createPage({
      path: `/blog/archive/${post.slug}/`,
      component: path.resolve(basePath, 'src/templates/BlogPostPage.tsx'),
      context: {
        id: post.id,
      },
    });
  }
};

// DC-1368: careers로 이전된 동적 라우트의 redirect를 빌드타임에 생성해 public/_redirects에 덧붙인다.
// CF Pages _redirects는 placeholder/splat을 지원하지만 숫자 ghId와 텍스트 부서 slug를 구분하지 못하므로,
// 부서만 exact로 열거(ghId placeholder보다 먼저)하고 ghId는 placeholder로 받는다.
// 블로그 포스트는 비전 슬러그에 규칙을 만들지 않기 위해 exact로 열거한다(비전은 어당 유지).
export const onPostBuild: GatsbyNode['onPostBuild'] = async ({ graphql, reporter, store }) => {
  const { program } = store.getState();
  const basePath = program.directory as string;

  const gql = String.raw;

  type Data = {
    allBlogPost: {
      nodes: Array<{
        slug: string;
        blogCategory: Array<{ uid: string }>;
      }>;
    };
    allJobDepartment: {
      nodes: Array<{
        slug: string;
      }>;
    };
  };
  const { data, errors } = await graphql<Data>(gql`
    {
      allBlogPost: allPost(
        filter: {
          category: {
            uid: { ne: "pr" }
          }
        }
      ) {
        nodes {
          slug
          blogCategory {
            uid
          }
        }
      }

      allJobDepartment {
        nodes {
          slug
        }
      }
    }
  `);

  if (errors) {
    reporter.panicOnBuild(errors);
  }
  if (!data) {
    throw new Error('Failed to fetch redirect data for about.daangn.com');
  }

  const lines: string[] = [];

  // 블로그 포스트 상세 (비전 제외) → careers
  for (const post of data.allBlogPost.nodes) {
    const isVision = post.blogCategory.some((category) => category.uid === 'vision');
    if (isVision) continue;

    // 한글 slug는 인코딩 (CF Pages _redirects 매칭은 인코딩 기준 — 기존 faq redirect 컨벤션).
    const slug = encodeURIComponent(post.slug);
    lines.push(`/blog/archive/${slug}/  ${CAREERS_ORIGIN}/blog/post/${slug}/  308`);
  }

  // 부서 목록 → careers 채용 목록 (ghId placeholder보다 먼저 와야 함)
  for (const department of data.allJobDepartment.nodes) {
    if (!department.slug) continue;

    lines.push(`/jobs/${encodeURIComponent(department.slug)}/  ${CAREERS_ORIGIN}/jobs/  308`);
  }

  // 채용 상세 / 지원 폼 (ghId placeholder)
  lines.push(`/jobs/:ghId/apply/  ${CAREERS_ORIGIN}/jobs/role/:ghId/apply/  308`);
  lines.push(`/jobs/:ghId/  ${CAREERS_ORIGIN}/jobs/role/:ghId/  308`);

  // static/_redirects 원본에 생성 규칙을 이어붙여 public/_redirects에 쓴다.
  // (gatsby가 static/을 public/으로 복사하지만, 캐시 빌드에서도 idempotent하도록 원본을 기준으로 재작성.)
  const staticRedirects = fs
    .readFileSync(path.join(basePath, 'static/_redirects'), 'utf8')
    .trimEnd();
  const generated = ['', '# --- DC-1368: 빌드타임 생성 careers redirect ---', ...lines, ''].join(
    '\n',
  );
  fs.writeFileSync(path.join(basePath, 'public/_redirects'), `${staticRedirects}\n${generated}`);

  reporter.info(`[DC-1368] public/_redirects에 생성 규칙 ${lines.length}개를 추가했어요.`);
};
