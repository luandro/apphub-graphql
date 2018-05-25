const Mutation = `
  input applicationInput {
    name: String!
    category: String
    repository: String
    hash: String
    slug: String
  }
  type Mutation {
    applicationMessage(input: applicationInput): Application
  }
`
module.exports = () => [Mutation]
