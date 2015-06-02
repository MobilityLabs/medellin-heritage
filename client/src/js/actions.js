'use strict';

var Reflux = require('reflux');

var _actions = [
  'search', 
  'filter',
  'toggleView',
];

module.exports = Reflux.createActions(_actions);

