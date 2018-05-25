'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _resolver = require('./apphub/resolver');

var _resolver2 = _interopRequireDefault(_resolver);

var _resolver3 = require('./mutation/resolver');

var _resolver4 = _interopRequireDefault(_resolver3);

var _resolver5 = require('./query/resolver');

var _resolver6 = _interopRequireDefault(_resolver5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  Application: _resolver2.default,
  Mutation: _resolver4.default,
  Query: _resolver6.default
};