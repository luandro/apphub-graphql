'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _helpers = require('../apphub/helpers');

exports.default = {
  getApplications: function getApplications(_, obj, _ref) {
    var sbot = _ref.sbot;
    return (0, _helpers.getApplications)(sbot);
  }
};