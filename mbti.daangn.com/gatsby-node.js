/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */
const path = require('path')
const fs = require('fs')

const mbtiJSON = JSON.parse(fs.readFileSync(path.resolve(__dirname, './data/mbtiQnAData.json')))

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
    `
  )
  actions.createTypes(gql`
    type MBTIAnswerNode {
      target: String!
      text: String!
    }
    type MBTIQuestionNode implements Node @dontInfer {
      title: String!
      answers: [MBTIAnswerNode!]!
      imageFile: File! @link(by: "relativePath", from: "relativeImagePath")
      idx: Int!
      isLast: Boolean!
    }
    type MBTITargetResultRemark {
      title: String!
      description: String!
    }
    type MBTITargetResult implements Node @dontInfer {
      code: String!
      name: String!
      description: String!
      tags: [String!]!
      remark: [MBTITargetResultRemark!]!
    }
  `)
}

exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  const questionCount = mbtiJSON.questions.length

  try {
    mbtiJSON.questions.forEach((question, idx) => {
      actions.createNode({
        id: createNodeId(`MBTIQuestionNode:${idx}`),
        internal: {
          type: 'MBTIQuestionNode',
          contentDigest: createContentDigest(question),
        },
        ...question,
        idx: idx + 1,
        isLast: idx + 1 >= questionCount,
        relativeImagePath: `numbers/img_num_${idx + 1}.png`,
      })
    })

    mbtiJSON.results.forEach((result) => {
      actions.createNode({
        id: createNodeId(`MBTITargetResult:${result.code}`),
        internal: {
          type: 'MBTITargetResult',
          contentDigest: createContentDigest(result),
        },
        ...result,
      })
    })
  } catch (e) {
    console.error(e)
    process.exit(1)
  }
}
