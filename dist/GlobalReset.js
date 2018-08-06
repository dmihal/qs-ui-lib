'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _sanitize = require('../node_modules/sanitize.css/sanitize.css');

var _sanitize2 = _interopRequireDefault(_sanitize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import testcss from './testcss.css'

/**
 * This is a global style baseline that is meant to be imported
 * at the top layer of your app
 */

var GlobalReset = function GlobalReset() {
  return _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: _sanitize2.default } });
};

exports.default = GlobalReset;