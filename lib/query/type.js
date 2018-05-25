"use strict";

var Query = "\n  type Query {\n    getApplications: [Application]\n  }\n";
module.exports = function () {
  return [Query];
};