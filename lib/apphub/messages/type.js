"use strict";

var ApplicationMessage = "\n  type ApplicationMessage {\n    content: String\n    key: String!\n    sequence: Int!\n    text: String\n    timestamp: Float!\n    type: String!\n    author: String!\n  }\n";
module.exports = function () {
  return [ApplicationMessage];
};