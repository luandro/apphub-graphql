'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _helpers = require('../apphub/helpers');

exports.default = {
  applicationMessage: function applicationMessage(_, _ref, _ref2) {
    var input = _ref.input;
    var sbot = _ref2.sbot;

    return (0, _helpers.publishMessage)({
      type: 'open-app-hub-alpha',
      application: input
    }, sbot);
  }
};