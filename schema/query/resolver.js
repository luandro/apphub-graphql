import { getApplications } from '../apphub/helpers'

export default {
  getApplications: (_, obj, { sbot }) => getApplications(sbot),
}
