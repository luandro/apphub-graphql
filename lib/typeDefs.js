'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _type = require('./apphub/type');

var _type2 = _interopRequireDefault(_type);

var _type3 = require('./mutation/type');

var _type4 = _interopRequireDefault(_type3);

var _type5 = require('./query/type');

var _type6 = _interopRequireDefault(_type5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = function Schema() {
  return ['\n  schema {\n    query: Query\n    mutation: Mutation\n  }\n'];
};

exports.default = [_type2.default, _type6.default, _type4.default, Schema];