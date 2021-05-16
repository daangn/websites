const http = require('http')
const serveHandler = require('serve-handler')

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

module.exports = async ({ resultNames, getPath, publicDir, reporter }) => {
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
    await (await page.$('#daangn-mbti-result-page-container')).screenshot({
      path: getPath(resultName),
    })
  }

  await browser.close()
  server.close()
}
