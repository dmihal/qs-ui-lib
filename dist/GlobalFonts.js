'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var gtwalsheim = require('../assets/fonts/gtwalsheim/stylesheet.css');
/**
 * This is a global style baseline that is meant to be imported
 * at the top layer of your app
 */
var GlobalFonts = function GlobalFonts() {
  return _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: gtwalsheim } });
};

exports.default = GlobalFonts;