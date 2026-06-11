import * as fs from 'node:fs';
import * as path from 'node:path';
import type { GatsbyNode } from 'gatsby';

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

// 페이지를 지우면 같은 경로의 _redirects 규칙(static/_redirects + onPostBuild 생성분)이 받는다.
export const onCreatePage: GatsbyNode['onCreatePage'] = ({ page, actions }) => {
  const p = page.path;
  const migrated =
    // about 홈(/)은 careers로 이전하지 않아 목록에서 제외.
    p === '/culture/' ||
    p === '/completed/' ||
    p.startsWith('/faq/') ||
    // 채용 아티클(/jobs/article/)은 어당 유지.
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

  // 비전 카테고리 포스트만 어당에 상세 페이지를 유지한다(careers가 비전을 노출하지 않으므로).
  // 비전 외 포스트는 onPostBuild에서 careers로 redirect를 발행한다.
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

// careers로 이전된 동적 라우트의 redirect를 빌드타임에 생성해 public/_redirects를 재작성한다.
// CF Pages _redirects는 placeholder/splat을 지원하지만 숫자 ghId와 텍스트 부서 slug를 구분하지 못하므로,
// 부서만 exact로 열거(ghId placeholder보다 먼저)하고 ghId는 placeholder로 받는다.
// 블로그 포스트는 비전 슬러그에 규칙을 만들지 않기 위해 exact로 열거한다(비전은 어당 유지).
//
// 중요: CF Pages는 "static 규칙(splat·placeholder 없는 줄)이 dynamic 규칙보다 먼저" 와야 한다.
// 첫 splat/placeholder 줄이 나오면 그 뒤의 모든 줄은 exact여도 dynamic으로 카운트되고(dynamic 한도 100),
// 초과분은 조용히 드롭된다. 그래서 static 파일 + 생성 규칙을 from 경로의 splat/placeholder 유무로 분류해
// exact(static)를 전부 앞, placeholder/splat(dynamic)을 전부 뒤로 모아 쓴다.
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

  // CF Pages 분류 기준: from(출발 경로)에 splat(*)이나 placeholder(:name)가 있으면 dynamic.
  const isDynamicFrom = (from: string) => /\*|:[A-Za-z]\w*/.test(from);

  const staticGenerated: string[] = [];
  const dynamicGenerated: string[] = [];

  for (const post of data.allBlogPost.nodes) {
    const isVision = post.blogCategory.some((category) => category.uid === 'vision');
    if (isVision) continue;

    // 한글 slug는 인코딩 (CF Pages _redirects 매칭은 인코딩 기준 — 기존 faq redirect 컨벤션).
    const slug = encodeURIComponent(post.slug);
    staticGenerated.push(`/blog/archive/${slug}/  ${CAREERS_ORIGIN}/blog/post/${slug}/  308`);
  }

  for (const department of data.allJobDepartment.nodes) {
    if (!department.slug) continue;

    staticGenerated.push(
      `/jobs/${encodeURIComponent(department.slug)}/  ${CAREERS_ORIGIN}/jobs/  308`,
    );
  }

  // 채용 상세 / 지원 폼 (ghId placeholder). dynamic — apply가 상세보다 먼저.
  dynamicGenerated.push(`/jobs/:ghId/apply/  ${CAREERS_ORIGIN}/jobs/role/:ghId/apply/  308`);
  dynamicGenerated.push(`/jobs/:ghId/  ${CAREERS_ORIGIN}/jobs/role/:ghId/  308`);

  // 규칙 앞의 주석/빈 줄은 뒤따르는 규칙에 붙여 같은 그룹으로 옮긴다(섹션 주석 보존).
  const staticFromFile: string[] = [];
  const dynamicFromFile: string[] = [];
  let pending: string[] = [];
  for (const line of fs
    .readFileSync(path.join(basePath, 'static/_redirects'), 'utf8')
    .split('\n')) {
    const trimmed = line.trim();
    if (trimmed === '' || trimmed.startsWith('#')) {
      pending.push(line);
      continue;
    }

    const [from] = trimmed.split(/\s+/);
    const bucket = isDynamicFrom(from) ? dynamicFromFile : staticFromFile;
    bucket.push(...pending, line);
    pending = [];
  }
  staticFromFile.push(...pending); // 파일 끝 주석은 static 쪽에 남긴다.

  const out = [
    ...staticFromFile,
    '',
    '# --- 빌드타임 생성 — exact(static) ---',
    ...staticGenerated,
    '',
    '# --- 빌드타임 생성 — dynamic(splat/placeholder). 반드시 static 뒤 ---',
    ...dynamicFromFile,
    ...dynamicGenerated,
    '',
  ].join('\n');
  fs.writeFileSync(path.join(basePath, 'public/_redirects'), out);

  reporter.info(
    `public/_redirects 재작성: static(exact) 생성 ${staticGenerated.length}개 + dynamic 생성 ${dynamicGenerated.length}개.`,
  );
};
