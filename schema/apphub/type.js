const Application = `
  type Application {
    name: String!
    description: String!
    author: String!
    repository: String
    datHash: String
    appUrl: String
  }
`
module.exports = () => [Application]