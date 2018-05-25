"use strict";

var Mutation = "\n  input applicationInput {\n    name: String!\n    category: String\n    repository: String\n    hash: String\n    slug: String\n  }\n  type Mutation {\n    applicationMessage(input: applicationInput): Application\n  }\n";
module.exports = function () {
  return [Mutation];
};