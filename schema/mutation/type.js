const Mutation = `
  input applicationInput {
    name: String!
    description: String!
    repository: String
    datHash: String!
    appUrl: String
  }
  type Mutation {
    applicationMessage(input: applicationInput): Application
  }
`
module.exports = () => [Mutation]
