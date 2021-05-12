/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */
const path = require('path')
const fs = require('fs/promises')
const puppeteer = require('puppeteer')
const http = require('http')
const serveHandler = require('serve-handler')

// You can delete this file if you're not using it
exports.createSchemaCustomization = ({ actions }) => {
  const gql = String.raw
  actions.createTypes(
    gql`
      type PrismicMbtiTestResultDataType {
        relations: [PrismicMbtiTestResultRelationsGroupType!]!
        thumbnail: PrismicImageType!
      }
      type PrismicImageDimensionsType {
        width: Int!
        height: Int!
      }
      type PrismicImageType {
        url: String!
        dimensions: PrismicImageDimensionsType!
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

exports.onPostBuild = async ({ store }) => {
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

  const scale = 3

  const browser = await puppeteer.launch({
    defaultViewport: {
      width: 375 * scale,
      height: 640,
    },
  })
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
