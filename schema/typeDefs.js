import Application from './apphub/type'
import Mutation from './mutation/type'
import Query from './query/type'

const Schema = () => [`
  schema {
    query: Query
    mutation: Mutation
  }
`]

export default [
  Application,
  Query,
  Mutation,
  Schema,
]
