'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shareDat = exports.getDat = undefined;

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var path = require('path');
var Dat = require('dat-node');
var fs = require('fs');
var mirror = require('mirror-folder');
var ram = require('random-access-memory');

var src = path.join(__dirname, '..');
var dest = path.join(__dirname, 'tmp');
fs.mkdirSync(dest);

var getDat = exports.getDat = function getDat(_, _ref) {
  var datHash = _ref.datHash;
  return new _promise2.default(function (resolve, reject) {
    Dat(ram, { key: datHash, sparse: true }, function (err, dat) {
      if (err) throw err;
      var network = dat.joinNetwork();
      network.once('connection', function () {
        console.log('Connected');
      });
      dat.archive.metadata.update(download);

      function download() {
        var progress = mirror({ fs: dat.archive, name: '/' }, dest, function (err) {
          if (err) throw err;
          console.log('Done');
        });
        progress.on('put', function (src) {
          console.log('Downloading', src.name);
        });
      }
      console.log('Downloading: ' + dat.key.toString('hex') + '\n');
      resolve(dat.key.toString('hex'));
    });
  });
};

var shareDat = exports.shareDat = function shareDat(_, _ref2) {
  var file = _ref2.file;
  return new _promise2.default(function (resolve, reject) {
    Dat(src, { temp: true }, function (err, dat) {
      if (err) throw err;

      var network = dat.joinNetwork();
      network.once('connection', function () {
        console.log('Connected');
      });
      var progress = dat.importFiles(src, {
        ignore: ['**/dat-node/node_modules/**']
      }, function (err) {
        if (err) throw err;
        console.log('Done importing');
        console.log('Archive size:', dat.archive.content.byteLength);
      });
      progress.on('put', function (src, dest) {
        console.log('Added', dest.name);
      });

      console.log('Sharing: ' + dat.key.toString('hex') + '\n');
    });
  });
};