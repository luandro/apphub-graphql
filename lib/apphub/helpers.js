'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.publishMessage = exports.getApplications = undefined;

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _pullStream = require('pull-stream');

var _pullStream2 = _interopRequireDefault(_pullStream);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getApplications = exports.getApplications = function getApplications(sbot) {
  return new _promise2.default(function (resolve, reject) {
    // sbot.apphub.get((err, view) => {
    //   if (err) console.log('Error on getting apphub', err)
    //   console.log('Got view', view)
    // resolve(view)
    (0, _pullStream2.default)(sbot.apphub.stream(), _pullStream2.default.collect(function (err, view) {
      if (err) reject(err);
      console.log('VIEW', view);
      resolve(view);
    }));
    // ssbServer.close()
    // })
  });
};

var publishMessage = exports.publishMessage = function publishMessage(content, sbot) {
  return new _promise2.default(function (resolve, reject) {
    sbot.publish(content, function (err, msg) {
      if (err) {
        console.log(err);
        reject(err);
      }
      resolve(msg);
    });
  });
};