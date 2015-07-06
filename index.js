/**
 * Produce a lot of log output w/ configurable output intervals
 * INTERVAL_DELAY
 */
'use strict';

var async = require('async');
var uuid = require('node-uuid');

var MAX_SAFE_INTEGER = Math.pow(2, parseInt(process.env.POW));
async.times(MAX_SAFE_INTEGER, function (i, cb) {
  setTimeout(function () {
    console.log(i, uuid.v4());
    cb();
  }, parseInt(process.env.INTERVAL_DELAY));
}, function () {
  console.log([
    '--------------------------',
    'complete',
    '--------------------------'
  ].join(' * '));
});
