import { publishMessage } from '../apphub/helpers';

export default {
  applicationMessage: (_, { input}, { sbot }) => {
    // const { name, author, key, category, repository, hash, slug  } = input
    return publishMessage({
      type: 'open-app-application-poc2',
      application: input
    }, sbot)
  },
}
