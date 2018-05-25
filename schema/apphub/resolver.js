export default {
  name: (msg) => msg.value.content.application.name,
  author: (msg) => msg.value.author,
  key: (msg) => msg.key,
  category: (msg) => msg.value.content.application.category,
  repository: (msg) => msg.value.content.application.repository,
  hash: (msg) => msg.value.content.application.hash,
  slug: (msg) => msg.value.content.application.slug,
  type: (msg) => msg.value.content.type,
}