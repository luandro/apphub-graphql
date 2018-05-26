import { publishMessage } from '../apphub/helpers';

export default {
  applicationMessage: (_, { input}, { sbot }) => {
    return publishMessage({
      type: 'open-app-hub-alpha',
      application: input
    }, sbot)
  },
}
