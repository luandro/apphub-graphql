"use strict";

var Application = "\n  type Application {\n    name: String!\n    author: String!\n    key: ID\n    category: String\n    repository: String\n    hash: String\n    slug: String\n    type: String!\n  }\n";
module.exports = function () {
  return [Application];
};