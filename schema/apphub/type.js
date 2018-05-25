const Application = `
  type Application {
    name: String!
    author: String!
    key: ID
    category: String
    repository: String
    hash: String
    slug: String
    type: String!
  }
`
module.exports = () => [Application]