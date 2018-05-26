"use strict";

var Application = "\n  type Application {\n    name: String!\n    description: String!\n    author: String!\n    repository: String\n    datHash: String\n    appUrl: String\n  }\n";
module.exports = function () {
  return [Application];
};