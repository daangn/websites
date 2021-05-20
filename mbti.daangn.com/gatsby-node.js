/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */
const path = require('path')
const { promises: fs, existsSync } = require('fs')

const buildPageImage = require('./scripts/buildPageImages')

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
      type PrismicMbtiTestResultRemarksGroupType {
        remark_name: String!
      }
      type PrismicMbtiTestQuestionDataType {
        body: [PrismicMbtiTestQuestionBodySlicesType!]!
      }
    `
  )
}

exports.onPostBuild = async ({ store, reporter }) => {
  if (process.env.GATSBY_CLOUD === 'true') {
    // Note: Gatsby Cloud 에서는 Puppeteer를 못돌린다 이런;;
    return
  }

  const state = store.getState()
  const baseDir = state.program.directory
  const publicDir = path.join(baseDir, 'public')
  const resultDir = path.join(publicDir, 'results')
  const resultNames = (await fs.readdir(resultDir)).filter((name) => !name.startsWith('.'))

  if (resultNames.length === 0) {
    return
  }

  const imageBuildDir = path.join(baseDir, 'tmp')

  const isExistImageDir = existsSync(imageBuildDir)
  !isExistImageDir && (await fs.mkdir(imageBuildDir))

  await buildPageImage({
    getPath: (name) => path.join(imageBuildDir, `${name}.jpeg`),
    resultNames,
    publicDir,
    reporter,
  })
}
