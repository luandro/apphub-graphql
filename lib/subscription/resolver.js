'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _helpers = require('../ssb/gossip/helpers');

exports.default = {
  counter: {
    subscribe: function subscribe(parent, args, _ref) {
      var pubsub = _ref.pubsub;

      var channel = Math.random().toString(36).substring(2, 15); // random channel name
      var count = 0;
      setInterval(function () {
        return pubsub.publish(channel, { counter: { count: count++ } });
      }, 2000);
      return pubsub.asyncIterator(channel);
    }
  },
  gossip: {
    subscribe: function subscribe(parent, args, _ref2) {
      var pubsub = _ref2.pubsub,
          sbot = _ref2.sbot;
      var connected = args.connected;

      var channel = Math.random().toString(36).substring(2, 15); // random channel name
      (0, _helpers.getConnectedPeers)(sbot, pubsub, channel, connected);
      return pubsub.asyncIterator(channel);
    }
  }
};