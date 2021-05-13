/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */
const path = require('path')
const { promises: fs } = require('fs')
const http = require('http')
const serveHandler = require('serve-handler')

// You can delete this file if you're not using it
exports.createSchemaCustomization = ({ actions }) => {
  const gql = String.raw
  actions.createTypes(
    gql`
      type Site {
        siteMetadata: SiteMetadata!
      }
      type SiteMetadata {
        siteUrl: String!
        siteName: String!
      }
      type PrismicMbtiTestResultDataType {
        relations: [PrismicMbtiTestResultRelationsGroupType!]!
        thumbnail: PrismicImageType!
      }
      type PrismicImageDimensionsType {
        width: Int!
        height: Int!
      }
      type PrismicMbtiTestResultRemarksGroupType {
        remark_name: String!
      }

      type PrismicMbtiTestQuestionDataType {
        body: [PrismicMbtiTestQuestionBodySlicesType!]!
      }
    `
  )
}

function calcLCP() {
  window.largestContentfulPaint = 0

  const observer = new PerformanceObserver((entryList) => {
    const entries = entryList.getEntries()
    const lastEntry = entries[entries.length - 1]
    window.largestContentfulPaint = lastEntry.renderTime || lastEntry.loadTime
  })

  observer.observe({ type: 'largest-contentful-paint', buffered: true })

  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') {
      observer.takeRecords()
      observer.disconnect()
      console.log('LCP:', window.largestContentfulPaint)
    }
  })
}

exports.onPostBuild = async ({ store, reporter }) => {
  if (process.env.GATSBY_CLOUD === 'true') {
    // Note: Gatsby Cloud 에서는 Puppeteer를 못돌린다 이런;;
    return
  }

  const scale = 3

  let puppeteerCore
  let puppeteerOptions = {
    defaultViewport: {
      width: 375 * scale,
      height: 640,
    },
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    ignoreHTTPSErrors: true,
  }
  try {
    puppeteerCore = require('puppeteer')
  } catch (e) {
    reporter.warn("chouldn't load puppeteer")
  }
  if (!puppeteerCore) {
    try {
      const chromium = require('chrome-aws-lambda')
      puppeteerCore = chromium.puppeteer
      puppeteerOptions.executablePath = await chromium.executablePath
    } catch (e) {
      reporter.panicOnBuild(
        'Missing puppeteer dependency (yarn add puppeteer or yarn add puppeteer-core chrome-aws-lambda)'
      )
    }
  }

  const state = store.getState()
  const baseDir = state.program.directory
  const publicDir = path.join(baseDir, 'public')
  const resultDir = path.join(publicDir, 'results')
  const resultNames = (await fs.readdir(resultDir)).filter((name) => !name.startsWith('.'))

  if (resultNames.length === 0) {
    return
  }

  const server = http
    .createServer((req, res) => {
      return serveHandler(req, res, {
        public: publicDir,
      })
    })
    .listen({
      hostname: 'localhost',
      port: 8899,
    })

  const browser = await puppeteerCore.launch(puppeteerOptions)
  const pending = async (page) => {
    const lcp = await page.evaluate(() => {
      return window.largestContentfulPaint
    })
    if (!lcp) {
      await new Promise((res) => setTimeout(res, 500))
      return pending(page)
    }
  }

  for (const resultName of resultNames) {
    const page = await browser.newPage()
    await page.evaluateOnNewDocument(calcLCP)
    await page.goto(`http://localhost:8899/results/${resultName}/view/`, {
      waitUntil: 'load',
    })
    await page.evaluateHandle('document.fonts.ready')
    await pending(page)
    await page.evaluate(() => {
      document.documentElement.style.fontSize = `3em`
    })
    await (await page.$('#___gatsby')).screenshot({
      path: path.join(resultDir, resultName, 'view.jpeg'),
    })
  }

  await browser.close()
  server.close()
}
