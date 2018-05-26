export default {
  name: (msg) => msg.value.content.application.name,
  author: (msg) => msg.value.author,
  description: (msg) => msg.value.content.application.description,
  repository: (msg) => msg.value.content.application.repository,
  datHash: (msg) => msg.value.content.application.datHash,
  appUrl: (msg) => msg.value.content.application.appUrl,
}