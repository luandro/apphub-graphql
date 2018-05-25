'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _helpers = require('../apphub/helpers');

exports.default = {
  applicationMessage: function applicationMessage(_, _ref, _ref2) {
    var input = _ref.input;
    var sbot = _ref2.sbot;

    // const { name, author, key, category, repository, hash, slug  } = input
    return (0, _helpers.publishMessage)({
      type: 'open-app-application-poc2',
      application: input
    }, sbot);
  }
};