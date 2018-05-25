"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: function name(msg) {
    return msg.value.content.application.name;
  },
  author: function author(msg) {
    return msg.value.author;
  },
  key: function key(msg) {
    return msg.key;
  },
  category: function category(msg) {
    return msg.value.content.application.category;
  },
  repository: function repository(msg) {
    return msg.value.content.application.repository;
  },
  hash: function hash(msg) {
    return msg.value.content.application.hash;
  },
  slug: function slug(msg) {
    return msg.value.content.application.slug;
  },
  type: function type(msg) {
    return msg.value.content.type;
  }
};