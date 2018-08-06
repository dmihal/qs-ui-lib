'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx/style');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import GlobalFontsBase from '../globals/fonts-base.js';
// NOTE::::: Using Generated FontFace INSTEAD


var fontFaceFile = require('../assets/fonts/gtwalsheim/stylesheet.css');

/**
 * This is a global style baseline that is meant to be imported
 * at the top layer of your app
 */
var GlobalFonts = function GlobalFonts() {
  return _react2.default.createElement(_style2.default, {
    styleId: fontFaceFile.__hash,
    css: fontFaceFile
  });
};

GlobalFonts.propTypes = {};
GlobalFonts.defaultProps = {};

exports.default = GlobalFonts;