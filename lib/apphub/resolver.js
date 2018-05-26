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
  description: function description(msg) {
    return msg.value.content.application.description;
  },
  repository: function repository(msg) {
    return msg.value.content.application.repository;
  },
  datHash: function datHash(msg) {
    return msg.value.content.application.datHash;
  },
  appUrl: function appUrl(msg) {
    return msg.value.content.application.appUrl;
  }
};