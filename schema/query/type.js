const Query = `
  type Query {
    getApplications: [Application]
  }
`
module.exports = () => [Query]
