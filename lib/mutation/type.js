"use strict";

var Mutation = "\n  input applicationInput {\n    name: String!\n    description: String!\n    repository: String\n    datHash: String!\n    appUrl: String\n  }\n  type Mutation {\n    applicationMessage(input: applicationInput): Application\n  }\n";
module.exports = function () {
  return [Mutation];
};