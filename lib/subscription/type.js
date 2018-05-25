"use strict";

var Subscription = "\n  type Counter {\n    count: Int!\n    countStr: String\n  }\n  type Subscription {\n    counter: Counter!\n    gossip(connected: Boolean): Gossip!\n  }\n";

module.exports = function () {
  return [Subscription];
};